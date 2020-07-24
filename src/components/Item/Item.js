'use strict';

function _typeof(obj) {
  '@babel/helpers - typeof';
  if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj &&
        typeof Symbol === 'function' &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? 'symbol'
        : typeof obj;
    };
  }
  return _typeof(obj);
}

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require('react'));

var _Item = require('./Item.style');

var _themeContext = require('../theme-context');

var _propTypes = _interopRequireDefault(require('prop-types'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== 'function') return null;
  var cache = new WeakMap();
  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };
  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (
    obj === null ||
    (_typeof(obj) !== 'object' && typeof obj !== 'function')
  ) {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor =
    Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor
        ? Object.getOwnPropertyDescriptor(obj, key)
        : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}

function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) ||
    _iterableToArrayLimit(arr, i) ||
    _unsupportedIterableToArray(arr, i) ||
    _nonIterableRest()
  );
}

function _nonIterableRest() {
  throw new TypeError(
    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
  );
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === 'Object' && o.constructor) n = o.constructor.name;
  if (n === 'Map' || n === 'Set') return Array.from(o);
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === 'undefined' || !(Symbol.iterator in Object(arr)))
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;
  try {
    for (
      var _i = arr[Symbol.iterator](), _s;
      !(_n = (_s = _i.next()).done);
      _n = true
    ) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i['return'] != null) _i['return']();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

var MAX_LENGTH = 15;

function Item(props) {
  //create ref
  var ref = (0, _react.useRef)(null); //context variables

  var _useContext = (0, _react.useContext)(_themeContext.ThemeContext),
    itemFontSize = _useContext.itemFontSize,
    fontFamily = _useContext.fontFamily; //state variables

  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isHovered = _useState2[0],
    setIsHovered = _useState2[1];

  var maxLength = props.data.maxLength || MAX_LENGTH;

  var shortName =
    props.data.name.length > maxLength
      ? props.data.name.substr(0, maxLength) + '...'
      : props.data.name;

  var onMouseToggle = function onMouseToggle() {
    setIsHovered(!isHovered);
  };

  return /*#__PURE__*/ _react.default.createElement(
    _Item.ItemWrapper,
    {
      className: 'blip',
      id: 'blip-' + props.data.id,
      transform:
        ' rotate(' +
        props.rotateDegrees +
        ') translate(' +
        props.data.x +
        ',' +
        props.data.y +
        ')',
      onMouseEnter: onMouseToggle,
      onMouseLeave: onMouseToggle,
      ref: ref,
      style: {
        opacity: isHovered ? '1.0' : '0.7',
        fontWeight: isHovered ? 'Bold' : 'Normal'
      }
    },
    /*#__PURE__*/ _react.default.createElement('circle', {
      r: '4px'
    }),
    /*#__PURE__*/ _react.default.createElement(
      'text',
      {
        className: 'name',
        dx: '7px',
        dy: '7px',
        fontSize: itemFontSize,
        fontFamily: fontFamily
      },
      props.data.link
        ? /*#__PURE__*/ _react.default.createElement(
            'a',
            {
              className: 'name',
              dx: '7px',
              dy: '7px',
              fontSize: itemFontSize,
              fontFamily: fontFamily,
              href: props.data.link,
              target: '_blank'
            },
            isHovered ? props.data.name : shortName
          )
        : isHovered
        ? props.data.name
        : shortName
    )
  );
}

Item.propTypes = {
  rotateDegrees: _propTypes.default.number.isRequired,
  data: _propTypes.default.object.isRequired
};
var _default = Item;
exports.default = _default;
