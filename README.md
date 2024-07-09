Example of how to use Vercel's deployment APIs to determine whether the loaded next.js application is running the latest code on production.

## How to use

Set `VERCEL_TOKEN` to a Vercel API Access Token scoped to your project.

Update the `teamId`, `projectId`, and `productionBranchUrl` constants in `pages/api/index.tsx` to match your team and project's information.

The UI for this application simply renders the results of the API call, and the currently loaded version (exposed as an environment variable in `next.config.js`). You can extend this to poll the version API and display a message to the user if they are not running the latest version.
