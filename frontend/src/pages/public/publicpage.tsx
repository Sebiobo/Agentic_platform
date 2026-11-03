
import { useState } from "react";
import Sidebar from "../../components/sidebar/sidebar";
import "./publicpage.css";

export default function ChatPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className={`app-layout ${sidebarOpen ? "sidebar-visible" : ""}`}>
      <Sidebar
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
      />

      <div className="app-content">
        <main className="chat-page">
          <section className="welcome-section">
            <h1>What are we building today?</h1>

            <p>
              Describe your idea and let's turn it into an app.
            </p>

            <div className="chat-box">
              <textarea
                placeholder="Describe the app you want to build..."
                rows={3}
              />

              <div className="chat-actions">
                <button type="button" className="attach-button">
                  + Attach
                </button>

                <button
                  type="button"
                  className="send-button"
                  aria-label="Send message"
                >
                  ↑
                </button>
              </div>
            </div>

            <div className="suggestions">
              <button type="button">Create a website</button>
              <button type="button">Build a dashboard</button>
              <button type="button">Create an AI app</button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
