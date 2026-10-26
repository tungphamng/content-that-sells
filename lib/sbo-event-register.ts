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
  let res: Response;
  try {
    res = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch {
    throw new Error(
      "Không kết nối được máy chủ đăng ký. Kiểm tra mạng và thử lại.",
    );
  }

  let data: SboRegisterResponse;
  try {
    data = (await res.json()) as SboRegisterResponse;
  } catch {
    throw new Error("Phản hồi từ máy chủ không hợp lệ. Vui lòng thử lại.");
  }
  return { ok: res.ok, data };
}
