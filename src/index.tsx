import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app"
import classes from "./styles.scss";

console.log("classes", classes);


const root = createRoot(document.getElementById("root"));
root.render(
    <h1 className={classes["title"]}>
        <App/>
    </h1>
);

