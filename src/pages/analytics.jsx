import Card from '../components/Card'
import { useEffect, useState } from 'react'
import { getTimeseries } from '../services/api'

export default function Analytics(){
  const [series, setSeries] = useState([])
  useEffect(()=>{ getTimeseries().then(setSeries) }, [])

  return (
    <Card title="Opens per day">
      <ul className="text-slate-200 text-sm grid grid-cols-2 md:grid-cols-4 gap-2">
        {series.map(d => (
          <li key={d.date} className="flex items-center justify-between bg-white/5 rounded-lg p-2">
            <span>{d.date}</span>
            <span className="font-semibold">{d.opens}</span>
          </li>
        ))}
      </ul>
    </Card>
  )
}
