'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _datel = require('./datel.js');

var _datel2 = _interopRequireDefault(_datel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var dateh = function (_wepy$component) {
  _inherits(dateh, _wepy$component);

  function dateh() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, dateh);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = dateh.__proto__ || Object.getPrototypeOf(dateh)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      list: {}
    }, _this.$repeat = { "list": { "com": "datel", "props": "dateListl" } }, _this.$props = { "datel": { "xmlns:v-bind": { "value": "", "for": "list", "item": "litem", "index": "index", "key": "key" }, "v-bind:dateListl.once": { "value": "litem", "type": "item", "for": "list", "item": "litem", "index": "index", "key": "key" } } }, _this.$events = {}, _this.components = {
      datel: _datel2.default
    }, _this.methods = {
      tap: function tap() {
        this.grouplist.name = 'Parent Random(' + Math.random() + ')';
        console.log(this);
        console.log('Clicked Group ' + this.$index + ', ID is ' + this.grouplist.id);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return dateh;
}(_wepy2.default.component);

exports.default = dateh;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGVoLmpzIl0sIm5hbWVzIjpbImRhdGVoIiwicHJvcHMiLCJsaXN0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiZGF0ZWwiLCJtZXRob2RzIiwidGFwIiwiZ3JvdXBsaXN0IiwibmFtZSIsIk1hdGgiLCJyYW5kb20iLCJjb25zb2xlIiwibG9nIiwiJGluZGV4IiwiaWQiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFHcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsSyxHQUFRO0FBQ05DLFlBQU07QUFEQSxLLFFBSVRDLE8sR0FBVSxFQUFDLFFBQU8sRUFBQyxPQUFNLE9BQVAsRUFBZSxTQUFRLFdBQXZCLEVBQVIsRSxRQUNiQyxNLEdBQVMsRUFBQyxTQUFRLEVBQUMsZ0JBQWUsRUFBQyxTQUFRLEVBQVQsRUFBWSxPQUFNLE1BQWxCLEVBQXlCLFFBQU8sT0FBaEMsRUFBd0MsU0FBUSxPQUFoRCxFQUF3RCxPQUFNLEtBQTlELEVBQWhCLEVBQXFGLHlCQUF3QixFQUFDLFNBQVEsT0FBVCxFQUFpQixRQUFPLE1BQXhCLEVBQStCLE9BQU0sTUFBckMsRUFBNEMsUUFBTyxPQUFuRCxFQUEyRCxTQUFRLE9BQW5FLEVBQTJFLE9BQU0sS0FBakYsRUFBN0csRUFBVCxFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNSQztBQURRLEssUUFHVkMsTyxHQUFVO0FBQ1JDLFNBRFEsaUJBQ0Q7QUFDTCxhQUFLQyxTQUFMLENBQWVDLElBQWYsc0JBQXVDQyxLQUFLQyxNQUFMLEVBQXZDO0FBQ0FDLGdCQUFRQyxHQUFSLENBQVksSUFBWjtBQUNBRCxnQkFBUUMsR0FBUixvQkFBNkIsS0FBS0MsTUFBbEMsZ0JBQW1ELEtBQUtOLFNBQUwsQ0FBZU8sRUFBbEU7QUFDRDtBQUxPLEs7Ozs7RUFYdUIsZUFBS0MsUzs7a0JBQW5CbEIsSyIsImZpbGUiOiJkYXRlaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgRGF0ZWwgZnJvbSAnLi9kYXRlbCdcblxuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIGRhdGVoIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgIHByb3BzID0ge1xuICAgICAgbGlzdDoge31cbiAgICB9XG5cbiAgICRyZXBlYXQgPSB7XCJsaXN0XCI6e1wiY29tXCI6XCJkYXRlbFwiLFwicHJvcHNcIjpcImRhdGVMaXN0bFwifX07XHJcbiRwcm9wcyA9IHtcImRhdGVsXCI6e1wieG1sbnM6di1iaW5kXCI6e1widmFsdWVcIjpcIlwiLFwiZm9yXCI6XCJsaXN0XCIsXCJpdGVtXCI6XCJsaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImtleVwifSxcInYtYmluZDpkYXRlTGlzdGwub25jZVwiOntcInZhbHVlXCI6XCJsaXRlbVwiLFwidHlwZVwiOlwiaXRlbVwiLFwiZm9yXCI6XCJsaXN0XCIsXCJpdGVtXCI6XCJsaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImtleVwifX19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgZGF0ZWw6IERhdGVsXG4gICAgfVxuICAgIG1ldGhvZHMgPSB7XG4gICAgICB0YXAgKCkge1xuICAgICAgICB0aGlzLmdyb3VwbGlzdC5uYW1lID0gYFBhcmVudCBSYW5kb20oJHtNYXRoLnJhbmRvbSgpfSlgXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMpXG4gICAgICAgIGNvbnNvbGUubG9nKGBDbGlja2VkIEdyb3VwICR7dGhpcy4kaW5kZXh9LCBJRCBpcyAke3RoaXMuZ3JvdXBsaXN0LmlkfWApXG4gICAgICB9XG4gICAgfVxuICB9XG4iXX0=