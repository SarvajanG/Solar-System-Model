const sun = document.querySelector('.sun');
const sunRad = sun.offsetWidth / 2;
const sunX = window.innerWidth / 2 - sunRad;
const sunY = window.innerHeight / 2 - sunRad;


sun.style.left = `${sunX}px`;
sun.style.top = `${sunY}px`;

const earthOrbitalDistance = 135;

const mercury = {
    speed: 0.0479,
    theta: Math.random() * 360,
    radius: 0.45*earthOrbitalDistance,
    el: document.querySelector('.mercury')
}

const venus = {
    speed: 0.035,
    theta: Math.random() * 360,
    radius: 0.72*earthOrbitalDistance,
    el: document.querySelector('.venus')
}

const earth = {
    speed: 0.0298,
    theta: Math.random() * 360,
    radius: earthOrbitalDistance,
    el: document.querySelector('.earth')
}

const mars = {
    speed: 0.0241,
    theta: Math.random() * 360,
    radius: 1.28*earthOrbitalDistance,
    el: document.querySelector('.mars')
}

const jupiter = {
    speed: 0.0131,
    theta: Math.random() * 360,
    radius: 1.75*earthOrbitalDistance,
    el: document.querySelector('.jupiter')
}

const saturn = {
    speed: 0.0097,
    theta: Math.random() * 360,
    radius: 2.2*earthOrbitalDistance,
    el: document.querySelector('.saturn')
}

const uranus = {
    speed: 0.0068,
    theta: Math.random() * 360,
    radius: 2.75*earthOrbitalDistance,
    el: document.querySelector('.uranus')
}

const neptune = {
    speed: 0.0054,
    theta: Math.random() * 360,
    radius: 3.25*earthOrbitalDistance,
    el: document.querySelector('.neptune')
}

const moon = {
    speed: 0.2,
    theta: Math.random() * 360,
    radius: 20,
    el: document.querySelector('.moon')
}

function update(planet) {
    const planetRadius = document.querySelector(`.${planet.el.classList[0]}`).offsetWidth / 2;
    const planetX = (Math.sin(planet.theta)*planet.radius) + sunX + sunRad - planetRadius;
    const planetY = (Math.cos(planet.theta)*planet.radius) + sunY + sunRad - planetRadius;
    planet.theta += planet.speed;
    planet.el.style.left = `${planetX}px`;
    planet.el.style.top = `${planetY}px`;
    if (planet == earth) {
        const moonRadius = document.querySelector('.moon').offsetWidth / 2;
        moon.theta += moon.speed;
        moon.el.style.left = `${(Math.sin(moon.theta)*moon.radius) + planetX + planetRadius - moonRadius}px`;
        moon.el.style.top = `${(Math.cos(moon.theta)*moon.radius) + planetY + planetRadius - moonRadius}px`;
    }
}

function setOrbit(planet) {
    const orbit = document.querySelector(`.${planet}-orbit`);
    /*orbit.style.width = `${planet.radius}px`;
    orbit.style.height = `${planet.radius}px`;*/
    const orbitRad = orbit.offsetWidth / 2;
    const orbitX = window.innerWidth / 2 - orbitRad;
    const orbitY = window.innerHeight / 2 - orbitRad;
    orbit.style.left = `${orbitX}px`;
    orbit.style.top = `${orbitY}px`;
}

planets = ["mercury","venus","earth","mars","jupiter","saturn","uranus","neptune"];
planets.forEach(setOrbit);

setInterval(() => {
    update(mercury);
    update(venus);
    update(earth);
    update(mars);
    update(jupiter);
    update(saturn);
    update(uranus);
    update(neptune);
}, 25);


