import React from 'react';

import PokedexHeader from './PokedexHeader';
import PokedexMain from './PokedexMain';

const Pokedex = () => {
  return (
    <div className="pokedex">
      <PokedexHeader />
      <PokedexMain />
    </div>
  );
};

export default Pokedex;
