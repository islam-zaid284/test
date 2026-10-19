import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

function makeMaterial(color, options = {}) {
  return new THREE.MeshStandardMaterial({ color, roughness: 0.48, metalness: 0.28, ...options });
}

function addBox(parent, size, position, material, rotation = [0, 0, 0]) {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(...size), material);
  mesh.position.set(...position);
  mesh.rotation.set(...rotation);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  parent.add(mesh);
  return mesh;
}

function addCylinder(parent, radiusTop, radiusBottom, length, position, material, rotation = [0, 0, 0]) {
  const mesh = new THREE.Mesh(new THREE.CylinderGeometry(radiusTop, radiusBottom, length, 32), material);
  mesh.position.set(...position);
  mesh.rotation.set(...rotation);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  parent.add(mesh);
  return mesh;
}

function addRod(parent, start, end, radius, material) {
  const a = new THREE.Vector3(...start);
  const b = new THREE.Vector3(...end);
  const direction = new THREE.Vector3().subVectors(b, a);
  const rod = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, direction.length(), 12), material);
  rod.position.copy(a).add(b).multiplyScalar(0.5);
  rod.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction.normalize());
  rod.castShadow = true;
  parent.add(rod);
  return rod;
}

function makeTelescope() {
  const group = new THREE.Group();
  const tube = makeMaterial("#476a7b", { metalness: 0.62, roughness: 0.3 });
  const trim = makeMaterial("#c1d5d4", { metalness: 0.78, roughness: 0.24 });
  const dark = makeMaterial("#17242e", { metalness: 0.58, roughness: 0.36 });
  const glass = makeMaterial("#76d0df", { metalness: 0.34, roughness: 0.15, transparent: true, opacity: 0.72 });
  const gold = makeMaterial("#c8a878", { metalness: 0.72, roughness: 0.32 });

  // Illustrative optical tube, focuser, lens, and mount; proportions are not a measured telescope design.
  addCylinder(group, 0.57, 0.57, 3.45, [0, 0.76, 0], tube, [0, 0, Math.PI / 2]);
  addCylinder(group, 0.6, 0.6, 0.12, [1.75, 0.76, 0], trim, [0, 0, Math.PI / 2]);
  addCylinder(group, 0.5, 0.5, 0.035, [1.83, 0.76, 0], glass, [0, 0, Math.PI / 2]);
  addCylinder(group, 0.6, 0.6, 0.12, [-1.75, 0.76, 0], dark, [0, 0, Math.PI / 2]);
  addCylinder(group, 0.18, 0.18, 0.38, [-0.98, 1.34, 0], dark);
  addCylinder(group, 0.13, 0.13, 0.16, [-0.98, 1.59, 0], trim);
  addBox(group, [0.55, 0.14, 0.3], [-0.98, 1.08, 0], gold);

  addCylinder(group, 0.72, 0.8, 0.24, [0, -0.13, 0], dark);
  addCylinder(group, 0.36, 0.42, 0.85, [0, -0.62, 0], trim);
  addCylinder(group, 0.52, 0.64, 0.18, [0, -1.08, 0], dark);
  addRod(group, [0, -1.06, 0], [-1.05, -2.52, 0.78], 0.072, trim);
  addRod(group, [0, -1.06, 0], [1.05, -2.52, 0.78], 0.072, trim);
  addRod(group, [0, -1.06, 0], [0, -2.52, -1.12], 0.072, trim);
  addRod(group, [-0.46, -1.55, 0.34], [0.46, -1.55, 0.34], 0.045, gold);
  addRod(group, [0.43, -0.12, 0], [0.43, 0.45, 0], 0.09, gold);
  addRod(group, [-0.43, -0.12, 0], [-0.43, 0.45, 0], 0.09, gold);
  return group;
}

function makeArduino() {
  const group = new THREE.Group();
  const pcb = makeMaterial("#147c68", { metalness: 0.12, roughness: 0.7 });
  const dark = makeMaterial("#111820", { metalness: 0.35, roughness: 0.42 });
  const silver = makeMaterial("#b9c7ca", { metalness: 0.8, roughness: 0.26 });
  const gold = makeMaterial("#d6b65e", { metalness: 0.78, roughness: 0.3 });
  const blue = makeMaterial("#277eae", { metalness: 0.38, roughness: 0.38 });

  // Arduino Uno-style educational concept model, not an exact board revision or wiring diagram.
  addBox(group, [3.8, 0.16, 2.35], [0, 0, 0], pcb);
  addBox(group, [0.94, 0.48, 0.72], [-0.48, 0.3, 0.1], dark);
  addBox(group, [0.42, 0.32, 0.42], [0.55, 0.25, -0.08], dark);
  addBox(group, [0.35, 0.23, 0.31], [-1.53, 0.19, -0.38], blue);
  addBox(group, [0.48, 0.4, 0.76], [1.89, 0.16, 0], silver);
  addBox(group, [0.35, 0.25, 0.52], [-1.9, 0.12, 0.48], dark);
  addBox(group, [0.13, 0.1, 0.13], [1.18, 0.2, 0.54], gold);
  addBox(group, [0.13, 0.1, 0.13], [1.48, 0.2, 0.54], gold);

  for (let i = 0; i < 14; i += 1) {
    const x = -1.52 + i * 0.235;
    addBox(group, [0.08, 0.12, 0.14], [x, 0.12, -1.02], gold);
    addBox(group, [0.08, 0.12, 0.14], [x, 0.12, 1.02], gold);
  }
  for (let i = 0; i < 6; i += 1) {
    const z = -0.58 + i * 0.235;
    addBox(group, [0.14, 0.12, 0.08], [-1.78, 0.12, z], gold);
  }
  for (const [x, z] of [[-1.68, -0.86], [1.68, -0.86], [-1.68, 0.86], [1.68, 0.86]]) {
    addCylinder(group, 0.105, 0.105, 0.035, [x, 0.095, z], gold);
    addCylinder(group, 0.056, 0.056, 0.04, [x, 0.12, z], makeMaterial("#0b1420"));
  }
  return group;
}

export default function TelescopeModel({ modelType }) {
  const mountRef = useRef(null);
  const [unavailable, setUnavailable] = useState(false);

  useEffect(() => {
    const host = mountRef.current;
    if (!host) return undefined;

    let renderer;
    let controls;
    let observer;
    let model;
    let disposed = false;
    let failureTimer;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
    camera.position.set(4.7, 3.3, 6.6);
    camera.lookAt(0, 0, 0);
    scene.add(new THREE.HemisphereLight("#e2f4f4", "#17222d", 2.1));
    const keyLight = new THREE.DirectionalLight("#fff1d4", 3.1);
    keyLight.position.set(4, 7, 5);
    scene.add(keyLight);
    const fillLight = new THREE.DirectionalLight("#70d4df", 1.8);
    fillLight.position.set(-5, 2, -4);
    scene.add(fillLight);

    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.1;
      host.replaceChildren(renderer.domElement);

      model = modelType === "arduino" ? makeArduino() : makeTelescope();
      scene.add(model);
      controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.08;
      controls.minDistance = 4.2;
      controls.maxDistance = 12;
      controls.maxPolarAngle = Math.PI * 0.82;
      controls.target.set(0, 0, 0);
      const render = () => {
        if (!disposed) renderer.render(scene, camera);
      };
      controls.addEventListener("change", render);
      observer = new ResizeObserver(() => {
        if (!renderer || !host.clientWidth || !host.clientHeight) return;
        camera.aspect = host.clientWidth / host.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(host.clientWidth, host.clientHeight);
        render();
      });
      observer.observe(host);
      camera.aspect = (host.clientWidth || 1) / (host.clientHeight || 1);
      camera.updateProjectionMatrix();
      renderer.setSize(host.clientWidth || 720, host.clientHeight || 460);
      render();
    } catch {
      failureTimer = window.setTimeout(() => {
        if (!disposed) setUnavailable(true);
      }, 0);
      renderer?.dispose();
    }

    return () => {
      disposed = true;
      window.clearTimeout(failureTimer);
      observer?.disconnect();
      controls?.dispose();
      model?.traverse((item) => {
        if (item.geometry) item.geometry.dispose();
        if (item.material) {
          const materials = Array.isArray(item.material) ? item.material : [item.material];
          materials.forEach((material) => material.dispose());
        }
      });
      renderer?.dispose();
      if (host) host.replaceChildren();
    };
  }, [modelType]);

  return (
    <div className="three-model-host" ref={mountRef} role="img" aria-label={modelType === "arduino" ? "Interactive illustrative 3D model of an Arduino-style circuit board" : "Interactive illustrative 3D model of a telescope on a tripod"}>
      {unavailable && <div className="webgl-fallback">3D preview is unavailable in this browser. The project description is shown below.</div>}
    </div>
  );
}
