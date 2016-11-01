// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const PIXI = require('pixi.js');

//Create the renderer
var renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight);

renderer.view.style.position = "absolute";
renderer.view.style.display = "block";
renderer.autoResize = true;

//Add the canvas to the HTML document
document.body.appendChild(renderer.view);

//Create a container object called the `stage`
var stage = new PIXI.Container();

//Tell the `renderer` to `render` the `stage`
renderer.render(stage);

