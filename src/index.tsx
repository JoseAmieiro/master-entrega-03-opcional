import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app"
import classes from "./styles.scss";
import logo from "./content/logo.png";



console.log("classes", classes);


const root = createRoot(document.getElementById("root"));
root.render(
    <div>
        <h1 className={classes["title"]}>
            <App/>
        </h1>
        <img src={logo} alt="Logo" />
    </div>
);

