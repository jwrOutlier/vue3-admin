/**
 * 球体模型
 *
 */

import * as THREE from 'three'

import earthPic from '../img/earth3.jpg'

// 添加地球贴图的Mesh到场景中
export default (radius:number) => {
  const Loader = new THREE.TextureLoader()
  const texture = Loader.load(earthPic)

  // 绘制球体
  const geometry = new THREE.SphereGeometry(radius, 50, 50)
  // 贴图
  const material = new THREE.MeshLambertMaterial({
    map: texture,
    side: THREE.DoubleSide,
    flatShading: false,
  })
  const globelMesh = new THREE.Mesh(geometry, material)

  return globelMesh
}
