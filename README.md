# GitHub Trending CLI

A command-line interface tool to fetch and display trending GitHub repositories.

## Installation

```bash
npm install -g github-trending-cli
```

Or run directly with `npx`:

```bash
npx github-trending-cli
```

## Usage

```bash
trending-repos [options]
```

### Options

- `-d, --duration <duration>`: Time duration to filter trending repos. Options: `day`, `week`, `month`, `year`. Default: `week`.
- `-l, --limit <limit>`: Number of repositories to display. Default: `10`.
- `-V, --version`: Output the version number.
- `-h, --help`: Display help for command.

### Examples

Get top 10 trending repositories from the last week:
```bash
trending-repos
```

Get top 20 trending repositories from the last month:
```bash
trending-repos --duration month --limit 20
```

Get top 5 trending repositories from the last 24 hours:
```bash
trending-repos --duration day --limit 5
```

## How it works

Since GitHub does not provide a direct public API for "trending" repositories, this tool approximates trending data by searching for repositories created within the specified duration and sorting them by star count.

## Project URL

[https://roadmap.sh/projects/github-trending-cli](https://roadmap.sh/projects/github-trending-cli)
