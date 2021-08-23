import { menuConfig } from '../../utils/menu';
import s from './Menu.module.css';

function Menu() {
  return (
    <div>
      {menuConfig.map(menuItem => (
        <div key={menuItem.id} className={s.menuItem}>
          {menuItem.icon}
          <p className={s.menuName}>{menuItem.name}</p>
        </div>
      ))}
    </div>
  );
}

export { Menu };
