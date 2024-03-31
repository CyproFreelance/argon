import million from "million/compiler";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const millionConfig = {
  auto: {
    threshold: 0.05, // default: 0.1,
    skip: ["useBadHook", /badVariable/g], // default []
  },
};

export default million.next(nextConfig);
