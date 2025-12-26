"use client"

import modules from "@/data/audit-modules.json"
import { useAppStore } from "@/lib/store"

export default function AuditPanel() {
  const id = useAppStore((s) => s.selectedModuleId)
  const module = modules.find((m) => m.id === id)!

  return (
    <div className="flex-1">
      <h2 className="text-3xl font-semibold">{module.name}</h2>
      <p className="mt-2">Score: {module.score}</p>

      <section className="mt-6">
        <h3 className="font-semibold">Insights</h3>
        <ul>{module.insights.map(i => <li key={i}>{i}</li>)}</ul>
      </section>

      <section className="mt-4">
        <h3 className="font-semibold">Issues</h3>
        <ul>{module.issues.map(i => <li key={i}>{i}</li>)}</ul>
      </section>

      <section className="mt-4">
        <h3 className="font-semibold">Recommendations</h3>
        <ul>{module.recommendations.map(r => <li key={r}>{r}</li>)}</ul>
      </section>
    </div>
  )
}
