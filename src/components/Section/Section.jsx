import { useState, useEffect } from 'react';
import shortid from 'shortid';
import axios from 'axios';
import { Button } from '../Button/Button';
import { Title } from '../Title/Title';
import { Form } from '../Form/Form';
import { Card } from '../Card/Card';

const BASE_URL = 'http://localhost:4000';

function Section() {
  const [showed, setshowed] = useState(false);
  const [cities, setcities] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState('');

  useEffect(() => {
    setloading(true);
    console.log('im useEffect in comp did mount');

    axios
      .get(`${BASE_URL}/cities`)
      .then(response => {
        if (response.status === 200) {
          if (response.data.length !== 0) {
            setcities(response.data);
          }
        }
        if (response.status === 404) {
          throw new Error(response.message || 'cities = не существует');
        }
      })
      .catch(error => {
        seterror(error.message);
      })
      .then(() => {
        setloading(false);
      });
  }, [cities.length]);

  const handleRemove = id => {
    setcities(cities.filter(city => city.id !== id));
    axios
      .delete(`${BASE_URL}/cities/${id}`)
      .then(response => {
        if (response.status === 200) {
          console.log('DELETED!!!');
        }
      })
      .catch(error => {});
  };

  // const handleClearAll = () => {
  //   axios
  //     .delete(`${BASE_URL}/cities/`)
  //     .then(response => {
  //       if (response.status === 200) {
  //         console.log('DELETED!!!');
  //       }
  //     })
  //     .catch(error => {});
  // };

  const handleSubmit = city => {
    const newCity = { id: shortid.generate(), name: city };
    axios.post(`${BASE_URL}/cities/`, newCity).then(response => {
      if (response.status === 201) {
        setcities(prevState => {
          return [...prevState, response.data];
        });
      }
    });
  };

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
            handleClick={handleRemove}
          />
        );
      })}
      {/* {cities.length > 5 && (
        <Button onClick={handleClearAll} buttonName="Удалить все города" />
      )} */}
      {showed && <Form onSubmit={handleSubmit} />}
      <Button
        onClick={() => {
          setshowed(!showed);
        }}
        buttonName="Добавить город"
      />
    </div>
  );
}

export { Section };
