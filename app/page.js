import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-purple-100 via-purple-200 to-purple-300 min-h-[80vh] flex items-center justify-center px-4 md:px-8 py-10">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-7xl items-center">
        
        {/* Left Content */}
        <div className="flex flex-col gap-6 justify-center text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-snug">
            Shorten smarter, <span className="text-purple-600">share faster</span> – 
            your links, reimagined
          </h1>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            The cleanest, fastest way to transform long links into something powerful.
            With just a click, turn messy URLs into sleek, shareable links that make an impact.
            Simple, reliable, and built for speed.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center md:justify-start">
            <Link href="/generate">
              <button className="relative overflow-hidden bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold px-6 py-3 rounded-2xl shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-purple-500/50 w-full sm:w-auto">
                <span className="relative z-10">🚀 Try Now</span>
                <span className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-100 transition-opacity"></span>
              </button>
            </Link>

            <Link href="/vinayakgit">
              <button className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold px-6 py-3 rounded-2xl shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-indigo-500/50 w-full sm:w-auto">
                <span className="relative z-10">💻 GitHub</span>
                <span className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-100 transition-opacity"></span>
              </button>
            </Link>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="flex justify-center items-center">
          <div className="relative w-[260px] h-[260px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] drop-shadow-2xl">
            <Image
              src="/vector.jpg"
              alt="An Image of a vector"
              fill
              className="object-contain mix-blend-darken animate-pulse"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
