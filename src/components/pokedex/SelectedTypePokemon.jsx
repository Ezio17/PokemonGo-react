import React from 'react';

import { selected } from '../../constants/constants';

const SelectedTypePokemon = ({ selectedPokemon, onChange }) => {
  return (
    <label className="label-type">
      Все покемоны это типа:
      <select value={selectedPokemon} name="type" className="main__selected" onChange={onChange}>
        {selected.map(pokemon => (
          <option value={pokemon.value} key={pokemon.value}>
            {pokemon.name}
          </option>
        ))}
      </select>
    </label>
  );
};

export default SelectedTypePokemon;
