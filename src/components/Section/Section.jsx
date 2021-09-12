import { useState, useEffect } from 'react';
import shortid from 'shortid';
import axios from 'axios';
import { Button } from '../Button/Button';
import { Title } from '../Title/Title';
import { Form } from '../Form/Form';
import { Card } from '../Card/Card';
import { useToggle } from '../../hooks/use-toggle';

const BASE_URL = 'http://localhost:4000';

function Section({ title, placeholder, formTitle, url, path }) {
  const [showed, toggleShowed] = useToggle(false);
  const [items, setitems] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState('');

  useEffect(() => {
    setloading(true);

    axios
      .get(`${BASE_URL}/${url}`)
      .then(response => {
        if (response.status === 200) {
          if (response.data.length !== 0) {
            setitems(response.data);
          }
        }
        if (response.status === 404) {
          throw new Error(response.message || 'items = не существует');
        }
      })
      .catch(error => {
        seterror(error.message);
      })
      .then(() => {
        setloading(false);
      });
  }, [url]);

  const handleRemove = id => {
    setitems(items.filter(city => city.id !== id));
    axios
      .delete(`${BASE_URL}/${url}/${id}`)
      .then(response => {
        if (response.status === 200) {
          console.log('DELETED!!!');
        }
      })
      .catch(error => {});
  };

  const handleSubmit = city => {
    const newCity = { id: shortid.generate(), name: city };
    axios.post(`${BASE_URL}/${url}/`, newCity).then(response => {
      if (response.status === 201) {
        setitems(prevState => {
          return [...prevState, response.data];
        });
      }
    });
  };

  return (
    <div style={{ marginTop: '40px', marginBottom: '40px' }}>
      <Title title={title} path={path} />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {items.map(city => {
        return (
          <Card
            key={city.id}
            id={city.id}
            name={city.name}
            buttonName="Удалить"
            handleClick={handleRemove}
            url={url}
          />
        );
      })}
      {showed && (
        <Form
          onSubmit={handleSubmit}
          title={formTitle}
          placeholder={placeholder}
        />
      )}
      <Button
        onClick={toggleShowed}
        buttonName={showed ? 'Скрыть форму' : 'Добавить форму'}
      />
    </div>
  );
}

export { Section };
