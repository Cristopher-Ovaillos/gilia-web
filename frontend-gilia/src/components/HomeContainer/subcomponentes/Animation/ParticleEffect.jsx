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
      positions[i * 3] = Math.random() * -10; // Ajustar la distancia de las partículas
      positions[i * 3 + 1] = Math.random() * 10 - 4; // Ajustar la altura de las partículas
      positions[i * 3 + 2] = Math.random() * 10 - 5; // Ajustar la profundidad de las partículas
      velocities[i] = Math.random() * 0.06 + 0.01; // Ajustar la velocidad de las partículas
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const particleColor = new THREE.Color(theme.token.colorTextBase);

    const createCircleTexture = () => {
      const size = 128;
      const canvas = document.createElement("canvas");
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext("2d");

      ctx.beginPath();
      ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
      ctx.fillStyle = "#FFFFFF";
      ctx.fill();

      const texture = new THREE.CanvasTexture(canvas);
      return texture;
    };

    const material = new THREE.PointsMaterial({
      color: particleColor,
      size: 0.1,
      map: createCircleTexture(),
      transparent: true,
      alphaTest: 0.5,
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

    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      window.removeEventListener('resize', handleResize);
    };
  }, [theme]);

  return (
    <div 
      ref={mountRef} 
      style={{
        position: "relative", 
        outline: "none", 
        border: "none",  
        width: "100vw", 
        height: "100vh", // Ajustar la altura al 50% de la pantalla
      }}
    >
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
