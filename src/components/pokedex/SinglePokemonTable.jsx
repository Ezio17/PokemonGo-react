import React from 'react';

const SinglePokemonTable = ({ singlePokemon, pokemonType }) => {
  return (
    <table className="pokemon-table">
      <tbody>
        <tr>
          <td>Type</td>
          <td>{pokemonType[0].type.name}</td>
        </tr>
        <tr>
          <td>Attack</td>
          <td>{singlePokemon.stats[4].base_stat}</td>
        </tr>
        <tr>
          <td>Defense</td>
          <td>{singlePokemon.stats[3].base_stat}</td>
        </tr>
        <tr>
          <td>HP</td>
          <td>{singlePokemon.stats[5].base_stat}</td>
        </tr>
        <tr>
          <td>SP Attack</td>
          <td>{singlePokemon.stats[2].base_stat}</td>
        </tr>
        <tr>
          <td>SP Defense</td>
          <td>{singlePokemon.stats[1].base_stat}</td>
        </tr>
        <tr>
          <td>Speed</td>
          <td>{singlePokemon.stats[0].base_stat}</td>
        </tr>
        <tr>
          <td>Weight</td>
          <td>{singlePokemon.weight}</td>
        </tr>
        <tr>
          <td>Total moves</td>
          <td>{singlePokemon.moves.length}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default SinglePokemonTable;
