import { get, post } from "@/server/index"
const prefix = "/nxf"

export const addHospital = (params) => {
  return post(prefix + "/hospital/add", params)
}
export const getHospitals = () => {
  return get(prefix + "/hospital/list")
}
export const getUser = (id) => {
  return get(prefix + `/user/users/${id}`)
}

//
export const getSelectHospital = () => {
  return get(prefix + `/hospital/selectHospitals`)
}

