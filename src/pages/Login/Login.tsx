import styles from "./Login.module.css";

const Login = () => {
    return (
        <form className={styles.login_from}>
            <h2>Login</h2>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
