import { Halley, HColors } from "halley.http"

export const halley = new Halley({
    port: 3000,
    env: "development"
})

export const HColor = new HColors(`Servidor escuchando en el purto ${halley.port}`, `${halley.port}`)

import { main, about } from "./controllers/controllers.js"

halley.get("/", main)

halley.get("/about", about)