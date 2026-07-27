import { NavLink } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home' },
  { to: '/passport', label: 'Passport' },
  { to: '/map', label: 'Map' },
  { to: '/achievements', label: 'Achievements' },
  { to: '/profile', label: 'Profile' }
];

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="brand">✈️ StampQuest</div>
      <div className="nav-links">
        {links.map((link) => (
          <NavLink key={link.to} to={link.to} className={({ isActive }) => (isActive ? 'active-link' : '')}>
            {link.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
