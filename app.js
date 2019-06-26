App({
	data:{
		a:'五五开'
	},
  onLaunch(options) {
		// 小程序初始化完成时触发，全局只触发一次
    // Do something initial when launch.
		console.log(options)
  },
  onShow(options) {
		// 小程序从前台进入后台时触发
		// 小程序启动，或从后台进入前台显示时触发
    // Do something when show.
		console.log(options)
  },
  onHide() {
		// onHide()
    // Do something when hide.
  },
  onError(msg) {
		// 小程序发生脚本错误或 API 调用报错时触发。也可以使用 wx.onError 绑定监听。
    console.log(msg)
  },
  globalData: 'I am global data'
})