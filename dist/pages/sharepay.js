'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wepyComToast = require('./../npm/wepy-com-toast/toast.js');

var _wepyComToast2 = _interopRequireDefault(_wepyComToast);

var _shareinfoheader = require('./../components/shareinfoheader.js');

var _shareinfoheader2 = _interopRequireDefault(_shareinfoheader);

var _test = require('./../mixins/test.js');

var _test2 = _interopRequireDefault(_test);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PayIndex = function (_wepy$page) {
  _inherits(PayIndex, _wepy$page);

  function PayIndex() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PayIndex);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PayIndex.__proto__ || Object.getPrototypeOf(PayIndex)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '支付页'
    }, _this.$repeat = {}, _this.$props = { "infoHeader": { "title": "sharepay" } }, _this.$events = {}, _this.components = {
      infoHeader: _shareinfoheader2.default
    }, _this.mixins = [_test2.default], _this.data = {
      userInfo: {
        nickName: '',
        avatarUrl: ''
      },
      disabled: false
    }, _this.methods = {
      JumpReport: function JumpReport() {

        wx.navigateTo({
          url: '/pages/sharereport?id=1'
        });
      },
      goXieyi: function goXieyi() {
        wx.navigateTo({
          url: '/pages/sharexieyi'
        });
      },
      checkboxChange: function checkboxChange(e) {
        var self = this;
        if (e.detail.value.length == 1) {
          self.disabled = false;
        } else {
          self.disabled = true;
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PayIndex, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return PayIndex;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(PayIndex , 'pages/sharepay'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlcGF5LmpzIl0sIm5hbWVzIjpbIlBheUluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImluZm9IZWFkZXIiLCJtaXhpbnMiLCJkYXRhIiwidXNlckluZm8iLCJuaWNrTmFtZSIsImF2YXRhclVybCIsImRpc2FibGVkIiwibWV0aG9kcyIsIkp1bXBSZXBvcnQiLCJ3eCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJnb1hpZXlpIiwiY2hlY2tib3hDaGFuZ2UiLCJlIiwic2VsZiIsImRldGFpbCIsInZhbHVlIiwibGVuZ3RoIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsUTs7Ozs7Ozs7Ozs7Ozs7MExBRW5CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVkMsTyxHQUFVLEUsUUFDYkMsTSxHQUFTLEVBQUMsY0FBYSxFQUFDLFNBQVEsVUFBVCxFQUFkLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1JDO0FBRFEsSyxRQUdWQyxNLEdBQVMsZ0IsUUFFVEMsSSxHQUFPO0FBQ0xDLGdCQUFVO0FBQ1JDLGtCQUFTLEVBREQ7QUFFUkMsbUJBQVU7QUFGRixPQURMO0FBS0xDLGdCQUFTO0FBTEosSyxRQVFQQyxPLEdBQVU7QUFDUkMsZ0JBRFEsd0JBQ0k7O0FBRVZDLFdBQUdDLFVBQUgsQ0FBYztBQUNaQyxlQUFLO0FBRE8sU0FBZDtBQUdELE9BTk87QUFPUkMsYUFQUSxxQkFPQztBQUNQSCxXQUFHQyxVQUFILENBQWM7QUFDWkMsZUFBSztBQURPLFNBQWQ7QUFHRCxPQVhPO0FBWVJFLG9CQVpRLDBCQVlPQyxDQVpQLEVBWVU7QUFDaEIsWUFBSUMsT0FBTyxJQUFYO0FBQ0EsWUFBSUQsRUFBRUUsTUFBRixDQUFTQyxLQUFULENBQWVDLE1BQWYsSUFBeUIsQ0FBN0IsRUFBZ0M7QUFDOUJILGVBQUtULFFBQUwsR0FBZ0IsS0FBaEI7QUFDRCxTQUZELE1BRUs7QUFDSFMsZUFBS1QsUUFBTCxHQUFnQixJQUFoQjtBQUNEO0FBRUY7QUFwQk8sSzs7Ozs7NkJBdUJGLENBRVA7Ozs7RUE5Q21DLGVBQUthLEk7O2tCQUF0QjFCLFEiLCJmaWxlIjoic2hhcmVwYXkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IFRvYXN0IGZyb20gJ3dlcHktY29tLXRvYXN0J1xuICBpbXBvcnQgSW5mb0hlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL3NoYXJlaW5mb2hlYWRlcidcbiAgaW1wb3J0IHRlc3RNaXhpbiBmcm9tICcuLi9taXhpbnMvdGVzdCdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBQYXlJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG5cbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5pSv5LuY6aG1J1xuICAgIH1cbiAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiaW5mb0hlYWRlclwiOntcInRpdGxlXCI6XCJzaGFyZXBheVwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICBpbmZvSGVhZGVyOiBJbmZvSGVhZGVyXG4gICAgfVxuICAgIG1peGlucyA9IFt0ZXN0TWl4aW5dXG5cbiAgICBkYXRhID0ge1xuICAgICAgdXNlckluZm86IHtcbiAgICAgICAgbmlja05hbWU6JycsXG4gICAgICAgIGF2YXRhclVybDonJ1xuICAgICAgfSxcbiAgICAgIGRpc2FibGVkOmZhbHNlXG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIEp1bXBSZXBvcnQoKXtcblxuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6ICcvcGFnZXMvc2hhcmVyZXBvcnQ/aWQ9MSdcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBnb1hpZXlpKCl7XG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogJy9wYWdlcy9zaGFyZXhpZXlpJ1xuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIGNoZWNrYm94Q2hhbmdlKGUpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBpZiggZS5kZXRhaWwudmFsdWUubGVuZ3RoID09IDEgKXtcbiAgICAgICAgICBzZWxmLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgIHNlbGYuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBvbkxvYWQoKXtcblxuICAgIH1cbiAgfVxuIl19