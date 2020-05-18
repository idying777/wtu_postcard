var ctx = wx.createCanvasContext('myCanvas');
var app = getApp();
var ius = app.globalData.ius;
// var ius=app.globalData.ius;

Page({
  data: {
    wid: 0,
    heig: 0,
    index: 5,
    flag: 1,
    usercontent1: '',
    usercontent2: '',
    usercontent3: '',
    usercontent4: '',
    usercontent5: '',
    jy: false,
    
    // name:'    计算机11602班   丁一',
    isIphoneX: false,
    fontsize: '',
    save: false,
    uploading:true,
    hello:0,
  },
  onLoad: function (options) {
    let _this = this
    wx.getSystemInfo({
      success: function (res) {
        //console.log(res.model)
        //console.log(res.language)//zh_CN(en)
        //console.log(res.model=="iPhone X")
        if (res.model == "iPhone X") {
          // ctx = wx.createCanvasContext('X');
          console.log('is iphonex')
          _this.setData({
            isIphoneX: true,
            fontsize: '17'
          })
        }
        else if (res.screenHeight <= 568) {
          _this.setData({
            fontsize: '15'
          })
        }
        else if (res.screenHeight > 568 && res.screenHeight <= 670) {
          _this.setData({
            fontsize: '17'
          })
        }
        else if (res.screenHeight > 670 && res.screenHeight <= 740) {
          _this.setData({
            fontsize: '19'
          })
        }
        else {
          _this.setData({
            fontsize: '18'
          })
        }
      }
    })
  },
  usercontentinput1: function (e) {
    this.setData({
      usercontent1: e.detail.value,
      

    })
  },
  usercontentinput2: function (e) {
    this.setData({
      usercontent2: e.detail.value,
     
    })
  },
  usercontentinput3: function (e) {
    this.setData({
      usercontent3: e.detail.value,
      
    })
  },
  usercontentinput4: function (e) {
    this.setData({
      usercontent4: e.detail.value,
      
    })
  },
  usercontentinput5: function (e) {
    this.setData({
      usercontent5: e.detail.value,
     
    })
  },
  onReady: function () {
    this.setData({
      jy: false,
    })
    var _this = this
    var value = wx.getStorageSync('index')
    wx.downloadFile({
      url: `${ius[value]}`,
      success:function(sres){

      }
    })
    try {
      var value = wx.getStorageSync('index')
      var namevalue = wx.getStorageSync('namevalue')
      var classvalue = wx.getStorageSync('classvalue')
      console.log(value)
      console.log(namevalue)
      console.log(classvalue)
      wx.getSystemInfo({
        success: function (res) {
          // console.log(res.windowWidth)
          // console.log(res.windowHeight)
          // console.log(res.screenHeight)
          // console.log(res.screenWidth)

          // if(res.model=="iPhone X"){
          //   _this.setData({
          //     isIphoneX
          //   })
          // }
          _this.setData({
            wid: res.windowWidth,
            heig: res.windowHeight,

          })

          ctx.drawImage("/pages/img/13.jpg", 0, 0, res.windowWidth, 0.9 * res.windowHeight)
          ctx.drawImage(`${ius[value]}`, 0.085 * res.windowWidth, 0.04 * res.windowHeight, 0.83 * res.windowWidth, 0.25 * res.windowHeight)
          //设置线条宽度  
          ctx.lineWidth = "1";
          //起始一条路径，或重置当前路径  
          ctx.beginPath();
          //设置画笔颜色  
          ctx.strokeStyle = "#FF0000";
          //最上面的一条线
          //把路径移动到画布中的指定点，不创建线条  
          ctx.moveTo(0.085 * res.windowWidth, 0.30 * res.windowHeight);
          //添加一个新点，然后在画布中创建从该点到最后指定点的线条  
          ctx.lineTo(0.91 * res.windowWidth, 0.30 * res.windowHeight);
          //下面第一条线
          ctx.moveTo(0.085 * res.windowWidth, 0.57 * res.windowHeight);
          ctx.lineTo(0.91 * res.windowWidth, 0.57 * res.windowHeight);
          //two
          ctx.moveTo(0.085 * res.windowWidth, 0.63 * res.windowHeight);
          ctx.lineTo(0.91 * res.windowWidth, 0.63 * res.windowHeight);
          //three
          ctx.moveTo(0.085 * res.windowWidth, 0.69 * res.windowHeight);
          ctx.lineTo(0.91 * res.windowWidth, 0.69 * res.windowHeight);
          //four
          ctx.moveTo(0.085 * res.windowWidth, 0.75 * res.windowHeight);
          ctx.lineTo(0.91 * res.windowWidth, 0.75 * res.windowHeight);
          //five
          ctx.moveTo(0.085 * res.windowWidth, 0.81 * res.windowHeight);
          ctx.lineTo(0.91 * res.windowWidth, 0.81 * res.windowHeight);
          //创建从当前点回到起始点的路径  
          ctx.closePath();
          //绘制已定义的路径    
          ctx.stroke();
          ctx.drawImage("/pages/img/13.png", 0.07 * res.windowWidth, 0.32 * res.windowHeight, 0.65 * res.windowWidth, 0.14 * res.windowHeight)
          // ctx.drawImage("/pages/img/16.png", 0.07 * res.windowWidth, 0.58 * res.windowHeight, 0.16 * res.windowWidth, 0.25 * res.windowHeight)
          ctx.setStrokeStyle("#000000")
          ctx.rect(0.70 * res.windowWidth, 0.32 * res.windowHeight, 0.17 * res.windowWidth, 0.14 * res.windowHeight)
          ctx.setFontSize(18)
          ctx.fillText('头像', 0.73 * res.windowWidth, 0.39 * res.windowHeight)
          ctx.stroke()
          ctx.setFontSize(14)
          ctx.fillText('纺大我想对你说：', 0.1 * res.windowWidth, 0.51 * res.windowHeight)
          ctx.draw();
          ctx.setFontSize(16)
          ctx.fillText(classvalue, 0.45 * res.windowWidth, 0.85 * res.windowHeight)
          ctx.fillText(namevalue, 0.75 * res.windowWidth, 0.85 * res.windowHeight)
          ctx.draw(true);
        }
      })
    } catch (e) {
    }

  },
  chooseImageFun() { //选择图片
    var _this = this
    var value1 = _this.data.usercontent1;
    var len1 = parseInt(value1.length);
    var value2 = _this.data.usercontent2;
    var len2 = parseInt(value2.length);
    var value3 = _this.data.usercontent3;
    var len3 = parseInt(value3.length);
    var value4 = _this.data.usercontent4;
    var len4 = parseInt(value4.length);
    var value5 = _this.data.usercontent5;
    var len5 = parseInt(value5.length);
   
    if (len1 == 0 && len2 == 0 && len3 == 0 && len4 == 0 && len5 == 0) {
      wx.showModal({
        title: '提示',
        content: '请先说出你的心里话吧',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
          else if (res.cancel) { console.log('用户点击取消') }
        }
      })
      return;
    }
    wx.chooseImage({
      success: function (res) {
        wx.getSystemInfo({
          success: function (res1) {
            _this.setData({
              flag: 2,
              jy: true,
              uploading:false,
              
            })
            // console.log(res)
            console.log(res1.windowWidth)
            console.log(res1.windowHeight)

            //  _this.setData({
            //    imageUrl: res.tempFilePaths,
            //  })
            // console.log(_this.data.name + 'zsy')

            var value = wx.getStorageSync('index')
            var namevalue = wx.getStorageSync('namevalue')
            var classvalue = wx.getStorageSync('classvalue')

            ctx.drawImage("/pages/img/13.jpg", 0, 0, _this.data.wid, 0.9 * _this.data.heig)
            ctx.drawImage(ius[value], 0.085 * _this.data.wid, 0.04 * _this.data.heig, 0.83 * _this.data.wid, 0.25 * _this.data.heig)
            ctx.lineWidth = "1";
            ctx.beginPath();
            ctx.strokeStyle = "#FF0000";
            ctx.moveTo(0.085 * _this.data.wid, 0.30 * _this.data.heig);
            ctx.lineTo(0.91 * _this.data.wid, 0.30 * _this.data.heig);
            ctx.moveTo(0.085 * res1.windowWidth, 0.57 * res1.windowHeight);
            ctx.lineTo(0.91 * res1.windowWidth, 0.57 * res1.windowHeight);
            //two
            ctx.moveTo(0.085 * res1.windowWidth, 0.63 * res1.windowHeight);
            ctx.lineTo(0.91 * res1.windowWidth, 0.63 * res1.windowHeight);
            //three
            ctx.moveTo(0.085 * res1.windowWidth, 0.69 * res1.windowHeight);
            ctx.lineTo(0.91 * res1.windowWidth, 0.69 * res1.windowHeight);
            //four
            ctx.moveTo(0.085 * res1.windowWidth, 0.75 * res1.windowHeight);
            ctx.lineTo(0.91 * res1.windowWidth, 0.75 * res1.windowHeight);
            //five
            ctx.moveTo(0.085 * res1.windowWidth, 0.81 * res1.windowHeight);
            ctx.lineTo(0.91 * res1.windowWidth, 0.81 * res1.windowHeight);
            ctx.closePath();
            ctx.stroke();
            ctx.drawImage("/pages/img/13.png", 0.07 * res1.windowWidth, 0.32 * res1.windowHeight, 0.65 * res1.windowWidth, 0.14 * res1.windowHeight)
            // ctx.drawImage("/pages/img/16.png", 0.07 * res1.windowWidth, 0.58 * res1.windowHeight, 0.16 * res1.windowWidth, 0.25 * res1.windowHeight)
            ctx.setStrokeStyle("#000000")
            // ctx.rect(0.6 * _this.data.wid, 0.32 * _this.data.heig, 0.235 * _this.data.wid, 0.14 * _this.data.heig)//边框
            ctx.stroke()
            ctx.setFontSize(14)
            ctx.fillText('纺大我想对你说：', 0.1 * _this.data.wid, 0.51 * _this.data.heig)
            ctx.setFontSize(`${_this.data.fontsize}`)
            ctx.fillStyle = 'red'
            ctx.fillText(`${_this.data.usercontent1}`, 0.082 * res1.windowWidth, 0.56 * res1.windowHeight)
            ctx.fillStyle = 'rgba(255, 217, 0, 0.466)'
            ctx.fillText(`${_this.data.usercontent2}`, 0.082 * res1.windowWidth, 0.62 * res1.windowHeight)
            ctx.fillStyle = 'rgb(145, 255, 0)'
            ctx.fillText(`${_this.data.usercontent3}`, 0.082 * res1.windowWidth, 0.68 * res1.windowHeight)
            ctx.fillStyle = 'rgb(0, 238, 255)'
            ctx.fillText(`${_this.data.usercontent4}`, 0.082 * res1.windowWidth, 0.741 * res1.windowHeight)
            ctx.fillStyle = 'rgb(255, 0, 149)'
            ctx.fillText(`${_this.data.usercontent5}`, 0.082 * res1.windowWidth, 0.8 * res1.windowHeight)
            ctx.setFontSize(16)
            ctx.fillStyle = 'rgb(56, 53, 55)'
            ctx.setFontSize(15)
            ctx.fillText(classvalue, 0.45 * res1.windowWidth, 0.85 * res1.windowHeight)
            ctx.fillText(namevalue, 0.75 * res1.windowWidth, 0.85 * res1.windowHeight)
            ctx.drawImage(res.tempFilePaths[0], 0.7 * _this.data.wid, 0.32 * _this.data.heig, 0.2 * _this.data.wid, 0.14 * _this.data.heig)
            ctx.draw();
            _this.setData({
              input: ''
            })



          }
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {


  },
  Okgenerate() { //生成图片方法
    var _this = this

    if (_this.data.flag == 1) {
      wx.showModal({
        title: '提示',
        content: '请选择一个属于你的头像哦',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
          else if (res.cancel) { console.log('用户点击取消') }
        }
      })
      return;
    }
    console.log('s')
    wx.canvasToTempFilePath({ //生成图片

      canvasId: 'myCanvas',
      success: function (res) {
        _this.setData({
          save: true,
          showLoading: true
        })

        // wx.showLoading({
        //   title:'正在保存...',
        //   mask:true
        // }),
        wx.saveImageToPhotosAlbum({ //保存生成的图片到手机相册里
          filePath: res.tempFilePath,

          success: function (res) {


            // wx.hideLoading();
            _this.setData({
              hello:1,
              input: '',
              showLoading: false,

            })
            // wx.showToast({
            //   title: '图片保存成功',
            //   duration: 2000,
            // })
            wx.navigateTo({
              url: '/pages/index/index?successid=' + _this.data.hello,
              success: function () {

              }
            })


          },
          fail: function (res) {
            console.log(res)
            if (res.errMsg === "saveImageToPhotosAlbum:fail auth deny") {
              console.log("打开设置窗口");
              wx.openSetting({
                success(settingdata) {
                  console.log(settingdata)
                  if (settingdata.authSetting["scope.writePhotosAlbum"]) {
                    console.log("获取权限成功，再次点击图片保存到相册")
                  } else {
                    console.log("获取权限失败")
                  }
                }
              })
            }
          }
        })
      }
    })
  }
})