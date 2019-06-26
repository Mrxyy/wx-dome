// pages/list/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
			info:[],
			_limit:10,
			_page:0,
			_id:1,
			count:-1
  },
	loadMore(){
		console.log((this.data._page)*this.data._limit,this.data.count)
		if ((this.data._page)*this.data._limit > Math.abs(this.data.count)){
			return wx.showModal({
				title:"没有了"
			})
		}
		wx.showLoading({
			title: '加载中',
			mask:true,
			success:function(){
				console.log('成功loading')
			}
		})
		wx.request({
			url:'https://locally.uieee.com/categories/'+this._id+'/shops',
			data:{
				_limit:this.data._limit,
				_page:++this.data._page
			},
			success:(res)=>{
				console.log(res,this.data,this.info)
				// this.info = res.data
				this.setData({
					info:this.data.info.concat(res.data),
					count:res.header['X-Total-Count']
				})
				wx.hideLoading()
/*需要在app.json的window选项中或页面配置中开启enablePullDownRefresh。
可以通过wx.startPullDownRefresh触发下拉刷新，调用后触发下拉刷新动画，效果与用户手动下拉刷新一致。
当处理完数据刷新后，wx.stopPullDownRefresh可以停止当前页面的下拉刷新。*/
				wx.stopPullDownRefresh()
			}
		})
	},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
		console.log(options)
		this._id = options.id
		this.loadMore()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
		const appInstance = getApp()
		console.log(appInstance.data.a) 
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
			// console.log('下拉')
				this.setData(
					{
							info:[],
							_limit:10,
							_page:0,
							_id:1,
							count:-1
					}
				)
			this.loadMore()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
			this.loadMore()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})