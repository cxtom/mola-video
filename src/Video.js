/**
 * @file 视频组件
 * @author cxtom <cxtom2008@gmail.com>
 */

import React, {Component, PropTypes} from 'react';

import {
    registerComponent,
    MOLA_COMPONENT_LEVEL_ATOM,
    px2rem
} from 'mola';

import cx from 'classnames';

export const type = 'Video';
export const level = MOLA_COMPONENT_LEVEL_ATOM;

export class Video extends Component {

    constructor(...args) {
        super(...args);
        this.state = {
            start: false
        };
        this.onClick = this.onClick.bind(this);
        this.onPlay = this.onPlay.bind(this);
        this.onEnd = this.onEnd.bind(this);
    }

    onPlay() {
        this.setState({start: true});
    }

    onEnd() {
        this.setState({start: false});
    }

    onClick() {
        const video = this.refs.video;
        video.play();
    }

    renderRaw() {

        const {autoPlay, title} = this.props;

        return (
            <video
                src={this.props.src}
                poster={this.props.poster}
                className="mola-video-raw"
                onPlay={this.onPlay}
                onPause={this.onEnd}
                onEnded={this.onEnd}
                title={title}
                data-type="btn"
                autoBuffer
                autoPlay={autoPlay}
                preload="none"
                width="100%"
                height="100%"
                ref="video" />
        );
    }

    renderIframe() {

        return (
            <iframe
                src={this.props.src}
                onLoad={this.onPlay}
                className="mola-video-iframe"
                data-type="btn"
                scrolling="no"
                frameBorder="0"
                allowFullScreen="true" />
        );
    }

    render() {

        let {
            className = null,
            style = null,
            videoType,
            top,
            left,
            width,
            height,
            poster
        } = this.props;

        const start = this.state.start;
        const act = videoType === 'iframe' ? 'iframe' : (
            start ? 'pause' : 'play'
        );

        return (
            <div
                onClick={videoType === 'iframe' ? null : this.onClick}
                dara-type="btn"
                data-click={`{"mod": "video", "act": "b_${act}"}`}
                className={cx('mola-video', className, {'state-start': start})}
                style={{
                    ...style,
                    top: px2rem(top),
                    left: px2rem(left),
                    width: px2rem(width),
                    height: px2rem(height),
                    backgroundImage: start ? 'none' : `url(${poster})`
                }}>
                {videoType === 'iframe' ? this.renderIframe() : this.renderRaw()}
            </div>
        );
    }

}

Video.displayName = type;

Video.propTypes = {
    top: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    poster: PropTypes.string,
    videoType: PropTypes.oneOf(['iframe', 'raw']),
    src: PropTypes.string,
    autoPlay: PropTypes.bool
};

Video.defaultProps = {
    top: 0,
    left: 0,
    width: 320,
    height: 180,
    videoType: 'iframe',
    autoPlay: true
};

export default registerComponent(type, level)(Video);
