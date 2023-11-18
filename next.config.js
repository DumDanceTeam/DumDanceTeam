/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "scontent.ftsr1-2.fna.fbcdn.net",
        port: "",
        pathname: "/*/*/*",
      },
      {
        protocol: "https",
        hostname: "scontent.farw1-1.fna.fbcdn.net",
        port: "",
        pathname: "/*/*/*",
      },
      {
        protocol: "https",
        hostname: "scontent.fomr1-1.fna.fbcdn.net",
        port: "",
        pathname: "/*/*/*",
      },
      {
        protocol: "https",
        hostname: "**",
        port: "",
      },
      {
        protocol: "https",
        hostname: "*",
        port: "",
        pathname: "/*/*/*",
      },
      {
        protocol: "https",
        hostname: "scontent.ftsr1-1.fna.fbcdn.net",
        port: "",
        pathname: "/*/*/*",
      },
      {
        protocol: "https",
        hostname:"external-otp1-1.xx.fbcdn.net",
        port: "",
        pathname: "/*/*/*",
      },
      {
        protocol: "https",
        hostname: "utfs.io",
        port: "",
        pathname: "/*/*",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/*/*/*/*/*",
      },
      {
        // Allow any image URL that starts with "https://scontent"
        protocol: "https",
        hostname: "scontent-*",
        port: "",
        pathname: "/*/*/*",
      },
    ],
  },
};

module.exports = nextConfig;
