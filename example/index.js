/**
 * @file Video example
 * @author cxtom <cxtom2008@gamil.com>
 */

import React from 'react';
import Video from '../src/Video.js';
import ReactDOM from 'react-dom';

import {getRootFontSize} from 'mola';

import './index.styl';

document.getElementsByTagName('html')[0].style['font-size'] = getRootFontSize(document.documentElement.clientWidth) + 'px';

ReactDOM.render(
    <div>
        <h1 style={{top: 90}}>iframe</h1>
        <Video
            top={100}
            left={27.5}
            videoType="iframe"
            poster="http://img.9ku.com/geshoutuji/singertuji/2/2791/2791_3.jpg"
            src="http://open.iqiyi.com/developer/player_js/coopPlayerIndex.html?vid=60d27ebbfe56a33b9f5df4c34b1a8f18&tvId=5593595609&accessToken=2.f22860a2479ad60d8da7697274de9346&appKey=3955c3425820435e86d0f4cdfe56f5e7&appId=1368&height=100%&width=100%"/>
        <h1 style={{top: 370}}>video</h1>
        <Video
            top={320}
            left={27.5}
            autoPlay={false}
            playsInline
            videoType="raw"
            poster="http://img.9ku.com/geshoutuji/singertuji/2/2791/2791_3.jpg"
            src="http://boscdn.bpc.baidu.com/mms-res/m4v-video/kouyuduihua.mp4"/>
    </div>,
    document.getElementById('app')
);
