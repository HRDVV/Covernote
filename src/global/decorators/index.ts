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
