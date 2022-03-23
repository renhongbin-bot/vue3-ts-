// 定义一个number类型的数组
let arrOfNumbers: number[] = [1,2,3,4]

arrOfNumbers.unshift(20)

function test() {
  console.log(arguments)
  // let arr:any[] = arguments 数组和类数组不是一样的类型，不能进行赋值
}

// 定义一个元组类型(联合类型)
let user:[string, number] = ['bitle', 13]
user.push('123')