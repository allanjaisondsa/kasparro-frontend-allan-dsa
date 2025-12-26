const modules = [
  "AI Visibility",
  "Trust / EEAT",
  "Non-Branded Coverage",
  "Citation Strength",
  "Entity Authority",
  "Sentiment",
  "Competitive Share",
]

export default function ModulesOverview() {
  return (
    <section className="mx-auto max-w-6xl py-24">
      <h2 className="mb-10 text-center text-2xl font-semibold">
        Core AI-SEO Audit Modules
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {modules.map((m) => (
          <div
            key={m}
            className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-6
                       hover:border-neutral-600 transition"
          >
            <p className="text-lg font-medium">{m}</p>
            <p className="mt-2 text-sm text-neutral-400">
              AI-native analysis of brand performance inside LLM answers.
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
