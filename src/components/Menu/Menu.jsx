import { Link } from 'react-router-dom';
import { menuConfig } from '../../utils/menu';
import s from './Menu.module.css';

function Menu() {
  return (
    <nav className={s.menu}>
      <ul>
        {menuConfig.map(menuItem => (
          <li key={menuItem.id} className={s.menuItem}>
            {menuItem.icon}
            <Link to={menuItem.path} className={s.menuName}>
              {menuItem.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export { Menu };
