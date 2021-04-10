<template>
  <div class="card">
    <div class="card-header">
      最新餐廳
    </div>
    <div class="card-body" >
      <div v-for="restaurant in $attrs.restaurants" :key="restaurant.id">
        <h4>
           <router-link
            :to="{ name: 'restaurant', params: { id: restaurant.id }}"
          >
            {{ restaurant.name }}

          </router-link>
          <small>
            &nbsp;
            {{ restaurant.Category ? restaurant.Category.name : '未分類' }}
          </small>
        </h4>
        <p>
          {{ restaurant.description }}
        </p>
        {{ fromNow(restaurant.createdAt) }}
        <hr>
      </div>
    </div>
  </div>
</template>

<script>
import { fromNowMethods } from './../utils/mixins'
export default ({
  mixins: [fromNowMethods]
  // 運用$attrs取代props來取用父層屬性
  // props: {
  //   restaurants: {
  //     type: Array,
  //     required: true
  //   }
  // }
})
</script>

<style scoped>
small {
  font-size: 10px;
}
</style>
