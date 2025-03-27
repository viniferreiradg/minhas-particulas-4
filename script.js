// Configuração básica do Three.js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Criar partículas
const particleGeometry = new THREE.BufferGeometry();
const particleCount = 1000;
const positions = new Float32Array(particleCount * 3);

for (let i = 0; i < particleCount * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 10;
}

particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

const particleMaterial = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 0.05
});

const particles = new THREE.Points(particleGeometry, particleMaterial);
scene.add(particles);

// Posicionar câmera
camera.position.z = 5;

// Função de animação
function animate() {
    requestAnimationFrame(animate);
    
    particles.rotation.y += 0.002;
    
    renderer.render(scene, camera);
}

animate();

// Responsividade
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});
