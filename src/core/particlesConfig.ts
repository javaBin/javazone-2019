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

export const config: IParticlesParams = {
  particles: {
    number: {
      value: 400,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: getRandomColor()
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#ffffff"
      },
      polygon: {
        nb_sides: 5
      }
    },
    opacity: {
      value: 1,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0,
        sync: false
      }
    },
    size: {
      value: 4,
      random: true,
      anim: {
        enable: false,
        speed: 4,
        size_min: 0.3,
        sync: false
      }
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "",
      opacity: 0.8,
      width: 1
    },
    move: {
      enable: true,
      speed: 1,
      direction: "left",
      random: true,
      straight: true,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 600
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "bubble"
      },
      onclick: {
        enable: true,
        mode: "repulse"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 50,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 100,
        size: 0,
        duration: 2,
        opacity: 0,
      },
      repulse: {
        distance: 300,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
}