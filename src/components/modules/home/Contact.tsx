'use client'
import React, { useState } from "react";
import {
  FaPaperPlane,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaLink,
} from "react-icons/fa";

// Short Neomorphism + Unique Borders/Lines
const outerWrapper =
  "relative py-16 px-2 md:px-0 max-w-5xl mx-auto flex flex-col items-center";
const cardGrid =
  "w-full bg-white rounded-3xl shadow-[0_4px_24px_0_rgba(31,38,135,0.10)] overflow-hidden border-2 border-[#e0e5ec] border-b-4 border-b-blue-200 border-r-4 border-r-blue-100 flex flex-col md:flex-row";
const leftPanel =
  "flex flex-col justify-between py-10 px-6 md:px-8 bg-white text-black border-r-2 border-r-[#e0e5ec] border-dashed relative md:w-1/2 w-full";
const infoList =
  "flex flex-col gap-6 w-full";
const infoItem =
  "flex items-center gap-4 border-b border-[#e0e5ec] last:border-b-0 pb-4";
const iconBox =
  "w-8 h-8 flex items-center justify-center rounded-full border-2 border-[#e0e5ec] bg-[#f5f6fa] shadow-[0_2px_8px_0_rgba(31,38,135,0.07)] text-black text-xl";
const infoLabel =
  "text-xs text-black font-semibold";
const infoValue =
  "text-sm text-black";
const socialRow =
  "flex gap-4 mt-2 border-t border-[#e0e5ec] pt-3";
const socialIcon =
  "w-10 h-10 flex items-center justify-center rounded-full border-2 border-[#e0e5ec] bg-[#f5f6fa] text-black hover:bg-blue-50 hover:text-blue-600 transition text-lg shadow-[0_1px_4px_0_rgba(31,38,135,0.06)]";
const sendBtn =
  "mt-6 px-6 py-2 border-2 border-[#e0e5ec] bg-gradient-to-b from-[#f5f6fa] to-[#e0e5ec] text-black rounded-xl shadow-[0_2px_8px_0_rgba(31,38,135,0.07)] transition hover:bg-blue-50 hover:text-blue-700 flex items-center gap-2";
const rightPanel =
  "bg-white py-10 px-6 md:px-8 flex flex-col justify-center w-full";
const fieldInput =
  "w-full px-3 py-2 rounded-lg border-2 border-[#e0e5ec] bg-[#f5f6fa] text-black placeholder-black focus:outline-none focus:border-blue-300 transition shadow-[0_1px_4px_0_rgba(31,38,135,0.06)]";
const fieldTextarea =
  "w-full px-3 py-2 rounded-lg border-2 border-[#e0e5ec] bg-[#f5f6fa] text-black placeholder-black focus:outline-none focus:border-blue-300 transition min-h-[100px] resize-none shadow-[0_1px_4px_0_rgba(31,38,135,0.06)]";
const fieldLabel =
  "block text-black font-semibold mb-1 text-sm";
const statusMsg =
  "mt-4 font-semibold text-center transition";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
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
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
    setTimeout(() => setStatus("idle"), 3500);
  };

  return (
    <section id="contact" className={outerWrapper}>
      <div className={cardGrid}>
        {/* Left: Contact Info */}
        <div className={leftPanel}>
          <div className={infoList}>
            <div className={infoItem}>
              <span className={iconBox}><FaMapMarkerAlt /></span>
              <div>
                <div className={infoLabel}>Location</div>
                <div className={infoValue}>Boston, USA</div>
              </div>
            </div>
            <div className={infoItem}>
              <span className={iconBox}><FaEnvelope /></span>
              <div>
                <div className={infoLabel}>Email</div>
                <a href="mailto:alex.johnson@email.com" className={infoValue + " hover:underline"}>
                  alex.johnson@email.com
                </a>
              </div>
            </div>
            <div className={infoItem}>
              <span className={iconBox}><FaPhoneAlt /></span>
              <div>
                <div className={infoLabel}>Phone</div>
                <a href="tel:+18005550117" className={infoValue + " hover:underline"}>
                  +1 800 555 0117
                </a>
              </div>
            </div>
            <div className="mt-2">
              <div className={infoLabel + " mb-2"}>Social Links</div>
              <div className={socialRow}>
                <a
                  href="https://facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={socialIcon}
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://github.com/alexjohnson"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={socialIcon}
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://linkedin.com/in/alexjohnson"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={socialIcon}
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://alexjohnson.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={socialIcon}
                  aria-label="Website"
                >
                  <FaLink />
                </a>
              </div>
            </div>
          </div>
          <div className="w-full border-t-2 border-dashed border-[#e0e5ec] my-6"></div>
          {/* Removed Send Message button from left panel */}
        </div>
        {/* Right: Contact Form - now full width on all screens */}
        <div className={rightPanel + " md:w-1/2 w-full"}>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit} autoComplete="off">
            <div>
              <label htmlFor="name" className={fieldLabel}>
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className={fieldInput}
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                required
                autoComplete="off"
              />
            </div>
            <div>
              <label htmlFor="email" className={fieldLabel}>
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className={fieldInput}
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
                autoComplete="off"
              />
            </div>
            <div>
              <label htmlFor="message" className={fieldLabel}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className={fieldTextarea}
                placeholder="Message"
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>
            <div className="w-full border-t-2 border-dashed border-[#e0e5ec] my-2"></div>
            <button
              type="submit"
              className={sendBtn + " w-fit self-end"}
              disabled={status === "sending"}
            >
              <FaPaperPlane className="text-base" />
              {status === "sending"
                ? "Sending..."
                : status === "sent"
                ? "Message Sent!"
                : status === "error"
                ? "Error! Try Again"
                : "Send Message"}
            </button>
          </form>
          {status === "sent" && (
            <div className={statusMsg + " text-black"}>
              Thank you! Your message has been sent.
            </div>
          )}
          {status === "error" && (
            <div className={statusMsg + " text-black"}>
              Oops! Something went wrong. Please try again.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
