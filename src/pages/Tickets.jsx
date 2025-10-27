import React, { useEffect, useState } from "react";
import { TicketService } from "../services/ticketService";
import { toast } from "react-toastify";

const initialForm = {
  title: "",
  status: "open",
  description: "",
  priority: "normal",
};
const STATUS_VALUES = ["open", "in_progress", "closed"];

function TicketCard({ t, onEdit, onDelete }) {
  return (
    <article className="ticket-card" aria-labelledby={`t-${t.id}`}>
      <header>
        <h3 id={`t-${t.id}`}>{t.title}</h3>
        <span className={`status status-${t.status}`}>
          {t.status.replace("_", " ")}
        </span>
      </header>
      <p>{t.description}</p>
      <small>Priority: {t.priority}</small>
      <div className="card-actions">
        <button onClick={() => onEdit(t)} className="btn-small">
          Edit
        </button>
        <button onClick={() => onDelete(t)} className="btn-small btn-danger">
          Delete
        </button>
      </div>
    </article>
  );
}

export default function Tickets() {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState(initialForm);
  const [editingId, setEditingId] = useState(null);
  const [errors, setErrors] = useState({});

  useEffect(() => load(), []);

  async function load() {
    setLoading(true);
    try {
      const all = await TicketService.list();
      setTickets(all);
    } catch (e) {
      toast.error("Failed to load tickets. Please retry.");
    } finally {
      setLoading(false);
    }
  }

  function validate(values) {
    const e = {};
    if (!values.title || !values.title.trim()) e.title = "Title is required";
    if (!STATUS_VALUES.includes(values.status))
      e.status = "Status must be open, in_progress or closed";
    if (values.description && values.description.length > 1000)
      e.description = "Description too long";
    return e;
  }

  const submit = async (ev) => {
    ev && ev.preventDefault();
    const e = validate(form);
    setErrors(e);
    if (Object.keys(e).length) return;

    try {
      if (editingId) {
        await TicketService.update(editingId, form);
        toast.success("Ticket updated");
      } else {
        await TicketService.create(form);
        toast.success("Ticket created");
      }
      setForm(initialForm);
      setEditingId(null);
      load();
    } catch (err) {
      toast.error("Failed to save ticket");
    }
  };

  const startEdit = (t) => {
    setEditingId(t.id);
    setForm({
      title: t.title,
      status: t.status,
      description: t.description || "",
      priority: t.priority || "normal",
    });
  };

  const doDelete = async (t) => {
    if (!confirm("Delete this ticket?")) return;
    try {
      await TicketService.delete(t.id);
      toast.success("Ticket deleted");
      load();
    } catch (err) {
      toast.error("Failed to delete ticket");
    }
  };

  return (
    <main className="page-container">
      <header className="dashboard-header">
        <h1>Tickets</h1>
        <div>
          <button
            onClick={() => {
              setForm(initialForm);
              setEditingId(null);
            }}
            className="btn btn-outline"
          >
            New Ticket
          </button>
        </div>
      </header>

      <section className="form-card" aria-live="polite">
        <h2>{editingId ? "Edit Ticket" : "Create Ticket"}</h2>
        <form onSubmit={submit} noValidate>
          <label>
            Title <span aria-hidden>*</span>
          </label>
          <input
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />
          {errors.title && <small className="error">{errors.title}</small>}

          <label>
            Status <span aria-hidden>*</span>
          </label>
          <select
            value={form.status}
            onChange={(e) => setForm({ ...form, status: e.target.value })}
          >
            {STATUS_VALUES.map((s) => (
              <option key={s} value={s}>
                {s.replace("_", " ")}
              </option>
            ))}
          </select>
          {errors.status && <small className="error">{errors.status}</small>}

          <label>Description</label>
          <textarea
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          />

          <label>Priority</label>
          <select
            value={form.priority}
            onChange={(e) => setForm({ ...form, priority: e.target.value })}
          >
            <option value="low">Low</option>
            <option value="normal">Normal</option>
            <option value="high">High</option>
          </select>

          <div className="form-actions">
            <button type="submit" className="btn">
              {editingId ? "Save" : "Create"}
            </button>
            {editingId && (
              <button
                type="button"
                onClick={() => {
                  setEditingId(null);
                  setForm(initialForm);
                }}
                className="btn btn-outline"
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </section>

      <section className="tickets-grid" aria-live="polite">
        {loading ? (
          <p>Loading...</p>
        ) : tickets.length === 0 ? (
          <p>No tickets yet</p>
        ) : (
          tickets.map((t) => (
            <TicketCard
              key={t.id}
              t={t}
              onEdit={startEdit}
              onDelete={doDelete}
            />
          ))
        )}
      </section>

      <footer className="site-footer">
        © {new Date().getFullYear()} TicketApp
      </footer>
    </main>
  );
}
