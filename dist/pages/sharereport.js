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

var PayReport = function (_wepy$page) {
  _inherits(PayReport, _wepy$page);

  function PayReport() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PayReport);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PayReport.__proto__ || Object.getPrototypeOf(PayReport)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '报到页'
    }, _this.$repeat = {}, _this.$props = { "infoHeader": { "title": "sharereport" } }, _this.$events = {}, _this.components = {
      infoHeader: _shareinfoheader2.default
    }, _this.mixins = [_test2.default], _this.data = {
      userInfo: {
        nickName: '',
        avatarUrl: ''
      },
      array: ['男', '女'],
      date: '请选择日期',
      fun_id: 2,
      time: '获取验证码', //倒计时
      currentTime: 61,
      interval: null,
      disabled: false,
      disabledBtn: false
    }, _this.methods = {
      bindPickerChange: function bindPickerChange(e) {
        this.index = e.detail.value;
      },
      getVerificationCode: function getVerificationCode() {
        var that = this;
        var currentTime = that.currentTime;
        that.interval = setInterval(function () {
          currentTime--;
          that.setData({
            time: currentTime + '秒'
          });
          if (currentTime <= 0) {
            clearInterval(that.interval);
            that.setData({
              time: '重新发送',
              currentTime: 61,
              disabled: false
            });
          }
        }, 1000);
        that.setData({
          disabled: true
        });
      },
      commitSucc: function commitSucc() {
        wx.navigateTo({
          url: '/pages/sharenondivision'
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PayReport, [{
    key: 'onLoad',
    value: function onLoad() {

      var self = this;

      wx.getUserInfo({
        success: function success(res) {
          var userInfo = res.userInfo;
          var nickName = userInfo.nickName;
          var avatarUrl = userInfo.avatarUrl;

          self.userInfo.nickName = nickName;
          self.userInfo.avatarUrl = avatarUrl;
          self.$apply();
        }
      });
    }
  }]);

  return PayReport;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(PayReport , 'pages/sharereport'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlcmVwb3J0LmpzIl0sIm5hbWVzIjpbIlBheVJlcG9ydCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJpbmZvSGVhZGVyIiwibWl4aW5zIiwiZGF0YSIsInVzZXJJbmZvIiwibmlja05hbWUiLCJhdmF0YXJVcmwiLCJhcnJheSIsImRhdGUiLCJmdW5faWQiLCJ0aW1lIiwiY3VycmVudFRpbWUiLCJpbnRlcnZhbCIsImRpc2FibGVkIiwiZGlzYWJsZWRCdG4iLCJtZXRob2RzIiwiYmluZFBpY2tlckNoYW5nZSIsImUiLCJpbmRleCIsImRldGFpbCIsInZhbHVlIiwiZ2V0VmVyaWZpY2F0aW9uQ29kZSIsInRoYXQiLCJzZXRJbnRlcnZhbCIsInNldERhdGEiLCJjbGVhckludGVydmFsIiwiY29tbWl0U3VjYyIsInd4IiwibmF2aWdhdGVUbyIsInVybCIsInNlbGYiLCJnZXRVc2VySW5mbyIsInN1Y2Nlc3MiLCJyZXMiLCIkYXBwbHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFRTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxTOzs7Ozs7Ozs7Ozs7Ozs0TEFFbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlWQyxPLEdBQVUsRSxRQUNiQyxNLEdBQVMsRUFBQyxjQUFhLEVBQUMsU0FBUSxhQUFULEVBQWQsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDUkM7QUFEUSxLLFFBSVZDLE0sR0FBUyxnQixRQUVUQyxJLEdBQU87QUFDTEMsZ0JBQVU7QUFDUkMsa0JBQVMsRUFERDtBQUVSQyxtQkFBVTtBQUZGLE9BREw7QUFLTEMsYUFBTSxDQUFDLEdBQUQsRUFBTSxHQUFOLENBTEQ7QUFNTEMsWUFBSyxPQU5BO0FBT0xDLGNBQU8sQ0FQRjtBQVFMQyxZQUFNLE9BUkQsRUFRVTtBQUNmQyxtQkFBWSxFQVRQO0FBVUxDLGdCQUFTLElBVko7QUFXTEMsZ0JBQVUsS0FYTDtBQVlMQyxtQkFBYTtBQVpSLEssUUFlUEMsTyxHQUFVO0FBQ1JDLHNCQURRLDRCQUNTQyxDQURULEVBQ1k7QUFDbEIsYUFBS0MsS0FBTCxHQUFjRCxFQUFFRSxNQUFGLENBQVNDLEtBQXZCO0FBQ0QsT0FITztBQUlSQyx5QkFKUSxpQ0FJYTtBQUNuQixZQUFJQyxPQUFPLElBQVg7QUFDQSxZQUFJWCxjQUFjVyxLQUFLWCxXQUF2QjtBQUNBVyxhQUFLVixRQUFMLEdBQWdCVyxZQUFZLFlBQVk7QUFDdENaO0FBQ0FXLGVBQUtFLE9BQUwsQ0FBYTtBQUNYZCxrQkFBTUMsY0FBWTtBQURQLFdBQWI7QUFHQSxjQUFJQSxlQUFlLENBQW5CLEVBQXNCO0FBQ3BCYywwQkFBY0gsS0FBS1YsUUFBbkI7QUFDQVUsaUJBQUtFLE9BQUwsQ0FBYTtBQUNYZCxvQkFBTSxNQURLO0FBRVhDLDJCQUFZLEVBRkQ7QUFHWEUsd0JBQVU7QUFIQyxhQUFiO0FBS0Q7QUFDRixTQWJlLEVBYWIsSUFiYSxDQUFoQjtBQWNBUyxhQUFLRSxPQUFMLENBQWE7QUFDWFgsb0JBQVM7QUFERSxTQUFiO0FBR0QsT0F4Qk87QUF5QlJhLGdCQXpCUSx3QkF5Qkk7QUFDVkMsV0FBR0MsVUFBSCxDQUFjO0FBQ1pDLGVBQUs7QUFETyxTQUFkO0FBR0Q7QUE3Qk8sSzs7Ozs7NkJBK0JGOztBQUVOLFVBQUlDLE9BQU8sSUFBWDs7QUFFQUgsU0FBR0ksV0FBSCxDQUFlO0FBQ2JDLGlCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckIsY0FBSTdCLFdBQVc2QixJQUFJN0IsUUFBbkI7QUFDQSxjQUFJQyxXQUFXRCxTQUFTQyxRQUF4QjtBQUNBLGNBQUlDLFlBQVlGLFNBQVNFLFNBQXpCOztBQUVBd0IsZUFBSzFCLFFBQUwsQ0FBY0MsUUFBZCxHQUF5QkEsUUFBekI7QUFDQXlCLGVBQUsxQixRQUFMLENBQWNFLFNBQWQsR0FBMEJBLFNBQTFCO0FBQ0F3QixlQUFLSSxNQUFMO0FBQ0Q7QUFUWSxPQUFmO0FBV0Q7Ozs7RUE1RW9DLGVBQUtDLEk7O2tCQUF2QnpDLFMiLCJmaWxlIjoic2hhcmVyZXBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgSW5mb0hlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL3NoYXJlaW5mb2hlYWRlcidcbiAgaW1wb3J0IFRvYXN0IGZyb20gJ3dlcHktY29tLXRvYXN0J1xuICBpbXBvcnQgdGVzdE1peGluIGZyb20gJy4uL21peGlucy90ZXN0J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFBheVJlcG9ydCBleHRlbmRzIHdlcHkucGFnZSB7XG5cbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5oql5Yiw6aG1J1xuICAgIH1cblxuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJpbmZvSGVhZGVyXCI6e1widGl0bGVcIjpcInNoYXJlcmVwb3J0XCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgIGluZm9IZWFkZXI6IEluZm9IZWFkZXJcbiAgICB9XG5cbiAgICBtaXhpbnMgPSBbdGVzdE1peGluXVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIHVzZXJJbmZvOiB7XG4gICAgICAgIG5pY2tOYW1lOicnLFxuICAgICAgICBhdmF0YXJVcmw6JydcbiAgICAgIH0sXG4gICAgICBhcnJheTpbJ+eUtycsICflpbMnXSxcbiAgICAgIGRhdGU6J+ivt+mAieaLqeaXpeacnycsXG4gICAgICBmdW5faWQ6MixcbiAgICAgIHRpbWU6ICfojrflj5bpqozor4HnoIEnLCAvL+WAkuiuoeaXtlxuICAgICAgY3VycmVudFRpbWU6NjEsXG4gICAgICBpbnRlcnZhbDpudWxsLFxuICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgZGlzYWJsZWRCdG46IGZhbHNlXG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIGJpbmRQaWNrZXJDaGFuZ2UoZSkge1xuICAgICAgICB0aGlzLmluZGV4ICA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICB9LFxuICAgICAgZ2V0VmVyaWZpY2F0aW9uQ29kZSgpe1xuICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICAgIHZhciBjdXJyZW50VGltZSA9IHRoYXQuY3VycmVudFRpbWVcbiAgICAgICAgdGhhdC5pbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBjdXJyZW50VGltZS0tO1xuICAgICAgICAgIHRoYXQuc2V0RGF0YSh7XG4gICAgICAgICAgICB0aW1lOiBjdXJyZW50VGltZSsn56eSJ1xuICAgICAgICAgIH0pXG4gICAgICAgICAgaWYgKGN1cnJlbnRUaW1lIDw9IDApIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhhdC5pbnRlcnZhbClcbiAgICAgICAgICAgIHRoYXQuc2V0RGF0YSh7XG4gICAgICAgICAgICAgIHRpbWU6ICfph43mlrDlj5HpgIEnLFxuICAgICAgICAgICAgICBjdXJyZW50VGltZTo2MSxcbiAgICAgICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSwgMTAwMClcbiAgICAgICAgdGhhdC5zZXREYXRhKHtcbiAgICAgICAgICBkaXNhYmxlZDp0cnVlXG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgY29tbWl0U3VjYygpe1xuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6ICcvcGFnZXMvc2hhcmVub25kaXZpc2lvbidcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gICAgb25Mb2FkKCl7XG5cbiAgICAgIGxldCBzZWxmID0gdGhpc1xuXG4gICAgICB3eC5nZXRVc2VySW5mbyh7XG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgIGxldCB1c2VySW5mbyA9IHJlcy51c2VySW5mb1xuICAgICAgICAgIGxldCBuaWNrTmFtZSA9IHVzZXJJbmZvLm5pY2tOYW1lXG4gICAgICAgICAgbGV0IGF2YXRhclVybCA9IHVzZXJJbmZvLmF2YXRhclVybFxuXG4gICAgICAgICAgc2VsZi51c2VySW5mby5uaWNrTmFtZSA9IG5pY2tOYW1lO1xuICAgICAgICAgIHNlbGYudXNlckluZm8uYXZhdGFyVXJsID0gYXZhdGFyVXJsO1xuICAgICAgICAgIHNlbGYuJGFwcGx5KClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cbiJdfQ==