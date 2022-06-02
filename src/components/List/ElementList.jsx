import ElementImage from "./ElementImage";
const ElementList = (props) =>
    <li>
        <ElementImage 
            number={props.number}
            name={props.name}
        />  
        <span className="number">N. {props.number}</span>
        <span className="name">{props.name}</span>
        <span className="type">{props.type}</span>
        <a href="#" className="link">Ver detalle</a>
    </li>;
export default ElementList;