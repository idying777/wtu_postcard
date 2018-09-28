const ctx = wx.createCanvasContext('myCanvas')
Page({
  data: {
    wid: 0,
    heig: 0,
    index: 5,
    imageUrl: '/pages/img/11.jpg'
  },
  onLoad: function (options) {
    this.setData({
      name: 'xxxxx班     刘洋',

    })
  },
  onReady: function () {
    var _this = this
    wx.getSystemInfo({
      success: function (res) {
        console.log(res.windowWidth)
        console.log(res.windowHeight)
        _this.setData({
          wid: res.windowWidth,
          heig: res.windowHeight,
        })
        ctx.drawImage("/pages/img/13.jpg", 0, 0, res.windowWidth, 0.9 * res.windowHeight)
        ctx.drawImage("/pages/img/15.jpg", 0.085 * res.windowWidth, 0.04 * res.windowHeight, 0.83 * res.windowWidth, 0.25 * res.windowHeight)
        //设置线条宽度  
        ctx.lineWidth = "1";
        //起始一条路径，或重置当前路径  
        ctx.beginPath();
        //设置画笔颜色  
        ctx.strokeStyle = "#FF0000";
        //把路径移动到画布中的指定点，不创建线条  
        ctx.moveTo(0.085 * res.windowWidth, 0.30 * res.windowHeight);
        //添加一个新点，然后在画布中创建从该点到最后指定点的线条  
        ctx.lineTo(0.91 * res.windowWidth, 0.30* res.windowHeight);
        ctx.moveTo(0.085 * res.windowWidth, 0.61* res.windowHeight);
        ctx.lineTo(0.91 * res.windowWidth, 0.61* res.windowHeight);
        ctx.moveTo(0.085 * res.windowWidth, 0.70* res.windowHeight);
        ctx.lineTo(0.91 * res.windowWidth, 0.70* res.windowHeight);
        ctx.moveTo(0.085 * res.windowWidth, 0.79 * res.windowHeight);
        ctx.lineTo(0.91 * res.windowWidth, 0.79* res.windowHeight);
        //创建从当前点回到起始点的路径  
        ctx.closePath();
        //绘制已定义的路径    
        ctx.stroke();
        ctx.drawImage("/pages/img/13.png", 0.085 * res.windowWidth, 0.32 * res.windowHeight, 0.5 * res.windowWidth, 0.14 * res.windowHeight)
        ctx.setStrokeStyle("#000000")
        ctx.rect(0.70 * res.windowWidth, 0.32 * res.windowHeight, 0.17 * res.windowWidth, 0.14 * res.windowHeight)
        ctx.setFontSize(18)
        ctx.fillText('头像', 0.73 * res.windowWidth, 0.39 * res.windowHeight)
        ctx.stroke()
        ctx.setFontSize(14)
        ctx.fillText('纺大我想对你说：', 0.1 * res.windowWidth, 0.51 * res.windowHeight)
        ctx.fillText(_this.data.name, 0.6 * res.windowWidth, 0.85 * res.windowHeight)
        ctx.draw(true);
      }
    })
  },
  chooseImageFun() { //选择图片
    var _this = this
    wx.chooseImage({
      success: function (res) {
        console.log(res)
        console.log(_this.data.wid)

        _this.setData({
          imageUrl: res.tempFilePaths[0],
        })
        console.log(_this.data.name + 'zsy')
        ctx.draw()
        ctx.drawImage("/pages/img/13.jpg", 0, 0, _this.data.wid, 0.9 * _this.data.heig)
        ctx.drawImage("/pages/img/15.jpg", 0.085 * _this.data.wid, 0.04 * _this.data.heig, 0.83 * _this.data.wid, 0.25 * _this.data.heig)
        ctx.lineWidth = "1";
        ctx.beginPath();
        ctx.strokeStyle = "#000000";
        ctx.moveTo(0.085 * _this.data.wid, 0.30 * _this.data.heig);
        ctx.lineTo(0.91 * _this.data.wid, 0.30 * _this.data.heig);
        ctx.moveTo(0.085 * _this.data.wid, 0.61 * _this.data.heig);
        ctx.lineTo(0.91 * _this.data.wid, 0.61 * _this.data.heig);
        ctx.moveTo(0.085 * _this.data.wid, 0.70 * _this.data.heig);
        ctx.lineTo(0.91 * _this.data.wid, 0.70 * _this.data.heig);
        ctx.moveTo(0.085 * _this.data.wid, 0.79 * _this.data.heig);
        ctx.lineTo(0.91 * _this.data.wid, 0.79 * _this.data.heig);
        ctx.closePath();
        ctx.stroke();
        ctx.drawImage("/pages/img/13.png", 0.085 * _this.data.wid, 0.32 * _this.data.heig, 0.5 * _this.data.wid, 0.14 * _this.data.heig)
        ctx.rect(0.6 * _this.data.wid, 0.32 * _this.data.heig, 0.235 * _this.data.wid, 0.14 * _this.data.heig)//边框
        ctx.fillText(_this.data.name, 0.6 * _this.data.wid, 0.85* _this.data.heig)
        ctx.setFontSize(14)
        ctx.fillText('纺大我想对你说：', 0.1 * _this.data.wid, 0.51 * _this.data.heig)
        ctx.drawImage(res.tempFilePaths[0], 0.66 * _this.data.wid, 0.32 * _this.data.heig, 0.22 * _this.data.wid, 0.14 * _this.data.heig)
        ctx.draw()
      }
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
  Okgenerate() { //生成图片方法
    console.log('s')
    wx.canvasToTempFilePath({ //生成图片
      x: 0,
      y: 0,
      width: this.data.wid,
      height: this.data.heig,
      destWidth: 4 * this.data.wid,
      destHeight: 4 * this.data.heig,
      quality: 1,
      canvasId: 'myCanvas',
      success: function (res) {
        wx.saveImageToPhotosAlbum({ //保存生成的图片到手机相册里
          filePath: res.tempFilePath,
          success(res) {
            app.showToasts('保存成功')
            _this.setData({
              showst: true
            })
          }
        })
      }
    })
  }
})