const authors = [
  { name: 'Ana López', role: 'Editor', posts: 19 },
  { name: 'Carlos Mena', role: 'Autor', posts: 14 },
  { name: 'Luisa Trujillo', role: 'Autor', posts: 8 }
];

export default function AuthorsPage() {
  return (
    <div className="card">
      <h2>Autores</h2>
      <table className="table">
        <thead><tr><th>Nombre</th><th>Rol</th><th>Posts</th></tr></thead>
        <tbody>
          {authors.map((author) => (
            <tr key={author.name}><td>{author.name}</td><td>{author.role}</td><td>{author.posts}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
