'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wepyComToast = require('./../npm/wepy-com-toast/toast.js');

var _wepyComToast2 = _interopRequireDefault(_wepyComToast);

var _persongoinheader = require('./../components/persongoinheader.js');

var _persongoinheader2 = _interopRequireDefault(_persongoinheader);

var _test = require('./../mixins/test.js');

var _test2 = _interopRequireDefault(_test);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SharePerson = function (_wepy$page) {
  _inherits(SharePerson, _wepy$page);

  function SharePerson() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SharePerson);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SharePerson.__proto__ || Object.getPrototypeOf(SharePerson)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '读书完成页'
    }, _this.components = {
      goinheader: _persongoinheader2.default
    }, _this.mixins = [_test2.default], _this.data = {
      userInfo: {
        nickName: '',
        avatarUrl: ''
      },
      isShow: false,
      option: null,
      backTxt: null
    }, _this.methods = {
      goBackWeekPage: function goBackWeekPage() {
        wx.navigateBack({
          delta: 2
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SharePerson, [{
    key: 'onShareAppMessage',
    value: function onShareAppMessage(res) {
      if (res.from === 'button') {
        // 来自页面内转发按钮
        console.log(res.target);
      }
      return {
        title: '快来看我的读书',
        path: '/pages/shareperson',
        success: function success(res) {
          // 转发成功
        },
        fail: function fail(res) {
          // 转发失败
        }
      };
    }
  }, {
    key: 'onLoad',
    value: function onLoad(option) {
      var that = this;
      this.option = option;
      if (this.option.text == 1 || this.option.text == 2) {
        this.isShow = true;
      } else if (this.option.text == 3) {
        this.isShow = false;
      } else {}

      wx.getStorage({
        key: 'btnfromPage',
        success: function success(res) {
          if (res.data == 'education') {
            that.backTxt = '返回教务';
          } else {
            that.backTxt = '返回本周任务';
          }
        }
      });

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

  return SharePerson;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(SharePerson , 'pages/weekreadsuccess'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlZWtyZWFkc3VjY2Vzcy5qcyJdLCJuYW1lcyI6WyJTaGFyZVBlcnNvbiIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwiZ29pbmhlYWRlciIsIm1peGlucyIsImRhdGEiLCJ1c2VySW5mbyIsIm5pY2tOYW1lIiwiYXZhdGFyVXJsIiwiaXNTaG93Iiwib3B0aW9uIiwiYmFja1R4dCIsIm1ldGhvZHMiLCJnb0JhY2tXZWVrUGFnZSIsInd4IiwibmF2aWdhdGVCYWNrIiwiZGVsdGEiLCJyZXMiLCJmcm9tIiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsInRpdGxlIiwicGF0aCIsInN1Y2Nlc3MiLCJmYWlsIiwidGhhdCIsInRleHQiLCJnZXRTdG9yYWdlIiwia2V5Iiwic2VsZiIsImdldFVzZXJJbmZvIiwiJGFwcGx5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsVzs7Ozs7Ozs7Ozs7Ozs7Z01BRW5CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVEMsVSxHQUFhO0FBQ1hDO0FBRFcsSyxRQUliQyxNLEdBQVMsZ0IsUUFFVEMsSSxHQUFPO0FBQ0xDLGdCQUFVO0FBQ1JDLGtCQUFTLEVBREQ7QUFFUkMsbUJBQVU7QUFGRixPQURMO0FBS0xDLGNBQU8sS0FMRjtBQU1MQyxjQUFPLElBTkY7QUFPTEMsZUFBUTtBQVBILEssUUFVUEMsTyxHQUFVO0FBQ1JDLG9CQURRLDRCQUNRO0FBQ2RDLFdBQUdDLFlBQUgsQ0FBZ0I7QUFDZEMsaUJBQU87QUFETyxTQUFoQjtBQUdEO0FBTE8sSzs7Ozs7c0NBT1FDLEcsRUFBSTtBQUNwQixVQUFJQSxJQUFJQyxJQUFKLEtBQWEsUUFBakIsRUFBMkI7QUFDekI7QUFDQUMsZ0JBQVFDLEdBQVIsQ0FBWUgsSUFBSUksTUFBaEI7QUFDRDtBQUNELGFBQU87QUFDTEMsZUFBTyxTQURGO0FBRUxDLGNBQU0sb0JBRkQ7QUFHTEMsaUJBQVMsaUJBQVNQLEdBQVQsRUFBYztBQUNyQjtBQUNELFNBTEk7QUFNTFEsY0FBTSxjQUFTUixHQUFULEVBQWM7QUFDbEI7QUFDRDtBQVJJLE9BQVA7QUFVRDs7OzJCQUNNUCxNLEVBQU87QUFDWixVQUFJZ0IsT0FBTyxJQUFYO0FBQ0EsV0FBS2hCLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFVBQUksS0FBS0EsTUFBTCxDQUFZaUIsSUFBWixJQUFvQixDQUFwQixJQUF5QixLQUFLakIsTUFBTCxDQUFZaUIsSUFBWixJQUFvQixDQUFqRCxFQUFtRDtBQUNqRCxhQUFLbEIsTUFBTCxHQUFjLElBQWQ7QUFDRCxPQUZELE1BRU0sSUFBSSxLQUFLQyxNQUFMLENBQVlpQixJQUFaLElBQW9CLENBQXhCLEVBQTJCO0FBQy9CLGFBQUtsQixNQUFMLEdBQWMsS0FBZDtBQUNELE9BRkssTUFFRCxDQUFFOztBQUVQSyxTQUFHYyxVQUFILENBQWM7QUFDWkMsYUFBSyxhQURPO0FBRVpMLGlCQUFTLGlCQUFTUCxHQUFULEVBQWM7QUFDckIsY0FBSUEsSUFBSVosSUFBSixJQUFZLFdBQWhCLEVBQTZCO0FBQzNCcUIsaUJBQUtmLE9BQUwsR0FBZSxNQUFmO0FBQ0QsV0FGRCxNQUVLO0FBQ0hlLGlCQUFLZixPQUFMLEdBQWUsUUFBZjtBQUNEO0FBQ0Y7QUFSVyxPQUFkOztBQVdBLFVBQUltQixPQUFPLElBQVg7QUFDQWhCLFNBQUdpQixXQUFILENBQWU7QUFDYlAsaUJBQVMsaUJBQVNQLEdBQVQsRUFBYztBQUNyQixjQUFJWCxXQUFXVyxJQUFJWCxRQUFuQjtBQUNBLGNBQUlDLFdBQVdELFNBQVNDLFFBQXhCO0FBQ0EsY0FBSUMsWUFBWUYsU0FBU0UsU0FBekI7O0FBRUFzQixlQUFLeEIsUUFBTCxDQUFjQyxRQUFkLEdBQXlCQSxRQUF6QjtBQUNBdUIsZUFBS3hCLFFBQUwsQ0FBY0UsU0FBZCxHQUEwQkEsU0FBMUI7QUFDQXNCLGVBQUtFLE1BQUw7QUFDRDtBQVRZLE9BQWY7QUFXRDs7OztFQTdFc0MsZUFBS0MsSTs7a0JBQXpCbEMsVyIsImZpbGUiOiJ3ZWVrcmVhZHN1Y2Nlc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IFRvYXN0IGZyb20gJ3dlcHktY29tLXRvYXN0J1xuICBpbXBvcnQgZ29pbkhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL3BlcnNvbmdvaW5oZWFkZXInXG4gIGltcG9ydCB0ZXN0TWl4aW4gZnJvbSAnLi4vbWl4aW5zL3Rlc3QnXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hhcmVQZXJzb24gZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuXG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+ivu+S5puWujOaIkOmhtSdcbiAgICB9XG5cbiAgICBjb21wb25lbnRzID0ge1xuICAgICAgZ29pbmhlYWRlcjogZ29pbkhlYWRlcixcbiAgICB9XG5cbiAgICBtaXhpbnMgPSBbdGVzdE1peGluXVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIHVzZXJJbmZvOiB7XG4gICAgICAgIG5pY2tOYW1lOicnLFxuICAgICAgICBhdmF0YXJVcmw6JydcbiAgICAgIH0sXG4gICAgICBpc1Nob3c6ZmFsc2UsXG4gICAgICBvcHRpb246bnVsbCxcbiAgICAgIGJhY2tUeHQ6bnVsbFxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBnb0JhY2tXZWVrUGFnZSgpe1xuICAgICAgICB3eC5uYXZpZ2F0ZUJhY2soe1xuICAgICAgICAgIGRlbHRhOiAyXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICAgIG9uU2hhcmVBcHBNZXNzYWdlKHJlcyl7XG4gICAgICBpZiAocmVzLmZyb20gPT09ICdidXR0b24nKSB7XG4gICAgICAgIC8vIOadpeiHqumhtemdouWGhei9rOWPkeaMiemSrlxuICAgICAgICBjb25zb2xlLmxvZyhyZXMudGFyZ2V0KVxuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGl0bGU6ICflv6vmnaXnnIvmiJHnmoTor7vkuaYnLFxuICAgICAgICBwYXRoOiAnL3BhZ2VzL3NoYXJlcGVyc29uJyxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgLy8g6L2s5Y+R5oiQ5YqfXG4gICAgICAgIH0sXG4gICAgICAgIGZhaWw6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgIC8vIOi9rOWPkeWksei0pVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIG9uTG9hZChvcHRpb24pe1xuICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgdGhpcy5vcHRpb24gPSBvcHRpb247XG4gICAgICBpZiggdGhpcy5vcHRpb24udGV4dCA9PSAxIHx8IHRoaXMub3B0aW9uLnRleHQgPT0gMil7XG4gICAgICAgIHRoaXMuaXNTaG93ID0gdHJ1ZTtcbiAgICAgIH1lbHNlIGlmKCB0aGlzLm9wdGlvbi50ZXh0ID09IDMgKXtcbiAgICAgICAgdGhpcy5pc1Nob3cgPSBmYWxzZTtcbiAgICAgIH1lbHNle31cblxuICAgICAgd3guZ2V0U3RvcmFnZSh7XG4gICAgICAgIGtleTogJ2J0bmZyb21QYWdlJyxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgaWYoIHJlcy5kYXRhID09ICdlZHVjYXRpb24nICl7XG4gICAgICAgICAgICB0aGF0LmJhY2tUeHQgPSAn6L+U5Zue5pWZ5YqhJ1xuICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhhdC5iYWNrVHh0ID0gJ+i/lOWbnuacrOWRqOS7u+WKoSdcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgd3guZ2V0VXNlckluZm8oe1xuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICBsZXQgdXNlckluZm8gPSByZXMudXNlckluZm9cbiAgICAgICAgICBsZXQgbmlja05hbWUgPSB1c2VySW5mby5uaWNrTmFtZVxuICAgICAgICAgIGxldCBhdmF0YXJVcmwgPSB1c2VySW5mby5hdmF0YXJVcmxcblxuICAgICAgICAgIHNlbGYudXNlckluZm8ubmlja05hbWUgPSBuaWNrTmFtZTtcbiAgICAgICAgICBzZWxmLnVzZXJJbmZvLmF2YXRhclVybCA9IGF2YXRhclVybDtcbiAgICAgICAgICBzZWxmLiRhcHBseSgpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG4iXX0=