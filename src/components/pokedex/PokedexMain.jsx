import React from 'react';

import Pokemon from './Pokemon';
import SinglePokemon from './SinglePokemon';
import SelectedTypePokemon from './SelectedTypePokemon';
import { BASE_URL, BASE_URL_TYPE } from '../../constants/constants';

class PokedexMain extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      limitPokemon: 12,
      pokemons: [],
      singlePokemon: null,
      selectedPokemon: 0,
      isLoadingAllPokemons: false,
      isLoadingSinglePokemon: false,
    };

    this.setLimit = this.setLimit.bind(this);
    this.getPokemonsFromServer = this.getPokemonsFromServer.bind(this);
    this.getSinglePokemonFromServer = this.getSinglePokemonFromServer.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ selectedPokemon: event.target.value });
  }

  getPokemonsFromServer() {
    const { limitPokemon } = this.state;

    this.setState({
      isLoadingAllPokemons: true,
    });

    fetch(`${BASE_URL}?limit=${limitPokemon}`)
      .then(response => response.json())
      .then(pokemons => {
        this.setState({
          pokemons: pokemons.results,
          isLoadingAllPokemons: false,
        });
      });
  }

  getSinglePokemonFromServer(id) {
    let pokemonId = id[0].match(/\d+/g)[0];

    this.setState({
      isLoadingSinglePokemon: true,
    });

    fetch(`${BASE_URL}${pokemonId}`)
      .then(response => response.json())
      .then(singlePokemon =>
        this.setState({
          singlePokemon,
          isLoadingSinglePokemon: false,
        })
      );
  }

  componentWillMount() {
    this.getPokemonsFromServer();
  }

  componentDidUpdate(nextProps, nextState) {
    const { limitPokemon, selectedPokemon } = this.state;

    if (
      limitPokemon !== nextState.limitPokemon ||
      (selectedPokemon !== nextState.selectedPokemon && +selectedPokemon === 0)
    ) {
      this.getPokemonsFromServer();
    } else if (selectedPokemon !== nextState.selectedPokemon && +selectedPokemon !== 0) {
      this.setState({
        isLoadingAllPokemons: true,
        singlePokemon: null,
      });

      fetch(`${BASE_URL_TYPE}type/${selectedPokemon}/`)
        .then(response => response.json())
        .then(pokemons =>
          this.setState({
            pokemons: pokemons.pokemon,
            isLoadingAllPokemons: false,
          })
        );
    }
  }

  setLimit() {
    this.setState(state => {
      return {
        limitPokemon: state.limitPokemon + 12,
      };
    });
  }

  render() {
    const {
      pokemons,
      singlePokemon,
      selectedPokemon,
      isLoadingAllPokemons,
      isLoadingSinglePokemon,
    } = this.state;

    return (
      <main className="main">
        <SelectedTypePokemon selectedPokemon={selectedPokemon} onChange={this.handleChange} />
        <div className="main__block">
          <Pokemon
            singlePokemon={this.getSinglePokemonFromServer}
            setLimit={this.setLimit}
            pokemons={pokemons}
            selectedPokemon={selectedPokemon}
            isLoadingAllPokemons={isLoadingAllPokemons}
          />
          {singlePokemon === null ? (
            <></>
          ) : (
            <SinglePokemon isLoading={isLoadingSinglePokemon} singlePokemon={singlePokemon} />
          )}
        </div>
      </main>
    );
  }
}

export default PokedexMain;
