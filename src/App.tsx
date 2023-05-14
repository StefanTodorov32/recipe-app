import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Login from "./pages/Login/Login";
function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: (
                <>
                    <Navbar />
                    <Outlet />
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
                    element: <div>register Page</div>,
                },
            ],
        },
    ]);
    return (
        <main>
            <section>
                <RouterProvider router={router}></RouterProvider>
            </section>
        </main>
    );
}

export default App;
