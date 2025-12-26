import AuditSidebar from "@/components/audit/AuditSidebar"
import AuditPanel from "@/components/audit/auditpanel"

export default function AuditPage() {
  return (
    <div className="flex gap-6">
      <AuditSidebar />
      <AuditPanel />
    </div>
  )
}
