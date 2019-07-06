import React from 'react';

class Heroe extends React.Component {
    render() {

        const {name, race, age, weapon} = this.props.hero;

        return (

            <tr class="character-row">
              <td>{name}</td>
              <td>{race}</td>
              <td>{age}</td>
              <td>{weapon} ⚔</td>
              <td>
                <div class="controls">
                  <div>☠ Kill</div>
                  <div>💍 Use Ring</div>
                </div>
              </td>
            </tr>
        );
    }
}


export default Heroe;