import * as THREE from "three";
import sun from "./textures/sun.jpg";
import mercury from "./textures/mercury.jpg";
import venus from "./textures/venus.jpg";
import earth from "./textures/earth.jpg";
import mars from "./textures/mars.jpg";
import jupiter from "./textures/jupiter.jpg";
import saturn from "./textures/saturn.jpg";
import uranus from "./textures/uranus.jpg";
import neptune from "./textures/neptune.jpg";
const renderSystem = (scene) => {
  // Texture
  const textureLoader = new THREE.TextureLoader();
  const sunTexture = textureLoader.load(sun);
  const mercuryTexture = textureLoader.load(mercury);
  const venusTexture = textureLoader.load(venus);
  const earthTexture = textureLoader.load(earth);
  const marsTexture = textureLoader.load(mars);
  const jupiterTexture = textureLoader.load(jupiter);
  const saturnTexture = textureLoader.load(saturn);
  const uranusTexture = textureLoader.load(uranus);
  const neptuneTexture = textureLoader.load(neptune);

  // Sun
  const sunGeometry = new THREE.SphereGeometry(30, 16, 32);
  const sunMaterial = new THREE.MeshBasicMaterial({ map: sunTexture });
  const sunMesh = new THREE.Mesh(sunGeometry, sunMaterial);
  scene.add(sunMesh);

  // Mercury
  const mercuryGeometry = new THREE.SphereGeometry(0.5, 16, 32);
  const mercuryMaterial = new THREE.MeshStandardMaterial({
    map: mercuryTexture,
  });
  const mercuryMesh = new THREE.Mesh(mercuryGeometry, mercuryMaterial);
  mercuryMesh.position.x = -1;
  mercuryMesh.position.z = 60;
  scene.add(mercuryMesh);

  // mercury ring
  const torusmercuryGeometry = new THREE.RingGeometry(60, 60.2, 100);
  const torusmercuryMaterial = new THREE.MeshBasicMaterial({
    color: 0x777777,
    side: THREE.DoubleSide,
  });
  const torusmercuryMesh = new THREE.Mesh(
    torusmercuryGeometry,
    torusmercuryMaterial
  );
  torusmercuryMesh.rotation.x = Math.PI / 2;
  scene.add(torusmercuryMesh);

  // Venus
  const venusGeometry = new THREE.SphereGeometry(1, 16, 32);
  const venusMaterial = new THREE.MeshStandardMaterial({ map: venusTexture });
  const venusMesh = new THREE.Mesh(venusGeometry, venusMaterial);
  venusMesh.position.x = -1;
  venusMesh.position.z = 88;
  scene.add(venusMesh);

  // venus ring
  const torusvenusGeometry = new THREE.RingGeometry(88, 88.2, 100);
  const torusvenusMaterial = new THREE.MeshBasicMaterial({
    color: 0x777777,
    side: THREE.DoubleSide,
  });
  const torusvenusMesh = new THREE.Mesh(torusvenusGeometry, torusvenusMaterial);
  torusvenusMesh.rotation.x = Math.PI / 2;
  scene.add(torusvenusMesh);

  // Earth
  const earthGeometry = new THREE.SphereGeometry(1, 16, 32);
  const earthMaterial = new THREE.MeshStandardMaterial({ map: earthTexture });
  const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
  earthMesh.position.x = -1;
  earthMesh.position.z = 100;
  scene.add(earthMesh);

  // earth ring
  const torusearthGeometry = new THREE.RingGeometry(100, 100.2, 100);
  const torusearthMaterial = new THREE.MeshBasicMaterial({
    color: 0x777777,
    side: THREE.DoubleSide,
  });
  const torusearthMesh = new THREE.Mesh(torusearthGeometry, torusearthMaterial);
  torusearthMesh.rotation.x = Math.PI / 2;
  scene.add(torusearthMesh);

  // Mars
  const marsGeometry = new THREE.SphereGeometry(0.6, 16, 32);
  const marsMaterial = new THREE.MeshStandardMaterial({ map: marsTexture });
  const marsMesh = new THREE.Mesh(marsGeometry, marsMaterial);
  marsMesh.position.x = -1;
  marsMesh.position.z = 121;
  scene.add(marsMesh);

  // Mars ring
  const torusMarsGeometry = new THREE.RingGeometry(121, 121.2, 100);
  const torusMarsMaterial = new THREE.MeshBasicMaterial({
    color: 0x777777,
    side: THREE.DoubleSide,
  });
  const torusMarsMesh = new THREE.Mesh(torusMarsGeometry, torusMarsMaterial);
  torusMarsMesh.rotation.x = Math.PI / 2;
  scene.add(torusMarsMesh);

  // Jupitar
  const jupiterGeometry = new THREE.SphereGeometry(11, 16, 32);
  const jupiterMaterial = new THREE.MeshStandardMaterial({
    map: jupiterTexture,
  });
  const jupiterMesh = new THREE.Mesh(jupiterGeometry, jupiterMaterial);
  jupiterMesh.position.x = -1;
  jupiterMesh.position.z = 210;
  scene.add(jupiterMesh);

  // Jupiter ring
  const torusJupiterGeometry = new THREE.RingGeometry(210, 210.2, 100);
  const torusJupiterMaterial = new THREE.MeshBasicMaterial({
    color: 0x777777,
    side: THREE.DoubleSide,
  });
  const torusJupiterMesh = new THREE.Mesh(
    torusJupiterGeometry,
    torusJupiterMaterial
  );
  torusJupiterMesh.rotation.x = Math.PI / 2;
  scene.add(torusJupiterMesh);

  // Saturn
  const saturnGeometry = new THREE.SphereGeometry(9, 16, 32);
  const saturnMaterial = new THREE.MeshStandardMaterial({
    map: saturnTexture,
  });
  const saturnMesh = new THREE.Mesh(saturnGeometry, saturnMaterial);
  saturnMesh.position.x = -1;
  saturnMesh.position.z = 270;
  scene.add(saturnMesh);

  // saturn ring
  const torussaturnGeometry = new THREE.RingGeometry(270, 270.2, 100);
  const torussaturnMaterial = new THREE.MeshBasicMaterial({
    color: 0x777777,
    side: THREE.DoubleSide,
  });

  const torussaturnMesh = new THREE.Mesh(
    torussaturnGeometry,
    torussaturnMaterial
  );
  torussaturnMesh.rotation.x = Math.PI / 2;
  scene.add(torussaturnMesh);

  // uranus
  const uranusGeometry = new THREE.SphereGeometry(4, 16, 32);
  const uranusMaterial = new THREE.MeshStandardMaterial({
    map: uranusTexture,
  });
  const uranusMesh = new THREE.Mesh(uranusGeometry, uranusMaterial);
  uranusMesh.position.x = -1;
  uranusMesh.position.z = 330;
  scene.add(uranusMesh);

  // uranus ring
  const torusuranusGeometry = new THREE.RingGeometry(330, 330.2, 100);
  const torusuranusMaterial = new THREE.MeshBasicMaterial({
    color: 0x777777,
    side: THREE.DoubleSide,
  });

  const torusuranusMesh = new THREE.Mesh(
    torusuranusGeometry,
    torusuranusMaterial
  );
  torusuranusMesh.rotation.x = Math.PI / 2;
  scene.add(torusuranusMesh);

  // neptune
  const neptuneGeometry = new THREE.SphereGeometry(3.8, 16, 32);
  const neptuneMaterial = new THREE.MeshStandardMaterial({
    map: neptuneTexture,
  });
  const neptuneMesh = new THREE.Mesh(neptuneGeometry, neptuneMaterial);
  neptuneMesh.position.x = -1;
  neptuneMesh.position.z = 380;
  scene.add(neptuneMesh);

  // neptune ring
  const torusneptuneGeometry = new THREE.RingGeometry(380, 380.2, 100);
  const torusneptuneMaterial = new THREE.MeshBasicMaterial({
    color: 0x777777,
    side: THREE.DoubleSide,
  });
  const torusneptuneMesh = new THREE.Mesh(
    torusneptuneGeometry,
    torusneptuneMaterial
  );
  torusneptuneMesh.rotation.x = Math.PI / 2;
  scene.add(torusneptuneMesh);

  const clock = new THREE.Clock();
  return () => {
    mercuryMesh.rotation.y = clock.getElapsedTime() / 2;
    mercuryMesh.position.x = Math.cos(clock.getElapsedTime() * 3) * (60 + 0.5);
    mercuryMesh.position.z = Math.sin(clock.getElapsedTime() * 3) * (60 + 0.5);

    venusMesh.rotation.y = clock.getElapsedTime() / 2;
    venusMesh.position.x = Math.sin(clock.getElapsedTime()) * (88 + 0.5);
    venusMesh.position.z = Math.cos(clock.getElapsedTime()) * (88 + 0.5);

    earthMesh.rotation.y = clock.getElapsedTime() / 2;
    earthMesh.position.x = Math.cos(clock.getElapsedTime() / 2) * (100 + 0.5);
    earthMesh.position.z = Math.sin(clock.getElapsedTime() / 2) * (100 + 0.5);

    marsMesh.rotation.y = clock.getElapsedTime() / 2;
    marsMesh.position.x = Math.cos(clock.getElapsedTime() / 10) * (121 + 0.5);
    marsMesh.position.z = Math.sin(clock.getElapsedTime() / 10) * (121 + 0.5);

    jupiterMesh.rotation.y = clock.getElapsedTime() / 2;
    jupiterMesh.position.x =
      Math.cos(clock.getElapsedTime() / 10) * (210 + 0.5);
    jupiterMesh.position.z =
      Math.sin(clock.getElapsedTime() / 10) * (210 + 0.5);

    saturnMesh.rotation.y = clock.getElapsedTime() / 2;
    saturnMesh.position.x = Math.cos(clock.getElapsedTime() / 15) * (270 + 0.5);
    saturnMesh.position.z = Math.sin(clock.getElapsedTime() / 15) * (270 + 0.5);

    uranusMesh.rotation.y = clock.getElapsedTime() / 2;
    uranusMesh.position.x = Math.cos(clock.getElapsedTime() / 20) * (330 + 0.5);
    uranusMesh.position.z = Math.sin(clock.getElapsedTime() / 20) * (330 + 0.5);

    neptuneMesh.rotation.y = clock.getElapsedTime() / 2;
    neptuneMesh.position.x =
      Math.cos(clock.getElapsedTime() / 25) * (380 + 0.5);
    neptuneMesh.position.z =
      Math.sin(clock.getElapsedTime() / 25) * (380 + 0.5);
  };
};

export default renderSystem;
