from typing import Annotated

from backend.db.session import get_db
from fastapi import Depends, FastAPI
from sqlalchemy import text
from sqlalchemy.ext.asyncio import AsyncSession

app = FastAPI()


@app.get("/api/health")
async def health_check():
    return {"status": "ok"}


@app.get("/api/health/db")
async def health_check_db(db: Annotated[AsyncSession, Depends(get_db)]):
    result = await db.execute(text("SELECT 1"))
    value = result.scalar()
    return {"status": "ok", "value": value}
