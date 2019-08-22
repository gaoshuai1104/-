<template>
<body>
  <div id="info"></div>
</body>
</template>

<script>
import * as THREE from 'three'
import Stats from "./jsm/libs/stats.module.js"
import { OrbitControls } from "./jsm/controls/OrbitControls.js"
import { GLTFLoader } from "./jsm/loaders/GLTFLoader.js"

export default {
  data() {
    return {
      // publicPath: process.env.BASE_URL,
      container:null,
      stats: null,
      controls: null,
      camera: null,
      scene: null,
      renderer: null,
      light: null,
      mixer:null,
    };
  },
  mounted() {
    this.init();
    this.animate();
  },
  
  methods: {
     
    init() {
      let container = document.createElement( 'div' )
      document.body.appendChild( container );
      //相机 控制距离实现远近
      this.camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 2000 );
      // 载入场景的位置
      this.camera.position.set(-1.5, 1.5, 6.5);

//舞台（场景）
        this.scene = new THREE.Scene();
        // this.scene.background = new THREE.Color( 0xa0a0a0 );
        // this.scene.fog = new THREE.Fog( 0xa0a0a0, 200, 1000 );    
      this.light = new THREE.HemisphereLight(0xffffff, 0x444444);
      this.light.position.set(0, 200, 0);
      this.scene.add(this.light);

      this.light = new THREE.DirectionalLight(0xffffff);
      this.light.position.set(0, 200, 100);
      this.light.castShadow = true;
			this.light.shadow.camera.top = 180;
			this.light.shadow.camera.bottom = - 100;
			this.light.shadow.camera.left = - 120;
			this.light.shadow.camera.right = 120;
      this.scene.add(this.light);

      // grid
      let gridHelper = new THREE.GridHelper(28, 28, 0x303030, 0x303030);
      this.scene.add(gridHelper);

      // stats
      this.stats = new Stats();
      // container.appendChild( this.stats.dom);

      // model
            const material = new THREE.MeshBasicMaterial();
      const mesh = new THREE.Mesh(material );  
      let loader = new FBXLoader();
      loader.load("static/models/collada/elf/PGY555.fbx", function(mesh) {
        console.log(123)
       scene.add(mesh);
//        mixer = new THREE.AnimationMixer(object);
//  object.scale.multiplyScalar(.1);
//         var action = mixer.clipAction(object.animations[0]);
//         action.play();
 
//         object.traverse(function (child) {
 
//             if (child.isMesh) {
 
//                 child.castShadow = true;
//                 child.receiveShadow = true;
 
//             }
//             })
      });
      console.log(this.scene)
      this.renderer = new THREE.WebGLRenderer({ antialias: true });
      this.renderer.setPixelRatio(window.devicePixelRatio);
      this.renderer.setSize( window.innerWidth, window.innerHeight );

      container.appendChild(this.renderer.domElement);

      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
      this.controls.target.set(0, 12, 0);
      this.controls.update();

      window.addEventListener("resize", this.onWindowResize, false);
    },
    onWindowResize() {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();

      this.renderer.setSize(window.innerWidth, window.innerHeight);
    },
    animate(scene) {
      requestAnimationFrame(this.animate);
      this.renderer.render(this.scene, this.camera);

      this.stats.update();

    }
  }
};
</script>
<style>
@import "main.css";
</style>