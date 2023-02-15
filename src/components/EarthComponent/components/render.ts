import * as THREE from 'three'
import { defaultOptions } from '../config'
export default (width: number, height: number, domElem: HTMLElement) => {
  const renderer = new THREE.WebGLRenderer({
    logarithmicDepthBuffer: true,
    antialias: true,
  })

  renderer.setClearColor(new THREE.Color(defaultOptions.backgroundColor))
  renderer.setSize(width, height)
  domElem.appendChild(renderer.domElement)
  return renderer
}
