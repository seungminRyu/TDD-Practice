import { Link } from "react-router-dom";

function Navigation() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">카운터</Link>
                </li>
            </ul>
        </div>
    );
}

export default Navigation;
