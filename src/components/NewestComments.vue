<template>

  <div class="card">
    <div class="card-header">
      最新評論
    </div>
    <div class="card-body">
      <div v-for="comment in comments" :key="comment.id">
        <h4>
          <router-link
            :to="{ name: 'restaurant', params: { id: comment.Restaurant.id }}"
          >
            {{ comment.Restaurant.name }}
          </router-link>
        </h4>
        <p>{{ comment.text }}</p>by
        <router-link
          :to="{ name: 'user', params: { id: comment.User.id } }"
        >
          {{comment.User.name}}
        </router-link>
        {{ fromNow(comment.createdAt) }}
        <hr>
      </div>

    </div>
  </div>
</template>

<script>
import { fromNowMethods } from './../utils/mixins'

export default ({
  mixins: [fromNowMethods],
  props: {
    comments: {
      type: Array,
      required: true
    }
  }
})
</script>
