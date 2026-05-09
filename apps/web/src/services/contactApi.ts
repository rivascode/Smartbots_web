import type { ContactRequest, ContactResponse } from "@smartbots/shared";

const apiBaseUrl = import.meta.env.VITE_API_URL ?? "";

export async function submitContactRequest(payload: ContactRequest): Promise<ContactResponse> {
  const response = await fetch(`${apiBaseUrl}/api/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    const errorBody = await response.json().catch(() => null);
    throw new Error(errorBody?.message ?? "No pudimos enviar la solicitud.");
  }

  return response.json() as Promise<ContactResponse>;
}
