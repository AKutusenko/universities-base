import React from 'react';
import { Button } from '../Button/Button';

class Section extends React.Component {
  state = {
    showed: false,
  };

  render() {
    return (
      <div>
        {this.state.showed && <p>Form</p>}
        <Button
          onClick={() => {
            console.log('clicked');
            this.setState({ showed: !this.state.showed });
          }}
          buttonName="Добавить город"
        />
      </div>
    );
  }
}

export { Section };
