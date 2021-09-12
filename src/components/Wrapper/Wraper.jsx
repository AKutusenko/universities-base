import { Sidebar } from '../Sidebar/Sidebar';
// import { Main } from '../Main/Main';
import s from './Wrapper.module.css';

function Wrapper(props) {
  return (
    <div className={s.wrapper}>
      <Sidebar />
      {props.children}
      {/* <Main /> */}
    </div>
  );
}

export { Wrapper };
