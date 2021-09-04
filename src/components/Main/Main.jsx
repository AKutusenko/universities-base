import { useState } from 'react';
import { Section } from '../Section/Section';
import { Button } from '../Button/Button';
import { Title } from '../Title/Title';
import s from './Main.module.css';

function Main() {
  const [showSection, setshowSection] = useState(true);

  return (
    <div className={s.container}>
      <Title title="Информация об университете" />
      {showSection && <Section />}
      <br />
      <Button
        onClick={() => {
          setshowSection(prevState => !prevState);
        }}
        buttonName="Тогл секции"
      />
    </div>
  );
}

export { Main };
