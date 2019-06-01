import React from 'react';
import ReactLoading from 'react-loading';

import SinglePokemonTable from './SinglePokemonTable';

const SinglePokemon = ({ isLoading, singlePokemon }) => {
  let pokemonType = singlePokemon.types.filter(pokemon => pokemon.slot === 1);
  return (
    <div className="pokedex-info" id="pokedex-info">
      {isLoading === true ? (
        <ReactLoading
          type="balls"
          color="#daed17"
          height={100}
          width={200}
          className="spiner"
          delay={300}
        />
      ) : (
        <>
          <img
            src={`http://play.pokemonshowdown.com/sprites/xyani/${singlePokemon.name}.gif`}
            alt={singlePokemon.name}
            className="pokedex-info__image"
          />
          <p className="pokedex-info__name">{singlePokemon.name}</p>
          <SinglePokemonTable pokemonType={pokemonType} singlePokemon={singlePokemon} />
        </>
      )}
    </div>
  );
};

export default SinglePokemon;
