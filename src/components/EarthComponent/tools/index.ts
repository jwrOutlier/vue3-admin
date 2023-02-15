import * as satellite from 'satellite.js/lib/index'
// 处理tle根数
export const parseTleFile = (fileContent: string, stationOptions?: any): IStation[] => {
  const result = []
  const lines = fileContent.split('\n')
  let current

  for (let i = 0; i < lines.length; ++i) {
    const line = lines[i].trim()

    if (line.length === 0) continue

    if (line[0] === '1') {
      current.tle1 = line
    } else if (line[0] === '2') {
      current.tle2 = line
    } else {
      current = {
        name: line,
        ...stationOptions,
      }
      result.push(current)
    }
  }

  return result
}

// 经纬度转为球面坐标
const latLon2Xyz = (radius: number, lat: number, lon: number): ICoord => {
  var phi = (90 - lat) * (Math.PI / 180)
  var theta = (lon + 180) * (Math.PI / 180)

  const x = -(radius * Math.sin(phi) * Math.cos(theta))
  const z = radius * Math.sin(phi) * Math.sin(theta)
  const y = radius * Math.cos(phi)

  return { x, y, z }
}

const toThree = (v: ICoord) => {
  return { x: v.x, y: v.z, z: -v.y }
}


const getSolution = (station: any, date: Date) => {
  if (!station.satrec) {
    const { tle1, tle2 } = station
    if (!tle1 || !tle2) return null
    station.satrec = satellite.twoline2satrec(tle1, tle2)
  }

  return satellite.propagate(station.satrec, date)
}

export const getPositionFromTle = (station: any, date: Date, type = 1) => {
  if (!station || !date) return null

  const positionVelocity = getSolution(station, date)

  const positionEci = positionVelocity.position
  if (!positionEci) return null // Ignore

  if (type === 2) return toThree(positionEci)

  const gmst = satellite.gstime(date)
  const positionEcf = satellite.eciToEcf(positionEci, gmst)
  return toThree(positionEcf)
}
