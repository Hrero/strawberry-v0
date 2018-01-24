'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
      navigationBarTitleText: '本周任务'
    }, _this.mixins = [_test2.default], _this.data = {
      userInfo: {
        nickName: '',
        avatarUrl: ''
      },
      weekList: [{
        'weekDay': '周一',
        'bookCatalog': '你需要一个地方奉献爱心',
        'readState': 1
      }, {
        'weekDay': '周二',
        'bookCatalog': '你需要一个地方奉献爱心',
        'readState': 2
      }, {
        'weekDay': '周三',
        'bookCatalog': '你需要一个地方奉献爱心',
        'readState': 3
      }, {
        'weekDay': '周四',
        'bookCatalog': '你需要一个地方奉献爱心',
        'readState': 2
      }, {
        'weekDay': '周五',
        'bookCatalog': '你需要一个地方奉献爱心',
        'readState': 2
      }, {
        'weekDay': '周六',
        'bookCatalog': '周总结',
        'readState': 1
      }, {
        'weekDay': '周日',
        'bookCatalog': '周测验',
        'readState': 5
      }]
      //1已打卡2 未打卡 3 去打卡 5考试
    }, _this.methods = {
      goPunchClock: function goPunchClock(index) {
        wx.setStorage({ key: "btnfromPage", data: "weekJob" });
        if (index == 1) {
          wx.navigateTo({
            url: '/pages/weekreadingarticles?index=' + index
          });
        } else if (index == 2) {
          wx.navigateTo({
            url: '/pages/weekreadingarticles?index=' + index
          });
        } else if (index == 3) {
          wx.navigateTo({
            url: '/pages/weekreadingarticles?index=' + index
          });
        } else if (index == 5) {
          wx.navigateTo({
            url: '/pages/weekexaminationpaper?index=' + index
          });
        } else {
          return;
        }
      }
    }, _this.computed = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SharePerson, [{
    key: 'aPlus',
    value: function aPlus() {

      for (var i = 0; i < this.weekList.length; i++) {
        var listIndex = this.weekList[i];
        if (listIndex.readState == 1) {
          listIndex.readStateH = '已打卡';
          listIndex.suoShow = false;
          listIndex.pointBackground = 'bluebackground';
          listIndex.weektxtColor = 'bluecolor';
        } else if (listIndex.readState == 2) {
          listIndex.readStateH = '未打卡';
          listIndex.suoShow = false;
          listIndex.pointBackground = 'redbackground';
        } else if (listIndex.readState == 3) {
          listIndex.readStateH = '去打卡';
          listIndex.suoShow = false;
          listIndex.weektxtColor = 'redcolor';
        } else if (listIndex.readState == 4) {
          listIndex.readStateH = '';
          listIndex.suoShow = true;
          listIndex.weektxtdis = 'ccolor';
        } else {
          listIndex.readStateH = '去考试';
          listIndex.suoShow = false;
          listIndex.weektxtColor = 'redcolor';
        }
      }
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {
      this.aPlus();
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


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(SharePerson , 'pages/weekjobindex'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlZWtqb2JpbmRleC5qcyJdLCJuYW1lcyI6WyJTaGFyZVBlcnNvbiIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJtaXhpbnMiLCJkYXRhIiwidXNlckluZm8iLCJuaWNrTmFtZSIsImF2YXRhclVybCIsIndlZWtMaXN0IiwibWV0aG9kcyIsImdvUHVuY2hDbG9jayIsImluZGV4Iiwid3giLCJzZXRTdG9yYWdlIiwia2V5IiwibmF2aWdhdGVUbyIsInVybCIsImNvbXB1dGVkIiwiaSIsImxlbmd0aCIsImxpc3RJbmRleCIsInJlYWRTdGF0ZSIsInJlYWRTdGF0ZUgiLCJzdW9TaG93IiwicG9pbnRCYWNrZ3JvdW5kIiwid2Vla3R4dENvbG9yIiwid2Vla3R4dGRpcyIsImFQbHVzIiwic2VsZiIsImdldFVzZXJJbmZvIiwic3VjY2VzcyIsInJlcyIsIiRhcHBseSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxXOzs7Ozs7Ozs7Ozs7OztnTUFFbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxNLEdBQVMsZ0IsUUFFVEMsSSxHQUFPO0FBQ0xDLGdCQUFVO0FBQ1JDLGtCQUFTLEVBREQ7QUFFUkMsbUJBQVU7QUFGRixPQURMO0FBS0xDLGdCQUFVLENBQUM7QUFDVCxtQkFBVyxJQURGO0FBRVQsdUJBQWUsYUFGTjtBQUdULHFCQUFhO0FBSEosT0FBRCxFQUlSO0FBQ0EsbUJBQVcsSUFEWDtBQUVBLHVCQUFlLGFBRmY7QUFHQSxxQkFBYTtBQUhiLE9BSlEsRUFRUjtBQUNBLG1CQUFXLElBRFg7QUFFQSx1QkFBZSxhQUZmO0FBR0EscUJBQWE7QUFIYixPQVJRLEVBWVI7QUFDQSxtQkFBVyxJQURYO0FBRUEsdUJBQWUsYUFGZjtBQUdBLHFCQUFhO0FBSGIsT0FaUSxFQWdCUjtBQUNBLG1CQUFXLElBRFg7QUFFQSx1QkFBZSxhQUZmO0FBR0EscUJBQWE7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QWY7QUFZSDs7OztFQXRIc0MsZUFBS0MsSTs7a0JBQXpCakMsVyIsImZpbGUiOiJ3ZWVram9iaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IFRvYXN0IGZyb20gJ3dlcHktY29tLXRvYXN0J1xuICBpbXBvcnQgdGVzdE1peGluIGZyb20gJy4uL21peGlucy90ZXN0J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoYXJlUGVyc29uIGV4dGVuZHMgd2VweS5wYWdlIHtcblxuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmnKzlkajku7vliqEnXG4gICAgfVxuXG4gICAgbWl4aW5zID0gW3Rlc3RNaXhpbl1cblxuICAgIGRhdGEgPSB7XG4gICAgICB1c2VySW5mbzoge1xuICAgICAgICBuaWNrTmFtZTonJyxcbiAgICAgICAgYXZhdGFyVXJsOicnXG4gICAgICB9LFxuICAgICAgd2Vla0xpc3Q6IFt7XG4gICAgICAgICd3ZWVrRGF5JzogJ+WRqOS4gCcsXG4gICAgICAgICdib29rQ2F0YWxvZyc6ICfkvaDpnIDopoHkuIDkuKrlnLDmlrnlpYnnjK7niLHlv4MnLFxuICAgICAgICAncmVhZFN0YXRlJzogMVxuICAgICAgfSx7XG4gICAgICAgICd3ZWVrRGF5JzogJ+WRqOS6jCcsXG4gICAgICAgICdib29rQ2F0YWxvZyc6ICfkvaDpnIDopoHkuIDkuKrlnLDmlrnlpYnnjK7niLHlv4MnLFxuICAgICAgICAncmVhZFN0YXRlJzogMlxuICAgICAgfSx7XG4gICAgICAgICd3ZWVrRGF5JzogJ+WRqOS4iScsXG4gICAgICAgICdib29rQ2F0YWxvZyc6ICfkvaDpnIDopoHkuIDkuKrlnLDmlrnlpYnnjK7niLHlv4MnLFxuICAgICAgICAncmVhZFN0YXRlJzogM1xuICAgICAgfSx7XG4gICAgICAgICd3ZWVrRGF5JzogJ+WRqOWbmycsXG4gICAgICAgICdib29rQ2F0YWxvZyc6ICfkvaDpnIDopoHkuIDkuKrlnLDmlrnlpYnnjK7niLHlv4MnLFxuICAgICAgICAncmVhZFN0YXRlJzogMlxuICAgICAgfSx7XG4gICAgICAgICd3ZWVrRGF5JzogJ+WRqOS6lCcsXG4gICAgICAgICdib29rQ2F0YWxvZyc6ICfkvaDpnIDopoHkuIDkuKrlnLDmlrnlpYnnjK7niLHlv4MnLFxuICAgICAgICAncmVhZFN0YXRlJzogMlxuICAgICAgfSx7XG4gICAgICAgICd3ZWVrRGF5JzogJ+WRqOWFrScsXG4gICAgICAgICdib29rQ2F0YWxvZyc6ICflkajmgLvnu5MnLFxuICAgICAgICAncmVhZFN0YXRlJzogMVxuICAgICAgfSx7XG4gICAgICAgICd3ZWVrRGF5JzogJ+WRqOaXpScsXG4gICAgICAgICdib29rQ2F0YWxvZyc6ICflkajmtYvpqownLFxuICAgICAgICAncmVhZFN0YXRlJzogNVxuICAgICAgfV1cbiAgICB9XG4vLzHlt7LmiZPljaEyIOacquaJk+WNoSAzIOWOu+aJk+WNoSA16ICD6K+VXG4gICAgbWV0aG9kcyA9IHtcblxuICAgICAgZ29QdW5jaENsb2NrKGluZGV4KXtcbiAgICAgICAgd3guc2V0U3RvcmFnZSh7a2V5OlwiYnRuZnJvbVBhZ2VcIiwgZGF0YTpcIndlZWtKb2JcIn0pXG4gICAgICAgIGlmKGluZGV4ID09IDEpe1xuICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL3dlZWtyZWFkaW5nYXJ0aWNsZXM/aW5kZXg9JytpbmRleFxuICAgICAgICAgIH0pXG4gICAgICAgIH1lbHNlIGlmKGluZGV4ID09IDIpe1xuICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL3dlZWtyZWFkaW5nYXJ0aWNsZXM/aW5kZXg9JytpbmRleFxuICAgICAgICAgIH0pXG4gICAgICAgIH1lbHNlIGlmKGluZGV4ID09IDMpe1xuICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL3dlZWtyZWFkaW5nYXJ0aWNsZXM/aW5kZXg9JytpbmRleFxuICAgICAgICAgIH0pXG4gICAgICAgIH1lbHNlIGlmKGluZGV4ID09IDUpe1xuICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL3dlZWtleGFtaW5hdGlvbnBhcGVyP2luZGV4PScraW5kZXhcbiAgICAgICAgICB9KVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH1cbiAgICBjb21wdXRlZCA9IHtcblxuICAgIH1cbiAgICBhUGx1cyAoKXtcblxuICAgICAgZm9yKCBsZXQgaT0wO2k8dGhpcy53ZWVrTGlzdC5sZW5ndGg7aSsrICl7XG4gICAgICAgIGxldCBsaXN0SW5kZXggPSB0aGlzLndlZWtMaXN0W2ldO1xuICAgICAgICBpZiggbGlzdEluZGV4LnJlYWRTdGF0ZSA9PSAxICl7XG4gICAgICAgICAgbGlzdEluZGV4LnJlYWRTdGF0ZUggPSAn5bey5omT5Y2hJ1xuICAgICAgICAgIGxpc3RJbmRleC5zdW9TaG93ID0gZmFsc2VcbiAgICAgICAgICBsaXN0SW5kZXgucG9pbnRCYWNrZ3JvdW5kID0gJ2JsdWViYWNrZ3JvdW5kJ1xuICAgICAgICAgIGxpc3RJbmRleC53ZWVrdHh0Q29sb3IgPSAnYmx1ZWNvbG9yJ1xuICAgICAgICB9ZWxzZSBpZiggbGlzdEluZGV4LnJlYWRTdGF0ZSA9PSAyICl7XG4gICAgICAgICAgbGlzdEluZGV4LnJlYWRTdGF0ZUggPSAn5pyq5omT5Y2hJ1xuICAgICAgICAgIGxpc3RJbmRleC5zdW9TaG93ID0gZmFsc2VcbiAgICAgICAgICBsaXN0SW5kZXgucG9pbnRCYWNrZ3JvdW5kID0gJ3JlZGJhY2tncm91bmQnXG4gICAgICAgIH1lbHNlIGlmKCBsaXN0SW5kZXgucmVhZFN0YXRlID09IDMgKXtcbiAgICAgICAgICBsaXN0SW5kZXgucmVhZFN0YXRlSCA9ICfljrvmiZPljaEnXG4gICAgICAgICAgbGlzdEluZGV4LnN1b1Nob3cgPSBmYWxzZVxuICAgICAgICAgIGxpc3RJbmRleC53ZWVrdHh0Q29sb3IgPSAncmVkY29sb3InXG4gICAgICAgIH1lbHNlIGlmKCBsaXN0SW5kZXgucmVhZFN0YXRlID09IDQgKXtcbiAgICAgICAgICBsaXN0SW5kZXgucmVhZFN0YXRlSCA9ICcnXG4gICAgICAgICAgbGlzdEluZGV4LnN1b1Nob3cgPSB0cnVlXG4gICAgICAgICAgbGlzdEluZGV4LndlZWt0eHRkaXMgPSAnY2NvbG9yJ1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICBsaXN0SW5kZXgucmVhZFN0YXRlSCA9ICfljrvogIPor5UnXG4gICAgICAgICAgbGlzdEluZGV4LnN1b1Nob3cgPSBmYWxzZVxuICAgICAgICAgIGxpc3RJbmRleC53ZWVrdHh0Q29sb3IgPSAncmVkY29sb3InXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH1cblxuICAgIG9uTG9hZCgpe1xuICAgICAgdGhpcy5hUGx1cygpXG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgICAgd3guZ2V0VXNlckluZm8oe1xuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICBsZXQgdXNlckluZm8gPSByZXMudXNlckluZm9cbiAgICAgICAgICBsZXQgbmlja05hbWUgPSB1c2VySW5mby5uaWNrTmFtZVxuICAgICAgICAgIGxldCBhdmF0YXJVcmwgPSB1c2VySW5mby5hdmF0YXJVcmxcblxuICAgICAgICAgIHNlbGYudXNlckluZm8ubmlja05hbWUgPSBuaWNrTmFtZTtcbiAgICAgICAgICBzZWxmLnVzZXJJbmZvLmF2YXRhclVybCA9IGF2YXRhclVybDtcbiAgICAgICAgICBzZWxmLiRhcHBseSgpXG5cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cbiJdfQ==