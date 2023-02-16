export interface IDefaultOptions {
  backgroundColor: number | string
  defaultSatelliteColor: number
}

export interface IDefaultStationOptions {
  orbitMinutes: number
  satelliteSize: number
}

export const defaultOptions: IDefaultOptions = {
  backgroundColor: '#fff',
  defaultSatelliteColor: 0xff0000,
}

export const defaultStationOptions: IDefaultStationOptions = {
  orbitMinutes: 0,
  satelliteSize: 50,
}

// 世界轮廓线段
export const countryLineColor: number = 0x7aa5a5
