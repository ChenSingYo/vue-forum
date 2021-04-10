<template>
  <div class="card">
    <div class="card-header"><strong>{{ followers.length }}</strong> followers (追蹤者)</div>
    <div class="card-body">
      <router-link
        v-for="follower in followers"
        :key="follower.id"
        :to="{ name: 'user', params: { id: followers.id } }"
      >
        <img
          :src="follower.image"
          alt="empty image"
          width="60"
          height="60"
          class="mr-1"
        >
      </router-link>
    </div>
  </div>
  <br />
</template>

<script>
export default {
  name: 'UserFollowersCard',
  props: {
    followers: {
      type: Array
    }
  }
}
</script>
