// 泛型在定义的函数接口或者类的时候时候不指定具体类型，而是在使用的时候再指定类型的一种特征
function echo<T>(arg: T): T {
  return arg
}


const result = echo(true)

function swap<T, U>(tuple:[T, U]):[U, T] {
  return [tuple[1], tuple[0]]
}

const result1 = swap(['string', 123])


function echoWithArr<T>(arg: T[]): T[] {
  console.log(arg.length)
  return arg
}

const arrs = echoWithArr([1,2,3])

interface IWithLength{
  length: number
}
// 泛型约束
function echoWithLength<T extends IWithLength>(arg:T):T {
  console.log(arg.length)
  return arg
}

const stra = echoWithLength('stra')

const obj = echoWithLength({
  length: 10
})

const arr2 = echoWithLength([1,2,3])

// 泛型在类中的使用
class Queue<T> {
  private data = []
  push(item: T) {
    return this.data.push(item)
  }
  pop():T {
    return this.data.shift()
  }
}

const queue = new Queue<number>()
queue.push(1)
console.log(queue.pop().toFixed())
console.log(queue.pop().toFixed())

// 泛型在接口中的使用
interface IKeyPair<T, U> {
  key: T
  value: U
}

let kp1: IKeyPair<number, string> = {
  key:1,
  value: '123'
}

let kp2: IKeyPair<string, number> = {
  key: 'a',
  value: 123
}

let arr:number[] = [123, 134]

let arrTwo: Array<number> = [123]
