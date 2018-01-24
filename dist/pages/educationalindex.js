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

var educationalindex = function (_wepy$page) {
  _inherits(educationalindex, _wepy$page);

  function educationalindex() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, educationalindex);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = educationalindex.__proto__ || Object.getPrototypeOf(educationalindex)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '教务'
    }, _this.mixins = [_test2.default], _this.data = {
      userInfo: {
        nickName: '',
        avatarUrl: ''
      },
      listData: [],
      showYear: null,
      showMonth: null,
      oneDay: null,
      lastDay: null,
      height: 80,
      status: {
        "sign": [{ "signDay": "09" }, { "signDay": "11" }, { "signDay": "12" }, { "signDay": "13" }],
        "unsign": [{ "signDay": "19" }, { "signDay": "20" }, { "signDay": "21" }, { "signDay": "22" }],
        "bookInfo": "fasd"
      },
      signdc: null,
      day: null,
      chooseDate: null
    }, _this.methods = {
      goNext: function goNext() {
        this.showMonth++;
        this.chooseDate = null; //清空点击状态

        if (this.showMonth > 12) {
          this.showMonth = 1;
          this.showYear++;
        }
        this.getDate();
      },
      goPrev: function goPrev() {
        this.showMonth--;
        this.chooseDate = null;

        if (this.showMonth < 1) {
          this.showMonth = 12;
          this.showYear--;
        }
        this.getDate();
      },
      clickSetSign: function clickSetSign(e) {
        console.log(e.currentTarget.dataset);
        this.chooseDate = e.currentTarget.dataset.date;
      },
      goReadartcle: function goReadartcle() {
        //1已打卡2 未打卡 3 去打卡 5考试
        wx.setStorage({ key: "btnfromPage", data: "education" });
        wx.navigateTo({
          url: '/pages/weekreadingarticles?index=' + 1
        });
      }
    }, _this.computed = {}, _this.watch = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(educationalindex, [{
    key: 'getDate',
    value: function getDate() {
      var Dnum = 1;
      var DataArray = new Array();
      this.oneDay = new Date(this.showYear, this.showMonth - 1, 1).getDay();
      this.lastDay = new Date(this.showYear, this.showMonth, 0).getDate();

      //      this.day = new Date().getDate();

      //0 尾日期 1位状态 2 点击状态
      //创建一个二维数组
      for (var i = 0; i < 6; i++) {
        var Harr = new Array();

        for (var j = 0; j < 7; j++) {
          var Barr = new Array();
          Harr.push(Barr);
        }
        DataArray.push(Harr);
      }
      //遍历第一行
      for (var _i = 0; _i < 7; _i++) {
        if (_i < this.oneDay) {
          DataArray[0][_i][0] = '';
        } else {
          DataArray[0][_i][0] = Dnum;
          //判断签到状态
          for (var k = 0; k < this.status.sign.length; k++) {
            if (this.status.sign[k].signDay == Dnum) {
              DataArray[0][_i][1] = 'dui';
            }
          }
          for (var _k = 0; _k < this.status.unsign.length; _k++) {
            if (this.status.unsign[_k].signDay == Dnum) {
              DataArray[0][_i][1] = 'cuo';
            }
          }

          Dnum++;
        }
      }
      //遍历剩下的
      for (var _i2 = 1; _i2 < 6; _i2++) {

        for (var _j = 0; _j < 7; _j++) {

          if (Dnum > this.lastDay) {
            DataArray[_i2][_j][0] = '';
          } else {
            DataArray[_i2][_j][0] = Dnum;
            //判断签到状态
            for (var _k2 = 0; _k2 < this.status.sign.length; _k2++) {
              if (this.status.sign[_k2].signDay == Dnum) {
                DataArray[_i2][_j][1] = 'dui';
              }
            }
            for (var _k3 = 0; _k3 < this.status.unsign.length; _k3++) {
              if (this.status.unsign[_k3].signDay == Dnum) {
                DataArray[_i2][_j][1] = 'cuo';
              }
            }

            Dnum++;
          }

          //处理结尾一行
          if (DataArray[5][0][0] == '') {
            DataArray.pop();
            break;
          }
        }
      }

      this.listData = DataArray;
      console.log(this.listData);
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {
      //初始化日历
      this.showYear = new Date().getFullYear();
      this.showMonth = new Date().getMonth() + 1;
      this.getDate();
    }
  }]);

  return educationalindex;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(educationalindex , 'pages/educationalindex'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkdWNhdGlvbmFsaW5kZXguanMiXSwibmFtZXMiOlsiZWR1Y2F0aW9uYWxpbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJtaXhpbnMiLCJkYXRhIiwidXNlckluZm8iLCJuaWNrTmFtZSIsImF2YXRhclVybCIsImxpc3REYXRhIiwic2hvd1llYXIiLCJzaG93TW9udGgiLCJvbmVEYXkiLCJsYXN0RGF5IiwiaGVpZ2h0Iiwic3RhdHVzIiwic2lnbmRjIiwiZGF5IiwiY2hvb3NlRGF0ZSIsIm1ldGhvZHMiLCJnb05leHQiLCJnZXREYXRlIiwiZ29QcmV2IiwiY2xpY2tTZXRTaWduIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImRhdGUiLCJnb1JlYWRhcnRjbGUiLCJ3eCIsInNldFN0b3JhZ2UiLCJrZXkiLCJuYXZpZ2F0ZVRvIiwidXJsIiwiY29tcHV0ZWQiLCJ3YXRjaCIsIkRudW0iLCJEYXRhQXJyYXkiLCJBcnJheSIsIkRhdGUiLCJnZXREYXkiLCJpIiwiSGFyciIsImoiLCJCYXJyIiwicHVzaCIsImsiLCJzaWduIiwibGVuZ3RoIiwic2lnbkRheSIsInVuc2lnbiIsInBvcCIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsZ0I7Ozs7Ozs7Ozs7Ozs7OzBNQUVuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBSVRDLE0sR0FBUyxnQixRQUVUQyxJLEdBQU87QUFDTEMsZ0JBQVU7QUFDUkMsa0JBQVMsRUFERDtBQUVSQyxtQkFBVTtBQUZGLE9BREw7QUFLTEMsZ0JBQVMsRUFMSjtBQU1MQyxnQkFBUyxJQU5KO0FBT0xDLGlCQUFVLElBUEw7QUFRTEMsY0FBTyxJQVJGO0FBU0xDLGVBQVEsSUFUSDtBQVVMQyxjQUFPLEVBVkY7QUFXTEMsY0FBTztBQUNMLGdC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LENBQVlrQyxJQUFaLENBQWlCRCxHQUFqQixFQUFvQkcsT0FBcEIsSUFBK0JiLElBQW5DLEVBQXlDO0FBQ3ZDQywwQkFBVUksR0FBVixFQUFhRSxFQUFiLEVBQWdCLENBQWhCLElBQXFCLEtBQXJCO0FBQ0Q7QUFDRjtBQUNELGlCQUFLLElBQUlHLE1BQUUsQ0FBWCxFQUFhQSxNQUFFLEtBQUtqQyxNQUFMLENBQVlxQyxNQUFaLENBQW1CRixNQUFsQyxFQUF5Q0YsS0FBekMsRUFBOEM7QUFDNUMsa0JBQUksS0FBS2pDLE1BQUwsQ0FBWXFDLE1BQVosQ0FBbUJKLEdBQW5CLEVBQXNCRyxPQUF0QixJQUFpQ2IsSUFBckMsRUFBMkM7QUFDekNDLDBCQUFVSSxHQUFWLEVBQWFFLEVBQWIsRUFBZ0IsQ0FBaEIsSUFBcUIsS0FBckI7QUFDRDtBQUNGOztBQUVEUDtBQUNEOztBQUVEO0FBQ0EsY0FBSUMsVUFBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixLQUFzQixFQUExQixFQUE2QjtBQUMzQkEsc0JBQVVjLEdBQVY7QUFDQTtBQUNEO0FBRUY7QUFFRjs7QUFFRCxXQUFLNUMsUUFBTCxHQUFnQjhCLFNBQWhCO0FBQ0FkLGNBQVFDLEdBQVIsQ0FBWSxLQUFLakIsUUFBakI7QUFDRDs7OzZCQUVPO0FBQ047QUFDQSxXQUFLQyxRQUFMLEdBQWdCLElBQUkrQixJQUFKLEdBQVdhLFdBQVgsRUFBaEI7QUFDQSxXQUFLM0MsU0FBTCxHQUFpQixJQUFJOEIsSUFBSixHQUFXYyxRQUFYLEtBQXdCLENBQXpDO0FBQ0EsV0FBS2xDLE9BQUw7QUFNRDs7OztFQTNLMkMsZUFBS21DLEk7O2tCQUE5QnZELGdCIiwiZmlsZSI6ImVkdWNhdGlvbmFsaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IFRvYXN0IGZyb20gJ3dlcHktY29tLXRvYXN0J1xuICBpbXBvcnQgdGVzdE1peGluIGZyb20gJy4uL21peGlucy90ZXN0J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIGVkdWNhdGlvbmFsaW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuXG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aVmeWKoSdcbiAgICB9XG5cbiAgICBtaXhpbnMgPSBbdGVzdE1peGluXVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIHVzZXJJbmZvOiB7XG4gICAgICAgIG5pY2tOYW1lOicnLFxuICAgICAgICBhdmF0YXJVcmw6JydcbiAgICAgIH0sXG4gICAgICBsaXN0RGF0YTpbXSxcbiAgICAgIHNob3dZZWFyOm51bGwsXG4gICAgICBzaG93TW9udGg6bnVsbCxcbiAgICAgIG9uZURheTpudWxsLFxuICAgICAgbGFzdERheTpudWxsLFxuICAgICAgaGVpZ2h0OjgwLFxuICAgICAgc3RhdHVzOntcbiAgICAgICAgXCJzaWduXCI6W1xuICAgICAgICAgIHtcInNpZ25EYXlcIjpcIjA5XCJ9LFxuICAgICAgICAgIHtcInNpZ25EYXlcIjpcIjExXCJ9LFxuICAgICAgICAgIHtcInNpZ25EYXlcIjpcIjEyXCJ9LFxuICAgICAgICAgIHtcInNpZ25EYXlcIjpcIjEzXCJ9XG4gICAgICAgIF0sXG4gICAgICAgIFwidW5zaWduXCI6W1xuICAgICAgICAgIHtcInNpZ25EYXlcIjpcIjE5XCJ9LFxuICAgICAgICAgIHtcInNpZ25EYXlcIjpcIjIwXCJ9LFxuICAgICAgICAgIHtcInNpZ25EYXlcIjpcIjIxXCJ9LFxuICAgICAgICAgIHtcInNpZ25EYXlcIjpcIjIyXCJ9XG4gICAgICAgIF0sXG4gICAgICAgIFwiYm9va0luZm9cIjogXCJmYXNkXCJcbiAgICAgIH0sXG4gICAgICBzaWduZGM6bnVsbCxcbiAgICAgIGRheTpudWxsLFxuICAgICAgY2hvb3NlRGF0ZTpudWxsXG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIGdvTmV4dCgpe1xuICAgICAgICB0aGlzLnNob3dNb250aCsrO1xuICAgICAgICB0aGlzLmNob29zZURhdGUgPSBudWxsOyAgLy/muIXnqbrngrnlh7vnirbmgIFcblxuICAgICAgICBpZiggdGhpcy5zaG93TW9udGggPiAxMiApe1xuICAgICAgICAgIHRoaXMuc2hvd01vbnRoID0gMTtcbiAgICAgICAgICB0aGlzLnNob3dZZWFyKys7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5nZXREYXRlKCk7XG5cbiAgICAgIH0sXG4gICAgICBnb1ByZXYoKXtcbiAgICAgICAgdGhpcy5zaG93TW9udGgtLTtcbiAgICAgICAgdGhpcy5jaG9vc2VEYXRlID0gbnVsbDtcblxuICAgICAgICBpZiggdGhpcy5zaG93TW9udGggPCAxICl7XG4gICAgICAgICAgdGhpcy5zaG93TW9udGggPSAxMjtcbiAgICAgICAgICB0aGlzLnNob3dZZWFyLS07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5nZXREYXRlKClcbiAgICAgIH0sXG4gICAgICBjbGlja1NldFNpZ24oZSl7XG5jb25zb2xlLmxvZyhlLmN1cnJlbnRUYXJnZXQuZGF0YXNldClcbiAgICAgICAgdGhpcy5jaG9vc2VEYXRlID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuZGF0ZVxuICAgICAgfSxcbiAgICAgIGdvUmVhZGFydGNsZSgpe1xuICAgICAgICAvLzHlt7LmiZPljaEyIOacquaJk+WNoSAzIOWOu+aJk+WNoSA16ICD6K+VXG4gICAgICAgIHd4LnNldFN0b3JhZ2Uoe2tleTpcImJ0bmZyb21QYWdlXCIsIGRhdGE6XCJlZHVjYXRpb25cIn0pXG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogJy9wYWdlcy93ZWVrcmVhZGluZ2FydGljbGVzP2luZGV4PScrMVxuICAgICAgICB9KVxuXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG5cbiAgICB9XG5cbiAgICB3YXRjaCA9IHt9XG5cbiAgICBnZXREYXRlKCl7XG4gICAgICBsZXQgRG51bSA9IDE7XG4gICAgICBsZXQgRGF0YUFycmF5ID0gbmV3IEFycmF5KCk7XG4gICAgICB0aGlzLm9uZURheSA9IG5ldyBEYXRlKHRoaXMuc2hvd1llYXIsdGhpcy5zaG93TW9udGgtMSwxKS5nZXREYXkoKTtcbiAgICAgIHRoaXMubGFzdERheSA9IG5ldyBEYXRlKHRoaXMuc2hvd1llYXIsdGhpcy5zaG93TW9udGgsMCkuZ2V0RGF0ZSgpO1xuXG5cbi8vICAgICAgdGhpcy5kYXkgPSBuZXcgRGF0ZSgpLmdldERhdGUoKTtcblxuICAgICAgLy8wIOWwvuaXpeacnyAx5L2N54q25oCBIDIg54K55Ye754q25oCBXG4gICAgICAvL+WIm+W7uuS4gOS4quS6jOe7tOaVsOe7hFxuICAgICAgZm9yKCBsZXQgaT0wO2k8NjtpKysgKXtcbiAgICAgICAgbGV0IEhhcnIgPSBuZXcgQXJyYXkoKTtcblxuICAgICAgICBmb3IoIGxldCBqPTA7ajw3O2orKyApe1xuICAgICAgICAgIGxldCBCYXJyID0gbmV3IEFycmF5KClcbiAgICAgICAgICBIYXJyLnB1c2goQmFycilcbiAgICAgICAgfVxuICAgICAgICBEYXRhQXJyYXkucHVzaChIYXJyKVxuICAgICAgfVxuICAgICAgLy/pgY3ljobnrKzkuIDooYxcbiAgICAgIGZvciggbGV0IGk9MDtpPDc7aSsrICl7XG4gICAgICAgICAgaWYoIGkgPCB0aGlzLm9uZURheSApe1xuICAgICAgICAgICAgRGF0YUFycmF5WzBdW2ldWzBdID0gJydcbiAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIERhdGFBcnJheVswXVtpXVswXSA9IERudW07XG4gICAgICAgICAgICAvL+WIpOaWreetvuWIsOeKtuaAgVxuICAgICAgICAgICAgZm9yKCBsZXQgaz0wO2s8dGhpcy5zdGF0dXMuc2lnbi5sZW5ndGg7aysrICl7XG4gICAgICAgICAgICAgIGlmKCB0aGlzLnN0YXR1cy5zaWduW2tdLnNpZ25EYXkgPT0gRG51bSApe1xuICAgICAgICAgICAgICAgIERhdGFBcnJheVswXVtpXVsxXSA9ICdkdWknXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciggbGV0IGs9MDtrPHRoaXMuc3RhdHVzLnVuc2lnbi5sZW5ndGg7aysrICl7XG4gICAgICAgICAgICAgIGlmKCB0aGlzLnN0YXR1cy51bnNpZ25ba10uc2lnbkRheSA9PSBEbnVtICl7XG4gICAgICAgICAgICAgICAgRGF0YUFycmF5WzBdW2ldWzFdID0gJ2N1bydcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBEbnVtKys7XG5cbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgICAvL+mBjeWOhuWJqeS4i+eahFxuICAgICAgZm9yKCBsZXQgaT0xO2k8NjtpKysgKXtcblxuICAgICAgICBmb3IoIGxldCBqPTA7ajw3O2orKyApe1xuXG4gICAgICAgICAgaWYoIERudW0gPiB0aGlzLmxhc3REYXkgKXtcbiAgICAgICAgICAgIERhdGFBcnJheVtpXVtqXVswXSA9ICcnO1xuICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgRGF0YUFycmF5W2ldW2pdWzBdID0gRG51bTtcbiAgICAgICAgICAgIC8v5Yik5pat562+5Yiw54q25oCBXG4gICAgICAgICAgICBmb3IoIGxldCBrPTA7azx0aGlzLnN0YXR1cy5zaWduLmxlbmd0aDtrKysgKXtcbiAgICAgICAgICAgICAgaWYoIHRoaXMuc3RhdHVzLnNpZ25ba10uc2lnbkRheSA9PSBEbnVtICl7XG4gICAgICAgICAgICAgICAgRGF0YUFycmF5W2ldW2pdWzFdID0gJ2R1aSdcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yKCBsZXQgaz0wO2s8dGhpcy5zdGF0dXMudW5zaWduLmxlbmd0aDtrKysgKXtcbiAgICAgICAgICAgICAgaWYoIHRoaXMuc3RhdHVzLnVuc2lnbltrXS5zaWduRGF5ID09IERudW0gKXtcbiAgICAgICAgICAgICAgICBEYXRhQXJyYXlbaV1bal1bMV0gPSAnY3VvJ1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIERudW0rKztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvL+WkhOeQhue7k+WwvuS4gOihjFxuICAgICAgICAgIGlmKCBEYXRhQXJyYXlbNV1bMF1bMF0gPT0gJycpe1xuICAgICAgICAgICAgRGF0YUFycmF5LnBvcCgpXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICB9XG5cbiAgICAgIHRoaXMubGlzdERhdGEgPSBEYXRhQXJyYXk7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmxpc3REYXRhKVxuICAgIH1cblxuICAgIG9uTG9hZCgpe1xuICAgICAgLy/liJ3lp4vljJbml6XljoZcbiAgICAgIHRoaXMuc2hvd1llYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XG4gICAgICB0aGlzLnNob3dNb250aCA9IG5ldyBEYXRlKCkuZ2V0TW9udGgoKSArIDE7XG4gICAgICB0aGlzLmdldERhdGUoKVxuXG5cblxuXG5cbiAgICB9XG5cbiAgfVxuIl19