'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var datel = function (_wepy$component) {
  _inherits(datel, _wepy$component);

  function datel() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, datel);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = datel.__proto__ || Object.getPrototypeOf(datel)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      dateListl: []
    }, _this.components = {}, _this.methods = {
      tap: function tap() {
        this.grouplist.name = 'Parent Random(' + Math.random() + ')';
        console.log(this);
        console.log('Clicked Group ' + this.$index + ', ID is ' + this.grouplist.id);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return datel;
}(_wepy2.default.component);

exports.default = datel;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGVsLmpzIl0sIm5hbWVzIjpbImRhdGVsIiwicHJvcHMiLCJkYXRlTGlzdGwiLCJjb21wb25lbnRzIiwibWV0aG9kcyIsInRhcCIsImdyb3VwbGlzdCIsIm5hbWUiLCJNYXRoIiwicmFuZG9tIiwiY29uc29sZSIsImxvZyIsIiRpbmRleCIsImlkIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRUU7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxLLEdBQVE7QUFDTkMsaUJBQVc7QUFETCxLLFFBSVJDLFUsR0FBYSxFLFFBRWJDLE8sR0FBVTtBQUNSQyxTQURRLGlCQUNEO0FBQ0wsYUFBS0MsU0FBTCxDQUFlQyxJQUFmLHNCQUF1Q0MsS0FBS0MsTUFBTCxFQUF2QztBQUNBQyxnQkFBUUMsR0FBUixDQUFZLElBQVo7QUFDQUQsZ0JBQVFDLEdBQVIsb0JBQTZCLEtBQUtDLE1BQWxDLGdCQUFtRCxLQUFLTixTQUFMLENBQWVPLEVBQWxFO0FBQ0Q7QUFMTyxLOzs7O0VBUHVCLGVBQUtDLFM7O2tCQUFuQmQsSyIsImZpbGUiOiJkYXRlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgZGF0ZWwgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgcHJvcHMgPSB7XG4gICAgICBkYXRlTGlzdGw6IFtdXG4gICAgfVxuXG4gICAgY29tcG9uZW50cyA9IHtcbiAgICB9XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHRhcCAoKSB7XG4gICAgICAgIHRoaXMuZ3JvdXBsaXN0Lm5hbWUgPSBgUGFyZW50IFJhbmRvbSgke01hdGgucmFuZG9tKCl9KWBcbiAgICAgICAgY29uc29sZS5sb2codGhpcylcbiAgICAgICAgY29uc29sZS5sb2coYENsaWNrZWQgR3JvdXAgJHt0aGlzLiRpbmRleH0sIElEIGlzICR7dGhpcy5ncm91cGxpc3QuaWR9YClcbiAgICAgIH1cbiAgICB9XG4gIH1cbiJdfQ==