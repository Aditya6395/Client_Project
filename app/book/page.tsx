"use client"

import { useState } from "react"
import Navbar from "@/components/site/navbar"
import Footer from "@/components/site/footer"
import { Calendar, Clock, CheckCircle } from "lucide-react"

export default function BookPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitMessage("");

  try {
    // ✅ Always use the latest formData from state
    const res = await fetch("/api/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        service: formData.service || "General Inquiry", // ✅ fallback value
        date: formData.date,
        time: formData.time,
        message: formData.message.trim(),
      }),
    });

    const result = await res.json();
    console.log("Server response:", result);

    if (res.ok) {
      setSubmitMessage("✅ Your booking has been submitted successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        date: "",
        time: "",
        message: "",
      });
    } else {
      alert(`❌ Something went wrong: ${result.error || "Please try again."}`);
    }
  } catch (error) {
    console.error("Network error:", error);
    alert("⚠️ Network error. Please try again later.");
  } finally {
    setIsSubmitting(false);
  }
};




  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <>
      <Navbar />
      <Footer />
    </>
  )
}
