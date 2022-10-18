import { Halley } from "halley.http"

export const halley = new Halley({
    env: "development"
})

import { main, about } from "./controllers/controllers.js"

halley.get("/", main)

halley.get("/about", about)