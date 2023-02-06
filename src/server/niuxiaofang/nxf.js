import { get, post } from "@/server/index"
const prefix = "/nxf"

export const postUser = (params) => {
  return post(prefix + "/user/add", params)
}
export const getUsers = () => {
  return get(prefix + "/user/users")
}
export const getUser = (id) => {
  return get(prefix + `/user/users/${id}`)
}

//
export const getSelectHospital = () => {
  return get(prefix + `/hospital/selectHospitals`)
}
export const addHospital = (params) => {
  return post(prefix + `/hospital/add`, params)
}
