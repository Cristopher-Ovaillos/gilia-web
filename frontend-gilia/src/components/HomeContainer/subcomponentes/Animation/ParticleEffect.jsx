import { useRef, useEffect } from "react";
import * as THREE from "three";
import { useTheme } from "../../../../context/ThemeContext"; 

// eslint-disable-next-line react/prop-types
const ParticleEffect = ({ children }) => {
  const mountRef = useRef(null);
  const { theme } = useTheme(); // Obtener el tema actual

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true }); // Fondo transparente
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const particleCount = 150;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = Math.random() * -10;
      positions[i * 3 + 1] = Math.random() * 10 - 5;
      positions[i * 3 + 2] = Math.random() * 10 - 5;
      velocities[i] = Math.random() * 0.05 + 0.01;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    
    // Convertir el color del tema a un valor hexadecimal para Three.js
    const particleColor = new THREE.Color(theme.token.colorTextBase);
    const material = new THREE.PointsMaterial({ color: particleColor, size: 0.1 });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);
    camera.position.z = 10;

    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const positions = particles.geometry.attributes.position.array;
      const halfWidth = window.innerWidth / 2;
      const maxX = halfWidth / 100;
      const minX = -maxX;
      let allParticlesReachedEnd = true;

      for (let i = 0; i < positions.length; i += 3) {
        positions[i] += velocities[i / 3];
        if (positions[i] < maxX && positions[i] > minX) {
          allParticlesReachedEnd = false;
        }
      }

      if (allParticlesReachedEnd) {
        for (let i = 0; i < velocities.length; i++) {
          velocities[i] = -velocities[i];
        }
      }

      particles.geometry.attributes.position.needsUpdate = true;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      mountRef.current.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, [theme]); // Se vuelve a ejecutar cuando el tema cambia

  return (
    <div ref={mountRef} style={{ position: "relative" }}>
      {children && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "90%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1, // Para que esté sobre el canvas
            pointerEvents: "none", // Evita interferencias con el fondo
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default ParticleEffect;
