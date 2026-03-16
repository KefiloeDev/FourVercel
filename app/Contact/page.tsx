"use client";

import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { name, email, subject, message } = form;
    if (!name || !email || !subject || !message) {
      alert("Please fill in all fields");
      return false;
    }
    return true;
  };

  const sendWhatsApp = () => {
    if (!validateForm()) return;

    const { name, email, subject, message } = form;

    const phoneNumber = "27719477676"; // WhatsApp number (no +)

    const whatsappMessage = `
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
    `;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(url, "_blank");
  };

  const sendEmail = async () => {
  const { name, email, subject, message } = form;

  if (!name || !email || !subject || !message) {
    alert("Please fill in all fields");
    return;
  }

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, subject, message }),
    });

    if (!res.ok) throw new Error();

    alert("Message sent successfully!");
    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  } catch {
    alert("Failed to send message. Please try again.");
  }
};


  return (
    <div className="pt-16 pb-16 bg-gray-200">
      <div className="max-w-2xl mx-auto mt-16">
        <div
          data-aos="zoom-in"
          data-aos-anchor-placement="top-center"
          data-aos-delay="0"
          className="bg-gray-900 rounded-xl p-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Name*"
            value={form.name}
            onChange={handleChange}
            className="border-2 mt-6 border-gray-600 w-full px-6 py-3 rounded-full mb-6 placeholder:text-white text-white bg-transparent"
          />

          <input
            type="email"
            name="email"
            placeholder="Email*"
            value={form.email}
            onChange={handleChange}
            className="border-2 border-gray-600 w-full px-6 py-3 rounded-full mb-6 placeholder:text-white text-white bg-transparent"
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject*"
            value={form.subject}
            onChange={handleChange}
            className="border-2 border-gray-600 w-full px-6 py-3 rounded-full mb-6 placeholder:text-white text-white bg-transparent"
          />

          <textarea
            name="message"
            rows={5}
            placeholder="Comments*"
            value={form.message}
            onChange={handleChange}
            className="border-2 border-gray-600 w-full px-6 py-3 rounded-3xl mb-6 placeholder:text-white text-white bg-transparent"
          />

          <div className="flex flex-col md:flex-row gap-4">
            <button
              onClick={sendWhatsApp}
              className="w-full px-6 py-3 bg-[#25D366] uppercase cursor-pointer rounded-full text-white font-semibold"
            >
              Send via WhatsApp
            </button>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
