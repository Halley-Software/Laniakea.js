import { Halley} from "@laniakea.js/halley.http"

import { secondaryRoute } from "./routes/index.routes.js"

export const halley = new Halley({
    port: 5000,
    env: "development"
})

halley.get("/", (req, res) => {
    res.write("<h1>Hello World from Laniakea Workspaces!</h1>")
    res.end("")
})

halley.get("/second", secondaryRoute)