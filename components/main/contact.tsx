"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitMessage("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setSubmitMessage(data.error || "Failed to send message.");
      }
    } catch (error) {
      setSubmitMessage("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl mx-auto p-12 md:p-16 bg-[#03001427] rounded-xl shadow-lg">
      {/* Left: Picture with animated tech background */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center justify-center w-full md:w-1/2 relative"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/tech-bg.svg" // Add a tech-themed SVG to your public folder
            alt="Tech background"
            fill
            style={{ objectFit: "cover", opacity: 0.3 }}
            className="rounded-lg animate-pulse"
          />
        </div>
        <div className="relative z-10 flex flex-col items-center">
          <Image
            src="/profile.PNG" // Add your profile picture to public folder
            alt="Gedion Fikre"
            width={740}
            height={440}
            className="rounded-full border-4 border-purple-500 shadow-2xl animate-fade-in"
            draggable={false}
          />
          <h3 className="mt-6 text-2xl md:text-3xl font-bold text-white">Gedion Fikre</h3>
          <p className="text-purple-300 text-lg">Fullstack Developer</p>
        </div>
      </motion.div>

      {/* Right: Contact Form with animation */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 z-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Me</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="p-3 md:p-4 rounded-lg bg-gray-800 text-white text-lg"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="p-3 md:p-4 rounded-lg bg-gray-800 text-white text-lg"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            rows={6}
            className="p-3 md:p-4 rounded-lg bg-gray-800 text-white text-lg"
          />
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="button-primary py-3 px-6 rounded-lg text-white text-lg w-max disabled:opacity-50"
          >
            {isSubmitting ? "Sending..." : "Send"}
          </motion.button>
          {submitMessage && (
            <p className={`mt-4 text-lg ${submitMessage.includes("successfully") ? "text-green-400" : "text-red-400"}`}>
              {submitMessage}
            </p>
          )}
        </form>
      </motion.div>
    </section>
  );
};