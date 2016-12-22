(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'react', 'mola', './constants', 'classnames', './babelHelpers'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('react'), require('mola'), require('./constants'), require('classnames'), require('./babelHelpers'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.mola, global.constants, global.classnames, global.babelHelpers);
        global.Video = mod.exports;
    }
})(this, function (exports, _react, _mola, _constants, _classnames, babelHelpers) {
    'use strict';

    exports.__esModule = true;
    exports.Video = undefined;

    var _react2 = babelHelpers.interopRequireDefault(_react);

    var _classnames2 = babelHelpers.interopRequireDefault(_classnames);

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
            _this.onEnd = _this.onEnd.bind(_this);
            return _this;
        }

        Video.prototype.componentDidMount = function componentDidMount() {
            if (this.props.videoType === 'raw' && this.refs.video && this.props.playsInline) {
                this.refs.video.setAttribute('webkit-playsinline', 'webkit-playsinline');
                this.refs.video.setAttribute('playsinline', 'playsinline');
            }
        };

        Video.prototype.onPlay = function onPlay() {
            this.setState({ start: true });
        };

        Video.prototype.onEnd = function onEnd() {
            this.setState({ start: false });
        };

        Video.prototype.onClick = function onClick() {
            var start = this.state.start;
            var video = this.refs.video;
            video[start ? 'pause' : 'play']();
        };

        Video.prototype.renderRaw = function renderRaw() {
            var _props = this.props,
                autoPlay = _props.autoPlay,
                title = _props.title;


            return _react2['default'].createElement('video', {
                src: this.props.src,
                poster: this.props.poster,
                className: 'mola-video-raw',
                onPlay: this.onPlay,
                onPause: this.onEnd,
                onEnded: this.onEnd,
                title: title,
                'data-type': 'btn',
                autoBuffer: true,
                controls: true,
                autoPlay: autoPlay,
                preload: 'none',
                width: '100%',
                height: '100%',
                ref: 'video' });
        };

        Video.prototype.renderIframe = function renderIframe() {

            return _react2['default'].createElement('iframe', {
                src: this.props.src,
                onLoad: this.onPlay,
                className: 'mola-video-iframe',
                'data-type': 'btn',
                scrolling: 'no',
                frameBorder: '0',
                allowFullScreen: 'true' });
        };

        Video.prototype.render = function render() {
            var _props2 = this.props,
                _props2$className = _props2.className,
                className = _props2$className === undefined ? null : _props2$className,
                _props2$style = _props2.style,
                style = _props2$style === undefined ? null : _props2$style,
                videoType = _props2.videoType,
                top = _props2.top,
                left = _props2.left,
                width = _props2.width,
                height = _props2.height,
                poster = _props2.poster;


            var start = this.state.start;
            var act = videoType === 'iframe' ? 'iframe' : start ? 'pause' : 'play';

            return _react2['default'].createElement(
                'div',
                {
                    onClick: videoType === 'iframe' ? null : this.onClick,
                    'dara-type': 'btn',
                    'data-click': '{"mod": "video", "act": "b_' + act + '"}',
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

    Video.propTypes = {
        top: _react.PropTypes.number.isRequired,
        left: _react.PropTypes.number.isRequired,
        width: _react.PropTypes.number.isRequired,
        height: _react.PropTypes.number.isRequired,
        poster: _react.PropTypes.string,
        videoType: _react.PropTypes.oneOf(['iframe', 'raw']),
        src: _react.PropTypes.string,
        autoPlay: _react.PropTypes.bool,
        playsInline: _react.PropTypes.bool,
        title: _react.PropTypes.string
    };

    Video.defaultProps = {
        top: 0,
        left: 0,
        width: 320,
        height: 180,
        videoType: 'iframe',
        autoPlay: true,
        playsInline: false
    };

    exports['default'] = (0, _mola.registerComponent)(_constants.type, _constants.level)(Video);
});
//# sourceMappingURL=Video.js.map
