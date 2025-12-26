export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex bg-black text-neutral-100">
      <aside className="w-60 border-r p-4">Kasparro</aside>
      <main className="flex-1 p-8">{children}</main>
    </div>
  )
}
