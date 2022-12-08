import * as THREE from "three";
import "./style.css";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import renderSystem from "./meshes";
// SETUP
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

camera.position.z = 100;
camera.position.y = 5;
camera.position.x = 10;
scene.add(camera);

const canvas = document.getElementById("webgl");

// Controls
const controls = new OrbitControls(camera, canvas);

// Renderer
const renderer = new THREE.WebGLRenderer({ canvas });

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

const updateSystem = renderSystem(scene);
// lights
const ambientLight = new THREE.AmbientLight(0xffffff, 0.15);
// pointLight.position.z = 20;
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 3, 350, 2);
pointLight.position.z = 0;
scene.add(pointLight);

const tick = () => {
  controls.update();
  updateSystem();
  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
};
tick();
