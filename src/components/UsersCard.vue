<template>
    <div class="col-3">
      <a href="#">
        <img :src="user.image" width="160"  />
      </a>
      <h2>User</h2>
      <span class="badge badge-secondary">追蹤人數：{{user.FollowerCount}}</span>
      <p class="mt-3">
        <button
          v-if="user.isFollowed"
          @click.stop.prevent="removeFollowed"
          type="button"
          class="btn btn-danger"
        >
          取消追蹤
        </button>
        <button
          v-else
          @click.stop.prevent="addFollowed"
          type="button"
          class="btn btn-primary">
          追蹤
        </button>
      </p>
    </div>
</template>

<script>
export default {
  props: {
    initialUser: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      user: this.initialUser
    }
  },
  methods: {
    addFollowed () {
      this.user = {
        ...this.user,
        isFollowed: true
      }
    },
    removeFollowed () {
      this.user = {
        ...this.user,
        isFollowed: false
      }
    }
  }
}
</script>
