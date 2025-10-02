import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { useTheme } from '../../../contexts/ThemeContext';

interface AnimatedPolygonProps {
  position: [number, number, number];
  color: string;
  scale?: number;
}

const AnimatedPolygon: React.FC<AnimatedPolygonProps> = ({ position, color, scale = 1 }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<any>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  useEffect(() => {
    if (meshRef.current) {
      gsap.to(meshRef.current.scale, {
        x: scale * 1.2,
        y: scale * 1.2,
        z: scale * 1.2,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut'
      });
    }
  }, [scale]);

  return (
    <mesh ref={meshRef} position={position}>
      <icosahedronGeometry args={[1, 0]} />
      <MeshDistortMaterial
        ref={materialRef}
        color={color}
        attach="material"
        distort={0.4}
        speed={2}
        roughness={0.2}
        metalness={0.8}
      />
    </mesh>
  );
};

interface SecurityPolygonSceneProps {
  className?: string;
}

const SecurityPolygonScene: React.FC<SecurityPolygonSceneProps> = ({ className = '' }) => {
  const { isDark } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      gsap.to(containerRef.current, {
        opacity: 0.2,
        duration: 1,
        ease: 'power2.out'
      });
    }
  }, []);

  const polygonColor = isDark ? '#60A5FA' : '#3B82F6';
  const ambientLightIntensity = isDark ? 0.3 : 0.5;
  const pointLightIntensity = isDark ? 0.8 : 1;

  return (
    <div ref={containerRef} className={`w-full h-full opacity-0 ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={ambientLightIntensity} />
        <pointLight position={[10, 10, 10]} intensity={pointLightIntensity} />
        <pointLight position={[-10, -10, -10]} intensity={pointLightIntensity * 0.5} color="#10B981" />
        
        <AnimatedPolygon position={[0, 0, 0]} color={polygonColor} scale={1.5} />
        <AnimatedPolygon position={[2, 1, -2]} color="#10B981" scale={0.8} />
        <AnimatedPolygon position={[-2, -1, -2]} color="#8B5CF6" scale={0.6} />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
};

export default SecurityPolygonScene;