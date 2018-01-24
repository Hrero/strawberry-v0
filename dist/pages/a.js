'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

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
      navigationBarTitleText: '答案页'
    }, _this.components = {}, _this.mixins = [_test2.default], _this.data = {
      imgUrls: ['http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg', 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg', 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'],
      indicatorDots: true,
      autoplay: false,
      interval: 5000,
      duration: 1000,
      currentTab: 1
    }, _this.methods = {
      nextSwiper: function nextSwiper() {
        this.currentTab++;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SharePerson, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return SharePerson;
}(_wepy2.default.page);

exports.default = SharePerson;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImEuanMiXSwibmFtZXMiOlsiU2hhcmVQZXJzb24iLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsIm1peGlucyIsImRhdGEiLCJpbWdVcmxzIiwiaW5kaWNhdG9yRG90cyIsImF1dG9wbGF5IiwiaW50ZXJ2YWwiLCJkdXJhdGlvbiIsImN1cnJlbnRUYWIiLCJtZXRob2RzIiwibmV4dFN3aXBlciIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxXOzs7Ozs7Ozs7Ozs7OztnTUFFbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxVLEdBQWEsRSxRQUliQyxNLEdBQVMsZ0IsUUFFVEMsSSxHQUFPO0FBQ0xDLGVBQVMsQ0FDUCxzRUFETyxFQUVQLHNFQUZPLEVBR1Asc0VBSE8sQ0FESjtBQU1MQyxxQkFBZSxJQU5WO0FBT0xDLGdCQUFVLEtBUEw7QUFRTEMsZ0JBQVUsSUFSTDtBQVNMQyxnQkFBVSxJQVRMO0FBVUxDLGtCQUFXO0FBVk4sSyxRQWFQQyxPLEdBQVU7QUFFUkMsZ0JBRlEsd0JBRUk7QUFDVixhQUFLRixVQUFMO0FBQ0Q7QUFKTyxLOzs7Ozs2QkFPRixDQUVQOzs7O0VBbENzQyxlQUFLRyxJOztrQkFBekJkLFciLCJmaWxlIjoiYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgVG9hc3QgZnJvbSAnd2VweS1jb20tdG9hc3QnXG4gIGltcG9ydCB0ZXN0TWl4aW4gZnJvbSAnLi4vbWl4aW5zL3Rlc3QnXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hhcmVQZXJzb24gZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuXG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+etlOahiOmhtSdcbiAgICB9XG5cbiAgICBjb21wb25lbnRzID0ge1xuXG4gICAgfVxuXG4gICAgbWl4aW5zID0gW3Rlc3RNaXhpbl1cblxuICAgIGRhdGEgPSB7XG4gICAgICBpbWdVcmxzOiBbXG4gICAgICAgICdodHRwOi8vaW1nMDIudG9vb3Blbi5jb20vaW1hZ2VzLzIwMTUwOTI4L3Rvb29wZW5fc3lfMTQzOTEyNzU1NzI2LmpwZycsXG4gICAgICAgICdodHRwOi8vaW1nMDYudG9vb3Blbi5jb20vaW1hZ2VzLzIwMTYwODE4L3Rvb29wZW5fc3lfMTc1ODY2NDM0Mjk2LmpwZycsXG4gICAgICAgICdodHRwOi8vaW1nMDYudG9vb3Blbi5jb20vaW1hZ2VzLzIwMTYwODE4L3Rvb29wZW5fc3lfMTc1ODMzMDQ3NzE1LmpwZydcbiAgICAgIF0sXG4gICAgICBpbmRpY2F0b3JEb3RzOiB0cnVlLFxuICAgICAgYXV0b3BsYXk6IGZhbHNlLFxuICAgICAgaW50ZXJ2YWw6IDUwMDAsXG4gICAgICBkdXJhdGlvbjogMTAwMCxcbiAgICAgIGN1cnJlbnRUYWI6MVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG5cbiAgICAgIG5leHRTd2lwZXIoKXtcbiAgICAgICAgdGhpcy5jdXJyZW50VGFiICsrO1xuICAgICAgfVxuXG4gICAgfVxuICAgIG9uTG9hZCgpe1xuXG4gICAgfVxuICB9XG4iXX0=