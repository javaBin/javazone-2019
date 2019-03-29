import { IParticlesParams } from "react-particles-js";

function getRandomColor() {
    const colors = [
        '#6F86C0', // Blue
        '#939ECD',
        '#5790A6', // Green
        '#78A8B3',
        '#C778B5', // Pink
        '#EC8FC2',
        '#D78E63', // Orange
        '#F2A470'
    ]
    const r = Math.floor((Math.random() * colors.length));
    return colors[r];
}

export const config = 
{
  "showCube": false,
  "dimension": "2D",
  "velocity": 0.5,
  "boundaryType": "passthru",
  "direction": {
    "xMin": 1,
    "xMax": 0.3,
    "yMin": 0,
    "yMax": 0,
    "zMin": 0,
    "zMax": 0
  },
  "lines": {
    "colorMode": "solid",
    "color": "#4831d5",
    "transparency": 0.9,
    "limitConnections": true,
    "maxConnections": 20,
    "minDistance": 110,
    "visible": false
  },
  "particles": {
    "colorMode": "solid",
    "color": getRandomColor(),
    "transparency": 0.9,
    "shape": "circle",
    "boundingBox": "canvas",
    "count": 709,
    "minSize": 20,
    "maxSize": 50,
    "visible": true
  },
  "cameraControls": {
    "enabled": true,
    "enableDamping": false,
    "dampingFactor": 0.65,
    "enableZoom": false,
    "autoRotate": false,
    "autoRotateSpeed": 0.3,
    "resetCameraFlag": true
  }
}