'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wepyComToast = require('./../npm/wepy-com-toast/toast.js');

var _wepyComToast2 = _interopRequireDefault(_wepyComToast);

var _readaycount = require('./../components/readaycount.js');

var _readaycount2 = _interopRequireDefault(_readaycount);

var _test = require('./../mixins/test.js');

var _test2 = _interopRequireDefault(_test);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Personcenter = function (_wepy$page) {
  _inherits(Personcenter, _wepy$page);

  function Personcenter() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Personcenter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Personcenter.__proto__ || Object.getPrototypeOf(Personcenter)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '个人中心'
    }, _this.components = {
      readaycount: _readaycount2.default
    }, _this.mixins = [_test2.default], _this.data = {
      userInfo: {
        nickName: '',
        avatarUrl: ''
      }
    }, _this.methods = {
      goxuefen: function goxuefen() {
        wx.navigateTo({
          url: '/pages/personalweekmark'
        });
      },
      goplan: function goplan() {
        wx.navigateTo({
          url: '/pages/personalstudyplan'
        });
      },
      goenchiridion: function goenchiridion() {
        wx.navigateTo({
          url: '/pages/personalenchiridion'
        });
      },
      goinvitefriends: function goinvitefriends() {
        wx.navigateTo({
          url: '/pages/shareInviting'
        });
      },
      gofeedBack: function gofeedBack() {
        wx.navigateTo({
          url: '/pages/personalfeedback'
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Personcenter, [{
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

  return Personcenter;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Personcenter , 'pages/personalcenter'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcnNvbmFsY2VudGVyLmpzIl0sIm5hbWVzIjpbIlBlcnNvbmNlbnRlciIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwicmVhZGF5Y291bnQiLCJtaXhpbnMiLCJkYXRhIiwidXNlckluZm8iLCJuaWNrTmFtZSIsImF2YXRhclVybCIsIm1ldGhvZHMiLCJnb3h1ZWZlbiIsInd4IiwibmF2aWdhdGVUbyIsInVybCIsImdvcGxhbiIsImdvZW5jaGlyaWRpb24iLCJnb2ludml0ZWZyaWVuZHMiLCJnb2ZlZWRCYWNrIiwic2VsZiIsImdldFVzZXJJbmZvIiwic3VjY2VzcyIsInJlcyIsIiRhcHBseSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFk7Ozs7Ozs7Ozs7Ozs7O2tNQUVuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBSVRDLFUsR0FBYTtBQUNYQztBQURXLEssUUFJYkMsTSxHQUFTLGdCLFFBRVRDLEksR0FBTztBQUNMQyxnQkFBVTtBQUNSQyxrQkFBUyxFQUREO0FBRVJDLG1CQUFVO0FBRkY7QUFETCxLLFFBT1BDLE8sR0FBVTtBQUNSQyxjQURRLHNCQUNFO0FBQ1JDLFdBQUdDLFVBQUgsQ0FBYztBQUNaQyxlQUFLO0FBRE8sU0FBZDtBQUdELE9BTE87QUFNUkMsWUFOUSxvQkFNQTtBQUNOSCxXQUFHQyxVQUFILENBQWM7QUFDWkMsZUFBSztBQURPLFNBQWQ7QUFHRCxPQVZPO0FBV1JFLG1CQVhRLDJCQVdPO0FBQ1hKLFdBQUdDLFVBQUgsQ0FBYztBQUNWQyxlQUFJO0FBRE0sU0FBZDtBQUdILE9BZk87QUFnQlJHLHFCQWhCUSw2QkFnQlM7QUFDZkwsV0FBR0MsVUFBSCxDQUFjO0FBQ1pDLGVBQUk7QUFEUSxTQUFkO0FBR0QsT0FwQk87QUFxQlJJLGdCQXJCUSx3QkFxQkk7QUFDVk4sV0FBR0MsVUFBSCxDQUFjO0FBQ1pDLGVBQUk7QUFEUSxTQUFkO0FBR0Q7QUF6Qk8sSzs7Ozs7NkJBMkJGOztBQUVOLFVBQUlLLE9BQU8sSUFBWDtBQUNBUCxTQUFHUSxXQUFILENBQWU7QUFDYkMsaUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQixjQUFJZixXQUFXZSxJQUFJZixRQUFuQjtBQUNBLGNBQUlDLFdBQVdELFNBQVNDLFFBQXhCO0FBQ0EsY0FBSUMsWUFBWUYsU0FBU0UsU0FBekI7O0FBRUFVLGVBQUtaLFFBQUwsQ0FBY0MsUUFBZCxHQUF5QkEsUUFBekI7QUFDQVcsZUFBS1osUUFBTCxDQUFjRSxTQUFkLEdBQTBCQSxTQUExQjtBQUNBVSxlQUFLSSxNQUFMO0FBRUQ7QUFWWSxPQUFmO0FBWUQ7Ozs7RUE3RHVDLGVBQUtDLEk7O2tCQUExQnhCLFkiLCJmaWxlIjoicGVyc29uYWxjZW50ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IFRvYXN0IGZyb20gJ3dlcHktY29tLXRvYXN0J1xuICBpbXBvcnQgcmVhZGF5Y291bnQgZnJvbSAnLi4vY29tcG9uZW50cy9yZWFkYXljb3VudCdcbiAgaW1wb3J0IHRlc3RNaXhpbiBmcm9tICcuLi9taXhpbnMvdGVzdCdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBQZXJzb25jZW50ZXIgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuXG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+S4quS6uuS4reW/gydcbiAgICB9XG5cbiAgICBjb21wb25lbnRzID0ge1xuICAgICAgcmVhZGF5Y291bnQ6IHJlYWRheWNvdW50XG4gICAgfVxuXG4gICAgbWl4aW5zID0gW3Rlc3RNaXhpbl1cblxuICAgIGRhdGEgPSB7XG4gICAgICB1c2VySW5mbzoge1xuICAgICAgICBuaWNrTmFtZTonJyxcbiAgICAgICAgYXZhdGFyVXJsOicnXG4gICAgICB9XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIGdveHVlZmVuKCl7XG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogJy9wYWdlcy9wZXJzb25hbHdlZWttYXJrJ1xuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIGdvcGxhbigpe1xuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6ICcvcGFnZXMvcGVyc29uYWxzdHVkeXBsYW4nXG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgZ29lbmNoaXJpZGlvbigpe1xuICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICB1cmw6Jy9wYWdlcy9wZXJzb25hbGVuY2hpcmlkaW9uJ1xuICAgICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgZ29pbnZpdGVmcmllbmRzKCl7XG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDonL3BhZ2VzL3NoYXJlSW52aXRpbmcnXG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgZ29mZWVkQmFjaygpe1xuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6Jy9wYWdlcy9wZXJzb25hbGZlZWRiYWNrJ1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgICBvbkxvYWQoKXtcblxuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICB3eC5nZXRVc2VySW5mbyh7XG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgIGxldCB1c2VySW5mbyA9IHJlcy51c2VySW5mb1xuICAgICAgICAgIGxldCBuaWNrTmFtZSA9IHVzZXJJbmZvLm5pY2tOYW1lXG4gICAgICAgICAgbGV0IGF2YXRhclVybCA9IHVzZXJJbmZvLmF2YXRhclVybFxuXG4gICAgICAgICAgc2VsZi51c2VySW5mby5uaWNrTmFtZSA9IG5pY2tOYW1lO1xuICAgICAgICAgIHNlbGYudXNlckluZm8uYXZhdGFyVXJsID0gYXZhdGFyVXJsO1xuICAgICAgICAgIHNlbGYuJGFwcGx5KClcblxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuIl19