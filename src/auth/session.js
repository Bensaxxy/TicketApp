const KEY = "ticketapp_session";

export function setSession(userObj) {
  localStorage.setItem(KEY, JSON.stringify(userObj));
}

export function clearSession() {
  localStorage.removeItem(KEY);
}

export function getSession() {
  const raw = localStorage.getItem(KEY);
  return raw ? JSON.parse(raw) : null;
}
