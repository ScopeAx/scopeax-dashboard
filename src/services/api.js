export async function getKpis() {
  // Simulate latency
  await new Promise(r => setTimeout(r, 200))
  return { openRate: 42.3, ctr: 8.7, conversions: 127 }
}

export async function getTimeseries() {
  await new Promise(r => setTimeout(r, 200))
  const today = new Date()
  return Array.from({length: 12}).map((_,i) => {
    const d = new Date(today); d.setDate(d.getDate() - (11 - i))
    return { date: d.toISOString().slice(5,10), opens: Math.floor(200 + Math.random()*300) }
  })
}

export async function listTopEmails() {
  await new Promise(r => setTimeout(r, 200))
  return [
    { id: 'em1', subject: 'Q4 Investor Update', openRate: 51.2, ctr: 9.1 },
    { id: 'em2', subject: 'ScopeAX Feature Launch', openRate: 47.5, ctr: 7.8 },
    { id: 'em3', subject: 'Customer Stories', openRate: 44.0, ctr: 6.3 },
  ]
}
