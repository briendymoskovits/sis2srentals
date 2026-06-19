import Image from "next/image";
import Link from "next/link";
import { gowns } from "@/lib/gowns";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section with New Image */}
      <section className="relative pt-20 pb-12">
        <div className="w-full relative">
          <Image
            src="/hero-chanie.png"
            alt="Sis2Sis - Sisters in Style"
            width={1200}
            height={1600}
            className="w-full h-auto"
            priority
          />
          {/* White overlay to cover "gowns" and original "INSPIRED BY" text */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white via-white via-70% to-transparent pt-44 pb-10">
            <div className="text-center">
              {/* Beautiful script-style "Inspired by: Chanie Katz" */}
              <p className="text-2xl md:text-3xl font-serif italic text-amber-800/70 tracking-widest uppercase mb-1">
                Inspired by
              </p>
              <p className="text-4xl md:text-5xl font-serif italic text-amber-900 tracking-wide" style={{fontStyle: 'italic'}}>
                Chanie Katz
              </p>
            </div>
          </div>
        </div>

        {/* Meet Chanie Button */}
        <div className="flex justify-center px-4 mt-6">
          <Link
            href="/about"
            className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-12 py-5 rounded-full shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 transform hover:scale-105"
          >
            <span className="text-3xl md:text-4xl font-serif italic">
              Meet Chanie Katz
            </span>
          </Link>
        </div>
      </section>

      {/* CTA Buttons Section */}
      <section className="bg-rose-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/book"
              className="px-8 py-4 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors font-medium text-lg min-w-[280px]"
            >
              Book an Appointment
            </Link>
            <Link
              href="/collection"
              className="px-8 py-4 bg-white border-2 border-amber-600 text-amber-700 rounded-lg hover:bg-amber-50 transition-colors font-medium text-lg min-w-[280px]"
            >
              Browse & Book Online
            </Link>
          </div>
          <Link
            href="/about"
            className="inline-block mt-8 text-amber-700 hover:text-amber-800 font-medium underline"
          >
            Learn about Chanie's Story →
          </Link>
        </div>
      </section>

      {/* The Heart Behind Sis2Sis Section */}
      <section className="py-20 bg-rose-100/40">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif text-center text-gray-900 mb-8">
            The Heart Behind Sis2Sis
          </h2>
          <p className="text-center text-gray-700 text-lg mb-6 max-w-4xl mx-auto">
            This isn't just a gown rental service. It's a celebration of Chanie Katz — a young woman whose humor, warmth, and
            light inspire kindness and connection in everyone she meets.
          </p>
          <p className="text-center text-gray-700 text-lg mb-12 max-w-4xl mx-auto">
            From "What's your name?" to "I got you" — Chanie's playful spirit and genuine care remind us that the best
            moments are the ones we share. Sis2Sis is her legacy: helping sisters look and feel their best, one gown at a time.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <p className="text-2xl italic text-amber-700 font-serif">"What's your name?"</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <p className="text-2xl italic text-amber-700 font-serif">"Put your phone down."</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <p className="text-2xl italic text-amber-700 font-serif">"I got you."</p>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/about"
              className="inline-block px-8 py-4 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors font-medium"
            >
              Read Chanie's Full Story
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif text-center text-gray-900 mb-16">
            How It Works
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-2xl font-serif text-gray-900 mb-4">Browse & Choose</h3>
              <p className="text-gray-600">
                Explore our curated collection online or book an in-person fitting to find your perfect gown.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-2xl font-serif text-gray-900 mb-4">Reserve Your Date</h3>
              <p className="text-gray-600">
                Check availability and reserve your gown for your special event. Easy online booking.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-2xl font-serif text-gray-900 mb-4">Shine & Return</h3>
              <p className="text-gray-600">
                Wear your gown with confidence, then return it when you're done. We handle the cleaning!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Collection Preview */}
      <section className="py-20 bg-rose-50/50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif text-center text-gray-900 mb-4">
            Our Collection
          </h2>
          <p className="text-center text-gray-600 text-lg mb-4 max-w-3xl mx-auto">
            Designer gowns for every simcha and celebration. Each piece is carefully curated to
            make you feel beautiful and confident.
          </p>
          <p className="text-center text-amber-700 font-semibold text-xl mb-2">
            $125 per rental - Cleaning Included
          </p>
          <p className="text-center text-gray-600 mb-12">
            Donations are always welcome and help us continue Chanie's legacy
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {gowns.slice(0, 8).map((gown) => (
              <div key={gown.id} className="group cursor-pointer">
                <div className="aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden mb-4 relative">
                  <Image
                    src={gown.image}
                    alt={gown.name}
                    width={400}
                    height={533}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Image Coming Soon Overlay */}
                  <div className="absolute inset-0 bg-white/70 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-2xl font-serif italic text-gray-800 mb-2">Image</p>
                      <p className="text-xl font-serif italic text-gray-800">Coming Soon</p>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mb-1">{gown.id}</p>
                <h3 className="font-semibold text-gray-900 mb-1">{gown.designer}</h3>
                <p className="text-gray-600 text-sm mb-2">{gown.name}</p>
                <p className="text-amber-700 font-medium">${gown.price} rental</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/collection"
              className="inline-block px-8 py-4 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors font-medium"
            >
              View Full Collection
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
