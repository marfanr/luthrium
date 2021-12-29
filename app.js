
import {VRButton} from './node_modules/three/examples/jsm/webxr/VRButton.js';
document.body.style.margin = '0';
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.xr.enabled = true;
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
document.body.appendChild( VRButton.createButton( renderer ) );
// const controls = new THREE.OrbitControls( camera, renderer.domElement );

const g = new THREE.Group();
g.add(camera);
g.position.set(0,1.6,5);
scene.add(g);

const geometry = new THREE.BoxGeometry( 1, 1, 1 );

const cube1 = new THREE.Mesh( geometry, new THREE.MeshLambertMaterial( { color: 0x00ff00 } ) );
scene.add(cube1)

const light = new THREE.PointLight(0xffffff, 10, 100);
light.position.set(0, 1, 1);
scene.add(light);

cube1.position.set(0,1,0);

let con1 = renderer.xr.getController(0);
console.log(con1);

camera.position.z = 5;


scene.add(new THREE.PointLightHelper(light, 0.1 ))

renderer.setAnimationLoop(() => {
    renderer.render(scene, camera);   
})
