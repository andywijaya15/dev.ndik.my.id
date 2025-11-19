import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroWithThree() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // SCENE
    const scene = new THREE.Scene();

    // CAMERA
    const camera = new THREE.PerspectiveCamera(75, mount.clientWidth / mount.clientHeight, 0.1, 1000);
    camera.position.z = 4;

    // RENDERER
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mount.appendChild(renderer.domElement);

    // PARTICLE GEOMETRY
    const particlesCount = 1500;
    const positions = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10;
    }

    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: 0x7e31eb,
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // ANIMATION
    const animate = () => {
      particles.rotation.y += 0.0009;
      particles.rotation.x += 0.0003;

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    // RESIZE HANDLER
    const handleResize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Three.js Background */}
      <div ref={mountRef} className="absolute inset-0" />

      {/* Hero Content */}
      <div className="absolute inset-0 flex items-center justify-center px-6 text-white text-center z-10">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-6xl font-bold tracking-widest text-indigo-400 drop-shadow-lg">ANDY WIJAYA</h1>
        </div>
      </div>
    </section>
  );
}
