declare namespace NodeJS {
  export type ProcessEnv = {
    PORT: number;
    DB_URL: string;
    NODE_ENV: string;
  };
}
