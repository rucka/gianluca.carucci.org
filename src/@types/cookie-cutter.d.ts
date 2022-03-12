//https://github.com/substack/cookie-cutter/blob/master/index.js
declare module 'cookie-cutter' {
  type Options = {
    expires?: Date
    path?: string
    domain?: string
    secure?: boolean
  }
  function get(key: string): string
  function set(key: string, value: string, opts?: Options): void

  export type CookieCutter = {
    get: get
    set: set
  }

  export = (document: Document) => CookieCutter
}
