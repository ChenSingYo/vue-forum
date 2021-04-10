import moment from 'moment'
export const fromNowMethods = {
  methods: {
    fromNow (dateTime) {
      if (!dateTime) {
        return '-'
      }
      return moment(dateTime).fromNow()
    }
  }
}
