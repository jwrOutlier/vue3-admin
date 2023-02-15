/**
 *
 * 卫星模块
 */
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

/**
 *@param {number} id  后台传过来的卫星数据中的id
 *@param {object} coord  经纬度转换后的球面坐标
 *@param {Function} callback 将加载后的gltf模型加到整个object3D中
 */

type TCallback = (scene: THREE.Group) => void

export default (coord: ICoord, callback: TCallback) => {
  const loader = new GLTFLoader()
  loader.load(
    'public/static/models/satellite.gltf',
    (gltf) => {

      gltf.scene.position.set(coord.x, coord.y, coord.z)
      const scaleVal = 0.4
      gltf.scene.scale.set(scaleVal, scaleVal, scaleVal)
      
      // 让卫星切于地球
      const coordVec3 = new THREE.Vector3(coord.x, coord.y, coord.z).normalize()
      const meshNormal = new THREE.Vector3(0, 0, 1)
      gltf.scene.quaternion.setFromUnitVectors(meshNormal, coordVec3)

      // gltf.scene.rotateX(Math.PI / 2)
      
      callback && callback(gltf.scene)
    },
    undefined,
    (error) => {
      console.error(error)
    }
  )
}
