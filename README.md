# Joppa DB

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

## Getting Started

### Installing up Window Subsystem for Linux (Windows only)

This step is only necessary if running this projects on Windows 10/11.

Currently, we are using Windows for Subsystem for Linux (WSL) version 2 to run this project on Windows 11. The distribution of linux that we are using is `Ubuntu 22.04.3 LTS`.

You can find documentation about installing and setting up WSL on the [Install WSL](https://learn.microsoft.com/en-us/windows/wsl/install) page.

### Running VSCode in WSL Mode (Windows only)

This step is only necessary for running the project using WSL.

You can find instructions for running VSCode in WSL mode [here](https://code.visualstudio.com/docs/remote/wsl#_open-a-remote-folder-or-workspace).

### Installing `asdf`

Follow the instructions on the `asdf` [Getting Started](https://asdf-vm.com/guide/getting-started.html) page to install `asdf`.

### Installing Node.js and `pnpm` Using `asdf`

Once you've installed `asdf`, run the following commands to install both Node.js and `pnpm`:

```sh
asdf plugin add nodejs https://github.com/asdf-vm/asdf-nodejs.git
asdf plugin-add pnpm

asdf install
```

### Install Node.js Dependencies

Once you have `pnpm` installed, you can use it to install the project dependencies by running the following command:

```sh
pnpm install
```

### Setting up Your Local .env File

From the root of the project, run the following command to create your initial `.env` file.

```sh
cp .env.example .env
```

This will create a `.env` file that you will NEVER check into version control. This file will only exist on your computer.

## What's next? How do I make an app with this?

We try to keep this project as simple as possible, so you can start with just the scaffolding we set up for you, and add additional things later when they become necessary.

If you are not familiar with the different technologies used in this project, please refer to the respective docs. If you still are in the wind, please join our [Discord](https://t3.gg/discord) and ask for help.

- [Next.js](https://nextjs.org)
- [Clerk](https://clerk.com)
- [Drizzle](https://orm.drizzle.team)
- [Tailwind CSS](https://tailwindcss.com)

## Learn More

To learn more about the [T3 Stack](https://create.t3.gg/), take a look at the following resources:

- [Documentation](https://create.t3.gg/)
- [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available) — Check out these awesome tutorials

You can check out the [create-t3-app GitHub repository](https://github.com/t3-oss/create-t3-app) — your feedback and contributions are welcome!

## How do I deploy this?

Follow our deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel), [Netlify](https://create.t3.gg/en/deployment/netlify) and [Docker](https://create.t3.gg/en/deployment/docker) for more information.

## Todo

- [x] Make it deploy (vercel)
- [x] Scaffold basic UI with mock data
- [x] Set up a database (vercel postgres)
- [x] Attach database to UI
- [x] add authentication (clerk)
- [x] Setup shadui and fix up nav menu
- [x] Create weapon list page w/ shadui Data Table
- [x] Display damage as one table field on Weapon table
- [x] Use Zod for the Weapon Data Table schema (this will also be used for the weapon creation form)
- [x] add sorting by Name and Weapon Type on Weapon Data Table
- [x] fix weapon DB schema to use a single damage field
- [x] remove sorting of weapons by name
- [x] add delay field back into weapon data table and add sorting for it
- [x] add sorting by DPS on Weapon Data Table
- [x] line up column data with the header text in the Weapon Data Table
- [x] update pnpm version so CI passes again
- [x] create initial classes page connected to db
- [x] create initial individual class page connected to db
- [x] add initial DB schema for classes and class abilities
- [x] add class display cards to classes page
- [x] implement class dropdown navigation menu
- [x] get navigation menu working properly for small mobile devices
- [ ] add class abilities to class page
- [ ] add weapon creation form (only when logged in)
- [ ] Implement weapon edit flow (only when logged in)
- [ ] set up error handling (sentry)
- [ ] routing/weapons page
- [ ] analytics (posthog)
- [ ] ratelimiting (upstash)
