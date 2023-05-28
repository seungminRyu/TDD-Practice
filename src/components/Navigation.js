import { Link } from "react-router-dom";

function Navigation() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/counter">카운터</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to="/shopping">쇼핑</Link>
                </li>
            </ul>
        </div>
    );
}

export default Navigation;
