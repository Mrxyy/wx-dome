//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
		banner_info:[],
		categories:[]
  },
  onLoad(){
		wx.request({
			url:"https://locally.uieee.com/slides",
			method:'GET',
			success:(res)=>{
				// console.log(this)
				this.setData({
						banner_info: res.data
					})
				// this.setDate({banner_info:res.data})
				// this.banner_info = res.data
			},
			fail(error){
				console.log(error)
			},
			complete(){
				console.log('成功')
			}
		})
	  wx.request({
	  	url:"https://locally.uieee.com/categories",
	  	method:'GET',
	  	success:(res)=>{
	  		// console.log(this)
	  		this.setData({
	  				categories: res.data
	  			})
	  		// this.setDate({banner_info:res.data})
	  		// this.banner_info = res.data
	  	},
	  	fail(error){
	  		console.log(error)
	  	},
	  	complete(){
	  		console.log('成功')
	  	}
	  })
	}
})
