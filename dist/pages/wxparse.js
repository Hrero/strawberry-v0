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

var _wxParse = require('./../wxParse/wxParse.js');

var _wxParse2 = _interopRequireDefault(_wxParse);

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
      navigationBarTitleText: '测试页'
    }, _this.components = {
      goinheader: _persongoinheader2.default
    }, _this.mixins = [_test2.default], _this.data = {
      userInfo: {
        nickName: '',
        avatarUrl: ''
      },
      isShow: false
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SharePerson, [{
    key: 'onLoad',
    value: function onLoad() {

      var article = '<div style="color:red">我是<br>HTML代码</div>';
      /**
       * WxParse.wxParse(bindName , type, data, target,imagePadding)
       * 1.bindName绑定的数据名(必填)
       * 2.type可以为html或者md(必填)
       * 3.data为传入的具体数据(必填)
       * 4.target为Page对象,一般为this(必填)
       * 5.imagePadding为当图片自适应是左右的单一padding(默认为0,可选)
       */
      var that = this;
      _wxParse2.default.wxParse('article', 'html', article, that, 5);
    }
  }]);

  return SharePerson;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(SharePerson , 'pages/wxparse'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInd4cGFyc2UuanMiXSwibmFtZXMiOlsiU2hhcmVQZXJzb24iLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsImdvaW5oZWFkZXIiLCJtaXhpbnMiLCJkYXRhIiwidXNlckluZm8iLCJuaWNrTmFtZSIsImF2YXRhclVybCIsImlzU2hvdyIsIm1ldGhvZHMiLCJhcnRpY2xlIiwidGhhdCIsInd4UGFyc2UiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFRTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFc7Ozs7Ozs7Ozs7Ozs7O2dNQUVuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBSVRDLFUsR0FBYTtBQUNYQztBQURXLEssUUFJYkMsTSxHQUFTLGdCLFFBRVRDLEksR0FBTztBQUNMQyxnQkFBVTtBQUNSQyxrQkFBUyxFQUREO0FBRVJDLG1CQUFVO0FBRkYsT0FETDtBQUtMQyxjQUFPO0FBTEYsSyxRQU9QQyxPLEdBQVUsRTs7Ozs7NkJBSUY7O0FBRU4sVUFBSUMsVUFBVSwyQ0FBZDtBQUNBOzs7Ozs7OztBQVFBLFVBQUlDLE9BQU8sSUFBWDtBQUNBLHdCQUFRQyxPQUFSLENBQWdCLFNBQWhCLEVBQTJCLE1BQTNCLEVBQW1DRixPQUFuQyxFQUE0Q0MsSUFBNUMsRUFBa0QsQ0FBbEQ7QUFFRDs7OztFQXJDc0MsZUFBS0UsSTs7a0JBQXpCZixXIiwiZmlsZSI6Ind4cGFyc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgVG9hc3QgZnJvbSAnd2VweS1jb20tdG9hc3QnXG4gIGltcG9ydCBnb2luSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvcGVyc29uZ29pbmhlYWRlcidcbiAgaW1wb3J0IHRlc3RNaXhpbiBmcm9tICcuLi9taXhpbnMvdGVzdCdcbiAgaW1wb3J0IFd4UGFyc2UgZnJvbSAnLi4vd3hQYXJzZS93eFBhcnNlLmpzJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoYXJlUGVyc29uIGV4dGVuZHMgd2VweS5wYWdlIHtcblxuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmtYvor5XpobUnXG4gICAgfVxuXG4gICAgY29tcG9uZW50cyA9IHtcbiAgICAgIGdvaW5oZWFkZXI6IGdvaW5IZWFkZXIsXG4gICAgfVxuXG4gICAgbWl4aW5zID0gW3Rlc3RNaXhpbl1cblxuICAgIGRhdGEgPSB7XG4gICAgICB1c2VySW5mbzoge1xuICAgICAgICBuaWNrTmFtZTonJyxcbiAgICAgICAgYXZhdGFyVXJsOicnXG4gICAgICB9LFxuICAgICAgaXNTaG93OmZhbHNlXG4gICAgfVxuICAgIG1ldGhvZHMgPSB7XG5cbiAgICB9XG5cbiAgICBvbkxvYWQoKXtcblxuICAgICAgdmFyIGFydGljbGUgPSAnPGRpdiBzdHlsZT1cImNvbG9yOnJlZFwiPuaIkeaYrzxicj5IVE1M5Luj56CBPC9kaXY+JztcbiAgICAgIC8qKlxuICAgICAgICogV3hQYXJzZS53eFBhcnNlKGJpbmROYW1lICwgdHlwZSwgZGF0YSwgdGFyZ2V0LGltYWdlUGFkZGluZylcbiAgICAgICAqIDEuYmluZE5hbWXnu5HlrprnmoTmlbDmja7lkI0o5b+F5aGrKVxuICAgICAgICogMi50eXBl5Y+v5Lul5Li6aHRtbOaIluiAhW1kKOW/heWhqylcbiAgICAgICAqIDMuZGF0YeS4uuS8oOWFpeeahOWFt+S9k+aVsOaNrijlv4XloaspXG4gICAgICAgKiA0LnRhcmdldOS4ulBhZ2Xlr7nosaEs5LiA6Iis5Li6dGhpcyjlv4XloaspXG4gICAgICAgKiA1LmltYWdlUGFkZGluZ+S4uuW9k+WbvueJh+iHqumAguW6lOaYr+W3puWPs+eahOWNleS4gHBhZGRpbmco6buY6K6k5Li6MCzlj6/pgIkpXG4gICAgICAgKi9cbiAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgIFd4UGFyc2Uud3hQYXJzZSgnYXJ0aWNsZScsICdodG1sJywgYXJ0aWNsZSwgdGhhdCwgNSk7XG5cbiAgICB9XG4gIH1cbiJdfQ==