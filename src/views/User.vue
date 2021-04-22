<template>
  <div class="album py-5 bg-light">
    <div class="container">
      <UserProfileCard
        :user="user"
        :is-current-user="currentUser.id === user.id"
        :initialIsFollowed="isFollowed"
      />
      <div class="row">
        <div class="col-md-4">
          <UserFollowingsCard :followings="followings" />

          <UserFollowersCard :followers="followers" />
        </div>
        <div class="col-md-8">
          <UserCommentsCard :comments="comments" />
          <br />
          <UserFavRestaurantsCard
            :favorited-restaurants="favoritedRestaurants"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import usersAPI from './../apis/users'
import { Toast } from './../utils/helpers'
import UserProfileCard from './../components/UserProfileCard'
import UserFollowingsCard from './../components/UserFollowingsCard'
import UserFollowersCard from './../components/UserFollowersCard'
import UserCommentsCard from './../components/UserCommentsCard'
import UserFavRestaurantsCard from './../components/UserFavRestaurantsCard'

export default {
  name: 'User',
  components: {
    UserProfileCard,
    UserFollowingsCard,
    UserFollowersCard,
    UserCommentsCard,
    UserFavRestaurantsCard
  },
  data () {
    return {
      user: {
        id: 0,
        image: '',
        name: '',
        email: '',
        followingsLength: 0,
        followersLength: 0,
        commentsLength: 0,
        favoritedRestaurantsLength: 0
      },
      isFollowed: false,
      followings: [],
      followers: [],
      comments: [],
      favoritedRestaurants: []
    }
  },
  computed: {
    ...mapState(['currentUser'])
  },
  created () {
    const { id } = this.$route.params
    this.fetchUser(id)
  },
  beforeRouteUpdate (to, from, next) {
    const { id } = to.params
    this.fetchUser(id)
    next()
  },
  methods: {
    async fetchUser (userId) {
      try {
        const { data } = await usersAPI.get({ userId })
        if (data.status === 'error') {
          throw new Error(data.message)
        }
        const { profile, isFollowed } = data
        const {
          id,
          image,
          name,
          email,
          Followings,
          Followers,
          Comments,
          FavoritedRestaurants
        } = profile

        // const commentSet = new Set()
        // this.comments = Comments.filter(
        //   comment =>
        //     comment.Restaurant &&
        //     !commentSet.has(comment.Restaurant.id) &&
        //     commentSet.add(comment.Restaurant.id)
        // )

        this.user = {
          ...this.user,
          id: id, // data中的id賦值為data裡的id
          image,
          name,
          email,
          followingsLength: Followings.length,
          followersLength: Followers.length,
          commentsLength: Comments.length,
          favoritedRestaurantsLength: FavoritedRestaurants.length
        }

        this.isFollowed = isFollowed
        this.followings = Followings
        this.follwers = Followers
        this.favoritedRestaurants = FavoritedRestaurants
      } catch (e) {
        console.log(e)
        Toast.fire({
          icon: 'error',
          title: '無法取得使用者資料，請稍後再試'
        })
      }
    }
  }
}
</script>
