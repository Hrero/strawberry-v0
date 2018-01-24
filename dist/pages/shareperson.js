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
      navigationBarTitleText: '新用户分享进来页'
    }, _this.components = {
      goinheader: _persongoinheader2.default
    }, _this.mixins = [_test2.default], _this.data = {
      userInfo: {
        nickName: '',
        avatarUrl: ''
      }
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SharePerson, [{
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

  return SharePerson;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(SharePerson , 'pages/shareperson'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlcGVyc29uLmpzIl0sIm5hbWVzIjpbIlNoYXJlUGVyc29uIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJnb2luaGVhZGVyIiwibWl4aW5zIiwiZGF0YSIsInVzZXJJbmZvIiwibmlja05hbWUiLCJhdmF0YXJVcmwiLCJtZXRob2RzIiwic2VsZiIsInd4IiwiZ2V0VXNlckluZm8iLCJzdWNjZXNzIiwicmVzIiwiJGFwcGx5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsVzs7Ozs7Ozs7Ozs7Ozs7Z01BRW5CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVEMsVSxHQUFhO0FBQ1hDO0FBRFcsSyxRQUliQyxNLEdBQVMsZ0IsUUFFVEMsSSxHQUFPO0FBQ0xDLGdCQUFVO0FBQ1JDLGtCQUFTLEVBREQ7QUFFUkMsbUJBQVU7QUFGRjtBQURMLEssUUFPUEMsTyxHQUFVLEU7Ozs7OzZCQUdGOztBQUVOLFVBQUlDLE9BQU8sSUFBWDtBQUNBQyxTQUFHQyxXQUFILENBQWU7QUFDYkMsaUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQixjQUFJUixXQUFXUSxJQUFJUixRQUFuQjtBQUNBLGNBQUlDLFdBQVdELFNBQVNDLFFBQXhCO0FBQ0EsY0FBSUMsWUFBWUYsU0FBU0UsU0FBekI7O0FBRUFFLGVBQUtKLFFBQUwsQ0FBY0MsUUFBZCxHQUF5QkEsUUFBekI7QUFDQUcsZUFBS0osUUFBTCxDQUFjRSxTQUFkLEdBQTBCQSxTQUExQjtBQUNBRSxlQUFLSyxNQUFMO0FBRUQ7QUFWWSxPQUFmO0FBWUQ7Ozs7RUFyQ3NDLGVBQUtDLEk7O2tCQUF6QmpCLFciLCJmaWxlIjoic2hhcmVwZXJzb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IFRvYXN0IGZyb20gJ3dlcHktY29tLXRvYXN0J1xuICBpbXBvcnQgZ29pbkhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL3BlcnNvbmdvaW5oZWFkZXInXG4gIGltcG9ydCB0ZXN0TWl4aW4gZnJvbSAnLi4vbWl4aW5zL3Rlc3QnXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hhcmVQZXJzb24gZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuXG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aWsOeUqOaIt+WIhuS6q+i/m+adpemhtSdcbiAgICB9XG5cbiAgICBjb21wb25lbnRzID0ge1xuICAgICAgZ29pbmhlYWRlcjogZ29pbkhlYWRlcixcbiAgICB9XG5cbiAgICBtaXhpbnMgPSBbdGVzdE1peGluXVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIHVzZXJJbmZvOiB7XG4gICAgICAgIG5pY2tOYW1lOicnLFxuICAgICAgICBhdmF0YXJVcmw6JydcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuXG4gICAgfVxuICAgIG9uTG9hZCgpe1xuXG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHd4LmdldFVzZXJJbmZvKHtcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgbGV0IHVzZXJJbmZvID0gcmVzLnVzZXJJbmZvXG4gICAgICAgICAgbGV0IG5pY2tOYW1lID0gdXNlckluZm8ubmlja05hbWVcbiAgICAgICAgICBsZXQgYXZhdGFyVXJsID0gdXNlckluZm8uYXZhdGFyVXJsXG5cbiAgICAgICAgICBzZWxmLnVzZXJJbmZvLm5pY2tOYW1lID0gbmlja05hbWU7XG4gICAgICAgICAgc2VsZi51c2VySW5mby5hdmF0YXJVcmwgPSBhdmF0YXJVcmw7XG4gICAgICAgICAgc2VsZi4kYXBwbHkoKVxuXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG4iXX0=