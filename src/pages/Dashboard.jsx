import React, { useEffect, useState } from "react";
import { getSession, clearSession } from "../auth/session";
import { useNavigate, Link } from "react-router-dom";
import { TicketService } from "../services/ticketService";
import { toast } from "react-toastify";

export default function Dashboard() {
  const [stats, setStats] = useState({
    total: 0,
    open: 0,
    in_progress: 0,
    closed: 0,
  });
  const navigate = useNavigate();

  useEffect(() => {
    const load = async () => {
      try {
        const all = await TicketService.list();
        const total = all.length;
        const open = all.filter((t) => t.status === "open").length;
        const in_progress = all.filter(
          (t) => t.status === "in_progress"
        ).length;
        const closed = all.filter((t) => t.status === "closed").length;
        setStats({ total, open, in_progress, closed });
      } catch (err) {
        toast.error("Failed to load tickets. Please retry.");
      }
    };
    load();
  }, []);

  const logout = () => {
    clearSession();
    toast.info("Your session has expired — please log in again.");
    navigate("/auth/login");
  };

  return (
    <main className="page-container">
      <header className="dashboard-header">
        <h1>Dashboard</h1>
        <div className="header-actions">
          <Link to="/tickets" className="btn btn-outline">
            Manage Tickets
          </Link>
          <button onClick={logout} className="btn">
            Logout
          </button>
        </div>
      </header>

      <section className="stats-grid" aria-live="polite">
        <div className="card stat">
          Total <strong>{stats.total}</strong>
        </div>
        <div className="card stat">
          Open <strong className="status-open">{stats.open}</strong>
        </div>
        <div className="card stat">
          In Progress{" "}
          <strong className="status-warn">{stats.in_progress}</strong>
        </div>
        <div className="card stat">
          Closed <strong className="status-closed">{stats.closed}</strong>
        </div>
      </section>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} TicketApp</p>
      </footer>
    </main>
  );
}
