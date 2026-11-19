import Button from "../../../components/ui/Button";
import ButtonLink from "../../../components/ui/ButtonLink";
import { useAuth } from "../useAuth";
import styles from "./UserMenu.module.css";

export default function UserMenu() {
  const { user, loading, logout } = useAuth();

  if (loading) return null;

  if (!user) {
    return (
      <div className={styles.menu}>
        <ButtonLink to="/signin" variant="ghost" size="sm">
          Sign in
        </ButtonLink>
        <ButtonLink to="/signup" size="sm">
          Sign up
        </ButtonLink>
      </div>
    );
  }

  return (
    <div className={styles.menu}>
      <Button variant="ghost" size="sm" onClick={logout}>
        Sign out
      </Button>
    </div>
  );
}