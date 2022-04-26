// 这里面没有任何实际代码，只有类型声明
// 只有类型 - 比如 interface， function或者class等

// declare function axios(url: string): string 
interface IAxios {
  get: (url: string) => string
  post: (url: string, data: any) => any
}

declare const axios: IAxios