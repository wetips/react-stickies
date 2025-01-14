module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Stickies = undefined;

	var _Stickies = __webpack_require__(4);

	var _Stickies2 = _interopRequireDefault(_Stickies);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Stickies = _Stickies2.default;
	exports.default = _Stickies2.default;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = require("react");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = require("react-grid-layout");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _class = function (_Component) {
	  _inherits(_class, _Component);

	  function _class() {
	    _classCallCheck(this, _class);

	    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
	  }

	  _createClass(_class, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps) {
	      return nextProps.html !== this.editable.innerHTML;
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      if (this.props.html !== this.editable.innerHTML) {
	        this.editable.innerHTML = this.props.html;
	      }
	    }
	  }, {
	    key: 'emitChange',
	    value: function emitChange() {
	      var html = this.editable.innerHTML;
	      if (this.props.onChange && html !== this.lastHtml) {
	        this.props.onChange({
	          target: {
	            value: html
	          }
	        });
	      }
	      this.lastHtml = html;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      return _react2.default.createElement('div', {
	        onInput: this.emitChange.bind(this),
	        onBlur: this.emitChange.bind(this),
	        contentEditable: true,
	        dangerouslySetInnerHTML: { __html: this.props.html },
	        ref: function ref(editable) {
	          return _this2.editable = editable;
	        }
	      });
	    }
	  }]);

	  return _class;
	}(_react.Component);

	exports.default = _class;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _draftJs = __webpack_require__(9);

	var _moment = __webpack_require__(10);

	var _moment2 = _interopRequireDefault(_moment);

	var _ContentEditable = __webpack_require__(3);

	var _ContentEditable2 = _interopRequireDefault(_ContentEditable);

	__webpack_require__(8);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var WidthProvider = __webpack_require__(2).WidthProvider;
	var ResponsiveReactGridLayout = __webpack_require__(2).Responsive;

	ResponsiveReactGridLayout = WidthProvider(ResponsiveReactGridLayout);

	/**
	* @method: guid
	* @desc: Generates unique guid
	**/
	function guid() {
	  function s4() {
	    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	  }
	  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
	}

	/**
	* @method: tranformEditorState
	* @desc: Tranforms the text to editor state
	**/
	function tranformEditorState(notes) {
	  var notesData = notes.default || notes;
	  var data = notesData.map(function (note) {
	    var text = note.default ? note.default.text : note.text || '';
	    note.editorState = note.editorState || _draftJs.EditorState.createWithContent(_draftJs.ContentState.createFromText(text));
	    return note;
	  });
	  return data;
	}

	/**
	* @method: transformContentState
	* @desc: Tranforms editor state to text content
	**/
	function transformContentState(notes) {
	  var clonedNotes = Object.assign([], notes);
	  var data = clonedNotes.map(function (note) {
	    note.text = note.editorState.getCurrentContent().getPlainText();
	    return note;
	  });
	  return data;
	}

	var _class = function (_Component) {
	  _inherits(_class, _Component);

	  function _class(props) {
	    _classCallCheck(this, _class);

	    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

	    _this.state = {
	      newCounter: 0,
	      notes: props.notes ? tranformEditorState(props.notes) : [],
	      colors: props.colors || ['#FBE4BE', '#F7D1D1', '#E4FABC', '#CAE0FA'],
	      dateFormat: props.dateFormat || 'lll'
	    };
	    _this.createBlankNote = _this.createBlankNote.bind(_this);
	    _this.renderNote = _this.renderNote.bind(_this);
	    _this.onLayoutChange = _this.onLayoutChange.bind(_this);
	    _this.onBreakpointChange = _this.onBreakpointChange.bind(_this);
	    return _this;
	  }

	  _createClass(_class, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      if (this.props.notes && !this.props.notes.length) {
	        this.createBlankNote();
	      }
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (nextProps.notes && nextProps.notes.length) {
	        this.setState({
	          notes: tranformEditorState(nextProps.notes)
	        });
	      }
	      this.setState({
	        colors: nextProps.colors || ['#FBE4BE', '#F7D1D1', '#E4FABC', '#CAE0FA'],
	        dateFormat: nextProps.dateFormat || 'lll'
	      });
	    }
	  }, {
	    key: 'generateRandomColors',
	    value: function generateRandomColors() {
	      var colors = this.state.colors;
	      return colors[Math.floor(Math.random() * (colors.length - 1))];
	    }
	  }, {
	    key: 'generateRandomDegree',
	    value: function generateRandomDegree(max, min) {
	      return Math.floor(Math.random() * (max - min + 1)) + min + 'deg';
	    }
	  }, {
	    key: 'handleTitleChange',
	    value: function handleTitleChange(html, currentNote) {
	      var _this2 = this;

	      var notes = this.state.notes;
	      notes.forEach(function (note) {
	        if (currentNote.id === note.id) {
	          note.title = html.target.value;
	        }
	      });
	      this.setState({
	        notes: notes
	      }, function () {
	        if (_this2.props.onTitleChange) {
	          _this2.props.onTitleChange(html, currentNote);
	        }
	      });
	    }
	  }, {
	    key: 'onChange',
	    value: function onChange(editorState, currentNote) {
	      var notes = this.state.notes;
	      var dateFormat = this.state.dateFormat;
	      notes.forEach(function (note) {
	        if (currentNote.id === note.id) {
	          note.editorState = editorState;
	          note.timeStamp = (0, _moment2.default)().format(dateFormat);
	        }
	      });
	      if (typeof this.props.onChange === 'function') {
	        this.props.onChange(transformContentState(this.state.notes), 'update');
	      }
	    }
	  }, {
	    key: 'deleteNote',
	    value: function deleteNote(currentNote) {
	      var _this3 = this;

	      var notes = this.state.notes;
	      notes.forEach(function (note, index) {
	        if (currentNote.id === note.id) {
	          notes.splice(index, 1);
	        }
	      });
	      this.setState({
	        notes: notes
	      }, function () {
	        if (typeof _this3.props.onChange === 'function') {
	          _this3.props.onChange(_this3.state.notes, 'delete');
	          if (typeof _this3.props.onDelete === 'function') {
	            _this3.props.onDelete(currentNote);
	          }
	        }
	      });
	    }
	  }, {
	    key: 'createBlankNote',
	    value: function createBlankNote() {
	      var dateFormat = this.state.dateFormat;
	      var grid = this.props.grid || {};
	      var uid = guid();
	      var note = {
	        grid: {
	          i: '' + uid,
	          x: this.state.notes.length * 2 % (this.state.cols || 12),
	          y: Infinity, // puts it at the bottom
	          w: grid.w || 2,
	          h: grid.h || 2
	        },
	        id: uid,
	        editorState: _draftJs.EditorState.createEmpty(),
	        title: 'Title',
	        color: this.generateRandomColors(),
	        degree: this.generateRandomDegree(-2, 2),
	        timeStamp: (0, _moment2.default)().format(dateFormat),
	        contentEditable: true
	      };
	      this.setState({
	        // Add a new item. It must have a unique key!
	        notes: this.state.notes.concat(note),
	        // Increment the counter to ensure key is always unique.
	        newCounter: this.state.newCounter + 1
	      });
	      if (typeof this.props.onAdd === 'function') {
	        this.props.onAdd(note);
	      }
	    }
	  }, {
	    key: 'onLayoutChange',
	    value: function onLayoutChange(layout) {
	      var _this4 = this;

	      var notes = this.state.notes;
	      notes.forEach(function (note) {
	        layout.forEach(function (grid) {
	          if (grid.i === note.id) {
	            note.grid = grid;
	          }
	        });
	      });
	      this.setState({
	        notes: notes
	      }, function () {
	        if (typeof _this4.props.onChange === 'function') {
	          _this4.props.onChange(_this4.state.notes, 'layout');
	          if (typeof _this4.props.onLayoutChange === 'function') {
	            _this4.props.onLayoutChange(layout);
	          }
	        }
	      });
	    }
	  }, {
	    key: 'onBreakpointChange',
	    value: function onBreakpointChange(breakpoint, cols) {
	      this.setState({
	        breakpoint: breakpoint,
	        cols: cols
	      });
	    }
	  }, {
	    key: 'renderNote',
	    value: function renderNote(note) {
	      var _this5 = this;

	      var closeStyle = Object.assign({}, {
	        display: this.state.notes.length === 1 ? 'none' : 'block'
	      }, this.props.closeStyle || {});
	      var addStyle = this.props.addStyle || {};
	      var closeIcon = this.props.closeIcon || '';
	      var addIcon = this.props.addIcon || '';
	      var noteStyle = Object.assign({}, {
	        background: note.color,
	        transform: note.degree
	      }, this.props.noteStyle || {});
	      var noteHeaderStyle = Object.assign({}, {
	        display: this.props.header === false ? 'none' : 'block'
	      }, this.props.noteHeaderStyle || {});
	      var noteBodyStyle = this.props.noteBodyStyle || {};
	      var noteTitleStyle = Object.assign({}, {
	        display: this.props.title === false ? 'none' : 'block'
	      }, this.props.noteTitleStyle || {});
	      var noteFooterStyle = Object.assign({}, {
	        display: this.props.footer === false ? 'none' : 'block'
	      }, this.props.noteFooterStyle || {});
	      var i = note.grid.add ? '+' : note.grid.i;
	      var grid = note.grid;
	      grid.y = grid.y || Infinity;
	      return _react2.default.createElement(
	        'div',
	        { key: i, 'data-grid': grid },
	        _react2.default.createElement(
	          'aside',
	          {
	            className: 'note-wrap note ' + (this.props.tape ? 'tape' : ''),
	            style: noteStyle
	          },
	          _react2.default.createElement(
	            'div',
	            { className: 'note-header', style: noteHeaderStyle },
	            _react2.default.createElement(
	              'div',
	              {
	                className: '' + (addIcon ? '' : 'add'),
	                onClick: this.createBlankNote,
	                style: addStyle
	              },
	              addIcon
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'title', style: noteTitleStyle },
	              _react2.default.createElement(_ContentEditable2.default, {
	                html: note.title,
	                onChange: function onChange(html) {
	                  return _this5.handleTitleChange(html, note);
	                }
	              })
	            ),
	            _react2.default.createElement(
	              'div',
	              {
	                className: '' + (closeIcon ? '' : 'close'),
	                style: closeStyle,
	                onClick: function onClick() {
	                  return _this5.deleteNote(note);
	                }
	              },
	              closeIcon
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'note-body', style: noteBodyStyle },
	            _react2.default.createElement(_draftJs.Editor, {
	              editorState: note.editorState,
	              onChange: function onChange(editorState) {
	                return _this5.onChange(editorState, note);
	              },
	              placeholder: 'Add your notes...'
	            })
	          ),
	          _react2.default.createElement(
	            'div',
	            {
	              className: 'note-footer',
	              style: noteFooterStyle
	            },
	            _react2.default.createElement(
	              'div',
	              { className: 'footer-left' },
	              _react2.default.createElement(
	                'a',
	                { href: note.link, target: '_blank' },
	                _react2.default.createElement(
	                  'span',
	                  null,
	                  '\u30C4\u30A4\u30FC\u30C8'
	                )
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'footer-right' },
	              note.timeStamp
	            )
	          )
	        )
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var gridProps = this.props.grid || {};
	      var grid = {
	        className: 'layout',
	        cols: gridProps.cols || { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
	        rowHeight: gridProps.rowHeight || 100,
	        isDraggable: gridProps.isDraggable === undefined ? true : gridProps.isDraggable,
	        isResizable: gridProps.isResizable === undefined ? true : gridProps.isResizable,
	        useCSSTransforms: gridProps.useCSSTransforms === undefined ? true : gridProps.useCSSTransforms,
	        margin: gridProps.margin
	      };
	      var wrapperStyle = this.props.wrapperStyle || {};
	      return _react2.default.createElement(
	        'div',
	        { className: 'react-stickies-wrapper clearfix', style: wrapperStyle },
	        _react2.default.createElement(
	          ResponsiveReactGridLayout,
	          _extends({
	            onLayoutChange: this.onLayoutChange,
	            onBreakpointChange: this.onBreakpointChange
	          }, grid),
	          this.state.notes.map(this.renderNote)
	        )
	      );
	    }
	  }]);

	  return _class;
	}(_react.Component);

	exports.default = _class;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, ".react-stickies-wrapper * {\n  box-sizing: border-box;\n}\n\n.react-stickies-wrapper::-moz-selection {\n  text-shadow: none;\n}\n\n.react-stickies-wrapper::selection {\n  text-shadow: none;\n}\n\n.react-stickies-wrapper .clearfix:before,\n.react-stickies-wrapper .clearfix:after {\n  content: \" \";\n  display: table;\n}\n\n.react-stickies-wrapper .clearfix:after {\n  clear: both;\n}\n\n.react-stickies-wrapper .clearfix {\n  *zoom: 1;\n}\n\n\n.react-stickies-wrapper {\n  height: 100%;\n  width: 100%;\n  position: relative;\n}\n\n/* Note styles */\n.react-stickies-wrapper .note-wrap {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  vertical-align: top;\n  display: inline-block;\n  font-family: Englebert, Arial;\n  color: #4b453c;\n  background: #F7E999;\n  line-height: 34px;\n  text-align: center;\n  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.1), 0 2px 4px 0 rgba(0,0,0,0.1);\n}\n.react-stickies-wrapper .note-wrap:before {\n  display: block;\n  content: \"\";\n  width: 130px;\n  height: 28px;\n  border-radius: 6px/18px 0;\n  position: absolute;\n}\n.react-stickies-wrapper .note-wrap.tape:before {\n  background: rgba(227, 200, 114, 0.4);\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);\n  top: -13px;\n  left: 50px;\n}\n.react-stickies-wrapper .note-wrap .title {\n  color: #747474;\n  text-decoration: none;\n  transition: all 0.4s ease;\n  position: absolute;\n  bottom: 0;\n  text-align: center;\n  width: 100%;\n  left: 0;\n}\n.react-stickies-wrapper .note-wrap .title:hover {\n  color: #000;\n}\n\n.react-stickies-wrapper .note {\n  background: #F7E999;\n}\n\n.react-stickies-wrapper .close {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  width: 20px;\n  height: 20px;\n  opacity: 0.3;\n}\n.react-stickies-wrapper .close:hover {\n  opacity: 1;\n  cursor: pointer;\n}\n.react-stickies-wrapper .close:before, .close:after {\n  position: absolute;\n  left: 15px;\n  content: ' ';\n  height: 16px;\n  width: 2px;\n  background-color: #333;\n}\n.react-stickies-wrapper .close:before {\n  transform: rotate(45deg);\n}\n\n.react-stickies-wrapper .close:after {\n  transform: rotate(-45deg);\n}\n\n.react-stickies-wrapper .add {\n  position: absolute;\n  left: 10px;\n  top: 10px;\n  width: 20px;\n  height: 20px;\n  opacity: 0.3;\n  z-index: 2;\n}\n.react-stickies-wrapper .add:hover {\n  opacity: 1;\n  cursor: pointer;\n}\n.react-stickies-wrapper .add:before, .add:after {\n  position: absolute;\n  left: 15px;\n  content: ' ';\n  height: 16px;\n  width: 2px;\n  background-color: #333;\n}\n.react-stickies-wrapper .add:before {\n  transform: rotate(0deg);\n}\n.react-stickies-wrapper .add:after {\n  transform: rotate(-90deg);\n}\n\n.react-stickies-wrapper .note-header {\n  position: relative;\n  top: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.1);\n  height: 34px;\n}\n\n.react-stickies-wrapper .note-body {\n  padding: 10px;\n  font-size: 12px;\n  color: #747474;\n  line-height: 20px;\n}\n\n.react-stickies-wrapper .note-footer {\n  color: #747474;\n  text-decoration: none;\n  transition: all 0.4s ease;\n  position: absolute;\n  bottom: -6px;\n  text-align: right;\n  width: 100%;\n  padding-left: 10px;\n  padding-right: 10px;\n  font-size: 9px;\n}\n\n.react-stickies-wrapper .note-footer .footer-left {\n  float: left\n}\n\n.react-stickies-wrapper .note-footer .footer-right {\n  float: right;\n}\n\n.react-stickies-wrapper [contenteditable]:focus {\n    outline: 0px solid transparent;\n}\n\n\n\n/** Grid Styles **/\n.react-grid-dragHandleExample{\n  cursor: move; /* fallback if grab cursor is unsupported */\n  cursor: grab;\n  cursor: -webkit-grab;\n}\n\n.react-grid-layout {\n  position: relative;\n  transition: height 200ms ease;\n}\n.react-grid-item {\n  transition: all 200ms ease;\n  transition-property: left, top;\n}\n.react-grid-item.cssTransforms {\n  transition-property: transform;\n}\n.react-grid-item.resizing {\n  z-index: 1;\n  will-change: width, height;\n}\n\n.react-grid-item.react-draggable-dragging {\n  transition: none;\n  z-index: 3;\n  will-change: transform;\n}\n\n.react-grid-item.react-grid-placeholder {\n  background: red;\n  opacity: 0.2;\n  transition-duration: 100ms;\n  z-index: 2;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n}\n\n.react-grid-item > .react-resizable-handle {\n  position: absolute;\n  width: 30px;\n  height: 30px;\n  bottom: 0px;\n  right: 0px;\n  background: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pg08IS0tIEdlbmVyYXRvcjogQWRvYmUgRmlyZXdvcmtzIENTNiwgRXhwb3J0IFNWRyBFeHRlbnNpb24gYnkgQWFyb24gQmVhbGwgKGh0dHA6Ly9maXJld29ya3MuYWJlYWxsLmNvbSkgLiBWZXJzaW9uOiAwLjYuMSAgLS0+DTwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DTxzdmcgaWQ9IlVudGl0bGVkLVBhZ2UlMjAxIiB2aWV3Qm94PSIwIDAgNiA2IiBzdHlsZT0iYmFja2dyb3VuZC1jb2xvcjojZmZmZmZmMDAiIHZlcnNpb249IjEuMSINCXhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiDQl4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjZweCIgaGVpZ2h0PSI2cHgiDT4NCTxnIG9wYWNpdHk9IjAuMzAyIj4NCQk8cGF0aCBkPSJNIDYgNiBMIDAgNiBMIDAgNC4yIEwgNCA0LjIgTCA0LjIgNC4yIEwgNC4yIDAgTCA2IDAgTCA2IDYgTCA2IDYgWiIgZmlsbD0iIzAwMDAwMCIvPg0JPC9nPg08L3N2Zz4=');\n  background-position: bottom right;\n  padding: 0 3px 3px 0;\n  background-repeat: no-repeat;\n  background-origin: content-box;\n  box-sizing: border-box;\n  cursor: se-resize;\n}\n", ""]);

	// exports


/***/ }),
/* 6 */
/***/ (function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(5);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/autoprefixer-loader/index.js!./styles.css", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/autoprefixer-loader/index.js!./styles.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	module.exports = require("draft-js");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	module.exports = require("moment");

/***/ })
/******/ ]);