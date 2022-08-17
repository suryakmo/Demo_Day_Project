

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x1F3A37);


const canvas = document.querySelector('canvas.webgl');


const sizes = {
  width: 300,
  height: 300,
};


const loadingManager = new THREE.LoadingManager();
const textureLoader = new THREE.TextureLoader(loadingManager);

const colorTexture = textureLoader.load('images/image3.jpg');
colorTexture.generateMinmaps = false;
colorTexture.minFilter = THREE.NearestFilter;
colorTexture.magFilter = THREE.NearestFilter;

const geometry = new THREE.BoxGeometry(1, 1, 1);

const material = new THREE.MeshBasicMaterial({ map: colorTexture });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);



const camera = new THREE.PerspectiveCamera(
754,
  sizes.width / sizes.height,
  0.1,
  100,
);
camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 3;
scene.add(camera);


const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);



function animate() {
  
  requestAnimationFrame(animate);


  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  cube.rotation.z += 0.01;

  renderer.render(scene, camera);
}

animate();