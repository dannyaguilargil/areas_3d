import React, { useEffect } from 'react';

function Particles({ count = 30 }) {
  const particles = Array.from({ length: count }, (_, i) => ({
    id: i,
    delay: Math.random() * 10,
    duration: Math.random() * 10 + 15,
    dx: Math.random() * 40 - 20,
  }));

  return (
    <div className="hero-particles">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            '--dx': `${particle.dx}px`,
            animation: `drift ${particle.duration}s linear ${particle.delay}s infinite`,
          }}
        ></div>
      ))}
    </div>
  );
}

export default Particles;
