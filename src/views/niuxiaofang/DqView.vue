<script setup>
import { onBeforeMount, onMounted, ref } from "vue"
import { getTodoCount } from "@/server/niuxiaofang/dq"

onBeforeMount(() => {
  sessionStorage.setItem(
    "token",
    "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiIxMDE1NzU4MiIsInNjb3BlIjpbInVzZXJfaW5mbyJdLCJ0ZW5hbnRfZG9tYWluIjpudWxsLCJleHAiOjE2OTE4MDIxMjUsImF1dGhvcml0aWVzIjpbIlJPTEVfVFJVU1RFRF9DTElFTlQiLCJVU0VSIl0sImp0aSI6Il9hRW9BUlU5T0pzYVVhMmVob25DeFJ5X0lXWSIsImNsaWVudF9pZCI6IjdWUXJFVlpLMTM5RlljU1p1R092OU8yZiJ9.JF1mLSO3yvaIgSFmGvQCvP3djOkmBGm7XFO3M0oS_kP9YriUNubkzkH3Ku_DXHmnz2BlL0om348rRF0mxG0xmEHK6hEvLdthdiWGwmLoysAyzBmby8KVVYwF4LW36QTvm7Ce9o1LEIWzH9ZN3-KyAZslhp3qwKM4UtP_RTeFTFUi3eHHIgvHZnpxvo3Y-2I5VdoXXqxAio_mjMqFFlfw2Q9h7ZIupDHtC9W1tGBR_PYaYJkP-7u0zKGSA_VIMsI0j9Q5mJxLd7Ar3IIcK1MM_UfE-wxfh45SHhEdEEuo8o-MiiRpiXe1gWN5ypcaaGZefQnpHKtZs1wuHfnCNfma4Q"
  )
})

const hhh = ref({})
onMounted(() => {
  getTodoCount().then((data) => {
    hhh.value = data
  })
})
</script>

<template>
  <div>123</div>
  <div>{{ hhh }}</div>
</template>

<style></style>
