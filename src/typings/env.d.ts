declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production";
      PORT?: string;
      PROXY_URL: string;
      SECRET_KEY: string;
    }
  }
}

export {};
