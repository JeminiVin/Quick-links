export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] bg-gradient-to-br from-purple-100 via-purple-200 to-purple-300 px-4 sm:px-6 py-10">
      <div className="bg-white/80 backdrop-blur-md shadow-2xl rounded-2xl p-6 sm:p-10 max-w-3xl text-center space-y-6">
        
        <h1 className="text-3xl md:text-4xl font-extrabold text-purple-700">
          About QuickLink
        </h1>
        
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          QuickLink is a modern URL shortening platform designed to make your long, messy links 
          clean, simple, and easy to share. Whether you’re managing personal links, 
          promoting your brand, or running campaigns, QuickLink ensures speed, reliability, and style. ✨
        </p>

        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          Our mission is to empower users with a seamless link-shortening experience — fast, secure, 
          and accessible from anywhere. 🚀
        </p>

      </div>
    </div>
  )
}
