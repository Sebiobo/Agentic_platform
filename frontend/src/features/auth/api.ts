import { apiFetch } from "../../lib/apiClient";

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

export type Token = {
  access_token: string;
  token_type: string;
};

function errorMessage(status: number, detail: unknown): string {
  if (typeof detail === "string") return detail;
  if (Array.isArray(detail)) {
    return detail.map((d) => d.msg).join(", ");
  }
  return `Request failed (${status})`;
}

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

export async function login(email: string, password: string): Promise<Token> {
  const body = new URLSearchParams({ username: email, password });

  const res = await fetch("/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });

  if (!res.ok) {
    const data = await res.json().catch(() => null);
    throw new Error(errorMessage(res.status, data?.detail));
  }
  return res.json();
}

export async function getMe(): Promise<User> {
  const res = await apiFetch("/api/auth/me");
  if (!res.ok) throw new Error("Not authenticated");
  return res.json();
}
