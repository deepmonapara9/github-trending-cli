const Table = require('cli-table3');
const chalk = require('chalk');

function displayRepos(repos) {
   if (!repos || repos.length === 0) {
      console.log(chalk.yellow('No repositories found.'));
      return;
   }

   const table = new Table({
      head: [chalk.cyan('Name'), chalk.cyan('Stars'), chalk.cyan('Language'), chalk.cyan('URL')],
      colWidths: [30, 10, 15, 50],
      wordWrap: true
   });

   repos.forEach(repo => {
      table.push([
         chalk.bold(repo.name),
         repo.stargazers_count,
         repo.language || 'N/A',
         repo.html_url
      ]);
   });

   console.log(table.toString());
}

module.exports = { displayRepos };
