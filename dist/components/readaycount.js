'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import abc from 'abc'

var readaycount = function (_wepy$component) {
  _inherits(readaycount, _wepy$component);

  function readaycount() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, readaycount);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = readaycount.__proto__ || Object.getPrototypeOf(readaycount)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      userInfo: {
        nickName: '',
        avatarUrl: ''
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }
  //    props = {
  //      num: {
  //        type: [Number, String],
  //        coerce: function (v) {
  //          return +v
  //        },
  //        default: 50
  //      }
  //    }

  _createClass(readaycount, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return readaycount;
}(_wepy2.default.component);

exports.default = readaycount;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWRheWNvdW50LmpzIl0sIm5hbWVzIjpbInJlYWRheWNvdW50IiwiZGF0YSIsInVzZXJJbmZvIiwibmlja05hbWUiLCJhdmF0YXJVcmwiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7QUFDQTs7SUFFcUJBLFc7Ozs7Ozs7Ozs7Ozs7O2dNQVduQkMsSSxHQUFPO0FBQ0xDLGdCQUFVO0FBQ1JDLGtCQUFTLEVBREQ7QUFFUkMsbUJBQVU7QUFGRjtBQURMLEs7O0FBVlg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OzZCQVFZLENBRVA7Ozs7RUFuQnNDLGVBQUtDLFM7O2tCQUF6QkwsVyIsImZpbGUiOiJyZWFkYXljb3VudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICAvLyBpbXBvcnQgYWJjIGZyb20gJ2FiYydcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyByZWFkYXljb3VudCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbi8vICAgIHByb3BzID0ge1xuLy8gICAgICBudW06IHtcbi8vICAgICAgICB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuLy8gICAgICAgIGNvZXJjZTogZnVuY3Rpb24gKHYpIHtcbi8vICAgICAgICAgIHJldHVybiArdlxuLy8gICAgICAgIH0sXG4vLyAgICAgICAgZGVmYXVsdDogNTBcbi8vICAgICAgfVxuLy8gICAgfVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIHVzZXJJbmZvOiB7XG4gICAgICAgIG5pY2tOYW1lOicnLFxuICAgICAgICBhdmF0YXJVcmw6JydcbiAgICAgIH1cbiAgICB9XG4gICAgb25Mb2FkKCl7XG5cbiAgICB9XG4gIH1cbiJdfQ==