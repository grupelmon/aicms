import { NavLink, Outlet } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';

const menuItems = [
  { path: '/dashboard', label: 'Dashboard', icon: '📊' },
  { path: '/posts', label: 'Posts', icon: '📝' },
  { path: '/authors', label: 'Autores', icon: '👥' },
  { path: '/media', label: 'Medios', icon: '🖼️' },
  { path: '/profile', label: 'Perfil', icon: '🙍' }
];

export default function AdminLayout() {
  const { logout } = useAuth();

  return (
    <div className="app-shell">
      <aside className="sidebar card">
        <h2 className="brand">AI CMS</h2>
        <nav className="menu">
          {menuItems.map((item) => (
            <NavLink key={item.path} to={item.path} className={({ isActive }) => `menu-item ${isActive ? 'active' : ''}`}>
              <span>{item.icon}</span> {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>

      <main className="content-area">
        <header className="topbar card">
          <div>
            <h1>Panel administrativo</h1>
            <p>Gestión de contenido estilo WordPress con diseño Material.</p>
          </div>
          <div className="profile-chip">
            <img src="https://i.pravatar.cc/64?img=13" alt="perfil" />
            <div>
              <strong>Admin</strong>
              <button onClick={logout} className="link-btn">Cerrar sesión</button>
            </div>
          </div>
        </header>
        <section className="page-body">
          <Outlet />
        </section>
      </main>
    </div>
  );
}
