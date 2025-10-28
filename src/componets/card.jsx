export default function Card({ title, children, className = '' }) {
  return (
    <section className={`bg-white/10 backdrop-blur-md rounded-2xl shadow-lg border border-white/10 p-5 ${className}`}>
      {title && <h2 className="text-lg font-semibold mb-3">{title}</h2>}
      {children}
    </section>
  )
}
