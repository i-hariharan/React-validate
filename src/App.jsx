import React from "react";
import { ReactDOM } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Styles from "./Styles/Username.module.css";
import Register from "./components/Register";

  const router = createBrowserRouter([
    
    {
        path:"/register",
        element:<Register></Register>
    }
    ]);

function App(){
     return(
        <main>
           <RouterProvider router = {router}></RouterProvider>
        </main>
     )
}

export default App;
