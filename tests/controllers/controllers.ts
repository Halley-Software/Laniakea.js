import { HalleyListener } from "halley.http"

export const main: HalleyListener = (req, res) => {
    const { pathname: root } = new URL("../public/index.html", import.meta.url)
    res.sendFile(root, "utf-8")
}

export const about: HalleyListener = (req, res) => {
    res.send("<h1>This is the about page</h1>")
}