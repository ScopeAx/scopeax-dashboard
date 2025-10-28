import Card from '../components/Card'
import { useEffect, useState } from 'react'
import { getKpis } from '../services/api'

export default function Overview(){
  const [kpis, setKpis] = useState(null)
  useEffect(()=>{ getKpis().then(setKpis) }, [])

  return (
    <div className="grid md:grid-cols-3 gap-5">
      <Card title="Open Rate">
        <p className="text-3xl font-bold">{kpis ? `${kpis.openRate}%` : '—'}</p>
        <p className="text-slate-300 text-sm">Last 7 days</p>
      </Card>
      <Card title="CTR">
        <p className="text-3xl font-bold">{kpis ? `${kpis.ctr}%` : '—'}</p>
        <p className="text-slate-300 text-sm">Last 7 days</p>
      </Card>
      <Card title="Conversions">
        <p className="text-3xl font-bold">{kpis ? kpis.conversions : '—'}</p>
        <p className="text-slate-300 text-sm">Last 7 days</p>
      </Card>
    </div>
  )
}
