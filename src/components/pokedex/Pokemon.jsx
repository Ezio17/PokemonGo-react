import React from 'react';
import ReactLoading from 'react-loading';

const Pokemon = props => {
  return (
    <>
      {props.isLoadingAllPokemons === true ? (
        <ReactLoading
          className="main-spiner"
          type="balls"
          color="#daed17"
          height={200}
          width={200}
          delay={300}
        />
      ) : (
        <div className="pokedex-wrap">
          <div className="pokedex__pokemons">
            {props.pokemons.map(pokemon => (
              <div
                key={pokemon.name || pokemon.pokemon.name}
                className="pokedex__pokemon"
                onClick={() =>
                  props.singlePokemon(
                    pokemon.url !== undefined
                      ? pokemon.url.match(/pokemon\/\d+/g)
                      : pokemon.pokemon.url.match(/pokemon\/\d+/g)
                  )
                }
              >
                {window.innerWidth < 500 ? (
                  <a className="pokedex__scroll" href="#pokedex-info">
                    <img
                      src={`https://play.pokemonshowdown.com/sprites/xyani/${pokemon.name ||
                        pokemon.pokemon.name}.gif`}
                      alt={pokemon.name || pokemon.pokemon.name}
                      className="pokedex__pokemons-image"
                    />
                    <h3 className="pokedex__pokemons-name">
                      {pokemon.name || pokemon.pokemon.name}
                    </h3>
                  </a>
                ) : (
                  <>
                    <img
                      src={`https://play.pokemonshowdown.com/sprites/xyani/${pokemon.name ||
                        pokemon.pokemon.name}.gif`}
                      alt={pokemon.name || pokemon.pokemon.name}
                      className="pokedex__pokemons-image"
                    />
                    <h3 className="pokedex__pokemons-name">
                      {pokemon.name || pokemon.pokemon.name}
                    </h3>
                  </>
                )}
              </div>
            ))}
          </div>
          {+props.selectedPokemon === 0 ? (
            <button className="pokedex__limit" onClick={props.setLimit}>
              Load More
            </button>
          ) : (
            <></>
          )}
        </div>
      )}
    </>
  );
};

export default Pokemon;
