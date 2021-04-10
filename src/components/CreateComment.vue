<template>
  <form @submit.prevent.stop="handleSubmit">
    <div class="form-group mb-4">
      <label for="text">留下評論：</label>
      <textarea
        v-model="text"
        class="form-control"
        rows="3"
        name="text"
      />
    </div>
    <div class="d-flex align-items-center justify-content-between">
      <button
        type="button"
        class="btn btn-link"
        @click="$router.back()"
      >回上一頁</button>
      <button
        type="submit"
        class="btn btn-primary mr-0"
      >
        Submit
      </button>
    </div>
  </form>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'
export default {
  name: 'CreateComment',
  props: {
    restaurantId: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      text: ''
    }
  },
  methods: {
    handleSubmit () {
      // 向 API 發送 POST 請求新增一筆comment...從伺服器取得commentId
      // 伺服器新增 Comment 成功後...
      this.$emit('after-create-comment', {
        commentId: uuidv4(), // 尚未串接api時，暫時使用的隨機id，之後要由後端完成POST之後回傳
        restaurantId: this.restaurantId,
        text: this.text
      })
      this.text = ''
    }
  }
}
</script>
