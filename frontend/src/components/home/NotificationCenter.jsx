import { useEffect, useState } from "react";

export default function NotificationCenter({ sos }) {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    if (!sos) return;

    setNotifications([]);

    const messages = [
      "🚨 SOS Received",
      "📍 Patient Location Detected",
      "🚑 Ambulance Assigned",
      "🏥 Hospital Confirmed",
      "🛣️ Fastest Route Calculated",
    ];

    messages.forEach((msg, index) => {
      setTimeout(() => {
        setNotifications((prev) => [...prev, msg]);
      }, (index + 1) * 1000);
    });

  }, [sos]);

  if (!sos) return null;

  return (
    <section className="max-w-7xl mx-auto mt-10 px-6">
      <div className="bg-white rounded-2xl shadow-xl p-6">
        <h2 className="text-2xl font-bold text-red-600 mb-6">
          🔔 Live Notifications
        </h2>

        <div className="space-y-3">
          {notifications.map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg px-4 py-3 border-l-4 border-red-500"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}