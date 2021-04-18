<template>
  <div class="container py-5">
    <AdminNav />

    <router-link
      to="/admin/restaurants/new"
      class="btn btn-primary mb-4"
    >
      New Restaurant
    </router-link>

    <AdminRestaurantsTable />
  </div>
</template>

<script>
import AdminNav from './../components/AdminNav'
import AdminRestaurantsTable from './../components/AdminRestaurantsTable'
// const dummyData = {
//   restaurant: {
//     id: 2,
//     name: 'Mrs. Mckenzie Johnston',
//     tel: '567-714-6131 x621',
//     address: '61371 Rosalinda Knoll',
//     opening_hours: '08:00',
//     description:
//       'Quia pariatur perferendis architecto tenetur omnis pariatur tempore.',
//     image: 'https://loremflickr.com/320/240/food,dessert,restaurant/?random=2',
//     createdAt: '2019-06-22T09:00:43.000Z',
//     updatedAt: '2019-06-22T09:00:43.000Z',
//     CategoryId: 3,
//     Category: {
//       id: 3,
//       name: '義大利料理',
//       createdAt: '2019-06-22T09:00:43.000Z',
//       updatedAt: '2019-06-22T09:00:43.000Z'
//     }
//   }
// }
export default {
  name: 'AdminRestaurant',
  components: {
    AdminNav,
    AdminRestaurantsTable
  }
  // data () {
  //   return {
  //     restaurant: {
  //       id: -1,
  //       name: '',
  //       categoryName: '',
  //       image: '',
  //       openingHours: '',
  //       tel: '',
  //       address: '',
  //       description: ''
  //     }
  //   }
  // }
  // mounted () {
  //   const { id: restaurantId } = this.$route.params
  //   this.fetchRestaurant(restaurantId)
  // },
  // methods: {
  //   fetchRestaurant (restaurantId) {
  //     const { restaurant } = dummyData
  //     this.restaurant = {
  //       ...this.restaurant,
  //       id: restaurant.id,
  //       name: restaurant.name,
  //       categoryName: restaurant.Category.name,
  //       image: restaurant.image,
  //       openingHours: restaurant.opening_hours,
  //       tel: restaurant.tel,
  //       address: restaurant.address,
  //       description: restaurant.description
  //     }
  //   }
  // }
}
</script>
