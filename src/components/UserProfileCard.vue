<template>
  <div class="card mb-3">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img
          :src="user.image"
          width="285"
          height="285"
        />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">
            {{ user.name }}
          </h5>
          <p class="card-text">
            {{ user.email }}
          </p>
          <ul class="list-unstyled list-inline">
            <li><strong>{{ user.commentsLength }}</strong> 已評論餐廳</li>
            <li><strong>{{ user.favoritedRestaurantsLength }}</strong> 收藏的餐廳</li>
            <li><strong>{{ user.followingsLength }}</strong> followings (追蹤者)</li>
            <li><strong>{{ user.followersLength }}</strong> followers (追隨者)</li>
          </ul>
          <p>
            <template v-if="currentUser.isAdmin">
              <router-link
                :to="{name: 'user-edit', params: { id: user.id }}"
                class="btn btn-primary"
                type="submit"
              >
                Edit
              </router-link>
            </template>
            <template v-else>
              <button
                v-if="isFollowed"
                @click.stop.prevent="clickSwitchIsFollowed(isFollowed)"
                type="button"
                class="btn btn-danger"
              >
                取消追蹤
              </button>
              <button
                v-else
                @click.stop.prevent="clickSwitchIsFollowed(isFollowed)"
                type="button"
                class="btn btn-primary"
              >
                追蹤
              </button>
            </template>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const dummyUser = {
  currentUser: {
    id: 1,
    name: '管理者',
    email: 'root@example.com',
    image: 'https://i.pravatar.cc/300',
    isAdmin: false
  },
  isAuthenticated: true
}

export default {
  name: 'UserProfileCard',
  props: {
    user: {
      type: Object,
      required: true
    },
    initialIsFollowed: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      currentUser: dummyUser.currentUser,
      isFollowed: this.initialIsFollowed
    }
  },
  watch: {
    initialIsFollowed (isFollowed) {
      this.isFollowed = isFollowed
    }
  },
  methods: {
    clickSwitchIsFollowed (isFollowed) {
      this.$emit('switchIsFollowed', isFollowed)
    }
  }
}
</script>
