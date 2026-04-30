const cards = [
  { title: 'Posts publicados', value: 48 },
  { title: 'Borradores', value: 12 },
  { title: 'Autores activos', value: 7 },
  { title: 'Medios', value: 386 }
];

export default function DashboardPage() {
  return (
    <div>
      <div className="grid cards-grid">
        {cards.map((card) => (
          <article key={card.title} className="card stat-card">
            <h3>{card.title}</h3>
            <p>{card.value}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
