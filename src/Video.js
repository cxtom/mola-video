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
import domUtil from 'melon/common/util/dom';

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
    }

    componentDidMount() {
        if (this.props.videoType === 'iframe') {
            this.setState({start: true});
        }
        else if (this.props.videoType === 'raw') {
            domUtil.on(this.refs.video, 'play', this.onPlay);
        }
    }

    componentWillUnmount() {
        if (this.props.videoType === 'raw') {
            domUtil.off(this.refs.video, 'play', this.onPlay);
        }
    }

    onPlay() {
        domUtil.off(this.refs.video, 'play', this.onPlay);
        this.setState({start: true});
    }

    onClick() {
        if (this.props.videoType === 'raw') {
            const video = this.refs.video;
            video.play();
        }
    }

    renderRaw() {

        return (
            <video
                src={this.props.src}
                poster={this.props.poster}
                className="mola-video-raw"
                autoBuffer
                autoPlay
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
                className="mola-video-iframe"
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

        return (
            <div
                onClick={videoType === 'iframe' ? null : this.onClick}
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
    videoUrl: PropTypes.string
};

Video.defaultProps = {
    top: 0,
    left: 0,
    width: 320,
    height: 180,
    videoType: 'iframe'
};

export default registerComponent(type, level)(Video);
