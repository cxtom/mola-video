(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'react', 'mola', 'classnames', 'melon/common/util/dom', './babelHelpers'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('react'), require('mola'), require('classnames'), require('melon/common/util/dom'), require('./babelHelpers'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.mola, global.classnames, global.dom, global.babelHelpers);
        global.Video = mod.exports;
    }
})(this, function (exports, _react, _mola, _classnames, _dom, babelHelpers) {
    'use strict';

    exports.__esModule = true;
    exports.Video = exports.level = exports.type = undefined;

    var _react2 = babelHelpers.interopRequireDefault(_react);

    var _classnames2 = babelHelpers.interopRequireDefault(_classnames);

    var _dom2 = babelHelpers.interopRequireDefault(_dom);

    /**
     * @file 视频组件
     * @author cxtom <cxtom2008@gmail.com>
     */

    var type = exports.type = 'Video';
    var level = exports.level = _mola.MOLA_COMPONENT_LEVEL_ATOM;

    var Video = exports.Video = function (_Component) {
        babelHelpers.inherits(Video, _Component);

        function Video() {
            babelHelpers.classCallCheck(this, Video);

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            var _this = babelHelpers.possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args)));

            _this.state = {
                start: false
            };
            _this.onClick = _this.onClick.bind(_this);
            _this.onPlay = _this.onPlay.bind(_this);
            return _this;
        }

        Video.prototype.componentDidMount = function componentDidMount() {
            if (this.props.videoType === 'iframe') {
                this.setState({ start: true });
            } else if (this.props.videoType === 'raw') {
                _dom2['default'].on(this.refs.video, 'play', this.onPlay);
            }
        };

        Video.prototype.componentWillUnmount = function componentWillUnmount() {
            if (this.props.videoType === 'raw') {
                _dom2['default'].off(this.refs.video, 'play', this.onPlay);
            }
        };

        Video.prototype.onPlay = function onPlay() {
            _dom2['default'].off(this.refs.video, 'play', this.onPlay);
            this.setState({ start: true });
        };

        Video.prototype.onClick = function onClick() {
            if (this.props.videoType === 'raw') {
                var video = this.refs.video;
                video.play();
            }
        };

        Video.prototype.renderRaw = function renderRaw() {

            return _react2['default'].createElement('video', {
                src: this.props.src,
                poster: this.props.poster,
                className: 'mola-video-raw',
                autoBuffer: true,
                autoPlay: true,
                preload: 'none',
                width: '100%',
                height: '100%',
                ref: 'video' });
        };

        Video.prototype.renderIframe = function renderIframe() {

            return _react2['default'].createElement('iframe', {
                src: this.props.src,
                className: 'mola-video-iframe',
                scrolling: 'no',
                frameBorder: '0',
                allowFullScreen: 'true' });
        };

        Video.prototype.render = function render() {
            var _props = this.props,
                _props$className = _props.className,
                className = _props$className === undefined ? null : _props$className,
                _props$style = _props.style,
                style = _props$style === undefined ? null : _props$style,
                videoType = _props.videoType,
                top = _props.top,
                left = _props.left,
                width = _props.width,
                height = _props.height,
                poster = _props.poster;


            var start = this.state.start;

            return _react2['default'].createElement(
                'div',
                {
                    onClick: videoType === 'iframe' ? null : this.onClick,
                    className: (0, _classnames2['default'])('mola-video', className, { 'state-start': start }),
                    style: babelHelpers['extends']({}, style, {
                        top: (0, _mola.px2rem)(top),
                        left: (0, _mola.px2rem)(left),
                        width: (0, _mola.px2rem)(width),
                        height: (0, _mola.px2rem)(height),
                        backgroundImage: start ? 'none' : 'url(' + poster + ')'
                    }) },
                videoType === 'iframe' ? this.renderIframe() : this.renderRaw()
            );
        };

        return Video;
    }(_react.Component);

    Video.displayName = type;

    Video.propTypes = {
        top: _react.PropTypes.number.isRequired,
        left: _react.PropTypes.number.isRequired,
        width: _react.PropTypes.number.isRequired,
        height: _react.PropTypes.number.isRequired,
        poster: _react.PropTypes.string,
        videoType: _react.PropTypes.oneOf(['iframe', 'raw']),
        videoUrl: _react.PropTypes.string
    };

    Video.defaultProps = {
        top: 0,
        left: 0,
        width: 320,
        height: 180,
        videoType: 'iframe'
    };

    exports['default'] = (0, _mola.registerComponent)(type, level)(Video);
});
//# sourceMappingURL=Video.js.map
