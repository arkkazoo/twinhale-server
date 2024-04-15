// biome-ignore lint/style/noNamespace: <explanation>
declare namespace NodeJS {
  interface ProcessEnv {
    readonly DB_PORT: number
  }
}
