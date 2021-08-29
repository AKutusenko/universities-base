import React from 'react';
import shortid from 'shortid';
import axios from 'axios';
import { Button } from '../Button/Button';
import { Title } from '../Title/Title';
import { Form } from '../Form/Form';
import { Card } from '../Card/Card';

const BASE_URL = 'http://localhost:4000';

class Section extends React.Component {
  state = {
    showed: false,
    cities: [],
    loading: false,
    error: '',
  };

  componentDidMount() {
    // const parsedSities = JSON.parse(localStorage.getItem('cities'));
    // if (parsedSities && Array.isArray(parsedSities)) {
    //   this.setState({ cities: parsedSities });
    // }

    this.setState({ loading: true });

    axios
      .get(`${BASE_URL}/cities`)
      .then(response => {
        if (response.status === 200) {
          this.setState({ cities: response.data });
        }
        if (response.status === 404) {
          throw new Error(response.message || 'cities = не существует');
        }
      })
      .catch(error => {
        this.setState({ error: error.message });
      })
      .then(() => {
        this.setState({ loading: false });
      });
  }

  componentDidUpdate() {
    localStorage.setItem('cities', JSON.stringify(this.state.cities));
  }

  handleRemove = id => {
    this.setState({
      cities: this.state.cities.filter(city => city.id !== id),
    });
    axios
      .delete(`${BASE_URL}/cities/${id}`)
      .then(response => {
        if (response.status === 200) {
          console.log('DELETED!!!');
        }
      })
      .catch(error => {});
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
    const { cities, showed, loading, error } = this.state;

    return (
      <div>
        {cities.length ? <Title title={'Города'} /> : null}
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
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
