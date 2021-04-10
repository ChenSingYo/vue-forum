<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      美食達人
    </h1>
    <hr />
    <div class="row text-center">
    <UsersCard
      v-for="user in users"
      :key="user.id"
      :initial-user="user"
    />
    </div>
  </div>
</template>

<script>
import NavTabs from './../components/NavTabs.vue'
import UsersCard from './../components/UsersCard'

const dummyData = {
  users: [
    {
      id: 1,
      name: 'root',
      email: 'root@example.com',
      password: '$2a$10$r5sNq7DnH82Ly.n0/QjqgOczyBgR3sQ6Yk8NSrKpJtgcJ.Kl0n81K',
      isAdmin: true,
      image: 'https://randomuser.me/api/portraits/women/17.jpg',
      createdAt: '2021-04-07T14:21:46.000Z',
      updatedAt: '2021-04-07T14:21:46.000Z',
      Followers: [],
      FollowerCount: 0,
      isFollowed: false
    },
    {
      id: 2,
      name: 'user1',
      email: 'user1@example.com',
      password: '$2a$10$ytpYqtTVPkE.8liOUf/ov.KnNcUMf8WNQzMqmWsIXK7x1VevkaVHy',
      isAdmin: false,
      image: 'https://randomuser.me/api/portraits/women/21.jpg',
      createdAt: '2021-04-07T14:21:46.000Z',
      updatedAt: '2021-04-07T14:21:46.000Z',
      Followers: [],
      FollowerCount: 0,
      isFollowed: true
    },
    {
      id: 3,
      name: 'user2',
      email: 'user2@example.com',
      password: '$2a$10$haSnB7YRouloMuOkAR.svO8hrQoT6rfMsg1SZy2hOyfT36isvc8OK',
      isAdmin: false,
      image: 'https://randomuser.me/api/portraits/women/20.jpg',
      createdAt: '2021-04-07T14:21:46.000Z',
      updatedAt: '2021-04-07T14:21:46.000Z',
      Followers: [],
      FollowerCount: 0,
      isFollowed: false
    }
  ]
}

export default {
  components: {
    NavTabs,
    UsersCard
  },
  data () {
    return {
      users: []
    }
  },
  created () {
    this.fetchUsers()
  },
  methods: {
    fetchUsers () {
      const { users } = dummyData
      this.users = users
    }
  }
}
</script>
