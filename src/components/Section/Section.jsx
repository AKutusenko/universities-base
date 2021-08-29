import React from 'react';
import shortid from 'shortid';
import { Button } from '../Button/Button';
import { Title } from '../Title/Title';
import { Form } from '../Form/Form';
import { Card } from '../Card/Card';

class Section extends React.Component {
  state = {
    showed: false,
    cities: [],
  };

  componentDidMount() {
    const parsedSities = JSON.parse(localStorage.getItem('cities'));
    if (parsedSities && Array.isArray(parsedSities)) {
      this.setState({ cities: parsedSities });
    }
  }

  componentDidUpdate() {
    localStorage.setItem('cities', JSON.stringify(this.state.cities));
  }

  handleRemove = id => {
    this.setState({
      cities: this.state.cities.filter(city => city.id !== id),
    });
  };

  // handleClearAll = () => {
  //   localStorage.removeItem('cities');
  // };

  handleSubmit = city => {
    this.setState(prevState => ({
      cities: [...prevState.cities, { id: shortid.generate(), name: city }],
    }));
  };

  render() {
    const { cities, showed } = this.state;

    return (
      <div>
        {cities.length ? <Title title={'Города'} /> : null}
        {cities.map(city => {
          return (
            <Card
              key={city.id}
              id={city.id}
              name={city.name}
              buttonName="Удалить"
              handleClick={this.handleRemove}
            />
          );
        })}
        {/* {cities.length > 5 && (
          <Button
            onClick={this.handleClearAll}
            buttonName="Удалить все города"
          />
        )} */}
        {showed && <Form onSubmit={this.handleSubmit} />}
        <Button
          onClick={() => {
            this.setState({ showed: !showed });
          }}
          buttonName="Добавить город"
        />
      </div>
    );
  }
}

export { Section };
