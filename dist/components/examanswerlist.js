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

var examanswerlist = function (_wepy$component) {
  _inherits(examanswerlist, _wepy$component);

  function examanswerlist() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, examanswerlist);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = examanswerlist.__proto__ || Object.getPrototypeOf(examanswerlist)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      answerList: [],
      English: []
    }, _this.data = {
      src: '/images/week/nochoose@3x.png',
      answerList: [],
      index: '',
      English: []
    }, _this.methods = {
      chooseThis: function chooseThis(e) {
        console.log(e);
        //this.src = '/images/week/choose@3x.png'
        //this.gitem.childname = `Child Random(${Math.random()})`
        // console.log(`Clicked Group ${this.$parent.$index}. Item ${this.$index}, ID is ${this.gitem.childid}`)
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return examanswerlist;
}(_wepy2.default.component);

exports.default = examanswerlist;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1hbnN3ZXJsaXN0LmpzIl0sIm5hbWVzIjpbImV4YW1hbnN3ZXJsaXN0IiwicHJvcHMiLCJhbnN3ZXJMaXN0IiwiRW5nbGlzaCIsImRhdGEiLCJzcmMiLCJpbmRleCIsIm1ldGhvZHMiLCJjaG9vc2VUaGlzIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBRXFCQSxjOzs7Ozs7Ozs7Ozs7OztzTUFDbkJDLEssR0FBUTtBQUNOQyxrQkFBVyxFQURMO0FBRU5DLGVBQVE7QUFGRixLLFFBSVJDLEksR0FBTztBQUNIQyxXQUFJLDhCQUREO0FBRUhILGtCQUFXLEVBRlI7QUFHSEksYUFBTSxFQUhIO0FBSUhILGVBQVE7QUFKTCxLLFFBTVBJLE8sR0FBVTtBQUNSQyxnQkFEUSxzQkFDSUMsQ0FESixFQUNPO0FBQ1hDLGdCQUFRQyxHQUFSLENBQVlGLENBQVo7QUFDRjtBQUNBO0FBQ0Q7QUFDQTtBQU5PLEs7Ozs7RUFYZ0MsZUFBS0csUzs7a0JBQTVCWixjIiwiZmlsZSI6ImV4YW1hbnN3ZXJsaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXhhbWFuc3dlcmxpc3QgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgcHJvcHMgPSB7XG4gICAgICBhbnN3ZXJMaXN0OltdLFxuICAgICAgRW5nbGlzaDpbXVxuICAgIH1cbiAgICBkYXRhID0ge1xuICAgICAgICBzcmM6Jy9pbWFnZXMvd2Vlay9ub2Nob29zZUAzeC5wbmcnLFxuICAgICAgICBhbnN3ZXJMaXN0OltdLFxuICAgICAgICBpbmRleDonJyxcbiAgICAgICAgRW5nbGlzaDpbXVxuICAgIH1cbiAgICBtZXRob2RzID0ge1xuICAgICAgY2hvb3NlVGhpcyAoZSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICAgIC8vdGhpcy5zcmMgPSAnL2ltYWdlcy93ZWVrL2Nob29zZUAzeC5wbmcnXG4gICAgICAgIC8vdGhpcy5naXRlbS5jaGlsZG5hbWUgPSBgQ2hpbGQgUmFuZG9tKCR7TWF0aC5yYW5kb20oKX0pYFxuICAgICAgIC8vIGNvbnNvbGUubG9nKGBDbGlja2VkIEdyb3VwICR7dGhpcy4kcGFyZW50LiRpbmRleH0uIEl0ZW0gJHt0aGlzLiRpbmRleH0sIElEIGlzICR7dGhpcy5naXRlbS5jaGlsZGlkfWApXG4gICAgICB9XG4gICAgfVxuICB9XG4iXX0=