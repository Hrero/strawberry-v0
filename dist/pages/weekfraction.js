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
      navigationBarTitleText: '考试结果页'
    }, _this.$repeat = {}, _this.$props = { "appcommitbtn": { "Text": "查看答案", "xmlns:v-on": "" } }, _this.$events = { "appcommitbtn": { "v-on:goReadSuccess": "counterEmit" } }, _this.components = {
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
      score: null
    }, _this.methods = {
      counterEmit: function counterEmit() {
        wx.navigateTo({
          url: '/pages/weekexamresult'
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(weekfraction, [{
    key: 'onLoad',
    value: function onLoad(option) {
      var self = this;

      self.count = option.count || 0;
      self.score = parseInt(option.count * 100);
      wx.getSystemInfo({
        success: function success(res) {
          self.windowWidth = res.windowWidth * 0.85;
        }
      });
      var ctx = wx.createCanvasContext('firstCanvas');
      var remSize = 40 * (self.windowWidth / 320);

      //console.log( 2*remSize )
      ctx.beginPath();
      ctx.arc(self.windowWidth / 2, 3.2 * remSize, remSize * 3, Math.PI * 0.8, Math.PI * 2.2, false); // 坐标为250的圆，这里起始角度是0，结束角度是Math.PI*2
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
      ctx.arc(self.windowWidth / 2, 3.2 * remSize, remSize * 3, Math.PI * 0.8, Math.PI * (self.count * 1.4 + 0.8), false); //这里的圆心坐标要和cirle的保持一致
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


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(weekfraction , 'pages/weekfraction'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlZWtmcmFjdGlvbi5qcyJdLCJuYW1lcyI6WyJ3ZWVrZnJhY3Rpb24iLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiYXBwY29tbWl0YnRuIiwibWl4aW5zIiwiZGF0YSIsIndpbmRvd1dpZHRoIiwiY291bnQiLCJsaW5lV2lkdGgiLCJzdHJva2VTdHlsZSIsImxpbmVDYXAiLCJzdGFydEFuZ2xlIiwiTWF0aCIsIlBJIiwicGVyY2VudCIsIml0ZW1XaWR0aCIsImNvbG9yIiwic2NvcmUiLCJtZXRob2RzIiwiY291bnRlckVtaXQiLCJ3eCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJvcHRpb24iLCJzZWxmIiwicGFyc2VJbnQiLCJnZXRTeXN0ZW1JbmZvIiwic3VjY2VzcyIsInJlcyIsImN0eCIsImNyZWF0ZUNhbnZhc0NvbnRleHQiLCJyZW1TaXplIiwiYmVnaW5QYXRoIiwiYXJjIiwic2V0TGluZVdpZHRoIiwic2V0U3Ryb2tlU3R5bGUiLCJzZXRMaW5lQ2FwIiwic3Ryb2tlIiwibW92ZVRvIiwidGltZXMiLCJlbmRBbmdsZSIsImdyYWQiLCJjcmVhdGVMaW5lYXJHcmFkaWVudCIsImFkZENvbG9yU3RvcCIsImFuZ2xlUGVyU2VjIiwiY2xvc2VQYXRoIiwiZHJhdyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVFOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFk7Ozs7Ozs7Ozs7Ozs7O2tNQUVuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBSVZDLE8sR0FBVSxFLFFBQ2JDLE0sR0FBUyxFQUFDLGdCQUFlLEVBQUMsUUFBTyxNQUFSLEVBQWUsY0FBYSxFQUE1QixFQUFoQixFLFFBQ1RDLE8sR0FBVSxFQUFDLGdCQUFlLEVBQUMsc0JBQXFCLGFBQXRCLEVBQWhCLEUsUUFDVEMsVSxHQUFhO0FBQ1JDO0FBRFEsSyxR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SUssWUFBSixDQUFpQlYsS0FBS2hCLFNBQXRCO0FBQ0FxQixVQUFJTyxVQUFKLENBQWVaLEtBQUtkLE9BQXBCO0FBQ0FtQixVQUFJUSxNQUFKO0FBQ0FSLFVBQUlnQixTQUFKOztBQUVGO0FBQ0M7QUFDQTtBQUNDdEM7QUFDRDs7QUFFRjs7QUFFQ3NCLFVBQUlpQixJQUFKO0FBQ0Q7Ozs7RUE1RnVDLGVBQUtDLEk7O2tCQUExQm5ELFkiLCJmaWxlIjoid2Vla2ZyYWN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IFRvYXN0IGZyb20gJ3dlcHktY29tLXRvYXN0J1xuICBpbXBvcnQgYXBwY29tbWl0YnRuIGZyb20gJy4uL2NvbXBvbmVudHMvYXBwY29tbWl0YnRuJ1xuICBpbXBvcnQgdGVzdE1peGluIGZyb20gJy4uL21peGlucy90ZXN0J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIHdlZWtmcmFjdGlvbiBleHRlbmRzIHdlcHkucGFnZSB7XG5cbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6ICD6K+V57uT5p6c6aG1J1xuICAgIH1cblxuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJhcHBjb21taXRidG5cIjp7XCJUZXh0XCI6XCLmn6XnnIvnrZTmoYhcIixcInhtbG5zOnYtb25cIjpcIlwifX07XHJcbiRldmVudHMgPSB7XCJhcHBjb21taXRidG5cIjp7XCJ2LW9uOmdvUmVhZFN1Y2Nlc3NcIjpcImNvdW50ZXJFbWl0XCJ9fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICBhcHBjb21taXRidG46YXBwY29tbWl0YnRuXG4gICAgfVxuXG4gICAgbWl4aW5zID0gW3Rlc3RNaXhpbl1cblxuICAgIGRhdGEgPSB7XG4gICAgICB3aW5kb3dXaWR0aDowLFxuICAgICAgY291bnQ6bnVsbCxcbi8vICAgICAgcmFkaXVzOjIqcmVtU2l6ZSo0LCAvL+WchueOr+WNiuW+hFxuICAgICAgbGluZVdpZHRoOjEyLCAvL+eOr+eahOWuveW6plxuICAgICAgc3Ryb2tlU3R5bGU6JyNmZmZmZmYnLCAvL+i+ueeahOminOiJslxuICAgICAgbGluZUNhcDoncm91bmQnLCAvL+eOr+W9oueKtlxuICAgICAgc3RhcnRBbmdsZTpNYXRoLlBJKjAuOCwgLy/lvKfotbfop5LluqZcbiAgICAgIHBlcmNlbnQ6OTAqMC43MDgxLCAgLy/lvKfljaDmr5TkvotcbiAgICAgIGl0ZW1XaWR0aDonMTAwJScsXG4gICAgICBjb2xvcjogXCJyZWRcIixcbiAgICAgIHNjb3JlOiBudWxsXG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIGNvdW50ZXJFbWl0ICguLi5hcmdzKSB7XG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogJy9wYWdlcy93ZWVrZXhhbXJlc3VsdCdcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBvbkxvYWQob3B0aW9uKXtcbiAgICAgIGxldCBzZWxmID0gdGhpcztcblxuICAgICAgc2VsZi5jb3VudCA9IG9wdGlvbi5jb3VudCB8fCAwO1xuICAgICAgc2VsZi5zY29yZSA9IHBhcnNlSW50KG9wdGlvbi5jb3VudCoxMDApXG4gICAgICB3eC5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgc2VsZi53aW5kb3dXaWR0aCA9IHJlcy53aW5kb3dXaWR0aCowLjg1XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICBsZXQgY3R4ID0gd3guY3JlYXRlQ2FudmFzQ29udGV4dCgnZmlyc3RDYW52YXMnKTtcbiAgICAgIGxldCByZW1TaXplID0gNDAqKHNlbGYud2luZG93V2lkdGgvMzIwKTtcblxuICAgICAgLy9jb25zb2xlLmxvZyggMipyZW1TaXplIClcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGN0eC5hcmMoKHNlbGYud2luZG93V2lkdGgpLzIsIDMuMipyZW1TaXplLCByZW1TaXplKjMsIE1hdGguUEkqMC44LCBNYXRoLlBJKjIuMiwgZmFsc2UpOyAgLy8g5Z2Q5qCH5Li6MjUw55qE5ZyG77yM6L+Z6YeM6LW35aeL6KeS5bqm5pivMO+8jOe7k+adn+inkuW6puaYr01hdGguUEkqMlxuICAgICAgY3R4LnNldExpbmVXaWR0aChzZWxmLmxpbmVXaWR0aCk7XG4gICAgICBjdHguc2V0U3Ryb2tlU3R5bGUoc2VsZi5zdHJva2VTdHlsZSk7XG4gICAgICBjdHguc2V0TGluZUNhcChzZWxmLmxpbmVDYXApO1xuICAgICAgY3R4LnN0cm9rZSgpOyAgLy8g6L+Z6YeM55Soc3Ryb2tl55S75LiA5Liq56m65b+D5ZyGXG5cbiAgICAvLyAgbGV0IHR4ID0gd3guY3JlYXRlQ2FudmFzQ29udGV4dCgnZmlyc3RDYW52YXMnKVxuICAgICAgY3R4Lm1vdmVUbygwLDEwMClcbiAgICAgIGxldCBjb3VudCA9IDEsIHRpbWVzID0gMTA7ICAvLyDliIbljYHmrKHnu5jliLbok53lvKdcbiAgICAgIGxldCBzdGFydEFuZ2xlID0gc2VsZi5zdGFydEFuZ2xlO1xuICAgICAgbGV0IGVuZEFuZ2xlID0gc3RhcnRBbmdsZTtcblxuICAgICAgbGV0IGdyYWQgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMipyZW1TaXplLCAyKnJlbVNpemUsIDYqcmVtU2l6ZSwgNCpyZW1TaXplKTtcbiAgICAgIGdyYWQuYWRkQ29sb3JTdG9wKDAsICcjZmY3Yjc5Jyk7XG4gICAgICBncmFkLmFkZENvbG9yU3RvcCgwLjUsICcjZmZhYzkzJyk7XG4gICAgICBncmFkLmFkZENvbG9yU3RvcCgxLCAnI2ZmZDNhNicpO1xuXG4gICAgICAvKiDmjIflrprlh6DkuKrpopzoibIgKi9cbi8vICAgICAgbGV0IGhhbmRsZSA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuLy8gICAgICAgIGlmIChjb3VudCA9PSB0aW1lcykge1xuLy8gICAgICAgICAgY2xlYXJJbnRlcnZhbChoYW5kbGUpO1xuLy8gICAgICAgIH0gLy8gYW5nbGVcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBsZXQgYW5nbGVQZXJTZWMgPSAyICogTWF0aC5QSSAqIChzZWxmLnBlcmNlbnQgLyAxMDApIC8gdGltZXM7IC8vIOavj+S4qumXtOmalOa7keWKqOeahOW8p+W6plxuICAgICAgICBjdHguYXJjKChzZWxmLndpbmRvd1dpZHRoKS8yLCAzLjIqcmVtU2l6ZSwgcmVtU2l6ZSozLCBNYXRoLlBJKjAuOCwgTWF0aC5QSSooc2VsZi5jb3VudCoxLjQrMC44KSAsIGZhbHNlKTsgLy/ov5nph4znmoTlnIblv4PlnZDmoIfopoHlkoxjaXJsZeeahOS/neaMgeS4gOiHtFxuICAgICAgICBjdHguc2V0U3Ryb2tlU3R5bGUoZ3JhZCk7XG4gICAgICAgIGN0eC5zZXRMaW5lV2lkdGgoc2VsZi5saW5lV2lkdGgpO1xuICAgICAgICBjdHguc2V0TGluZUNhcChzZWxmLmxpbmVDYXApO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgLy8gIGNvbnNvbGUubG9nKHN0YXJ0QW5nbGUsZW5kQW5nbGUsYW5nbGVQZXJTZWMsY291bnQpXG4gICAgICAgLy8gc3RhcnRBbmdsZSArPSBhbmdsZVBlclNlYyAtIDAuMDAyODsgLy8g5raI6Zmk5q+P5qyh57uY546v6Ze055qE6K6h566X6K+v5beu77yM6Ziy5q2i5Ye6546w56m66ZqZXG4gICAgICAgLy8gZW5kQW5nbGUgPSBzdGFydEFuZ2xlICsgYW5nbGVQZXJTZWM7XG4gICAgICAgIGNvdW50Kys7XG4gICAgICAgLy8gc2VsZi4kYXBwbHkoKTtcblxuICAgICAvLyB9LCA4MCk7XG5cbiAgICAgIGN0eC5kcmF3KClcbiAgICB9XG5cbiAgfVxuIl19