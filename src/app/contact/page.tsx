"use client";

import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...formData }),
      });
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="min-h-screen pt-20">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-serif text-center text-gray-900 mb-4">
          Contact Us
        </h1>
        <p className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
          Have questions about our gowns or want to donate? We'd love to hear from you!
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-serif text-gray-900 mb-6">Send Us a Message</h2>
            {status === "success" ? (
              <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6 text-center">
                <p className="text-green-800 font-medium text-lg">
                  Thank you! Your message has been sent. We'll get back to you soon.
                </p>
              </div>
            ) : (
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>
                  Don't fill this out if you're human: <input name="bot-field" />
                </label>
              </p>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="booking">Booking Question</option>
                  <option value="donation">Donate a Gown</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full px-8 py-4 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors font-medium disabled:opacity-60"
              >
                {status === "submitting" ? "Sending..." : "Send Message"}
              </button>
              {status === "error" && (
                <p className="text-red-600 text-sm text-center">
                  Something went wrong. Please try again or email us directly at hello@sis2sis.com.
                </p>
              )}
            </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-rose-50 rounded-lg p-8">
              <h2 className="text-2xl font-serif text-gray-900 mb-6">Get in Touch</h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-amber-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a href="mailto:hello@sis2sis.com" className="text-gray-600 hover:text-amber-700">
                      hello@sis2sis.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-amber-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">WhatsApp / Text / Call</h3>
                    <a href="tel:+19175146253" className="text-gray-600 hover:text-amber-700">
                      917-514-6253
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-amber-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                    <p className="text-gray-600">
                      Available by appointment<br />
                      Jackson, NJ
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 rounded-lg p-8">
              <h2 className="text-2xl font-serif text-gray-900 mb-4">Donate a Gown</h2>
              <p className="text-gray-700 mb-4">
                Have a beautiful gown you'd like to share? Your donation helps us continue Chanie's legacy
                of spreading joy and making special occasions accessible to everyone.
              </p>
              <p className="text-gray-700 mb-6">
                Contact us to learn more about our gown donation program.
              </p>
              <a
                href="mailto:donate@sis2sis.com"
                className="inline-block px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors font-medium"
              >
                Email About Donations
              </a>
            </div>

            <div className="bg-white rounded-lg p-8 border-2 border-rose-100">
              <h3 className="text-xl font-serif text-gray-900 mb-3">Hours</h3>
              <div className="space-y-2 text-gray-600">
                <p><span className="font-medium">Sunday - Thursday:</span> By appointment</p>
                <p><span className="font-medium">Friday:</span> Closed</p>
                <p><span className="font-medium">Saturday:</span> Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
