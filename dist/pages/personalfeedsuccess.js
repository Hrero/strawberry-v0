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

var feedbacksuccess = function (_wepy$page) {
  _inherits(feedbacksuccess, _wepy$page);

  function feedbacksuccess() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, feedbacksuccess);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = feedbacksuccess.__proto__ || Object.getPrototypeOf(feedbacksuccess)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '反馈成功页'
    }, _this.components = {}, _this.mixins = [_test2.default], _this.data = {
      focus: false,
      inputValue: ''
    }, _this.methods = {
      commitBtn: function commitBtn() {
        wx.reLaunch({
          url: '/pages/personalcenter'
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(feedbacksuccess, [{
    key: 'onLoad',
    value: function onLoad(option) {}
  }]);

  return feedbacksuccess;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(feedbacksuccess , 'pages/personalfeedsuccess'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcnNvbmFsZmVlZHN1Y2Nlc3MuanMiXSwibmFtZXMiOlsiZmVlZGJhY2tzdWNjZXNzIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJtaXhpbnMiLCJkYXRhIiwiZm9jdXMiLCJpbnB1dFZhbHVlIiwibWV0aG9kcyIsImNvbW1pdEJ0biIsInd4IiwicmVMYXVuY2giLCJ1cmwiLCJvcHRpb24iLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFRTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsZTs7Ozs7Ozs7Ozs7Ozs7d01BRW5CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVEMsVSxHQUFhLEUsUUFHYkMsTSxHQUFTLGdCLFFBRVRDLEksR0FBTztBQUNMQyxhQUFPLEtBREY7QUFFTEMsa0JBQVk7QUFGUCxLLFFBS1BDLE8sR0FBVTtBQUNSQyxlQURRLHVCQUNHO0FBQ1RDLFdBQUdDLFFBQUgsQ0FBWTtBQUNWQyxlQUFLO0FBREssU0FBWjtBQUdEO0FBTE8sSzs7Ozs7MkJBUUhDLE0sRUFBTyxDQUViOzs7O0VBMUIwQyxlQUFLQyxJOztrQkFBN0JkLGUiLCJmaWxlIjoicGVyc29uYWxmZWVkc3VjY2Vzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCBUb2FzdCBmcm9tICd3ZXB5LWNvbS10b2FzdCdcbiAgaW1wb3J0IHRlc3RNaXhpbiBmcm9tICcuLi9taXhpbnMvdGVzdCdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBmZWVkYmFja3N1Y2Nlc3MgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuXG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+WPjemmiOaIkOWKn+mhtSdcbiAgICB9XG5cbiAgICBjb21wb25lbnRzID0ge1xuICAgIH1cblxuICAgIG1peGlucyA9IFt0ZXN0TWl4aW5dXG5cbiAgICBkYXRhID0ge1xuICAgICAgZm9jdXM6IGZhbHNlLFxuICAgICAgaW5wdXRWYWx1ZTogJycsXG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIGNvbW1pdEJ0bigpe1xuICAgICAgICB3eC5yZUxhdW5jaCh7XG4gICAgICAgICAgdXJsOiAnL3BhZ2VzL3BlcnNvbmFsY2VudGVyJ1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIG9uTG9hZChvcHRpb24pe1xuXG4gICAgfVxuXG4gIH1cbiJdfQ==