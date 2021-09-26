import { Section } from '../Section/Section';
import { Title } from '../Title/Title';
import s from './Main.module.css';
import { EmployeeSection } from '../../test-examples/EmployeeSection/EmployeeSection';

function Main() {
  return (
    <div className={s.container}>
      <Title title="Информация об университете" />

      <>
        <Section
          title="Города"
          placeholder="Город"
          formTitle="Добавление города"
          // url="cities"
          path="/cities"
        />
        <Section
          title="Факультеты"
          placeholder="Факультет"
          formTitle="Добавление факультета"
          // url="faculties"
          path="/faculties"
        />
      </>
      <p>--------------------------------------------------------------</p>
      <EmployeeSection />
    </div>
  );
}

export { Main };
