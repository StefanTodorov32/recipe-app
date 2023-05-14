import styles from "./Login.module.css";
import { useForm } from "react-hook-form";
const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    return (
        <form
            className={styles.login_from}
            onSubmit={handleSubmit((data) => console.log(data))}
        >
            <h2>Login</h2>
            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                {...register("email", {
                    required: true,
                    validate: (value) =>
                        /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value),
                })}
                className={errors.email ? styles.error_input : ""}
            />
            <label htmlFor="password">Password:</label>
            <input
                type="password"
                id="password"
                {...register("password", {
                    required: true,
                })}
            />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
