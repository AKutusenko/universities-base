import { useReducer } from 'react';

const people = [
  { id: 1, name: 'Ann', employeed: false },
  { id: 2, name: 'Ban', employeed: false },
  { id: 3, name: 'Van', employeed: true },
  { id: 4, name: 'San', employeed: true },
];

/**
 * avaible actions
 * type: fire || hire
 * payload: object | string | number
 *
 */

const reducer = (people, action) => {
  if (action.type === 'hire') {
    return people.map(person => {
      if (person.id === action.payload.id) {
        person.employeed = true;
      }
      return person;
    });
  }

  if (action.type === 'fire') {
    return people.map(person => {
      if (person.id === action.payload.id) {
        person.employeed = false;
      }
      return person;
    });
  }
};

function EmployeeSection() {
  const [state, dispatch] = useReducer(reducer, people);

  function hire(id) {
    dispatch({ type: 'hire', payload: { id } });
  }

  function fire(id) {
    dispatch({ type: 'fire', payload: { id } });
  }

  return (
    <div>
      <h3>Employee Status</h3>
      <ul>
        {state.map(person => (
          <li key={person.id}>
            <span>{person.name} </span>
            {person.employeed ? (
              <>
                <span style={{ color: 'green' }}>Hired</span>
                <button
                  onClick={() => {
                    fire(person.id);
                  }}
                >
                  Action: Fire
                </button>
              </>
            ) : (
              <>
                <span style={{ color: 'red' }}>Fired</span>
                <button
                  onClick={() => {
                    hire(person.id);
                  }}
                >
                  Action: Hire
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export { EmployeeSection };
