<template>
  <div class="container py-5">
    <form @submit.stop.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          v-model="userProfile.name"
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
          v-if="userProfile.image"
          :src="userProfile.image"
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
const dummyUser = {
  profile: {
    id: 1,
    name: 'user1',
    image: 'https://i.pravatar.cc/300'
  }
}
export default {
  data () {
    return {
      userProfile: {
        id: -1,
        image: '',
        name: ''
      }
    }
  },
  created () {
    const { id } = this.$route.params
    this.setUser(id)
  },
  methods: {
    setUser (userId) {
      const { profile } = dummyUser
      this.userProfile = {
        ...this.userProfile,
        name: profile.name,
        image: profile.image
      }
    },
    handleFileChange (e) {
      const files = e.target.files
      if (!files.length) return
      const imageURL = window.URL.createObjectURL(files[0])
      this.userProfile.image = imageURL
    },
    handleSubmit (e) {
      const form = e.target
      const formData = new FormData(form)
      for (const [name, value] of formData.entries()) {
        console.log(name + ':' + value)
      }
    }
  }
}
</script>
