import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const envPath = path.join(__dirname, ".env");

console.log("=== ENV DEBUG ===");
console.log("ENV File Path:", envPath);
console.log("ENV File Exists:", fs.existsSync(envPath));

if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, "utf-8");
  console.log("\n=== RAW ENV FILE CONTENT ===");
  console.log(envContent);
  console.log("\n=== ENV FILE LINES ===");
  envContent.split("\n").forEach((line, i) => {
    console.log(`Line ${i}: "${line}" (length: ${line.length})`);
  });
}

dotenv.config({ path: envPath });

console.log("\n=== ENVIRONMENT VARIABLES AFTER dotenv.config() ===");
console.log("ZOHO_FROM_EMAIL:", process.env.ZOHO_FROM_EMAIL);
console.log("ZOHO_PASSWORD:", process.env.ZOHO_PASSWORD);
console.log("PORT:", process.env.PORT);

console.log("\n=== ALL PROCESS.ENV ===");
console.log(process.env);
