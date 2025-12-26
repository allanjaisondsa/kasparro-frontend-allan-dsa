import MetricCard from "@/components/dashboard/metriccard"

export default function Dashboard() {
  return (
    <div className="grid grid-cols-2 gap-6">
      <MetricCard title="AI Visibility" value={78} />
      <MetricCard title="EEAT Score" value={64} />
      <MetricCard title="Keyword Coverage" value={82} />
      <MetricCard title="Last Audit" value="2h ago" />
    </div>
  )
}
