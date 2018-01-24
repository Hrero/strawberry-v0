'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _shareinfoheader = require('./../components/shareinfoheader.js');

var _shareinfoheader2 = _interopRequireDefault(_shareinfoheader);

var _wepyComToast = require('./../npm/wepy-com-toast/toast.js');

var _wepyComToast2 = _interopRequireDefault(_wepyComToast);

var _test = require('./../mixins/test.js');

var _test2 = _interopRequireDefault(_test);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TermBegins = function (_wepy$page) {
  _inherits(TermBegins, _wepy$page);

  function TermBegins() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TermBegins);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TermBegins.__proto__ || Object.getPrototypeOf(TermBegins)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '开学页'
    }, _this.$repeat = {}, _this.$props = { "infoHeader": { "title": "sharetermbegins" } }, _this.$events = {}, _this.components = {
      infoHeader: _shareinfoheader2.default
    }, _this.mixins = [_test2.default], _this.data = {
      userInfo: {
        nickName: '',
        avatarUrl: ''
      }
    }, _this.methods = {
      goClass: function goClass() {
        wx.reLaunch({
          url: '/pages/weekjobindex'
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TermBegins, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return TermBegins;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(TermBegins , 'pages/sharetermbegins'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJldGVybWJlZ2lucy5qcyJdLCJuYW1lcyI6WyJUZXJtQmVnaW5zIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImluZm9IZWFkZXIiLCJtaXhpbnMiLCJkYXRhIiwidXNlckluZm8iLCJuaWNrTmFtZSIsImF2YXRhclVybCIsIm1ldGhvZHMiLCJnb0NsYXNzIiwid3giLCJyZUxhdW5jaCIsInVybCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFU7Ozs7Ozs7Ozs7Ozs7OzhMQUVuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBSVZDLE8sR0FBVSxFLFFBQ2JDLE0sR0FBUyxFQUFDLGNBQWEsRUFBQyxTQUFRLGlCQUFULEVBQWQsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDUkM7QUFEUSxLLFFBSVZDLE0sR0FBUyxnQixRQUVUQyxJLEdBQU87QUFDTEMsZ0JBQVU7QUFDUkMsa0JBQVMsRUFERDtBQUVSQyxtQkFBVTtBQUZGO0FBREwsSyxRQU9QQyxPLEdBQVU7QUFDUkMsYUFEUSxxQkFDQztBQUNQQyxXQUFHQyxRQUFILENBQVk7QUFDVkMsZUFBSztBQURLLFNBQVo7QUFHRDtBQUxPLEs7Ozs7OzZCQU9GLENBRVA7Ozs7RUEvQnFDLGVBQUtDLEk7O2tCQUF4QmxCLFUiLCJmaWxlIjoic2hhcmV0ZXJtYmVnaW5zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCBJbmZvSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvc2hhcmVpbmZvaGVhZGVyJ1xuICBpbXBvcnQgVG9hc3QgZnJvbSAnd2VweS1jb20tdG9hc3QnXG4gIGltcG9ydCB0ZXN0TWl4aW4gZnJvbSAnLi4vbWl4aW5zL3Rlc3QnXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVybUJlZ2lucyBleHRlbmRzIHdlcHkucGFnZSB7XG5cbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5byA5a2m6aG1J1xuICAgIH1cblxuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJpbmZvSGVhZGVyXCI6e1widGl0bGVcIjpcInNoYXJldGVybWJlZ2luc1wifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICBpbmZvSGVhZGVyOiBJbmZvSGVhZGVyXG4gICAgfVxuXG4gICAgbWl4aW5zID0gW3Rlc3RNaXhpbl1cblxuICAgIGRhdGEgPSB7XG4gICAgICB1c2VySW5mbzoge1xuICAgICAgICBuaWNrTmFtZTonJyxcbiAgICAgICAgYXZhdGFyVXJsOicnXG4gICAgICB9XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIGdvQ2xhc3MoKXtcbiAgICAgICAgd3gucmVMYXVuY2goe1xuICAgICAgICAgIHVybDogJy9wYWdlcy93ZWVram9iaW5kZXgnXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICAgIG9uTG9hZCgpe1xuXG4gICAgfVxuICB9XG4iXX0=