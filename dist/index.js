"use strict";
//https://www.youtube.com/watch?v=qy8PxD3alWw
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const port = 3000;
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    res.send("HELLO FROM MY EXPRESS + TYPESCRIPT APP!");
});
app.listen(port, () => console.log(`The app is now listening on port ${port}`));
