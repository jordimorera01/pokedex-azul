const ElementImage = (props) =>

    <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + props.number + ".png"} alt={props.name}/>;

export default ElementImage;