export default function Hero() {
  return (
    <section className="relative overflow-hidden py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-black via-neutral-950 to-black" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">
          AI-Native SEO for
          <span className="block bg-linear-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            AI-First Search
          </span>
        </h1>

        <p className="mt-6 text-lg text-neutral-400">
          Kasparro helps brands win visibility inside ChatGPT, Gemini,
          and Perplexity — where modern discovery actually happens.
        </p>

        <div className="mt-10 flex justify-center">
          <button className="rounded-lg bg-white px-6 py-3 text-sm font-medium text-black hover:bg-neutral-200 transition">
            Run AI-SEO Audit
          </button>
        </div>
      </div>
    </section>
  )
}
