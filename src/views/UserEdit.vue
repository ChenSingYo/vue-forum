<template>
  <div class="container py-5">
    <form @submit.stop.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          v-model="name"
          id="name"
          type="text"
          name="name"
          class="form-control"
          placeholder="Enter Name"
          required
        />
      </div>

      <div class="form-group">
        <label for="image"></label>
        <img
          v-if="image"
          :src="image"
          width="200"
          alt="empty image"
        />
        <input
          @change="handleFileChange"
          id="image"
          type="file"
          name="image"
          accept="image/*"
          class="form-control-file"
        />
      </div>

      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import usersAPI from './../apis/users'
import { Toast } from './../utils/helpers'

export default {
  data () {
    return {
      id: 0,
      image: '',
      name: '',
      email: '',
      isProcessing: false
    }
  },
  computed: {
    ...mapState(['currentUser'])
  },
  // 由於 currentUser 是透過非同步的方式取得，需要透過 watch 屬性來監控當 currentUser 有變更後，
  // 需要在呼叫一次 setUser 的方法把資料帶入該 Vue 組件內。
  watch: {
    currentUser (user) {
      if (user.id === -1) return
      const { id } = this.$route.params
      this.setUser(id)
    }
  },
  created () {
    const { id } = this.$route.params
    this.setUser(id)
  },
  beforeRouteUpdate (to, from, next) {
    if (this.currentUser.id === -1) return
    const { id } = to.params
    this.setUser(id)
    next()
  },
  methods: {
    setUser (userId) {
      const { id, image, name, email } = this.currentUser

      // 在 setUser 中判斷該 currentUser 的 id 是否與路由中取得的 userId 相同，
      // 如果不是的話，則轉址去 404，否則繼續執行 setUser
      if (id.toString() !== userId.toString()) {
        this.$router.push({ name: 'not-found' })
        return
      }

      this.id = id
      this.name = name
      this.email = email
      this.image = image
    },
    handleFileChange (e) {
      const files = e.target.files
      if (!files.length) return
      const imageURL = window.URL.createObjectURL(files[0])
      this.image = imageURL
    },
    async handleSubmit (e) {
      try {
        if (!this.name) {
          Toast.fire({
            icon: 'warning',
            title: '您尚未填寫姓名'
          })
          return
        }
        // 從表單取得資料
        const form = e.target
        const formData = new FormData(form)

        this.isProcessing = true

        // 在 handleSubmit 中呼叫 usersAPI.update() 方法以更新使用者資料
        const { data } = await usersAPI.update({
          userId: this.id,
          formData
        })

        if (data.status === 'error') {
          throw new Error(data.message)
        }
        // 成功更新資料後轉址到使用者詳細頁
        this.$router.push({ name: 'user', params: { id: this.id } })
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>
