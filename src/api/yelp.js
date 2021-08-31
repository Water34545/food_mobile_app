import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer SM6QuQah3JyzcjAE58s3uPVdqSw-ZPfHmjfVsSDaxNg7xv9bd-IsyJ6YKoDzRVcOmLsdCS07McYHLsn3ZZ6DJ3S4c1SdRsQ5mCz_o_urW13ZOC8ZulskU4juiIkmYXYx'
  }
})