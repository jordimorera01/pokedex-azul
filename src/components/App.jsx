import List from "./List";
import ElementList from "./List/ElementList";

const App = () => {
    const pokemons = [
        {"id":1, "name":"Bulbasaur", "type":"Planta"}, 
        {"id":2, "name":"Charmander", "type":"Fuego"},
        {"id":3, "name":"Squirtle", "type":"Agua"}
    ];

    return <List>
        <ElementList pokemons={pokemons}/>
    </List>;
}

export default App;