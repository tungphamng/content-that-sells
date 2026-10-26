export type SboRegisterPayload = {
  name: string;
  phone: string;
  email: string;
  customData: Record<string, string>;
};

export type SboRegisterResponse = {
  success?: boolean;
  error?: string;
  redirectTo?: string;
};

export async function submitSboEventRegistration(
  apiUrl: string,
  payload: SboRegisterPayload,
): Promise<{ ok: boolean; data: SboRegisterResponse }> {
  const res = await fetch(apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const data = (await res.json()) as SboRegisterResponse;
  return { ok: res.ok, data };
}
