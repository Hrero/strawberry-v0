'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _readaycount = require('./readaycount.js');

var _readaycount2 = _interopRequireDefault(_readaycount);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import abc from 'abc'

var goinheader = function (_wepy$component) {
  _inherits(goinheader, _wepy$component);

  function goinheader() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, goinheader);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = goinheader.__proto__ || Object.getPrototypeOf(goinheader)).call.apply(_ref, [this].concat(args))), _this), _this.components = {
      readaycount: _readaycount2.default
    }, _this.data = {
      userInfo: {
        nickName: '',
        avatarUrl: ''
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(goinheader, [{
    key: 'onLoad',
    value: function onLoad() {

      var self = this;
      //      console.log(this.$parent)
      //      this.$parent.getUserInfo(function (userInfo) {
      //        if (userInfo) {
      //          self.userInfo = userInfo
      //        }
      //        self.$apply()
      //      })
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

  return goinheader;
}(_wepy2.default.component);

exports.default = goinheader;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcnNvbmdvaW5oZWFkZXIuanMiXSwibmFtZXMiOlsiZ29pbmhlYWRlciIsImNvbXBvbmVudHMiLCJyZWFkYXljb3VudCIsImRhdGEiLCJ1c2VySW5mbyIsIm5pY2tOYW1lIiwiYXZhdGFyVXJsIiwic2VsZiIsInd4IiwiZ2V0VXNlckluZm8iLCJzdWNjZXNzIiwicmVzIiwiJGFwcGx5IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFDQTs7SUFFcUJBLFU7Ozs7Ozs7Ozs7Ozs7OzhMQUduQkMsVSxHQUFhO0FBQ1hDO0FBRFcsSyxRQUliQyxJLEdBQU87QUFDTEMsZ0JBQVU7QUFDUkMsa0JBQVMsRUFERDtBQUVSQyxtQkFBVTtBQUZGO0FBREwsSzs7Ozs7NkJBTUM7O0FBRU4sVUFBSUMsT0FBTyxJQUFYO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTUMsU0FBR0MsV0FBSCxDQUFlO0FBQ2JDLGlCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckIsY0FBSVAsV0FBV08sSUFBSVAsUUFBbkI7QUFDQSxjQUFJQyxXQUFXRCxTQUFTQyxRQUF4QjtBQUNBLGNBQUlDLFlBQVlGLFNBQVNFLFNBQXpCOztBQUVBQyxlQUFLSCxRQUFMLENBQWNDLFFBQWQsR0FBeUJBLFFBQXpCO0FBQ0FFLGVBQUtILFFBQUwsQ0FBY0UsU0FBZCxHQUEwQkEsU0FBMUI7QUFDQUMsZUFBS0ssTUFBTDtBQUNEO0FBVFksT0FBZjtBQVdEOzs7O0VBbENxQyxlQUFLQyxTOztrQkFBeEJiLFUiLCJmaWxlIjoicGVyc29uZ29pbmhlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgcmVhZGF5Y291bnQgZnJvbSAnLi4vY29tcG9uZW50cy9yZWFkYXljb3VudCdcbiAgLy8gaW1wb3J0IGFiYyBmcm9tICdhYmMnXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgZ29pbmhlYWRlciBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcblxuXG4gICAgY29tcG9uZW50cyA9IHtcbiAgICAgIHJlYWRheWNvdW50OnJlYWRheWNvdW50XG4gICAgfVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIHVzZXJJbmZvOiB7XG4gICAgICAgIG5pY2tOYW1lOicnLFxuICAgICAgICBhdmF0YXJVcmw6JydcbiAgICAgIH1cbiAgICB9XG4gICAgb25Mb2FkKCl7XG5cbiAgICAgIGxldCBzZWxmID0gdGhpc1xuLy8gICAgICBjb25zb2xlLmxvZyh0aGlzLiRwYXJlbnQpXG4vLyAgICAgIHRoaXMuJHBhcmVudC5nZXRVc2VySW5mbyhmdW5jdGlvbiAodXNlckluZm8pIHtcbi8vICAgICAgICBpZiAodXNlckluZm8pIHtcbi8vICAgICAgICAgIHNlbGYudXNlckluZm8gPSB1c2VySW5mb1xuLy8gICAgICAgIH1cbi8vICAgICAgICBzZWxmLiRhcHBseSgpXG4vLyAgICAgIH0pXG4gICAgICB3eC5nZXRVc2VySW5mbyh7XG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgIGxldCB1c2VySW5mbyA9IHJlcy51c2VySW5mb1xuICAgICAgICAgIGxldCBuaWNrTmFtZSA9IHVzZXJJbmZvLm5pY2tOYW1lXG4gICAgICAgICAgbGV0IGF2YXRhclVybCA9IHVzZXJJbmZvLmF2YXRhclVybFxuXG4gICAgICAgICAgc2VsZi51c2VySW5mby5uaWNrTmFtZSA9IG5pY2tOYW1lO1xuICAgICAgICAgIHNlbGYudXNlckluZm8uYXZhdGFyVXJsID0gYXZhdGFyVXJsO1xuICAgICAgICAgIHNlbGYuJGFwcGx5KClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cbiJdfQ==