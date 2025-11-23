const axios = require('axios');
const { subDays, subWeeks, subMonths, subYears, format } = require('date-fns');

async function fetchTrendingRepos(duration, limit) {
   let startDate;
   const now = new Date();

   switch (duration) {
      case 'day':
         startDate = subDays(now, 1);
         break;
      case 'week':
         startDate = subWeeks(now, 1);
         break;
      case 'month':
         startDate = subMonths(now, 1);
         break;
      case 'year':
         startDate = subYears(now, 1);
         break;
      default:
         throw new Error('Invalid duration. Use day, week, month, or year.');
   }

   const dateString = format(startDate, 'yyyy-MM-dd');
   const query = `created:>${dateString}`;
   const url = `https://api.github.com/search/repositories?q=${query}&sort=stars&order=desc&per_page=${limit}`;

   try {
      const response = await axios.get(url);
      return response.data.items;
   } catch (error) {
      if (error.response) {
         throw new Error(`GitHub API returned ${error.response.status}: ${error.response.statusText}`);
      }
      throw error;
   }
}

module.exports = { fetchTrendingRepos };
