import { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ParticleEffect = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Escena, cámara y renderizador
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Geometría de partículas
    const particleCount = 150;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3); // 3 coordenadas (x, y, z) por partícula
    const velocities = new Float32Array(particleCount); // Array para almacenar las velocidades (dirección)

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = Math.random() * -10; // Comienza desde la izquierda (x < 0)
      positions[i * 3 + 1] = Math.random() * 10 - 5; // Variación en Y (mantenerse centrado)
      positions[i * 3 + 2] = Math.random() * 10 - 5; // Variación en Z (profundidad)
      velocities[i] = Math.random() * 0.05 + 0.01; // Velocidades aleatorias para las partículas
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // Material de partículas
    const material = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.1,
    });

    // Sistema de partículas
    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Configuración de la cámara
    camera.position.z = 10;

    // Función de animación
    const animate = () => {
      requestAnimationFrame(animate);

      const positions = particles.geometry.attributes.position.array;
      const halfWidth = window.innerWidth / 2; // Mitad del ancho de la ventana para calcular los límites
      const maxX = halfWidth / 100; // Convertir los píxeles a coordenadas de THREE.js
      const minX = -maxX;

      let allParticlesReachedEnd = true; // Variable para verificar si todas las partículas han llegado al borde

      for (let i = 0; i < positions.length; i += 3) {
        // Movimiento de las partículas solo en el eje X
        positions[i] += velocities[i / 3]; // Usamos velocidades diferentes para cada partícula

        // Comprobar si alguna partícula aún no ha llegado al borde
        if (positions[i] < maxX && positions[i] > minX) {
          allParticlesReachedEnd = false;
        }
      }

      // Si todas las partículas han llegado al borde, cambiar la dirección
      if (allParticlesReachedEnd) {
        for (let i = 0; i < velocities.length; i++) {
          velocities[i] = -velocities[i]; // Invertir la dirección de todas las partículas
        }
      }

      particles.geometry.attributes.position.needsUpdate = true; // Necesitamos actualizar las posiciones

      // Renderizado
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      renderer.dispose();
    };
  }, []); // Solo ejecutamos el efecto una vez al montar el componente

  return <div ref={mountRef}></div>;
};

export default ParticleEffect;
