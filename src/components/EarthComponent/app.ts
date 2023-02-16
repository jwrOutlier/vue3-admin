/*
 * @Author: Cooper
 * @Date: 2023-02-09 15:14:47
 * @LastEditors: chenw 11111@qq.com
 * @LastEditTime: 2023-02-16 14:32:56
 * @FilePath: \vue3-temp\src\components\EarthComponent\app.ts
 * @Description: 整个模型的入口文件
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

import initRenderer from './components/render'
import initScene from './components/scene'
import initCamera from './components/camera'
import initLight from './components/light'

import models from './models'
import { defaultStationOptions } from './config'

import { parseTleFile } from './tools'

// 引入性能查看器
import Stats from 'stats.js'

interface IEarth {
  domWidth: number // 容器宽
  domHeight: number // 容器高
  earthCon: HTMLElement // three容器

  initRenderer: THREE.WebGLRenderer // 渲染器
  initScence: THREE.Scene
  initCamera: THREE.PerspectiveCamera

  randarData: any // 雷达数据
  missileData: any // 导弹数据

  stats: any
}

export default class Earth implements IEarth {
  domWidth: number = 0
  domHeight: number = 0
  earthCon: HTMLElement

  initRenderer = new THREE.WebGLRenderer()
  initScence = new THREE.Scene()
  initCamera = new THREE.PerspectiveCamera()

  randarData: any = null
  missileData: any = null

  stats: any = null

  constructor(canvasId: string, randarData?: any, missileData?: any) {
    // 获取元素容器
    this.earthCon = document.querySelector(canvasId) as HTMLElement
    this.domWidth = this.earthCon.offsetWidth
    this.domHeight = this.earthCon.offsetHeight

    this.randarData = randarData
    this.missileData = missileData

    this.init()
    // this.handleWindowResize()
  }

  // 初始化渲染
  private init() {
    // 场景
    this.initScence = initScene()
    // 相机
    this.initCamera = initCamera(this.domWidth, this.domHeight)
    // 渲染器
    this.initRenderer = initRenderer(
      this.domWidth,
      this.domHeight,
      this.earthCon
    )
    // 设置光源
    initLight(this.initScence)

    // 往场景中添加物体
    this.initScence.add(models.modelGroup)

    // 控制地球旋转、缩放等
    const os = new OrbitControls(this.initCamera, this.earthCon)
    os.enablePan = false // 不禁止鼠标平移, 可以用键盘来平移

    // 引入性能查看器
    // this.stats = new Stats()
    // document.body.appendChild(this.stats.domElement)

    this.animate()
  }

  private animate = () => {
    requestAnimationFrame(this.animate)
    // 测量帧率
    // this.stats.update()
    // 渲染
    this.initRenderer.render(this.initScence, this.initCamera)
  }
}
