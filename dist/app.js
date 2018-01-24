'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this.config = {
      pages: ['pages/personalweeklabel', 'pages/personalweekmark', 'pages/educationalindex', 'pages/weekjobindex', 'pages/personalcenter', 'pages/personalfeedsuccess', 'pages/personalfeedback', 'pages/shareInviting', 'pages/personalenchiridion', 'pages/personalstudyplan', 'pages/weekexaminationpaper', 'pages/weekfraction', 'pages/weekexamresult', 'pages/weekreadsuccess', 'pages/index', 'pages/weekreadingarticles', 'pages/sharetermbegins', 'pages/sharepay', 'pages/sharedistribution', 'pages/sharereport', 'pages/sharexieyi', 'pages/sharenondivision', 'pages/shareperson', 'pages/sharentry', 'pages/wxparse'],
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#333333',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: '#ffffff'
      },
      "tabBar": {
        "list": [{
          "pagePath": "pages/weekjobindex",
          "iconPath": "images/mina/about.png",
          "selectedIconPath": "images/mina/about.png",
          "text": "本周任务"
        }, {
          "pagePath": "pages/educationalindex",
          "iconPath": "images/mina/active.png",
          "selectedIconPath": "images/mina/active.png",
          "text": "教务"
        }, {
          "pagePath": "pages/personalcenter",
          "iconPath": "images/mina/about.png",
          "selectedIconPath": "images/mina/about.png",
          "text": "个人中心"
        }]
      }
    };
    _this.globalData = {
      userInfo: null
    };

    _this.use('requestfix');
    return _this;
  }

  _createClass(_default, [{
    key: 'onLaunch',
    value: function onLaunch(res) {

      var id = 2;

      if (id == 1) {
        wx.redirectTo({
          url: '/pages/shareallready'
        });
      }

      this.testAsync();
    }
  }, {
    key: 'sleep',
    value: function sleep(s) {

      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          resolve('promise resolved');
        }, s * 1000);
      });
    }
  }, {
    key: 'testAsync',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.sleep(3);

              case 2:
                data = _context.sent;

                console.log(data);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function testAsync() {
        return _ref.apply(this, arguments);
      }

      return testAsync;
    }()
  }, {
    key: 'getUserInfo',
    value: function getUserInfo(cb) {
      var that = this;
      if (this.globalData.userInfo) {
        return this.globalData.userInfo;
      }
      _wepy2.default.getUserInfo({
        success: function success(res) {
          that.globalData.userInfo = res.userInfo;
          cb && cb(res.userInfo);
        }
      });
    }
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJnbG9iYWxEYXRhIiwidXNlckluZm8iLCJ1c2UiLCJyZXMiLCJpZCIsInd4IiwicmVkaXJlY3RUbyIsInVybCIsInRlc3RBc3luYyIsInMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInNldFRpbWVvdXQiLCJzbGVlcCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiY2IiLCJ0aGF0IiwiZ2V0VXNlckluZm8iLCJzdWNjZXNzIiwiYXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUE2REUsc0JBQWU7QUFBQTs7QUFBQTs7QUFBQSxVQTFEZkEsTUEwRGUsR0ExRE47QUFDUEMsYUFBTyxDQUNMLHlCQURLLEVBRUwsd0JBRkssRUFHTCx3QkFISyxFQUlMLG9CQUpLLEVBS0wsc0JBTEssRUFNTCwyQkFOSyxFQU9MLHdCQVBLLEVBUUwscUJBUkssRUFTTCwyQkFUSyxFQVVMLHlCQVZLLEVBV0wsNEJBWEssRUFZTCxvQkFaSyxFQWFMLHNCQWJLLEVBY0wsdUJBZEssRUFlTCxhQWZLLEVBZ0JMLDJCQWhCSyxFQWlCTCx1QkFqQkssRUFrQkwsZ0JBbEJLLEVBbUJMLHlCQW5CSyxFQW9CTCxtQkFwQkssRUFxQkwsa0JBckJLLEVBc0JMLHdCQXRCSyxFQXVCTCxtQkF2QkssRUF3QkwsaUJBeEJLLEVBeUJMLGVBekJLLENBREE7QUE0QlBDLGNBQVE7QUFDTkMsNkJBQXFCLE9BRGY7QUFFTkMsc0NBQThCLFNBRnhCO0FBR05DLGdDQUF3QixRQUhsQjtBQUlOQyxnQ0FBd0I7QUFKbEIsT0E1QkQ7QUFrQ1AsZ0JBQVU7QUFDUixnQkFBUSxDQUFDO0FBQ1Asc0JBQVksb0JBREw7QUFFUCxzQkFBWSx1QkFGTDtBQUdQLDhCQUFvQix1QkFIYjtBQUlQLGtCQUFRO0FBSkQsU0FBRCxFQUtMO0FBQ0Qsc0JBQVksd0JBRFg7QUFFRCxzQkFBWSx3QkFGWDtBQUdELDhCQUFvQix3QkFIbkI7QUFJRCxrQkFBUTtBQUpQLFNBTEssRUFVTDtBQUNELHNCQUFZLHNCQURYO0FBRUQsc0JBQVksdUJBRlg7QUFHRCw4QkFBb0IsdUJBSG5CO0FBSUQsa0JBQVE7QUFKUCxTQVZLO0FBREE7QUFsQ0gsS0EwRE07QUFBQSxVQUpmQyxVQUllLEdBSkY7QUFDWEMsZ0JBQVU7QUFEQyxLQUlFOztBQUViLFVBQUtDLEdBQUwsQ0FBUyxZQUFUO0FBRmE7QUFHZDs7Ozs2QkFFUUMsRyxFQUFLOztBQUVWLFVBQUlDLEtBQUssQ0FBVDs7QUFFQSxVQUFHQSxNQUFJLENBQVAsRUFBUztBQUNQQyxXQUFHQyxVQUFILENBQWM7QUFDWkMsZUFBSztBQURPLFNBQWQ7QUFHRDs7QUFFRCxXQUFLQyxTQUFMO0FBRUg7OzswQkFFTUMsQyxFQUFHOztBQUVSLGFBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0Q0MsbUJBQVcsWUFBTTtBQUNmRixrQkFBUSxrQkFBUjtBQUNELFNBRkQsRUFFR0YsSUFBSSxJQUZQO0FBR0QsT0FKTSxDQUFQO0FBTUQ7Ozs7Ozs7Ozs7O3VCQUdvQixLQUFLSyxLQUFMLENBQVcsQ0FBWCxDOzs7QUFBYkMsb0I7O0FBQ05DLHdCQUFRQyxHQUFSLENBQVlGLElBQVo7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQ0FHVUcsRSxFQUFJO0FBQ2QsVUFBTUMsT0FBTyxJQUFiO0FBQ0EsVUFBSSxLQUFLbkIsVUFBTCxDQUFnQkMsUUFBcEIsRUFBOEI7QUFDNUIsZUFBTyxLQUFLRCxVQUFMLENBQWdCQyxRQUF2QjtBQUNEO0FBQ0QscUJBQUttQixXQUFMLENBQWlCO0FBQ2ZDLGVBRGUsbUJBQ05sQixHQURNLEVBQ0Q7QUFDWmdCLGVBQUtuQixVQUFMLENBQWdCQyxRQUFoQixHQUEyQkUsSUFBSUYsUUFBL0I7QUFDQWlCLGdCQUFNQSxHQUFHZixJQUFJRixRQUFQLENBQU47QUFDRDtBQUpjLE9BQWpCO0FBTUQ7Ozs7RUF4RzBCLGVBQUtxQixHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCAnd2VweS1hc3luYy1mdW5jdGlvbidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyB3ZXB5LmFwcCB7XG4gIGNvbmZpZyA9IHtcbiAgICBwYWdlczogW1xuICAgICAgJ3BhZ2VzL3BlcnNvbmFsd2Vla2xhYmVsJyxcbiAgICAgICdwYWdlcy9wZXJzb25hbHdlZWttYXJrJyxcbiAgICAgICdwYWdlcy9lZHVjYXRpb25hbGluZGV4JyxcbiAgICAgICdwYWdlcy93ZWVram9iaW5kZXgnLFxuICAgICAgJ3BhZ2VzL3BlcnNvbmFsY2VudGVyJyxcbiAgICAgICdwYWdlcy9wZXJzb25hbGZlZWRzdWNjZXNzJyxcbiAgICAgICdwYWdlcy9wZXJzb25hbGZlZWRiYWNrJyxcbiAgICAgICdwYWdlcy9zaGFyZUludml0aW5nJyxcbiAgICAgICdwYWdlcy9wZXJzb25hbGVuY2hpcmlkaW9uJyxcbiAgICAgICdwYWdlcy9wZXJzb25hbHN0dWR5cGxhbicsXG4gICAgICAncGFnZXMvd2Vla2V4YW1pbmF0aW9ucGFwZXInLFxuICAgICAgJ3BhZ2VzL3dlZWtmcmFjdGlvbicsXG4gICAgICAncGFnZXMvd2Vla2V4YW1yZXN1bHQnLFxuICAgICAgJ3BhZ2VzL3dlZWtyZWFkc3VjY2VzcycsXG4gICAgICAncGFnZXMvaW5kZXgnLFxuICAgICAgJ3BhZ2VzL3dlZWtyZWFkaW5nYXJ0aWNsZXMnLFxuICAgICAgJ3BhZ2VzL3NoYXJldGVybWJlZ2lucycsXG4gICAgICAncGFnZXMvc2hhcmVwYXknLFxuICAgICAgJ3BhZ2VzL3NoYXJlZGlzdHJpYnV0aW9uJyxcbiAgICAgICdwYWdlcy9zaGFyZXJlcG9ydCcsXG4gICAgICAncGFnZXMvc2hhcmV4aWV5aScsXG4gICAgICAncGFnZXMvc2hhcmVub25kaXZpc2lvbicsXG4gICAgICAncGFnZXMvc2hhcmVwZXJzb24nLFxuICAgICAgJ3BhZ2VzL3NoYXJlbnRyeScsXG4gICAgICAncGFnZXMvd3hwYXJzZSdcbiAgICBdLFxuICAgIHdpbmRvdzoge1xuICAgICAgYmFja2dyb3VuZFRleHRTdHlsZTogJ2xpZ2h0JyxcbiAgICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICcjMzMzMzMzJyxcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICdXZUNoYXQnLFxuICAgICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJyNmZmZmZmYnXG4gICAgfSxcbiAgICBcInRhYkJhclwiOiB7XG4gICAgICBcImxpc3RcIjogW3tcbiAgICAgICAgXCJwYWdlUGF0aFwiOiBcInBhZ2VzL3dlZWtqb2JpbmRleFwiLFxuICAgICAgICBcImljb25QYXRoXCI6IFwiaW1hZ2VzL21pbmEvYWJvdXQucG5nXCIsXG4gICAgICAgIFwic2VsZWN0ZWRJY29uUGF0aFwiOiBcImltYWdlcy9taW5hL2Fib3V0LnBuZ1wiLFxuICAgICAgICBcInRleHRcIjogXCLmnKzlkajku7vliqFcIlxuICAgICAgfSwge1xuICAgICAgICBcInBhZ2VQYXRoXCI6IFwicGFnZXMvZWR1Y2F0aW9uYWxpbmRleFwiLFxuICAgICAgICBcImljb25QYXRoXCI6IFwiaW1hZ2VzL21pbmEvYWN0aXZlLnBuZ1wiLFxuICAgICAgICBcInNlbGVjdGVkSWNvblBhdGhcIjogXCJpbWFnZXMvbWluYS9hY3RpdmUucG5nXCIsXG4gICAgICAgIFwidGV4dFwiOiBcIuaVmeWKoVwiXG4gICAgICB9LCB7XG4gICAgICAgIFwicGFnZVBhdGhcIjogXCJwYWdlcy9wZXJzb25hbGNlbnRlclwiLFxuICAgICAgICBcImljb25QYXRoXCI6IFwiaW1hZ2VzL21pbmEvYWJvdXQucG5nXCIsXG4gICAgICAgIFwic2VsZWN0ZWRJY29uUGF0aFwiOiBcImltYWdlcy9taW5hL2Fib3V0LnBuZ1wiLFxuICAgICAgICBcInRleHRcIjogXCLkuKrkurrkuK3lv4NcIlxuICAgICAgfV1cbiAgICB9XG4gIH1cblxuICBnbG9iYWxEYXRhID0ge1xuICAgIHVzZXJJbmZvOiBudWxsXG4gIH1cblxuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMudXNlKCdyZXF1ZXN0Zml4JylcbiAgfVxuXG4gIG9uTGF1bmNoKHJlcykge1xuXG4gICAgICBsZXQgaWQgPSAyO1xuXG4gICAgICBpZihpZD09MSl7XG4gICAgICAgIHd4LnJlZGlyZWN0VG8oe1xuICAgICAgICAgIHVybDogJy9wYWdlcy9zaGFyZWFsbHJlYWR5J1xuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICB0aGlzLnRlc3RBc3luYygpXG5cbiAgfVxuXG4gIHNsZWVwIChzKSB7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHJlc29sdmUoJ3Byb21pc2UgcmVzb2x2ZWQnKVxuICAgICAgfSwgcyAqIDEwMDApXG4gICAgfSlcblxuICB9XG5cbiAgYXN5bmMgdGVzdEFzeW5jICgpIHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5zbGVlcCgzKVxuICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gIH1cblxuICBnZXRVc2VySW5mbyhjYikge1xuICAgIGNvbnN0IHRoYXQgPSB0aGlzXG4gICAgaWYgKHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mbykge1xuICAgICAgcmV0dXJuIHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mb1xuICAgIH1cbiAgICB3ZXB5LmdldFVzZXJJbmZvKHtcbiAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICB0aGF0Lmdsb2JhbERhdGEudXNlckluZm8gPSByZXMudXNlckluZm9cbiAgICAgICAgY2IgJiYgY2IocmVzLnVzZXJJbmZvKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==