<template>
  <div class="card">
    <div class="card-header"><strong>{{ followings.length }}</strong> followings (追蹤者)</div>
    <div class="card-body">
      <router-link
        v-for="following in followings"
        :key="following.id"
        :to="{ name: 'user', params: { id: followings.id } }"
      >
        <img
          :src="following.image"
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
  name: 'UserFollowingsCard',
  props: {
    followings: {
      type: Array
    }
  }
}
</script>
