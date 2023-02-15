import * as THREE from 'three'
import { getPositionFromTle } from '../tools'

const MinutesPerDay = 1440
const ixpdotp = MinutesPerDay / (2.0 * 3.141592654)

export default (station: any) => {
    if (station.orbitMinutes > 0) return
    // console.log(station)
    

  const revsPerDay = station.satrec.no * ixpdotp
  const intervalMinutes = 1
  const minutes = station.orbitMinutes || MinutesPerDay / revsPerDay
  const initialDate = new Date()

  let points: any = []

  for (var i = 0; i <= minutes; i += intervalMinutes) {
    const date = new Date(initialDate.getTime() + i * 60000)

    const pos = getPositionFromTle(station, date)
    if (!pos) continue

    points.push(new THREE.Vector3(pos.x, pos.y, pos.z))
  }
  // 画线
  const geometry = new THREE.BufferGeometry().setFromPoints(points)
  let orbitMaterial = new THREE.LineBasicMaterial({
    color: 0x999999,
    opacity: 1.0,
    transparent: true,
  })
  let orbitCurve = new THREE.Line(geometry, orbitMaterial)

  return orbitCurve
}
