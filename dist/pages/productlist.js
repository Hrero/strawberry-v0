'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _productswiper = require('./../components/productswiper.js');

var _productswiper2 = _interopRequireDefault(_productswiper);

var _wepyComToast = require('./../npm/wepy-com-toast/toast.js');

var _wepyComToast2 = _interopRequireDefault(_wepyComToast);

var _test = require('./../mixins/test.js');

var _test2 = _interopRequireDefault(_test);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProductList = function (_wepy$page) {
    _inherits(ProductList, _wepy$page);

    function ProductList() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, ProductList);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ProductList.__proto__ || Object.getPrototypeOf(ProductList)).call.apply(_ref, [this].concat(args))), _this), _this.config = {

            navigationBarTitleText: '产品列表'

        }, _this.components = {
            swiper: _productswiper2.default
        }, _this.minxins = [_test2.default], _this.data = {}, _this.computed = {}, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return ProductList;
}(_wepy2.default.page);

exports.default = ProductList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3RsaXN0LmpzIl0sIm5hbWVzIjpbIlByb2R1Y3RMaXN0IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJzd2lwZXIiLCJtaW54aW5zIiwiZGF0YSIsImNvbXB1dGVkIiwibWV0aG9kcyIsImV2ZW50cyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxXOzs7Ozs7Ozs7Ozs7OztvTUFFakJDLE0sR0FBUzs7QUFFTEMsb0NBQXdCOztBQUZuQixTLFFBTVRDLFUsR0FBYTtBQUNUQztBQURTLFMsUUFJYkMsTyxHQUFVLGdCLFFBRVZDLEksR0FBTyxFLFFBQ1BDLFEsR0FBVyxFLFFBQ1hDLE8sR0FBVSxFLFFBQ1ZDLE0sR0FBUyxFOzs7O0VBakI0QixlQUFLQyxJOztrQkFBekJWLFciLCJmaWxlIjoicHJvZHVjdGxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IFN3aXBlciBmcm9tICcuLi9jb21wb25lbnRzL3Byb2R1Y3Rzd2lwZXInXG4gIGltcG9ydCBUb2FzdCBmcm9tICd3ZXB5LWNvbS10b2FzdCdcbiAgaW1wb3J0IHRlc3RNaXhpbiBmcm9tICcuLi9taXhpbnMvdGVzdCdcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdExpc3QgZXh0ZW5kcyB3ZXB5LnBhZ2V7XG5cbiAgICAgIGNvbmZpZyA9IHtcblxuICAgICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfkuqflk4HliJfooagnXG5cbiAgICAgIH1cblxuICAgICAgY29tcG9uZW50cyA9IHtcbiAgICAgICAgICBzd2lwZXI6IFN3aXBlclxuICAgICAgfVxuXG4gICAgICBtaW54aW5zID0gW3Rlc3RNaXhpbl1cblxuICAgICAgZGF0YSA9IHt9XG4gICAgICBjb21wdXRlZCA9IHt9XG4gICAgICBtZXRob2RzID0ge31cbiAgICAgIGV2ZW50cyA9IHt9XG5cblxuICB9XG5cblxuIl19