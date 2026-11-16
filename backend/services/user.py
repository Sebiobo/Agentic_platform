from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from core.security import hash_password, verify_password
from models.user import User
from schemas.user import UserCreate

_DUMMY_HASH = hash_password("not_a_real_password")


async def get_user_by_email(db: AsyncSession, email: str) -> User | None:
    result = await db.execute(select(User).where(User.email == email))
    return result.scalar_one_or_none()


async def create_user(db: AsyncSession, user_create: UserCreate) -> User:
    user = User(
        email=user_create.email,
        name=user_create.name,
        hashed_password=hash_password(user_create.password),
    )
    db.add(user)
    await db.commit()
    await db.refresh(user)
    return user


async def authenticate_user(db: AsyncSession, email: str, passord: str) -> User | None:
    user = await get_user_by_email(db, email.lower().strip())
    if user is None or user.hashed_password is None:
        verify_password(passord, _DUMMY_HASH)
        return None
    if not verify_password(passord, user.hashed_password):
        return None
    return user
