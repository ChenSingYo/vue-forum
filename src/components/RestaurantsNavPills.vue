<template>
  <ul class="nav nav-pills mb-4">
    <li class="nav-item">
      <router-link
        class="nav-link"
        :to="{ name: 'restaurants' }"
        :class="$route.fullPath === `/${$route.name}` ? 'active' : ''"
        exact-active-class=""
      >
        全部
      </router-link>
    </li>
    <li
      v-for="category in categories"
      :key="category.id"
      class="nav-item"
    >
      <router-link
        class="nav-link"
        :to="{
          path: 'restaurants',
          query: { categoryId: category.id }
          }"
        :class="$route.fullPath.startsWith(`/${$route.name}`) && $route.query.categoryId == category.id ? 'active' : ''"
        exact-active-class=""
      >
        {{ category.name }}
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    categories: {
      type: Array,
      required: true
    },
    categoryId: {
      type: [String, Number],
      default: ''
    }
  }
}
</script>
