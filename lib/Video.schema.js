(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', './Video', 'react-addons-update', './babelHelpers'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('./Video'), require('react-addons-update'), require('./babelHelpers'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.Video, global.reactAddonsUpdate, global.babelHelpers);
        global.VideoSchema = mod.exports;
    }
})(this, function (exports, _Video, _reactAddonsUpdate, babelHelpers) {
    'use strict';

    exports.__esModule = true;
    exports.editorProps = exports.level = exports.type = undefined;
    Object.defineProperty(exports, 'type', {
        enumerable: true,
        get: function () {
            return _Video.type;
        }
    });
    Object.defineProperty(exports, 'level', {
        enumerable: true,
        get: function () {
            return _Video.level;
        }
    });

    exports.default = function (props) {

        switch (props.videoType) {
            case 'raw':
                return (0, _reactAddonsUpdate2['default'])(DEFAULT_SCHEMA, {
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
                            },
                            playsInline: {
                                'type': 'boolean',
                                'title': 'IOS下是否全屏',
                                'default': false
                            }
                        }
                    }
                });
            case 'iframe':
            default:
                return DEFAULT_SCHEMA;
        }
    };

    var _reactAddonsUpdate2 = babelHelpers.interopRequireDefault(_reactAddonsUpdate);

    /**
     * @file 视频播放组件
     * @author cxtom <cxtom2008@gmail.com>
     */

    var editorProps = exports.editorProps = {
        movable: true,
        resizable: 'both',
        droppable: false,
        selectable: true
    };

    var DEFAULT_SCHEMA = {
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
                'enumNames': ['视频网站分享', 'mp4文件'],
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
});
//# sourceMappingURL=Video.schema.js.map
