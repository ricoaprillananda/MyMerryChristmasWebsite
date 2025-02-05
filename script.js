window.addEventListener('load', function() {
    const audio = document.getElementById('bg-music');
    audio.play(); // Starts the audio
    audio.muted = false; // Unmute the audio after loading
});

// Snowfall Effect
const canvas = document.getElementById('snowfall');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let snowflakes = [];

function createSnowflakes() {
    const numFlakes = 200; // Increased snowflakes for a denser effect
    for (let i = 0; i < numFlakes; i++) {
        snowflakes.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 3 + 1,
            speed: Math.random() * 1 + 0.5,
            opacity: Math.random() * 0.5 + 0.3, // Added opacity for a realistic effect
        });
    }
}

function drawSnowflakes() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'white';
    ctx.beginPath();
    for (const flake of snowflakes) {
        ctx.moveTo(flake.x, flake.y);
        ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
    }
    ctx.fill();
    updateSnowflakes();
}

function updateSnowflakes() {
    for (const flake of snowflakes) {
        flake.y += flake.speed;
        if (flake.y > canvas.height) {
            flake.y = -flake.radius;
            flake.x = Math.random() * canvas.width;
        }
    }
}

function animateSnowfall() {
    drawSnowflakes();
    requestAnimationFrame(animateSnowfall);
}

createSnowflakes();
animateSnowfall();

// Resize Canvas on Window Resize
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    snowflakes = [];
    createSnowflakes();
});

// Flying Santa Animation
let santa = document.createElement('img');
santa.src = 'assets/images/santa.png';
santa.style.position = 'fixed';
santa.style.top = '10%';
santa.style.left = '-200px';
santa.style.width = '150px';
santa.style.transition = 'transform 1s linear';
document.body.appendChild(santa);

function flySanta() {
    let position = -200;
    const interval = setInterval(() => {
        position += 5;
        santa.style.left = `${position}px`;
        santa.style.transform = `rotate(${position / 10}deg)`; // Adds rotation for more dynamic movement
        if (position > window.innerWidth) {
            position = -200;
        }
    }, 50);
}

flySanta();

// Contact Form Submission
const contactForm = document.querySelector('form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you! Santa will see your message soon!');
    contactForm.reset();
});
