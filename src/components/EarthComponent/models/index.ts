import * as THREE from 'three'
import { earthRadius } from 'satellite.js/lib/constants'
// 引入球
import createEarthImageMesh from './globel'
// 引入国家边界线
import countryLine from './countryLine'
// 添加卫星
import satellite from './satellite'
// 添加轨迹
import satelliteLine from './satelliteLine'
// 解析tle文件
import { parseTleFile, getPositionFromTle } from '../tools'

import { defaultStationOptions } from '../config'

class ModelEntry implements IModelEntry {
  // 创建组
  modelGroup = new THREE.Group()
  stations: IStation[]
  constructor() {
    this.stations = this.handleTleFile()
    this.addGlobel()
    this.addCountryLine()
    this.addSatellite()
    this.addSatelliteLine()
  }

  // 添加球
  private addGlobel = () => {
    this.modelGroup.add(createEarthImageMesh(earthRadius))
  }

  // 添加国家边界
  private addCountryLine = () => {
    this.modelGroup.add(countryLine(earthRadius + 0.01))
  }

  // 添加卫星
  private addSatellite = () => {
    this.stations.forEach((station: IStation) => {
      // 获取tle位置
      let pos = this.getSatellitePositionFromTle(station)
      if (pos) {
        satellite(pos, (scene) => {
          station.mesh = scene
          this.modelGroup.add(scene)
        })
      }
    })
  }

  // 添加卫星线
  private addSatelliteLine = () => {
    this.stations.forEach((station: IStation) => {
      console.log(satelliteLine(station)!)
      this.modelGroup.add(satelliteLine(station)!)
    })

  }

  // 处理tle文件
  private handleTleFile = () => {
    const fileData = `
      CALSPHERE 1
      1 00900U 64063C   23038.84225649  .00000872  00000+0  91516-3 0  9995
      2 00900  90.1803  45.3206 0028073  37.3853  38.6760 13.74084501902982
      NINGXIA-1 6
      1 49018U 21064A   23045.19144325  .00000074  00000+0  12019-3 0  9994
      2 49018  45.0032 332.3712 0006722 162.8219 197.2829 14.08115044 82393
      ONEWEB-0293
      1 49082U 21075H   23044.04563388 -.00000026  00000+0 -98993-4 0  9999
      2 49082  87.9069 248.2489 0001300 100.2487 259.8791 13.17647496 72959
      `
    const stations = parseTleFile(fileData, defaultStationOptions)
    return stations
  }

  // 从tle根数中找位置
  private getSatellitePositionFromTle = (station: IStation, date?: Date) => {
    date = date || new Date()
    return getPositionFromTle(station, date)
  }

  // 更新卫星的位置
  updateSatellitePosition = (station: IStation, date: Date) => {
    date = date || new Date()

    const pos = getPositionFromTle(station, date, 1)
    if (!pos) return

    station.mesh!.position.set(pos.x, pos.y, pos.z)
  }

  // 更新全部位置
  updateAllPositions = (date: Date) => {
    if (!this.stations) return

    this.stations.forEach((station:IStation) => {
      this.updateSatellitePosition(station, date)
    })
  }
}

export default new ModelEntry()
