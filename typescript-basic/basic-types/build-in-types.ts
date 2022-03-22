// typescript内置对象
const a: Array<number> = [1,2,3,4]

const date = new Date()
date.getTime()

const reg = /abc/
reg.test('abc')
// build-in Object
Math.pow(2, 2)

// DOM and BOM
let body = document.body
let allLis = document.querySelectorAll('li')
allLis.keys()

document.addEventListener('click', (e) => {
  e.preventDefault()
})

// Utility Types
interface Iperson {
  name: string,
  age: number
}
let bitle: Iperson = {
  name: 'bitle',
  age: 22
}
// 可选
type IPartial = Partial<IPerson>
let bitle2: IPartial = {
  name: 'bitle'
}
// 忽略属性
type IOmit = Omit<Iperson, 'name'>
let bitle3:IOmit = {
  age: 22
}