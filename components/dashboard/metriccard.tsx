export default function MetricCard({
  title,
  value,
}: {
  title: string
  value: number | string
}) {
  return (
    <div className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-6">
      <p className="text-sm text-neutral-400">{title}</p>
      <p className="mt-2 text-3xl font-semibold">{value}</p>
    </div>
  )
}
