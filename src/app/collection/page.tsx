import Image from "next/image";
import { gowns } from "@/lib/gowns";

export default function CollectionPage() {
  return (
    <main className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-serif text-center text-gray-900 mb-4">
          Our Collection
        </h1>
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {gowns.map((gown) => (
            <div key={gown.id} className="group cursor-pointer">
              <div className="aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden mb-4 relative">
                <Image
                  src={gown.image}
                  alt={gown.name}
                  width={400}
                  height={533}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
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
              {gown.available ? (
                <span className="inline-block mt-2 text-xs text-green-600 bg-green-50 px-3 py-1 rounded-full">
                  Available
                </span>
              ) : (
                <span className="inline-block mt-2 text-xs text-red-600 bg-red-50 px-3 py-1 rounded-full">
                  Rented
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-rose-50 p-8 rounded-lg">
          <h2 className="text-2xl font-serif text-gray-900 mb-4">
            Ready to Book Your Gown?
          </h2>
          <p className="text-gray-600 mb-6">
            Schedule an appointment to try on these beautiful gowns in person or book online.
          </p>
          <a
            href="/book"
            className="inline-block px-8 py-4 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors font-medium"
          >
            Book an Appointment
          </a>
        </div>
      </div>
    </main>
  );
}
