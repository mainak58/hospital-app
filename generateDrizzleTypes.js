const { execSync } = require("child_process");

// Run the Drizzle CLI or command to generate the types
execSync("npx drizzle generate", { stdio: "inherit" });
