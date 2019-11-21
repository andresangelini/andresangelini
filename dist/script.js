/*
 * Initialize Animate On Scroll (AOS) library
 * https://github.com/michalsnik/aos
*/
AOS.init({
  duration: 1200 });


let scene, camera, renderer, cube;
const canvas = {
  height: 200,
  width: 200 };



function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, canvas.width / canvas.height, 0.1, 1000);

  /* Define the <canvas>'s container */
  const container = document.getElementById("welcome-section");

  /* Get a reference of the welcome section title */
  const welcomeTitle = document.getElementById("welcome-title");

  /* Define renderer and its size */
  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(canvas.width, canvas.height);

  /* Insert the renderer (the <canvas> element) into the container
                                                  * and before the welcome section title.
                                                  */
  container.insertBefore(renderer.domElement, welcomeTitle);

  /* A 3D object in Three.js is called a "mesh". A mesh is basically a
                                                              * a geometry with a material applied to it.
                                                              */
  var geometry = new THREE.BoxGeometry(1, 1, 1);
  var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  /* Every element in Tree.js is created at the coordinates (0, 0, 0)
                    * so we need to move the camera away from it.
                    */
  camera.position.z = 2;
}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
}

function onWindowResize() {
  camera.aspect = 1;
  camera.updateProjectionMatrix();
  renderer.setSize(canvas.width, canvas.height);
}

window.addEventListener("resize", onWindowResize, false);

init();
animate();