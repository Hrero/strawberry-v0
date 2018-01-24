'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _shareinfoheader = require('./shareinfoheader.js');

var _shareinfoheader2 = _interopRequireDefault(_shareinfoheader);

var _wepyComToast = require('./../npm/wepy-com-toast/toast.js');

var _wepyComToast2 = _interopRequireDefault(_wepyComToast);

var _test = require('./../mixins/test.js');

var _test2 = _interopRequireDefault(_test);

var _citys = require('./../utils/citys.js');

var _citys2 = _interopRequireDefault(_citys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var sheng = function (_wepy$component) {
  _inherits(sheng, _wepy$component);

  function sheng() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, sheng);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = sheng.__proto__ || Object.getPrototypeOf(sheng)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '报到页'
    }, _this.components = {}, _this.mixins = [_test2.default], _this.data = {
      provinces: [],
      province: "",
      citys: [],
      city: "",
      countys: [],
      county: '',
      value: [0, 0, 0],
      values: [0, 0, 0],
      condition: false
    }, _this.methods = {
      bindChange: function bindChange(e) {
        //console.log(e);
        var val = e.detail.value;
        var t = this.data.values;
        var cityData = this.data.cityData;

        if (val[0] != t[0]) {
          console.log('province no');
          var citys = [];
          var countys = [];

          for (var i = 0; i < cityData[val[0]].sub.length; i++) {
            citys.push(cityData[val[0]].sub[i].name);
          }
          for (var _i = 0; _i < cityData[val[0]].sub[0].sub.length; _i++) {
            countys.push(cityData[val[0]].sub[0].sub[_i].name);
          }

          this.setData({
            province: this.data.provinces[val[0]],
            city: cityData[val[0]].sub[0].name,
            citys: citys,
            county: cityData[val[0]].sub[0].sub[0].name,
            countys: countys,
            values: val,
            value: [val[0], 0, 0]
          });

          return;
        }
        if (val[1] != t[1]) {
          console.log('city no');
          var _countys = [];

          for (var _i2 = 0; _i2 < cityData[val[0]].sub[val[1]].sub.length; _i2++) {
            _countys.push(cityData[val[0]].sub[val[1]].sub[_i2].name);
          }

          this.setData({
            city: this.data.citys[val[1]],
            county: cityData[val[0]].sub[val[1]].sub[0].name,
            countys: _countys,
            values: val,
            value: [val[0], val[1], 0]
          });
          return;
        }
        if (val[2] != t[2]) {
          console.log('county no');
          this.setData({
            county: this.data.countys[val[2]],
            values: val
          });
          return;
        }
      },
      open: function open() {
        this.setData({
          condition: !this.data.condition
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(sheng, [{
    key: 'onLoad',
    value: function onLoad() {
      console.log("onLoad");
      var that = this;

      _citys2.default.init(that);

      var cityData = that.data.cityData;

      var provinces = [];
      var citys = [];
      var countys = [];

      for (var i = 0; i < cityData.length; i++) {
        provinces.push(cityData[i].name);
      }
      console.log('省份完成');
      for (var _i3 = 0; _i3 < cityData[0].sub.length; _i3++) {
        citys.push(cityData[0].sub[_i3].name);
      }
      console.log('city完成');
      for (var _i4 = 0; _i4 < cityData[0].sub[0].sub.length; _i4++) {
        countys.push(cityData[0].sub[0].sub[_i4].name);
      }

      that.setData({
        'provinces': provinces,
        'citys': citys,
        'countys': countys,
        'province': cityData[0].name,
        'city': cityData[0].sub[0].name,
        'county': cityData[0].sub[0].sub[0].name
      });
    }
  }]);

  return sheng;
}(_wepy2.default.component);

exports.default = sheng;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoZW5nLmpzIl0sIm5hbWVzIjpbInNoZW5nIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJtaXhpbnMiLCJkYXRhIiwicHJvdmluY2VzIiwicHJvdmluY2UiLCJjaXR5cyIsImNpdHkiLCJjb3VudHlzIiwiY291bnR5IiwidmFsdWUiLCJ2YWx1ZXMiLCJjb25kaXRpb24iLCJtZXRob2RzIiwiYmluZENoYW5nZSIsImUiLCJ2YWwiLCJkZXRhaWwiLCJ0IiwiY2l0eURhdGEiLCJjb25zb2xlIiwibG9nIiwiaSIsInN1YiIsImxlbmd0aCIsInB1c2giLCJuYW1lIiwic2V0RGF0YSIsIm9wZW4iLCJ0aGF0IiwiaW5pdCIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFFbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxVLEdBQWEsRSxRQUdiQyxNLEdBQVMsZ0IsUUFFVEMsSSxHQUFPO0FBQ0xDLGlCQUFXLEVBRE47QUFFTEMsZ0JBQVUsRUFGTDtBQUdMQyxhQUFPLEVBSEY7QUFJTEMsWUFBTSxFQUpEO0FBS0xDLGVBQVMsRUFMSjtBQU1MQyxjQUFRLEVBTkg7QUFPTEMsYUFBTyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQVBGO0FBUUxDLGNBQVEsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FSSDtBQVNMQyxpQkFBVztBQVROLEssUUFZUEMsTyxHQUFVO0FBQ1JDLGtCQUFZLG9CQUFTQyxDQUFULEVBQVk7QUFDdEI7QUFDQSxZQUFJQyxNQUFNRCxFQUFFRSxNQUFGLENBQVNQLEtBQW5CO0FBQ0EsWUFBSVEsSUFBSSxLQUFLZixJQUFMLENBQVVRLE1BQWxCO0FBQ0EsWUFBSVEsV0FBVyxLQUFLaEIsSUFBTCxDQUFVZ0IsUUFBekI7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QUVERyxXQUFLRixPQUFMLENBQWE7QUFDWCxxQkFBYXZCLFNBREY7QUFFWCxpQkFBUUUsS0FGRztBQUdYLG1CQUFVRSxPQUhDO0FBSVgsb0JBQVdXLFNBQVMsQ0FBVCxFQUFZTyxJQUpaO0FBS1gsZ0JBQU9QLFNBQVMsQ0FBVCxFQUFZSSxHQUFaLENBQWdCLENBQWhCLEVBQW1CRyxJQUxmO0FBTVgsa0JBQVNQLFNBQVMsQ0FBVCxFQUFZSSxHQUFaLENBQWdCLENBQWhCLEVBQW1CQSxHQUFuQixDQUF1QixDQUF2QixFQUEwQkc7QUFOeEIsT0FBYjtBQVFEOzs7O0VBeEhnQyxlQUFLSyxTOztrQkFBbkJqQyxLIiwiZmlsZSI6InNoZW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCBJbmZvSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvc2hhcmVpbmZvaGVhZGVyJ1xuICBpbXBvcnQgVG9hc3QgZnJvbSAnd2VweS1jb20tdG9hc3QnXG4gIGltcG9ydCB0ZXN0TWl4aW4gZnJvbSAnLi4vbWl4aW5zL3Rlc3QnXG4gIGltcG9ydCB0Y2l0eSBmcm9tICcuLi91dGlscy9jaXR5cy5qcydcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBzaGVuZyBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcblxuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmiqXliLDpobUnXG4gICAgfVxuXG4gICAgY29tcG9uZW50cyA9IHtcbiAgICB9XG5cbiAgICBtaXhpbnMgPSBbdGVzdE1peGluXVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIHByb3ZpbmNlczogW10sXG4gICAgICBwcm92aW5jZTogXCJcIixcbiAgICAgIGNpdHlzOiBbXSxcbiAgICAgIGNpdHk6IFwiXCIsXG4gICAgICBjb3VudHlzOiBbXSxcbiAgICAgIGNvdW50eTogJycsXG4gICAgICB2YWx1ZTogWzAsIDAsIDBdLFxuICAgICAgdmFsdWVzOiBbMCwgMCwgMF0sXG4gICAgICBjb25kaXRpb246IGZhbHNlXG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIGJpbmRDaGFuZ2U6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhlKTtcbiAgICAgICAgdmFyIHZhbCA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICAgIHZhciB0ID0gdGhpcy5kYXRhLnZhbHVlcztcbiAgICAgICAgdmFyIGNpdHlEYXRhID0gdGhpcy5kYXRhLmNpdHlEYXRhO1xuXG4gICAgICAgIGlmKHZhbFswXSAhPSB0WzBdKXtcbiAgICAgICAgICBjb25zb2xlLmxvZygncHJvdmluY2Ugbm8nKTtcbiAgICAgICAgICBjb25zdCBjaXR5cyA9IFtdO1xuICAgICAgICAgIGNvbnN0IGNvdW50eXMgPSBbXTtcblxuICAgICAgICAgIGZvciAobGV0IGkgPSAwIDsgaSA8IGNpdHlEYXRhW3ZhbFswXV0uc3ViLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjaXR5cy5wdXNoKGNpdHlEYXRhW3ZhbFswXV0uc3ViW2ldLm5hbWUpXG4gICAgICAgICAgfVxuICAgICAgICAgIGZvciAobGV0IGkgPSAwIDsgaSA8IGNpdHlEYXRhW3ZhbFswXV0uc3ViWzBdLnN1Yi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY291bnR5cy5wdXNoKGNpdHlEYXRhW3ZhbFswXV0uc3ViWzBdLnN1YltpXS5uYW1lKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgICBwcm92aW5jZTogdGhpcy5kYXRhLnByb3ZpbmNlc1t2YWxbMF1dLFxuICAgICAgICAgICAgY2l0eTogY2l0eURhdGFbdmFsWzBdXS5zdWJbMF0ubmFtZSxcbiAgICAgICAgICAgIGNpdHlzOmNpdHlzLFxuICAgICAgICAgICAgY291bnR5OiBjaXR5RGF0YVt2YWxbMF1dLnN1YlswXS5zdWJbMF0ubmFtZSxcbiAgICAgICAgICAgIGNvdW50eXM6Y291bnR5cyxcbiAgICAgICAgICAgIHZhbHVlczogdmFsLFxuICAgICAgICAgICAgdmFsdWU6W3ZhbFswXSwwLDBdXG4gICAgICAgICAgfSlcblxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZih2YWxbMV0gIT0gdFsxXSl7XG4gICAgICAgICAgY29uc29sZS5sb2coJ2NpdHkgbm8nKTtcbiAgICAgICAgICBjb25zdCBjb3VudHlzID0gW107XG5cbiAgICAgICAgICBmb3IgKGxldCBpID0gMCA7IGkgPCBjaXR5RGF0YVt2YWxbMF1dLnN1Ylt2YWxbMV1dLnN1Yi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY291bnR5cy5wdXNoKGNpdHlEYXRhW3ZhbFswXV0uc3ViW3ZhbFsxXV0uc3ViW2ldLm5hbWUpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgIGNpdHk6IHRoaXMuZGF0YS5jaXR5c1t2YWxbMV1dLFxuICAgICAgICAgICAgY291bnR5OiBjaXR5RGF0YVt2YWxbMF1dLnN1Ylt2YWxbMV1dLnN1YlswXS5uYW1lLFxuICAgICAgICAgICAgY291bnR5czpjb3VudHlzLFxuICAgICAgICAgICAgdmFsdWVzOiB2YWwsXG4gICAgICAgICAgICB2YWx1ZTpbdmFsWzBdLHZhbFsxXSwwXVxuICAgICAgICAgIH0pXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmKHZhbFsyXSAhPSB0WzJdKXtcbiAgICAgICAgICBjb25zb2xlLmxvZygnY291bnR5IG5vJyk7XG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgIGNvdW50eTogdGhpcy5kYXRhLmNvdW50eXNbdmFsWzJdXSxcbiAgICAgICAgICAgIHZhbHVlczogdmFsXG4gICAgICAgICAgfSlcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuXG4gICAgICB9LFxuICAgICAgb3BlbjpmdW5jdGlvbigpe1xuICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgIGNvbmRpdGlvbjohdGhpcy5kYXRhLmNvbmRpdGlvblxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICB9XG4gICAgb25Mb2FkKCl7XG4gICAgICBjb25zb2xlLmxvZyhcIm9uTG9hZFwiKTtcbiAgICAgIHZhciB0aGF0ID0gdGhpcztcblxuICAgICAgdGNpdHkuaW5pdCh0aGF0KTtcblxuICAgICAgdmFyIGNpdHlEYXRhID0gdGhhdC5kYXRhLmNpdHlEYXRhO1xuXG4gICAgICBjb25zdCBwcm92aW5jZXMgPSBbXTtcbiAgICAgIGNvbnN0IGNpdHlzID0gW107XG4gICAgICBjb25zdCBjb3VudHlzID0gW107XG5cbiAgICAgIGZvcihsZXQgaT0wO2k8Y2l0eURhdGEubGVuZ3RoO2krKyl7XG4gICAgICAgIHByb3ZpbmNlcy5wdXNoKGNpdHlEYXRhW2ldLm5hbWUpO1xuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coJ+ecgeS7veWujOaIkCcpO1xuICAgICAgZm9yIChsZXQgaSA9IDAgOyBpIDwgY2l0eURhdGFbMF0uc3ViLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNpdHlzLnB1c2goY2l0eURhdGFbMF0uc3ViW2ldLm5hbWUpXG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZygnY2l0eeWujOaIkCcpO1xuICAgICAgZm9yIChsZXQgaSA9IDAgOyBpIDwgY2l0eURhdGFbMF0uc3ViWzBdLnN1Yi5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb3VudHlzLnB1c2goY2l0eURhdGFbMF0uc3ViWzBdLnN1YltpXS5uYW1lKVxuICAgICAgfVxuXG4gICAgICB0aGF0LnNldERhdGEoe1xuICAgICAgICAncHJvdmluY2VzJzogcHJvdmluY2VzLFxuICAgICAgICAnY2l0eXMnOmNpdHlzLFxuICAgICAgICAnY291bnR5cyc6Y291bnR5cyxcbiAgICAgICAgJ3Byb3ZpbmNlJzpjaXR5RGF0YVswXS5uYW1lLFxuICAgICAgICAnY2l0eSc6Y2l0eURhdGFbMF0uc3ViWzBdLm5hbWUsXG4gICAgICAgICdjb3VudHknOmNpdHlEYXRhWzBdLnN1YlswXS5zdWJbMF0ubmFtZVxuICAgICAgfSlcbiAgICB9XG4gIH1cbiJdfQ==