import ElementList from "./ElementList";

const List = () =>
    <ul>
        <ElementList 
            number="1"
            name="Bulbasur"
            type="Planta"
        />
        <ElementList 
            number="4"
            name="Charmander"
            type="Fuego"
        />
    </ul>;

export default List;
