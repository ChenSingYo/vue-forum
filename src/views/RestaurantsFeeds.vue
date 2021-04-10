<template>
  <div class="container py-5">
    <NavTabs />

    <h1 class="mt-5">
      最新動態
    </h1>
    <hr />
    <div class="row">
      <div class="col-md-6">
        <h3>最新餐廳</h3>
        <!-- 最新餐廳 NewestRestaurants -->
        <NewestRestaurants :restaurants="restaurants" />
      </div>
      <div class="col-md-6">
        <h3>最新評論</h3>
        <!-- 最新評論 NewestComments-->
        <NewestComments :comments="comments"/>

      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from './../components/NavTabs.vue'
import NewestRestaurants from './../components/NewestRestaurants'
import NewestComments from './../components/NewestComments'

const dummyData = {
  restaurants: [
    {
      id: 2,
      name: 'Kali Swift',
      tel: '565.517.9558',
      address: '64851 Destin Coves',
      opening_hours: '08:00',
      description: 'aut',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=48.772796055085756',
      viewCounts: 78,
      createdAt: '2021-03-08T12:49:12.000Z',
      updatedAt: '2021-04-01T16:26:43.000Z',
      CategoryId: 5,
      Category: {
        id: 5,
        name: '素食料理',
        createdAt: '2021-03-08T12:49:12.000Z',
        updatedAt: '2021-03-08T12:49:12.000Z'
      }
    },
    {
      id: 3,
      name: 'Mrs. Janis Langworth',
      tel: '916.419.3453 x4967',
      address: '72191 Josue Extension',
      opening_hours: '08:00',
      description:
        'Odit accusamus suscipit expedita beatae quidem minima ducimus. Voluptate qui quae quae voluptatem distinctio quas voluptas hic eaque. Error ullam voluptas libero earum blanditiis maxime.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=9.115894391627965',
      viewCounts: 37,
      createdAt: '2021-03-08T12:49:12.000Z',
      updatedAt: '2021-03-25T13:22:35.000Z',
      CategoryId: 1,
      Category: null
    },
    {
      id: 4,
      name: 'Casper Schuppe',
      tel: '1-715-543-5358 x0843',
      address: '591 Kiehn Neck',
      opening_hours: '08:00',
      description:
        'Consequatur architecto non non et temporibus eveniet aut id provident. Praesentium ut dolor laudantium aut qui deserunt reprehenderit. Totam quis molestiae.\n \rLabore explicabo praesentium qui consequuntur nihil voluptatum. Recusandae beatae aut culpa mollitia eum. Velit aut inventore consectetur. Hic illum quia. Amet libero dolor.\n \rIure ex deserunt delectus veritatis. Fugit beatae tempora. Dolores atque eos odio nobis. Et quo sapiente quisquam molestias.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=3.762794837575689',
      viewCounts: 44,
      createdAt: '2021-03-08T12:49:12.000Z',
      updatedAt: '2021-04-01T08:42:07.000Z',
      CategoryId: 3,
      Category: {
        id: 3,
        name: '日式料理',
        createdAt: '2021-03-08T12:49:12.000Z',
        updatedAt: '2021-03-24T13:59:43.000Z'
      }
    },
    {
      id: 5,
      name: 'Jacklyn Zboncak',
      tel: '467.187.2522',
      address: '91082 Narciso Summit',
      opening_hours: '08:00',
      description:
        'Est nulla ut voluptas placeat. Aperiam incidunt autem laudantium facere sint ea deserunt nam velit. Est voluptatum est consequuntur veritatis ex ex optio placeat.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=56.561828198471574',
      viewCounts: 13,
      createdAt: '2021-03-08T12:49:12.000Z',
      updatedAt: '2021-03-25T13:15:01.000Z',
      CategoryId: 2,
      Category: null
    },
    {
      id: 6,
      name: 'Helga Leuschke',
      tel: '018.353.3738',
      address: '9669 Adeline Prairie',
      opening_hours: '08:00',
      description:
        'Molestias ut laborum quisquam quia. Aspernatur culpa quia tempora tempora. Quod dolor deleniti eos molestiae. Quia repellendus itaque facilis incidunt sunt iure dolore.\n \rMollitia voluptatem aut ut vel. Est cum architecto. Eos iure nemo ab est laborum.\n \rMaxime et deserunt ut explicabo. Soluta quia sint porro temporibus et quo est dicta non. Ullam quia cumque beatae.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=5.223329699039492',
      viewCounts: 4,
      createdAt: '2021-03-08T12:49:12.000Z',
      updatedAt: '2021-03-26T15:29:02.000Z',
      CategoryId: 1,
      Category: null
    },
    {
      id: 7,
      name: 'Magali Bartell',
      tel: '1-189-644-2173 x99673',
      address: '3527 Pauline Overpass',
      opening_hours: '08:00',
      description: 'debitis quae officia',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=54.967159546194445',
      viewCounts: 2,
      createdAt: '2021-03-08T12:49:12.000Z',
      updatedAt: '2021-03-25T13:08:06.000Z',
      CategoryId: 1,
      Category: null
    },
    {
      id: 8,
      name: 'Abdul Von',
      tel: '1-767-733-8981 x5562',
      address: '14170 Nina Crest',
      opening_hours: '08:00',
      description:
        'Qui vitae voluptas dicta explicabo.\nDolores pariatur alias.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=95.36642342635744',
      viewCounts: 7,
      createdAt: '2021-03-08T12:49:12.000Z',
      updatedAt: '2021-04-01T06:13:01.000Z',
      CategoryId: 5,
      Category: {
        id: 5,
        name: '素食料理',
        createdAt: '2021-03-08T12:49:12.000Z',
        updatedAt: '2021-03-08T12:49:12.000Z'
      }
    },
    {
      id: 9,
      name: 'Celine Emard',
      tel: '086-920-8919 x545',
      address: '0572 Nayeli Parks',
      opening_hours: '08:00',
      description:
        'Voluptatem rerum expedita. Illum id illum architecto quisquam ratione quidem. Odio dolor ratione ab natus totam. Aut odit ullam incidunt fugit vitae rem.\n \rUnde et esse velit corrupti nesciunt reprehenderit at nisi nisi. Rerum nemo doloremque sit animi aliquam et. Labore et sit sequi. Molestiae dignissimos sint. Consequuntur ad accusantium.\n \rAut nihil maxime aspernatur eum eius nemo aut possimus. Alias debitis quia consectetur iste. Rerum cumque et autem tenetur. Qui sunt dicta. Sed placeat animi corrupti dolor. Accusantium dolorum eum eaque.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=11.241151674478257',
      viewCounts: 18,
      createdAt: '2021-03-08T12:49:12.000Z',
      updatedAt: '2021-03-25T13:27:15.000Z',
      CategoryId: 2,
      Category: null
    },
    {
      id: 10,
      name: 'Lavon Swaniawski',
      tel: '307-906-4558 x462',
      address: '03907 Murazik Burgs',
      opening_hours: '08:00',
      description:
        'Ut amet repudiandae rem aut soluta sit aliquam. Vero quia voluptatem eaque tenetur blanditiis nemo hic. Voluptatem vero eaque sed aut et. Consequatur voluptatem officia sint corrupti ut at. Sequi maxime illum quia aut illum.\n \rOptio et at repellendus voluptatibus atque. Qui nesciunt error vel voluptas fugiat error id possimus. Eligendi ab quae omnis saepe repudiandae. Quas aliquid ut. Eos eos dignissimos sint animi nobis esse.\n \rIure laborum voluptatibus eum. Perspiciatis fugit rem dolorem ut et facere eum quia. Enim cumque autem vel vitae inventore quis. Facilis mollitia enim modi voluptatem neque exercitationem. Vero quasi dolore et. Deleniti incidunt sunt.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=92.10116468300554',
      viewCounts: 2,
      createdAt: '2021-03-08T12:49:12.000Z',
      updatedAt: '2021-04-01T06:13:14.000Z',
      CategoryId: 3,
      Category: {
        id: 3,
        name: '日式料理',
        createdAt: '2021-03-08T12:49:12.000Z',
        updatedAt: '2021-03-24T13:59:43.000Z'
      }
    },
    {
      id: 11,
      name: 'Dr. Deven Kshlerin',
      tel: '(464) 878-5975 x4582',
      address: '491 Maritza Lodge',
      opening_hours: '08:00',
      description:
        'Vitae quidem ut. Alias cupiditate ut vero aperiam ex. Et et quo nihil. Ipsa velit blanditiis porro. Eos fugit enim officia cumque consequatur molestiae officiis incidunt.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=38.983915783092506',
      viewCounts: 1,
      createdAt: '2021-03-08T12:49:12.000Z',
      updatedAt: '2021-04-01T06:13:07.000Z',
      CategoryId: 3,
      Category: {
        id: 3,
        name: '日式料理',
        createdAt: '2021-03-08T12:49:12.000Z',
        updatedAt: '2021-03-24T13:59:43.000Z'
      }
    }
  ],
  comments: [
    {
      id: 227,
      text: null,
      UserId: 1,
      RestaurantId: null,
      createdAt: '2021-03-25T13:26:12.000Z',
      updatedAt: '2021-03-25T13:26:12.000Z',
      User: {
        id: 1,
        name: 'root',
        email: 'root@example.com',
        password:
          '$2a$10$vBDtcMJIvK7NxWsFzzS10.PGTJwTPCoiTVeU6ZLxXemXuiyCyA9jy',
        isAdmin: true,
        image: 'https://i.imgur.com/RwTSR6Q.jpeg',
        createdAt: '2021-03-08T12:49:12.000Z',
        updatedAt: '2021-03-19T17:09:57.000Z'
      },
      Restaurant: null
    },
    {
      id: 217,
      text: null,
      UserId: 1,
      RestaurantId: null,
      createdAt: '2021-03-25T13:24:59.000Z',
      updatedAt: '2021-03-25T13:24:59.000Z',
      User: {
        id: 1,
        name: 'root',
        email: 'root@example.com',
        password:
          '$2a$10$vBDtcMJIvK7NxWsFzzS10.PGTJwTPCoiTVeU6ZLxXemXuiyCyA9jy',
        isAdmin: true,
        image: 'https://i.imgur.com/RwTSR6Q.jpeg',
        createdAt: '2021-03-08T12:49:12.000Z',
        updatedAt: '2021-03-19T17:09:57.000Z'
      },
      Restaurant: null
    },
    {
      id: 187,
      text: '???',
      UserId: 1,
      RestaurantId: 8,
      createdAt: '2021-03-19T17:10:18.000Z',
      updatedAt: '2021-03-19T17:10:18.000Z',
      User: {
        id: 1,
        name: 'root',
        email: 'root@example.com',
        password:
          '$2a$10$vBDtcMJIvK7NxWsFzzS10.PGTJwTPCoiTVeU6ZLxXemXuiyCyA9jy',
        isAdmin: true,
        image: 'https://i.imgur.com/RwTSR6Q.jpeg',
        createdAt: '2021-03-08T12:49:12.000Z',
        updatedAt: '2021-03-19T17:09:57.000Z'
      },
      Restaurant: {
        id: 8,
        name: 'Abdul Von',
        tel: '1-767-733-8981 x5562',
        address: '14170 Nina Crest',
        opening_hours: '08:00',
        description:
          'Qui vitae voluptas dicta explicabo.\nDolores pariatur alias.',
        image:
          'https://loremflickr.com/320/240/restaurant,food/?random=95.36642342635744',
        viewCounts: 7,
        createdAt: '2021-03-08T12:49:12.000Z',
        updatedAt: '2021-04-01T06:13:01.000Z',
        CategoryId: 5
      }
    },
    {
      id: 78,
      text: 'Maiores consequuntur qui.',
      UserId: 1,
      RestaurantId: 28,
      createdAt: '2021-03-08T12:49:12.000Z',
      updatedAt: '2021-03-08T12:49:12.000Z',
      User: {
        id: 1,
        name: 'root',
        email: 'root@example.com',
        password:
          '$2a$10$vBDtcMJIvK7NxWsFzzS10.PGTJwTPCoiTVeU6ZLxXemXuiyCyA9jy',
        isAdmin: true,
        image: 'https://i.imgur.com/RwTSR6Q.jpeg',
        createdAt: '2021-03-08T12:49:12.000Z',
        updatedAt: '2021-03-19T17:09:57.000Z'
      },
      Restaurant: {
        id: 28,
        name: 'Toney Abernathy',
        tel: '719.199.2990 x7421',
        address: '5143 Cronin Hill',
        opening_hours: '08:00',
        description:
          'Perferendis inventore praesentium quod autem enim fuga sit ut deleniti. Soluta dicta voluptatem enim unde possimus. Ipsa rerum error soluta velit temporibus neque.\n \rDolorem nemo dolorem. Velit ut ab illo qui quaerat ab laudantium voluptas sunt. Repellendus delectus consectetur unde blanditiis.\n \rBeatae quis consequatur. Tempora doloremque tempore illum veritatis laboriosam. Labore recusandae itaque fugiat dolore fugit aut quo voluptate.',
        image:
          'https://loremflickr.com/320/240/restaurant,food/?random=81.9491015332274',
        viewCounts: 0,
        createdAt: '2021-03-08T12:49:12.000Z',
        updatedAt: '2021-03-08T12:49:12.000Z',
        CategoryId: 3
      }
    },
    {
      id: 106,
      text: 'At molestiae a sunt aperiam qui eaque enim.',
      UserId: 1,
      RestaurantId: 6,
      createdAt: '2021-03-08T12:49:12.000Z',
      updatedAt: '2021-03-08T12:49:12.000Z',
      User: {
        id: 1,
        name: 'root',
        email: 'root@example.com',
        password:
          '$2a$10$vBDtcMJIvK7NxWsFzzS10.PGTJwTPCoiTVeU6ZLxXemXuiyCyA9jy',
        isAdmin: true,
        image: 'https://i.imgur.com/RwTSR6Q.jpeg',
        createdAt: '2021-03-08T12:49:12.000Z',
        updatedAt: '2021-03-19T17:09:57.000Z'
      },
      Restaurant: {
        id: 6,
        name: 'Helga Leuschke',
        tel: '018.353.3738',
        address: '9669 Adeline Prairie',
        opening_hours: '08:00',
        description:
          'Molestias ut laborum quisquam quia. Aspernatur culpa quia tempora tempora. Quod dolor deleniti eos molestiae. Quia repellendus itaque facilis incidunt sunt iure dolore.\n \rMollitia voluptatem aut ut vel. Est cum architecto. Eos iure nemo ab est laborum.\n \rMaxime et deserunt ut explicabo. Soluta quia sint porro temporibus et quo est dicta non. Ullam quia cumque beatae.',
        image:
          'https://loremflickr.com/320/240/restaurant,food/?random=5.223329699039492',
        viewCounts: 4,
        createdAt: '2021-03-08T12:49:12.000Z',
        updatedAt: '2021-03-26T15:29:02.000Z',
        CategoryId: 1
      }
    },
    {
      id: 105,
      text: 'Est at quos minus expedita distinctio.',
      UserId: 3,
      RestaurantId: 5,
      createdAt: '2021-03-08T12:49:12.000Z',
      updatedAt: '2021-03-08T12:49:12.000Z',
      User: {
        id: 3,
        name: 'user2',
        email: 'user2@example.com',
        password:
          '$2a$10$EAEKdlt07QYD9qDEDB7dq.9GMnGYQQ16r3f4GIeM2yUlkimr/LheC',
        isAdmin: true,
        image: null,
        createdAt: '2021-03-08T12:49:12.000Z',
        updatedAt: '2021-04-01T15:30:11.000Z'
      },
      Restaurant: {
        id: 5,
        name: 'Jacklyn Zboncak',
        tel: '467.187.2522',
        address: '91082 Narciso Summit',
        opening_hours: '08:00',
        description:
          'Est nulla ut voluptas placeat. Aperiam incidunt autem laudantium facere sint ea deserunt nam velit. Est voluptatum est consequuntur veritatis ex ex optio placeat.',
        image:
          'https://loremflickr.com/320/240/restaurant,food/?random=56.561828198471574',
        viewCounts: 13,
        createdAt: '2021-03-08T12:49:12.000Z',
        updatedAt: '2021-03-25T13:15:01.000Z',
        CategoryId: 2
      }
    },
    {
      id: 104,
      text: 'Non ab earum iure quia qui quia aliquam qui ut.',
      UserId: 3,
      RestaurantId: 4,
      createdAt: '2021-03-08T12:49:12.000Z',
      updatedAt: '2021-03-08T12:49:12.000Z',
      User: {
        id: 3,
        name: 'user2',
        email: 'user2@example.com',
        password:
          '$2a$10$EAEKdlt07QYD9qDEDB7dq.9GMnGYQQ16r3f4GIeM2yUlkimr/LheC',
        isAdmin: true,
        image: null,
        createdAt: '2021-03-08T12:49:12.000Z',
        updatedAt: '2021-04-01T15:30:11.000Z'
      },
      Restaurant: {
        id: 4,
        name: 'Casper Schuppe',
        tel: '1-715-543-5358 x0843',
        address: '591 Kiehn Neck',
        opening_hours: '08:00',
        description:
          'Consequatur architecto non non et temporibus eveniet aut id provident. Praesentium ut dolor laudantium aut qui deserunt reprehenderit. Totam quis molestiae.\n \rLabore explicabo praesentium qui consequuntur nihil voluptatum. Recusandae beatae aut culpa mollitia eum. Velit aut inventore consectetur. Hic illum quia. Amet libero dolor.\n \rIure ex deserunt delectus veritatis. Fugit beatae tempora. Dolores atque eos odio nobis. Et quo sapiente quisquam molestias.',
        image:
          'https://loremflickr.com/320/240/restaurant,food/?random=3.762794837575689',
        viewCounts: 44,
        createdAt: '2021-03-08T12:49:12.000Z',
        updatedAt: '2021-04-01T08:42:07.000Z',
        CategoryId: 3
      }
    },
    {
      id: 99,
      text: 'Consectetur et voluptas aliquid ea doloribus aut quasi.',
      UserId: 2,
      RestaurantId: 49,
      createdAt: '2021-03-08T12:49:12.000Z',
      updatedAt: '2021-03-08T12:49:12.000Z',
      User: {
        id: 2,
        name: 'user1',
        email: 'user1@example.com',
        password:
          '$2a$10$xvrI2amUsnW9nxZjtQEyhemxqvFrRME0wtJNiAQhrGA8k90OlvYxS',
        isAdmin: true,
        image: null,
        createdAt: '2021-03-08T12:49:12.000Z',
        updatedAt: '2021-04-01T15:29:07.000Z'
      },
      Restaurant: {
        id: 49,
        name: 'COmida japonessaaaaaaa',
        tel: '073.403.6582',
        address: '633 Hahn Mountain',
        opening_hours: '08:00',
        description:
          'Debitis sint voluptatem nobis eaque temporibus quis possimus corporis non.\r\nEt perferendis eum qui modi dignissimos non necessitatibus expedita inventore.\r\nExercitationem consequuntur eaque eligendi quia.',
        image:
          'https://loremflickr.com/320/240/restaurant,food/?random=67.92778757780937',
        viewCounts: 2,
        createdAt: '2021-03-08T12:49:12.000Z',
        updatedAt: '2021-03-31T14:45:46.000Z',
        CategoryId: 4
      }
    },
    {
      id: 98,
      text: 'Veniam molestiae voluptas quam nesciunt.',
      UserId: 1,
      RestaurantId: 48,
      createdAt: '2021-03-08T12:49:12.000Z',
      updatedAt: '2021-03-08T12:49:12.000Z',
      User: {
        id: 1,
        name: 'root',
        email: 'root@example.com',
        password:
          '$2a$10$vBDtcMJIvK7NxWsFzzS10.PGTJwTPCoiTVeU6ZLxXemXuiyCyA9jy',
        isAdmin: true,
        image: 'https://i.imgur.com/RwTSR6Q.jpeg',
        createdAt: '2021-03-08T12:49:12.000Z',
        updatedAt: '2021-03-19T17:09:57.000Z'
      },
      Restaurant: {
        id: 48,
        name: 'Kaitlin Johnston II',
        tel: '103.302.0448 x034',
        address: '493 Emanuel Mews',
        opening_hours: '08:00',
        description: 'sed placeat labore',
        image:
          'https://loremflickr.com/320/240/restaurant,food/?random=81.51122997290389',
        viewCounts: 1,
        createdAt: '2021-03-08T12:49:12.000Z',
        updatedAt: '2021-04-01T06:13:22.000Z',
        CategoryId: 4
      }
    },
    {
      id: 97,
      text: 'Rerum et reprehenderit non placeat in laborum velit qui.',
      UserId: 2,
      RestaurantId: 47,
      createdAt: '2021-03-08T12:49:12.000Z',
      updatedAt: '2021-03-08T12:49:12.000Z',
      User: {
        id: 2,
        name: 'user1',
        email: 'user1@example.com',
        password:
          '$2a$10$xvrI2amUsnW9nxZjtQEyhemxqvFrRME0wtJNiAQhrGA8k90OlvYxS',
        isAdmin: true,
        image: null,
        createdAt: '2021-03-08T12:49:12.000Z',
        updatedAt: '2021-04-01T15:29:07.000Z'
      },
      Restaurant: {
        id: 47,
        name: 'Henri Mertz',
        tel: '705.463.9863 x1090',
        address: '5663 Deanna Junction',
        opening_hours: '08:00',
        description: 'nostrum',
        image:
          'https://loremflickr.com/320/240/restaurant,food/?random=4.940019122310857',
        viewCounts: 0,
        createdAt: '2021-03-08T12:49:12.000Z',
        updatedAt: '2021-03-08T12:49:12.000Z',
        CategoryId: 2
      }
    }
  ]
}

export default {
  name: 'RestaurantFeeds',
  components: {
    NavTabs,
    NewestRestaurants,
    NewestComments
  },
  data () {
    return {
      restaurants: [],
      comments: []
    }
  },
  created () {
    this.fetchFeeds()
  },
  methods: {
    fetchFeeds () {
      // fetch Api
      const { restaurants, comments } = dummyData
      this.restaurants = restaurants
      this.comments = comments.filter(comment => comment.Restaurant && comment.text)
    }
  }
}
</script>
