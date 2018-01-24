'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wepyComToast = require('./../npm/wepy-com-toast/toast.js');

var _wepyComToast2 = _interopRequireDefault(_wepyComToast);

var _appcommitbtn = require('./../components/appcommitbtn.js');

var _appcommitbtn2 = _interopRequireDefault(_appcommitbtn);

var _test = require('./../mixins/test.js');

var _test2 = _interopRequireDefault(_test);

var _wxParse = require('./../wxParse/wxParse.js');

var _wxParse2 = _interopRequireDefault(_wxParse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var readingarticles = function (_wepy$page) {
  _inherits(readingarticles, _wepy$page);

  function readingarticles() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, readingarticles);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = readingarticles.__proto__ || Object.getPrototypeOf(readingarticles)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '读书页'
    }, _this.$repeat = {}, _this.$props = { "appCommitbtn": { "xmlns:v-on": "" } }, _this.$events = { "appCommitbtn": { "v-on:goReadSuccess": "goReadSuccess" } }, _this.components = {
      appCommitbtn: _appcommitbtn2.default
    }, _this.mixins = [_test2.default], _this.data = {
      userInfo: {
        nickName: '',
        avatarUrl: ''
      },
      option: null,
      backTxt: null
    }, _this.methods = {
      goReadSuccess: function goReadSuccess() {
        wx.navigateTo({
          url: '/pages/weekreadsuccess?text=' + this.option.index
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(readingarticles, [{
    key: 'onLoad',
    value: function onLoad(option) {
      this.option = option;
      if (this.option.index == 1) {
        this.$broadcast('Text', '已打卡，查看名次');
      } else if (this.option.index == 2) {
        this.$broadcast('Text', '好友提醒 打卡不怕忘');
      } else if (this.option.index == 3) {
        this.$broadcast('Text', '读完打卡');
      } else {}

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

  return readingarticles;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(readingarticles , 'pages/weekreadingarticles'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlZWtyZWFkaW5nYXJ0aWNsZXMuanMiXSwibmFtZXMiOlsicmVhZGluZ2FydGljbGVzIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImFwcENvbW1pdGJ0biIsIm1peGlucyIsImRhdGEiLCJ1c2VySW5mbyIsIm5pY2tOYW1lIiwiYXZhdGFyVXJsIiwib3B0aW9uIiwiYmFja1R4dCIsIm1ldGhvZHMiLCJnb1JlYWRTdWNjZXNzIiwid3giLCJuYXZpZ2F0ZVRvIiwidXJsIiwiaW5kZXgiLCIkYnJvYWRjYXN0IiwiYXJ0aWNsZSIsInRoYXQiLCJ3eFBhcnNlIiwic2VsZiIsImdldFVzZXJJbmZvIiwic3VjY2VzcyIsInJlcyIsIiRhcHBseSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsZTs7Ozs7Ozs7Ozs7Ozs7d01BRW5CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVkMsTyxHQUFVLEUsUUFDYkMsTSxHQUFTLEVBQUMsZ0JBQWUsRUFBQyxjQUFhLEVBQWQsRUFBaEIsRSxRQUNUQyxPLEdBQVUsRUFBQyxnQkFBZSxFQUFDLHNCQUFxQixlQUF0QixFQUFoQixFLFFBQ1RDLFUsR0FBYTtBQUNSQztBQURRLEssUUFJVkMsTSxHQUFTLGdCLFFBRVRDLEksR0FBTztBQUNMQyxnQkFBVTtBQUNSQyxrQkFBUyxFQUREO0FBRVJDLG1CQUFVO0FBRkYsT0FETDtBQUtMQyxjQUFPLElBTEY7QUFNTEMsZUFBUTtBQU5ILEssUUFTUEMsTyxHQUFVO0FBQ1JDLG1CQURRLDJCQUNPO0FBQ2JDLFdBQUdDLFVBQUgsQ0FBYztBQUNaQyxlQUFLLGlDQUErQixLQUFLTixNQUFMLENBQVlPO0FBRHBDLFNBQWQ7QUFHRDtBQUxPLEs7Ozs7OzJCQVFIUCxNLEVBQU87QUFDWixXQUFLQSxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxVQUFJLEtBQUtBLE1BQUwsQ0FBWU8sS0FBWixJQUFxQixDQUF6QixFQUE0QjtBQUMxQixhQUFLQyxVQUFMLENBQWdCLE1BQWhCLEVBQXdCLFVBQXhCO0FBQ0QsT0FGRCxNQUVNLElBQUksS0FBS1IsTUFBTCxDQUFZTyxLQUFaLElBQXFCLENBQXpCLEVBQTRCO0FBQ2hDLGFBQUtDLFVBQUwsQ0FBZ0IsTUFBaEIsRUFBd0IsWUFBeEI7QUFDRCxPQUZLLE1BRUEsSUFBSSxLQUFLUixNQUFMLENBQVlPLEtBQVosSUFBcUIsQ0FBekIsRUFBNEI7QUFDaEMsYUFBS0MsVUFBTCxDQUFnQixNQUFoQixFQUF3QixNQUF4QjtBQUNELE9BRkssTUFFRCxDQUFFOztBQUVQLFVBQUlDLFVBQVUsMkNBQWQ7QUFDQTs7Ozs7Ozs7QUFRQSxVQUFJQyxPQUFPLElBQVg7QUFDQSx3QkFBUUMsT0FBUixDQUFnQixTQUFoQixFQUEyQixNQUEzQixFQUFtQ0YsT0FBbkMsRUFBNENDLElBQTVDLEVBQWtELENBQWxEOztBQUVBLFVBQUlFLE9BQU8sSUFBWDtBQUNBUixTQUFHUyxXQUFILENBQWU7QUFDYkMsaUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQixjQUFJbEIsV0FBV2tCLElBQUlsQixRQUFuQjtBQUNBLGNBQUlDLFdBQVdELFNBQVNDLFFBQXhCO0FBQ0EsY0FBSUMsWUFBWUYsU0FBU0UsU0FBekI7O0FBRUFhLGVBQUtmLFFBQUwsQ0FBY0MsUUFBZCxHQUF5QkEsUUFBekI7QUFDQWMsZUFBS2YsUUFBTCxDQUFjRSxTQUFkLEdBQTBCQSxTQUExQjtBQUNBYSxlQUFLSSxNQUFMO0FBRUQ7QUFWWSxPQUFmO0FBWUQ7Ozs7RUFuRTBDLGVBQUtDLEk7O2tCQUE3QjlCLGUiLCJmaWxlIjoid2Vla3JlYWRpbmdhcnRpY2xlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgVG9hc3QgZnJvbSAnd2VweS1jb20tdG9hc3QnXG4gIGltcG9ydCBhcHBDb21taXRidG4gZnJvbSAnLi4vY29tcG9uZW50cy9hcHBjb21taXRidG4nXG4gIGltcG9ydCB0ZXN0TWl4aW4gZnJvbSAnLi4vbWl4aW5zL3Rlc3QnXG4gIGltcG9ydCBXeFBhcnNlIGZyb20gJy4uL3d4UGFyc2Uvd3hQYXJzZS5qcydcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyByZWFkaW5nYXJ0aWNsZXMgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuXG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+ivu+S5pumhtSdcbiAgICB9XG5cbiAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiYXBwQ29tbWl0YnRuXCI6e1wieG1sbnM6di1vblwiOlwiXCJ9fTtcclxuJGV2ZW50cyA9IHtcImFwcENvbW1pdGJ0blwiOntcInYtb246Z29SZWFkU3VjY2Vzc1wiOlwiZ29SZWFkU3VjY2Vzc1wifX07XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgYXBwQ29tbWl0YnRuOiBhcHBDb21taXRidG4sXG4gICAgfVxuXG4gICAgbWl4aW5zID0gW3Rlc3RNaXhpbl1cblxuICAgIGRhdGEgPSB7XG4gICAgICB1c2VySW5mbzoge1xuICAgICAgICBuaWNrTmFtZTonJyxcbiAgICAgICAgYXZhdGFyVXJsOicnXG4gICAgICB9LFxuICAgICAgb3B0aW9uOm51bGwsXG4gICAgICBiYWNrVHh0Om51bGxcbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgZ29SZWFkU3VjY2Vzcygpe1xuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6ICcvcGFnZXMvd2Vla3JlYWRzdWNjZXNzP3RleHQ9Jyt0aGlzLm9wdGlvbi5pbmRleFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIG9uTG9hZChvcHRpb24pe1xuICAgICAgdGhpcy5vcHRpb24gPSBvcHRpb247XG4gICAgICBpZiggdGhpcy5vcHRpb24uaW5kZXggPT0gMSApe1xuICAgICAgICB0aGlzLiRicm9hZGNhc3QoJ1RleHQnLCAn5bey5omT5Y2h77yM5p+l55yL5ZCN5qyhJylcbiAgICAgIH1lbHNlIGlmKCB0aGlzLm9wdGlvbi5pbmRleCA9PSAyICl7XG4gICAgICAgIHRoaXMuJGJyb2FkY2FzdCgnVGV4dCcsICflpb3lj4vmj5DphpIg5omT5Y2h5LiN5oCV5b+YJylcbiAgICAgIH1lbHNlIGlmKCB0aGlzLm9wdGlvbi5pbmRleCA9PSAzICl7XG4gICAgICAgIHRoaXMuJGJyb2FkY2FzdCgnVGV4dCcsICfor7vlrozmiZPljaEnKVxuICAgICAgfWVsc2V7fVxuXG4gICAgICB2YXIgYXJ0aWNsZSA9ICc8ZGl2IHN0eWxlPVwiY29sb3I6cmVkXCI+5oiR5pivPGJyPkhUTUzku6PnoIE8L2Rpdj4nO1xuICAgICAgLyoqXG4gICAgICAgKiBXeFBhcnNlLnd4UGFyc2UoYmluZE5hbWUgLCB0eXBlLCBkYXRhLCB0YXJnZXQsaW1hZ2VQYWRkaW5nKVxuICAgICAgICogMS5iaW5kTmFtZee7keWumueahOaVsOaNruWQjSjlv4XloaspXG4gICAgICAgKiAyLnR5cGXlj6/ku6XkuLpodG1s5oiW6ICFbWQo5b+F5aGrKVxuICAgICAgICogMy5kYXRh5Li65Lyg5YWl55qE5YW35L2T5pWw5o2uKOW/heWhqylcbiAgICAgICAqIDQudGFyZ2V05Li6UGFnZeWvueixoSzkuIDoiKzkuLp0aGlzKOW/heWhqylcbiAgICAgICAqIDUuaW1hZ2VQYWRkaW5n5Li65b2T5Zu+54mH6Ieq6YCC5bqU5piv5bem5Y+z55qE5Y2V5LiAcGFkZGluZyjpu5jorqTkuLowLOWPr+mAiSlcbiAgICAgICAqL1xuICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgV3hQYXJzZS53eFBhcnNlKCdhcnRpY2xlJywgJ2h0bWwnLCBhcnRpY2xlLCB0aGF0LCA1KTtcblxuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgd3guZ2V0VXNlckluZm8oe1xuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICBsZXQgdXNlckluZm8gPSByZXMudXNlckluZm9cbiAgICAgICAgICBsZXQgbmlja05hbWUgPSB1c2VySW5mby5uaWNrTmFtZVxuICAgICAgICAgIGxldCBhdmF0YXJVcmwgPSB1c2VySW5mby5hdmF0YXJVcmxcblxuICAgICAgICAgIHNlbGYudXNlckluZm8ubmlja05hbWUgPSBuaWNrTmFtZTtcbiAgICAgICAgICBzZWxmLnVzZXJJbmZvLmF2YXRhclVybCA9IGF2YXRhclVybDtcbiAgICAgICAgICBzZWxmLiRhcHBseSgpXG5cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cbiJdfQ==