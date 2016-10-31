(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', './Video'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('./Video'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.Video);
        global.VideoSchema = mod.exports;
    }
})(this, function (exports, _Video) {
    'use strict';

    exports.__esModule = true;
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
    var editorProps = exports.editorProps = {
        movable: true,
        resizable: 'both',
        droppable: false,
        selectable: true
    };

    exports['default'] = {
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
