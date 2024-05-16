# Joppa DB

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

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
- [ ] update pnpm version so CI passes again
- [ ] create classes page
- [ ] create individual class page (this page shows all class abilities)
- [ ] add DB schema for classes and class abilities
- [ ] add weapon creation form (only when logged in)
- [ ] Implement weapon edit flow (only when logged in)
- [ ] set up error handling (sentry)
- [ ] routing/weapons page
- [ ] analytics (posthog)
- [ ] ratelimiting (upstash)
