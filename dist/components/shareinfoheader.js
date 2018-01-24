'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import abc from 'abc'

var Infoheader = function (_wepy$component) {
  _inherits(Infoheader, _wepy$component);

  function Infoheader() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Infoheader);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Infoheader.__proto__ || Object.getPrototypeOf(Infoheader)).call.apply(_ref, [this].concat(args))), _this), _this.props = ["title"], _this.data = {
      userInfo: {
        nickName: '',
        avatarUrl: ''
      },
      payimg: ['/images/startschool/fufei@3x.png', '/images/startschool/weibaoming@3x.png', '/images/startschool/weifenban@3x.png', '/images/startschool/weikaixue@3x.png']
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Infoheader, [{
    key: 'onLoad',
    value: function onLoad() {

      var self = this;
      if (self.title == 'sharereport') {
        self.payimg[1] = '/images/startschool/baoming@3x.png';
      } else if (self.title == 'sharenondivision') {
        self.payimg[1] = '/images/startschool/baoming@3x.png';
        self.payimg[2] = '/images/startschool/fenban@3x.png';
      } else if (self.title == 'sharetermbegins') {
        self.payimg[1] = '/images/startschool/baoming@3x.png';
        self.payimg[2] = '/images/startschool/fenban@3x.png';
        self.payimg[3] = '/images/startschool/kaixue@3x.png';
      }

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

  return Infoheader;
}(_wepy2.default.component);

exports.default = Infoheader;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlaW5mb2hlYWRlci5qcyJdLCJuYW1lcyI6WyJJbmZvaGVhZGVyIiwicHJvcHMiLCJkYXRhIiwidXNlckluZm8iLCJuaWNrTmFtZSIsImF2YXRhclVybCIsInBheWltZyIsInNlbGYiLCJ0aXRsZSIsInd4IiwiZ2V0VXNlckluZm8iLCJzdWNjZXNzIiwicmVzIiwiJGFwcGx5IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0FBQ0E7O0lBRXFCQSxVOzs7Ozs7Ozs7Ozs7Ozs4TEFDbkJDLEssR0FBUSxDQUFDLE9BQUQsQyxRQUVSQyxJLEdBQU87QUFDTEMsZ0JBQVU7QUFDUkMsa0JBQVMsRUFERDtBQUVSQyxtQkFBVTtBQUZGLE9BREw7QUFLTEMsY0FBTyxDQUNMLGtDQURLLEVBRUwsdUNBRkssRUFHTCxzQ0FISyxFQUlMLHNDQUpLO0FBTEYsSzs7Ozs7NkJBYUM7O0FBRU4sVUFBSUMsT0FBTyxJQUFYO0FBQ0EsVUFBSUEsS0FBS0MsS0FBTCxJQUFjLGFBQWxCLEVBQWlDO0FBQy9CRCxhQUFLRCxNQUFMLENBQVksQ0FBWixJQUFpQixvQ0FBakI7QUFDRCxPQUZELE1BRU0sSUFBSUMsS0FBS0MsS0FBTCxJQUFjLGtCQUFsQixFQUFzQztBQUMxQ0QsYUFBS0QsTUFBTCxDQUFZLENBQVosSUFBaUIsb0NBQWpCO0FBQ0FDLGFBQUtELE1BQUwsQ0FBWSxDQUFaLElBQWlCLG1DQUFqQjtBQUNELE9BSEssTUFHQSxJQUFJQyxLQUFLQyxLQUFMLElBQWMsaUJBQWxCLEVBQXFDO0FBQ3pDRCxhQUFLRCxNQUFMLENBQVksQ0FBWixJQUFpQixvQ0FBakI7QUFDQUMsYUFBS0QsTUFBTCxDQUFZLENBQVosSUFBaUIsbUNBQWpCO0FBQ0FDLGFBQUtELE1BQUwsQ0FBWSxDQUFaLElBQWlCLG1DQUFqQjtBQUNEOztBQUVERyxTQUFHQyxXQUFILENBQWU7QUFDYkMsaUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQixjQUFJVCxXQUFXUyxJQUFJVCxRQUFuQjtBQUNBLGNBQUlDLFdBQVdELFNBQVNDLFFBQXhCO0FBQ0EsY0FBSUMsWUFBWUYsU0FBU0UsU0FBekI7O0FBRUFFLGVBQUtKLFFBQUwsQ0FBY0MsUUFBZCxHQUF5QkEsUUFBekI7QUFDQUcsZUFBS0osUUFBTCxDQUFjRSxTQUFkLEdBQTBCQSxTQUExQjtBQUNBRSxlQUFLTSxNQUFMO0FBQ0Q7QUFUWSxPQUFmO0FBV0Q7Ozs7RUF6Q3FDLGVBQUtDLFM7O2tCQUF4QmQsVSIsImZpbGUiOiJzaGFyZWluZm9oZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgLy8gaW1wb3J0IGFiYyBmcm9tICdhYmMnXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5mb2hlYWRlciBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICBwcm9wcyA9IFtcInRpdGxlXCJdXG5cbiAgICBkYXRhID0ge1xuICAgICAgdXNlckluZm86IHtcbiAgICAgICAgbmlja05hbWU6JycsXG4gICAgICAgIGF2YXRhclVybDonJ1xuICAgICAgfSxcbiAgICAgIHBheWltZzpbXG4gICAgICAgICcvaW1hZ2VzL3N0YXJ0c2Nob29sL2Z1ZmVpQDN4LnBuZycsXG4gICAgICAgICcvaW1hZ2VzL3N0YXJ0c2Nob29sL3dlaWJhb21pbmdAM3gucG5nJyxcbiAgICAgICAgJy9pbWFnZXMvc3RhcnRzY2hvb2wvd2VpZmVuYmFuQDN4LnBuZycsXG4gICAgICAgICcvaW1hZ2VzL3N0YXJ0c2Nob29sL3dlaWthaXh1ZUAzeC5wbmcnLFxuICAgICAgXVxuICAgIH1cblxuICAgIG9uTG9hZCgpe1xuXG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGlmKCBzZWxmLnRpdGxlID09ICdzaGFyZXJlcG9ydCcgKXtcbiAgICAgICAgc2VsZi5wYXlpbWdbMV0gPSAnL2ltYWdlcy9zdGFydHNjaG9vbC9iYW9taW5nQDN4LnBuZydcbiAgICAgIH1lbHNlIGlmKCBzZWxmLnRpdGxlID09ICdzaGFyZW5vbmRpdmlzaW9uJyApe1xuICAgICAgICBzZWxmLnBheWltZ1sxXSA9ICcvaW1hZ2VzL3N0YXJ0c2Nob29sL2Jhb21pbmdAM3gucG5nJ1xuICAgICAgICBzZWxmLnBheWltZ1syXSA9ICcvaW1hZ2VzL3N0YXJ0c2Nob29sL2ZlbmJhbkAzeC5wbmcnXG4gICAgICB9ZWxzZSBpZiggc2VsZi50aXRsZSA9PSAnc2hhcmV0ZXJtYmVnaW5zJyApe1xuICAgICAgICBzZWxmLnBheWltZ1sxXSA9ICcvaW1hZ2VzL3N0YXJ0c2Nob29sL2Jhb21pbmdAM3gucG5nJ1xuICAgICAgICBzZWxmLnBheWltZ1syXSA9ICcvaW1hZ2VzL3N0YXJ0c2Nob29sL2ZlbmJhbkAzeC5wbmcnXG4gICAgICAgIHNlbGYucGF5aW1nWzNdID0gJy9pbWFnZXMvc3RhcnRzY2hvb2wva2FpeHVlQDN4LnBuZydcbiAgICAgIH1cblxuICAgICAgd3guZ2V0VXNlckluZm8oe1xuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICBsZXQgdXNlckluZm8gPSByZXMudXNlckluZm9cbiAgICAgICAgICBsZXQgbmlja05hbWUgPSB1c2VySW5mby5uaWNrTmFtZVxuICAgICAgICAgIGxldCBhdmF0YXJVcmwgPSB1c2VySW5mby5hdmF0YXJVcmxcblxuICAgICAgICAgIHNlbGYudXNlckluZm8ubmlja05hbWUgPSBuaWNrTmFtZTtcbiAgICAgICAgICBzZWxmLnVzZXJJbmZvLmF2YXRhclVybCA9IGF2YXRhclVybDtcbiAgICAgICAgICBzZWxmLiRhcHBseSgpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICAgIH1cbiJdfQ==