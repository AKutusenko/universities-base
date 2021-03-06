import { Component } from 'react';
import { Button } from '../Button/Button';
import s from './Form.module.css';

class Form extends Component {
  state = { value: '' };

  reset = () => {
    this.setState({ value: '' });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
    this.reset();
  };

  render() {
    const { value } = this.state;
    const { title, placeholder } = this.props;

    return (
      <form style={{ marginBottom: '22px' }} onSubmit={this.onSubmit}>
        <p>{title}</p>
        <input
          className={s.input}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={e => {
            this.setState({ value: e.currentTarget.value });
          }}
        />
        <Button type="submit" buttonName="Добавить" disabled={!value} />
      </form>
    );
  }
}

export { Form };
