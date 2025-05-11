'use client'
import React, { useState } from "react";
import {
  FaPaperPlane,
  FaEnvelope,
  FaPhoneAlt,
  FaGlobe,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

const outerWrapper = "flex flex-col md:flex-row gap-8   ";
const leftPanel = "flex flex-col  gap-2 w-full md:w-1/3  rounded-lg";
const rightPanel = "flex flex-col w-full md:w-2/3   justify-between shadow-lg  p-5 border";
const infoItem = "flex items-center gap-3 p-5 bg-white shadow-lg border ";
const iconBox = "text-red-500 text-2xl";
const infoLabel = "text-lg font-bold text-gray-800";
const infoValue = "text-sm text-gray-600";
const fieldInput = "w-full p-2 border-b border-gray-300 mb-4 "; // Changed to border-b for bottom border only
const fieldTextarea = "w-full p-2 border-b border-gray-300 mb-4 h-24"; // Changed to border-b for bottom border only
const sendBtn = "bg-red-500 text-white py-4 px-4 rounded-lg hover:bg-red-600 transition";
const statusMsg = "mt-4 text-center font-semibold";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await new Promise((res) => setTimeout(res, 1200));
      setStatus("sent");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
    setTimeout(() => setStatus("idle"), 3500);
  };

  return (
    <section id="contact" className={`${outerWrapper} mt-10 max-w-6xl mx-auto`}>
      <div className={leftPanel}>
        <div className={infoItem}>
          <FaEnvelope className={iconBox} />
          <div>
            <div className={infoLabel}>Email</div>
            <div className={infoValue}>aefjkl@gmail.com</div>
          </div>
        </div>
        <div className={infoItem}>
          <FaPhoneAlt className={iconBox} />
          <div>
            <div className={infoLabel}>Phone</div>
            <div className={infoValue}>+8801719868117</div>
          </div>
        </div>
        <div className={infoItem}>
          <FaGlobe className={iconBox} />
          <div>
            <div className={infoLabel}>Website</div>
            <div className={infoValue}>Visit website</div>
          </div>
        </div>
        <div className={infoItem}>
          <FaGithub className={iconBox} />
          <div>
            <div className={infoLabel}>Github</div>
            <div className={infoValue}>Take A Look on Github</div>
          </div>
        </div>
        <div className={infoItem}>
          <FaLinkedinIn className={iconBox} />
          <div>
            <div className={infoLabel}>LinkedIn</div>
            <div className={infoValue}>View Profile</div>
          </div>
        </div>
      </div>
      <div className={rightPanel}>
        <h2 className="text-2xl font-bold mb-4">Let's Get In Touch</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4" autoComplete="off">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className={fieldInput}
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className={fieldInput}
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className={fieldInput}
            value={form.subject}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            className={fieldTextarea}
            value={form.message}
            onChange={handleChange}
            required
          />
          <button type="submit" className={sendBtn} disabled={status === "sending"}>
            {status === "sending"
              ? "Sending..."
              : status === "sent"
              ? "Message Sent!"
              : status === "error"
              ? "Error! Try Again"
              : "Submit"}
          </button>
        </form>
        {status === "sent" && (
          <div className={statusMsg + " text-green-500"}>
            Thank you! Your message has been sent.
          </div>
        )}
        {status === "error" && (
          <div className={statusMsg + " text-red-500"}>
            Oops! Something went wrong. Please try again.
          </div>
        )}
      </div>
    </section>
  );
}
