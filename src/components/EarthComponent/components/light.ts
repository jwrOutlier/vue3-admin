import * as THREE from 'three'
export default (scene: THREE.Scene) => {
  // 设置点光源
  const sun = new THREE.PointLight(0xffffff, 1, 0)
  //sun.position.set(0, 0, -149400000);
  sun.position.set(0, 59333894, -137112541)

  // 环境光
  const ambient = new THREE.AmbientLight(0x909090)

  scene.add(sun)
  scene.add(ambient)
}
