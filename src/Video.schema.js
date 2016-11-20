/**
 * @file 视频播放组件
 * @author cxtom <cxtom2008@gmail.com>
 */

import update from 'react-addons-update';

export {type, level} from './Video';

export const editorProps = {
    movable: true,
    resizable: 'both',
    droppable: false,
    selectable: true
};

const DEFAULT_SCHEMA = {
    type: 'object',
    properties: {
        top: {
            'title': 'top',
            'type': 'number',
            'default': 0
        },
        left: {
            'title': 'left',
            'type': 'number',
            'default': 0
        },
        width: {
            'title': '宽度',
            'type': 'number',
            'default': 320
        },
        height: {
            'title': '高度',
            'type': 'number',
            'default': 180
        },
        poster: {
            title: '初始图片',
            type: 'string',
            format: 'uri',
            media: {
                type: 'image/*'
            }
        },
        videoType: {
            'type': 'string',
            'title': '视频类型',
            'enum': ['iframe', 'raw'],
            'enumNames': [
                '视频网站分享',
                'mp4文件'
            ],
            'default': 'iframe'
        },
        src: {
            type: 'string',
            title: '地址',
            format: 'uri'
        }
    },
    required: ['top', 'left', 'width', 'height', 'videoType', 'src']
};

export default function (props) {

    switch (props.videoType) {
        case 'raw':
            return update(DEFAULT_SCHEMA, {
                properties: {
                    $merge: {
                        autoPlay: {
                            'title': '是否自动播放 (浏览器支持时)',
                            'type': 'boolean',
                            'default': true
                        },
                        title: {
                            title: '视频标题（锁屏后显示）',
                            type: 'string'
                        }
                    }
                }
            });
        case 'iframe':
        default:
            return DEFAULT_SCHEMA;
    }


}
