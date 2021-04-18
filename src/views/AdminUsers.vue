<template>
  <div class="container py-5">
    <AdminNav />

    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">
            #
          </th>
          <th scope="col">
            Email
          </th>
          <th scope="col">
            Role
          </th>
          <th scope="col" width="140">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <th scope="row">
            {{ user.id }}
          </th>
          <td>{{ user.email }}</td>
          <td>{{ user.isAdmin ? 'Admin' : 'user' }}</td>
          <td>
            <button
              type="button"
              class="btn btn-link"
              @click="
                toggleUserRole({ userId: user.id, isAdmin: user.isAdmin })
              "
            >
              {{ user.isAdmin ? 'Set as user' : 'Set as admin' }}
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from './../components/AdminNav'

const dummyUsers = {
  users: [
    {
      id: 1,
      name: 'root',
      email: 'root@example.com',
      password: '$2a$10$r5sNq7DnH82Ly.n0/QjqgOczyBgR3sQ6Yk8NSrKpJtgcJ.Kl0n81K',
      isAdmin: true,
      image: null,
      createdAt: '2021-04-07T14:21:46.000Z',
      updatedAt: '2021-04-07T14:21:46.000Z'
    },
    {
      id: 2,
      name: 'user1',
      email: 'user1@example.com',
      password: '$2a$10$ytpYqtTVPkE.8liOUf/ov.KnNcUMf8WNQzMqmWsIXK7x1VevkaVHy',
      isAdmin: false,
      image: null,
      createdAt: '2021-04-07T14:21:46.000Z',
      updatedAt: '2021-04-07T14:21:46.000Z'
    },
    {
      id: 3,
      name: 'user2',
      email: 'user2@example.com',
      password: '$2a$10$haSnB7YRouloMuOkAR.svO8hrQoT6rfMsg1SZy2hOyfT36isvc8OK',
      isAdmin: false,
      image: null,
      createdAt: '2021-04-07T14:21:46.000Z',
      updatedAt: '2021-04-07T14:21:46.000Z'
    },
    {
      id: 7,
      name: '123',
      email: '123@123.com',
      password: '$2a$10$r1IFjg40/wSn6sqpt5ecs.nCdNmQbcPujIjIclI8i5JrXcY5xXlI6',
      isAdmin: false,
      image: null,
      createdAt: '2021-04-08T12:37:37.000Z',
      updatedAt: '2021-04-08T12:37:37.000Z'
    },
    {
      id: 17,
      name: 'user4',
      email: 'dexample@gmail.com',
      password: '$2a$10$0xrN4lOd5e0.UI4p.W9ug.Stlf4IEEdZ.vtkuJpVkQvER/htZKu.S',
      isAdmin: false,
      image: null,
      createdAt: '2021-04-09T15:26:17.000Z',
      updatedAt: '2021-04-09T15:26:17.000Z'
    },
    {
      id: 27,
      name: '123',
      email: '123@123.123',
      password: '$2a$10$x8xj/DS39iyJS/rjutOtcuUEvJr0OeaXwMgYLS6rBM0MBROP5cIri',
      isAdmin: false,
      image: null,
      createdAt: '2021-04-13T16:19:18.000Z',
      updatedAt: '2021-04-13T16:19:18.000Z'
    }
  ]
}

export default {
  name: 'AdminUsers',
  components: {
    AdminNav
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
      const { users } = dummyUsers
      this.users = users
    },
    toggleUserRole ({ userId, isAdmin }) {
      this.users = this.users.map(user => {
        if (user.id === userId) {
          return {
            ...user,
            isAdmin: !isAdmin
          }
        }
        return user
      })
    }
  }
}
</script>
