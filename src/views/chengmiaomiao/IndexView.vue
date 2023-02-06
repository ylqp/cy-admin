<template>
  <div class="container">
    <h1>ToDoList</h1>
    <h3>
      共有<span class="text-primary">{{ lists.length }}</span
      >个任务，其中<span class="text-success">{{ finished.length }}</span
      >项已完成
    </h3>
    <h3>未完成的列表</h3>
    <ul class="list-group">
      <template v-for="(item, index) in lists">
        <li
          v-if="!item.checked"
          class="list-group-item d-flex justify-content-between"
          :key="index"
        >
          <div class="form-group form-check">
            <input
              v-model="item.checked"
              type="checkbox"
              class="form-check-input"
              :id="'item-' + index"
              @click="item.checked = !item.checked"
            />
            <input
              type="text"
              v-model="editValue"
              v-if="item.isEdit"
              @blur="blurHandle(item)"
            />
            <label @dblclick="showEdit(item)" class="form-check-label" v-else>{{
              item.name
            }}</label>
          </div>
          <button
            @click="removeHandle(index)"
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </li>
      </template>
    </ul>
    <h3>已完成的列表</h3>
    <ul class="list-group">
      <li
        class="list-group-item d-flex justify-content-between"
        v-for="(item, index) in finished"
        :key="'finished' + index"
      >
        <div class="form-group form-check">
          <input
            v-model="item.checked"
            type="checkbox"
            class="form-check-input"
            :id="'finished-' + index"
            disabled
          />
          <label class="form-check-label" :for="'finished-' + index">{{
            item.name
          }}</label>
        </div>
        <button
          @click="item.checked = false"
          type="button"
          class="close"
          data-dismiss="modal"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </li>
    </ul>
    <h3>添加新的任务</h3>
    <div class="form-group" style="margin-bottom: 20px">
      <label for="add">添加</label>
      <input
        @keydown.enter="addHandle"
        type="text"
        class="form-control"
        id="add"
        v-model="value"
        placeholder="添加新的任务"
      />
    </div>
    <button
      type="button"
      class="btn btn-primary btn-lg btn-block"
      @click="addHandle"
    >
      添加
    </button>
  </div>
</template>

<script>
import { computed, reactive, toRefs } from "vue"
export default {
  setup() {
    const state = reactive({
      editValue: "",
      value: "",
      lists: [
        { name: "1", checked: false, isEdit: false },
        { name: "2", checked: false, isEdit: false },
        { name: "3", checked: false, isEdit: false },
      ],
      finished: computed(() => state.lists.filter((item) => item.checked)),
    })
    const addHandle = () => {
      if (!state.value) {
        return
      }
      state.lists.push({
        name: state.value,
        checked: false,
        isEdit: false,
      })
      state.value = ""
    }
    const showEdit = (item) => {
      item.isEdit = true
      state.editValue = item.name
    }
    const blurHandle = (item) => {
      item.isEdit = false
      item.name = state.editValue
    }
    const removeHandle = (index) => {
      state.lists.splice(index, 1)
    }
    return { ...toRefs(state), addHandle, showEdit, blurHandle, removeHandle }
  },
}
</script>

<style scoped>
@import "bootstrap/dist/css/bootstrap.min.css";
</style>
