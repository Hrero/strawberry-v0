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

var feedback = function (_wepy$page) {
  _inherits(feedback, _wepy$page);

  function feedback() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, feedback);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = feedback.__proto__ || Object.getPrototypeOf(feedback)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '反馈页'
    }, _this.components = {}, _this.mixins = [_test2.default], _this.data = {
      focus: false,
      inputValue: ''
    }, _this.methods = {
      bindButtonTap: function bindButtonTap() {
        this.setData({
          focus: true
        });
      },
      bindKeyInput: function bindKeyInput(e) {
        //          console.log(e.currentTarget.dataset)
        this.inputValue = e.detail.value;
      },
      feedback: function feedback() {
        wx.navigateTo({
          url: '/pages/personalfeedsuccess'
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(feedback, [{
    key: 'onLoad',
    value: function onLoad(option) {}
  }]);

  return feedback;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(feedback , 'pages/personalfeedback'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcnNvbmFsZmVlZGJhY2suanMiXSwibmFtZXMiOlsiZmVlZGJhY2siLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsIm1peGlucyIsImRhdGEiLCJmb2N1cyIsImlucHV0VmFsdWUiLCJtZXRob2RzIiwiYmluZEJ1dHRvblRhcCIsInNldERhdGEiLCJiaW5kS2V5SW5wdXQiLCJlIiwiZGV0YWlsIiwidmFsdWUiLCJ3eCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJvcHRpb24iLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFRTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsUTs7Ozs7Ozs7Ozs7Ozs7MExBRW5CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVEMsVSxHQUFhLEUsUUFHYkMsTSxHQUFTLGdCLFFBRVRDLEksR0FBTztBQUNMQyxhQUFPLEtBREY7QUFFTEMsa0JBQVk7QUFGUCxLLFFBS1BDLE8sR0FBVTtBQUNSQyxxQkFBZSx5QkFBVztBQUN4QixhQUFLQyxPQUFMLENBQWE7QUFDWEosaUJBQU87QUFESSxTQUFiO0FBR0QsT0FMTztBQU1SSyxvQkFBYyxzQkFBU0MsQ0FBVCxFQUFZO0FBQ2hDO0FBQ1UsYUFBS0wsVUFBTCxHQUFrQkssRUFBRUMsTUFBRixDQUFTQyxLQUEzQjtBQUNILE9BVE87QUFVUmQsY0FWUSxzQkFVRTtBQUNSZSxXQUFHQyxVQUFILENBQWM7QUFDWkMsZUFBSztBQURPLFNBQWQ7QUFHRDtBQWRPLEs7Ozs7OzJCQWlCSEMsTSxFQUFPLENBRWI7Ozs7RUFuQ21DLGVBQUtDLEk7O2tCQUF0Qm5CLFEiLCJmaWxlIjoicGVyc29uYWxmZWVkYmFjay5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCBUb2FzdCBmcm9tICd3ZXB5LWNvbS10b2FzdCdcbiAgaW1wb3J0IHRlc3RNaXhpbiBmcm9tICcuLi9taXhpbnMvdGVzdCdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBmZWVkYmFjayBleHRlbmRzIHdlcHkucGFnZSB7XG5cbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5Y+N6aaI6aG1J1xuICAgIH1cblxuICAgIGNvbXBvbmVudHMgPSB7XG4gICAgfVxuXG4gICAgbWl4aW5zID0gW3Rlc3RNaXhpbl1cblxuICAgIGRhdGEgPSB7XG4gICAgICBmb2N1czogZmFsc2UsXG4gICAgICBpbnB1dFZhbHVlOiAnJyxcbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgYmluZEJ1dHRvblRhcDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgZm9jdXM6IHRydWVcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBiaW5kS2V5SW5wdXQ6IGZ1bmN0aW9uKGUpIHtcbi8vICAgICAgICAgIGNvbnNvbGUubG9nKGUuY3VycmVudFRhcmdldC5kYXRhc2V0KVxuICAgICAgICAgIHRoaXMuaW5wdXRWYWx1ZSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgfSxcbiAgICAgIGZlZWRiYWNrKCl7XG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogJy9wYWdlcy9wZXJzb25hbGZlZWRzdWNjZXNzJ1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIG9uTG9hZChvcHRpb24pe1xuXG4gICAgfVxuXG4gIH1cbiJdfQ==