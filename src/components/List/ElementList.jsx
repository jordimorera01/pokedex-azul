import ElementImage from "./ElementImage";

const ElementList = ({pokemons}) =>
    pokemons.map(pokemon =>
        <li key={pokemon.id}>
            <ElementImage name={pokemon.name}/>
            <span className="number">N. {pokemon.id}</span>
            <span className="name">{pokemon.name}</span>
            <span className="type">{pokemon.type}</span>
        </li>
    )

export default ElementList;