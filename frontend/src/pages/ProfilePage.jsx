export default function ProfilePage() {
  return (
    <div className="card">
      <h2>Editar perfil</h2>
      <form className="stack">
        <label>Nombre completo<input defaultValue="Administrador CMS" /></label>
        <label>Email<input defaultValue="admin@example.com" /></label>
        <label>Biografía<textarea rows="4" defaultValue="Editor jefe del sitio." /></label>
        <button type="button">Guardar cambios</button>
      </form>
    </div>
  );
}
