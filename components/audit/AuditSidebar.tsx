"use client"

import modules from "@/data/audit-modules.json"
import { useAppStore } from "@/lib/store"

export default function AuditSidebar() {
  const setModule = useAppStore((s) => s.setModule)

  return (
    <aside className="w-64 border-r">
      {modules.map((m) => (
        <button
          key={m.id}
          onClick={() => setModule(m.id)}
          className="block w-full text-left p-3 hover:bg-gray-100"
        >
          {m.name}
        </button>
      ))}
    </aside>
  )
}
