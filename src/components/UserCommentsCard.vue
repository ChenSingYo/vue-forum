<template>
  <div class="card">
    <div class="card-header"><strong>{{ comments.length }}</strong> 已評論餐廳</div>
    <div class="card-body">
      <router-link
        v-for="comment in comments"
        :key="comment.id"
        :to="{ name: 'restaurant', params: { id: comment.Restaurant.id }}">
        <img
          :src="comment.Restaurant.image"
          width="60"
          height="60"
          object-fit="cover"
          class="avatar mr-2 mb-2"
        />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserCommentsCard',
  props: {
    comments: {
      type: Array
    }
  }
}
</script>
