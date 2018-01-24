'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _shareinfoheader = require('./../components/shareinfoheader.js');

var _shareinfoheader2 = _interopRequireDefault(_shareinfoheader);

var _wepyComToast = require('./../npm/wepy-com-toast/toast.js');

var _wepyComToast2 = _interopRequireDefault(_wepyComToast);

var _test = require('./../mixins/test.js');

var _test2 = _interopRequireDefault(_test);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TermBegins = function (_wepy$page) {
  _inherits(TermBegins, _wepy$page);

  function TermBegins() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TermBegins);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TermBegins.__proto__ || Object.getPrototypeOf(TermBegins)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '开学页'
    }, _this.$repeat = {}, _this.$props = { "infoHeader": { "title": "sharenondivision" } }, _this.$events = {}, _this.components = {
      infoHeader: _shareinfoheader2.default
    }, _this.mixins = [_test2.default], _this.data = {
      userInfo: {
        nickName: '',
        avatarUrl: ''
      },
      isShow: true
    }, _this.methods = {
      JumpReport: function JumpReport() {}
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TermBegins, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return TermBegins;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(TermBegins , 'pages/sharenondivision'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlbm9uZGl2aXNpb24uanMiXSwibmFtZXMiOlsiVGVybUJlZ2lucyIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJpbmZvSGVhZGVyIiwibWl4aW5zIiwiZGF0YSIsInVzZXJJbmZvIiwibmlja05hbWUiLCJhdmF0YXJVcmwiLCJpc1Nob3ciLCJtZXRob2RzIiwiSnVtcFJlcG9ydCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFU7Ozs7Ozs7Ozs7Ozs7OzhMQUVuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBSVZDLE8sR0FBVSxFLFFBQ2JDLE0sR0FBUyxFQUFDLGNBQWEsRUFBQyxTQUFRLGtCQUFULEVBQWQsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDUkM7QUFEUSxLLFFBSVZDLE0sR0FBUyxnQixRQUVUQyxJLEdBQU87QUFDTEMsZ0JBQVU7QUFDUkMsa0JBQVMsRUFERDtBQUVSQyxtQkFBVTtBQUZGLE9BREw7QUFLTEMsY0FBUTtBQUxILEssUUFRUEMsTyxHQUFVO0FBQ1JDLGdCQURRLHdCQUNJLENBR1g7QUFKTyxLOzs7Ozs2QkFNRixDQUVQOzs7O0VBL0JxQyxlQUFLQyxJOztrQkFBeEJoQixVIiwiZmlsZSI6InNoYXJlbm9uZGl2aXNpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IEluZm9IZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9zaGFyZWluZm9oZWFkZXInXG4gIGltcG9ydCBUb2FzdCBmcm9tICd3ZXB5LWNvbS10b2FzdCdcbiAgaW1wb3J0IHRlc3RNaXhpbiBmcm9tICcuLi9taXhpbnMvdGVzdCdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBUZXJtQmVnaW5zIGV4dGVuZHMgd2VweS5wYWdlIHtcblxuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICflvIDlrabpobUnXG4gICAgfVxuXG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcImluZm9IZWFkZXJcIjp7XCJ0aXRsZVwiOlwic2hhcmVub25kaXZpc2lvblwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICBpbmZvSGVhZGVyOiBJbmZvSGVhZGVyXG4gICAgfVxuXG4gICAgbWl4aW5zID0gW3Rlc3RNaXhpbl1cblxuICAgIGRhdGEgPSB7XG4gICAgICB1c2VySW5mbzoge1xuICAgICAgICBuaWNrTmFtZTonJyxcbiAgICAgICAgYXZhdGFyVXJsOicnXG4gICAgICB9LFxuICAgICAgaXNTaG93OiB0cnVlXG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIEp1bXBSZXBvcnQoKXtcblxuXG4gICAgICB9XG4gICAgfVxuICAgIG9uTG9hZCgpe1xuXG4gICAgfVxuICB9XG4iXX0=