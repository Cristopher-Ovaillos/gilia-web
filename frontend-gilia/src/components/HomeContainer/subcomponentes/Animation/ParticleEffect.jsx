import { useRef, useEffect } from "react";
import * as THREE from "three";
import { useTheme } from "../../../../context/ThemeContext"; 

// eslint-disable-next-line react/prop-types
const ParticleEffect = ({ children }) => {
  const mountRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true });
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

    // Convertir el color del tema a hexadecimal
    const particleColor = new THREE.Color(theme.token.colorTextBase);

    // Crear una textura de círculo en tiempo real
    const createCircleTexture = () => {
      const size = 128; 
      const canvas = document.createElement("canvas");
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext("2d");

      // Dibujar círculo
      ctx.beginPath();
      ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
      ctx.fillStyle = "#FFFFFF";
      ctx.fill();

      const texture = new THREE.CanvasTexture(canvas);
      return texture;
    };

    const material = new THREE.PointsMaterial({
      color: particleColor,
      size: 0.1, // Tamaño de las partículas
      map: createCircleTexture(), // Usar la textura de círculo
      transparent: true, // Habilita transparencia
      alphaTest: 0.5, // Elimina bordes no deseados
    });

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
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [theme]);

  return (
    <div ref={mountRef} style={{ position: "relative", outline: "none", border: "none" }}>
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
            zIndex: 1,
            pointerEvents: "none",
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default ParticleEffect;
