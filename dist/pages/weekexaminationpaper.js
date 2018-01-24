'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wepyComToast = require('./../npm/wepy-com-toast/toast.js');

var _wepyComToast2 = _interopRequireDefault(_wepyComToast);

var _examanswerlist = require('./../components/examanswerlist.js');

var _examanswerlist2 = _interopRequireDefault(_examanswerlist);

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
      navigationBarTitleText: '考试页'
    }, _this.components = {
      examanswerlist: _examanswerlist2.default
    }, _this.mixins = [_test2.default], _this.data = {
      exam: [{
        'title': '以下关于绩效的说法正确得是？',
        'text': ['放开胸怀想笑就笑', '放开胸怀想笑就笑', '放开胸怀想笑就笑1', '放开胸怀想笑就笑'],
        'answer': 'A',
        'nomal': ['A', 'B', 'C', 'D']
      }, {
        'title': '下关于绩效的说法正确得是？',
        'text': ['放开胸怀想笑就笑', '放开胸怀想笑就笑', '放开胸怀想笑就笑1', '放开胸怀想笑就笑'],
        'answer': 'D',
        'nomal': ['A', 'B', 'C', 'D']
      }, {
        'title': '以下关于绩效的说法正确得是？',
        'text': ['放开胸怀想笑就笑', '放开胸怀想笑就笑', '放开胸怀想笑就笑1', '放开胸怀想笑就笑'],
        'answer': 'B',
        'nomal': ['A', 'B', 'C', 'D']
      }],
      chooseArray: [], //用户选择的答案
      answerArray: [], //正确答案
      src: '/images/week/nochoose@3x.png', //对号
      indicatorDots: false, //swiper tab
      autoplay: false, //swiper自动切换
      interval: 5000, //swiper自动切换的时间间隔
      duration: 1000, //swiper页码
      currentTab: 0, //swiper页码
      listLength: null, //数据总长度
      disabled: true, //切换箭头状态
      resultNum: null, //结果分
      jtSrcFl: '/images/week/zuojiantou@3x.png', //箭头
      jtSrcRl: '/images/week/youjiantouc@3x.png', //箭头
      currentItem: null, //切换状态
      commitStatus: false //提交按钮
    }, _this.computed = {
      resultNum: function resultNum() {
        var num = 0;
        var newanswerArray = [];

        for (var i = 0; i < this.listLength; i++) {
          if (this.answerArray[i] == 'A') {
            newanswerArray.push(0);
          } else if (this.answerArray[i] == 'B') {
            newanswerArray.push(1);
          } else if (this.answerArray[i] == 'C') {
            newanswerArray.push(2);
          } else {
            newanswerArray.push(3);
          }
        }
        for (var _i = 0; _i < this.listLength; _i++) {

          if (newanswerArray[_i] == this.chooseArray[_i]) {
            num++;
          }
        }
        num = num / this.listLength;

        return num; //结果分
      }
    }, _this.watch = {
      currentTab: function currentTab(curVal, oldVal) {
        if (curVal == 0) {
          this.disabled = true;
          this.jtSrcFl = '/images/week/zuojiantou@3x.png';
          this.jtSrcRl = '/images/week/youjiantouc@3x.png';
        } else if (curVal == this.listLength - 1) {
          this.disabled = true;
          this.jtSrcRl = '/images/week/youjiantou@3x.png';
          this.jtSrcFl = '/images/week/zuojiantouc@3x.png';
        } else {
          this.disabled = false;
          this.jtSrcFl = '/images/week/zuojiantouc@3x.png';
          this.jtSrcRl = '/images/week/youjiantouc@3x.png';
        }
      },
      chooseArray: function chooseArray(curVal, oldVal) {
        var num = 0;
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = curVal[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var value = _step.value;

            if (value != null) {
              num++;
              if (num == this.listLength) {
                this.commitStatus = true;
              }
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }
    }, _this.methods = {
      nextSwiper: function nextSwiper(e) {
        this.currentTab++;
      },
      prevSwiper: function prevSwiper() {
        this.currentTab--;
      },
      chooseThis: function chooseThis(e) {

        var id = e.currentTarget.dataset.id;
        var parentid = e.currentTarget.dataset.parentid;
        var choosearray = e.currentTarget.dataset.choosearray;

        choosearray[parentid] = id;
        this.chooseArray = choosearray;
      },
      commitText: function commitText(e) {
        wx.navigateTo({
          url: '/pages/weekfraction?count=' + this.resultNum
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SharePerson, [{
    key: 'onLoad',
    value: function onLoad() {

      this.listLength = this.exam.length;

      //循环出答案数组
      for (var i = 0; i < this.listLength; i++) {
        this.answerArray[i] = this.exam[i].answer;
        this.chooseArray[i] = null;
      }
    }
  }]);

  return SharePerson;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(SharePerson , 'pages/weekexaminationpaper'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlZWtleGFtaW5hdGlvbnBhcGVyLmpzIl0sIm5hbWVzIjpbIlNoYXJlUGVyc29uIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJleGFtYW5zd2VybGlzdCIsIm1peGlucyIsImRhdGEiLCJleGFtIiwiY2hvb3NlQXJyYXkiLCJhbnN3ZXJBcnJheSIsInNyYyIsImluZGljYXRvckRvdHMiLCJhdXRvcGxheSIsImludGVydmFsIiwiZHVyYXRpb24iLCJjdXJyZW50VGFiIiwibGlzdExlbmd0aCIsImRpc2FibGVkIiwicmVzdWx0TnVtIiwianRTcmNGbCIsImp0U3JjUmwiLCJjdXJyZW50SXRlbSIsImNvbW1pdFN0YXR1cyIsImNvbXB1dGVkIiwibnVtIiwibmV3YW5zd2VyQXJyYXkiLCJpIiwicHVzaCIsIndhdGNoIiwiY3VyVmFsIiwib2xkVmFsIiwidmFsdWUiLCJtZXRob2RzIiwibmV4dFN3aXBlciIsImUiLCJwcmV2U3dpcGVyIiwiY2hvb3NlVGhpcyIsImlkIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJwYXJlbnRpZCIsImNob29zZWFycmF5IiwiY29tbWl0VGV4dCIsInd4IiwibmF2aWdhdGVUbyIsInVybCIsImxlbmd0aCIsImFuc3dlciIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFc7Ozs7Ozs7Ozs7Ozs7O2dNQUVuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBSVRDLFUsR0FBYTtBQUNYQztBQURXLEssUUFJYkMsTSxHQUFTLGdCLFFBRVRDLEksR0FBTztBQUNMQyxZQUFLLENBQUM7QUFDRixpQkFBUSxnQkFETjtBQUVGLGdCQUFPLENBQUMsVUFBRCxFQUFZLFVBQVosRUFBdUIsV0FBdkIsRUFBbUMsVUFBbkMsQ0FGTDtBQUdGLGtCQUFTLEdBSFA7QUFJRixpQkFBUSxDQUFDLEdBQUQsRUFB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QUtGLFVBQUwsR0FBa0IsS0FBS1QsSUFBTCxDQUFVdUMsTUFBNUI7O0FBRUE7QUFDQSxXQUFLLElBQUlwQixJQUFFLENBQVgsRUFBYUEsSUFBRSxLQUFLVixVQUFwQixFQUErQlUsR0FBL0IsRUFBb0M7QUFDbEMsYUFBS2pCLFdBQUwsQ0FBaUJpQixDQUFqQixJQUFzQixLQUFLbkIsSUFBTCxDQUFVbUIsQ0FBVixFQUFhcUIsTUFBbkM7QUFDQSxhQUFLdkMsV0FBTCxDQUFpQmtCLENBQWpCLElBQXNCLElBQXRCO0FBQ0Q7QUFLRjs7OztFQTdJc0MsZUFBS3NCLEk7O2tCQUF6QmhELFciLCJmaWxlIjoid2Vla2V4YW1pbmF0aW9ucGFwZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IFRvYXN0IGZyb20gJ3dlcHktY29tLXRvYXN0J1xuICBpbXBvcnQgZXhhbWFuc3dlcmxpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9leGFtYW5zd2VybGlzdCdcbiAgaW1wb3J0IHRlc3RNaXhpbiBmcm9tICcuLi9taXhpbnMvdGVzdCdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBTaGFyZVBlcnNvbiBleHRlbmRzIHdlcHkucGFnZSB7XG5cbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6ICD6K+V6aG1J1xuICAgIH1cblxuICAgIGNvbXBvbmVudHMgPSB7XG4gICAgICBleGFtYW5zd2VybGlzdDpleGFtYW5zd2VybGlzdFxuICAgIH1cblxuICAgIG1peGlucyA9IFt0ZXN0TWl4aW5dXG5cbiAgICBkYXRhID0ge1xuICAgICAgZXhhbTpbe1xuICAgICAgICAgICd0aXRsZSc6J+S7peS4i+WFs+S6jue7qeaViOeahOivtOazleato+ehruW+l+aYr++8nycsXG4gICAgICAgICAgJ3RleHQnOlsn5pS+5byA6IO45oCA5oOz56yR5bCx56yRJywn5pS+5byA6IO45oCA5oOz56yR5bCx56yRJywn5pS+5byA6IO45oCA5oOz56yR5bCx56yRMScsJ+aUvuW8gOiDuOaAgOaDs+eskeWwseeskSddLFxuICAgICAgICAgICdhbnN3ZXInOidBJyxcbiAgICAgICAgICAnbm9tYWwnOlsnQScsJ0InLCdDJywnRCddXG4gICAgICB9LHtcbiAgICAgICAgJ3RpdGxlJzon5LiL5YWz5LqO57up5pWI55qE6K+05rOV5q2j56Gu5b6X5piv77yfJyxcbiAgICAgICAgJ3RleHQnOlsn5pS+5byA6IO45oCA5oOz56yR5bCx56yRJywn5pS+5byA6IO45oCA5oOz56yR5bCx56yRJywn5pS+5byA6IO45oCA5oOz56yR5bCx56yRMScsJ+aUvuW8gOiDuOaAgOaDs+eskeWwseeskSddLFxuICAgICAgICAnYW5zd2VyJzonRCcsXG4gICAgICAgICdub21hbCc6WydBJywnQicsJ0MnLCdEJ11cbiAgICAgIH0se1xuICAgICAgICAndGl0bGUnOifku6XkuIvlhbPkuo7nu6nmlYjnmoTor7Tms5XmraPnoa7lvpfmmK/vvJ8nLFxuICAgICAgICAndGV4dCc6WyfmlL7lvIDog7jmgIDmg7PnrJHlsLHnrJEnLCfmlL7lvIDog7jmgIDmg7PnrJHlsLHnrJEnLCfmlL7lvIDog7jmgIDmg7PnrJHlsLHnrJExJywn5pS+5byA6IO45oCA5oOz56yR5bCx56yRJ10sXG4gICAgICAgICdhbnN3ZXInOidCJyxcbiAgICAgICAgJ25vbWFsJzpbJ0EnLCdCJywnQycsJ0QnXVxuICAgICAgfV0sXG4gICAgICBjaG9vc2VBcnJheTpbXSwgLy/nlKjmiLfpgInmi6nnmoTnrZTmoYhcbiAgICAgIGFuc3dlckFycmF5OltdLCAgLy/mraPnoa7nrZTmoYhcbiAgICAgIHNyYzonL2ltYWdlcy93ZWVrL25vY2hvb3NlQDN4LnBuZycsIC8v5a+55Y+3XG4gICAgICBpbmRpY2F0b3JEb3RzOiBmYWxzZSwgIC8vc3dpcGVyIHRhYlxuICAgICAgYXV0b3BsYXk6IGZhbHNlLCAgLy9zd2lwZXLoh6rliqjliIfmjaJcbiAgICAgIGludGVydmFsOiA1MDAwLCAgIC8vc3dpcGVy6Ieq5Yqo5YiH5o2i55qE5pe26Ze06Ze06ZqUXG4gICAgICBkdXJhdGlvbjogMTAwMCwgIC8vc3dpcGVy6aG156CBXG4gICAgICBjdXJyZW50VGFiOjAsICAvL3N3aXBlcumhteeggVxuICAgICAgbGlzdExlbmd0aDpudWxsLCAvL+aVsOaNruaAu+mVv+W6plxuICAgICAgZGlzYWJsZWQ6dHJ1ZSwgLy/liIfmjaLnrq3lpLTnirbmgIFcbiAgICAgIHJlc3VsdE51bTpudWxsLCAvL+e7k+aenOWIhlxuICAgICAganRTcmNGbDonL2ltYWdlcy93ZWVrL3p1b2ppYW50b3VAM3gucG5nJywgIC8v566t5aS0XG4gICAgICBqdFNyY1JsOicvaW1hZ2VzL3dlZWsveW91amlhbnRvdWNAM3gucG5nJywgLy/nrq3lpLRcbiAgICAgIGN1cnJlbnRJdGVtOm51bGwsICAvL+WIh+aNoueKtuaAgVxuICAgICAgY29tbWl0U3RhdHVzOmZhbHNlIC8v5o+Q5Lqk5oyJ6ZKuXG4gICAgfVxuICAgIGNvbXB1dGVkID0ge1xuICAgICAgcmVzdWx0TnVtKCl7XG4gICAgICAgIGxldCBudW0gPSAwO1xuICAgICAgICBsZXQgbmV3YW5zd2VyQXJyYXk9W107XG5cbiAgICAgICAgZm9yKCBsZXQgaT0wO2k8dGhpcy5saXN0TGVuZ3RoO2krKyApe1xuICAgICAgICAgIGlmKCB0aGlzLmFuc3dlckFycmF5W2ldID09ICdBJyApe1xuICAgICAgICAgICAgbmV3YW5zd2VyQXJyYXkucHVzaCgwKTtcbiAgICAgICAgICB9ZWxzZSBpZiggdGhpcy5hbnN3ZXJBcnJheVtpXSA9PSAnQicgKXtcbiAgICAgICAgICAgIG5ld2Fuc3dlckFycmF5LnB1c2goMSk7XG4gICAgICAgICAgfWVsc2UgaWYoIHRoaXMuYW5zd2VyQXJyYXlbaV0gPT0gJ0MnICl7XG4gICAgICAgICAgICBuZXdhbnN3ZXJBcnJheS5wdXNoKDIpO1xuICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgbmV3YW5zd2VyQXJyYXkucHVzaCgzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yKCBsZXQgaT0wO2k8dGhpcy5saXN0TGVuZ3RoO2krKyApe1xuXG4gICAgICAgICAgaWYoIG5ld2Fuc3dlckFycmF5W2ldID09IHRoaXMuY2hvb3NlQXJyYXlbaV0gKXtcbiAgICAgICAgICAgIG51bSsrXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG51bSA9IG51bS90aGlzLmxpc3RMZW5ndGg7XG5cbiAgICAgICAgcmV0dXJuIG51bSAgIC8v57uT5p6c5YiGXG4gICAgICB9XG4gICAgfVxuICAgIHdhdGNoID0ge1xuICAgICAgY3VycmVudFRhYiAoY3VyVmFsLCBvbGRWYWwpIHtcbiAgICAgICAgaWYoIGN1clZhbCA9PSAwICl7XG4gICAgICAgICAgdGhpcy5kaXNhYmxlZCA9IHRydWVcbiAgICAgICAgICB0aGlzLmp0U3JjRmwgPSAnL2ltYWdlcy93ZWVrL3p1b2ppYW50b3VAM3gucG5nJ1xuICAgICAgICAgIHRoaXMuanRTcmNSbCA9ICcvaW1hZ2VzL3dlZWsveW91amlhbnRvdWNAM3gucG5nJ1xuICAgICAgICB9ZWxzZSBpZiggY3VyVmFsID09IHRoaXMubGlzdExlbmd0aC0xICl7XG4gICAgICAgICAgdGhpcy5kaXNhYmxlZCA9IHRydWVcbiAgICAgICAgICB0aGlzLmp0U3JjUmwgPSAnL2ltYWdlcy93ZWVrL3lvdWppYW50b3VAM3gucG5nJ1xuICAgICAgICAgIHRoaXMuanRTcmNGbCA9ICcvaW1hZ2VzL3dlZWsvenVvamlhbnRvdWNAM3gucG5nJ1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICB0aGlzLmRpc2FibGVkID0gZmFsc2VcbiAgICAgICAgICB0aGlzLmp0U3JjRmwgPSAnL2ltYWdlcy93ZWVrL3p1b2ppYW50b3VjQDN4LnBuZydcbiAgICAgICAgICB0aGlzLmp0U3JjUmwgPSAnL2ltYWdlcy93ZWVrL3lvdWppYW50b3VjQDN4LnBuZydcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGNob29zZUFycmF5IChjdXJWYWwsIG9sZFZhbCl7XG4gICAgICAgIGxldCBudW0gPSAwO1xuICAgICAgICBmb3IodmFyIHZhbHVlIG9mIGN1clZhbCl7XG4gICAgICAgICAgaWYoIHZhbHVlICE9IG51bGwgKXtcbiAgICAgICAgICAgIG51bSsrO1xuICAgICAgICAgICAgaWYoIG51bSA9PSB0aGlzLmxpc3RMZW5ndGggKXtcbiAgICAgICAgICAgICAgdGhpcy5jb21taXRTdGF0dXMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICB9XG5cbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuXG4gICAgICBuZXh0U3dpcGVyKGUpe1xuICAgICAgICB0aGlzLmN1cnJlbnRUYWIgKys7XG4gICAgICB9LFxuICAgICAgcHJldlN3aXBlcigpe1xuICAgICAgICB0aGlzLmN1cnJlbnRUYWIgLS07XG4gICAgICB9LFxuICAgICAgY2hvb3NlVGhpcyhlKXtcblxuICAgICAgICBsZXQgaWQgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZDtcbiAgICAgICAgbGV0IHBhcmVudGlkID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQucGFyZW50aWQ7XG4gICAgICAgIGxldCBjaG9vc2VhcnJheSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmNob29zZWFycmF5O1xuXG4gICAgICAgIGNob29zZWFycmF5W3BhcmVudGlkXSA9IGlkO1xuICAgICAgICB0aGlzLmNob29zZUFycmF5ID0gY2hvb3NlYXJyYXk7XG5cbiAgICAgIH0sXG4gICAgICBjb21taXRUZXh0KGUpe1xuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6IGAvcGFnZXMvd2Vla2ZyYWN0aW9uP2NvdW50PSR7dGhpcy5yZXN1bHROdW19YFxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgfVxuICAgIG9uTG9hZCgpe1xuXG4gICAgICB0aGlzLmxpc3RMZW5ndGggPSB0aGlzLmV4YW0ubGVuZ3RoO1xuXG4gICAgICAvL+W+queOr+WHuuetlOahiOaVsOe7hFxuICAgICAgZm9yKCBsZXQgaT0wO2k8dGhpcy5saXN0TGVuZ3RoO2krKyApe1xuICAgICAgICB0aGlzLmFuc3dlckFycmF5W2ldID0gdGhpcy5leGFtW2ldLmFuc3dlcjtcbiAgICAgICAgdGhpcy5jaG9vc2VBcnJheVtpXSA9IG51bGw7XG4gICAgICB9XG5cblxuXG5cbiAgICB9XG5cbiAgfVxuIl19