"use client"
import React, { useState } from 'react'

const Shorten = () => {
  const [url, seturl] = useState("")
  const [shorturl, setshorturl] = useState("")
  const [generated, setGenerated] = useState([]) // <-- array banaya

  const generate = () => {
    const myHeaders = new Headers()
    myHeaders.append("Content-type", "application/json")

    const raw = JSON.stringify({ url, shorturl })

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    }

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          setGenerated((prev) => [...prev, `${window.location.origin}/${shorturl}`])
          seturl("")
          setshorturl("")
        }
        console.log(result)
        alert(result.message)
      })
      .catch((error) => console.error(error))
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] bg-gradient-to-br from-purple-100 via-purple-200 to-purple-300 px-4 sm:px-6">
      <div className="bg-white/80 backdrop-blur-md shadow-2xl rounded-2xl p-6 sm:p-8 w-full max-w-lg flex flex-col gap-6">

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-gray-900">
          Generate your <span className="text-purple-600">short URLs</span>
        </h1>

        {/* Input Fields */}
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="🔗 Enter your URL"
            value={url}
            onChange={(e) => seturl(e.target.value)}
            className="px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-400 outline-none text-gray-700 shadow-sm w-full text-sm sm:text-base"
          />
          <input
            type="text"
            placeholder="✨ Enter your preferred short URL"
            value={shorturl}
            onChange={(e) => setshorturl(e.target.value)}
            className="px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-400 outline-none text-gray-700 shadow-sm w-full text-sm sm:text-base"
          />
        </div>

        {/* Generate Button */}
        <button
          onClick={generate}
          className="w-full relative overflow-hidden bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-purple-500/50 text-sm sm:text-base"
        >
          <span className="relative z-10">⚡ Generate</span>
          <span className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-100 transition-opacity"></span>
        </button>
      </div>

      {/* Display Generated Short URLs */}
      {generated.length > 0 && (
        <div className="mt-6 p-4 sm:p-6 bg-gray-900 text-green-400 rounded-xl w-full max-w-lg">
          <p className="text-center font-bold mb-3 text-base sm:text-lg">Your short links:</p>
          <ul className="list-disc list-inside text-left space-y-2">
            {generated.map((link, index) => (
              <li key={index} className="break-words">
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-green-300 text-sm sm:text-base"
                >
                  <code>{link}</code>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Shorten
