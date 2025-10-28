import Card from '../components/Card'

export default function Settings(){
  return (
    <div className="grid gap-5">
      <Card title="Environment">
        <p className="text-slate-300 text-sm">Production URL: https://app.scopeax.com</p>
        <p className="text-slate-300 text-sm">Branch: main → auto-deploy via GitHub Actions</p>
      </Card>
      <Card title="API">
        <p className="text-slate-300 text-sm">Mock API enabled. Replace with live endpoint when available.</p>
      </Card>
    </div>
  )
}
