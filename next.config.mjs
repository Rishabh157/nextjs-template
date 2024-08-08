export default {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "images.bewakoof.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "media.licdn.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "v60h5qlq-3005.inc1.devtunnels.ms",
        port: "",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "fm-api.codioticdemo.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "randomuser.me",
        port: "",
      },
      {
        protocol: "https",
        hostname: "www.python.org",
        port: "",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "ca.slack-edge.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "o.remove.bg",
        port: "",
      },
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "v60h5qlq-7000.inc1.devtunnels.ms",
        port: "",
      },
    ],
  },
  async headers() {
    return [
      {
        // Define the URL path or pattern for your images
        source: "/:path*{jpg,jpeg,png,gif,svg,webp,avif}",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400", // Cache for 1 day
          },
        ],
      },
    ];
  },
};
