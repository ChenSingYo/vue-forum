<template>
  <div class="col-3">
    <a href="#">
      <img :src="emptyImageFilter(user.image)" width="140" object-fit="cover" />
    </a>
    <h2>User</h2>
    <span class="badge badge-secondary"
      >追蹤人數：{{ user.followerCount }}</span
    >
    <p class="mt-3">
      <button
        v-if="user.isFollowed"
        @click.stop.prevent="deleteFollowing(user.id)"
        type="button"
        class="btn btn-danger"
      >
        取消追蹤
      </button>
      <button
        v-else
        @click.stop.prevent="addFollowing(user.id)"
        type="button"
        class="btn btn-primary"
      >
        追蹤
      </button>
    </p>
  </div>
</template>

<script>
import usersAPI from './../apis/users'
import { Toast } from './../utils/helpers'

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
    async addFollowing (userId) {
      try {
        console.log({ userId })
        const { data } = await usersAPI.addFollowing(userId)
        console.log('data', data)

        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        this.user = this.users.map(user => {
          if (user.id !== userId) {
            return user
          } else {
            return {
              ...user,
              followerCount: user.followerCount + 1,
              isFollowed: true
            }
          }
        })
      } catch (e) {
        console.log('error', e)
        Toast.fire({
          icon: 'error',
          title: '無法加入追蹤，請稍後再試'
        })
      }
    },
    async deleteFollowing (userId) {
      try {
        const { data } = await usersAPI.deleteFollowing(userId)
        console.log('data', data)

        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        this.user = this.users.map(user => {
          if (user.id !== userId) {
            return user
          } else {
            return {
              ...user,
              followerCount: user.followerCount - 1,
              isFollowed: false
            }
          }
        })
      } catch (e) {
        console.log('error', e)
        Toast.fire({
          icon: 'error',
          title: '無法取消追蹤，請稍後再試'
        })
      }
    },
    emptyImageFilter (img) {
      return img || 'https://via.placeholder.com/350x220/DFDFDF?text=No+Image'
    }
  }
}
</script>
