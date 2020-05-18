//index.js
//获取应用实例
import { $wuxToptips } from '../../dist/index'
const app = getApp()

Page({
  data: {
    desc: { image: '/pages/img/9.png', text: '武汉纺织大学60周年校庆' },
    ius: [
      "/pages/img/2.jpg",
      '/pages/img/3.jpg',
      '/pages/img/4.jpg',
      '/pages/img/dh.jpg',
      '/pages/img/xc.jpg',

    ],
    ap: true,
    index: 0,
    namecontent: '',
    classcontent: '',

  },
  nav: function () {
    wx.navigateTo({
      url: '../paint/paint',
    })
  },
  onReady: function () {
    setTimeout(this.animation, 1000)
  },
  comfirmpic: function () {
    this.setData({
      ap: !this.data.ap,
    })

  },
  inputname: function (e) {
    this.setData({
      namecontent: e.detail.value
    })
    wx.setStorageSync('namevalue', e.detail.value)
    // console.log(e.detail.value)
  },
  inputclass: function (e) {
    this.setData({
      classcontent: e.detail.value
    })
    wx.setStorageSync('classvalue', e.detail.value)
    // console.log(e.detail.value)
  },
  swiperChange: function (e) {
    this.setData({
      index: e.detail.current
    })
    // console.log(e.detail.current)
    try {
      wx.setStorageSync('index', e.detail.current)
    } catch (e) {

    }
    // console.log(e.detail.current)
  },
  animation: function () {
    this.animation1 = wx.createAnimation({
      duration: 500,
      delay: 200,
      timingFunction: 'linear',
      transformOrigin: '50% 50% 0%',
      success: function (res) {
        console.log(res)
      }
    }),
      this.animation1.rotateY(90).step().opacity(0).step({ ducation: 8000 })
    this.setData({
      animation1: this.animation1.export()
    }),
      this.animation2 = wx.createAnimation({
        duration: 500,
        delay: 200,
        timingFunction: 'linear',
        transformOrigin: '50% 50% 0%',
        success: function (res) {
          console.log(res)
        }
      }),
      this.animation2.rotateY(90).step().opacity(0).step({ ducation: 8000 })
    this.setData({
      animation2: this.animation2.export()
    })
    this.animation3 = wx.createAnimation({
      duration: 1000,
      //  delay:400,
      timingFunction: 'linear',
      transformOrigin: ' 50% 50% 0',
      success: function (res) {
        console.log(res)
      }
    }),
      this.animation3.rotateY(180).step().opacity(1).rotateY(360).step({ ducation: 8000 })
    this.setData({
      animation3: this.animation3.export()
    })

  },
  onShow: function () {

  },
  onLoad: function (options) {

    if (options.successid == 1) {
      $wuxToptips().success({
        hidden: false,
        text: '名片保存成功！',
        duration: 3000,
        success() { },
      })
    }
  },

  bindabove: function () {
    console.log("z")
  },
  bindbelow: function () {
    console.log("x")
  }

})
