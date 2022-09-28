import { HColors } from "@laniakea.js/halley.http"
import { halley } from "./main.js"

const colors = new HColors(`Halley listening on port ${halley.port}`, `${halley.port}`)

halley.ready(colors.print("cyan"))