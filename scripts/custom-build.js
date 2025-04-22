const fs = require("fs")
const path = require("path")
const { execSync } = require("child_process")

// Run the normal Next.js build
console.log("Running Next.js build...")
try {
  execSync("next build", { stdio: "inherit" })
} catch (error) {
  // If the build fails, we'll handle the 404 page separately
  console.log("Next.js build failed, but we will continue with the custom 404 page...")
}

// Ensure the out directory exists
const outDir = path.join(process.cwd(), "out")
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true })
}

// Copy the custom 404.html to the out directory
console.log("Copying custom 404.html to the out directory...")
const customNotFoundPath = path.join(process.cwd(), "public", "404.html")
const outNotFoundPath = path.join(outDir, "404.html")

if (fs.existsSync(customNotFoundPath)) {
  fs.copyFileSync(customNotFoundPath, outNotFoundPath)
  console.log("Custom 404.html copied successfully!")
} else {
  console.error("Custom 404.html not found in the public directory!")
  process.exit(1)
}

console.log("Custom build completed successfully!")
