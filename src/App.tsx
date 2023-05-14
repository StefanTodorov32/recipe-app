import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Login from "./pages/Login/Login";
import styles from "./App.module.css";
import Register from "./pages/Login/Register";
function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: (
                <>
                    <Navbar />
                    <section className={styles.section}>
                        <Outlet />
                    </section>
                </>
            ),
            children: [
                {
                    path: "",
                    element: <div>hello Page</div>,
                },
                {
                    path: "recipes",
                    element: <div>recipes Page</div>,
                },
                {
                    path: "search",
                    element: <div>search Page</div>,
                },
                {
                    path: "create",
                    element: <div>create Page</div>,
                },
                {
                    path: "login",
                    element: <Login />,
                },
                {
                    path: "register",
                    element: <Register />,
                },
            ],
        },
    ]);
    return (
        <main>
            <RouterProvider router={router}></RouterProvider>
        </main>
    );
}

export default App;
