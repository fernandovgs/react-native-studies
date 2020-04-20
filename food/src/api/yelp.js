import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer AapZZgFkmX9aU6Iy5X64yMYZGpTYKcN0uphx74pRssfbsEkik3EO7YWyRCoa5An7A2FvhBHzPY8f8CLhgO2h4ev6RfVuQs3bUpU4kWOioC9-xVp_q7i-edj6VPGcXnYx',
  },
});