"use client";

import { useState } from "react";

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");
}

export default function BookPage() {
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    eventType: "",
    message: "",
  });

  // Available time slots - restrict Friday after 2pm
  const allTimeSlots = [
    { time: "10:00 AM", value: 10 },
    { time: "11:00 AM", value: 11 },
    { time: "12:00 PM", value: 12 },
    { time: "1:00 PM", value: 13 },
    { time: "2:00 PM", value: 14 },
    { time: "3:00 PM", value: 15 },
    { time: "4:00 PM", value: 16 },
    { time: "5:00 PM", value: 17 },
    { time: "6:00 PM", value: 18 }
  ];

  // Check if selected date is Friday or Saturday
  const getSelectedDayOfWeek = () => {
    if (!selectedDate) return -1;
    const date = new Date(selectedDate + 'T00:00:00');
    return date.getDay(); // 0 = Sunday, 5 = Friday, 6 = Saturday
  };

  // Filter time slots based on the selected day
  const getAvailableTimeSlots = () => {
    const dayOfWeek = getSelectedDayOfWeek();

    // Friday (5) - only show times until 2pm
    if (dayOfWeek === 5) {
      return allTimeSlots.filter(slot => slot.value <= 14);
    }

    // All other days - show all times
    return allTimeSlots;
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = e.target.value;
    const date = new Date(newDate + 'T00:00:00');
    const dayOfWeek = date.getDay();

    // Block Saturday (6)
    if (dayOfWeek === 6) {
      alert("We're closed on Saturdays. Please select a different day.");
      return;
    }

    setSelectedDate(newDate);
    setFormData({...formData, eventDate: newDate});
    setSelectedTime(""); // Reset time when date changes
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "booking",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          eventType: formData.eventType,
          message: formData.message,
          preferredDate: selectedDate || formData.eventDate,
          preferredTime: selectedTime || "Not specified",
        }),
      });
      setStatus("success");
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

  const dayOfWeek = getSelectedDayOfWeek();
  const isFriday = dayOfWeek === 5;

  return (
    <main className="min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-serif text-center text-gray-900 mb-4">
          Book an Appointment
        </h1>
        <p className="text-center text-gray-600 text-lg mb-4 max-w-2xl mx-auto">
          Schedule a fitting to find your perfect gown. We'll help you look and feel your best for your special day.
        </p>
        <div className="text-center mb-8">
          <p className="text-2xl font-semibold text-amber-700 mb-2">
            $125 per rental - Cleaning Included
          </p>
          <p className="text-gray-600">
            Donations are always welcome and help us continue Chanie's legacy
          </p>
        </div>

        {/* Calendar Booking Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-serif text-gray-900 mb-6 text-center">
            Select Your Appointment Date & Time
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Date Picker */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Choose a Date *
              </label>
              <input
                type="date"
                value={selectedDate}
                onChange={handleDateChange}
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-lg"
              />
              <p className="text-xs text-gray-500 mt-2">
                Closed Fridays after 2pm & all day Saturday
              </p>
            </div>

            {/* Time Picker */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Preferred Time
              </label>
              {!selectedDate ? (
                <div className="flex items-center justify-center h-full text-gray-400 text-sm">
                  Please select a date first
                </div>
              ) : (
                <>
                  {isFriday && (
                    <div className="mb-3 text-sm text-amber-700 bg-amber-50 p-2 rounded">
                      Friday: Available until 2pm only
                    </div>
                  )}
                  <div className="grid grid-cols-3 gap-2 max-h-64 overflow-y-auto">
                    {getAvailableTimeSlots().map((slot) => (
                      <button
                        key={slot.time}
                        type="button"
                        onClick={() => setSelectedTime(slot.time)}
                        className={`px-3 py-2 text-sm rounded-lg border-2 transition-colors ${
                          selectedTime === slot.time
                            ? 'bg-amber-600 text-white border-amber-600'
                            : 'bg-white text-gray-700 border-gray-300 hover:border-amber-500'
                        }`}
                      >
                        {slot.time}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          {selectedDate && selectedTime && (
            <div className="mt-6 p-4 bg-green-50 border-2 border-green-200 rounded-lg text-center">
              <p className="text-green-800 font-medium">
                ✓ Selected: {new Date(selectedDate + 'T00:00:00').toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} at {selectedTime}
              </p>
            </div>
          )}

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Questions? WhatsApp/Text/Call us at <a href="tel:+19175146253" className="text-amber-700 font-semibold">917-514-6253</a>
            </p>
          </div>
        </div>

        <div className="text-center mb-8">
          <p className="text-gray-600 text-lg font-medium">
            Complete Your Information Below:
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-serif text-gray-900 mb-6 text-center">
            Appointment Request Form
          </h2>
          {status === "success" ? (
            <div className="bg-green-50 border-2 border-green-200 rounded-lg p-8 text-center">
              <p className="text-green-800 font-medium text-lg">
                Thank you, {formData.name}! Your booking request has been received. We'll confirm your appointment within 24 hours.
              </p>
            </div>
          ) : (
          <form
            name="booking"
            method="POST"
            data-netlify="true"
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <input type="hidden" name="form-name" value="booking" />
            <input type="hidden" name="preferredDate" value={selectedDate || formData.eventDate} />
            <input type="hidden" name="preferredTime" value={selectedTime || "Not specified"} />
            <p className="hidden">
              <label>
                Don't fill this out if you're human: <input name="bot-field" />
              </label>
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
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
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                />
              </div>

              <div>
                <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700 mb-2">
                  Event Date *
                </label>
                <input
                  type="date"
                  id="eventDate"
                  name="eventDate"
                  required
                  value={formData.eventDate}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                />
              </div>
            </div>

            <div>
              <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 mb-2">
                Event Type *
              </label>
              <select
                id="eventType"
                name="eventType"
                required
                value={formData.eventType}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              >
                <option value="">Select an event type</option>
                <option value="wedding">Wedding</option>
                <option value="bat-mitzvah">Bat Mitzvah</option>
                <option value="engagement">Engagement</option>
                <option value="other">Other Celebration</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Additional Information
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your event, preferred gown styles, or any questions you have..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              />
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full px-8 py-4 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors font-medium text-lg disabled:opacity-60"
            >
              {status === "submitting" ? "Submitting..." : "Submit Booking Request"}
            </button>
            {status === "error" && (
              <p className="text-red-600 text-sm text-center">
                Something went wrong. Please try again or text/call us at 917-514-6253.
              </p>
            )}
          </form>
          )}
        </div>

        <div className="mt-12 bg-rose-50 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-serif text-gray-900 mb-4">
            What to Expect
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div>
              <div className="text-4xl mb-2">📅</div>
              <h3 className="font-semibold text-gray-900 mb-2">Schedule Your Visit</h3>
              <p className="text-gray-600 text-sm">
                We'll confirm your appointment within 24 hours
              </p>
            </div>
            <div>
              <div className="text-4xl mb-2">👗</div>
              <h3 className="font-semibold text-gray-900 mb-2">Try On Gowns</h3>
              <p className="text-gray-600 text-sm">
                Explore our collection and find your perfect fit
              </p>
            </div>
            <div>
              <div className="text-4xl mb-2">✨</div>
              <h3 className="font-semibold text-gray-900 mb-2">Reserve & Shine</h3>
              <p className="text-gray-600 text-sm">
                Reserve your gown and get ready to sparkle!
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
