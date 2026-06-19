export default function AboutPage() {
  return (
    <main className="min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-serif text-center text-gray-900 mb-8">
          The Girl Who Taught Us to Say Yay
        </h1>

        <div className="prose prose-lg max-w-none">
          <div className="bg-gradient-to-r from-rose-50 to-amber-50 p-8 rounded-lg mb-12">
            <p className="text-xl md:text-2xl italic text-center text-gray-800 mb-0 font-serif">
              "What's your name? ... Put your phone down ... I got you!"
            </p>
          </div>

          <section className="mb-12">
            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              Some people light up a room. Chanie Katz lights up the world.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              From the moment you meet her, Chanie makes you feel like the most important person in the universe.
              Her signature greeting — <span className="italic font-semibold text-amber-800">"What's your name?"</span> —
              isn't just a question. It's an invitation. An invitation to be seen, to be known, to matter.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              In a world obsessed with screens, Chanie has a gentle way of bringing us back to what's real.
              <span className="italic font-semibold text-amber-800"> "Put your phone down,"</span> she'll say with a
              smile — not as a command, but as a gift. Because when you're with Chanie, you don't want to miss a single moment.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-serif text-gray-900 mb-6">A Journey of Joy</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Chanie's life hasn't been easy. At a young age, she was diagnosed with a benign brain tumor that changed
              everything. Medical challenges that would break most people became the foundation of Chanie's extraordinary spirit.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Through countless hospital visits, treatments, and obstacles, Chanie discovered something profound:
              joy isn't the absence of hardship — it's the choice to find light in the darkness. And Chanie?
              She doesn't just find the light. She <span className="font-semibold">becomes</span> the light.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Every wedding she attends becomes a celebration of life itself. Every dress she admires, every dance she joins,
              every hug she gives — these aren't just moments. They're declarations. Declarations that say:
              <span className="italic text-amber-800 font-serif text-lg"> Life is beautiful. People are precious. Joy is a choice.</span>
            </p>
          </section>

          <div className="bg-amber-50 border-l-4 border-amber-600 p-8 rounded-r-lg mb-12">
            <h3 className="text-2xl font-serif text-gray-900 mb-4">"I Got You"</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              These three words are Chanie's promise to everyone she meets. It's not just reassurance — it's covenant.
              When Chanie says "I got you," she means it with her whole heart.
            </p>
            <p className="text-gray-700 leading-relaxed mb-0">
              She's got you when you're nervous. She's got you when you're sad. She's got you when you need someone
              to remind you that you're loved, that you matter, that everything will be okay.
            </p>
          </div>

          <section className="mb-12">
            <h2 className="text-3xl font-serif text-gray-900 mb-6">The Birth of Sis2Sis</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Chanie loves gowns. She loves the swish of a skirt, the sparkle of beading, the way a beautiful dress
              can make you feel like royalty. But more than the gowns themselves, Chanie loves what they represent:
              celebration, connection, and the special moments that bring us together.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Sis2Sis was born from this love. It's a luxury gown rental service, yes — but it's so much more than that.
              It's Chanie's way of spreading joy to every girl who walks through the door. It's her way of saying
              <span className="italic font-semibold text-amber-800"> "I got you"</span> to sisters everywhere who want
              to feel beautiful without breaking the bank.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Every gown in our collection is chosen with Chanie's signature care. Every fitting is infused with her warmth.
              Every rental helps continue her mission: making special occasions accessible, joyful, and unforgettable.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-serif text-gray-900 mb-6">Sisters in Style, Sisters at Heart</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Sis2Sis isn't just about gowns. It's about sisterhood. It's about the sacred bond between women who
              lift each other up, who celebrate each other's joy, who show up for each other — no matter what.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              When you rent from Sis2Sis, you're not just getting a dress. You're joining a community. You're becoming
              part of Chanie's extended family. You're saying yes to kindness, to connection, to the belief that we're
              all in this together.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Designer gowns, big hearts, and Chanie's kind of joy — a little loud, a little sparkly, and 100% real.
            </p>
          </section>

          <div className="bg-gradient-to-br from-rose-100 to-amber-100 p-10 rounded-lg text-center mb-12">
            <h3 className="text-3xl font-serif text-gray-900 mb-6">
              Borrow the Beauty. Share the Yay.
            </h3>
            <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
              Every rental supports Chanie's mission of spreading joy, one gown and one sister at a time.
              All proceeds help continue this work of kindness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/collection"
                className="inline-block px-8 py-4 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors font-medium"
              >
                Browse Our Collection
              </a>
              <a
                href="/book"
                className="inline-block px-8 py-4 bg-white border-2 border-amber-600 text-amber-700 rounded-lg hover:bg-amber-50 transition-colors font-medium"
              >
                Book an Appointment
              </a>
            </div>
          </div>

          <div className="text-center pt-8 border-t-2 border-gray-200">
            <p className="text-2xl font-serif italic text-gray-800 mb-4">
              In honor of Chanie Katz
            </p>
            <p className="text-gray-600 text-lg">
              The girl who taught us to put down our phones, ask each other's names,
              and remind everyone: I got you.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
