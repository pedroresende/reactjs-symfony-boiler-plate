webpackHotUpdate(0,[
/* 0 */,
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(31);

	var _reactRouter = __webpack_require__(164);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Homepage = _react2.default.createClass({
	    displayName: 'Homepage',

	    render: function render() {
	        return _react2.default.createElement(
	            'div',
	            null,
	            'HEllo World'
	        );
	    }
	});

	var Homepage2 = _react2.default.createClass({
	    displayName: 'Homepage2',

	    render: function render() {
	        return _react2.default.createElement(
	            'div',
	            null,
	            'HEllo World2'
	        );
	    }
	});

	var Homepage404 = _react2.default.createClass({
	    displayName: 'Homepage404',

	    render: function render() {
	        return _react2.default.createElement(
	            'div',
	            null,
	            '404'
	        );
	    }
	});

	(0, _reactDom.render)(_react2.default.createElement(
	    _reactRouter.Router,
	    { history: _reactRouter.browserHistory },
	    _react2.default.createElement(
	        _reactRouter.Route,
	        { path: '/' },
	        _react2.default.createElement(_reactRouter.IndexRoute, { component: Homepage }),
	        _react2.default.createElement(_reactRouter.Route, { path: 'hi', component: Homepage2 }),
	        _react2.default.createElement(_reactRouter.Route, { path: '*', component: Homepage404 })
	    )
	), document.getElementById('app'));

/***/ }
])