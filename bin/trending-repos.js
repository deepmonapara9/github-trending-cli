#!/usr/bin/env node
const { program } = require('commander');
const { fetchTrendingRepos } = require('../lib/api');
const { displayRepos } = require('../lib/display');
const chalk = require('chalk');

program
   .version('1.0.0')
   .description('Get trending GitHub repositories')
   .option('-d, --duration <duration>', 'Time duration (day, week, month, year)', 'week')
   .option('-l, --limit <limit>', 'Number of repositories to display', 10)
   .action(async (options) => {
      try {
         const repos = await fetchTrendingRepos(options.duration, options.limit);
         displayRepos(repos);
      } catch (error) {
         console.error(chalk.red('Error fetching trending repositories:'), error.message);
         process.exit(1);
      }
   });

program.parse(process.argv);
