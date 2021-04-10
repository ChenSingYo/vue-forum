<template>
  <div class="container py-5">
    <!-- 餐廳資訊頁 RestaurantDetail -->
    <RestaurantDetail
      :initial-restaurant="restaurant"
     />
    <hr />
    <!-- 餐廳評論 RestaurantComments -->
    <RestaurantComments
      :restaurant-comments="restaurantComments"
       @after-delete-comment="afterDeleteComment"
    />
    <!-- 新增評論 CreateComment -->
    <CreateComment
      :restaurant-id="restaurant.id"
      @after-create-comment="afterCreateComment"
    />
  </div>
</template>

<script>
import RestaurantDetail from './../components/RestaurantDetail'
import RestaurantComments from './../components/RestaurantComments'
import CreateComment from './../components/CreateComment'

const dummyData = {
  restaurant: {
    id: 1,
    name: 'Jacey Huel II',
    tel: '233.190.8258 x432',
    address: '0410 Maybelle Manors',
    opening_hours: '08:00',
    description:
      'Nostrum consectetur odio ex ea. Officia aut ab et voluptates ullam eaque dolores. Et officiis odit voluptatem velit repellat accusamus ut veritatis. Ut ut dolor aliquid nisi. Molestiae autem a fuga debitis iure.',
    image:
      'https://loremflickr.com/320/240/restaurant,food/?random=47.867095179811315',
    viewCounts: 1,
    createdAt: '2021-04-07T14:21:46.000Z',
    updatedAt: '2021-04-08T05:31:27.082Z',
    CategoryId: 5,
    Category: {
      id: 5,
      name: '素食料理',
      createdAt: '2021-04-07T14:21:46.000Z',
      updatedAt: '2021-04-07T14:21:46.000Z'
    },
    FavoritedUsers: [],
    LikedUsers: [],
    Comments: [
      {
        id: 1,
        text: 'Voluptate iure tenetur cumque nemo eum cum eos consequatur nam.',
        UserId: 3,
        RestaurantId: 1,
        createdAt: '2021-04-07T14:21:46.000Z',
        updatedAt: '2021-04-07T14:21:46.000Z',
        User: {
          id: 3,
          name: 'user2',
          email: 'user2@example.com',
          password:
            '$2a$10$haSnB7YRouloMuOkAR.svO8hrQoT6rfMsg1SZy2hOyfT36isvc8OK',
          isAdmin: false,
          image: null,
          createdAt: '2021-04-07T14:21:46.000Z',
          updatedAt: '2021-04-07T14:21:46.000Z'
        }
      },
      {
        id: 51,
        text: 'Harum eos occaecati nam amet unde quis exercitationem ut.',
        UserId: 3,
        RestaurantId: 1,
        createdAt: '2021-04-07T14:21:46.000Z',
        updatedAt: '2021-04-07T14:21:46.000Z',
        User: {
          id: 3,
          name: 'user2',
          email: 'user2@example.com',
          password:
            '$2a$10$haSnB7YRouloMuOkAR.svO8hrQoT6rfMsg1SZy2hOyfT36isvc8OK',
          isAdmin: false,
          image: null,
          createdAt: '2021-04-07T14:21:46.000Z',
          updatedAt: '2021-04-07T14:21:46.000Z'
        }
      },
      {
        id: 101,
        text: 'Vero laborum reprehenderit.',
        UserId: 1,
        RestaurantId: 1,
        createdAt: '2021-04-07T14:21:46.000Z',
        updatedAt: '2021-04-07T14:21:46.000Z',
        User: {
          id: 1,
          name: 'root',
          email: 'root@example.com',
          password:
            '$2a$10$r5sNq7DnH82Ly.n0/QjqgOczyBgR3sQ6Yk8NSrKpJtgcJ.Kl0n81K',
          isAdmin: true,
          image: null,
          createdAt: '2021-04-07T14:21:46.000Z',
          updatedAt: '2021-04-07T14:21:46.000Z'
        }
      }
    ]
  },
  isFavorited: false,
  isLiked: false
}

const dummyUser = {
  currentUser: {
    id: 1,
    name: '管理者',
    email: 'root@example.com',
    image: 'https://i.pravatar.cc/300',
    isAdmin: true
  },
  isAuthenticated: true
}

export default {
  name: 'Resaurant',
  components: {
    RestaurantDetail,
    RestaurantComments,
    CreateComment
  },
  data () {
    return {
      restaurant: {
        id: -1,
        name: '',
        categoryName: '',
        image: '',
        openingHours: '',
        tel: '',
        address: '',
        description: '',
        isFavorited: false,
        isLiked: false
      },
      currentUser: dummyUser.currentUser, // 使用dummyUser資料
      restaurantComments: []
    }
  },
  created () {
    const { id } = this.$route.params
    this.fetchRestaurant(id)
  },
  methods: {
    fetchRestaurant (restaurantId) {
      console.log('fetchRestaurant id:', restaurantId)
      const { restaurant, isFavorited, isLiked } = dummyData
      const {
        id,
        name,
        Category,
        image,
        opening_hours: openingHours,
        tel,
        address,
        description,
        Comments
      } = restaurant

      this.restaurant = {
        id,
        name,
        categoryName: Category ? Category.name : '未分類',
        image,
        openingHours,
        tel,
        address,
        description,
        isFavorited,
        isLiked
      }
      this.restaurantComments = Comments
    },
    afterDeleteComment (commentId) {
      this.restaurantComments = this.restaurantComments.filter(
        comment => comment.id !== commentId
      )
    },
    afterCreateComment (payload) {
      const { commentId, restaurantId, text } = payload
      this.restaurantComments.push({
        id: commentId, // 從子元件傳來
        RestaurantId: restaurantId, // 從子元件傳來
        User: { // 從API currentUser傳來 ，但暫時用dummyUser
          id: this.currentUser.id,
          name: this.currentUser.name
        },
        text: text, // 從子元件傳來
        createdAt: new Date() // 執行當下新增
      })
    }
  }
}
</script>
