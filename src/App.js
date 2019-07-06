import React from 'react';
import Heroe from './components/Heroe';

import './assets/css/style.css';

function App() {

  const characters = [
      { name: 'Gandalf', race: 'Maia', age: '2019', weapon: 'Staff 🏑' },
      { name: 'Aragorn', race: 'Human', age: '120', weapon: 'Sword ⚔' },
      { name: 'Legolas', race: 'Elf', age: '200', weapon: 'Bow 🏹' },
      { name: 'Gimli', race: 'Dwarf', age: '139', weapon: 'Axe ⚒' },

  ]


  return (
    <div class="index">
      <h2>Fellowship of the Ring</h2>

    
      <div class="container">
        <div class="search-input">
          <input type="text" placeholder="search hero" />
      </div>
      
      <table class="characters-table">
        <tbody>
          <tr class="character-row">
            <th>Name</th>
            <th>Race</th>
            <th>Age</th>
            <th>Weapon</th>
            <th></th>
          </tr>
          {
            characters.map((item, index) => {
              return <Heroe key={index} hero={item} />
            })
            
          }

         </tbody>
       </table>

      </div>
    </div>
  );
}

export default App;
