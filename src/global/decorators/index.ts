// import Taro from '@tarojs/taro'

export function CheckIsLogin(...arg: any[]) {
  let descriptor = arg[2]
  let func = descriptor.value
  descriptor.value = function(): void {
    // @todo  是否登录
    if (true) {
      func.call(this, arguments)
    } else {
      // @todo 没登录时的操作
      console.log('没登录')
    }
  }
}

// export function Compared(...arg: any[]) {
//   let descriptor = arg[2]
//   descriptor.value = function(nextProps, nextState): boolean {
//     let preState = this.state
//     console.log(preState)
//     let flag = false
//     for(let attr in preState) {
//       if (preState[attr] != nextState[attr]) {
//         flag = true
//       }
//     }
//     return true
//   }
// }
