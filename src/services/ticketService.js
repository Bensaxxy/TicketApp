const KEY = "ticketapp_tickets_v1";

function readAll() {
  const raw = localStorage.getItem(KEY);
  return raw ? JSON.parse(raw) : [];
}

function writeAll(list) {
  localStorage.setItem(KEY, JSON.stringify(list));
}

export const TicketService = {
  list() {
    return Promise.resolve(readAll());
  },
  create(ticket) {
    const all = readAll();
    const id = Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
    const newTicket = { id, createdAt: Date.now(), ...ticket };
    all.unshift(newTicket);
    writeAll(all);
    return Promise.resolve(newTicket);
  },
  update(id, patch) {
    const all = readAll();
    const idx = all.findIndex((t) => t.id === id);
    if (idx === -1) return Promise.reject(new Error("Ticket not found"));
    all[idx] = { ...all[idx], ...patch, updatedAt: Date.now() };
    writeAll(all);
    return Promise.resolve(all[idx]);
  },
  delete(id) {
    const all = readAll();
    const filtered = all.filter((t) => t.id !== id);
    writeAll(filtered);
    return Promise.resolve();
  },
};
