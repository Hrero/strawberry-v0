'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wepyComToast = require('./../npm/wepy-com-toast/toast.js');

var _wepyComToast2 = _interopRequireDefault(_wepyComToast);

var _test = require('./../mixins/test.js');

var _test2 = _interopRequireDefault(_test);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Inviting = function (_wepy$page) {
  _inherits(Inviting, _wepy$page);

  function Inviting() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Inviting);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Inviting.__proto__ || Object.getPrototypeOf(Inviting)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '邀请页'
    }, _this.components = {}, _this.mixins = [_test2.default], _this.data = {
      userInfo: {
        nickName: '',
        avatarUrl: ''
      },
      isShow: true
    }, _this.methods = {
      JumpReport: function JumpReport() {}
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Inviting, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Inviting;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Inviting , 'pages/shareInviting'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlSW52aXRpbmcuanMiXSwibmFtZXMiOlsiSW52aXRpbmciLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsIm1peGlucyIsImRhdGEiLCJ1c2VySW5mbyIsIm5pY2tOYW1lIiwiYXZhdGFyVXJsIiwiaXNTaG93IiwibWV0aG9kcyIsIkp1bXBSZXBvcnQiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsUTs7Ozs7Ozs7Ozs7Ozs7MExBRW5CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVEMsVSxHQUFhLEUsUUFHYkMsTSxHQUFTLGdCLFFBRVRDLEksR0FBTztBQUNMQyxnQkFBVTtBQUNSQyxrQkFBUyxFQUREO0FBRVJDLG1CQUFVO0FBRkYsT0FETDtBQUtMQyxjQUFRO0FBTEgsSyxRQVFQQyxPLEdBQVU7QUFDUkMsZ0JBRFEsd0JBQ0ksQ0FBRTtBQUROLEs7Ozs7OzZCQUdGLENBRVA7Ozs7RUF4Qm1DLGVBQUtDLEk7O2tCQUF0QlosUSIsImZpbGUiOiJzaGFyZUludml0aW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCBUb2FzdCBmcm9tICd3ZXB5LWNvbS10b2FzdCdcbiAgaW1wb3J0IHRlc3RNaXhpbiBmcm9tICcuLi9taXhpbnMvdGVzdCdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbnZpdGluZyBleHRlbmRzIHdlcHkucGFnZSB7XG5cbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6YKA6K+36aG1J1xuICAgIH1cblxuICAgIGNvbXBvbmVudHMgPSB7XG4gICAgfVxuXG4gICAgbWl4aW5zID0gW3Rlc3RNaXhpbl1cblxuICAgIGRhdGEgPSB7XG4gICAgICB1c2VySW5mbzoge1xuICAgICAgICBuaWNrTmFtZTonJyxcbiAgICAgICAgYXZhdGFyVXJsOicnXG4gICAgICB9LFxuICAgICAgaXNTaG93OiB0cnVlXG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIEp1bXBSZXBvcnQoKXt9XG4gICAgfVxuICAgIG9uTG9hZCgpe1xuXG4gICAgfVxuICB9XG4iXX0=