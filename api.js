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

async function getAVan(id = "") {
  const res = await fetch(`/api/vans/${id}`);
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

async function getHostVans(id = "") {
  const res = await fetch(`/api/host/vans/${id}`);
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

export { getAVan, getHostVans };
