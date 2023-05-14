import styles from "../App.module.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Link to="/">Logo</Link>
            </div>
            <div className={styles.links}>
                <Link to="/">Home</Link>
                <Link to="/recipes">Recipes</Link>
                <Link to="/search">Search</Link>
                <Link to="/create">Create Recipe</Link>
            </div>
            <div className={styles.buttons}>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </div>
        </nav>
    );
};
