import { Section } from '../Section/Section';
import { Title } from '../Title/Title';
import s from './Main.module.css';

function Main() {
  return (
    <div className={s.container}>
      <Title title="Информация об университете" />
      <Section />
    </div>
  );
}

export { Main };
