export default async function loginData(formData) {
  const res = await fetch("/api/login", {
    method: "post",
    body: JSON.stringify(formData),
  });
  const data = await res.json();
  if (!res.ok) {
    throw {
      message: data.message,
      statusText: data.statusText,
      status: res.status,
    };
  }

  return data;
}
