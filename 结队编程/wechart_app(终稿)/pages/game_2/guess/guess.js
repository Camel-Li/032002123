// pages/guess/guess.js
var dice = 0;

Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        dice = Math.floor(Math.random() * 6 + 1);
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    },

    jmp: function (e) {
        let num = e.currentTarget.dataset.a;
        if (num == dice % 2) {
            wx.redirectTo({
                url: '/pages/game_2/guesstrue/guesstrue?dice=' + dice,
            })
        } else {
            wx.redirectTo({
                url: '/pages/game_2/guessfalse/guessfalse?dice=' + dice,
            })
        }
    }
})