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
    <div className="ta-shell">
      <aside className="ta-sidebar">
        <div className="ta-brand-wrap">
          <div className="ta-brand-dot" />
          <h2 className="ta-brand">TailAdmin CMS</h2>
        </div>

        <nav className="ta-menu">
          <p className="ta-menu-title">MENÚ</p>
          {menuItems.map((item) => (
            <NavLink key={item.path} to={item.path} className={({ isActive }) => `ta-menu-item ${isActive ? 'active' : ''}`}>
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </aside>

      <main className="ta-main">
        <header className="ta-topbar">
          <div>
            <p className="ta-topbar-kicker">Backoffice</p>
            <h1>Panel administrativo</h1>
            <p className="ta-topbar-subtitle">Base visual inspirada en TailAdmin para gestionar contenido.</p>
          </div>
          <div className="ta-profile-chip">
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
