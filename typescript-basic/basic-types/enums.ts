// 枚举成员会被赋值成从0开始的自动递增的数字,也可以通过索引返回对应枚举的字符串
const enum Direction {
  Up = 'UP',
  Down = 'Down',
  Left = 'LEFT',
  Right = 'RIGHT'
}

const value = 'UP'
if(value === Direction.Up) {
  console.log('go up!')
}

