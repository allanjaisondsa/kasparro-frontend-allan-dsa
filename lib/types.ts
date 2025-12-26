export interface Brand {
  id: string
  name: string
  domain: string
}

export interface AuditModule {
  id: string
  name: string
  score: number
  insights: string[]
  issues: string[]
  recommendations: string[]
}
