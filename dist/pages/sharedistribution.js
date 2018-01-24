'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


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

var Distribution = function (_wepy$page) {
  _inherits(Distribution, _wepy$page);

  function Distribution() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Distribution);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Distribution.__proto__ || Object.getPrototypeOf(Distribution)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '分销页'
    }, _this.mixins = [_test2.default], _this.data = {}, _this.methods = {
      goIndexPage: function goIndexPage() {
        console.log(2);
        //        wx.navigateTo({
        //          url: 'sharepay?id=1'
        //        })
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Distribution;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Distribution , 'pages/sharedistribution'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZGlzdHJpYnV0aW9uLmpzIl0sIm5hbWVzIjpbIkRpc3RyaWJ1dGlvbiIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJtaXhpbnMiLCJkYXRhIiwibWV0aG9kcyIsImdvSW5kZXhQYWdlIiwiY29uc29sZSIsImxvZyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsWTs7Ozs7Ozs7Ozs7Ozs7a01BRW5CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVEMsTSxHQUFTLGdCLFFBRVRDLEksR0FBTyxFLFFBRVBDLE8sR0FBVTtBQUNSQyxpQkFEUSx5QkFDTztBQUNYQyxnQkFBUUMsR0FBUixDQUFZLENBQVo7QUFDVjtBQUNBO0FBQ0E7QUFDTztBQU5PLEs7Ozs7RUFWOEIsZUFBS0MsSTs7a0JBQTFCVCxZIiwiZmlsZSI6InNoYXJlZGlzdHJpYnV0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCBUb2FzdCBmcm9tICd3ZXB5LWNvbS10b2FzdCdcbiAgaW1wb3J0IHRlc3RNaXhpbiBmcm9tICcuLi9taXhpbnMvdGVzdCdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBEaXN0cmlidXRpb24gZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuXG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+WIhumUgOmhtSdcbiAgICB9XG5cbiAgICBtaXhpbnMgPSBbdGVzdE1peGluXVxuXG4gICAgZGF0YSA9IHt9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgZ29JbmRleFBhZ2UgKCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKDIpXG4vLyAgICAgICAgd3gubmF2aWdhdGVUbyh7XG4vLyAgICAgICAgICB1cmw6ICdzaGFyZXBheT9pZD0xJ1xuLy8gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG4iXX0=