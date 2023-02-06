import { getdq } from "@/server/index"

const prefix = "/dq"
export const getTodoCount = () => {
  return getdq(prefix + "/api-uum/todo/getTodoCount")
}
