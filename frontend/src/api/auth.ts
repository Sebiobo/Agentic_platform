export type RegisterData = {
  email: string;
  password: string;
  name?: string;
};

export type User = {
  id: string;
  email: string;
  name: string | null;
  created_at: string;
};

export async function register(data: RegisterData): Promise<User> {
  const res = await fetch("/api/auth/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const body = await res.json().catch(() => null);
    throw new Error(errorMessage(res.status, body?.detail));
  }
  return res.json();
}

function errorMessage(status: number, detail: unknown): string {
  if (typeof detail === "string") return detail;
  if (Array.isArray(detail)) {
    return detail.map((d) => d.msg).join(", ");
  }
  return `Request failed (${status})`;
}