// components/Hero3DCarousel.jsx
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Hero3DCarousel = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth;
    const height = 300;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    mount.appendChild(renderer.domElement);

    // Cube
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshNormalMaterial();
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Animation loop
    let animationId;
    const animate = () => {
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    };
    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      mount.removeChild(renderer.domElement);
    };
  }, []); // ✅ Dependency array vẫn để trống vì ref không thay đổi

  return (
    <div className="mb-8">
      <div
        ref={mountRef}
        className="w-full mx-auto rounded-lg overflow-hidden"
      />

      <Swiper spaceBetween={20} slidesPerView={1} loop={true} className="mt-4">
        <SwiperSlide>
          <img
            src="/images/project1.jpg"
            alt="Dự án 1"
            className="w-full h-64 object-cover rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/project2.jpg"
            alt="Dự án 2"
            className="w-full h-64 object-cover rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/project3.jpg"
            alt="Dự án 3"
            className="w-full h-64 object-cover rounded-lg"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero3DCarousel;
