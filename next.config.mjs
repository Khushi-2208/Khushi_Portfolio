import fs from 'fs';
import path from 'path';

// Automatically copy the generated profile picture to the public folder on startup
const srcImage = "C:/Users/rishi/.gemini/antigravity-ide/brain/a0df3fc2-6082-453b-8953-3d9468ea69cc/profile_portrait_1783091535536.png";
const destDir = "d:/day3/Khushi/public";
const destImage = path.join(destDir, "avatar.png");

try {
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }
  if (fs.existsSync(srcImage)) {
    fs.copyFileSync(srcImage, destImage);
    console.log("Successfully copied profile portrait to public/avatar.png");
  }
} catch (err) {
  console.warn("Auto-copy profile portrait failed:", err.message);
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

export default nextConfig;
