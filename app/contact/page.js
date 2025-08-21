"use client"
import { useState } from "react"

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Thanks for reaching out! We'll get back to you soon 😊")
    setForm({ name: "", email: "", message: "" })
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] bg-gradient-to-br from-pink-100 via-purple-100 to-purple-200 px-6">
      <div className="bg-white/80 backdrop-blur-md shadow-2xl rounded-2xl p-10 max-w-2xl w-full space-y-6">
        
        <h1 className="text-4xl font-extrabold text-pink-600 text-center">Contact Us</h1>
        
        <p className="text-gray-700 text-center text-lg">
          Have a question, suggestion, or just want to say hi? We’d love to hear from you! 💌
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pink-400 outline-none text-gray-700 shadow-sm"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pink-400 outline-none text-gray-700 shadow-sm"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            rows="4"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pink-400 outline-none text-gray-700 shadow-sm"
          ></textarea>
          
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-pink-400/50"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}
