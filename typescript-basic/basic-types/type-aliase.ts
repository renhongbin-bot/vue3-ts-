// 类型别名
let sum:(x:number, y:number) => number
const result3 = sum(1,2)

type PlusType = (x:number, y:number) => number
let sum2:PlusType
const result4 = sum2(2,4)

type StrOrNumber = string | number
let result5: StrOrNumber = '123'
result5 = 123

// 字面量类型
const str2:'name' = 'name'
const num: 1 = 1
type Directions = 'Up' | 'Down' | 'Left' | 'Right'
let toWhere: Directions = 'Down'

// 交叉类型
interface IName {
  name: string
}
type IPerson = IName & {age: number}
let person:IPerson = {name:'123', age: 12}