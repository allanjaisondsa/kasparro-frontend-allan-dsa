export default function Pipeline() {
  const steps = [
    "Inputs",
    "Context Assembly",
    "AI Audit Modules",
    "Actionable Outputs",
  ]

  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="mb-14">
          <h2 className="text-3xl font-semibold">
            How Kasparro Works
          </h2>
          <p className="mt-3 max-w-2xl text-neutral-400">
            Kasparro transforms raw AI search signals into structured,
            actionable brand intelligence.
          </p>
        </div>

        {/* Pipeline */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div
              key={step}
              className="relative rounded-xl border border-neutral-800
                         bg-neutral-900/60 p-6"
            >
              <p className="text-sm text-neutral-500">
                Step {i + 1}
              </p>
              <p className="mt-2 text-lg font-medium">
                {step}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
