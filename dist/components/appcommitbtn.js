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

var commitBtn = function (_wepy$component) {
  _inherits(commitBtn, _wepy$component);

  function commitBtn() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, commitBtn);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = commitBtn.__proto__ || Object.getPrototypeOf(commitBtn)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(commitBtn, [{
    key: 'onLoad',
    value: function onLoad() {
      console.log(this.btnText);
    }
  }]);

  return commitBtn;
}(_wepy2.default.component);

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.props = ['Text'];
  this.data = {
    userInfo: {
      nickName: '',
      avatarUrl: ''
    },
    Text: ''
  };
  this.methods = {
    go: function go() {
      this.$emit('goReadSuccess');
    }
  };
  this.events = {
    'Text': function Text() {
      _this2.Text = arguments.length <= 0 ? undefined : arguments[0];
    }
  };
};

exports.default = commitBtn;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcGNvbW1pdGJ0bi5qcyJdLCJuYW1lcyI6WyJjb21taXRCdG4iLCJjb25zb2xlIiwibG9nIiwiYnRuVGV4dCIsImNvbXBvbmVudCIsInByb3BzIiwiZGF0YSIsInVzZXJJbmZvIiwibmlja05hbWUiLCJhdmF0YXJVcmwiLCJUZXh0IiwibWV0aG9kcyIsImdvIiwiJGVtaXQiLCJldmVudHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFFcUJBLFM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBbUJYO0FBQ1pDLGNBQVFDLEdBQVIsQ0FBWSxLQUFLQyxPQUFqQjtBQUNLOzs7O0VBckJvQyxlQUFLQyxTOzs7OztPQUMxQ0MsSyxHQUFNLENBQUMsTUFBRCxDO09BQ05DLEksR0FBTztBQUNMQyxjQUFVO0FBQ1JDLGdCQUFTLEVBREQ7QUFFUkMsaUJBQVU7QUFGRixLQURMO0FBS0xDLFVBQUs7QUFMQSxHO09BT1BDLE8sR0FBVTtBQUNOQyxNQURNLGdCQUNGO0FBQ0YsV0FBS0MsS0FBTCxDQUFXLGVBQVg7QUFDRDtBQUhLLEc7T0FLVkMsTSxHQUFTO0FBQ1AsWUFBUSxnQkFBYTtBQUNuQixhQUFLSixJQUFMO0FBQ0Q7QUFITSxHOzs7a0JBZFVWLFMiLCJmaWxlIjoiYXBwY29tbWl0YnRuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgY29tbWl0QnRuIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgIHByb3BzPVsnVGV4dCddXG4gICAgZGF0YSA9IHtcbiAgICAgIHVzZXJJbmZvOiB7XG4gICAgICAgIG5pY2tOYW1lOicnLFxuICAgICAgICBhdmF0YXJVcmw6JydcbiAgICAgIH0sXG4gICAgICBUZXh0OicnXG4gICAgfVxuICAgIG1ldGhvZHMgPSB7XG4gICAgICAgIGdvKCl7XG4gICAgICAgICAgdGhpcy4kZW1pdCgnZ29SZWFkU3VjY2VzcycpXG4gICAgICAgIH1cbiAgICB9XG4gICAgZXZlbnRzID0ge1xuICAgICAgJ1RleHQnOiAoLi4uYXJncykgPT4ge1xuICAgICAgICB0aGlzLlRleHQgPSBhcmdzWzBdXG4gICAgICB9XG4gICAgfVxuICAgIG9uTG9hZCgpe1xuY29uc29sZS5sb2codGhpcy5idG5UZXh0KVxuICAgIH1cbiAgfVxuIl19