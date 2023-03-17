import axios from "axios";
const url =
  process.env.NODE_ENV == "production"
    ? "https://uas.boe.com.cn/uas/receive/event/message"
    : "http://dfptest.boe.com.cn/order-api/uasBackend/uas/receive/event/message";
/**
 *
 * @param {*} params
 * {
 *  userId: '',
 *  systemName: ''
 *  pageUrl: ''
 *  osType: '1' 1:PC 2:移动
 * }
 */
export default function (params) {
  axios
    .post(url, params)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}


