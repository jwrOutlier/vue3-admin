interface ICoord {
  x: number
  y: number
  z: number
}

// models 类型
interface IModelEntry {
  modelGroup: THREE.Group
}

interface IStation {
  mesh?:THREE.Group
  name: string
  orbitMinutes?:number
  satelliteSize?:number
  satrec?:any
  tle1:string 
  tle2:string
  [propName:string]:any
}
