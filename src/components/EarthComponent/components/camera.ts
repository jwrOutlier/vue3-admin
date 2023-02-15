import * as THREE from 'three'

export default (width: number, height: number) => {
  const aspect = width / height
  const NEAR = 1e-6
  const FAR = 1e27
  const camera = new THREE.PerspectiveCamera(45, aspect, NEAR, FAR)
  camera.position.z = -15000
  camera.position.x = 15000
  camera.lookAt(0, 0, 0)

  return camera
}
