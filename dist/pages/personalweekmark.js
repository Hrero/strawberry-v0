'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wepyComToast = require('./../npm/wepy-com-toast/toast.js');

var _wepyComToast2 = _interopRequireDefault(_wepyComToast);

var _appcommitbtn = require('./../components/appcommitbtn.js');

var _appcommitbtn2 = _interopRequireDefault(_appcommitbtn);

var _test = require('./../mixins/test.js');

var _test2 = _interopRequireDefault(_test);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var weekfraction = function (_wepy$page) {
  _inherits(weekfraction, _wepy$page);

  function weekfraction() {
    var _ref;

    var _temp, _this, _ret;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _classCallCheck(this, weekfraction);

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = weekfraction.__proto__ || Object.getPrototypeOf(weekfraction)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '学分查询'
    }, _this.components = {
      appcommitbtn: _appcommitbtn2.default
    }, _this.mixins = [_test2.default], _this.data = {
      windowWidth: 0,
      count: null,
      //      radius:2*remSize*4, //圆环半径
      lineWidth: 12, //环的宽度
      strokeStyle: '#ffffff', //边的颜色
      lineCap: 'round', //环形状
      startAngle: Math.PI * 0.8, //弧起角度
      percent: 90 * 0.7081, //弧占比例
      itemWidth: '100%',
      color: "red",
      score: 80,
      show: false //true为显示无学分
    }, _this.methods = {
      counterEmit: function counterEmit() {
        wx.navigateTo({
          url: '/pages/weekexamresult'
        });
      },
      goweekmark: function goweekmark() {
        wx.navigateTo({
          url: '/pages/personalweeklabel'
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(weekfraction, [{
    key: 'onLoad',
    value: function onLoad(option) {
      var self = this;

      self.count = option.count || 0;
      self.score = parseInt(option.count * 100) || 1180;

      wx.getSystemInfo({
        success: function success(res) {
          self.windowWidth = res.windowWidth * 0.85;
        }
      });
      var ctx = wx.createCanvasContext('firstCanvas');
      var remSize = 40 * (self.windowWidth / 320);

      //console.log( 2*remSize )
      ctx.beginPath();
      ctx.arc(self.windowWidth / 2, 3.2 * remSize, remSize * 2.75, Math.PI * 0.8, Math.PI * 2.2, false); // 坐标为250的圆，这里起始角度是0，结束角度是Math.PI*2
      ctx.setLineWidth(self.lineWidth);
      ctx.setStrokeStyle(self.strokeStyle);
      ctx.setLineCap(self.lineCap);
      ctx.stroke(); // 这里用stroke画一个空心圆

      //  let tx = wx.createCanvasContext('firstCanvas')
      ctx.moveTo(0, 100);
      var count = 1,
          times = 10; // 分十次绘制蓝弧
      var startAngle = self.startAngle;
      var endAngle = startAngle;

      var grad = ctx.createLinearGradient(2 * remSize, 2 * remSize, 6 * remSize, 4 * remSize);
      grad.addColorStop(0, '#ff7b79');
      grad.addColorStop(0.5, '#ffac93');
      grad.addColorStop(1, '#ffd3a6');

      /* 指定几个颜色 */
      //      let handle = setInterval(function() {
      //        if (count == times) {
      //          clearInterval(handle);
      //        } // angle
      ctx.beginPath();
      var anglePerSec = 2 * Math.PI * (self.percent / 100) / times; // 每个间隔滑动的弧度
      ctx.arc(self.windowWidth / 2, 3.2 * remSize, remSize * 2.75, Math.PI * 0.8, Math.PI * (self.count * 1.4 + 0.8), false); //这里的圆心坐标要和cirle的保持一致
      ctx.setStrokeStyle(grad);
      ctx.setLineWidth(self.lineWidth);
      ctx.setLineCap(self.lineCap);
      ctx.stroke();
      ctx.closePath();

      //  console.log(startAngle,endAngle,anglePerSec,count)
      // startAngle += anglePerSec - 0.0028; // 消除每次绘环间的计算误差，防止出现空隙
      // endAngle = startAngle + anglePerSec;
      count++;
      // self.$apply();

      // }, 80);

      ctx.draw();
    }
  }]);

  return weekfraction;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(weekfraction , 'pages/personalweekmark'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcnNvbmFsd2Vla21hcmsuanMiXSwibmFtZXMiOlsid2Vla2ZyYWN0aW9uIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJhcHBjb21taXRidG4iLCJtaXhpbnMiLCJkYXRhIiwid2luZG93V2lkdGgiLCJjb3VudCIsImxpbmVXaWR0aCIsInN0cm9rZVN0eWxlIiwibGluZUNhcCIsInN0YXJ0QW5nbGUiLCJNYXRoIiwiUEkiLCJwZXJjZW50IiwiaXRlbVdpZHRoIiwiY29sb3IiLCJzY29yZSIsInNob3ciLCJtZXRob2RzIiwiY291bnRlckVtaXQiLCJ3eCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJnb3dlZWttYXJrIiwib3B0aW9uIiwic2VsZiIsInBhcnNlSW50IiwiZ2V0U3lzdGVtSW5mbyIsInN1Y2Nlc3MiLCJyZXMiLCJjdHgiLCJjcmVhdGVDYW52YXNDb250ZXh0IiwicmVtU2l6ZSIsImJlZ2luUGF0aCIsImFyYyIsInNldExpbmVXaWR0aCIsInNldFN0cm9rZVN0eWxlIiwic2V0TGluZUNhcCIsInN0cm9rZSIsIm1vdmVUbyIsInRpbWVzIiwiZW5kQW5nbGUiLCJncmFkIiwiY3JlYXRlTGluZWFyR3JhZGllbnQiLCJhZGRDb2xvclN0b3AiLCJhbmdsZVBlclNlYyIsImNsb3NlUGF0aCIsImRyYXciLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFRTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxZOzs7Ozs7Ozs7Ozs7OztrTUFFbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxVLEdBQWE7QUFDWEM7QUFEVyxLLFFBSWJDLE0sR0FBUyxnQixRQUVUQyxJLEdBQU87QUFDTEMsbUJBQVksQ0FEUDtBQUVMQyxhQUFNLElBRkQ7QUFHWDtBQUNNQyxpQkFBVSxFQUpMLEVBSVM7QUFDZEMsbUJBQVksU0FMUCxFQUtrQjtBQUN2QkMsZUFBUSxPQU5ILEVBTVk7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dEI7QUFDQXVCLFVBQUlPLFVBQUosQ0FBZVosS0FBS2hCLE9BQXBCO0FBQ0FxQixVQUFJUSxNQUFKO0FBQ0FSLFVBQUlnQixTQUFKOztBQUVBO0FBQ0E7QUFDQTtBQUNBeEM7QUFDQTs7QUFFQTs7QUFFQXdCLFVBQUlpQixJQUFKO0FBQ0Q7Ozs7RUFoR3VDLGVBQUtDLEk7O2tCQUExQmxELFkiLCJmaWxlIjoicGVyc29uYWx3ZWVrbWFyay5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCBUb2FzdCBmcm9tICd3ZXB5LWNvbS10b2FzdCdcbiAgaW1wb3J0IGFwcGNvbW1pdGJ0biBmcm9tICcuLi9jb21wb25lbnRzL2FwcGNvbW1pdGJ0bidcbiAgaW1wb3J0IHRlc3RNaXhpbiBmcm9tICcuLi9taXhpbnMvdGVzdCdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyB3ZWVrZnJhY3Rpb24gZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuXG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+WtpuWIhuafpeivoidcbiAgICB9XG5cbiAgICBjb21wb25lbnRzID0ge1xuICAgICAgYXBwY29tbWl0YnRuOmFwcGNvbW1pdGJ0blxuICAgIH1cblxuICAgIG1peGlucyA9IFt0ZXN0TWl4aW5dXG5cbiAgICBkYXRhID0ge1xuICAgICAgd2luZG93V2lkdGg6MCxcbiAgICAgIGNvdW50Om51bGwsXG4vLyAgICAgIHJhZGl1czoyKnJlbVNpemUqNCwgLy/lnIbnjq/ljYrlvoRcbiAgICAgIGxpbmVXaWR0aDoxMiwgLy/njq/nmoTlrr3luqZcbiAgICAgIHN0cm9rZVN0eWxlOicjZmZmZmZmJywgLy/ovrnnmoTpopzoibJcbiAgICAgIGxpbmVDYXA6J3JvdW5kJywgLy/njq/lvaLnirZcbiAgICAgIHN0YXJ0QW5nbGU6TWF0aC5QSSowLjgsIC8v5byn6LW36KeS5bqmXG4gICAgICBwZXJjZW50OjkwKjAuNzA4MSwgIC8v5byn5Y2g5q+U5L6LXG4gICAgICBpdGVtV2lkdGg6JzEwMCUnLFxuICAgICAgY29sb3I6IFwicmVkXCIsXG4gICAgICBzY29yZTogODAsXG4gICAgICBzaG93OmZhbHNlICAgICAgLy90cnVl5Li65pi+56S65peg5a2m5YiGXG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIGNvdW50ZXJFbWl0ICguLi5hcmdzKSB7XG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogJy9wYWdlcy93ZWVrZXhhbXJlc3VsdCdcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBnb3dlZWttYXJrKCl7XG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogJy9wYWdlcy9wZXJzb25hbHdlZWtsYWJlbCdcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBvbkxvYWQob3B0aW9uKXtcbiAgICAgIGxldCBzZWxmID0gdGhpcztcblxuICAgICAgc2VsZi5jb3VudCA9IG9wdGlvbi5jb3VudCB8fCAwO1xuICAgICAgc2VsZi5zY29yZSA9IHBhcnNlSW50KG9wdGlvbi5jb3VudCoxMDApIHx8IDExODBcblxuICAgICAgd3guZ2V0U3lzdGVtSW5mbyh7XG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgIHNlbGYud2luZG93V2lkdGggPSByZXMud2luZG93V2lkdGgqMC44NVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgbGV0IGN0eCA9IHd4LmNyZWF0ZUNhbnZhc0NvbnRleHQoJ2ZpcnN0Q2FudmFzJyk7XG4gICAgICBsZXQgcmVtU2l6ZSA9IDQwKihzZWxmLndpbmRvd1dpZHRoLzMyMCk7XG5cbiAgICAgIC8vY29uc29sZS5sb2coIDIqcmVtU2l6ZSApXG4gICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICBjdHguYXJjKChzZWxmLndpbmRvd1dpZHRoKS8yLCAzLjIqcmVtU2l6ZSwgcmVtU2l6ZSoyLjc1LCBNYXRoLlBJKjAuOCwgTWF0aC5QSSoyLjIsIGZhbHNlKTsgIC8vIOWdkOagh+S4ujI1MOeahOWchu+8jOi/memHjOi1t+Wni+inkuW6puaYrzDvvIznu5PmnZ/op5LluqbmmK9NYXRoLlBJKjJcbiAgICAgIGN0eC5zZXRMaW5lV2lkdGgoc2VsZi5saW5lV2lkdGgpO1xuICAgICAgY3R4LnNldFN0cm9rZVN0eWxlKHNlbGYuc3Ryb2tlU3R5bGUpO1xuICAgICAgY3R4LnNldExpbmVDYXAoc2VsZi5saW5lQ2FwKTtcbiAgICAgIGN0eC5zdHJva2UoKTsgIC8vIOi/memHjOeUqHN0cm9rZeeUu+S4gOS4quepuuW/g+WchlxuXG4gICAgICAvLyAgbGV0IHR4ID0gd3guY3JlYXRlQ2FudmFzQ29udGV4dCgnZmlyc3RDYW52YXMnKVxuICAgICAgY3R4Lm1vdmVUbygwLDEwMClcbiAgICAgIGxldCBjb3VudCA9IDEsIHRpbWVzID0gMTA7ICAvLyDliIbljYHmrKHnu5jliLbok53lvKdcbiAgICAgIGxldCBzdGFydEFuZ2xlID0gc2VsZi5zdGFydEFuZ2xlO1xuICAgICAgbGV0IGVuZEFuZ2xlID0gc3RhcnRBbmdsZTtcblxuICAgICAgbGV0IGdyYWQgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMipyZW1TaXplLCAyKnJlbVNpemUsIDYqcmVtU2l6ZSwgNCpyZW1TaXplKTtcbiAgICAgIGdyYWQuYWRkQ29sb3JTdG9wKDAsICcjZmY3Yjc5Jyk7XG4gICAgICBncmFkLmFkZENvbG9yU3RvcCgwLjUsICcjZmZhYzkzJyk7XG4gICAgICBncmFkLmFkZENvbG9yU3RvcCgxLCAnI2ZmZDNhNicpO1xuXG4gICAgICAvKiDmjIflrprlh6DkuKrpopzoibIgKi9cbi8vICAgICAgbGV0IGhhbmRsZSA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuLy8gICAgICAgIGlmIChjb3VudCA9PSB0aW1lcykge1xuLy8gICAgICAgICAgY2xlYXJJbnRlcnZhbChoYW5kbGUpO1xuLy8gICAgICAgIH0gLy8gYW5nbGVcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGxldCBhbmdsZVBlclNlYyA9IDIgKiBNYXRoLlBJICogKHNlbGYucGVyY2VudCAvIDEwMCkgLyB0aW1lczsgLy8g5q+P5Liq6Ze06ZqU5ruR5Yqo55qE5byn5bqmXG4gICAgICBjdHguYXJjKChzZWxmLndpbmRvd1dpZHRoKS8yLCAzLjIqcmVtU2l6ZSwgcmVtU2l6ZSoyLjc1LCBNYXRoLlBJKjAuOCwgTWF0aC5QSSooc2VsZi5jb3VudCoxLjQrMC44KSAsIGZhbHNlKTsgLy/ov5nph4znmoTlnIblv4PlnZDmoIfopoHlkoxjaXJsZeeahOS/neaMgeS4gOiHtFxuICAgICAgY3R4LnNldFN0cm9rZVN0eWxlKGdyYWQpO1xuICAgICAgY3R4LnNldExpbmVXaWR0aChzZWxmLmxpbmVXaWR0aCk7XG4gICAgICBjdHguc2V0TGluZUNhcChzZWxmLmxpbmVDYXApO1xuICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAvLyAgY29uc29sZS5sb2coc3RhcnRBbmdsZSxlbmRBbmdsZSxhbmdsZVBlclNlYyxjb3VudClcbiAgICAgIC8vIHN0YXJ0QW5nbGUgKz0gYW5nbGVQZXJTZWMgLSAwLjAwMjg7IC8vIOa2iOmZpOavj+asoee7mOeOr+mXtOeahOiuoeeul+ivr+W3ru+8jOmYsuatouWHuueOsOepuumamVxuICAgICAgLy8gZW5kQW5nbGUgPSBzdGFydEFuZ2xlICsgYW5nbGVQZXJTZWM7XG4gICAgICBjb3VudCsrO1xuICAgICAgLy8gc2VsZi4kYXBwbHkoKTtcblxuICAgICAgLy8gfSwgODApO1xuXG4gICAgICBjdHguZHJhdygpXG4gICAgfVxuXG4gIH1cbiJdfQ==