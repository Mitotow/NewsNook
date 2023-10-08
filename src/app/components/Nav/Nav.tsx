import NavElement from "../../../interfaces/NavElement";
import './Nav.scss';

const Nav = (props:{elements:NavElement[]}) => {
    return <nav>
        <ul>
            {props.elements.map(element => {
                return <li key={element.name}><a href={element.href}>{element.name}</a></li>
            })}
        </ul>
    </nav>
}

export default Nav;