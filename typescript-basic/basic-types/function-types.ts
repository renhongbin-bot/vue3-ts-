function add(x:number, y: number, z?: number) :number {
  if(typeof z === 'number') {
    return x + y + z
  } else {
    return x + y
  }
}


// interface描述函数类型
interface ISum {
  (x:number, y:number, z?: number): number
}
// 把add赋值给add2
let add2: ISum = add