"use client";

import { useState } from "react";
import Link from "next/link";

interface BlogPost {
  id: number;
  emoji: string;
  title: string;
  excerpt: string;
  content: string[];
  date: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    emoji: "🎀",
    title: "Welcome to Sis2Sis",
    excerpt: "Introducing our luxury gown rental service created in honor of Chanie Katz — where sisterhood meets style.",
    date: "November 2024",
    category: "Sisterhood Stories",
    content: [
      "Welcome to Sis2Sis — a luxury gown rental service born from love, inspired by joy, and dedicated to making every girl feel like royalty.",
      "This isn't just another business. It's a mission. A movement. A celebration of everything Chanie Katz stands for: kindness, connection, and the belief that every simcha deserves to be special.",
      "We created Sis2Sis because we believe that beautiful gowns shouldn't be a luxury reserved for the wealthy. We believe that sisters should support sisters. We believe that joy multiplies when we share it.",
      "Every gown in our collection has been chosen with care. Every fitting is infused with warmth. Every rental helps us continue Chanie's legacy of spreading light, one dress and one smile at a time.",
      "So welcome, sister. We're so glad you're here. Browse our collection, find your perfect gown, and join us in celebrating the moments that matter most.",
      "Because at Sis2Sis, we've got you. Always."
    ]
  },
  {
    id: 2,
    emoji: "💝",
    title: '"I Got You" - The Heart of Sis2Sis',
    excerpt: "When Chanie says 'I got you,' she means it. Learn how this simple phrase became the foundation of our mission.",
    date: "November 2024",
    category: "Chanie Says",
    content: [
      "Three words. Three simple, powerful words that capture everything Chanie Katz is about: I got you.",
      "These aren't just words. They're a promise. A covenant. A declaration that says: You're not alone. I'm here. Whatever you need, I've got you.",
      "Chanie says it when you're nervous before a big event. She says it when you're struggling to choose between two gowns. She says it when you just need someone to understand.",
      "And she means it. Every single time.",
      "This promise is the foundation of Sis2Sis. When you walk through our doors (virtual or physical), you're not just a customer. You're family. You're a sister. And sisters? Sisters have each other's backs.",
      "We've got you when you're worried about finding the right dress. We've got you when you're on a budget but still want to feel beautiful. We've got you when you need someone to remind you that you're worthy of celebration.",
      "Because that's what Chanie taught us. That's what she lives every single day. And that's what we want to pass on to every girl who becomes part of the Sis2Sis community.",
      "So here's our promise to you: We got you. Always."
    ]
  },
  {
    id: 3,
    emoji: "👗",
    title: "How to Choose the Perfect Gown for Your Event",
    excerpt: "Expert tips on selecting the right gown style, color, and fit for weddings, engagements, and special occasions.",
    date: "November 2024",
    category: "Styling Tips",
    content: [
      "Choosing the perfect gown can feel overwhelming. With so many styles, colors, and cuts to choose from, where do you even start?",
      "First, consider your event. A wedding might call for something more formal and elegant, while a bat mitzvah could be the perfect opportunity for something fun and flirty.",
      "Next, think about your personal style. Are you classic and timeless? Modern and edgy? Romantic and feminine? Choose a gown that makes you feel like the best version of yourself.",
      "Color is crucial. Consider your skin tone, hair color, and the season. Jewel tones work beautifully in fall and winter. Pastels are perfect for spring and summer. And of course, you can never go wrong with classic black, navy, or champagne.",
      "Fit is everything. A gown that fits perfectly will make you feel confident and beautiful. Don't settle for 'close enough' — come in for a fitting and let us help you find the perfect match.",
      "Finally, remember: the best gown is the one that makes YOU feel amazing. Trust your instincts. Listen to your heart. And most importantly, have fun with it!",
      "Need help deciding? Book an appointment and let our team guide you to your perfect gown. We got you!"
    ]
  },
  {
    id: 4,
    emoji: "✨",
    title: "Modest Elegance: Styling Your Simcha Gown",
    excerpt: "Beautiful doesn't mean bare. Discover how to style modest gowns with confidence and grace.",
    date: "November 2024",
    category: "Styling Tips",
    content: [
      "Modest doesn't mean boring. Modest doesn't mean frumpy. Modest means beautiful, elegant, and confident in your own skin.",
      "At Sis2Sis, we specialize in gowns that are both stunning AND appropriate. Long sleeves, higher necklines, and longer hemlines — all without sacrificing an ounce of style.",
      "The key to modest elegance is in the details. Delicate lace sleeves add romance. A structured bodice provides sophistication. Flowing fabrics create movement and grace.",
      "Accessorizing is crucial. A statement necklace can elevate a simple neckline. Beautiful earrings draw attention to your face. A sparkly clutch adds just the right amount of glamour.",
      "Don't be afraid of color and texture! Sequins, beading, embroidery — these details add visual interest and make modest gowns truly spectacular.",
      "Remember: modesty is about more than just covering up. It's about carrying yourself with dignity, grace, and confidence. It's about knowing your worth and dressing accordingly.",
      "At Sis2Sis, we believe every girl deserves to feel beautiful AND comfortable. Our collection includes dozens of modest options that will make you shine from the inside out.",
      "Book a fitting today and let us help you find your perfect modest masterpiece!"
    ]
  },
  {
    id: 5,
    emoji: "🌟",
    title: "Designer Spotlight: Our Favorite Collections",
    excerpt: "Get to know the designers behind our most loved gowns, from classic elegance to modern glamour.",
    date: "November 2024",
    category: "Featured Gowns",
    content: [
      "Behind every beautiful gown is a talented designer with a vision, a story, and a passion for making women feel amazing.",
      "At Sis2Sis, we carefully curate our collection from designers who understand what we're all about: elegance, quality, and making every girl feel like a princess.",
      "Our collection includes timeless classics — think elegant A-lines, romantic ball gowns, and sophisticated sheaths. These are the dresses that never go out of style.",
      "We also feature contemporary designs for the modern girl who wants something fresh and fashion-forward. Unique cuts, unexpected details, and on-trend colors that make a statement.",
      "Many of our gowns feature stunning details: delicate beading, intricate embroidery, cascading ruffles, and luxurious fabrics that feel as good as they look.",
      "What matters most to us isn't the label — it's the quality, the fit, and the way it makes you feel when you put it on.",
      "Every gown in our collection has been personally selected because we believe it has the power to transform an outfit into an experience. To turn a moment into a memory.",
      "Come browse our collection and discover your new favorite designer. Better yet, book an appointment and try them on in person. Trust us — you'll fall in love!"
    ]
  },
  {
    id: 6,
    emoji: "💬",
    title: '"What\'s Your Name?" - Chanie\'s Gift of Connection',
    excerpt: "How one simple question became Chanie's way of making everyone feel seen and valued.",
    date: "November 2024",
    category: "Chanie Says",
    content: [
      "In a world where we rush past each other, where interactions feel transactional, where we're more connected to our phones than to people — Chanie asks a simple question:",
      "What's your name?",
      "That's it. Four words. But oh, the power they hold.",
      "When Chanie asks your name, she's not making small talk. She's not being polite. She's genuinely interested. She wants to KNOW you. To SEE you. To make you feel like you matter.",
      "Because to Chanie, you do matter. Everyone does.",
      "This simple question is her way of saying: You're not invisible. You're not just another face in the crowd. You're YOU — unique, precious, and worth knowing.",
      "It's a lesson we've all learned from Chanie. In our fast-paced world, slowing down to truly see each other is a revolutionary act of kindness.",
      "At Sis2Sis, we try to carry this lesson forward. When you come for a fitting, we want to know YOUR name. YOUR story. YOUR dreams for your special day.",
      "Because this isn't about transactions. It's about connections. It's about treating every sister who walks through our doors with the same care, attention, and genuine interest that Chanie shows to everyone she meets.",
      "So tell us: What's YOUR name? We'd love to get to know you."
    ]
  },
];

const categories = [
  "All Stories",
  "Sisterhood Stories",
  "Styling Tips",
  "Featured Gowns",
  "Chanie Says",
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Stories");
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const filteredPosts = selectedCategory === "All Stories"
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  if (selectedPost) {
    return (
      <main className="min-h-screen pt-20">
        <div className="max-w-4xl mx-auto px-4 py-16">
          {/* Back Button */}
          <button
            onClick={() => setSelectedPost(null)}
            className="mb-8 flex items-center text-amber-700 hover:text-amber-800 font-medium"
          >
            ← Back to All Stories
          </button>

          {/* Article Header */}
          <div className="text-center mb-12">
            <div className="text-6xl mb-6">{selectedPost.emoji}</div>
            <span className="inline-block text-xs font-medium text-amber-700 bg-amber-50 px-3 py-1 rounded-full mb-4">
              {selectedPost.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">
              {selectedPost.title}
            </h1>
            <p className="text-gray-500">{selectedPost.date}</p>
          </div>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none">
            {selectedPost.content.map((paragraph, index) => (
              <p key={index} className="text-gray-700 leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </article>

          {/* Share Section */}
          <div className="mt-16 pt-8 border-t-2 border-gray-200">
            <div className="bg-gradient-to-br from-rose-50 to-amber-50 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-serif text-gray-900 mb-4">
                Love this story?
              </h3>
              <p className="text-gray-700 mb-6">
                Come visit us and experience the Sis2Sis magic for yourself!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/collection"
                  className="inline-block px-8 py-4 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors font-medium"
                >
                  Browse Collection
                </Link>
                <Link
                  href="/book"
                  className="inline-block px-8 py-4 bg-white border-2 border-amber-600 text-amber-700 rounded-lg hover:bg-amber-50 transition-colors font-medium"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-20">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-serif text-center text-gray-900 mb-4">
          Stories & Updates
        </h1>
        <p className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
          Sisterhood stories, styling tips, and updates from the Sis2Sis community
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === category
                  ? "bg-amber-600 text-white"
                  : "bg-white text-gray-700 border-2 border-gray-300 hover:border-amber-500"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer p-6"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl">{post.emoji}</div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-amber-700 bg-amber-50 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h2 className="text-2xl font-serif text-gray-900 mb-3 hover:text-amber-700 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <span className="text-amber-700 font-medium hover:text-amber-800 transition-colors">
                      Read More →
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* More Stories Coming Soon */}
        <div className="bg-gradient-to-br from-rose-50 to-amber-50 rounded-lg p-8 text-center">
          <div className="text-4xl mb-4">✨</div>
          <h2 className="text-2xl font-serif text-gray-900 mb-4">
            More Stories Coming Soon
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We're collecting beautiful stories from our Sis2Sis community. Have a story to share?
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors font-medium"
          >
            Share Your Story
          </Link>
        </div>
      </div>
    </main>
  );
}
