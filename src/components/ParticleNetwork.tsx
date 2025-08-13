import React, { useEffect, useRef } from 'react';

// Configuration
const config = {
    particleCount: 130,
    particleSize: 1,
    connectionDistance: 240,
    particleColor: '#60a5fa',
    connectionColor: '#3b82f6'
};

// Global variables
let canvas: HTMLCanvasElement | null = null;
let ctx: CanvasRenderingContext2D | null = null;
let particles: Particle[] = [];
let mouse = { x: 0, y: 0 };
let isMouseMoving = false;

// Particle class
class Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    baseSize: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.size = config.particleSize;
        this.baseSize = config.particleSize;
    }

    update() {
        // Move
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges
        if (this.x <= 0 || this.x >= canvas!.width) this.vx = -this.vx;
        if (this.y <= 0 || this.y >= canvas!.height) this.vy = -this.vy;

        // Keep in bounds
        this.x = Math.max(0, Math.min(canvas!.width, this.x));
        this.y = Math.max(0, Math.min(canvas!.height, this.y));

        // Check mouse proximity
        const distance = Math.sqrt((this.x - mouse.x) ** 2 + (this.y - mouse.y) ** 2);
        if (distance < config.connectionDistance) {
            this.size = this.baseSize + 1;
        } else {
            this.size = Math.max(this.baseSize, this.size * 0.95);
        }
    }

    draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = config.particleColor;
        ctx.fill();
    }
}

// Initialize
function init() {
    // Get canvas element
    canvas = document.getElementById('particleCanvas') as HTMLCanvasElement;
    if (!canvas) return;
    
    // Get canvas context
    ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Create particles
    particles = [];
    for (let i = 0; i < config.particleCount; i++) {
        particles.push(new Particle(
            Math.random() * canvas.width,
            Math.random() * canvas.height
        ));
    }
    
    // Add event listeners to window
    window.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
        isMouseMoving = true;
    });
    
    window.addEventListener('mouseleave', () => {
        isMouseMoving = false;
    });
    
    // Start animation
    animate();
}

// Draw connections
function drawConnections() {
    if (!isMouseMoving || !ctx) return;
    
    ctx.strokeStyle = config.connectionColor;
    ctx.lineWidth = 0.3;
    
    // Draw connections between particles near the mouse
    for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            const p1 = particles[i];
            const p2 = particles[j];
            
            // Check if both particles are near mouse
            const p1DistanceToMouse = Math.sqrt((p1.x - mouse.x) ** 2 + (p1.y - mouse.y) ** 2);
            const p2DistanceToMouse = Math.sqrt((p2.x - mouse.x) ** 2 + (p2.y - mouse.y) ** 2);
            
            // If both particles are within connection distance of mouse, connect them
            if (p1DistanceToMouse < config.connectionDistance && p2DistanceToMouse < config.connectionDistance) {
                // Also check if they're close enough to each other
                const distanceBetweenParticles = Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
                
                if (distanceBetweenParticles < config.connectionDistance * 0.6) {
                    ctx.beginPath();
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.stroke();
                }
            }
        }
    }
}

// Animation loop
function animate() {
    if (!ctx || !canvas) return;
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Update and draw particles
    particles.forEach(particle => {
        particle.update();
        particle.draw();
    });
    
    // Draw connections
    drawConnections();
    
    // Continue animation
    requestAnimationFrame(animate);
}

// Handle resize
function handleResize() {
    if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
}

const ParticleNetwork = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        // Wait for DOM to be fully loaded
        const timer = setTimeout(() => {
            init();
        }, 100);

        // Handle resize
        window.addEventListener('resize', handleResize);

        return () => {
            clearTimeout(timer);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            id="particleCanvas"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 1,
                backgroundColor: '#0f1720'
            }}
        />
    );
};

export default ParticleNetwork;