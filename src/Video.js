/**
 * @file 视频组件
 * @author cxtom <cxtom2008@gmail.com>
 */

import React, {Component, PropTypes} from 'react';
import {registerComponent, px2rem} from 'mola';
import {type, level} from './constants';
import cx from 'classnames';

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

    componentDidMount() {
        if (this.props.videoType === 'raw' && this.refs.video && this.props.playsInline) {
            this.refs.video.setAttribute('webkit-playsinline', 'webkit-playsinline');
            this.refs.video.setAttribute('playsinline', 'playsinline');
        }
    }

    onPlay() {
        this.setState({start: true});
    }

    onEnd() {
        this.setState({start: false});
    }

    onClick() {
        const start = this.state.start;
        const video = this.refs.video;
        video[start ? 'pause' : 'play']();
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
                controls
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

Video.propTypes = {
    top: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]).isRequired,
    left: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]).isRequired,
    width: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]).isRequired,
    height: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]).isRequired,
    poster: PropTypes.string,
    videoType: PropTypes.oneOf(['iframe', 'raw']),
    src: PropTypes.string,
    autoPlay: PropTypes.bool,
    playsInline: PropTypes.bool,
    title: PropTypes.string
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

export default registerComponent(type, level)(Video);
