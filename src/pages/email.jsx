import Card from '../components/Card'
import { useEffect, useState } from 'react'
import { listTopEmails } from '../services/api'

export default function Emails(){
  const [items, setItems] = useState([])
  useEffect(()=>{ listTopEmails().then(setItems) }, [])

  return (
    <Card title="Top campaigns">
      <table className="w-full text-sm">
        <thead className="text-slate-300">
          <tr><th className="text-left p-2">Subject</th><th className="text-right p-2">Open %</th><th className="text-right p-2">CTR %</th></tr>
        </thead>
        <tbody>
          {items.map(row => (
            <tr key={row.id} className="border-t border-white/10">
              <td className="p-2">{row.subject}</td>
              <td className="p-2 text-right">{row.openRate}</td>
              <td className="p-2 text-right">{row.ctr}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  )
}
