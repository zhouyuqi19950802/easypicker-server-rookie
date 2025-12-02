function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = _object_without_properties_loose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _object_without_properties_loose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _is_native_reflect_construct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return(g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g);
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
function _ts_values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = function(obj, key, value) {
    return key in obj ? __defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: value
    }) : obj[key] = value;
};
var __name = function(target, value) {
    return __defProp(target, "name", {
        value: value,
        configurable: true
    });
};
var __esm = function(fn, res) {
    return function __init() {
        return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
    };
};
var __export = function(target, all) {
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = function(to, from, except, desc) {
    if (from && typeof from === "object" || typeof from === "function") {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            var _loop = function() {
                var key = _step.value;
                if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
                    get: function() {
                        return from[key];
                    },
                    enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
                });
            };
            for(var _iterator = __getOwnPropNames(from)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
    return to;
};
var __toESM = function(mod, isNodeMode, target) {
    return target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(// If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
        value: mod,
        enumerable: true
    }) : target, mod);
};
var __publicField = function(obj, key, value) {
    __defNormalProp(obj, (typeof key === "undefined" ? "undefined" : _type_of(key)) !== "symbol" ? key + "" : key, value);
    return value;
};
// src/constants/index.ts
var constants_exports = {};
__export(constants_exports, {
    LocalEnvMap: function() {
        return LocalEnvMap;
    },
    UserConfigLabels: function() {
        return UserConfigLabels;
    },
    codeMsg: function() {
        return codeMsg;
    },
    filesCompressedDir: function() {
        return filesCompressedDir;
    },
    filesManageDir: function() {
        return filesManageDir;
    },
    filesTempDir: function() {
        return filesTempDir;
    },
    filesThumbnailsDir: function() {
        return filesThumbnailsDir;
    },
    filesUploadDir: function() {
        return filesUploadDir;
    },
    uploadFileDir: function() {
        return uploadFileDir;
    }
});
function codeMsg(code, msg) {
    return {
        code: code,
        msg: msg
    };
}
var uploadFileDir, filesManageDir, filesUploadDir, filesThumbnailsDir, filesCompressedDir, filesTempDir, UserConfigLabels, LocalEnvMap;
var init_constants = __esm({
    "src/constants/index.ts": function() {
        __name(codeMsg, "codeMsg");
        uploadFileDir = "".concat(process.cwd(), "/upload");
        filesManageDir = "".concat(process.cwd(), "/files-manage");
        filesUploadDir = "".concat(filesManageDir, "/uploads");
        filesThumbnailsDir = "".concat(filesManageDir, "/thumbnails");
        filesCompressedDir = "".concat(filesManageDir, "/compressed");
        filesTempDir = "".concat(filesManageDir, "/temp");
        UserConfigLabels = {
            mysql: {
                host: "主机地址",
                port: "端口号",
                database: "数据库名",
                user: "用户名",
                password: "密码"
            },
            qiniu: {
                accessKey: "AccessKey",
                secretKey: "SecretKey",
                bucketName: "存储空间名",
                bucketDomain: "绑定的域名",
                imageCoverStyle: "图片封面压缩样式",
                imagePreviewStyle: "图片预览压缩样式",
                bucketZone: "存储空间区域"
            },
            mongo: {
                host: "主机地址",
                port: "端口号",
                database: "数据库名",
                user: "用户名",
                password: "密码",
                auth: "是否需要鉴权",
                uri: "连接字符串"
            },
            redis: {
                host: "主机地址",
                port: "端口号",
                password: "连接密码",
                auth: "需要鉴权"
            },
            mail: {
                smtpHost: "SMTP 地址",
                smtpPort: "端口号",
                useSSL: "启用 SSL",
                account: "发信账号",
                password: "授权码/密码",
                from: "发信邮箱",
                senderName: "发信人名称",
                subject: "默认主题",
                template: "邮件模板"
            }
        };
        LocalEnvMap = {
            mysql: {
                host: "MYSQL_DB_HOST",
                port: "MYSQL_DB_PORT",
                database: "MYSQL_DB_NAME",
                user: "MYSQL_DB_USER",
                password: "MYSQL_DB_PWD"
            },
            mongo: {
                host: "MONGO_DB_HOST",
                port: "MONGO_DB_PORT",
                database: "MONGO_DB_NAME",
                user: "MONGO_DB_USER",
                password: "MONGO_DB_PWD",
                auth: "MONGO_DB_NEED_AUTH"
            },
            redis: {
                host: "REDIS_DB_HOST",
                port: "REDIS_DB_PORT",
                password: "REDIS_DB_PASSWORD",
                auth: "REDIS_DB_NEED_AUTH"
            },
            qiniu: {
                accessKey: "QINIU_ACCESS_KEY",
                secretKey: "QINIU_SECRET_KEY",
                bucketName: "QINIU_BUCKET_NAME",
                bucketDomain: "QINIU_BUCKET_DOMAIN",
                imageCoverStyle: "QINIU_BUCKET_IMAGE_COVER_STYLE",
                imagePreviewStyle: "QINIU_BUCKET_IMAGE_PREVIEW_STYLE",
                bucketZone: "QINIU_BUCKET_ZONE"
            }
        };
    }
});
// src/utils/localFileUtil.ts
var localFileUtil_exports = {};
__export(localFileUtil_exports, {
    checkLocalCompressStatus: function() {
        return checkLocalCompressStatus;
    },
    cleanExpiredTokens: function() {
        return cleanExpiredTokens;
    },
    createDownloadUrl: function() {
        return createDownloadUrl;
    },
    ensureDir: function() {
        return ensureDir;
    },
    generateDownloadToken: function() {
        return generateDownloadToken;
    },
    getCompressedFileInfo: function() {
        return getCompressedFileInfo;
    },
    getCompressedPath: function() {
        return getCompressedPath;
    },
    getFileInfo: function() {
        return getFileInfo;
    },
    getPreviewKey: function() {
        return getPreviewKey;
    },
    getPreviewPath: function() {
        return getPreviewPath;
    },
    getTempPath: function() {
        return getTempPath;
    },
    getThumbnailKey: function() {
        return getThumbnailKey;
    },
    getThumbnailPath: function() {
        return getThumbnailPath;
    },
    initDirectories: function() {
        return initDirectories;
    },
    keyToLocalPath: function() {
        return keyToLocalPath;
    },
    localPathToKey: function() {
        return localPathToKey;
    },
    verifyDownloadToken: function() {
        return verifyDownloadToken;
    }
});
function keyToLocalPath(key) {
    return import_node_path3.default.join(filesUploadDir, key);
}
function localPathToKey(localPath) {
    var relativePath = import_node_path3.default.relative(filesUploadDir, localPath);
    return relativePath.replace(/\\/g, "/");
}
function ensureDir(dirPath) {
    if (!import_node_fs2.default.existsSync(dirPath)) {
        import_node_fs2.default.mkdirSync(dirPath, {
            recursive: true
        });
    }
}
function initDirectories() {
    ensureDir(filesUploadDir);
    ensureDir(filesThumbnailsDir);
    ensureDir(filesCompressedDir);
    ensureDir(filesTempDir);
}
function getFileInfo(filePath) {
    try {
        if (!import_node_fs2.default.existsSync(filePath)) {
            return null;
        }
        var stats = import_node_fs2.default.statSync(filePath);
        var key = localPathToKey(filePath);
        var ext = import_node_path3.default.extname(filePath).toLowerCase();
        var mimeType = getMimeType(ext);
        return {
            key: key,
            hash: "",
            fsize: stats.size,
            mimeType: mimeType,
            putTime: Math.floor(stats.mtimeMs / 1e3),
            type: stats.isDirectory() ? 1 : 0,
            status: 0,
            md5: ""
        };
    } catch (error) {
        console.error("获取文件信息失败:", error);
        return null;
    }
}
function getMimeType(ext) {
    var mimeTypes = {
        ".jpg": "image/jpeg",
        ".jpeg": "image/jpeg",
        ".png": "image/png",
        ".gif": "image/gif",
        ".webp": "image/webp",
        ".pdf": "application/pdf",
        ".doc": "application/msword",
        ".docx": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ".xls": "application/vnd.ms-excel",
        ".xlsx": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        ".zip": "application/zip",
        ".txt": "text/plain",
        ".mp4": "video/mp4",
        ".mp3": "audio/mpeg"
    };
    return mimeTypes[ext] || "application/octet-stream";
}
function generateDownloadToken(key, expiredTime) {
    var token = import_node_crypto2.default.randomBytes(32).toString("hex");
    downloadTokens.set(token, {
        key: key,
        expiredTime: expiredTime
    });
    return token;
}
function verifyDownloadToken(token) {
    var tokenInfo = downloadTokens.get(token);
    if (!tokenInfo) {
        return null;
    }
    var now = Math.floor(Date.now() / 1e3);
    if (now > tokenInfo.expiredTime) {
        downloadTokens.delete(token);
        return null;
    }
    return tokenInfo.key;
}
function cleanExpiredTokens() {
    var now = Math.floor(Date.now() / 1e3);
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = downloadTokens.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var _step_value = _sliced_to_array(_step.value, 2), token = _step_value[0], info = _step_value[1];
            if (now > info.expiredTime) {
                downloadTokens.delete(token);
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}
function createDownloadUrl(key, expiredTime, req) {
    var token = generateDownloadToken(key, expiredTime);
    console.log("生成下载 token, key:", key, "token:", token, "expiredTime:", expiredTime);
    if (req) {
        var origin = req.headers.origin || req.headers.referer || "http://localhost";
        var baseUrl = new URL(origin).origin;
        var url3 = "".concat(baseUrl, "/api/file/download/").concat(token);
        console.log("生成的下载 URL:", url3);
        return url3;
    }
    var url2 = "/api/file/download/".concat(token);
    console.log("生成的下载 URL (无 req):", url2);
    return url2;
}
function getThumbnailPath(key) {
    var hash = import_node_crypto2.default.createHash("md5").update(key).digest("hex");
    return import_node_path3.default.join(filesThumbnailsDir, "".concat(hash, ".jpg"));
}
function getPreviewPath(key) {
    var hash = import_node_crypto2.default.createHash("md5").update(key).digest("hex");
    return import_node_path3.default.join(filesThumbnailsDir, "".concat(hash, "_preview.jpg"));
}
function getThumbnailKey(key) {
    var hash = import_node_crypto2.default.createHash("md5").update(key).digest("hex");
    return "thumbnails/".concat(hash, ".jpg");
}
function getPreviewKey(key) {
    var hash = import_node_crypto2.default.createHash("md5").update(key).digest("hex");
    return "thumbnails/".concat(hash, "_preview.jpg");
}
function getCompressedPath(zipName) {
    return import_node_path3.default.join(filesCompressedDir, zipName);
}
function checkLocalCompressStatus(archiveKey) {
    try {
        console.log("检查压缩文件状态, archiveKey:", archiveKey);
        var fileName = archiveKey.replace("compressed/", "");
        var localPath = import_node_path3.default.join(filesCompressedDir, fileName);
        console.log("压缩文件本地路径:", localPath);
        console.log("文件是否存在:", import_node_fs2.default.existsSync(localPath));
        if (import_node_fs2.default.existsSync(localPath)) {
            var stats = import_node_fs2.default.statSync(localPath);
            console.log("压缩文件大小:", stats.size);
            return {
                code: 0,
                key: archiveKey
            };
        } else {
            console.error("压缩文件不存在:", localPath);
            return {
                code: 1,
                error: "压缩文件不存在"
            };
        }
    } catch (error) {
        console.error("检查压缩文件状态失败:", error);
        return {
            code: 3,
            error: "检查压缩文件状态失败: ".concat(error)
        };
    }
}
function getCompressedFileInfo(archiveKey) {
    try {
        var fileName = archiveKey.replace("compressed/", "");
        var localPath = import_node_path3.default.join(filesCompressedDir, fileName);
        if (!import_node_fs2.default.existsSync(localPath)) {
            return null;
        }
        var stats = import_node_fs2.default.statSync(localPath);
        var ext = import_node_path3.default.extname(localPath).toLowerCase();
        var mimeType = getMimeType(ext);
        return {
            key: archiveKey,
            hash: "",
            fsize: stats.size,
            mimeType: mimeType,
            putTime: Math.floor(stats.mtimeMs / 1e3),
            type: 0,
            status: 0,
            md5: ""
        };
    } catch (error) {
        console.error("获取压缩文件信息失败:", error);
        return null;
    }
}
function getTempPath(filename) {
    return import_node_path3.default.join(filesTempDir, filename);
}
var import_node_path3, import_node_fs2, import_node_crypto2, downloadTokens;
var init_localFileUtil = __esm({
    "src/utils/localFileUtil.ts": function() {
        import_node_path3 = __toESM(require("path"));
        import_node_fs2 = __toESM(require("fs"));
        import_node_crypto2 = __toESM(require("crypto"));
        init_constants();
        downloadTokens = /* @__PURE__ */ new Map();
        __name(keyToLocalPath, "keyToLocalPath");
        __name(localPathToKey, "localPathToKey");
        __name(ensureDir, "ensureDir");
        __name(initDirectories, "initDirectories");
        __name(getFileInfo, "getFileInfo");
        __name(getMimeType, "getMimeType");
        __name(generateDownloadToken, "generateDownloadToken");
        __name(verifyDownloadToken, "verifyDownloadToken");
        __name(cleanExpiredTokens, "cleanExpiredTokens");
        __name(createDownloadUrl, "createDownloadUrl");
        __name(getThumbnailPath, "getThumbnailPath");
        __name(getPreviewPath, "getPreviewPath");
        __name(getThumbnailKey, "getThumbnailKey");
        __name(getPreviewKey, "getPreviewKey");
        __name(getCompressedPath, "getCompressedPath");
        __name(checkLocalCompressStatus, "checkLocalCompressStatus");
        __name(getCompressedFileInfo, "getCompressedFileInfo");
        __name(getTempPath, "getTempPath");
        setInterval(function() {
            cleanExpiredTokens();
        }, 36e5);
    }
});
// src/index.ts
var import_reflect_metadata = require("reflect-metadata");
var import_flash_wolves35 = require("flash-wolves");
// src/config/index.ts
var serverConfig = {
    port: +process.env.SERVER_PORT,
    hostname: process.env.SERVER_HOST
};
var mysqlConfig = {
    host: process.env.MYSQL_DB_HOST,
    port: +process.env.MYSQL_DB_PORT,
    database: process.env.MYSQL_DB_NAME,
    user: process.env.MYSQL_DB_USER,
    password: process.env.MYSQL_DB_PWD
};
var mongodbConfig = {
    host: process.env.MONGO_DB_HOST,
    port: +process.env.MONGO_DB_PORT,
    database: process.env.MONGO_DB_NAME,
    user: process.env.MONGO_DB_USER,
    password: process.env.MONGO_DB_PWD,
    auth: String(true) === process.env.MONGO_DB_NEED_AUTH
};
var redisConfig = {
    host: process.env.REDIS_DB_HOST,
    port: +process.env.REDIS_DB_PORT,
    password: process.env.REDIS_DB_PASSWORD,
    auth: String(true) === process.env.REDIS_DB_NEED_AUTH
};
var qiniuConfig = {
    accessKey: process.env.QINIU_ACCESS_KEY,
    secretKey: process.env.QINIU_SECRET_KEY,
    bucketName: process.env.QINIU_BUCKET_NAME,
    bucketDomain: process.env.QINIU_BUCKET_DOMAIN,
    imageCoverStyle: process.env.QINIU_BUCKET_IMAGE_COVER_STYLE === "false" ? "" : process.env.QINIU_BUCKET_IMAGE_COVER_STYLE,
    imagePreviewStyle: process.env.QINIU_BUCKET_IMAGE_PREVIEW_STYLE === "false" ? "" : process.env.QINIU_BUCKET_IMAGE_PREVIEW_STYLE,
    bucketZone: process.env.QINIU_BUCKET_ZONE
};
// src/routes/modules/people.ts
var import_node_path5 = __toESM(require("path"));
var import_node_fs4 = __toESM(require("fs"));
var import_node_process4 = __toESM(require("process"));
var import_flash_wolves19 = require("flash-wolves");
// src/service/qiniuService.ts
var import_flash_wolves2 = require("flash-wolves");
var import_qiniu2 = __toESM(require("qiniu"));
// src/service/behaviorService.ts
var import_flash_wolves = require("flash-wolves");
// src/db/logDb.ts
var import_mongodb3 = require("mongodb");
// src/lib/dbConnect/mongodb.ts
var import_mongodb = require("mongodb");
// src/utils/user-local-db.ts
var import_node_fs = __toESM(require("fs"));
var import_node_path = __toESM(require("path"));
var import_node_process = __toESM(require("process"));
init_constants();
var JSONDbFile = import_node_path.default.join(import_node_process.default.cwd(), "user-config.json");
var _LocalUserDB = /*#__PURE__*/ function() {
    "use strict";
    function _LocalUserDB() {
        _class_call_check(this, _LocalUserDB);
    }
    _create_class(_LocalUserDB, null, [
        {
            key: "initUserConfig",
            value: function initUserConfig() {
                var _this = this;
                return _async_to_generator(function() {
                    var _, error;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!!(0, import_node_fs.existsSync)(JSONDbFile)) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    import_node_fs.default.promises.writeFile(JSONDbFile, "[]", "utf-8")
                                ];
                            case 1:
                                _state.sent();
                                _this.data = [];
                                return [
                                    2
                                ];
                            case 2:
                                _state.trys.push([
                                    2,
                                    4,
                                    ,
                                    6
                                ]);
                                _ = JSON.parse;
                                return [
                                    4,
                                    import_node_fs.default.promises.readFile(JSONDbFile, "utf-8")
                                ];
                            case 3:
                                _this.data = _.apply(JSON, [
                                    _state.sent()
                                ]);
                                return [
                                    3,
                                    6
                                ];
                            case 4:
                                error = _state.sent();
                                _this.data = [];
                                console.log("❌ user-config.json 配置文件解析失败, 已重置为默认配置");
                                return [
                                    4,
                                    import_node_fs.default.promises.writeFile(JSONDbFile, "[]", "utf-8")
                                ];
                            case 5:
                                _state.sent();
                                return [
                                    3,
                                    6
                                ];
                            case 6:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "updateLocalEnv",
            value: function updateLocalEnv() {
                var _this = this;
                return _async_to_generator(function() {
                    var localEnvFile, isExist, content;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                localEnvFile = "".concat(import_node_process.default.cwd(), "/.env.local");
                                isExist = import_node_fs.default.existsSync(localEnvFile);
                                content = "";
                                if (!isExist) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    import_node_fs.default.promises.readFile(localEnvFile, "utf-8")
                                ];
                            case 1:
                                content = _state.sent();
                                _state.label = 2;
                            case 2:
                                _this.data.forEach(function(item) {
                                    var _LocalEnvMap_type, _LocalEnvMap;
                                    var type = item.type, key = item.key, value = item.value;
                                    var originEnvKey = (_LocalEnvMap = LocalEnvMap) === null || _LocalEnvMap === void 0 ? void 0 : (_LocalEnvMap_type = _LocalEnvMap[type]) === null || _LocalEnvMap_type === void 0 ? void 0 : _LocalEnvMap_type[key];
                                    if (!originEnvKey) {
                                        return;
                                    }
                                    if (import_node_process.default.env[originEnvKey] !== "".concat(value)) {
                                        content = content.replace(new RegExp("".concat(originEnvKey, "=.*")), "");
                                        content += "\n".concat(originEnvKey, "=").concat(value);
                                    }
                                });
                                content = content.split("\n").filter(Boolean).join("\n");
                                return [
                                    4,
                                    import_node_fs.default.promises.writeFile(localEnvFile, content, "utf-8")
                                ];
                            case 3:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "updateCfg",
            value: function updateCfg() {
                return import_node_fs.default.promises.writeFile(JSONDbFile, JSON.stringify(this.data, null, 2), "utf-8");
            }
        },
        {
            key: "addUserConfigData",
            value: function addUserConfigData(data) {
                this.data.push(data);
            }
        },
        {
            key: "setUserConfig",
            value: function setUserConfig(data) {
                var _this = this;
                return _async_to_generator(function() {
                    var index, next;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                index = _this.data.findIndex(function(item) {
                                    return item.type === data.type && item.key === data.key;
                                });
                                next = _object_spread_props(_object_spread({}, data), {
                                    lastUpdate: /* @__PURE__ */ new Date()
                                });
                                if (index > -1) {
                                    _this.data[index] = _object_spread({}, _this.data[index], next);
                                } else {
                                    _this.data.push(next);
                                }
                                return [
                                    4,
                                    _this.updateCfg()
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "findUserConfig",
            value: function findUserConfig(query3) {
                return this.data.filter(function(item) {
                    return Object.keys(query3).every(function(key) {
                        return item[key] === query3[key];
                    });
                });
            }
        },
        {
            key: "updateUserConfig",
            value: function updateUserConfig(query3, data) {
                var index = this.data.findIndex(function(item) {
                    return Object.keys(query3).every(function(key) {
                        return item[key] === query3[key];
                    });
                });
                if (index > -1) {
                    this.data[index] = _object_spread({}, this.data[index], data);
                    return this.updateCfg();
                }
            }
        },
        {
            key: "getUserConfigByType",
            value: function getUserConfigByType(type) {
                return this.findUserConfig({
                    type: type
                }).reduce(function(prev, curr) {
                    prev[curr.key] = curr.value;
                    return prev;
                }, {});
            }
        },
        {
            key: "getSiteConfig",
            value: function getSiteConfig() {
                var _this_findUserConfig_;
                var config = (_this_findUserConfig_ = this.findUserConfig({
                    type: "global",
                    key: "site"
                })[0]) === null || _this_findUserConfig_ === void 0 ? void 0 : _this_findUserConfig_.value;
                if (config && config.needBindEmail === void 0) {
                    var _config_needBindPhone;
                    config.needBindEmail = (_config_needBindPhone = config.needBindPhone) !== null && _config_needBindPhone !== void 0 ? _config_needBindPhone : false;
                }
                return config;
            }
        }
    ]);
    return _LocalUserDB;
}();
__name(_LocalUserDB, "LocalUserDB");
__publicField(_LocalUserDB, "data", []);
var LocalUserDB = _LocalUserDB;
// src/lib/dbConnect/mongodb.ts
var host = mongodbConfig.host, port = mongodbConfig.port, user = mongodbConfig.user, password = mongodbConfig.password, database = mongodbConfig.database, auth = mongodbConfig.auth;
var url = auth ? "mongodb://".concat(user, ":").concat(password, "@").concat(host, ":").concat(port, "/").concat(database) : "mongodb://".concat(host, ":").concat(port, "/").concat(database, "?wtimeoutMS=2000");
function refreshMongoDb() {
    var cfg = LocalUserDB.getUserConfigByType("mongo");
    var host3 = cfg.host, port3 = cfg.port, user2 = cfg.user, password3 = cfg.password, database2 = cfg.database, auth3 = cfg.auth;
    url = auth3 ? "mongodb://".concat(user2, ":").concat(password3, "@").concat(host3, ":").concat(port3, "/").concat(database2) : "mongodb://".concat(host3, ":").concat(port3, "/").concat(database2, "?wtimeoutMS=2000");
}
__name(refreshMongoDb, "refreshMongoDb");
function getDBConnection() {
    return new Promise(function(res, rej) {
        import_mongodb.MongoClient.connect(url, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        }).then(function(db) {
            res({
                db: db,
                Db: db.db(database)
            });
        }).catch(function(err) {
            rej(err);
        });
    });
}
__name(getDBConnection, "getDBConnection");
function getMongoDBStatus() {
    return new Promise(function(res) {
        getDBConnection().then(function(r) {
            r.db.close();
            res({
                type: "mongodb",
                status: true
            });
        }).catch(function(err) {
            res({
                errMsg: err.message,
                type: "mongodb",
                status: false
            });
        });
    });
}
__name(getMongoDBStatus, "getMongoDBStatus");
function query(callback) {
    var p = new Promise(function(resolve, rej) {
        getDBConnection().then(function(param) {
            var db = param.db, Db = param.Db;
            callback(Db, resolve);
            p.catch(function(e) {
                return rej(e);
            }).finally(function() {
                db.close();
            });
        });
    });
    return p;
}
__name(query, "query");
var mongoDbQuery = query;
function updateCollection(collection, query3, data) {
    var many = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
    return mongoDbQuery(function(db, resolve) {
        if (many) {
            db.collection(collection).updateMany(query3, data).then(resolve);
            return;
        }
        db.collection(collection).updateOne(query3, data).then(resolve);
    });
}
__name(updateCollection, "updateCollection");
function insertCollection(collection, data) {
    var many = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
    return mongoDbQuery(function(db, resolve) {
        if (many && Array.isArray(data)) {
            db.collection(collection).insertMany(data).then(resolve);
            return;
        }
        db.collection(collection).insertOne(data).then(resolve);
    });
}
__name(insertCollection, "insertCollection");
function findCollection(collection, query3) {
    return mongoDbQuery(function(db, resolve) {
        db.collection(collection).find(query3).toArray().then(resolve);
    });
}
__name(findCollection, "findCollection");
function findCollectionCount(collection, query3) {
    return mongoDbQuery(function(db, resolve) {
        db.collection(collection).countDocuments(query3).then(resolve);
    });
}
__name(findCollectionCount, "findCollectionCount");
// src/utils/stringUtil.ts
var import_node_crypto = __toESM(require("crypto"));
var import_node_path2 = __toESM(require("path"));
var import_mongodb2 = require("mongodb");
function encryption(str) {
    return import_node_crypto.default.createHash("md5").update(str).digest("base64");
}
__name(encryption, "encryption");
function lowCamel2Underscore(word) {
    var letters = word.split("");
    return letters.reduce(function(pre, letter) {
        return pre + (/[A-Z]/.test(letter) ? "_".concat(letter.toLowerCase()) : letter);
    }, "");
}
__name(lowCamel2Underscore, "lowCamel2Underscore");
function getUniqueKey() {
    return new import_mongodb2.ObjectId().toHexString();
}
__name(getUniqueKey, "getUniqueKey");
function formatDate(d) {
    var fmt = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "yyyy-MM-dd hh:mm:ss";
    var o = {
        "M+": d.getMonth() + 1,
        "d+": d.getDate(),
        "h+": d.getHours(),
        "m+": d.getMinutes(),
        "s+": d.getSeconds(),
        "q+": Math.floor((d.getMonth() + 3) / 3),
        "S": d.getMilliseconds()
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, "".concat(d.getFullYear()).substr(4 - RegExp.$1.length));
    }
    for(var k in o){
        if (new RegExp("(".concat(k, ")")).test(fmt)) {
            fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : "00".concat(o[k]).substr("".concat(o[k]).length));
        }
    }
    return fmt;
}
__name(formatDate, "formatDate");
function formatSize(size, pointLength, units) {
    var unit;
    units = units || [
        "B",
        "K",
        "M",
        "G",
        "TB",
        "PB"
    ];
    while((unit = units.shift()) && size > 1024){
        size /= 1024;
    }
    return (unit === "B" ? size : size.toFixed(pointLength === void 0 ? 2 : pointLength)) + unit;
}
__name(formatSize, "formatSize");
function B2GB(size) {
    return size / 1024 / 1024 / 1024;
}
__name(B2GB, "B2GB");
function formatPrice() {
    for(var _len = arguments.length, prices = new Array(_len), _key = 0; _key < _len; _key++){
        prices[_key] = arguments[_key];
    }
    return prices.reduce(function(pre, cur) {
        return pre + cur;
    }, 0).toFixed(2);
}
__name(formatPrice, "formatPrice");
function isSameInfo(userInfo, dbInfo) {
    try {
        var userItems = JSON.parse(userInfo);
        var dbItems = JSON.parse(dbInfo);
        if (userItems.length === 0) {
            return false;
        }
        if (userItems.length !== dbItems.length) {
            return false;
        }
        if (!dbItems.every(function(item) {
            return userItems.find(function(userItem) {
                return userItem.text === item.text && userItem.value === item.value;
            });
        })) {
            return false;
        }
    } catch (error) {
        console.log(error);
        return false;
    }
    return true;
}
__name(isSameInfo, "isSameInfo");
function normalizeFileName(name) {
    return name.replace(/[\\/:*?"<>|]/g, "-");
}
__name(normalizeFileName, "normalizeFileName");
function getObjectIdDate(id) {
    return +new import_mongodb2.ObjectId(id).getTimestamp();
}
__name(getObjectIdDate, "getObjectIdDate");
function getTipImageKey(key, name, uid) {
    return "easypicker2/tip/".concat(key, "/").concat(uid || Date.now(), "/").concat(name);
}
__name(getTipImageKey, "getTipImageKey");
function shortLink(key, req) {
    return "".concat(new URL(req.headers.referer).origin, "/api/file/download/").concat(key);
}
__name(shortLink, "shortLink");
function percentageValue(A, B) {
    return (A / B * 100).toFixed(2);
}
__name(percentageValue, "percentageValue");
// src/db/logDb.ts
function getLogData(type, data) {
    return {
        id: getUniqueKey(),
        type: type,
        data: data
    };
}
__name(getLogData, "getLogData");
function addRequestLog(req, res) {
    return _addRequestLog.apply(this, arguments);
}
function _addRequestLog() {
    _addRequestLog = _async_to_generator(function(req, res) {
        var _user2, tmp, query3, _req_params, params, method, url2, _req_body, body, headers, userAgent, refer, ip, user2, userId, data;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    tmp = req.query, query3 = tmp === void 0 ? {} : tmp, _req_params = req.params, params = _req_params === void 0 ? {} : _req_params, method = req.method, url2 = req.url;
                    _req_body = req.body, body = _req_body === void 0 ? {} : _req_body;
                    if (method !== "GET" && !body || _instanceof(body, Buffer)) {
                        body = {};
                    }
                    headers = req.headers;
                    userAgent = headers["user-agent"];
                    refer = headers.referer;
                    ip = getClientIp(req);
                    return [
                        4,
                        getUserInfo(req)
                    ];
                case 1:
                    user2 = _state.sent();
                    userId = 0;
                    if ((_user2 = user2) === null || _user2 === void 0 ? void 0 : _user2.id) {
                        userId = user2.id;
                    }
                    data = {
                        method: method,
                        url: url2,
                        query: query3,
                        params: params,
                        body: body,
                        userAgent: userAgent,
                        refer: refer,
                        ip: ip,
                        userId: userId,
                        startTime: req.startTime,
                        endTime: Date.now(),
                        duration: Date.now() - req.startTime
                    };
                    res.on("close", function() {
                        insertCollection("log", getLogData("request", data));
                    });
                    return [
                        2
                    ];
            }
        });
    });
    return _addRequestLog.apply(this, arguments);
}
__name(addRequestLog, "addRequestLog");
function addBehavior(req, info) {
    return _addBehavior.apply(this, arguments);
}
function _addBehavior() {
    _addBehavior = _async_to_generator(function(req, info) {
        var _user2, url2, headers, method, userAgent, refer, ip, user2, userId, data;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    url2 = req.url;
                    headers = req.headers, method = req.method;
                    userAgent = headers["user-agent"];
                    refer = headers.referer;
                    ip = getClientIp(req);
                    return [
                        4,
                        getUserInfo(req)
                    ];
                case 1:
                    user2 = _state.sent();
                    userId = 0;
                    if ((_user2 = user2) === null || _user2 === void 0 ? void 0 : _user2.id) {
                        userId = user2.id;
                    }
                    data = {
                        req: {
                            method: method,
                            path: url2,
                            userAgent: userAgent,
                            refer: refer,
                            ip: ip
                        },
                        user: {
                            userId: userId
                        },
                        info: info
                    };
                    insertCollection("log", getLogData("behavior", data));
                    return [
                        2
                    ];
            }
        });
    });
    return _addBehavior.apply(this, arguments);
}
__name(addBehavior, "addBehavior");
function addErrorLog(req, msg) {
    return _addErrorLog.apply(this, arguments);
}
function _addErrorLog() {
    _addErrorLog = _async_to_generator(function(req, msg) {
        var stack, _user2, tmp, query3, _req_params, params, method, url2, _req_body, body, headers, userAgent, refer, ip, user2, userId, data;
        var _arguments = arguments;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    stack = _arguments.length > 2 && _arguments[2] !== void 0 ? _arguments[2] : {};
                    tmp = req.query, query3 = tmp === void 0 ? {} : tmp, _req_params = req.params, params = _req_params === void 0 ? {} : _req_params, method = req.method, url2 = req.url;
                    _req_body = req.body, body = _req_body === void 0 ? {} : _req_body;
                    if (method !== "GET" && !body || _instanceof(body, Buffer)) {
                        body = {};
                    }
                    headers = req.headers;
                    userAgent = headers["user-agent"];
                    refer = headers.referer;
                    ip = getClientIp(req);
                    return [
                        4,
                        getUserInfo(req)
                    ];
                case 1:
                    user2 = _state.sent();
                    userId = 0;
                    if ((_user2 = user2) === null || _user2 === void 0 ? void 0 : _user2.id) {
                        userId = user2.id;
                    }
                    data = {
                        req: {
                            method: method,
                            url: url2,
                            query: query3,
                            params: params,
                            body: body,
                            userAgent: userAgent,
                            refer: refer,
                            ip: ip,
                            userId: userId
                        },
                        msg: msg,
                        stack: stack
                    };
                    insertCollection("log", getLogData("error", data));
                    return [
                        2
                    ];
            }
        });
    });
    return _addErrorLog.apply(this, arguments);
}
__name(addErrorLog, "addErrorLog");
function addPvLog(req, path9) {
    var headers = req.headers;
    var userAgent = headers["user-agent"];
    var refer = headers.referer;
    var ip = getClientIp(req);
    var data = {
        userAgent: userAgent,
        refer: refer,
        ip: ip,
        path: path9
    };
    insertCollection("log", getLogData("pv", data));
}
__name(addPvLog, "addPvLog");
function getClientIp(req) {
    return req.headers["x-forwarded-for"] || req.connection.remoteAddress || req.socket.remoteAddress;
}
__name(getClientIp, "getClientIp");
function timeToObjId(d) {
    var s = d.getTime() / 1e3;
    return "".concat(s.toString(16), "0000000000000000");
}
__name(timeToObjId, "timeToObjId");
function findLogCount(q) {
    return mongoDbQuery(function(db, resolve) {
        db.collection("log").countDocuments(q).then(resolve);
    });
}
__name(findLogCount, "findLogCount");
function findLogWithTimeRange(start, end) {
    if (end) {
        return mongoDbQuery(function(db, resolve) {
            db.collection("log").find({
                _id: {
                    $gt: new import_mongodb3.ObjectId(timeToObjId(start)),
                    $lt: new import_mongodb3.ObjectId(timeToObjId(end))
                }
            }).toArray().then(resolve);
        });
    }
    return mongoDbQuery(function(db, resolve) {
        db.collection("log").find({
            _id: {
                $gt: new import_mongodb3.ObjectId(timeToObjId(start))
            }
        }).toArray().then(resolve);
    });
}
__name(findLogWithTimeRange, "findLogWithTimeRange");
function findLogWithPageOffset(startIdx, pageSize, query3) {
    return mongoDbQuery(function(db, resolve) {
        db.collection("log").find(query3).sort({
            _id: -1
        }).skip(startIdx).limit(pageSize).toArray().then(resolve);
    });
}
__name(findLogWithPageOffset, "findLogWithPageOffset");
function findLog(query3) {
    return mongoDbQuery(function(db, resolve) {
        db.collection("log").find(query3).toArray().then(resolve);
    });
}
__name(findLog, "findLog");
function findLogReserve(q) {
    return mongoDbQuery(function(db, resolve) {
        db.collection("log").find(q).sort({
            $natural: -1
        }).toArray().then(resolve);
    });
}
__name(findLogReserve, "findLogReserve");
function findPvLogWithRange(start, end) {
    if (end) {
        return mongoDbQuery(function(db, resolve) {
            db.collection("log").find({
                type: "pv",
                _id: {
                    $gt: new import_mongodb3.ObjectId(timeToObjId(start)),
                    $lt: new import_mongodb3.ObjectId(timeToObjId(end))
                }
            }).toArray().then(resolve);
        });
    }
    return mongoDbQuery(function(db, resolve) {
        db.collection("log").find({
            type: "pv",
            _id: {
                $gt: new import_mongodb3.ObjectId(timeToObjId(start))
            }
        }).toArray().then(resolve);
    });
}
__name(findPvLogWithRange, "findPvLogWithRange");
// src/service/behaviorService.ts
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate, "_ts_decorate");
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata, "_ts_metadata");
var _a;
var BehaviorService = (_a = /*#__PURE__*/ function() {
    "use strict";
    function _a() {
        _class_call_check(this, _a);
        __publicField(this, "Ctx");
    }
    _create_class(_a, [
        {
            key: "add",
            value: function add(module2, msg, data) {
                return addBehavior(this.Ctx.req, {
                    module: module2,
                    msg: msg,
                    data: data
                });
            }
        },
        {
            key: "addPV",
            value: function addPV(path9) {
                return addPvLog(this.Ctx.req, path9);
            }
        },
        {
            key: "error",
            value: function error(msg, stack) {
                return addErrorLog(this.Ctx.req, msg, stack !== null && stack !== void 0 ? stack : {});
            }
        }
    ]);
    return _a;
}(), __name(_a, "BehaviorService"), _a);
_ts_decorate([
    (0, import_flash_wolves.InjectCtx)(),
    _ts_metadata("design:type", typeof import_flash_wolves.Context === "undefined" ? Object : import_flash_wolves.Context)
], BehaviorService.prototype, "Ctx", void 0);
BehaviorService = _ts_decorate([
    (0, import_flash_wolves.Provide)()
], BehaviorService);
// src/lib/dbConnect/redis.ts
var import_redis = __toESM(require("redis"));
var port2 = redisConfig.port, host2 = redisConfig.host, password2 = redisConfig.password, auth2 = redisConfig.auth;
function getClient() {
    return new Promise(function(res, rej) {
        var client = import_redis.default.createClient(port2, host2, auth2 ? {
            password: password2
        } : {});
        client.on("ready", function() {
            res(client);
        });
        client.on("error", function(err) {
            client.quit();
            rej(err);
        });
    });
}
__name(getClient, "getClient");
function getRedisStatus() {
    return new Promise(function(res, rej) {
        getClient().then(function(c) {
            c.quit();
            res({
                type: "redis",
                status: true
            });
        }).catch(function(err) {
            res({
                errMsg: err.message,
                type: "redis",
                status: false
            });
        });
    });
}
__name(getRedisStatus, "getRedisStatus");
// src/utils/storageUtil.ts
var _a2;
var LocalStorage = (_a2 = /*#__PURE__*/ function() {
    "use strict";
    function _a21() {
        _class_call_check(this, _a21);
        __publicField(this, "map");
        this.map = /* @__PURE__ */ new Map();
    }
    _create_class(_a21, [
        {
            key: "loop",
            value: function loop() {
                var _this = this;
                setTimeout(function() {
                    _this.expiredCheck();
                    if (_this.map.size > 0) {
                        _this.loop();
                    }
                }, 1e3);
            }
        },
        {
            /**
  * 设置键
  * @param key 键
  * @param value 值
  * @param duration(s) 过期时间(默认-1不过期)
  */ key: "setItem",
            value: function setItem(key, value) {
                var duration = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : -1;
                if (this.map.size === 0) {
                    this.loop();
                }
                this.map.set(key, {
                    value: value,
                    duration: duration
                });
            }
        },
        {
            /**
  * 移除键
  */ key: "removeItem",
            value: function removeItem(key) {
                this.map.delete(key);
            }
        },
        {
            /**
  * 过期指定键
  */ key: "expireItem",
            value: function expireItem(key) {
                this.setItem(key, null, 0);
            }
        },
        {
            /**
  * 获取键值
  */ key: "getItem",
            value: function getItem(key) {
                return this.map.get(key);
            }
        },
        {
            /**
  * 清除所有键值
  */ key: "clearItem",
            value: function clearItem() {
                this.map.clear();
            }
        },
        {
            /**
  * 过期检测
  */ key: "expiredCheck",
            value: function expiredCheck() {
                var keys = this.map.keys();
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = keys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var key = _step.value;
                        var value = this.map.get(key);
                        if (value.duration === 0) {
                            console.log("处理过期-------".concat(key));
                            this.removeItem(key);
                        } else {
                            value.duration -= 1;
                        }
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
        }
    ], [
        {
            key: "getInstance",
            value: /**
  * 获取对象
  */ function getInstance() {
                if (!_a2.instance) {
                    _a2.instance = new _a2();
                }
                return _a2.instance;
            }
        }
    ]);
    return _a21;
}(), __name(_a2, "LocalStorage"), __publicField(_a2, "instance", null), _a2);
var storageUtil_default = LocalStorage.getInstance();
// src/db/redisDb.ts
function setRedisValue(k, v) {
    var expiredTime = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : -1;
    storageUtil_default.setItem(k, v, expiredTime);
    getClient().then(function(client) {
        client.set(k, v, function() {
            if (expiredTime !== -1) {
                client.expire(k, expiredTime, function() {
                    client.quit();
                });
                return;
            }
            client.quit();
        });
    }).catch(function(err) {
        var _err;
        console.warn("[Redis] 连接失败，使用本地存储:", ((_err = err) === null || _err === void 0 ? void 0 : _err.message) || err);
    });
}
__name(setRedisValue, "setRedisValue");
function getRedisVal(k, originCallback) {
    return new Promise(function(resolve) {
        var _v;
        var v = storageUtil_default.getItem(k);
        if ((_v = v) === null || _v === void 0 ? void 0 : _v.value) {
            resolve(v.value);
            if (typeof originCallback === "function") {
                originCallback().then(function(v2) {
                    setRedisValue(k, JSON.stringify(v2), 60 * 60 * 24 * 7);
                });
            }
            return;
        }
        getClient().then(function(client) {
            client.get(k, function(err, reply) {
                storageUtil_default.setItem(k, reply, 60 * 60 * 24 * 7);
                client.quit();
                if (reply === null && typeof originCallback === "function") {
                    originCallback().then(function(v2) {
                        var str = JSON.stringify(v2);
                        setRedisValue(k, str, 60 * 60 * 24 * 7);
                        resolve(str);
                    }).catch(function() {
                        resolve(reply);
                    });
                } else {
                    resolve(reply);
                }
            });
        }).catch(function(err) {
            var _err, _localValue;
            console.warn("[Redis] 连接失败，从本地存储读取:", ((_err = err) === null || _err === void 0 ? void 0 : _err.message) || err);
            var localValue = storageUtil_default.getItem(k);
            if ((_localValue = localValue) === null || _localValue === void 0 ? void 0 : _localValue.value) {
                resolve(localValue.value);
            } else if (typeof originCallback === "function") {
                originCallback().then(function(v2) {
                    var str = JSON.stringify(v2);
                    setRedisValue(k, str, 60 * 60 * 24 * 7);
                    resolve(str);
                }).catch(function() {
                    resolve(null);
                });
            } else {
                resolve(null);
            }
        });
    });
}
__name(getRedisVal, "getRedisVal");
function getRedisValueJSON(k, defaultValue, originCallback) {
    return getRedisVal(k, originCallback).then(function(v) {
        if (v) {
            return JSON.parse(v);
        }
        return defaultValue || null;
    });
}
__name(getRedisValueJSON, "getRedisValueJSON");
function expiredRedisKey(k) {
    setRedisValue(k, "", 0);
    storageUtil_default.expireItem(k);
}
__name(expiredRedisKey, "expiredRedisKey");
// src/utils/qiniuUtil.ts
var import_qiniu = __toESM(require("qiniu"));
var privateBucketDomain = qiniuConfig.bucketDomain;
var bucketZoneMap = {
    huadong: import_qiniu.default.zone.Zone_z0,
    huabei: import_qiniu.default.zone.Zone_z1,
    huanan: import_qiniu.default.zone.Zone_z2,
    beimei: import_qiniu.default.zone.Zone_na0,
    SoutheastAsia: import_qiniu.default.zone.Zone_as0
};
var bucketZone = bucketZoneMap[qiniuConfig.bucketZone] || import_qiniu.default.zone.Zone_z2;
var bucket = qiniuConfig.bucketName;
var mac = new import_qiniu.default.auth.digest.Mac(qiniuConfig.accessKey, qiniuConfig.secretKey);
var urlsafeBase64Encode = import_qiniu.default.util.urlsafeBase64Encode;
function refreshQinNiuConfig() {
    return _refreshQinNiuConfig.apply(this, arguments);
}
function _refreshQinNiuConfig() {
    _refreshQinNiuConfig = _async_to_generator(function() {
        var cfg;
        return _ts_generator(this, function(_state) {
            cfg = LocalUserDB.getUserConfigByType("qiniu");
            Object.assign(qiniuConfig, cfg);
            privateBucketDomain = qiniuConfig.bucketDomain;
            bucketZone = bucketZoneMap[qiniuConfig.bucketZone] || import_qiniu.default.zone.Zone_z2;
            bucket = qiniuConfig.bucketName;
            mac = new import_qiniu.default.auth.digest.Mac(qiniuConfig.accessKey, qiniuConfig.secretKey);
            return [
                2
            ];
        });
    });
    return _refreshQinNiuConfig.apply(this, arguments);
}
__name(refreshQinNiuConfig, "refreshQinNiuConfig");
function getUploadToken() {
    var putPolicy = new import_qiniu.default.rs.PutPolicy({
        scope: bucket,
        // returnBody: '{"key":"$(key)","hash":"$(etag)","fsize":$(fsize),"bucket":"$(bucket)","name":"$(x:name)"}'
        returnBody: '{"key":"$(key)","hash":"$(etag)","fsize":$(fsize)}'
    });
    return putPolicy.uploadToken(mac);
}
__name(getUploadToken, "getUploadToken");
function batchDeleteFiles(keys, req) {
    if (!keys.length) return;
    var config = new import_qiniu.default.conf.Config();
    var delOptions = keys.map(function(k) {
        return import_qiniu.default.rs.deleteOp(bucket, k);
    });
    var bucketManager = new import_qiniu.default.rs.BucketManager(mac, config);
    bucketManager.batch(delOptions, function(err, respBody, respInfo) {
        if (err) {
            console.log(err);
            addErrorLog(req, "批量删除异常: ".concat(err.message), err.stack);
        } else {
            if (Number.parseInt("".concat(respInfo.statusCode / 100), 10) === 2) {
                respBody.forEach(function(item) {
                    if (+item.code !== 200) {
                        if (req) {
                            addErrorLog(req, "".concat(item.code, "	").concat(item.data.error), item);
                        }
                    }
                });
            } else {
                console.log(respInfo.deleteusCode);
                console.log(respBody);
                addErrorLog(req, "批量删除异常: ".concat(respInfo.deleteusCode), respBody);
            }
        }
    });
}
__name(batchDeleteFiles, "batchDeleteFiles");
function deleteObjByKey(key, req) {
    var config = new import_qiniu.default.conf.Config();
    var bucketManager = new import_qiniu.default.rs.BucketManager(mac, config);
    bucketManager.delete(bucket, key, function(err) {
        if (err) {
            console.log("------删除失败 start-------");
            console.log(key);
            console.log(err);
            console.log("------删除失败 end-------");
            if (req) {
                var _err, _err1;
                addErrorLog(req, "删除失败:".concat(key).concat((_err = err) === null || _err === void 0 ? void 0 : _err.message), (_err1 = err) === null || _err1 === void 0 ? void 0 : _err1.stack);
            }
        }
    });
}
__name(deleteObjByKey, "deleteObjByKey");
function mergeRequest(callback) {
    var delay = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e3;
    var pMap = /* @__PURE__ */ new Map();
    var cb = /* @__PURE__ */ __name(function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        var key = JSON.stringify(args);
        var p = pMap.get(key);
        if (!p) {
            p = callback.apply(void 0, _to_consumable_array(args));
            pMap.set(key, p);
            setTimeout(function() {
                pMap.delete(key);
            }, delay);
        }
        return p;
    }, "cb");
    return cb;
}
__name(mergeRequest, "mergeRequest");
var getOSSFiles = mergeRequest(function(prefix) {
    var data = [];
    var marker = "";
    var ops = {
        limit: 1e3,
        prefix: prefix
    };
    return new Promise(function(res) {
        var analyze = /* @__PURE__ */ __name(function() {
            var config = new import_qiniu.default.conf.Config();
            var bucketManager = new import_qiniu.default.rs.BucketManager(mac, config);
            if (ops) {
                ops.marker = marker;
            }
            bucketManager.listPrefix(bucket, ops, function(err, respBody) {
                var _respBody, _respBody1;
                data = data.concat(((_respBody = respBody) === null || _respBody === void 0 ? void 0 : _respBody.items) || []);
                if ((_respBody1 = respBody) === null || _respBody1 === void 0 ? void 0 : _respBody1.marker) {
                    marker = respBody.marker;
                    analyze();
                } else {
                    res(data);
                }
            });
        }, "analyze");
        analyze();
    });
});
function getFileKeys(prefix) {
    return new Promise(function(res) {
        var config = new import_qiniu.default.conf.Config();
        var bucketManager = new import_qiniu.default.rs.BucketManager(mac, config);
        bucketManager.listPrefix(bucket, {
            prefix: prefix
        }, function(err, respBody) {
            var _respBody;
            res(((_respBody = respBody) === null || _respBody === void 0 ? void 0 : _respBody.items) || []);
        });
    });
}
__name(getFileKeys, "getFileKeys");
function batchFileStatus(keys) {
    return new Promise(function(resolve, reject) {
        if (keys.length === 0) {
            return [];
        }
        var statOperations = keys.map(function(k) {
            return import_qiniu.default.rs.statOp(bucket, k);
        });
        var config = new import_qiniu.default.conf.Config();
        var bucketManager = new import_qiniu.default.rs.BucketManager(mac, config);
        bucketManager.batch(statOperations, function(err, respBody, respInfo) {
            if (err) {
                reject(err);
            } else {
                if (Number.parseInt("".concat(respInfo.statusCode / 100)) == 2) {
                    resolve(respBody);
                } else {
                    console.log(respInfo.statusCode);
                    console.log(respBody);
                }
            }
        });
    });
}
__name(batchFileStatus, "batchFileStatus");
function getQiniuStatus() {
    return new Promise(function(res) {
        if (!qiniuConfig.bucketDomain.startsWith("http")) {
            res({
                type: "qiniu",
                status: false,
                errMsg: "域名配置错误，必须包含协议 http:/// 或 https://"
            });
            return;
        }
        var config = new import_qiniu.default.conf.Config({
            zone: bucketZone
        });
        var checkRegion = new Promise(function(res2, rej) {
            var formUploader = new import_qiniu.default.form_up.FormUploader(config);
            var putExtra = new import_qiniu.default.form_up.PutExtra();
            var key = "".concat(Date.now(), "-").concat(~~(Math.random() * 1e3), ".txt");
            formUploader.put(getUploadToken(), key, "status test", putExtra, function(respErr, respBody, respInfo) {
                var _respBody;
                var err = respErr || ((_respBody = respBody) === null || _respBody === void 0 ? void 0 : _respBody.error);
                if (err) {
                    rej(err);
                    return;
                }
                deleteObjByKey(key);
                res2(key);
            });
        });
        var bucketManager = new import_qiniu.default.rs.BucketManager(mac, config);
        bucketManager.listPrefix(bucket, {
            prefix: "easypicker2/",
            limit: 1
        }, function(err, respBody) {
            var _err, _respBody;
            var errMsg = ((_err = err) === null || _err === void 0 ? void 0 : _err.message) || ((_respBody = respBody) === null || _respBody === void 0 ? void 0 : _respBody.error);
            if (errMsg) {
                res({
                    type: "qiniu",
                    status: false,
                    errMsg: errMsg
                });
                return;
            }
            checkRegion.then(function() {
                res({
                    type: "qiniu",
                    status: true
                });
            }).catch(function(err2) {
                res({
                    type: "qiniu",
                    status: false,
                    errMsg: "".concat(err2, "，存储区域配置不正确，请参看文档重新选择")
                });
            });
        });
    });
}
__name(getQiniuStatus, "getQiniuStatus");
// src/service/super.ts
var _a3;
var SuperService = (_a3 = /*#__PURE__*/ function() {
    "use strict";
    function _a3() {
        _class_call_check(this, _a3);
    }
    _create_class(_a3, [
        {
            key: "getOssFiles",
            value: function getOssFiles() {
                return _async_to_generator(function() {
                    var systemUser, cacheKey, ossFiles;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                systemUser = LocalUserDB.getUserConfigByType("server").USER || "local";
                                cacheKey = "".concat(systemUser, "-oss-files-easypicker2/");
                                return [
                                    4,
                                    getRedisValueJSON(cacheKey, [], function() {
                                        return getOSSFiles("easypicker2/");
                                    })
                                ];
                            case 1:
                                ossFiles = _state.sent();
                                return [
                                    2,
                                    ossFiles
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "getOssFilesByPrefix",
            value: function getOssFilesByPrefix(prefix) {
                return _async_to_generator(function() {
                    var systemUser, cacheKey, ossFiles;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!prefix) {
                                    return [
                                        2
                                    ];
                                }
                                systemUser = LocalUserDB.getUserConfigByType("server").USER || "local";
                                cacheKey = "".concat(systemUser, "-oss-files-").concat(prefix);
                                return [
                                    4,
                                    getRedisValueJSON(cacheKey, [], function() {
                                        return getOSSFiles(prefix);
                                    })
                                ];
                            case 1:
                                ossFiles = _state.sent();
                                return [
                                    2,
                                    ossFiles
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return _a3;
}(), __name(_a3, "SuperService"), _a3);
var super_default = new SuperService();
// src/service/qiniuService.ts
function _ts_decorate2(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate2, "_ts_decorate");
function _ts_metadata2(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata2, "_ts_metadata");
var _a4;
var QiniuService = (_a4 = /*#__PURE__*/ function() {
    "use strict";
    function _a4() {
        _class_call_check(this, _a4);
        __publicField(this, "ctx");
        __publicField(this, "behaviorService");
        __publicField(this, "config", qiniuConfig);
    }
    _create_class(_a4, [
        {
            key: "bucket",
            get: function get() {
                return this.config.bucketName;
            }
        },
        {
            key: "mac",
            get: function get() {
                return new import_qiniu2.default.auth.digest.Mac(this.config.accessKey, this.config.secretKey);
            }
        },
        {
            key: "deleteObjByKey",
            value: function deleteObjByKey(key) {
                var _this = this;
                var config = new import_qiniu2.default.conf.Config();
                var bucketManager = new import_qiniu2.default.rs.BucketManager(this.mac, config);
                bucketManager.delete(this.bucket, key, function(err) {
                    if (err) {
                        console.log("------删除失败 start-------");
                        console.log(key);
                        console.log(err);
                        console.log("------删除失败 end-------");
                        if (_this.ctx) {
                            var _err, _err1;
                            _this.behaviorService.error("删除失败:".concat(key).concat((_err = err) === null || _err === void 0 ? void 0 : _err.message), (_err1 = err) === null || _err1 === void 0 ? void 0 : _err1.stack);
                        }
                    }
                });
            }
        },
        {
            key: "getTipImageKey",
            value: function getTipImageKey1(key, name, uid) {
                return getTipImageKey(key, name, uid);
            }
        },
        {
            key: "deleteFiles",
            value: function deleteFiles(prefix) {
                var _this = this;
                var config = new import_qiniu2.default.conf.Config();
                var bucketManager = new import_qiniu2.default.rs.BucketManager(this.mac, config);
                bucketManager.listPrefix(this.bucket, {
                    limit: 1e3,
                    prefix: prefix
                }, function(err, respBody) {
                    var files = respBody.items;
                    _this.batchDeleteFiles(files.map(function(f) {
                        return f.key;
                    }));
                });
            }
        },
        {
            key: "batchDeleteFiles",
            value: function batchDeleteFiles(keys) {
                var _this = this;
                if (!keys.length) return;
                var _this1 = this, bucket2 = _this1.bucket, mac2 = _this1.mac;
                var config = new import_qiniu2.default.conf.Config();
                var delOptions = keys.map(function(k) {
                    return import_qiniu2.default.rs.deleteOp(bucket2, k);
                });
                var bucketManager = new import_qiniu2.default.rs.BucketManager(mac2, config);
                bucketManager.batch(delOptions, function(err, respBody, respInfo) {
                    if (err) {
                        console.log(err);
                        _this.behaviorService.error("批量删除异常: ".concat(err.message), err.stack);
                    } else {
                        if (Number.parseInt("".concat(respInfo.statusCode / 100), 10) === 2) {
                            respBody.forEach(function(item) {
                                if (+item.code !== 200) {
                                    _this.behaviorService.error("".concat(item.code, "	").concat(item.data.error), item);
                                }
                            });
                        } else {
                            console.log(respInfo.deleteusCode);
                            console.log(respBody);
                            _this.behaviorService.error("批量删除异常: ".concat(respInfo.deleteusCode), respBody);
                        }
                    }
                });
            }
        },
        {
            key: "getFilesMap",
            value: function getFilesMap(files) {
                var _this = this;
                return _async_to_generator(function() {
                    var filesMap, startTime, ossFiles, oldPrefixList, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, prefix, ossSources, err, expireTime;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                filesMap = /* @__PURE__ */ new Map();
                                startTime = Date.now();
                                return [
                                    4,
                                    super_default.getOssFiles()
                                ];
                            case 1:
                                ossFiles = _state.sent();
                                ossFiles.forEach(function(v) {
                                    filesMap.set(v.key, v);
                                });
                                oldPrefixList = new Set(files.filter(function(v) {
                                    return v.category_key;
                                }).map(function(v) {
                                    return v.category_key.split("/")[0];
                                }).filter(function(v) {
                                    return !v.includes('"');
                                }).filter(function(v) {
                                    return !v.startsWith("easypicker2");
                                }));
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                _state.label = 2;
                            case 2:
                                _state.trys.push([
                                    2,
                                    7,
                                    8,
                                    9
                                ]);
                                _iterator = oldPrefixList[Symbol.iterator]();
                                _state.label = 3;
                            case 3:
                                if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                                    3,
                                    6
                                ];
                                prefix = _step.value;
                                return [
                                    4,
                                    super_default.getOssFilesByPrefix("".concat(prefix, "/"))
                                ];
                            case 4:
                                ossSources = _state.sent();
                                ossSources.forEach(function(v) {
                                    filesMap.set(v.key, v);
                                });
                                _state.label = 5;
                            case 5:
                                _iteratorNormalCompletion = true;
                                return [
                                    3,
                                    3
                                ];
                            case 6:
                                return [
                                    3,
                                    9
                                ];
                            case 7:
                                err = _state.sent();
                                _didIteratorError = true;
                                _iteratorError = err;
                                return [
                                    3,
                                    9
                                ];
                            case 8:
                                try {
                                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                                        _iterator.return();
                                    }
                                } finally{
                                    if (_didIteratorError) {
                                        throw _iteratorError;
                                    }
                                }
                                return [
                                    7
                                ];
                            case 9:
                                expireTime = Date.now() - startTime;
                                _this.behaviorService.add("file", "查询OSS文件信息 - ".concat(expireTime, "ms"), {
                                    time: expireTime
                                });
                                return [
                                    2,
                                    filesMap
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return _a4;
}(), __name(_a4, "QiniuService"), _a4);
_ts_decorate2([
    (0, import_flash_wolves2.InjectCtx)(),
    _ts_metadata2("design:type", typeof Context === "undefined" ? Object : Context)
], QiniuService.prototype, "ctx", void 0);
_ts_decorate2([
    (0, import_flash_wolves2.Inject)(BehaviorService),
    _ts_metadata2("design:type", typeof BehaviorService === "undefined" ? Object : BehaviorService)
], QiniuService.prototype, "behaviorService", void 0);
QiniuService = _ts_decorate2([
    (0, import_flash_wolves2.Provide)()
], QiniuService);
// src/service/localFileService.ts
var import_flash_wolves3 = require("flash-wolves");
var import_node_fs3 = __toESM(require("fs"));
var import_node_path4 = __toESM(require("path"));
var import_sharp = __toESM(require("sharp"));
var import_archiver = __toESM(require("archiver"));
init_localFileUtil();
function _ts_decorate3(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate3, "_ts_decorate");
function _ts_metadata3(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata3, "_ts_metadata");
var _a5;
var LocalFileService = (_a5 = /*#__PURE__*/ function() {
    "use strict";
    function _a5() {
        _class_call_check(this, _a5);
        __publicField(this, "ctx");
        __publicField(this, "behaviorService");
        initDirectories();
    }
    _create_class(_a5, [
        {
            /**
  * 获取文件路径对应的 OSS key
  */ key: "getOssKey",
            value: function getOssKey(file) {
                return "easypicker2/".concat(file.task_key || file.taskKey, "/").concat(file.hash, "/").concat(file.name);
            }
        },
        {
            /**
  * 获取提示图片的 key
  */ key: "getTipImageKey",
            value: function getTipImageKey1(key, name, uid) {
                return getTipImageKey(key, name, uid);
            }
        },
        {
            key: "saveFile",
            value: /**
  * 保存文件到本地
  * @param key 文件 key
  * @param filePath 源文件路径
  * @returns 是否成功
  */ function saveFile(key, filePath) {
                var _this = this;
                return _async_to_generator(function() {
                    var localPath;
                    return _ts_generator(this, function(_state) {
                        try {
                            localPath = keyToLocalPath(key);
                            console.log("保存文件, key:", key, "localPath:", localPath, "sourcePath:", filePath);
                            if (!import_node_fs3.default.existsSync(filePath)) {
                                console.error("源文件不存在:", filePath);
                                return [
                                    2,
                                    false
                                ];
                            }
                            ensureDir(import_node_path4.default.dirname(localPath));
                            import_node_fs3.default.copyFileSync(filePath, localPath);
                            if (!import_node_fs3.default.existsSync(localPath)) {
                                console.error("文件保存后验证失败:", localPath);
                                return [
                                    2,
                                    false
                                ];
                            }
                            console.log("文件保存成功, size:", import_node_fs3.default.statSync(localPath).size);
                            return [
                                2,
                                true
                            ];
                        } catch (error) {
                            console.error("保存文件失败:", error, "key:", key, "filePath:", filePath);
                            if (_this.ctx) {
                                _this.behaviorService.error("保存文件失败:".concat(key), String(error));
                            }
                            return [
                                2,
                                false
                            ];
                        }
                        return [
                            2
                        ];
                    });
                })();
            }
        },
        {
            /**
  * 删除文件
  * @param key 文件 key
  */ key: "deleteObjByKey",
            value: function deleteObjByKey(key) {
                try {
                    var localPath = keyToLocalPath(key);
                    if (import_node_fs3.default.existsSync(localPath)) {
                        import_node_fs3.default.unlinkSync(localPath);
                    }
                    var thumbnailPath = getThumbnailPath(key);
                    var previewPath = getPreviewPath(key);
                    if (import_node_fs3.default.existsSync(thumbnailPath)) {
                        import_node_fs3.default.unlinkSync(thumbnailPath);
                    }
                    if (import_node_fs3.default.existsSync(previewPath)) {
                        import_node_fs3.default.unlinkSync(previewPath);
                    }
                } catch (error) {
                    console.error("删除文件失败:", error);
                    if (this.ctx) {
                        var _error;
                        this.behaviorService.error("删除失败:".concat(key).concat((_error = error) === null || _error === void 0 ? void 0 : _error.message), String(error));
                    }
                }
            }
        },
        {
            /**
  * 批量删除文件
  * @param keys 文件 key 数组
  */ key: "batchDeleteFiles",
            value: function batchDeleteFiles(keys) {
                if (!keys.length) {
                    return;
                }
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = keys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var key = _step.value;
                        this.deleteObjByKey(key);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                if (this.ctx) {
                    this.behaviorService.add("file", "批量删除文件 ".concat(keys.length, " 个"), {
                        count: keys.length,
                        keys: keys
                    });
                }
            }
        },
        {
            /**
  * 删除指定前缀的所有文件
  * @param prefix 前缀
  */ key: "deleteFiles",
            value: function deleteFiles(prefix) {
                try {
                    var prefixPath = keyToLocalPath(prefix);
                    if (!import_node_fs3.default.existsSync(prefixPath)) {
                        return;
                    }
                    var files = this.listFilesByPrefix(prefix);
                    this.batchDeleteFiles(files.map(function(f) {
                        return f.key;
                    }));
                } catch (error) {
                    console.error("删除文件失败:", error);
                    if (this.ctx) {
                        this.behaviorService.error("删除文件失败:".concat(prefix), String(error));
                    }
                }
            }
        },
        {
            key: "judgeFileIsExist",
            value: /**
  * 检查文件是否存在
  * @param key 文件 key
  * @returns 是否存在
  */ function judgeFileIsExist(key) {
                return _async_to_generator(function() {
                    var localPath;
                    return _ts_generator(this, function(_state) {
                        localPath = keyToLocalPath(key);
                        return [
                            2,
                            import_node_fs3.default.existsSync(localPath)
                        ];
                    });
                })();
            }
        },
        {
            key: "getFileInfo",
            value: /**
  * 获取文件信息
  * @param key 文件 key
  * @returns 文件信息
  */ function getFileInfo1(key) {
                return _async_to_generator(function() {
                    var localPath;
                    return _ts_generator(this, function(_state) {
                        localPath = keyToLocalPath(key);
                        return [
                            2,
                            getFileInfo(localPath)
                        ];
                    });
                })();
            }
        },
        {
            key: "batchFileStatus",
            value: /**
  * 批量获取文件信息
  * @param keys 文件 key 数组
  * @returns 文件信息数组
  */ function batchFileStatus(keys) {
                var _this = this;
                return _async_to_generator(function() {
                    var results;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    Promise.all(keys.map(function() {
                                        var _ref = _async_to_generator(function(key) {
                                            var info;
                                            return _ts_generator(this, function(_state) {
                                                switch(_state.label){
                                                    case 0:
                                                        return [
                                                            4,
                                                            _this.getFileInfo(key)
                                                        ];
                                                    case 1:
                                                        info = _state.sent();
                                                        if (info) {
                                                            return [
                                                                2,
                                                                {
                                                                    code: 200,
                                                                    data: info
                                                                }
                                                            ];
                                                        }
                                                        return [
                                                            2,
                                                            {
                                                                code: 612,
                                                                error: "文件不存在"
                                                            }
                                                        ];
                                                }
                                            });
                                        });
                                        return function(key) {
                                            return _ref.apply(this, arguments);
                                        };
                                    }()))
                                ];
                            case 1:
                                results = _state.sent();
                                return [
                                    2,
                                    results
                                ];
                        }
                    });
                })();
            }
        },
        {
            /**
  * 根据前缀列出文件
  * @param prefix 前缀
  * @returns 文件信息数组
  */ key: "listFilesByPrefix",
            value: function listFilesByPrefix(prefix) {
                var prefixPath = keyToLocalPath(prefix);
                var files = [];
                if (!import_node_fs3.default.existsSync(prefixPath)) {
                    return files;
                }
                var listFiles = /* @__PURE__ */ __name(function(dir, baseKey) {
                    var items = import_node_fs3.default.readdirSync(dir);
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var item = _step.value;
                            var itemPath = import_node_path4.default.join(dir, item);
                            var stats = import_node_fs3.default.statSync(itemPath);
                            if (stats.isDirectory()) {
                                listFiles(itemPath, "".concat(baseKey).concat(item, "/"));
                            } else {
                                var key = "".concat(baseKey).concat(item);
                                var info = getFileInfo(itemPath);
                                if (info) {
                                    files.push(info);
                                }
                            }
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return != null) {
                                _iterator.return();
                            }
                        } finally{
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                }, "listFiles");
                if (import_node_fs3.default.statSync(prefixPath).isDirectory()) {
                    listFiles(prefixPath, prefix);
                } else {
                    var info = getFileInfo(prefixPath);
                    if (info) {
                        files.push(info);
                    }
                }
                return files;
            }
        },
        {
            key: "getFilesMap",
            value: /**
  * 获取文件映射（兼容 QiniuService.getFilesMap）
  * @param files 文件列表
  * @returns 文件映射
  */ function getFilesMap(files) {
                var _this = this;
                return _async_to_generator(function() {
                    var filesMap, startTime, allFiles, oldPrefixList, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, prefix, oldFiles, expireTime;
                    return _ts_generator(this, function(_state) {
                        filesMap = /* @__PURE__ */ new Map();
                        startTime = Date.now();
                        allFiles = _this.listFilesByPrefix("easypicker2/");
                        allFiles.forEach(function(v) {
                            filesMap.set(v.key, v);
                        });
                        oldPrefixList = new Set(files.filter(function(v) {
                            return v.category_key;
                        }).map(function(v) {
                            return v.category_key.split("/")[0];
                        }).filter(function(v) {
                            return !v.includes('"');
                        }).filter(function(v) {
                            return !v.startsWith("easypicker2");
                        }));
                        _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                        try {
                            for(_iterator = oldPrefixList[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                prefix = _step.value;
                                oldFiles = _this.listFilesByPrefix("".concat(prefix, "/"));
                                oldFiles.forEach(function(v) {
                                    filesMap.set(v.key, v);
                                });
                            }
                        } catch (err) {
                            _didIteratorError = true;
                            _iteratorError = err;
                        } finally{
                            try {
                                if (!_iteratorNormalCompletion && _iterator.return != null) {
                                    _iterator.return();
                                }
                            } finally{
                                if (_didIteratorError) {
                                    throw _iteratorError;
                                }
                            }
                        }
                        expireTime = Date.now() - startTime;
                        _this.behaviorService.add("file", "查询本地文件信息 - ".concat(expireTime, "ms"), {
                            time: expireTime
                        });
                        return [
                            2,
                            filesMap
                        ];
                    });
                })();
            }
        },
        {
            key: "generateThumbnail",
            value: /**
  * 生成图片缩略图
  * @param key 文件 key
  * @param width 宽度，默认 200
  * @param height 高度，默认 200
  * @returns 是否成功
  */ function generateThumbnail(key) {
                var width = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 200, height = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 200;
                return _async_to_generator(function() {
                    var localPath, thumbnailPath, error;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _state.trys.push([
                                    0,
                                    2,
                                    ,
                                    3
                                ]);
                                localPath = keyToLocalPath(key);
                                if (!import_node_fs3.default.existsSync(localPath)) {
                                    return [
                                        2,
                                        false
                                    ];
                                }
                                thumbnailPath = getThumbnailPath(key);
                                ensureDir(import_node_path4.default.dirname(thumbnailPath));
                                return [
                                    4,
                                    (0, import_sharp.default)(localPath).resize(width, height, {
                                        fit: "cover",
                                        position: "center"
                                    }).jpeg({
                                        quality: 80
                                    }).toFile(thumbnailPath)
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2,
                                    true
                                ];
                            case 2:
                                error = _state.sent();
                                console.error("生成缩略图失败:", error);
                                return [
                                    2,
                                    false
                                ];
                            case 3:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "generatePreview",
            value: /**
  * 生成图片预览图
  * @param key 文件 key
  * @param maxWidth 最大宽度，默认 1200
  * @param maxHeight 最大高度，默认 1200
  * @returns 是否成功
  */ function generatePreview(key) {
                var maxWidth = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1200, maxHeight = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1200;
                return _async_to_generator(function() {
                    var localPath, previewPath, error;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _state.trys.push([
                                    0,
                                    2,
                                    ,
                                    3
                                ]);
                                localPath = keyToLocalPath(key);
                                if (!import_node_fs3.default.existsSync(localPath)) {
                                    return [
                                        2,
                                        false
                                    ];
                                }
                                previewPath = getPreviewPath(key);
                                ensureDir(import_node_path4.default.dirname(previewPath));
                                return [
                                    4,
                                    (0, import_sharp.default)(localPath).resize(maxWidth, maxHeight, {
                                        fit: "inside",
                                        withoutEnlargement: true
                                    }).jpeg({
                                        quality: 85
                                    }).toFile(previewPath)
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2,
                                    true
                                ];
                            case 2:
                                error = _state.sent();
                                console.error("生成预览图失败:", error);
                                return [
                                    2,
                                    false
                                ];
                            case 3:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "getImagePreviewUrl",
            value: /**
  * 获取图片预览 URL
  * @param key 文件 key
  * @param type 类型：cover 或 preview
  * @param expiredTime 过期时间（秒）
  * @param req 请求对象
  * @returns 预览 URL
  */ function getImagePreviewUrl(key, type, expiredTime, req) {
                var _this = this;
                return _async_to_generator(function() {
                    var localPath, info, thumbnailPath, thumbnailKey, previewPath, previewKey;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                localPath = keyToLocalPath(key);
                                if (!import_node_fs3.default.existsSync(localPath)) {
                                    return [
                                        2,
                                        ""
                                    ];
                                }
                                return [
                                    4,
                                    _this.getFileInfo(key)
                                ];
                            case 1:
                                info = _state.sent();
                                if (!info || !info.mimeType.includes("image")) {
                                    return [
                                        2,
                                        ""
                                    ];
                                }
                                if (!(type === "cover")) return [
                                    3,
                                    4
                                ];
                                thumbnailPath = getThumbnailPath(key);
                                if (!!import_node_fs3.default.existsSync(thumbnailPath)) return [
                                    3,
                                    3
                                ];
                                return [
                                    4,
                                    _this.generateThumbnail(key)
                                ];
                            case 2:
                                _state.sent();
                                _state.label = 3;
                            case 3:
                                thumbnailKey = getThumbnailKey(key);
                                if (import_node_fs3.default.existsSync(thumbnailPath)) {
                                    return [
                                        2,
                                        createDownloadUrl(thumbnailKey, expiredTime, req)
                                    ];
                                }
                                return [
                                    3,
                                    7
                                ];
                            case 4:
                                previewPath = getPreviewPath(key);
                                if (!!import_node_fs3.default.existsSync(previewPath)) return [
                                    3,
                                    6
                                ];
                                return [
                                    4,
                                    _this.generatePreview(key)
                                ];
                            case 5:
                                _state.sent();
                                _state.label = 6;
                            case 6:
                                previewKey = getPreviewKey(key);
                                if (import_node_fs3.default.existsSync(previewPath)) {
                                    return [
                                        2,
                                        createDownloadUrl(previewKey, expiredTime, req)
                                    ];
                                }
                                _state.label = 7;
                            case 7:
                                return [
                                    2,
                                    ""
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "makeZipWithKeys",
            value: /**
  * 创建 ZIP 压缩文件
  * @param keys 要压缩的文件 key 数组
  * @param zipName 压缩文件名（不含扩展名）
  * @returns 压缩文件 key
  */ function makeZipWithKeys(keys, zipName) {
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        return [
                            2,
                            new Promise(function(resolve, reject) {
                                var zipPath = getCompressedPath("".concat(zipName, ".zip"));
                                ensureDir(import_node_path4.default.dirname(zipPath));
                                var output = import_node_fs3.default.createWriteStream(zipPath);
                                var archive = (0, import_archiver.default)("zip", {
                                    zlib: {
                                        level: 9
                                    }
                                });
                                output.on("close", function() {
                                    var zipKey = "compressed/".concat(zipName, ".zip");
                                    resolve(zipKey);
                                });
                                archive.on("error", function(err) {
                                    reject(err);
                                });
                                archive.pipe(output);
                                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                try {
                                    for(var _iterator = keys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                        var key = _step.value;
                                        var localPath = keyToLocalPath(key);
                                        if (import_node_fs3.default.existsSync(localPath)) {
                                            var fileName = import_node_path4.default.basename(key);
                                            archive.file(localPath, {
                                                name: fileName
                                            });
                                        }
                                    }
                                } catch (err) {
                                    _didIteratorError = true;
                                    _iteratorError = err;
                                } finally{
                                    try {
                                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                                            _iterator.return();
                                        }
                                    } finally{
                                        if (_didIteratorError) {
                                            throw _iteratorError;
                                        }
                                    }
                                }
                                archive.finalize();
                            })
                        ];
                    });
                })();
            }
        },
        {
            /**
  * 读取文件流
  * @param key 文件 key
  * @returns 文件流
  */ key: "getFileStream",
            value: function getFileStream(key) {
                try {
                    var localPath = keyToLocalPath(key);
                    if (import_node_fs3.default.existsSync(localPath)) {
                        return import_node_fs3.default.createReadStream(localPath);
                    }
                    return null;
                } catch (error) {
                    console.error("读取文件流失败:", error);
                    return null;
                }
            }
        },
        {
            /**
  * 获取文件下载 URL
  * @param key 文件 key
  * @param expiredTime 过期时间（秒）
  * @param req 请求对象
  * @returns 下载 URL
  */ key: "getDownloadUrl",
            value: function getDownloadUrl(key, expiredTime, req) {
                return createDownloadUrl(key, expiredTime, req);
            }
        }
    ]);
    return _a5;
}(), __name(_a5, "LocalFileService"), _a5);
_ts_decorate3([
    (0, import_flash_wolves3.InjectCtx)(),
    _ts_metadata3("design:type", typeof Context === "undefined" ? Object : Context)
], LocalFileService.prototype, "ctx", void 0);
_ts_decorate3([
    (0, import_flash_wolves3.Inject)(BehaviorService),
    _ts_metadata3("design:type", typeof BehaviorService === "undefined" ? Object : BehaviorService)
], LocalFileService.prototype, "behaviorService", void 0);
LocalFileService = _ts_decorate3([
    (0, import_flash_wolves3.Provide)(),
    _ts_metadata3("design:type", Function),
    _ts_metadata3("design:paramtypes", [])
], LocalFileService);
// src/service/taskInfoService.ts
var import_flash_wolves6 = require("flash-wolves");
var import_typeorm8 = require("typeorm");
// src/db/taskInfoDb.ts
var import_flash_wolves4 = require("flash-wolves");
// src/lib/dbConnect/mysql.ts
var import_mysql = __toESM(require("mysql"));
var pool;
function refreshPool() {
    var _pool;
    var cfg = LocalUserDB.getUserConfigByType("mysql");
    (_pool = pool) === null || _pool === void 0 ? void 0 : _pool.end();
    mysqlConfig.host = cfg.host;
    mysqlConfig.port = cfg.port;
    mysqlConfig.user = cfg.user;
    mysqlConfig.password = cfg.password;
    mysqlConfig.database = cfg.database;
    pool = import_mysql.default.createPool(mysqlConfig);
    pool.on("error", function(err) {
        console.log("pool connect error");
        console.error(err);
    });
}
__name(refreshPool, "refreshPool");
function getConnection() {
    return new Promise(function(res, rej) {
        pool.getConnection(function(err, coon) {
            if (err) {
                console.error("------ db connection error -------");
                console.error(err.message);
                rej(err);
                return;
            }
            res(coon);
        });
    });
}
__name(getConnection, "getConnection");
function query2(sql) {
    for(var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        params[_key - 1] = arguments[_key];
    }
    return new Promise(function(resolve, reject) {
        getConnection().then(function(coon) {
            coon.query(sql, params, function(err, result) {
                if (err) {
                    reject(err);
                    return;
                }
                coon.release();
                resolve(result);
            });
        }).catch(function(err) {
            reject(err);
        });
    });
}
__name(query2, "query");
function getMysqlStatus() {
    return new Promise(function(res, rej) {
        pool.getConnection(function(err, coon) {
            if (err) {
                res({
                    errMsg: err.message,
                    type: "mysql",
                    status: false
                });
                return;
            }
            res({
                type: "mysql",
                status: true
            });
            coon.release();
        });
    });
}
__name(getMysqlStatus, "getMysqlStatus");
// src/utils/sqlUtil.ts
function removeUndefKey(obj) {
    return Object.keys(obj).reduce(function(pre, k) {
        if (obj[k] !== void 0) {
            pre[k] = obj[k];
        }
        return pre;
    }, {});
}
__name(removeUndefKey, "removeUndefKey");
function isObject(data) {
    return _instanceof(data, Object) && typeof data !== "function";
}
__name(isObject, "isObject");
function isOkModel(model) {
    return isObject(model) && Object.keys(removeUndefKey(model)).length !== 0;
}
__name(isOkModel, "isOkModel");
function selectTableByModel(table) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var _options_columns = options.columns, columns = _options_columns === void 0 ? [] : _options_columns, _options_order = options.order, order = _options_order === void 0 ? "" : _options_order;
    var _options_data = options.data, data = _options_data === void 0 ? {} : _options_data, limit = options.limit;
    limit = limit || 0;
    if (!isObject(data)) return {
        sql: "",
        params: []
    };
    data = removeUndefKey(data);
    var column = columns.length > 0 ? "".concat(columns.join(",")) : "*";
    var keys = Object.keys(data);
    var where = keys.length > 0 ? "where ".concat(keys.map(function(key) {
        return createWhereSql(key, data[key]);
    }).join(" and ")) : "";
    var values = keys.map(function(key) {
        return data[key];
    }).flat();
    var limitStr = typeof limit === "number" && limit > 0 ? "limit ".concat(Math.ceil(limit)) : "";
    var sql = "select ".concat(column, " from ").concat(table, " ").concat(where, " ").concat(order, " ").concat(limitStr).trim();
    return {
        sql: sql,
        params: values
    };
}
__name(selectTableByModel, "selectTableByModel");
function deleteTableByModel(table, model) {
    if (!isOkModel(model)) return {
        sql: "",
        params: []
    };
    model = removeUndefKey(model);
    var keys = Object.keys(model);
    var where = "where ".concat(keys.map(function(key) {
        return createWhereSql(key, model[key]);
    }).join(" and "));
    var values = keys.map(function(key) {
        return model[key];
    }).flat();
    var sql = "delete from ".concat(table, " ").concat(where).trim();
    return {
        sql: sql,
        params: values
    };
}
__name(deleteTableByModel, "deleteTableByModel");
function insertTableByModel(table, model) {
    if (!isOkModel(model)) return {
        sql: "",
        params: []
    };
    model = removeUndefKey(model);
    var keys = Object.keys(model);
    var values = keys.map(function(key) {
        return model[key];
    });
    var sql = "insert into ".concat(table, " (").concat(keys.map(lowCamel2Underscore).join(","), ") values (").concat(new Array(keys.length).fill("?").join(","), ")");
    return {
        sql: sql,
        params: values
    };
}
__name(insertTableByModel, "insertTableByModel");
function insertTableByModelMany(table, model) {
    if (model.length === 0 || !isOkModel(model[0])) return {
        sql: "",
        params: []
    };
    var keys = Object.keys(model[0]);
    var values = model.reduce(function(pre, value) {
        return pre.concat(keys.map(function(key) {
            return value[key];
        }));
    }, []);
    var sqlValues = "values ".concat(Array.from({
        length: model.length
    }).map(function() {
        return "(".concat(new Array(keys.length).fill("?").join(","), ")");
    }).join(","));
    var sql = "insert into ".concat(table, " (").concat(keys.map(lowCamel2Underscore).join(","), ") ").concat(sqlValues);
    return {
        sql: sql,
        params: values
    };
}
__name(insertTableByModelMany, "insertTableByModelMany");
function updateTableByModel(table, model, query3) {
    if (!isOkModel(model) || !isOkModel(query3)) return {
        sql: "",
        params: []
    };
    model = removeUndefKey(model);
    query3 = removeUndefKey(query3);
    var updateModelKeys = Object.keys(model);
    var values = updateModelKeys.map(function(key) {
        return model[key];
    });
    var queryModelKeys = Object.keys(query3);
    values = values.concat(queryModelKeys.map(function(key) {
        return query3[key];
    }).flat());
    var where = "where ".concat(queryModelKeys.map(function(key) {
        return createWhereSql(key, query3[key]);
    }).join(" and "));
    var sql = "update ".concat(table, " set ").concat(updateModelKeys.map(function(key) {
        return "".concat(lowCamel2Underscore(key), " = ?");
    }).join(","), " ").concat(where);
    return {
        sql: sql,
        params: values
    };
}
__name(updateTableByModel, "updateTableByModel");
function createWhereSql(k, v) {
    if (!isObject(v)) {
        return "".concat(lowCamel2Underscore(k), " = ?");
    }
    if (Array.isArray(v)) {
        return "".concat(lowCamel2Underscore(k), " in (").concat(Array.from({
            length: v.length
        }).fill("?").join(","), ")");
    }
    throw new Error("not support Object");
}
__name(createWhereSql, "createWhereSql");
// src/db/model/public.ts
var BOOLEAN;
(function(BOOLEAN2) {
    BOOLEAN2[BOOLEAN2["FALSE"] = 0] = "FALSE";
    BOOLEAN2[BOOLEAN2["TRUE"] = 1] = "TRUE";
})(BOOLEAN || (BOOLEAN = {}));
// src/db/entity/User.ts
var import_typeorm = require("typeorm");
function _ts_decorate4(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate4, "_ts_decorate");
function _ts_metadata4(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata4, "_ts_metadata");
var _a6;
var User2 = (_a6 = function _a6() {
    "use strict";
    _class_call_check(this, _a6);
    __publicField(this, "id");
    __publicField(this, "account");
    __publicField(this, "email");
    __publicField(this, "password");
    __publicField(this, "power");
    __publicField(this, "status");
    __publicField(this, "joinTime");
    __publicField(this, "loginTime");
    __publicField(this, "loginCount");
    __publicField(this, "openTime");
    __publicField(this, "size");
    __publicField(this, "wallet");
}, __name(_a6, "User"), _a6);
_ts_decorate4([
    (0, import_typeorm.PrimaryGeneratedColumn)({
        type: "int",
        comment: "唯一标识"
    }),
    _ts_metadata4("design:type", Number)
], User2.prototype, "id", void 0);
_ts_decorate4([
    (0, import_typeorm.Column)("varchar", {
        length: 64,
        nullable: true,
        comment: "用于登录的账号"
    }),
    _ts_metadata4("design:type", String)
], User2.prototype, "account", void 0);
_ts_decorate4([
    (0, import_typeorm.Column)("varchar", {
        length: 128,
        nullable: true,
        comment: "邮箱",
        name: "email"
    }),
    _ts_metadata4("design:type", String)
], User2.prototype, "email", void 0);
_ts_decorate4([
    (0, import_typeorm.Column)("varchar", {
        length: 256,
        comment: "密码"
    }),
    _ts_metadata4("design:type", String)
], User2.prototype, "password", void 0);
_ts_decorate4([
    (0, import_typeorm.Column)("tinyint", {
        default: 6,
        comment: "账户权限"
    }),
    _ts_metadata4("design:type", Number)
], User2.prototype, "power", void 0);
_ts_decorate4([
    (0, import_typeorm.Column)("tinyint", {
        default: 0,
        comment: "账户状态"
    }),
    _ts_metadata4("design:type", Number)
], User2.prototype, "status", void 0);
_ts_decorate4([
    (0, import_typeorm.Column)("timestamp", {
        default: "CURRENT_TIMESTAMP",
        comment: "注册时间",
        name: "join_time"
    }),
    _ts_metadata4("design:type", typeof Date === "undefined" ? Object : Date)
], User2.prototype, "joinTime", void 0);
_ts_decorate4([
    (0, import_typeorm.Column)("timestamp", {
        nullable: true,
        comment: "最后登录时间",
        name: "login_time"
    }),
    _ts_metadata4("design:type", typeof Date === "undefined" ? Object : Date)
], User2.prototype, "loginTime", void 0);
_ts_decorate4([
    (0, import_typeorm.Column)("int", {
        default: 1,
        comment: "登录次数",
        name: "login_count"
    }),
    _ts_metadata4("design:type", Number)
], User2.prototype, "loginCount", void 0);
_ts_decorate4([
    (0, import_typeorm.Column)("timestamp", {
        nullable: true,
        comment: "解封时间",
        name: "open_time"
    }),
    _ts_metadata4("design:type", typeof Date === "undefined" ? Object : Date)
], User2.prototype, "openTime", void 0);
_ts_decorate4([
    (0, import_typeorm.Column)("int", {
        default: 2,
        comment: "可支配空间上限GB"
    }),
    _ts_metadata4("design:type", Number)
], User2.prototype, "size", void 0);
_ts_decorate4([
    (0, import_typeorm.Column)({
        type: "decimal",
        precision: 10,
        scale: 2
    }),
    _ts_metadata4("design:type", String)
], User2.prototype, "wallet", void 0);
User2 = _ts_decorate4([
    (0, import_typeorm.Entity)("user")
], User2);
// src/db/entity/Category.ts
var import_typeorm2 = require("typeorm");
function _ts_decorate5(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate5, "_ts_decorate");
function _ts_metadata5(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata5, "_ts_metadata");
var _a7;
var Category = (_a7 = function _a7() {
    "use strict";
    _class_call_check(this, _a7);
    __publicField(this, "id");
    __publicField(this, "name");
    __publicField(this, "userId");
    __publicField(this, "k");
}, __name(_a7, "Category"), _a7);
_ts_decorate5([
    (0, import_typeorm2.PrimaryGeneratedColumn)({
        type: "int",
        unsigned: true,
        comment: "主键自增"
    }),
    _ts_metadata5("design:type", Number)
], Category.prototype, "id", void 0);
_ts_decorate5([
    (0, import_typeorm2.Column)("varchar", {
        length: 256,
        comment: "分类名称"
    }),
    _ts_metadata5("design:type", String)
], Category.prototype, "name", void 0);
_ts_decorate5([
    (0, import_typeorm2.Column)("int", {
        name: "user_id",
        comment: "所属用户"
    }),
    _ts_metadata5("design:type", Number)
], Category.prototype, "userId", void 0);
_ts_decorate5([
    (0, import_typeorm2.Column)("varchar", {
        length: 128,
        comment: "分类唯一标识"
    }),
    _ts_metadata5("design:type", String)
], Category.prototype, "k", void 0);
Category = _ts_decorate5([
    (0, import_typeorm2.Entity)("category")
], Category);
// src/db/entity/Files.ts
var import_typeorm3 = require("typeorm");
function _ts_decorate6(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate6, "_ts_decorate");
function _ts_metadata6(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata6, "_ts_metadata");
var _a8;
var Files2 = (_a8 = function _a8() {
    "use strict";
    _class_call_check(this, _a8);
    __publicField(this, "id");
    __publicField(this, "taskKey");
    __publicField(this, "taskName");
    __publicField(this, "categoryKey");
    __publicField(this, "userId");
    __publicField(this, "name");
    __publicField(this, "info");
    __publicField(this, "hash");
    __publicField(this, "date");
    __publicField(this, "size");
    __publicField(this, "people");
    __publicField(this, "originName");
    __publicField(this, "del");
    __publicField(this, "ossDelTime");
    __publicField(this, "delTime");
    __publicField(this, "lastUpdateTime");
}, __name(_a8, "Files"), _a8);
_ts_decorate6([
    (0, import_typeorm3.PrimaryGeneratedColumn)({
        type: "int"
    }),
    _ts_metadata6("design:type", Number)
], Files2.prototype, "id", void 0);
_ts_decorate6([
    (0, import_typeorm3.Column)("varchar", {
        length: 256,
        name: "task_key",
        comment: "所属任务"
    }),
    _ts_metadata6("design:type", String)
], Files2.prototype, "taskKey", void 0);
_ts_decorate6([
    (0, import_typeorm3.Column)("varchar", {
        length: 256,
        name: "task_name",
        comment: "提交时的任务名称"
    }),
    _ts_metadata6("design:type", String)
], Files2.prototype, "taskName", void 0);
_ts_decorate6([
    (0, import_typeorm3.Column)("varchar", {
        length: 256,
        name: "category_key",
        comment: "所属分类"
    }),
    _ts_metadata6("design:type", String)
], Files2.prototype, "categoryKey", void 0);
_ts_decorate6([
    (0, import_typeorm3.Column)("int", {
        name: "user_id",
        comment: "所属用户"
    }),
    _ts_metadata6("design:type", Number)
], Files2.prototype, "userId", void 0);
_ts_decorate6([
    (0, import_typeorm3.Column)("varchar", {
        length: 1024,
        name: "name",
        comment: "文件名"
    }),
    _ts_metadata6("design:type", String)
], Files2.prototype, "name", void 0);
_ts_decorate6([
    (0, import_typeorm3.Column)("varchar", {
        length: 10240,
        nullable: true,
        comment: "文件信息"
    }),
    _ts_metadata6("design:type", Object)
], Files2.prototype, "info", void 0);
_ts_decorate6([
    (0, import_typeorm3.Column)("varchar", {
        length: 512,
        comment: "文件hash"
    }),
    _ts_metadata6("design:type", String)
], Files2.prototype, "hash", void 0);
_ts_decorate6([
    (0, import_typeorm3.Column)("timestamp", {
        comment: "上传日期",
        default: function() {
            return "CURRENT_TIMESTAMP";
        }
    }),
    _ts_metadata6("design:type", typeof Date === "undefined" ? Object : Date)
], Files2.prototype, "date", void 0);
_ts_decorate6([
    (0, import_typeorm3.Column)("bigint", {
        comment: "文件大小"
    }),
    _ts_metadata6("design:type", Number)
], Files2.prototype, "size", void 0);
_ts_decorate6([
    (0, import_typeorm3.Column)("varchar", {
        length: 256,
        nullable: true,
        comment: "人员姓名"
    }),
    _ts_metadata6("design:type", Object)
], Files2.prototype, "people", void 0);
_ts_decorate6([
    (0, import_typeorm3.Column)("varchar", {
        length: 1024,
        default: "",
        name: "origin_name",
        comment: "原文件名"
    }),
    _ts_metadata6("design:type", String)
], Files2.prototype, "originName", void 0);
_ts_decorate6([
    (0, import_typeorm3.Column)("tinyint", {
        default: 0,
        comment: "是否删除"
    }),
    _ts_metadata6("design:type", Number)
], Files2.prototype, "del", void 0);
_ts_decorate6([
    (0, import_typeorm3.Column)("timestamp", {
        name: "oss_del_time",
        nullable: true,
        comment: "OSS删除时间"
    }),
    _ts_metadata6("design:type", Object)
], Files2.prototype, "ossDelTime", void 0);
_ts_decorate6([
    (0, import_typeorm3.Column)("timestamp", {
        name: "del_time",
        nullable: true,
        comment: "删除时间"
    }),
    _ts_metadata6("design:type", Object)
], Files2.prototype, "delTime", void 0);
_ts_decorate6([
    (0, import_typeorm3.UpdateDateColumn)({
        name: "last_update_time",
        comment: "最后更新时间"
    }),
    _ts_metadata6("design:type", typeof Date === "undefined" ? Object : Date)
], Files2.prototype, "lastUpdateTime", void 0);
Files2 = _ts_decorate6([
    (0, import_typeorm3.Entity)("files")
], Files2);
// src/db/entity/People.ts
var import_typeorm4 = require("typeorm");
function _ts_decorate7(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate7, "_ts_decorate");
function _ts_metadata7(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata7, "_ts_metadata");
var _a9;
var People = (_a9 = function _a9() {
    "use strict";
    _class_call_check(this, _a9);
    __publicField(this, "id");
    __publicField(this, "taskKey");
    __publicField(this, "userId");
    __publicField(this, "name");
    __publicField(this, "status");
    __publicField(this, "submitDate");
    __publicField(this, "submitCount");
}, __name(_a9, "People"), _a9);
_ts_decorate7([
    (0, import_typeorm4.PrimaryGeneratedColumn)({
        type: "int"
    }),
    _ts_metadata7("design:type", Number)
], People.prototype, "id", void 0);
_ts_decorate7([
    (0, import_typeorm4.Column)("varchar", {
        length: 128,
        name: "task_key",
        comment: "关联任务id"
    }),
    _ts_metadata7("design:type", String)
], People.prototype, "taskKey", void 0);
_ts_decorate7([
    (0, import_typeorm4.Column)("int", {
        name: "user_id",
        comment: "所属用户id"
    }),
    _ts_metadata7("design:type", Number)
], People.prototype, "userId", void 0);
_ts_decorate7([
    (0, import_typeorm4.Column)("varchar", {
        length: 128,
        nullable: true,
        comment: "人员姓名"
    }),
    _ts_metadata7("design:type", Object)
], People.prototype, "name", void 0);
_ts_decorate7([
    (0, import_typeorm4.Column)("tinyint", {
        comment: "是否提交",
        default: 0
    }),
    _ts_metadata7("design:type", Number)
], People.prototype, "status", void 0);
_ts_decorate7([
    (0, import_typeorm4.Column)("timestamp", {
        comment: "最后提交时间",
        name: "submit_date",
        default: function() {
            return "CURRENT_TIMESTAMP";
        }
    }),
    _ts_metadata7("design:type", typeof Date === "undefined" ? Object : Date)
], People.prototype, "submitDate", void 0);
_ts_decorate7([
    (0, import_typeorm4.Column)("int", {
        name: "submit_count",
        default: 0,
        comment: "提交次数"
    }),
    _ts_metadata7("design:type", Number)
], People.prototype, "submitCount", void 0);
People = _ts_decorate7([
    (0, import_typeorm4.Entity)("people")
], People);
// src/db/entity/Task.ts
var import_typeorm5 = require("typeorm");
function _ts_decorate8(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate8, "_ts_decorate");
function _ts_metadata8(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata8, "_ts_metadata");
var _a10;
var Task = (_a10 = function _a10() {
    "use strict";
    _class_call_check(this, _a10);
    __publicField(this, "id");
    __publicField(this, "userId");
    __publicField(this, "categoryKey");
    __publicField(this, "name");
    __publicField(this, "k");
    __publicField(this, "del");
}, __name(_a10, "Task"), _a10);
_ts_decorate8([
    (0, import_typeorm5.PrimaryGeneratedColumn)({
        type: "int",
        comment: "主键"
    }),
    _ts_metadata8("design:type", Number)
], Task.prototype, "id", void 0);
_ts_decorate8([
    (0, import_typeorm5.Column)("int", {
        name: "user_id",
        comment: "所属用户id"
    }),
    _ts_metadata8("design:type", Number)
], Task.prototype, "userId", void 0);
_ts_decorate8([
    (0, import_typeorm5.Column)("varchar", {
        length: 128,
        name: "category_key",
        comment: "关联分类key"
    }),
    _ts_metadata8("design:type", String)
], Task.prototype, "categoryKey", void 0);
_ts_decorate8([
    (0, import_typeorm5.Column)("varchar", {
        length: 256,
        comment: "任务名称"
    }),
    _ts_metadata8("design:type", String)
], Task.prototype, "name", void 0);
_ts_decorate8([
    (0, import_typeorm5.Column)("varchar", {
        length: 128,
        comment: "任务唯一标识"
    }),
    _ts_metadata8("design:type", String)
], Task.prototype, "k", void 0);
_ts_decorate8([
    (0, import_typeorm5.Column)("tinyint", {
        default: 0,
        comment: "是否删除"
    }),
    _ts_metadata8("design:type", Number)
], Task.prototype, "del", void 0);
Task = _ts_decorate8([
    (0, import_typeorm5.Entity)("task")
], Task);
// src/db/entity/TaskInfo.ts
var import_typeorm6 = require("typeorm");
function _ts_decorate9(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate9, "_ts_decorate");
function _ts_metadata9(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata9, "_ts_metadata");
var _a11;
var TaskInfo = (_a11 = function _a11() {
    "use strict";
    _class_call_check(this, _a11);
    __publicField(this, "id");
    __publicField(this, "userId");
    __publicField(this, "taskKey");
    __publicField(this, "template");
    __publicField(this, "rewrite");
    __publicField(this, "format");
    __publicField(this, "info");
    __publicField(this, "ddl");
    __publicField(this, "shareKey");
    __publicField(this, "limitPeople");
    __publicField(this, "bindField");
    __publicField(this, "tip");
}, __name(_a11, "TaskInfo"), _a11);
_ts_decorate9([
    (0, import_typeorm6.PrimaryGeneratedColumn)({
        type: "int"
    }),
    _ts_metadata9("design:type", Number)
], TaskInfo.prototype, "id", void 0);
_ts_decorate9([
    (0, import_typeorm6.Column)("int", {
        name: "user_id",
        comment: "关联user_id"
    }),
    _ts_metadata9("design:type", Number)
], TaskInfo.prototype, "userId", void 0);
_ts_decorate9([
    (0, import_typeorm6.Column)("varchar", {
        length: 256,
        name: "task_key",
        comment: "关联任务的key"
    }),
    _ts_metadata9("design:type", String)
], TaskInfo.prototype, "taskKey", void 0);
_ts_decorate9([
    (0, import_typeorm6.Column)("varchar", {
        length: 1024,
        nullable: true,
        comment: "模板文件名称"
    }),
    _ts_metadata9("design:type", Object)
], TaskInfo.prototype, "template", void 0);
_ts_decorate9([
    (0, import_typeorm6.Column)("tinyint", {
        comment: "自动重命名",
        default: 0
    }),
    _ts_metadata9("design:type", Number)
], TaskInfo.prototype, "rewrite", void 0);
_ts_decorate9([
    (0, import_typeorm6.Column)("varchar", {
        length: 1024,
        nullable: true,
        comment: "文件名格式"
    }),
    _ts_metadata9("design:type", Object)
], TaskInfo.prototype, "format", void 0);
_ts_decorate9([
    (0, import_typeorm6.Column)("varchar", {
        length: 10240,
        nullable: true,
        comment: "提交必填的内容(表单)"
    }),
    _ts_metadata9("design:type", Object)
], TaskInfo.prototype, "info", void 0);
_ts_decorate9([
    (0, import_typeorm6.Column)("timestamp", {
        nullable: true,
        comment: "截止日期"
    }),
    _ts_metadata9("design:type", Object)
], TaskInfo.prototype, "ddl", void 0);
_ts_decorate9([
    (0, import_typeorm6.Column)("varchar", {
        name: "share_key",
        length: 128,
        comment: "用于分享的链接"
    }),
    _ts_metadata9("design:type", String)
], TaskInfo.prototype, "shareKey", void 0);
_ts_decorate9([
    (0, import_typeorm6.Column)("tinyint", {
        name: "limit_people",
        comment: "是否限制提交人员",
        default: 0
    }),
    _ts_metadata9("design:type", Number)
], TaskInfo.prototype, "limitPeople", void 0);
_ts_decorate9([
    (0, import_typeorm6.Column)("varchar", {
        name: "bind_field",
        length: 255,
        comment: "绑定表单项",
        default: "姓名"
    }),
    _ts_metadata9("design:type", String)
], TaskInfo.prototype, "bindField", void 0);
_ts_decorate9([
    (0, import_typeorm6.Column)("text", {
        nullable: true
    }),
    _ts_metadata9("design:type", String)
], TaskInfo.prototype, "tip", void 0);
TaskInfo = _ts_decorate9([
    (0, import_typeorm6.Entity)("task_info")
], TaskInfo);
// src/db/entity/index.ts
var entities = [
    User2,
    Category,
    Files2,
    People,
    Task,
    TaskInfo
];
// src/db/index.ts
var import_node_process2 = __toESM(require("process"));
var import_typeorm7 = require("typeorm");
var AppDataSource;
function initTypeORM() {
    return _initTypeORM.apply(this, arguments);
}
function _initTypeORM() {
    _initTypeORM = _async_to_generator(function() {
        var cfg;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    cfg = LocalUserDB.getUserConfigByType("mysql");
                    AppDataSource = new import_typeorm7.DataSource({
                        type: "mysql",
                        host: cfg.host,
                        port: cfg.port,
                        username: cfg.user,
                        password: cfg.password,
                        database: cfg.database,
                        entities: entities,
                        synchronize: false,
                        logging: import_node_process2.default.env.NODE_ENV === "development"
                    });
                    return [
                        4,
                        AppDataSource.initialize()
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    });
    return _initTypeORM.apply(this, arguments);
}
__name(initTypeORM, "initTypeORM");
var _BaseRepository = /*#__PURE__*/ function() {
    "use strict";
    function _BaseRepository() {
        _class_call_check(this, _BaseRepository);
        __publicField(this, "repository");
        __publicField(this, "entityName");
    }
    _create_class(_BaseRepository, [
        {
            key: "findOne",
            value: function findOne(where) {
                return this.repository.findOne({
                    where: where
                });
            }
        },
        {
            key: "findMany",
            value: function findMany(where, ops) {
                return this.repository.find(_object_spread({
                    where: where
                }, ops));
            }
        },
        {
            key: "findWithSpecifyColumn",
            value: function findWithSpecifyColumn(where, columns) {
                var _this = this;
                return this.repository.createQueryBuilder(this.entityName).select(columns.map(function(v) {
                    return "".concat(_this.entityName, ".").concat(String(v));
                })).where(where).getMany();
            }
        },
        {
            key: "findWithLimitCount",
            value: function findWithLimitCount(where, limit, order) {
                return this.repository.find({
                    where: where,
                    take: limit,
                    order: order
                });
            }
        },
        {
            key: "insert",
            value: function insert(options) {
                return this.repository.save(options);
            }
        },
        {
            key: "update",
            value: function update(options) {
                return this.repository.save(options);
            }
        },
        {
            key: "insertMany",
            value: function insertMany(options) {
                return this.repository.save(options);
            }
        },
        {
            key: "updateSpecifyFields",
            value: function updateSpecifyFields(where, value) {
                return this.repository.createQueryBuilder(this.entityName).update().set(value).where(where).execute();
            }
        },
        {
            key: "delete",
            value: function _delete(options) {
                return this.repository.delete(options);
            }
        },
        {
            key: "count",
            value: function count(where) {
                return this.repository.count({
                    where: where
                });
            }
        }
    ]);
    return _BaseRepository;
}();
__name(_BaseRepository, "BaseRepository");
var BaseRepository = _BaseRepository;
// src/db/taskInfoDb.ts
function _ts_decorate10(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate10, "_ts_decorate");
var _a12;
var TaskInfoRepository = (_a12 = /*#__PURE__*/ function(BaseRepository) {
    "use strict";
    _inherits(_a12, BaseRepository);
    var _super = _create_super(_a12);
    function _a12() {
        _class_call_check(this, _a12);
        var _this;
        _this = _super.call.apply(_super, [
            this
        ].concat(Array.prototype.slice.call(arguments)));
        __publicField(_assert_this_initialized(_this), "repository", AppDataSource.getRepository(TaskInfo));
        __publicField(_assert_this_initialized(_this), "entityName", TaskInfo.name);
        return _this;
    }
    return _a12;
}(BaseRepository), __name(_a12, "TaskInfoRepository"), _a12);
TaskInfoRepository = _ts_decorate10([
    (0, import_flash_wolves4.Provide)()
], TaskInfoRepository);
// src/db/taskDb.ts
var import_flash_wolves5 = require("flash-wolves");
function _ts_decorate11(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate11, "_ts_decorate");
function selectTasks(options) {
    var columns = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    var _selectTableByModel = selectTableByModel("task", {
        data: options,
        columns: columns
    }), sql = _selectTableByModel.sql, params = _selectTableByModel.params;
    return query2.apply(void 0, [
        sql
    ].concat(_to_consumable_array(params)));
}
__name(selectTasks, "selectTasks");
var _a13;
var TaskRepository = (_a13 = /*#__PURE__*/ function(BaseRepository) {
    "use strict";
    _inherits(_a13, BaseRepository);
    var _super = _create_super(_a13);
    function _a13() {
        _class_call_check(this, _a13);
        var _this;
        _this = _super.call.apply(_super, [
            this
        ].concat(Array.prototype.slice.call(arguments)));
        __publicField(_assert_this_initialized(_this), "repository", AppDataSource.getRepository(Task));
        __publicField(_assert_this_initialized(_this), "entityName", Task.name);
        return _this;
    }
    return _a13;
}(BaseRepository), __name(_a13, "TaskRepository"), _a13);
TaskRepository = _ts_decorate11([
    (0, import_flash_wolves5.Provide)()
], TaskRepository);
// src/constants/errorMsg.ts
init_constants();
var UserError = {
    email: {
        fault: codeMsg(1006, "Email is not valid"),
        exist: codeMsg(1002, "Email already exist"),
        noExist: codeMsg(1008, "Email not exist")
    },
    account: {
        exist: codeMsg(1001, "Account already exist"),
        notExist: codeMsg(1005, "Account not exist"),
        fault: codeMsg(1007, "Account is fault"),
        freeze: codeMsg(1009, "Account is freeze"),
        ban: codeMsg(1010, "Account is ban"),
        bindEmail: codeMsg(1012, "Please bind email")
    },
    code: {
        fault: codeMsg(1003, "Error code")
    },
    pwd: {
        fault: codeMsg(1004, "error pwd")
    },
    system: {
        ban: codeMsg(1011, "The system prohibits new user registration")
    }
};
var CategoryError = {
    exist: codeMsg(2001, "category already exist")
};
var publicError = {
    file: {
        notSupport: codeMsg(3001, "file type is not support"),
        notExist: codeMsg(3003, "file not exist")
    },
    request: {
        errorParams: codeMsg(3002, "error request params"),
        notLogin: codeMsg(3004, "user not login")
    }
};
var taskError = {
    noExist: codeMsg(4001, "task not exist")
};
var fileError = {
    noPower: codeMsg(5001, "no power"),
    noOssFile: codeMsg(5002, "no oss file"),
    ossFileRepeat: codeMsg(5003, "oss file repeat")
};
var peopleError = {
    exist: codeMsg(6001, "already exist")
};
// src/service/taskInfoService.ts
function _ts_decorate12(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate12, "_ts_decorate");
function _ts_metadata10(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata10, "_ts_metadata");
var _a14;
var TaskInfoService = (_a14 = /*#__PURE__*/ function() {
    "use strict";
    function _a14() {
        _class_call_check(this, _a14);
        __publicField(this, "ctx");
        __publicField(this, "taskInfoRepository");
        __publicField(this, "taskRepository");
        __publicField(this, "localFileService");
        __publicField(this, "behaviorService");
    }
    _create_class(_a14, [
        {
            key: "getUseFullTemplate",
            value: function getUseFullTemplate(taskKey) {
                var _this = this;
                return _async_to_generator(function() {
                    var user2, infoList, taskInfo, data;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                user2 = _this.ctx.req.userInfo;
                                return [
                                    4,
                                    _this.taskInfoRepository.findWithSpecifyColumn({
                                        userId: user2.id
                                    }, [
                                        "taskKey",
                                        "info"
                                    ])
                                ];
                            case 1:
                                infoList = _state.sent().filter(function(v) {
                                    return v.taskKey !== taskKey;
                                });
                                if (!infoList.length) {
                                    return [
                                        2,
                                        []
                                    ];
                                }
                                return [
                                    4,
                                    _this.taskRepository.findWithSpecifyColumn({
                                        k: (0, import_typeorm8.In)(infoList.map(function(v) {
                                            return v.taskKey;
                                        }))
                                    }, [
                                        "k",
                                        "name"
                                    ])
                                ];
                            case 2:
                                taskInfo = _state.sent();
                                data = taskInfo.map(function(v) {
                                    var info = infoList.find(function(v2) {
                                        return v2.taskKey === v.k;
                                    }).info;
                                    return {
                                        taskKey: v.k,
                                        name: v.name,
                                        info: info
                                    };
                                });
                                return [
                                    2,
                                    data
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "delTipImage",
            value: function delTipImage(payload) {
                var _this = this;
                return _async_to_generator(function() {
                    var uid, name, key, task, tipImageKey;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                uid = payload.uid, name = payload.name, key = payload.key;
                                return [
                                    4,
                                    _this.taskRepository.findOne({
                                        k: key,
                                        userId: _this.ctx.req.userInfo.id
                                    })
                                ];
                            case 1:
                                task = _state.sent();
                                if (!task) {
                                    throw publicError.request.errorParams;
                                }
                                tipImageKey = _this.localFileService.getTipImageKey(key, name, uid);
                                _this.behaviorService.add("taskInfo", "".concat(_this.ctx.req.userInfo.account, " 删除提示图片: ").concat(tipImageKey), {
                                    tipImageKey: tipImageKey
                                });
                                _this.localFileService.deleteObjByKey(tipImageKey);
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "getTaskInfo",
            value: function getTaskInfo(key) {
                var _this = this;
                return _async_to_generator(function() {
                    var _ddl, taskInfo, _ref, template, rewrite, format, info, share, people, tip, bindField, ddl;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _this.taskInfoRepository.findOne({
                                        taskKey: key
                                    })
                                ];
                            case 1:
                                taskInfo = _state.sent();
                                _ref = taskInfo || {}, template = _ref.template, rewrite = _ref.rewrite, format = _ref.format, info = _ref.info, share = _ref.shareKey, people = _ref.limitPeople, tip = _ref.tip, bindField = _ref.bindField;
                                ddl = (taskInfo || {}).ddl;
                                if (ddl && ((_ddl = ddl) === null || _ddl === void 0 ? void 0 : _ddl.getTime)) {
                                    ddl = new Date(ddl.getTime() + 8 * 60 * 60 * 1e3);
                                }
                                _this.taskRepository.findOne({
                                    k: key
                                }).then(function(task) {
                                    if (task) {
                                        _this.behaviorService.add("taskInfo", "获取任务属性 任务:".concat(task.name, " 成功"), {
                                            key: key,
                                            name: task.name
                                        });
                                    }
                                });
                                return [
                                    2,
                                    {
                                        template: template,
                                        rewrite: rewrite,
                                        format: format,
                                        info: info,
                                        share: share,
                                        ddl: ddl,
                                        people: people,
                                        tip: tip,
                                        bindField: bindField
                                    }
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "updateTaskInfo",
            value: function updateTaskInfo(payload, key) {
                var _this = this;
                return _async_to_generator(function() {
                    var template, rewrite, format, info, ddl, people, tip, bindField, share, _this_ctx_req_userInfo, userId, logAccount, options;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                template = payload.template, rewrite = payload.rewrite, format = payload.format, info = payload.info, ddl = payload.ddl, people = payload.people, tip = payload.tip, bindField = payload.bindField;
                                share = payload.share;
                                _this_ctx_req_userInfo = _this.ctx.req.userInfo, userId = _this_ctx_req_userInfo.id, logAccount = _this_ctx_req_userInfo.account;
                                if (share !== void 0) {
                                    share = getUniqueKey();
                                }
                                if (!template && template !== void 0) {
                                    _this.localFileService.deleteFiles("easypicker2/".concat(key, "_template/"));
                                }
                                options = {
                                    template: template,
                                    rewrite: rewrite,
                                    format: format,
                                    info: info,
                                    ddl: ddl,
                                    shareKey: share,
                                    limitPeople: people,
                                    tip: tip,
                                    bindField: bindField
                                };
                                if (bindField === "") {
                                    options.bindField = void 0;
                                }
                                return [
                                    4,
                                    _this.taskInfoRepository.updateSpecifyFields({
                                        taskKey: key,
                                        userId: userId
                                    }, options)
                                ];
                            case 1:
                                _state.sent();
                                _this.taskRepository.findOne({
                                    k: key
                                }).then(function(task) {
                                    var _Object_keys_filter = _sliced_to_array(Object.keys(options).filter(function(o) {
                                        return options[o] !== void 0;
                                    }), 1), ks = _Object_keys_filter[0];
                                    var bType = {
                                        template: "修改模板",
                                        rewrite: "设置自动重命名",
                                        info: "设置提交必填信息",
                                        ddl: "设置截止日期",
                                        limitPeople: "限制提交人员",
                                        tip: "批注信息",
                                        bindField: "设置绑定字段"
                                    };
                                    if (task) {
                                        _this.behaviorService.add("taskInfo", "更新任务属性 ".concat(bType[ks], " 用户:").concat(logAccount, " 任务:").concat(task.name, " 成功"), {
                                            key: key,
                                            name: task.name,
                                            account: logAccount,
                                            data: payload
                                        });
                                    }
                                });
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "createTaskInfo",
            value: function createTaskInfo(taskInfo) {
                var data = {
                    limitPeople: BOOLEAN.FALSE,
                    template: "",
                    rewrite: BOOLEAN.FALSE,
                    format: "",
                    info: JSON.stringify([
                        "姓名"
                    ]),
                    shareKey: getUniqueKey(),
                    ddl: null
                };
                Object.assign(taskInfo, data);
                return this.taskInfoRepository.insert(taskInfo);
            }
        }
    ]);
    return _a14;
}(), __name(_a14, "TaskInfoService"), _a14);
_ts_decorate12([
    (0, import_flash_wolves6.InjectCtx)(),
    _ts_metadata10("design:type", typeof Context === "undefined" ? Object : Context)
], TaskInfoService.prototype, "ctx", void 0);
_ts_decorate12([
    (0, import_flash_wolves6.Inject)(TaskInfoRepository),
    _ts_metadata10("design:type", typeof TaskInfoRepository === "undefined" ? Object : TaskInfoRepository)
], TaskInfoService.prototype, "taskInfoRepository", void 0);
_ts_decorate12([
    (0, import_flash_wolves6.Inject)(TaskRepository),
    _ts_metadata10("design:type", typeof TaskRepository === "undefined" ? Object : TaskRepository)
], TaskInfoService.prototype, "taskRepository", void 0);
_ts_decorate12([
    (0, import_flash_wolves6.Inject)(LocalFileService),
    _ts_metadata10("design:type", typeof LocalFileService === "undefined" ? Object : LocalFileService)
], TaskInfoService.prototype, "localFileService", void 0);
_ts_decorate12([
    (0, import_flash_wolves6.Inject)(BehaviorService),
    _ts_metadata10("design:type", typeof BehaviorService === "undefined" ? Object : BehaviorService)
], TaskInfoService.prototype, "behaviorService", void 0);
TaskInfoService = _ts_decorate12([
    (0, import_flash_wolves6.Provide)()
], TaskInfoService);
// src/service/tokenService.ts
var import_node_process3 = __toESM(require("process"));
var import_flash_wolves7 = require("flash-wolves");
// src/db/model/user.ts
var USER_POWER;
(function(USER_POWER2) {
    USER_POWER2[USER_POWER2[/**
    * 正常
    */ "NORMAL"] = 6] = "NORMAL";
    USER_POWER2[USER_POWER2[/**
    * 超级管理员
    */ "SUPER"] = 0] = "SUPER";
    USER_POWER2[USER_POWER2[/**
    * 系统账号（只能维护系统后端服务）
    */ "SYSTEM"] = 1] = "SYSTEM";
})(USER_POWER || (USER_POWER = {}));
var USER_STATUS;
(function(USER_STATUS2) {
    USER_STATUS2[USER_STATUS2[/**
    * 正常
    */ "NORMAL"] = 0] = "NORMAL";
    USER_STATUS2[USER_STATUS2[/**
    * 冻结
    */ "FREEZE"] = 1] = "FREEZE";
    USER_STATUS2[USER_STATUS2[/**
    * 封禁
    */ "BAN"] = 2] = "BAN";
})(USER_STATUS || (USER_STATUS = {}));
// src/utils/index.ts
function throttle(func, delay) {
    var timers = {};
    return function(flag) {
        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            args[_key - 1] = arguments[_key];
        }
        if (!timers[flag]) {
            func.apply(this, args);
            timers[flag] = setTimeout(function() {
                delete timers[flag];
            }, delay);
        }
    };
}
__name(throttle, "throttle");
// src/service/tokenService.ts
function _ts_decorate13(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate13, "_ts_decorate");
var _a15;
var TokenService = (_a15 = /*#__PURE__*/ function() {
    "use strict";
    function _a15() {
        _class_call_check(this, _a15);
        var _this = this;
        __publicField(this, "checkOnlineUser", throttle(function() {
            var _ref = _async_to_generator(function(cacheUser, token) {
                var userInfo, onlineTokens, values, newTokenList;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                AppDataSource.manager.findOne(User2, {
                                    where: {
                                        id: cacheUser.id
                                    }
                                })
                            ];
                        case 1:
                            userInfo = _state.sent();
                            if (!userInfo) {
                                _this.expiredToken(token);
                                return [
                                    2
                                ];
                            }
                            return [
                                4,
                                _this.getAllTokens(userInfo.account)
                            ];
                        case 2:
                            onlineTokens = _state.sent();
                            if ([
                                USER_STATUS.BAN,
                                USER_STATUS.FREEZE
                            ].includes(userInfo.status)) {
                                _this.expiredToken(token);
                                console.log("清理账号", userInfo.account, "所有在线token");
                                onlineTokens.forEach(function(token2) {
                                    expiredRedisKey(token2);
                                });
                                return [
                                    2
                                ];
                            }
                            return [
                                4,
                                Promise.all(onlineTokens.map(function(token2) {
                                    return getRedisVal(token2);
                                }))
                            ];
                        case 3:
                            values = _state.sent();
                            newTokenList = onlineTokens.filter(function(_, idx) {
                                return values[idx];
                            });
                            if (newTokenList.length !== onlineTokens.length) {
                                setRedisValue(_this.onlineTokenKey(userInfo.account), JSON.stringify(newTokenList));
                            }
                            return [
                                2
                            ];
                    }
                });
            });
            return function(cacheUser, token) {
                return _ref.apply(this, arguments);
            };
        }(), 500));
    }
    _create_class(_a15, [
        {
            key: "realToken",
            value: function realToken(token) {
                return import_node_process3.default.env.TOKEN_PREFIX + token;
            }
        },
        {
            key: "onlineTokenKey",
            value: function onlineTokenKey(account) {
                return "".concat(import_node_process3.default.env.TOKEN_PREFIX, "-online-").concat(account);
            }
        },
        {
            key: "createTokenByUser",
            value: function createTokenByUser(user2) {
                var timeout = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 60 * 60 * 24 * 7;
                var _this = this;
                return _async_to_generator(function() {
                    var account, power6, token, realToken, onlineTokens;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                account = user2.account, power6 = user2.power;
                                token = encryption([
                                    account,
                                    power6,
                                    Date.now()
                                ].join());
                                realToken = _this.realToken(token);
                                setRedisValue(realToken, JSON.stringify(user2), timeout);
                                return [
                                    4,
                                    _this.getAllTokens(account)
                                ];
                            case 1:
                                onlineTokens = _state.sent();
                                onlineTokens.push(realToken);
                                setRedisValue(_this.onlineTokenKey(account), JSON.stringify(onlineTokens));
                                return [
                                    2,
                                    token
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "expiredToken",
            value: function expiredToken(token) {
                console.log("清理token", token);
                expiredRedisKey(this.realToken(token));
            }
        },
        {
            key: "expiredRedisKey",
            value: function expiredRedisKey1(key) {
                expiredRedisKey(key);
            }
        },
        {
            key: "getAllTokens",
            value: function getAllTokens(account) {
                var _this = this;
                return _async_to_generator(function() {
                    var onlineTokenKey, str;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                onlineTokenKey = _this.onlineTokenKey(account);
                                return [
                                    4,
                                    getRedisVal(onlineTokenKey)
                                ];
                            case 1:
                                str = _state.sent();
                                try {
                                    if (str) {
                                        return [
                                            2,
                                            JSON.parse(str)
                                        ];
                                    }
                                    return [
                                        2,
                                        []
                                    ];
                                } catch (e) {
                                    return [
                                        2,
                                        []
                                    ];
                                }
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "getUserInfo",
            value: function getUserInfo(token) {
                var _this = this;
                return _async_to_generator(function() {
                    var v;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!token) {
                                    return [
                                        2,
                                        null
                                    ];
                                }
                                return [
                                    4,
                                    getRedisVal(_this.realToken(token))
                                ];
                            case 1:
                                v = _state.sent();
                                if (v) {
                                    return [
                                        2,
                                        JSON.parse(v)
                                    ];
                                }
                                return [
                                    2,
                                    null
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "refreshToken",
            value: // TODO: 合理的时候刷新token
            function refreshToken(token) {
                var timeout = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 60 * 60 * 24 * 7;
                var _this = this;
                return _async_to_generator(function() {
                    var user2;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _this.getUserInfo(token)
                                ];
                            case 1:
                                user2 = _state.sent();
                                setRedisValue(_this.realToken(token), JSON.stringify(user2), timeout);
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "setVerifyCode",
            value: function setVerifyCode(identifier, code) {
                var timeout = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 60 * 2;
                setRedisValue("".concat(import_node_process3.default.env.TOKEN_PREFIX, "-code-").concat(identifier), code, timeout);
            }
        },
        {
            key: "getVerifyCode",
            value: function getVerifyCode(identifier) {
                return getRedisVal("".concat(import_node_process3.default.env.TOKEN_PREFIX, "-code-").concat(identifier));
            }
        },
        {
            key: "expiredVerifyCode",
            value: function expiredVerifyCode(identifier) {
                return expiredRedisKey("".concat(import_node_process3.default.env.TOKEN_PREFIX, "-code-").concat(identifier));
            }
        },
        {
            /**
  * 生成token
  */ key: "createToken",
            value: function createToken(user2) {
                var timeout = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 60 * 60 * 24 * 7;
                var account = user2.account, power6 = user2.power;
                var token = encryption([
                    account,
                    power6,
                    Date.now()
                ].join());
                setRedisValue(this.realToken(token), JSON.stringify(user2), timeout);
                return token;
            }
        },
        {
            key: "checkAllToken",
            value: function checkAllToken(onlineTokens, account) {
                var _this = this;
                return _async_to_generator(function() {
                    var values, newTokenList;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    Promise.all(onlineTokens.map(function(token) {
                                        return getRedisVal(token);
                                    }))
                                ];
                            case 1:
                                values = _state.sent();
                                newTokenList = onlineTokens.filter(function(_, idx) {
                                    return values[idx];
                                });
                                if (!(newTokenList.length !== onlineTokens.length)) return [
                                    3,
                                    3
                                ];
                                return [
                                    4,
                                    setRedisValue(_this.onlineTokenKey(account), JSON.stringify(newTokenList))
                                ];
                            case 2:
                                _state.sent();
                                _state.label = 3;
                            case 3:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return _a15;
}(), __name(_a15, "TokenService"), _a15);
TokenService = _ts_decorate13([
    (0, import_flash_wolves7.Provide)()
], TokenService);
// src/service/userService.ts
var import_flash_wolves9 = require("flash-wolves");
// src/db/userDb.ts
var import_flash_wolves8 = require("flash-wolves");
function _ts_decorate14(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate14, "_ts_decorate");
function selectUserByAccount(account) {
    var _selectTableByModel = selectTableByModel("user", {
        data: {
            account: account
        }
    }), sql = _selectTableByModel.sql, params = _selectTableByModel.params;
    return query2.apply(void 0, [
        sql
    ].concat(_to_consumable_array(params)));
}
__name(selectUserByAccount, "selectUserByAccount");
function selectUserByEmail(email) {
    var _selectTableByModel = selectTableByModel("user", {
        data: {
            email: email
        }
    }), sql = _selectTableByModel.sql, params = _selectTableByModel.params;
    return query2.apply(void 0, [
        sql
    ].concat(_to_consumable_array(params)));
}
__name(selectUserByEmail, "selectUserByEmail");
function selectUserById(id) {
    var _selectTableByModel = selectTableByModel("user", {
        data: {
            id: id
        }
    }), sql = _selectTableByModel.sql, params = _selectTableByModel.params;
    return query2.apply(void 0, [
        sql
    ].concat(_to_consumable_array(params)));
}
__name(selectUserById, "selectUserById");
function mapUserToDbPayload(options) {
    var payload = _object_spread({}, options);
    delete payload.phone;
    return payload;
}
__name(mapUserToDbPayload, "mapUserToDbPayload");
function insertUser(options) {
    var _insertTableByModel = insertTableByModel("user", _object_spread({
        status: USER_STATUS.NORMAL
    }, mapUserToDbPayload(options))), sql = _insertTableByModel.sql, params = _insertTableByModel.params;
    return query2.apply(void 0, [
        sql
    ].concat(_to_consumable_array(params)));
}
__name(insertUser, "insertUser");
function updateUser(options, q) {
    var _updateTableByModel = updateTableByModel("user", mapUserToDbPayload(options), mapUserToDbPayload(q)), sql = _updateTableByModel.sql, params = _updateTableByModel.params;
    return query2.apply(void 0, [
        sql
    ].concat(_to_consumable_array(params)));
}
__name(updateUser, "updateUser");
function selectAllUser(columns) {
    var _selectTableByModel = selectTableByModel("user", {
        data: {},
        columns: columns,
        order: "order by id desc"
    }), sql = _selectTableByModel.sql, params = _selectTableByModel.params;
    return query2.apply(void 0, [
        sql
    ].concat(_to_consumable_array(params)));
}
__name(selectAllUser, "selectAllUser");
var _a16;
var UserRepository = (_a16 = /*#__PURE__*/ function(BaseRepository) {
    "use strict";
    _inherits(_a16, BaseRepository);
    var _super = _create_super(_a16);
    function _a16() {
        _class_call_check(this, _a16);
        var _this;
        _this = _super.call.apply(_super, [
            this
        ].concat(Array.prototype.slice.call(arguments)));
        __publicField(_assert_this_initialized(_this), "repository", AppDataSource.getRepository(User2));
        __publicField(_assert_this_initialized(_this), "entityName", User2.name);
        return _this;
    }
    return _a16;
}(BaseRepository), __name(_a16, "UserRepository"), _a16);
UserRepository = _ts_decorate14([
    (0, import_flash_wolves8.Provide)()
], UserRepository);
// src/utils/regExp.ts
var rEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
var rAccount = /^(\d|[a-zA-Z]){4,11}$/;
var rPassword = /^[a-zA-Z0-9_-]{6,16}$/;
var rVerCode = /^\d{4}/;
// src/service/userService.ts
function _ts_decorate15(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate15, "_ts_decorate");
function _ts_metadata11(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata11, "_ts_metadata");
var _a17;
var UserService = (_a17 = /*#__PURE__*/ function() {
    "use strict";
    function _a17() {
        _class_call_check(this, _a17);
        __publicField(this, "behaviorService");
        __publicField(this, "userRepository");
        __publicField(this, "tokenService");
    }
    _create_class(_a17, [
        {
            key: "register",
            value: function register(payload) {
                var _this = this;
                return _async_to_generator(function() {
                    var account, pwd, bindEmail, email, code, needBindEmail, user2, rightCode, u;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                account = payload.account, pwd = payload.pwd, bindEmail = payload.bindEmail, email = payload.email, code = payload.code;
                                needBindEmail = LocalUserDB.getSiteConfig().needBindEmail;
                                if (needBindEmail && !bindEmail) {
                                    throw UserError.account.bindEmail;
                                }
                                if (!rAccount.test(account)) {
                                    _this.behaviorService.add("user", "新用户注册 账号:".concat(account, " 格式错误"), {
                                        account: account
                                    });
                                    throw UserError.account.fault;
                                }
                                if (!rPassword.test(pwd)) {
                                    _this.behaviorService.add("user", "新用户注册 账号:".concat(account, " 密码格式不正确"), {
                                        account: account
                                    });
                                    throw UserError.pwd.fault;
                                }
                                return [
                                    4,
                                    _this.userRepository.findOne({
                                        account: account
                                    })
                                ];
                            case 1:
                                user2 = _state.sent();
                                if (!(rEmail.test(account) && !user2)) return [
                                    3,
                                    3
                                ];
                                return [
                                    4,
                                    _this.userRepository.findOne({
                                        email: account
                                    })
                                ];
                            case 2:
                                user2 = _state.sent();
                                _state.label = 3;
                            case 3:
                                if (user2) {
                                    _this.behaviorService.add("user", "新用户注册 账号:".concat(account, " 已存在"), {
                                        account: account
                                    });
                                    throw UserError.account.exist;
                                }
                                if (!bindEmail) return [
                                    3,
                                    8
                                ];
                                if (!rEmail.test(email)) {
                                    _this.behaviorService.add("user", "新用户注册 邮箱:".concat(email, " 格式错误"), {
                                        email: email
                                    });
                                    throw UserError.email.fault;
                                }
                                return [
                                    4,
                                    _this.tokenService.getVerifyCode(email)
                                ];
                            case 4:
                                rightCode = _state.sent();
                                if (!code || code !== rightCode) {
                                    _this.behaviorService.add("user", "新用户注册 邮箱验证码错误:".concat(code), {
                                        code: code,
                                        rightCode: rightCode
                                    });
                                    throw UserError.code.fault;
                                }
                                return [
                                    4,
                                    _this.userRepository.findOne({
                                        email: email
                                    })
                                ];
                            case 5:
                                user2 = _state.sent();
                                if (!!user2) return [
                                    3,
                                    7
                                ];
                                return [
                                    4,
                                    _this.userRepository.findOne({
                                        account: email
                                    })
                                ];
                            case 6:
                                user2 = _state.sent();
                                _state.label = 7;
                            case 7:
                                if (user2) {
                                    _this.behaviorService.add("user", "新用户注册 邮箱:".concat(email, " 已存在"));
                                    throw UserError.email.exist;
                                }
                                _this.tokenService.expiredToken(email);
                                _state.label = 8;
                            case 8:
                                _this.behaviorService.add("user", "新用户注册 账号:".concat(account, " 绑定邮箱:").concat(bindEmail ? "是" : "否", " 注册成功"), {
                                    account: account,
                                    bindEmail: bindEmail
                                });
                                u = new User2();
                                u.account = account;
                                u.password = encryption(pwd);
                                if (bindEmail) {
                                    u.email = email;
                                }
                                return [
                                    2,
                                    _this.userRepository.insert(u)
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "login",
            value: function login(account, pwd) {
                var _this = this;
                return _async_to_generator(function() {
                    var isEmail, user2;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                isEmail = rEmail.test(account);
                                if (!rPassword.test(pwd)) {
                                    _this.behaviorService.add("user", "用户登录 账号:".concat(account, " 密码格式不正确"), {
                                        account: account
                                    });
                                    throw UserError.pwd.fault;
                                }
                                return [
                                    4,
                                    _this.userRepository.findOne({
                                        account: account
                                    })
                                ];
                            case 1:
                                user2 = _state.sent();
                                if (!user2 && !isEmail) {
                                    _this.behaviorService.add("user", "用户登录 账号:".concat(account, " 不存在"), {
                                        account: account
                                    });
                                    throw UserError.account.fault;
                                }
                                if (!(!user2 && isEmail)) return [
                                    3,
                                    3
                                ];
                                return [
                                    4,
                                    _this.userRepository.findOne({
                                        email: account
                                    })
                                ];
                            case 2:
                                user2 = _state.sent();
                                _state.label = 3;
                            case 3:
                                if (!user2) {
                                    _this.behaviorService.add("user", "用户登录 账号:".concat(account, " 不存在"), {
                                        account: account
                                    });
                                    throw isEmail ? UserError.email.fault : UserError.account.fault;
                                }
                                if (user2.password !== encryption(pwd)) {
                                    _this.behaviorService.add("user", "用户登录 账号:".concat(account, " 密码不正确"), {
                                        account: account
                                    });
                                    throw UserError.pwd.fault;
                                }
                                _this.checkUserStatus(user2);
                                _this.behaviorService.add("user", "用户登录 账号:".concat(account, " 登录成功"), {
                                    account: account
                                });
                                return [
                                    2,
                                    _this.userRepository.update(user2)
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "loginByCode",
            value: function loginByCode(email, code) {
                var _this = this;
                return _async_to_generator(function() {
                    var _email, maskedEmail, v, user2;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!rEmail.test(email)) {
                                    throw UserError.email.fault;
                                }
                                maskedEmail = (_email = email) === null || _email === void 0 ? void 0 : _email.replace(/(.{2}).+(@.+)/, function(_, prefix, suffix) {
                                    return "".concat(prefix, "***").concat(suffix);
                                });
                                return [
                                    4,
                                    _this.tokenService.getVerifyCode(email)
                                ];
                            case 1:
                                v = _state.sent();
                                if (code !== v) {
                                    _this.behaviorService.add("user", "验证码登录 验证码错误:".concat(code), {
                                        code: code,
                                        rightCode: v
                                    });
                                    throw UserError.code.fault;
                                }
                                return [
                                    4,
                                    _this.userRepository.findOne({
                                        email: email
                                    })
                                ];
                            case 2:
                                user2 = _state.sent();
                                if (!user2) {
                                    _this.behaviorService.add("user", "验证码登录 邮箱:".concat(maskedEmail, " 不存在"), {
                                        email: maskedEmail
                                    });
                                    throw UserError.email.noExist;
                                }
                                _this.checkUserStatus(user2);
                                _this.behaviorService.add("user", "验证码登录 邮箱:".concat(maskedEmail, " 登录成功"), {
                                    email: maskedEmail
                                });
                                _this.tokenService.expiredVerifyCode(email);
                                return [
                                    2,
                                    _this.userRepository.update(user2)
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "updatePassword",
            value: function updatePassword(payload) {
                var _this = this;
                return _async_to_generator(function() {
                    var _email, code, email, pwd, maskedEmail, v, user2;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                code = payload.code, email = payload.email, pwd = payload.pwd;
                                maskedEmail = (_email = email) === null || _email === void 0 ? void 0 : _email.replace(/(.{2}).+(@.+)/, function(_, prefix, suffix) {
                                    return "".concat(prefix, "***").concat(suffix);
                                });
                                return [
                                    4,
                                    _this.tokenService.getVerifyCode(email)
                                ];
                            case 1:
                                v = _state.sent();
                                if (code !== v) {
                                    _this.behaviorService.add("user", "重置密码 邮箱:".concat(maskedEmail, " 验证码不正确: ").concat(code), {
                                        email: maskedEmail,
                                        code: code,
                                        rightCode: v
                                    });
                                    throw UserError.code.fault;
                                }
                                return [
                                    4,
                                    _this.userRepository.findOne({
                                        email: email
                                    })
                                ];
                            case 2:
                                user2 = _state.sent();
                                if (!user2) {
                                    _this.behaviorService.add("user", "重置密码 邮箱:".concat(maskedEmail, " 不存在"), {
                                        email: maskedEmail
                                    });
                                    throw UserError.email.noExist;
                                }
                                if (!rPassword.test(pwd)) {
                                    _this.behaviorService.add("user", "重置密码 邮箱:".concat(maskedEmail, " 密码格式不正确"), {
                                        email: maskedEmail
                                    });
                                    throw UserError.pwd.fault;
                                }
                                user2.password = encryption(pwd);
                                _this.tokenService.expiredVerifyCode(email);
                                _this.behaviorService.add("user", "重置密码 邮箱:".concat(maskedEmail, " 重置成功"), {
                                    email: maskedEmail
                                });
                                _this.checkUserStatus(user2);
                                return [
                                    2,
                                    _this.userRepository.update(user2)
                                ];
                        }
                    });
                })();
            }
        },
        {
            /**
  * 登录前用户状态检查
  */ key: "checkUserStatus",
            value: function checkUserStatus(user2) {
                var account = user2.account;
                if (user2.status === USER_STATUS.BAN) {
                    this.behaviorService.add("user", "用户登录失败 账号:".concat(account, " 已被封禁"), {
                        account: account
                    });
                    throw UserError.account.ban;
                }
                if (user2.status === USER_STATUS.FREEZE) {
                    var openDate = new Date(user2.openTime);
                    if (openDate.getTime() > Date.now()) {
                        this.behaviorService.add("user", "用户登录失败 账号:".concat(account, " 已被冻结 解冻时间").concat(formatDate(openDate)), {
                            account: account,
                            openDate: openDate
                        });
                        throw {
                            code: UserError.account.freeze.code,
                            msg: UserError.account.freeze.msg,
                            data: {
                                openTime: user2.openTime
                            }
                        };
                    }
                    user2.status = USER_STATUS.NORMAL;
                    user2.openTime = null;
                }
                user2.loginCount += 1;
                user2.loginTime = /* @__PURE__ */ new Date();
            }
        }
    ]);
    return _a17;
}(), __name(_a17, "UserService"), _a17);
_ts_decorate15([
    (0, import_flash_wolves9.Inject)(BehaviorService),
    _ts_metadata11("design:type", typeof BehaviorService === "undefined" ? Object : BehaviorService)
], UserService.prototype, "behaviorService", void 0);
_ts_decorate15([
    (0, import_flash_wolves9.Inject)(UserRepository),
    _ts_metadata11("design:type", typeof UserRepository === "undefined" ? Object : UserRepository)
], UserService.prototype, "userRepository", void 0);
_ts_decorate15([
    (0, import_flash_wolves9.Inject)(TokenService),
    _ts_metadata11("design:type", typeof TokenService === "undefined" ? Object : TokenService)
], UserService.prototype, "tokenService", void 0);
UserService = _ts_decorate15([
    (0, import_flash_wolves9.Provide)()
], UserService);
// src/service/taskService.ts
var import_flash_wolves13 = require("flash-wolves");
// src/service/fileService.ts
var import_flash_wolves12 = require("flash-wolves");
var import_mongodb6 = require("mongodb");
var import_typeorm9 = require("typeorm");
var import_dayjs2 = __toESM(require("dayjs"));
// src/db/fileDb.ts
var import_flash_wolves10 = require("flash-wolves");
function _ts_decorate16(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate16, "_ts_decorate");
function selectFilesNew(options) {
    var columns = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    var _selectTableByModel = selectTableByModel("files", {
        data: options,
        columns: columns,
        // 逆序
        order: "order by id desc"
    }), sql = _selectTableByModel.sql, params = _selectTableByModel.params;
    return query2.apply(void 0, [
        sql
    ].concat(_to_consumable_array(params)));
}
__name(selectFilesNew, "selectFilesNew");
function selectFiles(options) {
    var columns = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    var _selectTableByModel = selectTableByModel("files", {
        data: _object_spread({
            del: 0
        }, options),
        columns: columns,
        // 逆序
        order: "order by id desc"
    }), sql = _selectTableByModel.sql, params = _selectTableByModel.params;
    return query2.apply(void 0, [
        sql
    ].concat(_to_consumable_array(params)));
}
__name(selectFiles, "selectFiles");
function updateFileInfo(_query, file) {
    var _updateTableByModel = updateTableByModel("files", file, _query), sql = _updateTableByModel.sql, params = _updateTableByModel.params;
    return query2.apply(void 0, [
        sql
    ].concat(_to_consumable_array(params)));
}
__name(updateFileInfo, "updateFileInfo");
var _a18;
var FileRepository = (_a18 = /*#__PURE__*/ function(BaseRepository) {
    "use strict";
    _inherits(_a18, BaseRepository);
    var _super = _create_super(_a18);
    function _a18() {
        _class_call_check(this, _a18);
        var _this;
        _this = _super.call.apply(_super, [
            this
        ].concat(Array.prototype.slice.call(arguments)));
        __publicField(_assert_this_initialized(_this), "repository", AppDataSource.getRepository(Files2));
        __publicField(_assert_this_initialized(_this), "entityName", Files2.name);
        return _this;
    }
    return _a18;
}(BaseRepository), __name(_a18, "FileRepository"), _a18);
FileRepository = _ts_decorate16([
    (0, import_flash_wolves10.Provide)()
], FileRepository);
// src/db/actionDb.ts
function addAction(action) {
    Object.assign(action, {
        id: getUniqueKey(),
        date: /* @__PURE__ */ new Date()
    });
    return insertCollection("action", action);
}
__name(addAction, "addAction");
function addDownloadAction(action) {
    return addAction(action);
}
__name(addDownloadAction, "addDownloadAction");
function findActionCount(query3) {
    return findCollectionCount("action", query3);
}
__name(findActionCount, "findActionCount");
function findActionWithPageOffset(startIdx, pageSize, query3) {
    return mongoDbQuery(function(db, resolve) {
        db.collection("action").find(query3).sort({
            _id: -1
        }).skip(startIdx).limit(pageSize).toArray().then(resolve);
    });
}
__name(findActionWithPageOffset, "findActionWithPageOffset");
function findAction(action) {
    return findCollection("action", action);
}
__name(findAction, "findAction");
function updateAction(query3, action) {
    return updateCollection("action", query3, action);
}
__name(updateAction, "updateAction");
// src/db/model/action.ts
var ActionType;
(function(ActionType2) {
    ActionType2[ActionType2[/**
    * 点赞
    */ "PRAISE"] = 0] = "PRAISE";
    ActionType2[ActionType2[/**
    * 单文件下载
    */ "Download"] = 1] = "Download";
    ActionType2[ActionType2[/**
    * 文件归档
    */ "Compress"] = 2] = "Compress";
    ActionType2[ActionType2[/**
    * 路由禁用
    */ "DisabledRoute"] = 3] = "DisabledRoute";
    ActionType2[ActionType2[/**
    * 示例文件下载
    */ "TemplateDownload"] = 4] = "TemplateDownload";
})(ActionType || (ActionType = {}));
var DownloadStatus;
(function(DownloadStatus2) {
    DownloadStatus2[DownloadStatus2[/**
    * 归档中
    */ "ARCHIVE"] = 0] = "ARCHIVE";
    DownloadStatus2[DownloadStatus2[/**
    * 链接已失效
    */ "EXPIRED"] = 1] = "EXPIRED";
    DownloadStatus2[DownloadStatus2[/**
    * 可下载
    */ "SUCCESS"] = 2] = "SUCCESS";
    DownloadStatus2[DownloadStatus2[/**
    * 归档失败
    */ "FAIL"] = 3] = "FAIL";
})(DownloadStatus || (DownloadStatus = {}));
// src/utils/time-utils.ts
var import_dayjs = __toESM(require("dayjs"));
function diffMonth(end, start) {
    return (0, import_dayjs.default)(new Date(end)).diff((0, import_dayjs.default)(new Date(start)), "month", true);
}
__name(diffMonth, "diffMonth");
// src/db/peopleDb.ts
var import_flash_wolves11 = require("flash-wolves");
function _ts_decorate17(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate17, "_ts_decorate");
function selectPeople(options) {
    var columns = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [
        "name"
    ];
    var _selectTableByModel = selectTableByModel("people", {
        data: options,
        columns: columns
    }), sql = _selectTableByModel.sql, params = _selectTableByModel.params;
    return query2.apply(void 0, [
        sql
    ].concat(_to_consumable_array(params)));
}
__name(selectPeople, "selectPeople");
function insertPeople(people) {
    var defaultData = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    people.forEach(function(p) {
        Object.assign(p, defaultData, p);
    });
    var _insertTableByModelMany = insertTableByModelMany("people", people), sql = _insertTableByModelMany.sql, params = _insertTableByModelMany.params;
    return query2.apply(void 0, [
        sql
    ].concat(_to_consumable_array(params)));
}
__name(insertPeople, "insertPeople");
function deletePeople(people) {
    var _deleteTableByModel = deleteTableByModel("people", people), sql = _deleteTableByModel.sql, params = _deleteTableByModel.params;
    return query2.apply(void 0, [
        sql
    ].concat(_to_consumable_array(params)));
}
__name(deletePeople, "deletePeople");
function updatePeople(people, q) {
    var _updateTableByModel = updateTableByModel("people", people, q), sql = _updateTableByModel.sql, params = _updateTableByModel.params;
    return query2.apply(void 0, [
        sql
    ].concat(_to_consumable_array(params)));
}
__name(updatePeople, "updatePeople");
var _a19;
var PeopleRepository = (_a19 = /*#__PURE__*/ function(BaseRepository) {
    "use strict";
    _inherits(_a19, BaseRepository);
    var _super = _create_super(_a19);
    function _a19() {
        _class_call_check(this, _a19);
        var _this;
        _this = _super.call.apply(_super, [
            this
        ].concat(Array.prototype.slice.call(arguments)));
        __publicField(_assert_this_initialized(_this), "repository", AppDataSource.getRepository(People));
        __publicField(_assert_this_initialized(_this), "entityName", People.name);
        return _this;
    }
    return _a19;
}(BaseRepository), __name(_a19, "PeopleRepository"), _a19);
PeopleRepository = _ts_decorate17([
    (0, import_flash_wolves11.Provide)()
], PeopleRepository);
// src/service/fileService.ts
function _ts_decorate18(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate18, "_ts_decorate");
function _ts_metadata12(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata12, "_ts_metadata");
var _a20;
var FileService = (_a20 = /*#__PURE__*/ function() {
    "use strict";
    function _a20() {
        _class_call_check(this, _a20);
        __publicField(this, "ctx");
        __publicField(this, "fileRepository");
        __publicField(this, "localFileService");
        __publicField(this, "behaviorService");
        __publicField(this, "taskRepository");
        __publicField(this, "userRepository");
        __publicField(this, "tokenService");
        __publicField(this, "taskInfoService");
        __publicField(this, "peopleRepository");
    }
    _create_class(_a20, [
        {
            key: "selectFilesLimitCount",
            value: function selectFilesLimitCount(options, count) {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        return [
                            2,
                            _this.fileRepository.findWithLimitCount(options, count, {
                                id: "DESC"
                            })
                        ];
                    });
                })();
            }
        },
        {
            key: "getOssKey",
            value: function getOssKey(file) {
                return "easypicker2/".concat(file.task_key || file.taskKey, "/").concat(file.hash, "/").concat(file.name);
            }
        },
        {
            key: "getFileUsage",
            value: /**
  * 实际文件用了
  */ function getFileUsage(userId) {
                var _this = this;
                return _async_to_generator(function() {
                    var files, ossFilesMap;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _this.fileRepository.findMany({
                                        userId: userId
                                    })
                                ];
                            case 1:
                                files = _state.sent();
                                return [
                                    4,
                                    _this.localFileService.getFilesMap(files)
                                ];
                            case 2:
                                ossFilesMap = _state.sent();
                                return [
                                    2,
                                    files.reduce(function(pre, file) {
                                        var _this1;
                                        var ossKey = _this.getOssKey(file);
                                        var categoryKey = file.categoryKey;
                                        return pre + (((_this1 = ossFilesMap.get(ossKey) || ossFilesMap.get(categoryKey)) === null || _this1 === void 0 ? void 0 : _this1.fsize) || 0);
                                    }, 0)
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "downloadOne",
            value: function downloadOne(fileId) {
                var _this = this;
                return _async_to_generator(function() {
                    var _status__data, _status_, _LocalUserDB_getSiteConfig, _this_ctx_req_userInfo, userId, logAccount, file, k, isExist, status, mimeType, expiredTime, originUrl, result, link, data;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _this_ctx_req_userInfo = _this.ctx.req.userInfo, userId = _this_ctx_req_userInfo.id, logAccount = _this_ctx_req_userInfo.account;
                                return [
                                    4,
                                    _this.fileRepository.findOne({
                                        userId: userId,
                                        id: fileId
                                    })
                                ];
                            case 1:
                                file = _state.sent();
                                if (!file) {
                                    _this.behaviorService.add("file", "下载文件失败 用户:".concat(logAccount, " 文件记录不存在"), {
                                        account: logAccount
                                    });
                                    throw publicError.file.notExist;
                                }
                                k = _this.getOssKey(file);
                                isExist = false;
                                if (!file.categoryKey) return [
                                    3,
                                    3
                                ];
                                return [
                                    4,
                                    _this.localFileService.judgeFileIsExist(file.categoryKey)
                                ];
                            case 2:
                                isExist = _state.sent();
                                _state.label = 3;
                            case 3:
                                if (!!isExist) return [
                                    3,
                                    5
                                ];
                                return [
                                    4,
                                    _this.localFileService.judgeFileIsExist(k)
                                ];
                            case 4:
                                isExist = _state.sent();
                                return [
                                    3,
                                    6
                                ];
                            case 5:
                                k = file.categoryKey;
                                _state.label = 6;
                            case 6:
                                if (!isExist) {
                                    _this.behaviorService.add("file", "下载文件失败 用户:".concat(logAccount, " 文件:").concat(file.name, " 已从本地移除"), {
                                        account: logAccount,
                                        name: file.name
                                    });
                                    throw publicError.file.notExist;
                                }
                                return [
                                    4,
                                    _this.localFileService.batchFileStatus([
                                        k
                                    ])
                                ];
                            case 7:
                                status = _state.sent();
                                mimeType = (_status_ = status[0]) === null || _status_ === void 0 ? void 0 : (_status__data = _status_.data) === null || _status__data === void 0 ? void 0 : _status__data.mimeType;
                                expiredTime = getQiniuFileUrlExpiredTime(((_LocalUserDB_getSiteConfig = LocalUserDB.getSiteConfig()) === null || _LocalUserDB_getSiteConfig === void 0 ? void 0 : _LocalUserDB_getSiteConfig.downloadOneExpired) || 1);
                                originUrl = _this.localFileService.getDownloadUrl(k, expiredTime, _this.ctx.req);
                                return [
                                    4,
                                    addDownloadAction({
                                        userId: userId,
                                        type: ActionType.Download,
                                        thingId: file.id
                                    })
                                ];
                            case 8:
                                result = _state.sent();
                                link = shortLink(result.insertedId, _this.ctx.req);
                                data = {
                                    url: link,
                                    originUrl: originUrl,
                                    status: DownloadStatus.SUCCESS,
                                    ids: [
                                        file.id
                                    ],
                                    tip: file.name,
                                    name: file.name,
                                    size: file.size,
                                    account: logAccount,
                                    mimeType: mimeType,
                                    expiredTime: expiredTime * 1e3
                                };
                                return [
                                    4,
                                    updateAction({
                                        _id: (0, import_mongodb6.ObjectID)(result.insertedId)
                                    }, {
                                        $set: {
                                            data: data
                                        }
                                    })
                                ];
                            case 9:
                                _state.sent();
                                return [
                                    2,
                                    {
                                        link: link,
                                        mimeType: mimeType
                                    }
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "batchDownload",
            value: function batchDownload(ids, zipName) {
                var _this = this;
                return _async_to_generator(function() {
                    var _this_ctx_req_userInfo, userId, logAccount, files, keys, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, file, categoryKey, key, isOldExist, err, filesStatus, size, _normalizeFileName, filename, value;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _this_ctx_req_userInfo = _this.ctx.req.userInfo, userId = _this_ctx_req_userInfo.id, logAccount = _this_ctx_req_userInfo.account;
                                return [
                                    4,
                                    _this.fileRepository.findMany({
                                        id: (0, import_typeorm9.In)(ids),
                                        userId: userId
                                    })
                                ];
                            case 1:
                                files = _state.sent();
                                if (files.length === 0) {
                                    _this.behaviorService.add("file", "批量下载文件失败 用户:".concat(logAccount), {
                                        account: logAccount
                                    });
                                    throw publicError.file.notExist;
                                }
                                keys = [];
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                _state.label = 2;
                            case 2:
                                _state.trys.push([
                                    2,
                                    7,
                                    8,
                                    9
                                ]);
                                _iterator = files[Symbol.iterator]();
                                _state.label = 3;
                            case 3:
                                if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                                    3,
                                    6
                                ];
                                file = _step.value;
                                categoryKey = file.categoryKey;
                                key = _this.getOssKey(file);
                                if (!categoryKey) {
                                    keys.push(key);
                                }
                                if (!categoryKey) return [
                                    3,
                                    5
                                ];
                                return [
                                    4,
                                    _this.localFileService.judgeFileIsExist(categoryKey)
                                ];
                            case 4:
                                isOldExist = _state.sent();
                                if (isOldExist) {
                                    keys.push(categoryKey);
                                } else {
                                    keys.push(key);
                                }
                                _state.label = 5;
                            case 5:
                                _iteratorNormalCompletion = true;
                                return [
                                    3,
                                    3
                                ];
                            case 6:
                                return [
                                    3,
                                    9
                                ];
                            case 7:
                                err = _state.sent();
                                _didIteratorError = true;
                                _iteratorError = err;
                                return [
                                    3,
                                    9
                                ];
                            case 8:
                                try {
                                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                                        _iterator.return();
                                    }
                                } finally{
                                    if (_didIteratorError) {
                                        throw _iteratorError;
                                    }
                                }
                                return [
                                    7
                                ];
                            case 9:
                                return [
                                    4,
                                    _this.localFileService.batchFileStatus(keys)
                                ];
                            case 10:
                                filesStatus = _state.sent();
                                size = 0;
                                keys = keys.filter(function(_, idx) {
                                    var code = filesStatus[idx].code;
                                    if (code === 200) {
                                        var _filesStatus_idx_data;
                                        size += ((_filesStatus_idx_data = filesStatus[idx].data) === null || _filesStatus_idx_data === void 0 ? void 0 : _filesStatus_idx_data.fsize) || 0;
                                    }
                                    return code === 200;
                                });
                                if (keys.length === 0) {
                                    _this.behaviorService.add("file", "批量下载文件失败 用户:".concat(logAccount, " 文件均已从本地移除"), {
                                        account: logAccount
                                    });
                                    throw publicError.file.notExist;
                                }
                                filename = (_normalizeFileName = normalizeFileName(zipName)) !== null && _normalizeFileName !== void 0 ? _normalizeFileName : "".concat(getUniqueKey());
                                return [
                                    4,
                                    _this.localFileService.makeZipWithKeys(keys, filename)
                                ];
                            case 11:
                                value = _state.sent();
                                _this.behaviorService.add("file", "批量下载任务 用户:".concat(logAccount, " 文件数量:").concat(keys.length, " 压缩任务名").concat(value), {
                                    account: logAccount,
                                    length: keys.length,
                                    size: size
                                });
                                return [
                                    4,
                                    addDownloadAction({
                                        userId: userId,
                                        type: ActionType.Compress,
                                        data: {
                                            status: DownloadStatus.ARCHIVE,
                                            ids: ids,
                                            tip: "".concat(filename, ".zip (").concat(keys.length, "个文件)"),
                                            archiveKey: value
                                        }
                                    })
                                ];
                            case 12:
                                _state.sent();
                                return [
                                    2,
                                    {
                                        k: value
                                    }
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "downloadTemplate",
            value: function downloadTemplate(filename, taskKey) {
                var _this = this;
                return _async_to_generator(function() {
                    var _fileInfo, _LocalUserDB_getSiteConfig, k, isExist, task, user2, _ref, fileInfo, _ref1, mimeType, fsize, expiredTime, originUrl, result, link, data;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                k = "easypicker2/".concat(taskKey, "_template/").concat(filename);
                                return [
                                    4,
                                    _this.localFileService.judgeFileIsExist(k)
                                ];
                            case 1:
                                isExist = _state.sent();
                                if (!isExist) {
                                    _this.behaviorService.add("file", "下载模板文件 参数错误", {
                                        data: _this.ctx.req.query
                                    });
                                    throw publicError.file.notExist;
                                }
                                return [
                                    4,
                                    _this.taskRepository.findOne({
                                        k: taskKey,
                                        del: BOOLEAN.FALSE
                                    })
                                ];
                            case 2:
                                task = _state.sent();
                                if (!task) {
                                    _this.behaviorService.add("file", "下载模板文件 参数错误", {
                                        data: _this.ctx.req.query
                                    });
                                    throw publicError.file.notExist;
                                }
                                return [
                                    4,
                                    _this.userRepository.findOne({
                                        id: task.userId
                                    })
                                ];
                            case 3:
                                user2 = _state.sent();
                                return [
                                    4,
                                    _this.localFileService.batchFileStatus([
                                        k
                                    ])
                                ];
                            case 4:
                                _ref = _sliced_to_array.apply(void 0, [
                                    _state.sent(),
                                    1
                                ]), fileInfo = _ref[0];
                                _ref1 = ((_fileInfo = fileInfo) === null || _fileInfo === void 0 ? void 0 : _fileInfo.data) || {}, mimeType = _ref1.mimeType, fsize = _ref1.fsize;
                                expiredTime = getQiniuFileUrlExpiredTime(((_LocalUserDB_getSiteConfig = LocalUserDB.getSiteConfig()) === null || _LocalUserDB_getSiteConfig === void 0 ? void 0 : _LocalUserDB_getSiteConfig.downloadOneExpired) || 1);
                                originUrl = _this.localFileService.getDownloadUrl(k, expiredTime, _this.ctx.req);
                                return [
                                    4,
                                    addDownloadAction({
                                        userId: task.userId,
                                        type: ActionType.TemplateDownload,
                                        thingId: taskKey
                                    })
                                ];
                            case 5:
                                result = _state.sent();
                                link = shortLink(result.insertedId, _this.ctx.req);
                                data = {
                                    url: link,
                                    originUrl: originUrl,
                                    status: DownloadStatus.SUCCESS,
                                    ids: [],
                                    tip: filename,
                                    name: filename,
                                    size: fsize,
                                    account: user2.account,
                                    mimeType: mimeType,
                                    expiredTime: expiredTime * 1e3
                                };
                                return [
                                    4,
                                    updateAction({
                                        _id: (0, import_mongodb6.ObjectID)(result.insertedId)
                                    }, {
                                        $set: {
                                            data: data
                                        }
                                    })
                                ];
                            case 6:
                                _state.sent();
                                return [
                                    2,
                                    {
                                        link: link,
                                        mimeType: mimeType
                                    }
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "downloadCount",
            value: function downloadCount(idList) {
                var _this = this;
                return _async_to_generator(function() {
                    var actions, actionsIds, logs, values;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!_this.ctx.req.userInfo) {
                                    throw new Error("用户未登录");
                                }
                                return [
                                    4,
                                    findAction({
                                        "userId": _this.ctx.req.userInfo.id,
                                        "data.status": {
                                            $in: [
                                                DownloadStatus.ARCHIVE,
                                                DownloadStatus.SUCCESS,
                                                DownloadStatus.EXPIRED
                                            ]
                                        },
                                        "data.ids": {
                                            $in: idList
                                        }
                                    })
                                ];
                            case 1:
                                actions = _state.sent();
                                actionsIds = actions.map(function(v) {
                                    return v._id.toHexString();
                                });
                                return [
                                    4,
                                    findLog({
                                        "type": "behavior",
                                        "data.info.data.downloadActionId": {
                                            $in: actionsIds
                                        }
                                    })
                                ];
                            case 2:
                                logs = _state.sent();
                                values = idList.map(function(fileId) {
                                    var baseCount = actions.filter(function(v) {
                                        var _v_data_ids;
                                        return (_v_data_ids = v.data.ids) === null || _v_data_ids === void 0 ? void 0 : _v_data_ids.includes(fileId);
                                    }).reduce(function(pre, action) {
                                        var logCount = logs.filter(function(v) {
                                            var _v_data_info_data, _v_data_info, _v_data;
                                            return ((_v_data = v.data) === null || _v_data === void 0 ? void 0 : (_v_data_info = _v_data.info) === null || _v_data_info === void 0 ? void 0 : (_v_data_info_data = _v_data_info.data) === null || _v_data_info_data === void 0 ? void 0 : _v_data_info_data.downloadActionId) === action._id.toHexString();
                                        }).length;
                                        return pre + (logCount || 1);
                                    }, 0);
                                    return baseCount;
                                });
                                return [
                                    2,
                                    values
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "downloadLog",
            value: function downloadLog() {
                var account = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", ops = arguments.length > 1 ? arguments[1] : void 0;
                return _async_to_generator(function() {
                    var _ref, startTime, endTime;
                    return _ts_generator(this, function(_state) {
                        _ref = ops || {}, startTime = _ref.startTime, endTime = _ref.endTime;
                        return [
                            2,
                            findLog(_object_spread_props(_object_spread({}, (startTime || endTime) && {
                                _id: _object_spread({}, startTime && {
                                    $gte: new import_mongodb6.ObjectId(timeToObjId(startTime))
                                }, endTime && {
                                    $lte: new import_mongodb6.ObjectId(timeToObjId(endTime))
                                })
                            }), {
                                "type": "behavior",
                                "data.info.msg": {
                                    $regex: new RegExp("^(下载文件成功 用户:".concat(account, "|归档下载文件成功 用户:").concat(account, "|下载模板文件 用户:").concat(account, ")"))
                                }
                            }))
                        ];
                    });
                })();
            }
        },
        {
            key: "getOSSFileSizeUntilNow",
            value: function getOSSFileSizeUntilNow(fileList, filesMap, ops) {
                var _this = this;
                var startTime = (ops || {}).startTime;
                var sum = fileList.reduce(function(pre, file) {
                    var _this1;
                    var ossKey = _this.getOssKey(file);
                    var categoryKey = file.categoryKey;
                    var fileSize = +file.size;
                    var ossSize = ((_this1 = filesMap.get(ossKey) || filesMap.get(categoryKey)) === null || _this1 === void 0 ? void 0 : _this1.fsize) || 0;
                    if (!ossSize) {
                        var ossDelTime = file.ossDelTime;
                        if (!ossDelTime) {
                            return pre;
                        }
                        if (ossDelTime < startTime) {
                            return pre;
                        }
                        return pre + diffMonth(ossDelTime, startTime) * fileSize;
                    }
                    return pre + diffMonth(Date.now(), Math.max(+new Date(file.date), +startTime)) * fileSize;
                }, 0);
                return Math.round(sum);
            }
        },
        {
            key: "analyzeDownloadLog",
            value: function analyzeDownloadLog(logs) {
                var oneFile = {
                    count: 0,
                    size: 0
                };
                var compressFile = {
                    count: 0,
                    size: 0
                };
                var templateFile = {
                    count: 0,
                    size: 0
                };
                logs.forEach(function(v) {
                    var info = v.data.info;
                    var msg = info.msg;
                    var size = +info.data.size || 0;
                    if (msg.startsWith("下载文件成功 用户:")) {
                        oneFile.count += 1;
                        oneFile.size += size;
                    } else if (msg.startsWith("归档下载文件成功 用户:")) {
                        compressFile.count += 1;
                        compressFile.size += size;
                    } else if (msg.startsWith("下载模板文件 用户:")) {
                        templateFile.count += 1;
                        templateFile.size += size;
                    }
                });
                return {
                    oneFile: oneFile,
                    compressFile: compressFile,
                    templateFile: templateFile
                };
            }
        },
        {
            /**
  * 通过空间判断是否限制上传
  * @param limitSize 可用空间
  * @param fileSize 已用空间
  */ key: "limitUploadBySpace",
            value: function limitUploadBySpace(limitSize, fileSize) {
                var limitSpace = LocalUserDB.getSiteConfig().limitSpace;
                return limitSpace && (limitSize === 0 || limitSize < fileSize);
            }
        },
        {
            key: "limitUploadByWallet",
            value: function limitUploadByWallet(balance) {
                var limitWallet = LocalUserDB.getSiteConfig().limitWallet;
                return limitWallet && balance <= 0;
            }
        },
        {
            key: "calculateQiniuPrice",
            value: function calculateQiniuPrice(download, ossSize) {
                var _LocalUserDB_getSiteConfig = LocalUserDB.getSiteConfig(), qiniuBackhaulTrafficPercentage = _LocalUserDB_getSiteConfig.qiniuBackhaulTrafficPercentage, qiniuCompressPrice = _LocalUserDB_getSiteConfig.qiniuCompressPrice, qiniuBackhaulTrafficPrice = _LocalUserDB_getSiteConfig.qiniuBackhaulTrafficPrice, qiniuOSSPrice = _LocalUserDB_getSiteConfig.qiniuOSSPrice, qiniuCDNPrice = _LocalUserDB_getSiteConfig.qiniuCDNPrice;
                var OSSPrice = B2GB(ossSize) * qiniuOSSPrice;
                var compressPrice = B2GB(download.compress.size) * qiniuCompressPrice;
                var downloadSize = B2GB(download.one.size + download.compress.size + download.template.size);
                var backhaulTrafficPrice = downloadSize * qiniuBackhaulTrafficPercentage * qiniuBackhaulTrafficPrice;
                var cdnPrice = downloadSize * qiniuCDNPrice;
                return {
                    ossPrice: formatPrice(OSSPrice),
                    compressPrice: formatPrice(compressPrice),
                    backhaulTrafficPrice: formatPrice(backhaulTrafficPrice),
                    cdnPrice: formatPrice(cdnPrice),
                    total: formatPrice(+formatPrice(OSSPrice) + +formatPrice(compressPrice) + +formatPrice(backhaulTrafficPrice) + +formatPrice(cdnPrice))
                };
            }
        },
        {
            key: "addFile",
            value: function addFile(file) {
                file.name = normalizeFileName(file.name);
                file.date = /* @__PURE__ */ new Date();
                return this.fileRepository.insert(file);
            }
        },
        {
            key: "getUserFiles",
            value: function getUserFiles() {
                var _this = this;
                return _async_to_generator(function() {
                    var id, files;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                id = _this.ctx.req.userInfo.id;
                                return [
                                    4,
                                    _this.fileRepository.findMany({
                                        userId: id,
                                        del: BOOLEAN.FALSE
                                    }, {
                                        order: {
                                            id: "DESC"
                                        }
                                    })
                                ];
                            case 1:
                                files = _state.sent();
                                return [
                                    2,
                                    files
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "findOneFile",
            value: function findOneFile(ops) {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        return [
                            2,
                            _this.fileRepository.findOne(_object_spread({
                                del: BOOLEAN.FALSE
                            }, ops))
                        ];
                    });
                })();
            }
        },
        {
            key: "deleteOneFile",
            value: function deleteOneFile(file) {
                var _this = this;
                return _async_to_generator(function() {
                    var _this_ctx_req_userInfo, logAccount, k, sameRecord, isRepeat;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _this_ctx_req_userInfo = _this.ctx.req.userInfo, logAccount = _this_ctx_req_userInfo.account;
                                if (!file) {
                                    _this.behaviorService.add("file", "删除文件失败 用户:".concat(logAccount, " 文件记录不存在"), {
                                        account: logAccount,
                                        fileId: file.id
                                    });
                                    throw publicError.file.notExist;
                                }
                                k = "easypicker2/".concat(file.taskKey, "/").concat(file.hash, "/").concat(file.name);
                                if (file.categoryKey) {
                                    k = file.categoryKey;
                                }
                                return [
                                    4,
                                    _this.fileRepository.findMany({
                                        taskKey: file.taskKey,
                                        hash: file.hash,
                                        name: file.name,
                                        del: BOOLEAN.FALSE
                                    })
                                ];
                            case 1:
                                sameRecord = _state.sent();
                                isRepeat = sameRecord.length > 1;
                                if (!isRepeat) {
                                    _this.localFileService.deleteObjByKey(k);
                                }
                                if (!file.ossDelTime) {
                                    file.ossDelTime = /* @__PURE__ */ new Date();
                                }
                                file.del = BOOLEAN.TRUE;
                                file.delTime = /* @__PURE__ */ new Date();
                                return [
                                    4,
                                    _this.fileRepository.update(file)
                                ];
                            case 2:
                                _state.sent();
                                _this.behaviorService.add("file", "删除文件提交记录成功 用户:".concat(logAccount, " 文件:").concat(file.name, " ").concat(isRepeat ? "还存在".concat(sameRecord.length - 1, "个重复文件") : "删除OSS资源"), {
                                    account: logAccount,
                                    name: file.name,
                                    taskKey: file.taskKey,
                                    hash: file.hash
                                });
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "getUserOverview",
            value: function getUserOverview(user2, options) {
                var _this = this;
                return _async_to_generator(function() {
                    var _user2, _user21, _ref, files, filesMap, downloadLog, moneyStartDay, fileInfo, ossCount, originFileSize, AMonthAgoSize, AQuarterAgoSize, AHalfYearAgoSize, fileSize, userTokens, _ref1, limitSize, limitUpload, percentage, _this_analyzeDownloadLog, oneFile, compressFile, templateFile, price, balance, isAdmin, limitWallet;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _ref = options || {}, files = _ref.files, filesMap = _ref.filesMap, downloadLog = _ref.downloadLog;
                                moneyStartDay = LocalUserDB.getSiteConfig().moneyStartDay;
                                if (!!files) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    _this.fileRepository.findMany({
                                        userId: user2.id
                                    })
                                ];
                            case 1:
                                files = _state.sent();
                                _state.label = 2;
                            case 2:
                                if (!!filesMap) return [
                                    3,
                                    4
                                ];
                                return [
                                    4,
                                    _this.localFileService.getFilesMap(files)
                                ];
                            case 3:
                                filesMap = _state.sent();
                                _state.label = 4;
                            case 4:
                                if (!!downloadLog) return [
                                    3,
                                    6
                                ];
                                return [
                                    4,
                                    _this.downloadLog(user2.account, {
                                        startTime: new Date(moneyStartDay)
                                    })
                                ];
                            case 5:
                                downloadLog = _state.sent();
                                _state.label = 6;
                            case 6:
                                fileInfo = files;
                                ossCount = 0;
                                originFileSize = 0;
                                AMonthAgoSize = 0;
                                AQuarterAgoSize = 0;
                                AHalfYearAgoSize = 0;
                                fileSize = fileInfo.reduce(function(pre, v) {
                                    var date = v.date;
                                    originFileSize += +v.size || 0;
                                    var ossKey = _this.getOssKey(v);
                                    var _ref = filesMap.get(ossKey) || filesMap.get(v.categoryKey) || {}, _ref_fsize = _ref.fsize, fsize = _ref_fsize === void 0 ? 0 : _ref_fsize;
                                    if (fsize) {
                                        ossCount += 1;
                                    }
                                    if ((0, import_dayjs2.default)(date).isBefore((0, import_dayjs2.default)().subtract(1, "month"))) {
                                        AMonthAgoSize += fsize;
                                    }
                                    if ((0, import_dayjs2.default)(date).isBefore((0, import_dayjs2.default)().subtract(3, "month"))) {
                                        AQuarterAgoSize += fsize;
                                    }
                                    if ((0, import_dayjs2.default)(date).isBefore((0, import_dayjs2.default)().subtract(6, "month"))) {
                                        AHalfYearAgoSize += fsize;
                                    }
                                    return pre + fsize;
                                }, 0);
                                return [
                                    4,
                                    _this.tokenService.getAllTokens(user2.account)
                                ];
                            case 7:
                                userTokens = _state.sent();
                                if (!userTokens.length) {
                                    _this.tokenService.checkAllToken(userTokens, user2.account);
                                }
                                limitSize = calculateSize((_ref1 = user2.power === USER_POWER.SUPER ? Math.max(1024, (_user2 = user2) === null || _user2 === void 0 ? void 0 : _user2.size) : (_user21 = user2) === null || _user21 === void 0 ? void 0 : _user21.size) !== null && _ref1 !== void 0 ? _ref1 : 2);
                                limitUpload = _this.limitUploadBySpace(limitSize, fileSize);
                                percentage = percentageValue(fileSize, limitSize);
                                _this_analyzeDownloadLog = _this.analyzeDownloadLog(downloadLog), oneFile = _this_analyzeDownloadLog.oneFile, compressFile = _this_analyzeDownloadLog.compressFile, templateFile = _this_analyzeDownloadLog.templateFile;
                                price = _this.calculateQiniuPrice({
                                    one: oneFile,
                                    compress: compressFile,
                                    template: templateFile
                                }, _this.getOSSFileSizeUntilNow(fileInfo, filesMap, {
                                    startTime: new Date(moneyStartDay)
                                }));
                                balance = +user2.wallet - +price.total;
                                isAdmin = user2.power === USER_POWER.SUPER;
                                limitWallet = _this.limitUploadByWallet(balance);
                                return [
                                    2,
                                    {
                                        fileCount: fileInfo.length,
                                        originFileSize: originFileSize,
                                        ossCount: ossCount,
                                        limitSize: user2.power === USER_POWER.SUPER ? "无限制" : formatSize(limitSize),
                                        maxSize: limitSize,
                                        limitUpload: isAdmin ? false : limitWallet || limitUpload,
                                        limitSpace: limitUpload,
                                        limitWallet: limitWallet,
                                        percentage: percentage,
                                        resources: formatSize(fileSize),
                                        monthAgoSize: formatSize(AMonthAgoSize),
                                        quarterAgoSize: formatSize(AQuarterAgoSize),
                                        halfYearSize: formatSize(AHalfYearAgoSize),
                                        onlineCount: userTokens.length,
                                        // 便于排序
                                        usage: fileSize,
                                        lastLoginTime: +new Date(user2.loginTime) || 0,
                                        oneFile: oneFile,
                                        compressFile: compressFile,
                                        templateFile: templateFile,
                                        downloadCount: oneFile.count + compressFile.count + templateFile.count,
                                        downloadSize: oneFile.size + compressFile.size + templateFile.size,
                                        price: price,
                                        cost: +price.total,
                                        wallet: user2.wallet || 0,
                                        // 剩余
                                        balance: balance.toFixed(2)
                                    }
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "withdrawFile",
            value: function withdrawFile(data) {
                var _this = this;
                return _async_to_generator(function() {
                    var taskKey, taskName, filename, hash, peopleName, info, taskInfo, limitPeople, files, passFiles, isDelOss, key, people;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                taskKey = data.taskKey, taskName = data.taskName, filename = data.filename, hash = data.hash, peopleName = data.peopleName, info = data.info;
                                return [
                                    4,
                                    _this.taskInfoService.getTaskInfo(taskKey)
                                ];
                            case 1:
                                taskInfo = _state.sent();
                                limitPeople = taskInfo.people === BOOLEAN.TRUE;
                                return [
                                    4,
                                    _this.fileRepository.findMany({
                                        del: BOOLEAN.FALSE,
                                        taskKey: taskKey,
                                        taskName: taskName,
                                        name: filename,
                                        hash: hash
                                    })
                                ];
                            case 2:
                                files = _state.sent();
                                files = files.filter(function(file) {
                                    return isSameInfo(file.info, info);
                                });
                                passFiles = files.filter(function(file) {
                                    return file.people === peopleName;
                                });
                                if (!passFiles.length) {
                                    _this.behaviorService.add("file", "撤回文件失败 ".concat(peopleName, " 文件:").concat(filename, " 信息不匹配"), {
                                        filename: filename,
                                        peopleName: peopleName,
                                        data: data
                                    });
                                    throw publicError.file.notExist;
                                }
                                isDelOss = passFiles.length === files.length;
                                if (isDelOss) {
                                    key = "easypicker2/".concat(taskKey, "/").concat(hash, "/").concat(filename);
                                    _this.localFileService.deleteObjByKey(key);
                                }
                                return [
                                    4,
                                    _this.fileRepository.updateSpecifyFields({
                                        id: (0, import_typeorm9.In)(passFiles.map(function(file) {
                                            return file.id;
                                        }))
                                    }, {
                                        del: BOOLEAN.TRUE,
                                        ossDelTime: /* @__PURE__ */ new Date(),
                                        delTime: /* @__PURE__ */ new Date()
                                    })
                                ];
                            case 3:
                                _state.sent();
                                _this.behaviorService.add("file", "撤回文件成功 文件:".concat(filename, " 删除记录:").concat(passFiles.length, " 删除OSS资源:").concat(isDelOss ? "是" : "否"), {
                                    limitPeople: limitPeople,
                                    isDelOss: isDelOss,
                                    filesCount: files.length,
                                    passFilesCount: passFiles.length,
                                    filename: filename,
                                    peopleName: peopleName,
                                    data: data
                                });
                                if (!peopleName) return [
                                    3,
                                    7
                                ];
                                return [
                                    4,
                                    _this.peopleRepository.findOne({
                                        name: peopleName,
                                        status: 1,
                                        taskKey: taskKey
                                    })
                                ];
                            case 4:
                                people = _state.sent();
                                if (!people) {
                                    _this.behaviorService.add("file", "姓名:".concat(peopleName, " 不存在"), {
                                        filename: filename,
                                        peopleName: peopleName,
                                        data: data
                                    });
                                    throw publicError.file.notExist;
                                }
                                return [
                                    4,
                                    _this.fileRepository.findMany({
                                        del: BOOLEAN.FALSE,
                                        people: peopleName,
                                        taskKey: taskKey
                                    })
                                ];
                            case 5:
                                people.status = _state.sent().length ? 1 : 0;
                                people.submitDate = /* @__PURE__ */ new Date();
                                return [
                                    4,
                                    _this.peopleRepository.update(people)
                                ];
                            case 6:
                                _state.sent();
                                _state.label = 7;
                            case 7:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "batchDelete",
            value: function batchDelete(ids) {
                var _this = this;
                return _async_to_generator(function() {
                    var _this_ctx_req_userInfo, userId, logAccount, files, keys, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _loop, _iterator, _step, err;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _this_ctx_req_userInfo = _this.ctx.req.userInfo, userId = _this_ctx_req_userInfo.id, logAccount = _this_ctx_req_userInfo.account;
                                return [
                                    4,
                                    _this.fileRepository.findMany({
                                        del: BOOLEAN.FALSE,
                                        userId: userId,
                                        id: (0, import_typeorm9.In)(ids)
                                    })
                                ];
                            case 1:
                                files = _state.sent();
                                if (files.length === 0) {
                                    return [
                                        2
                                    ];
                                }
                                keys = /* @__PURE__ */ new Set();
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                _state.label = 2;
                            case 2:
                                _state.trys.push([
                                    2,
                                    7,
                                    8,
                                    9
                                ]);
                                _loop = function() {
                                    var file, name, taskKey, hash, categoryKey, dbCount, delCount;
                                    return _ts_generator(this, function(_state) {
                                        switch(_state.label){
                                            case 0:
                                                file = _step.value;
                                                name = file.name, taskKey = file.taskKey, hash = file.hash, categoryKey = file.categoryKey;
                                                if (!categoryKey) return [
                                                    3,
                                                    1
                                                ];
                                                keys.add(categoryKey);
                                                return [
                                                    3,
                                                    3
                                                ];
                                            case 1:
                                                return [
                                                    4,
                                                    _this.fileRepository.count({
                                                        del: BOOLEAN.FALSE,
                                                        taskKey: taskKey,
                                                        hash: hash,
                                                        name: name
                                                    })
                                                ];
                                            case 2:
                                                dbCount = _state.sent();
                                                delCount = files.filter(function(v) {
                                                    return v.taskKey === taskKey && v.hash === hash && v.name === name;
                                                }).length;
                                                if (dbCount <= delCount) {
                                                    keys.add(_this.getOssKey(file));
                                                }
                                                _state.label = 3;
                                            case 3:
                                                return [
                                                    2
                                                ];
                                        }
                                    });
                                };
                                _iterator = files[Symbol.iterator]();
                                _state.label = 3;
                            case 3:
                                if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                                    3,
                                    6
                                ];
                                return [
                                    5,
                                    _ts_values(_loop())
                                ];
                            case 4:
                                _state.sent();
                                _state.label = 5;
                            case 5:
                                _iteratorNormalCompletion = true;
                                return [
                                    3,
                                    3
                                ];
                            case 6:
                                return [
                                    3,
                                    9
                                ];
                            case 7:
                                err = _state.sent();
                                _didIteratorError = true;
                                _iteratorError = err;
                                return [
                                    3,
                                    9
                                ];
                            case 8:
                                try {
                                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                                        _iterator.return();
                                    }
                                } finally{
                                    if (_didIteratorError) {
                                        throw _iteratorError;
                                    }
                                }
                                return [
                                    7
                                ];
                            case 9:
                                _this.localFileService.batchDeleteFiles(_to_consumable_array(keys));
                                return [
                                    4,
                                    _this.fileRepository.updateSpecifyFields({
                                        id: (0, import_typeorm9.In)(files.map(function(file) {
                                            return file.id;
                                        }))
                                    }, {
                                        del: BOOLEAN.TRUE,
                                        ossDelTime: /* @__PURE__ */ new Date(),
                                        delTime: /* @__PURE__ */ new Date()
                                    })
                                ];
                            case 10:
                                _state.sent();
                                _this.behaviorService.add("file", "批量删除文件成功 用户:".concat(logAccount, " 文件记录数量:").concat(files.length, " OSS资源数量:").concat(keys.size), {
                                    account: logAccount,
                                    length: files.length,
                                    ossCount: keys.size
                                });
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "checkSubmitInfo",
            value: // TODO：利用 cookie 优化
            function checkSubmitInfo(data) {
                var _this = this;
                return _async_to_generator(function() {
                    var taskKey, info, _data_name, name, files;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                taskKey = data.taskKey, info = data.info, _data_name = data.name, name = _data_name === void 0 ? "" : _data_name;
                                return [
                                    4,
                                    _this.fileRepository.findMany({
                                        del: BOOLEAN.FALSE,
                                        taskKey: taskKey,
                                        people: name
                                    })
                                ];
                            case 1:
                                files = _state.sent();
                                files = files.filter(function(v) {
                                    return isSameInfo(v.info, JSON.stringify(info));
                                });
                                _async_to_generator(function() {
                                    var task;
                                    return _ts_generator(this, function(_state) {
                                        switch(_state.label){
                                            case 0:
                                                return [
                                                    4,
                                                    _this.taskRepository.findOne({
                                                        k: taskKey
                                                    })
                                                ];
                                            case 1:
                                                task = _state.sent();
                                                if (task) {
                                                    _this.behaviorService.add("file", "查询是否提交过文件: ".concat(files.length > 0 ? "是" : "否", " 任务:").concat(task.name, " 数量:").concat(files.length), {
                                                        taskKey: taskKey,
                                                        taskName: task.name,
                                                        info: info,
                                                        count: files.length
                                                    });
                                                } else {
                                                    _this.behaviorService.add("file", "查询是否提交过文件: 任务 ".concat(taskKey, " 不存在"), {
                                                        taskKey: taskKey,
                                                        taskName: task.name,
                                                        info: info
                                                    });
                                                }
                                                return [
                                                    2
                                                ];
                                        }
                                    });
                                })();
                                return [
                                    2,
                                    {
                                        isSubmit: files.length > 0,
                                        txt: ""
                                    }
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return _a20;
}(), __name(_a20, "FileService"), _a20);
_ts_decorate18([
    (0, import_flash_wolves12.InjectCtx)(),
    _ts_metadata12("design:type", typeof Context === "undefined" ? Object : Context)
], FileService.prototype, "ctx", void 0);
_ts_decorate18([
    (0, import_flash_wolves12.Inject)(FileRepository),
    _ts_metadata12("design:type", typeof FileRepository === "undefined" ? Object : FileRepository)
], FileService.prototype, "fileRepository", void 0);
_ts_decorate18([
    (0, import_flash_wolves12.Inject)(LocalFileService),
    _ts_metadata12("design:type", typeof LocalFileService === "undefined" ? Object : LocalFileService)
], FileService.prototype, "localFileService", void 0);
_ts_decorate18([
    (0, import_flash_wolves12.Inject)(BehaviorService),
    _ts_metadata12("design:type", typeof BehaviorService === "undefined" ? Object : BehaviorService)
], FileService.prototype, "behaviorService", void 0);
_ts_decorate18([
    (0, import_flash_wolves12.Inject)(TaskRepository),
    _ts_metadata12("design:type", typeof TaskRepository === "undefined" ? Object : TaskRepository)
], FileService.prototype, "taskRepository", void 0);
_ts_decorate18([
    (0, import_flash_wolves12.Inject)(UserRepository),
    _ts_metadata12("design:type", typeof UserRepository === "undefined" ? Object : UserRepository)
], FileService.prototype, "userRepository", void 0);
_ts_decorate18([
    (0, import_flash_wolves12.Inject)(TokenService),
    _ts_metadata12("design:type", typeof TokenService === "undefined" ? Object : TokenService)
], FileService.prototype, "tokenService", void 0);
_ts_decorate18([
    (0, import_flash_wolves12.Inject)(TaskInfoService),
    _ts_metadata12("design:type", typeof TaskInfoService === "undefined" ? Object : TaskInfoService)
], FileService.prototype, "taskInfoService", void 0);
_ts_decorate18([
    (0, import_flash_wolves12.Inject)(PeopleRepository),
    _ts_metadata12("design:type", typeof PeopleRepository === "undefined" ? Object : PeopleRepository)
], FileService.prototype, "peopleRepository", void 0);
FileService = _ts_decorate18([
    (0, import_flash_wolves12.Provide)()
], FileService);
// src/service/taskService.ts
function _ts_decorate19(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate19, "_ts_decorate");
function _ts_metadata13(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata13, "_ts_metadata");
var _a21;
var TaskService = (_a21 = /*#__PURE__*/ function() {
    "use strict";
    function _a21() {
        _class_call_check(this, _a21);
        __publicField(this, "Ctx");
        __publicField(this, "taskRepository");
        __publicField(this, "taskInfoService");
        __publicField(this, "behaviorService");
        __publicField(this, "fileService");
    }
    _create_class(_a21, [
        {
            key: "createTask",
            value: function createTask(task) {
                var _this = this;
                return _async_to_generator(function() {
                    var taskInfo;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                task.k = getUniqueKey();
                                taskInfo = new TaskInfo();
                                taskInfo.taskKey = task.k;
                                taskInfo.userId = task.userId;
                                return [
                                    4,
                                    _this.taskInfoService.createTaskInfo(taskInfo)
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    4,
                                    _this.taskRepository.insert(task)
                                ];
                            case 2:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "getTasks",
            value: function getTasks(userId, account) {
                var _this = this;
                return _async_to_generator(function() {
                    var data, tasks, recentSubmitLogCount, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, t, files, err;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _this.taskRepository.findWithSpecifyColumn({
                                        userId: userId,
                                        del: BOOLEAN.FALSE
                                    }, [
                                        "name",
                                        "categoryKey",
                                        "k"
                                    ])
                                ];
                            case 1:
                                data = _state.sent();
                                tasks = data.map(function(t) {
                                    var name = t.name, category = t.categoryKey, key = t.k;
                                    return {
                                        name: name,
                                        category: category,
                                        key: key,
                                        recentLog: []
                                    };
                                });
                                recentSubmitLogCount = 4;
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                _state.label = 2;
                            case 2:
                                _state.trys.push([
                                    2,
                                    7,
                                    8,
                                    9
                                ]);
                                _iterator = tasks[Symbol.iterator]();
                                _state.label = 3;
                            case 3:
                                if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                                    3,
                                    6
                                ];
                                t = _step.value;
                                return [
                                    4,
                                    _this.fileService.selectFilesLimitCount({
                                        taskKey: t.key
                                    }, recentSubmitLogCount)
                                ];
                            case 4:
                                files = _state.sent();
                                t.recentLog = files.map(function(v) {
                                    return {
                                        filename: v.name,
                                        date: v.date
                                    };
                                });
                                _state.label = 5;
                            case 5:
                                _iteratorNormalCompletion = true;
                                return [
                                    3,
                                    3
                                ];
                            case 6:
                                return [
                                    3,
                                    9
                                ];
                            case 7:
                                err = _state.sent();
                                _didIteratorError = true;
                                _iteratorError = err;
                                return [
                                    3,
                                    9
                                ];
                            case 8:
                                try {
                                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                                        _iterator.return();
                                    }
                                } finally{
                                    if (_didIteratorError) {
                                        throw _iteratorError;
                                    }
                                }
                                return [
                                    7
                                ];
                            case 9:
                                _this.behaviorService.add("task", "获取任务列表 用户:".concat(account), {
                                    account: account
                                });
                                return [
                                    2,
                                    {
                                        tasks: tasks
                                    }
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "getTaskByKey",
            value: function getTaskByKey(key) {
                var _this = this;
                return _async_to_generator(function() {
                    var task;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _this.taskRepository.findOne({
                                        k: key,
                                        del: BOOLEAN.FALSE
                                    })
                                ];
                            case 1:
                                task = _state.sent();
                                if (!task) {
                                    _this.behaviorService.add("task", "获取任务详细信息, 任务不存在", {
                                        key: key
                                    });
                                    throw taskError.noExist;
                                }
                                _this.behaviorService.add("task", "获取任务详细信息, ".concat(task.name), {
                                    name: task.name
                                });
                                return [
                                    2,
                                    {
                                        name: task.name,
                                        category: task.categoryKey,
                                        userId: task.userId
                                    }
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "delTask",
            value: function delTask(key) {
                var _this = this;
                return _async_to_generator(function() {
                    var _task, _this_Ctx_req_userInfo, id, logAccount, task, logTaskName;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _this_Ctx_req_userInfo = _this.Ctx.req.userInfo, id = _this_Ctx_req_userInfo.id, logAccount = _this_Ctx_req_userInfo.account;
                                return [
                                    4,
                                    _this.taskRepository.findOne({
                                        userId: id,
                                        k: key,
                                        del: BOOLEAN.FALSE
                                    })
                                ];
                            case 1:
                                task = _state.sent();
                                if (!task) return [
                                    3,
                                    3
                                ];
                                if (task.categoryKey !== "trash") {
                                    task.categoryKey = "trash";
                                } else {
                                    task.del = BOOLEAN.TRUE;
                                }
                                return [
                                    4,
                                    _this.taskRepository.update(task)
                                ];
                            case 2:
                                _state.sent();
                                _state.label = 3;
                            case 3:
                                logTaskName = (_task = task) === null || _task === void 0 ? void 0 : _task.name;
                                _this.behaviorService.add("task", "删除指定任务 用户:".concat(logAccount, " 任务名:").concat(logTaskName), {
                                    account: logAccount,
                                    name: logTaskName
                                });
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "updateTask",
            value: function updateTask(key, payload) {
                var _this = this;
                return _async_to_generator(function() {
                    var name, category, _this_Ctx_req_userInfo, id, logAccount, task;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                name = payload.name, category = payload.category;
                                _this_Ctx_req_userInfo = _this.Ctx.req.userInfo, id = _this_Ctx_req_userInfo.id, logAccount = _this_Ctx_req_userInfo.account;
                                return [
                                    4,
                                    _this.taskRepository.findOne({
                                        userId: id,
                                        k: key
                                    })
                                ];
                            case 1:
                                task = _state.sent();
                                if (!task) return [
                                    3,
                                    3
                                ];
                                if (name) {
                                    task.name = name;
                                }
                                if (category !== void 0) {
                                    task.categoryKey = category;
                                }
                                if (!(name || category !== void 0)) return [
                                    3,
                                    3
                                ];
                                return [
                                    4,
                                    _this.taskRepository.update(task)
                                ];
                            case 2:
                                _state.sent();
                                _state.label = 3;
                            case 3:
                                _this.behaviorService.add("task", "更新任务分类/名称 用户:".concat(logAccount, " 原:").concat(task.name, " 新:").concat(task.name), {
                                    account: logAccount,
                                    oldName: task.name,
                                    newName: task.name
                                });
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return _a21;
}(), __name(_a21, "TaskService"), _a21);
_ts_decorate19([
    (0, import_flash_wolves13.InjectCtx)(),
    _ts_metadata13("design:type", typeof Context === "undefined" ? Object : Context)
], TaskService.prototype, "Ctx", void 0);
_ts_decorate19([
    (0, import_flash_wolves13.Inject)(TaskRepository),
    _ts_metadata13("design:type", typeof TaskRepository === "undefined" ? Object : TaskRepository)
], TaskService.prototype, "taskRepository", void 0);
_ts_decorate19([
    (0, import_flash_wolves13.Inject)(TaskInfoService),
    _ts_metadata13("design:type", typeof TaskInfoService === "undefined" ? Object : TaskInfoService)
], TaskService.prototype, "taskInfoService", void 0);
_ts_decorate19([
    (0, import_flash_wolves13.Inject)(BehaviorService),
    _ts_metadata13("design:type", typeof BehaviorService === "undefined" ? Object : BehaviorService)
], TaskService.prototype, "behaviorService", void 0);
_ts_decorate19([
    (0, import_flash_wolves13.Inject)(FileService),
    _ts_metadata13("design:type", typeof FileService === "undefined" ? Object : FileService)
], TaskService.prototype, "fileService", void 0);
TaskService = _ts_decorate19([
    (0, import_flash_wolves13.Provide)()
], TaskService);
// src/service/publicService.ts
var import_flash_wolves14 = require("flash-wolves");
// src/utils/randUtil.ts
var random = Math.random, round = Math.round;
function randomNumStr(length) {
    var str = "";
    var i = 0;
    while(i < length){
        i += 1;
        str += round(random() * 100) % 10;
    }
    return str;
}
__name(randomNumStr, "randomNumStr");
// src/utils/mailUtil.ts
var import_nodemailer = __toESM(require("nodemailer"));
var transporter = null;
var transporterKey = "";
function getConfig() {
    var cfg = LocalUserDB.getUserConfigByType("mail");
    if (!cfg || !cfg.smtpHost) {
        throw new Error("请先在系统邮箱设置中配置 SMTP 信息");
    }
    return {
        smtpHost: cfg.smtpHost,
        smtpPort: cfg.smtpPort,
        useSSL: Boolean(cfg.useSSL),
        account: cfg.account,
        password: cfg.password,
        from: cfg.from,
        senderName: cfg.senderName,
        subject: cfg.subject,
        template: cfg.template
    };
}
__name(getConfig, "getConfig");
function buildTransporterKey(cfg) {
    return [
        cfg.smtpHost,
        cfg.smtpPort,
        cfg.account,
        cfg.useSSL
    ].join("-");
}
__name(buildTransporterKey, "buildTransporterKey");
function createTransporter(cfg) {
    return import_nodemailer.default.createTransport({
        host: cfg.smtpHost,
        port: Number(cfg.smtpPort),
        secure: cfg.useSSL,
        auth: {
            user: cfg.account,
            pass: cfg.password
        }
    });
}
__name(createTransporter, "createTransporter");
function ensureTransporter(cfg) {
    return _ensureTransporter.apply(this, arguments);
}
function _ensureTransporter() {
    _ensureTransporter = _async_to_generator(function(cfg) {
        var key;
        return _ts_generator(this, function(_state) {
            key = buildTransporterKey(cfg);
            if (transporter && transporterKey === key) {
                return [
                    2,
                    transporter
                ];
            }
            transporter = createTransporter(cfg);
            transporterKey = key;
            return [
                2,
                transporter
            ];
        });
    });
    return _ensureTransporter.apply(this, arguments);
}
__name(ensureTransporter, "ensureTransporter");
function sendMail(options, overrideConfig) {
    return _sendMail.apply(this, arguments);
}
function _sendMail() {
    _sendMail = _async_to_generator(function(options, overrideConfig) {
        var cfg, tp, subject, html, fromAddress, sender;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    cfg = overrideConfig || getConfig();
                    if (!overrideConfig) return [
                        3,
                        1
                    ];
                    tp = createTransporter(cfg);
                    return [
                        3,
                        3
                    ];
                case 1:
                    return [
                        4,
                        ensureTransporter(cfg)
                    ];
                case 2:
                    tp = _state.sent();
                    _state.label = 3;
                case 3:
                    subject = options.subject || cfg.subject || "EasyPicker 通知";
                    html = options.html || cfg.template;
                    fromAddress = cfg.from || cfg.account;
                    sender = cfg.senderName ? '"'.concat(cfg.senderName, '" <').concat(fromAddress, ">") : fromAddress;
                    return [
                        4,
                        tp.sendMail({
                            from: sender,
                            to: options.to,
                            subject: subject,
                            text: options.text,
                            html: html
                        })
                    ];
                case 4:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    });
    return _sendMail.apply(this, arguments);
}
__name(sendMail, "sendMail");
function getMailConfig() {
    return getConfig();
}
__name(getMailConfig, "getMailConfig");
function resetMailTransporter() {
    transporter = null;
    transporterKey = "";
}
__name(resetMailTransporter, "resetMailTransporter");
// src/service/publicService.ts
function _ts_decorate20(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate20, "_ts_decorate");
function _ts_metadata14(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata14, "_ts_metadata");
var _a22;
var PublicService = (_a22 = /*#__PURE__*/ function() {
    "use strict";
    function _a22() {
        _class_call_check(this, _a22);
        __publicField(this, "ctx");
        __publicField(this, "behaviorService");
        __publicField(this, "tokenService");
        __publicField(this, "userRepository");
        __publicField(this, "localFileService");
    }
    _create_class(_a22, [
        {
            key: "getVerifyCode",
            value: /**
  * 获取邮箱验证码
  * @param email 目标邮箱
  * @param scene 使用场景:
  *  - register: 注册 / 绑定邮箱，要求邮箱未被使用
  *  - login/reset: 登录验证码 / 重置密码，要求邮箱已存在
  *  - default: 其他场景，不强制校验存在性
  */ function getVerifyCode(email) {
                var scene = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "default";
                var _this = this;
                return _async_to_generator(function() {
                    var user2, code, cfg, htmlTemplate, html, maskedEmail;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!rEmail.test(email)) {
                                    _this.behaviorService.add("public", "获取验证码 邮箱:".concat(email, " 格式不正确"), {
                                        email: email
                                    });
                                    throw UserError.email.fault;
                                }
                                if (!(scene === "login" || scene === "reset")) return [
                                    3,
                                    4
                                ];
                                return [
                                    4,
                                    _this.userRepository.findOne({
                                        email: email
                                    })
                                ];
                            case 1:
                                user2 = _state.sent();
                                if (!!user2) return [
                                    3,
                                    3
                                ];
                                return [
                                    4,
                                    _this.userRepository.findOne({
                                        account: email
                                    })
                                ];
                            case 2:
                                user2 = _state.sent();
                                _state.label = 3;
                            case 3:
                                if (!user2) {
                                    _this.behaviorService.add("public", "获取验证码 邮箱:".concat(email, " 不存在"), {
                                        email: email
                                    });
                                    throw UserError.email.noExist;
                                }
                                _state.label = 4;
                            case 4:
                                code = randomNumStr(4);
                                cfg = getMailConfig();
                                htmlTemplate = cfg.template || "<p>您正在请求 EasyPicker 验证码，请在 2 分钟内使用。验证码：<strong>".concat(code, "</strong></p>");
                                html = htmlTemplate.replace(/{{\s*code\s*}}/gi, code);
                                maskedEmail = email.replace(/(.{2}).+(@.+)/, function(_, prefix, suffix) {
                                    return "".concat(prefix, "***").concat(suffix);
                                });
                                _this.behaviorService.add("public", "获取验证码 邮箱:".concat(maskedEmail, " 验证码:").concat(code, " 成功"), {
                                    email: maskedEmail,
                                    code: code
                                });
                                return [
                                    4,
                                    sendMail({
                                        to: email,
                                        subject: cfg.subject || "EasyPicker 验证码",
                                        html: html
                                    })
                                ];
                            case 5:
                                _state.sent();
                                _this.tokenService.setVerifyCode(email, code);
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "reportPV",
            value: function reportPV() {
                var _this = this;
                var _req_body;
                var req = this.ctx.req;
                var handler = /* @__PURE__ */ __name(function(path9) {
                    if (!path9) {
                        return;
                    }
                    try {
                        _this.behaviorService.addPV(path9);
                    } catch (error) {
                        var _error;
                        console.warn("[public/report/pv] skip pv log:", ((_error = error) === null || _error === void 0 ? void 0 : _error.message) || error);
                    }
                }, "handler");
                if (req.method === "GET") {
                    var _req_query;
                    handler((_req_query = req.query) === null || _req_query === void 0 ? void 0 : _req_query.path);
                    return import_flash_wolves14.Response.plain("<h1>ok</h1>", "text/html;charset=utf-8");
                }
                handler((_req_body = req.body) === null || _req_body === void 0 ? void 0 : _req_body.path);
            }
        },
        {
            key: "checkEmailIsExist",
            value: function checkEmailIsExist(email) {
                var _this = this;
                return _async_to_generator(function() {
                    var user2;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!rEmail.test(email)) {
                                    _this.behaviorService.add("public", "检查邮箱是否存在 邮箱:".concat(email, " 格式不正确"), {
                                        email: email
                                    });
                                    return [
                                        2,
                                        import_flash_wolves14.Response.failWithError(UserError.email.fault)
                                    ];
                                }
                                return [
                                    4,
                                    _this.userRepository.findOne({
                                        email: email
                                    })
                                ];
                            case 1:
                                user2 = _state.sent();
                                if (!!user2) return [
                                    3,
                                    3
                                ];
                                return [
                                    4,
                                    _this.userRepository.findOne({
                                        account: email
                                    })
                                ];
                            case 2:
                                user2 = _state.sent();
                                _state.label = 3;
                            case 3:
                                if (user2) {
                                    _this.behaviorService.add("public", "检查邮箱是否存在 邮箱:".concat(email, " 已存在"), {
                                        email: email
                                    });
                                    throw UserError.email.exist;
                                }
                                _this.behaviorService.add("public", "检查邮箱是否存在 邮箱:".concat(email, " 不存在"), {
                                    email: email
                                });
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "getTipImage",
            value: function getTipImage(key, data) {
                var _this = this;
                return _async_to_generator(function() {
                    var _LocalUserDB_getSiteConfig, expiredTime;
                    return _ts_generator(this, function(_state) {
                        expiredTime = getQiniuFileUrlExpiredTime(((_LocalUserDB_getSiteConfig = LocalUserDB.getSiteConfig()) === null || _LocalUserDB_getSiteConfig === void 0 ? void 0 : _LocalUserDB_getSiteConfig.downloadOneExpired) || 1);
                        return [
                            2,
                            Promise.all(data.map(function() {
                                var _ref = _async_to_generator(function(v) {
                                    var tipKey, cover, preview;
                                    return _ts_generator(this, function(_state) {
                                        switch(_state.label){
                                            case 0:
                                                tipKey = "easypicker2/tip/".concat(key, "/").concat(v.uid, "/").concat(v.name);
                                                return [
                                                    4,
                                                    _this.localFileService.getImagePreviewUrl(tipKey, "cover", expiredTime, _this.ctx.req)
                                                ];
                                            case 1:
                                                cover = _state.sent();
                                                return [
                                                    4,
                                                    _this.localFileService.getImagePreviewUrl(tipKey, "preview", expiredTime, _this.ctx.req)
                                                ];
                                            case 2:
                                                preview = _state.sent();
                                                return [
                                                    2,
                                                    {
                                                        cover: cover,
                                                        preview: preview
                                                    }
                                                ];
                                        }
                                    });
                                });
                                return function(v) {
                                    return _ref.apply(this, arguments);
                                };
                            }()))
                        ];
                    });
                })();
            }
        }
    ]);
    return _a22;
}(), __name(_a22, "PublicService"), _a22);
_ts_decorate20([
    (0, import_flash_wolves14.InjectCtx)(),
    _ts_metadata14("design:type", typeof Context === "undefined" ? Object : Context)
], PublicService.prototype, "ctx", void 0);
_ts_decorate20([
    (0, import_flash_wolves14.Inject)(BehaviorService),
    _ts_metadata14("design:type", typeof BehaviorService === "undefined" ? Object : BehaviorService)
], PublicService.prototype, "behaviorService", void 0);
_ts_decorate20([
    (0, import_flash_wolves14.Inject)(TokenService),
    _ts_metadata14("design:type", typeof TokenService === "undefined" ? Object : TokenService)
], PublicService.prototype, "tokenService", void 0);
_ts_decorate20([
    (0, import_flash_wolves14.Inject)(UserRepository),
    _ts_metadata14("design:type", typeof UserRepository === "undefined" ? Object : UserRepository)
], PublicService.prototype, "userRepository", void 0);
_ts_decorate20([
    (0, import_flash_wolves14.Inject)(LocalFileService),
    _ts_metadata14("design:type", typeof LocalFileService === "undefined" ? Object : LocalFileService)
], PublicService.prototype, "localFileService", void 0);
PublicService = _ts_decorate20([
    (0, import_flash_wolves14.Provide)()
], PublicService);
// src/service/categoryService.ts
var import_flash_wolves16 = require("flash-wolves");
// src/db/categoryDb.ts
var import_flash_wolves15 = require("flash-wolves");
function _ts_decorate21(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate21, "_ts_decorate");
var _a23;
var CategoryRepository = (_a23 = /*#__PURE__*/ function(BaseRepository) {
    "use strict";
    _inherits(_a23, BaseRepository);
    var _super = _create_super(_a23);
    function _a23() {
        _class_call_check(this, _a23);
        var _this;
        _this = _super.call.apply(_super, [
            this
        ].concat(Array.prototype.slice.call(arguments)));
        __publicField(_assert_this_initialized(_this), "repository", AppDataSource.getRepository(Category));
        __publicField(_assert_this_initialized(_this), "entityName", Category.name);
        return _this;
    }
    return _a23;
}(BaseRepository), __name(_a23, "CategoryRepository"), _a23);
CategoryRepository = _ts_decorate21([
    (0, import_flash_wolves15.Provide)()
], CategoryRepository);
// src/service/categoryService.ts
function _ts_decorate22(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate22, "_ts_decorate");
function _ts_metadata15(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata15, "_ts_metadata");
var _a24;
var CategoryService = (_a24 = /*#__PURE__*/ function() {
    "use strict";
    function _a24() {
        _class_call_check(this, _a24);
        __publicField(this, "ctx");
        __publicField(this, "categoryRepository");
        __publicField(this, "taskRepository");
        __publicField(this, "behaviorService");
    }
    _create_class(_a24, [
        {
            key: "createCategory",
            value: function createCategory(name) {
                var _this = this;
                return _async_to_generator(function() {
                    var _this_ctx_req_userInfo, userId, logAccount, categories, category;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _this_ctx_req_userInfo = _this.ctx.req.userInfo, userId = _this_ctx_req_userInfo.id, logAccount = _this_ctx_req_userInfo.account;
                                return [
                                    4,
                                    _this.categoryRepository.findMany({
                                        userId: userId,
                                        name: name
                                    })
                                ];
                            case 1:
                                categories = _state.sent();
                                if (categories.length !== 0) {
                                    _this.behaviorService.add("category", "创建分类失败(已存在) 用户:".concat(logAccount, " 名称:").concat(name), {
                                        name: name,
                                        account: logAccount
                                    });
                                    throw CategoryError.exist;
                                }
                                _this.behaviorService.add("category", "创建分类成功 用户:".concat(logAccount, " 名称:").concat(name), {
                                    name: name,
                                    account: logAccount
                                });
                                category = new Category();
                                category.userId = userId;
                                category.name = name;
                                category.k = getUniqueKey();
                                return [
                                    4,
                                    _this.categoryRepository.insert(category)
                                ];
                            case 2:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "getList",
            value: function getList() {
                var _this = this;
                return _async_to_generator(function() {
                    var _this_ctx_req_userInfo, userId, logAccount, categories;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _this_ctx_req_userInfo = _this.ctx.req.userInfo, userId = _this_ctx_req_userInfo.id, logAccount = _this_ctx_req_userInfo.account;
                                _this.behaviorService.add("category", "获取分类列表 用户:".concat(logAccount), {
                                    account: logAccount
                                });
                                return [
                                    4,
                                    _this.categoryRepository.findMany({
                                        userId: userId
                                    })
                                ];
                            case 1:
                                categories = _state.sent();
                                categories.forEach(function(v) {
                                    delete v.userId;
                                });
                                return [
                                    2,
                                    {
                                        categories: categories
                                    }
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "deleteCategory",
            value: function deleteCategory(key) {
                var _this = this;
                return _async_to_generator(function() {
                    var _this_ctx_req_userInfo, userId, logAccount, c;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _this_ctx_req_userInfo = _this.ctx.req.userInfo, userId = _this_ctx_req_userInfo.id, logAccount = _this_ctx_req_userInfo.account;
                                return [
                                    4,
                                    _this.categoryRepository.findOne({
                                        userId: userId,
                                        k: key
                                    })
                                ];
                            case 1:
                                c = _state.sent();
                                if (!c) return [
                                    3,
                                    4
                                ];
                                return [
                                    4,
                                    _this.categoryRepository.delete({
                                        id: c.id
                                    })
                                ];
                            case 2:
                                _state.sent();
                                return [
                                    4,
                                    _this.taskRepository.updateSpecifyFields({
                                        categoryKey: key
                                    }, {
                                        categoryKey: "default"
                                    })
                                ];
                            case 3:
                                _state.sent();
                                _this.behaviorService.add("category", "删除指定分类 用户:".concat(logAccount, " 名称:").concat(c.name), {
                                    account: logAccount,
                                    name: c.name
                                });
                                _state.label = 4;
                            case 4:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return _a24;
}(), __name(_a24, "CategoryService"), _a24);
_ts_decorate22([
    (0, import_flash_wolves16.InjectCtx)(),
    _ts_metadata15("design:type", typeof import_flash_wolves16.Context === "undefined" ? Object : import_flash_wolves16.Context)
], CategoryService.prototype, "ctx", void 0);
_ts_decorate22([
    (0, import_flash_wolves16.Inject)(CategoryRepository),
    _ts_metadata15("design:type", typeof CategoryRepository === "undefined" ? Object : CategoryRepository)
], CategoryService.prototype, "categoryRepository", void 0);
_ts_decorate22([
    (0, import_flash_wolves16.Inject)(TaskRepository),
    _ts_metadata15("design:type", typeof TaskRepository === "undefined" ? Object : TaskRepository)
], CategoryService.prototype, "taskRepository", void 0);
_ts_decorate22([
    (0, import_flash_wolves16.Inject)(BehaviorService),
    _ts_metadata15("design:type", typeof BehaviorService === "undefined" ? Object : BehaviorService)
], CategoryService.prototype, "behaviorService", void 0);
CategoryService = _ts_decorate22([
    (0, import_flash_wolves16.Provide)()
], CategoryService);
// src/service/superUserService.ts
var import_flash_wolves17 = require("flash-wolves");
function _ts_decorate23(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate23, "_ts_decorate");
function _ts_metadata16(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata16, "_ts_metadata");
var _a25;
var SuperUserService = (_a25 = /*#__PURE__*/ function() {
    "use strict";
    function _a25() {
        _class_call_check(this, _a25);
        __publicField(this, "tokenService");
    }
    _create_class(_a25, [
        {
            key: "logout",
            value: function logout(account) {
                var _this = this;
                return _async_to_generator(function() {
                    var tokens, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, token;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _this.tokenService.getAllTokens(account)
                                ];
                            case 1:
                                tokens = _state.sent();
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                try {
                                    for(_iterator = tokens[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                        token = _step.value;
                                        _this.tokenService.expiredRedisKey(token);
                                    }
                                } catch (err) {
                                    _didIteratorError = true;
                                    _iteratorError = err;
                                } finally{
                                    try {
                                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                                            _iterator.return();
                                        }
                                    } finally{
                                        if (_didIteratorError) {
                                            throw _iteratorError;
                                        }
                                    }
                                }
                                _this.tokenService.expiredRedisKey(_this.tokenService.onlineTokenKey(account));
                                return [
                                    2,
                                    account
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return _a25;
}(), __name(_a25, "SuperUserService"), _a25);
_ts_decorate23([
    (0, import_flash_wolves17.Inject)(TokenService),
    _ts_metadata16("design:type", typeof TokenService === "undefined" ? Object : TokenService)
], SuperUserService.prototype, "tokenService", void 0);
SuperUserService = _ts_decorate23([
    (0, import_flash_wolves17.Provide)()
], SuperUserService);
// src/service/peopleService.ts
var import_flash_wolves18 = require("flash-wolves");
var import_typeorm10 = require("typeorm");
function _ts_decorate24(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate24, "_ts_decorate");
function _ts_metadata17(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata17, "_ts_metadata");
var _a26;
var PeopleService = (_a26 = /*#__PURE__*/ function() {
    "use strict";
    function _a26() {
        _class_call_check(this, _a26);
        __publicField(this, "ctx");
        __publicField(this, "peopleRepository");
        __publicField(this, "taskRepository");
        __publicField(this, "behaviorService");
        __publicField(this, "taskInfoRepository");
    }
    _create_class(_a26, [
        {
            key: "addPeople",
            value: function addPeople(key, name) {
                var _this = this;
                return _async_to_generator(function() {
                    var user2, exist, people;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                user2 = _this.ctx.req.userInfo;
                                return [
                                    4,
                                    _this.peopleRepository.findOne({
                                        taskKey: key,
                                        userId: user2.id,
                                        name: name
                                    })
                                ];
                            case 1:
                                exist = !!_state.sent();
                                _this.behaviorService.add("people", "直接添加成员".concat(exist ? "失败" : "成功", ": ").concat(name), {
                                    name: name,
                                    exist: exist
                                });
                                if (exist) {
                                    throw peopleError.exist;
                                }
                                people = new People();
                                people.name = name;
                                people.taskKey = key;
                                people.userId = user2.id;
                                return [
                                    4,
                                    _this.peopleRepository.insert(people)
                                ];
                            case 2:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "checkPeopleIsExist",
            value: function checkPeopleIsExist(key, name) {
                var _this = this;
                return _async_to_generator(function() {
                    var task, people, exist;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _this.taskRepository.findOne({
                                        k: key
                                    })
                                ];
                            case 1:
                                task = _state.sent();
                                if (!task) {
                                    return [
                                        2,
                                        false
                                    ];
                                }
                                return [
                                    4,
                                    _this.peopleRepository.findOne({
                                        taskKey: key,
                                        name: name
                                    })
                                ];
                            case 2:
                                people = _state.sent();
                                exist = !!people;
                                _this.behaviorService.add("people", "查询是否拥有提交权限 任务:".concat(task.name, " 成员姓名:").concat(name, " 权限:").concat(exist ? "有" : "无"), {
                                    taskName: task.name,
                                    name: name,
                                    exist: exist
                                });
                                return [
                                    2,
                                    exist
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "getUsefulTemplate",
            value: function getUsefulTemplate(key) {
                var _this = this;
                return _async_to_generator(function() {
                    var user2, taskKeyList, taskInfo, people, data;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _this.behaviorService.add("people", "查询可用的成员列表模板", {
                                    taskKey: key
                                });
                                user2 = _this.ctx.req.userInfo;
                                return [
                                    4,
                                    _this.taskInfoRepository.findWithSpecifyColumn({
                                        userId: user2.id,
                                        limitPeople: 1
                                    }, [
                                        "taskKey"
                                    ])
                                ];
                            case 1:
                                taskKeyList = _state.sent().filter(function(v) {
                                    return v.taskKey !== key;
                                }).map(function(v) {
                                    return v.taskKey;
                                });
                                if (!taskKeyList.length) {
                                    return [
                                        2,
                                        []
                                    ];
                                }
                                return [
                                    4,
                                    _this.taskRepository.findWithSpecifyColumn({
                                        k: (0, import_typeorm10.In)(taskKeyList)
                                    }, [
                                        "k",
                                        "name"
                                    ])
                                ];
                            case 2:
                                taskInfo = _state.sent();
                                return [
                                    4,
                                    _this.peopleRepository.findWithSpecifyColumn({
                                        taskKey: (0, import_typeorm10.In)(taskKeyList)
                                    }, [
                                        "taskKey",
                                        "name"
                                    ])
                                ];
                            case 3:
                                people = _state.sent();
                                data = taskInfo.map(function(v) {
                                    var count = people.filter(function(p) {
                                        return p.taskKey === v.k;
                                    }).length;
                                    return {
                                        taskKey: v.k,
                                        name: v.name,
                                        count: count
                                    };
                                });
                                return [
                                    2,
                                    data
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "importPeopleFromTpl",
            value: function importPeopleFromTpl(taskKey, tplKey, type) {
                var _this = this;
                return _async_to_generator(function() {
                    var fail, success, user2, people, _success, nowPeople, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, p;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                fail = [];
                                success = [];
                                if (taskKey === tplKey) {
                                    _this.behaviorService.error("非法导入人员模板", new Error("非法导入人员模板").stack);
                                    return [
                                        2,
                                        {
                                            success: success.length,
                                            fail: fail
                                        }
                                    ];
                                }
                                user2 = _this.ctx.req.userInfo;
                                return [
                                    4,
                                    _this.peopleRepository.findWithSpecifyColumn({
                                        taskKey: tplKey,
                                        userId: user2.id
                                    }, [
                                        "name"
                                    ])
                                ];
                            case 1:
                                people = _state.sent();
                                if (!(type === "override")) return [
                                    3,
                                    3
                                ];
                                return [
                                    4,
                                    _this.peopleRepository.delete({
                                        taskKey: taskKey,
                                        userId: user2.id
                                    })
                                ];
                            case 2:
                                _state.sent();
                                (_success = success).push.apply(_success, _to_consumable_array(people.map(function(v) {
                                    return v.name;
                                })));
                                _state.label = 3;
                            case 3:
                                if (!(type === "add")) return [
                                    3,
                                    5
                                ];
                                return [
                                    4,
                                    _this.peopleRepository.findWithSpecifyColumn({
                                        userId: user2.id,
                                        taskKey: taskKey
                                    }, [
                                        "name"
                                    ])
                                ];
                            case 4:
                                nowPeople = _state.sent().map(function(v) {
                                    return v.name;
                                });
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                try {
                                    for(_iterator = people[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                        p = _step.value;
                                        if (nowPeople.includes(p.name)) {
                                            fail.push(p.name);
                                        } else {
                                            success.push(p.name);
                                        }
                                    }
                                } catch (err) {
                                    _didIteratorError = true;
                                    _iteratorError = err;
                                } finally{
                                    try {
                                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                                            _iterator.return();
                                        }
                                    } finally{
                                        if (_didIteratorError) {
                                            throw _iteratorError;
                                        }
                                    }
                                }
                                _state.label = 5;
                            case 5:
                                if (!success.length) return [
                                    3,
                                    7
                                ];
                                return [
                                    4,
                                    _this.peopleRepository.insertMany(success.map(function(name) {
                                        var p = new People();
                                        p.name = name;
                                        p.taskKey = taskKey;
                                        p.userId = user2.id;
                                        return p;
                                    }))
                                ];
                            case 6:
                                _state.sent();
                                _state.label = 7;
                            case 7:
                                _this.behaviorService.add("people", "模板导入人员名单 用户:".concat(user2.account, " 成功:").concat(success.length, " 失败:").concat(fail.length), {
                                    account: user2.account,
                                    success: success.length,
                                    fail: fail.length
                                });
                                return [
                                    2,
                                    {
                                        success: success.length,
                                        fail: fail
                                    }
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return _a26;
}(), __name(_a26, "PeopleService"), _a26);
_ts_decorate24([
    (0, import_flash_wolves18.InjectCtx)(),
    _ts_metadata17("design:type", typeof import_flash_wolves18.Context === "undefined" ? Object : import_flash_wolves18.Context)
], PeopleService.prototype, "ctx", void 0);
_ts_decorate24([
    (0, import_flash_wolves18.Inject)(PeopleRepository),
    _ts_metadata17("design:type", typeof PeopleRepository === "undefined" ? Object : PeopleRepository)
], PeopleService.prototype, "peopleRepository", void 0);
_ts_decorate24([
    (0, import_flash_wolves18.Inject)(TaskRepository),
    _ts_metadata17("design:type", typeof TaskRepository === "undefined" ? Object : TaskRepository)
], PeopleService.prototype, "taskRepository", void 0);
_ts_decorate24([
    (0, import_flash_wolves18.Inject)(BehaviorService),
    _ts_metadata17("design:type", typeof BehaviorService === "undefined" ? Object : BehaviorService)
], PeopleService.prototype, "behaviorService", void 0);
_ts_decorate24([
    (0, import_flash_wolves18.Inject)(TaskInfoRepository),
    _ts_metadata17("design:type", typeof TaskInfoRepository === "undefined" ? Object : TaskInfoRepository)
], PeopleService.prototype, "taskInfoRepository", void 0);
PeopleService = _ts_decorate24([
    (0, import_flash_wolves18.Provide)()
], PeopleService);
// src/utils/tokenUtil.ts
var _a27;
var TokenUtil = (_a27 = /*#__PURE__*/ function(TokenService) {
    "use strict";
    _inherits(_a271, TokenService);
    var _super = _create_super(_a271);
    function _a271() {
        _class_call_check(this, _a271);
        return _super.apply(this, arguments);
    }
    _create_class(_a271, null, [
        {
            key: "getInstance",
            value: function getInstance() {
                if (!this.instance) {
                    this.instance = new _a27();
                }
                return this.instance;
            }
        }
    ]);
    return _a271;
}(TokenService), __name(_a27, "TokenUtil"), __publicField(_a27, "instance", null), _a27);
var tokenUtil_default = TokenUtil.getInstance();
function getUserInfo(req) {
    return _getUserInfo.apply(this, arguments);
}
function _getUserInfo() {
    _getUserInfo = // src/utils/userUtil.ts
    _async_to_generator(function(req) {
        return _ts_generator(this, function(_state) {
            if (!req.headers.token) {
                return [
                    2,
                    null
                ];
            }
            return [
                2,
                tokenUtil_default.getUserInfo(req.headers.token)
            ];
        });
    });
    return _getUserInfo.apply(this, arguments);
}
__name(getUserInfo, "getUserInfo");
function calculateSize(size) {
    return size * 1024 * 1024 * 1024;
}
__name(calculateSize, "calculateSize");
function getQiniuFileUrlExpiredTime(duration) {
    return Math.floor(Date.now() / 1e3) + 60 * duration;
}
__name(getQiniuFileUrlExpiredTime, "getQiniuFileUrlExpiredTime");
// src/routes/modules/people.ts
var router = new import_flash_wolves19.Router("people");
var fileDir = "".concat(import_node_process4.default.cwd(), "/upload");
var supportType = [
    "text/plain"
];
router.post("/:key", function() {
    var _ref = _async_to_generator(function(req, res) {
        var _req_body, filename, type, _ref, userId, logAccount, key, filepath, fileContent, defaultData, peopleData, alreadyPeople, fail, success;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _req_body = req.body, filename = _req_body.filename, type = _req_body.type;
                    return [
                        4,
                        getUserInfo(req)
                    ];
                case 1:
                    _ref = _state.sent(), userId = _ref.id, logAccount = _ref.account;
                    key = req.params.key;
                    filepath = import_node_path5.default.join(fileDir, filename);
                    if (!supportType.includes(type)) {
                        res.failWithError(publicError.file.notSupport);
                        return [
                            2
                        ];
                    }
                    switch(type){
                        case "text/plain":
                            return [
                                3,
                                2
                            ];
                    }
                    return [
                        3,
                        6
                    ];
                case 2:
                    fileContent = import_node_fs4.default.readFileSync(filepath, {
                        encoding: "utf-8"
                    });
                    if (import_node_fs4.default.unlink) {
                        import_node_fs4.default.unlink(filepath, function(err) {
                            if (err) {
                                addErrorLog(req, err.message, err.stack);
                            }
                        });
                    }
                    defaultData = {
                        taskKey: key,
                        userId: userId
                    };
                    peopleData = fileContent.split("\n").map(function(v) {
                        return v.trim().replace(/[\r\n]/g, "");
                    }).filter(function(v) {
                        return v;
                    });
                    return [
                        4,
                        selectPeople(defaultData)
                    ];
                case 3:
                    alreadyPeople = _state.sent().map(function(v) {
                        return v.name;
                    });
                    fail = [];
                    success = [];
                    peopleData.forEach(function(p) {
                        if (alreadyPeople.includes(p)) {
                            fail.push(p);
                        } else if (!!p && !success.includes(p)) {
                            success.push(p);
                        }
                    });
                    if (!(success.length > 0)) return [
                        3,
                        5
                    ];
                    return [
                        4,
                        insertPeople(success.map(function(name) {
                            return {
                                name: name
                            };
                        }), defaultData)
                    ];
                case 4:
                    _state.sent();
                    _state.label = 5;
                case 5:
                    addBehavior(req, {
                        module: "people",
                        msg: "导入人员名单 用户:".concat(logAccount, " 成功:").concat(success.length, " 失败:").concat(fail.length),
                        data: {
                            account: logAccount,
                            success: success.length,
                            fail: fail.length
                        }
                    });
                    res.success({
                        success: success.length,
                        fail: fail
                    });
                    return [
                        2
                    ];
                case 6:
                    return [
                        3,
                        7
                    ];
                case 7:
                    res.success();
                    return [
                        2
                    ];
            }
        });
    });
    return function(req, res) {
        return _ref.apply(this, arguments);
    };
}(), {
    needLogin: true
});
router.get("/:key", function() {
    var _ref = _async_to_generator(function(req, res) {
        var _ref, userId, logAccount, key, detail, showDetail, people, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, p, existPeopleSubmitFiles, ossStatus, _tmp, fileCount, submitCount, _tmp1, _, err;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        getUserInfo(req)
                    ];
                case 1:
                    _ref = _state.sent(), userId = _ref.id, logAccount = _ref.account;
                    key = req.params.key;
                    detail = req.query.detail;
                    showDetail = detail === "1";
                    return [
                        4,
                        selectPeople({
                            userId: userId,
                            taskKey: key
                        }, [])
                    ];
                case 2:
                    people = _state.sent().map(function(v) {
                        return {
                            id: v.id,
                            name: v.name,
                            status: v.status,
                            lastDate: v.submit_date,
                            count: v.submit_count
                        };
                    });
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    _state.label = 3;
                case 3:
                    _state.trys.push([
                        3,
                        16,
                        17,
                        18
                    ]);
                    _iterator = people[Symbol.iterator]();
                    _state.label = 4;
                case 4:
                    if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                        3,
                        15
                    ];
                    p = _step.value;
                    return [
                        4,
                        selectFiles({
                            userId: userId,
                            taskKey: key,
                            people: p.name
                        })
                    ];
                case 5:
                    existPeopleSubmitFiles = _state.sent();
                    if (!(p.status && existPeopleSubmitFiles.length && showDetail)) return [
                        3,
                        7
                    ];
                    return [
                        4,
                        batchFileStatus(existPeopleSubmitFiles.map(function(v) {
                            return "easypicker2/".concat(v.task_key, "/").concat(v.hash, "/").concat(v.name);
                        }))
                    ];
                case 6:
                    _tmp = _state.sent();
                    return [
                        3,
                        8
                    ];
                case 7:
                    _tmp = [];
                    _state.label = 8;
                case 8:
                    ossStatus = _tmp;
                    fileCount = p.status ? ossStatus.filter(function(v) {
                        return v.code === 200;
                    }).length : 0;
                    p.fileCount = fileCount;
                    submitCount = 0;
                    if (!showDetail) return [
                        3,
                        13
                    ];
                    if (!p.status) return [
                        3,
                        11
                    ];
                    return [
                        4,
                        findLogCount({
                            "type": "behavior",
                            "data.info.data.data.taskKey": key,
                            "data.info.data.data.people": p.name,
                            "data.info.data.data.user_id": userId,
                            "data.req.path": "/file/info",
                            "data.info.msg": {
                                $regex: "成功$"
                            }
                        })
                    ];
                case 9:
                    _ = _state.sent();
                    return [
                        4,
                        findLogCount({
                            "type": "behavior",
                            "data.info.data.data.taskKey": key,
                            "data.info.data.data.peopleName": p.name,
                            "data.user.userId": userId,
                            "data.req.path": "/file/withdraw",
                            "data.info.msg": {
                                $regex: "^撤回文件成功"
                            }
                        })
                    ];
                case 10:
                    _tmp1 = _ - _state.sent();
                    return [
                        3,
                        12
                    ];
                case 11:
                    _tmp1 = 0;
                    _state.label = 12;
                case 12:
                    submitCount = _tmp1;
                    _state.label = 13;
                case 13:
                    p.submitCount = Math.max(submitCount, fileCount);
                    p.count = Math.max(p.count, p.submitCount);
                    _state.label = 14;
                case 14:
                    _iteratorNormalCompletion = true;
                    return [
                        3,
                        4
                    ];
                case 15:
                    return [
                        3,
                        18
                    ];
                case 16:
                    err = _state.sent();
                    _didIteratorError = true;
                    _iteratorError = err;
                    return [
                        3,
                        18
                    ];
                case 17:
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                    return [
                        7
                    ];
                case 18:
                    addBehavior(req, {
                        module: "people",
                        msg: "获取人员名单 用户:".concat(logAccount),
                        data: {
                            account: logAccount
                        }
                    });
                    res.success({
                        people: people
                    });
                    return [
                        2
                    ];
            }
        });
    });
    return function(req, res) {
        return _ref.apply(this, arguments);
    };
}(), {
    needLogin: true
});
router.get("/check/:key", function() {
    var _ref = _async_to_generator(function(req, res) {
        var key, name, _ref, task, people, exist;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    key = req.params.key;
                    name = req.query.name;
                    return [
                        4,
                        selectTasks({
                            k: key
                        })
                    ];
                case 1:
                    _ref = _sliced_to_array.apply(void 0, [
                        _state.sent(),
                        1
                    ]), task = _ref[0];
                    if (!task) {
                        res.success({
                            exist: false
                        });
                        return [
                            2
                        ];
                    }
                    return [
                        4,
                        selectPeople({
                            taskKey: key,
                            name: name
                        })
                    ];
                case 2:
                    people = _state.sent();
                    exist = people.length !== 0;
                    addBehavior(req, {
                        module: "people",
                        msg: "查询是否拥有提交权限 任务:".concat(task.name, " 成员姓名:").concat(name, " 权限:").concat(exist ? "有" : "无"),
                        data: {
                            taskName: task.name,
                            name: name,
                            exist: exist
                        }
                    });
                    res.success({
                        exist: exist
                    });
                    return [
                        2
                    ];
            }
        });
    });
    return function(req, res) {
        return _ref.apply(this, arguments);
    };
}());
router.delete("/:key", function() {
    var _ref = _async_to_generator(function(req, res) {
        var key, id, _ref, userId, logAccount, _ref1, p;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    key = req.params.key;
                    id = req.body.id;
                    return [
                        4,
                        getUserInfo(req)
                    ];
                case 1:
                    _ref = _state.sent(), userId = _ref.id, logAccount = _ref.account;
                    if (!(key && id && userId)) return [
                        3,
                        3
                    ];
                    return [
                        4,
                        selectPeople({
                            id: id
                        })
                    ];
                case 2:
                    _ref1 = _sliced_to_array.apply(void 0, [
                        _state.sent(),
                        1
                    ]), p = _ref1[0];
                    if (p) {
                        deletePeople({
                            id: id,
                            userId: userId,
                            taskKey: key
                        });
                        _async_to_generator(function() {
                            var _ref, task;
                            return _ts_generator(this, function(_state) {
                                switch(_state.label){
                                    case 0:
                                        return [
                                            4,
                                            selectTasks({
                                                k: key
                                            })
                                        ];
                                    case 1:
                                        _ref = _sliced_to_array.apply(void 0, [
                                            _state.sent(),
                                            1
                                        ]), task = _ref[0];
                                        if (task) {
                                            addBehavior(req, {
                                                module: "people",
                                                msg: "删除任务人员 用户:".concat(logAccount, " 任务:").concat(task.name, " 成员:").concat(p.name),
                                                data: {
                                                    account: logAccount,
                                                    taskName: task.name,
                                                    name: p.name
                                                }
                                            });
                                        }
                                        return [
                                            2
                                        ];
                                }
                            });
                        })();
                    }
                    _state.label = 3;
                case 3:
                    res.success();
                    return [
                        2
                    ];
            }
        });
    });
    return function(req, res) {
        return _ref.apply(this, arguments);
    };
}(), {
    needLogin: true
});
router.put("/:key", function() {
    var _ref = _async_to_generator(function(req, res) {
        var key, _req_body, name, filename, hash, files, alreadyCount;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    key = req.params.key;
                    _req_body = req.body, name = _req_body.name, filename = _req_body.filename, hash = _req_body.hash;
                    if (!name || !filename || !key || !hash) {
                        addBehavior(req, {
                            module: "people",
                            msg: "更新提交人员信息 参数错误",
                            data: {
                                key: key,
                                name: name,
                                filename: filename,
                                hash: hash
                            }
                        });
                        res.failWithError(publicError.request.errorParams);
                        return [
                            2
                        ];
                    }
                    return [
                        4,
                        selectFiles({
                            taskKey: key,
                            name: filename,
                            hash: hash
                        })
                    ];
                case 1:
                    files = _state.sent();
                    if (files.length === 0) {
                        addBehavior(req, {
                            module: "people",
                            msg: "更新提交人员信息 参数错误",
                            data: {
                                key: key,
                                name: name,
                                filename: filename,
                                hash: hash
                            }
                        });
                        res.failWithError(publicError.request.errorParams);
                        return [
                            2
                        ];
                    }
                    return [
                        4,
                        selectPeople({
                            taskKey: key,
                            name: name
                        }, [
                            "name",
                            "submit_count"
                        ])
                    ];
                case 2:
                    alreadyCount = _state.sent()[0].submit_count || 0;
                    return [
                        4,
                        updatePeople({
                            status: 1,
                            submitDate: /* @__PURE__ */ new Date(),
                            submitCount: alreadyCount + 1
                        }, {
                            name: name,
                            taskKey: key
                        })
                    ];
                case 3:
                    _state.sent();
                    selectTasks({
                        k: key
                    }).then(function(param) {
                        var _param = _sliced_to_array(param, 1), task = _param[0];
                        if (task) {
                            addBehavior(req, {
                                module: "people",
                                msg: "更新提交人员信息 成功 任务:".concat(task.name, " 姓名:").concat(name),
                                data: {
                                    key: key,
                                    taskName: task.name,
                                    name: name,
                                    filename: filename,
                                    hash: hash
                                }
                            });
                        }
                    });
                    res.success();
                    return [
                        2
                    ];
            }
        });
    });
    return function(req, res) {
        return _ref.apply(this, arguments);
    };
}());
var people_default = router;
// src/routes/index.ts
var routers = [
    people_default
];
var routes_default = routers.reduce(function(pre, router2) {
    return pre.concat(router2.getRoutes());
}, []);
// src/controllers/wish.ts
var import_flash_wolves21 = require("flash-wolves");
// src/db/model/wish.ts
var WishStatus;
(function(WishStatus2) {
    WishStatus2[WishStatus2[/**
    * 审核中
    */ "REVIEW"] = 0] = "REVIEW";
    WishStatus2[WishStatus2[/**
    * 待开始
    */ "WAIT"] = 1] = "WAIT";
    WishStatus2[WishStatus2[/**
    * 开发中
    */ "START"] = 2] = "START";
    WishStatus2[WishStatus2[/**
    * 已上线
    */ "END"] = 3] = "END";
    WishStatus2[WishStatus2[/**
    * 关闭
    */ "CLOSE"] = 4] = "CLOSE";
})(WishStatus || (WishStatus = {}));
// src/db/wishDb.ts
function addWishData(wish) {
    return insertCollection("wish", wish);
}
__name(addWishData, "addWishData");
function findWish(wish) {
    return findCollection("wish", wish);
}
__name(findWish, "findWish");
function updateWish(query3, wish) {
    return updateCollection("wish", query3, wish);
}
__name(updateWish, "updateWish");
// src/decorator/index.ts
var import_flash_wolves20 = require("flash-wolves");
function ReqIp() {
    return (0, import_flash_wolves20.RequestValue)("_ip");
}
__name(ReqIp, "ReqIp");
function ReqUserInfo() {
    return (0, import_flash_wolves20.RequestValue)("_userinfo");
}
__name(ReqUserInfo, "ReqUserInfo");
// src/controllers/wish.ts
function _ts_decorate25(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate25, "_ts_decorate");
function _ts_metadata18(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata18, "_ts_metadata");
function _ts_param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
__name(_ts_param, "_ts_param");
var adminPower = {
    needLogin: true,
    userPower: USER_POWER.SUPER
};
var _a28;
var WishController = (_a28 = /*#__PURE__*/ function() {
    "use strict";
    function _a28() {
        _class_call_check(this, _a28);
    }
    _create_class(_a28, [
        {
            key: "addWish",
            value: /**
  * 提交需求
  */ function addWish(body, req) {
                return _async_to_generator(function() {
                    var wish;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                addBehavior(req, {
                                    module: "wish",
                                    msg: "需求反馈",
                                    data: body
                                });
                                wish = _object_spread_props(_object_spread({}, body), {
                                    id: getUniqueKey(),
                                    status: WishStatus.REVIEW
                                });
                                return [
                                    4,
                                    addWishData(wish)
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "getAllWish",
            value: function getAllWish() {
                return _async_to_generator(function() {
                    var wishes;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    findWish({})
                                ];
                            case 1:
                                wishes = _state.sent();
                                wishes.sort(function(a, b) {
                                    var aDate = getObjectIdDate(a.id);
                                    var bDate = getObjectIdDate(b.id);
                                    return bDate - aDate;
                                });
                                return [
                                    2,
                                    wishes.map(function(wish) {
                                        var title = wish.title, des = wish.des, status = wish.status, id = wish.id, contact = wish.contact;
                                        var createDate = getObjectIdDate(id);
                                        return {
                                            title: title,
                                            des: des,
                                            status: status,
                                            id: id,
                                            contact: contact,
                                            createDate: createDate
                                        };
                                    })
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "updateWishStatus",
            value: function updateWishStatus(id, status) {
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    updateWish({
                                        id: id
                                    }, {
                                        $set: {
                                            status: status
                                        }
                                    })
                                ];
                            case 1:
                                _state.sent();
                                if (!(status === WishStatus.START)) return [
                                    3,
                                    3
                                ];
                                return [
                                    4,
                                    updateWish({
                                        id: id
                                    }, {
                                        $set: {
                                            startDate: /* @__PURE__ */ new Date()
                                        }
                                    })
                                ];
                            case 2:
                                _state.sent();
                                _state.label = 3;
                            case 3:
                                if (!(status === WishStatus.CLOSE || status === WishStatus.END)) return [
                                    3,
                                    5
                                ];
                                return [
                                    4,
                                    updateWish({
                                        id: id
                                    }, {
                                        $set: {
                                            endDate: /* @__PURE__ */ new Date()
                                        }
                                    })
                                ];
                            case 4:
                                _state.sent();
                                _state.label = 5;
                            case 5:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "updateWishData",
            value: function updateWishData(id, body) {
                return _async_to_generator(function() {
                    var title, des;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                title = body.title, des = body.des;
                                return [
                                    4,
                                    updateWish({
                                        id: id
                                    }, {
                                        $set: {
                                            title: title,
                                            des: des
                                        }
                                    })
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "getDocsWish",
            value: function getDocsWish(ip) {
                return _async_to_generator(function() {
                    var wishes, result, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, wish, title, des, id, startDate, status, count, alreadyPraise, err;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    findWish({
                                        $or: [
                                            {
                                                status: WishStatus.START
                                            },
                                            {
                                                status: WishStatus.WAIT
                                            },
                                            {
                                                status: WishStatus.END
                                            }
                                        ]
                                    })
                                ];
                            case 1:
                                wishes = _state.sent();
                                result = [];
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                _state.label = 2;
                            case 2:
                                _state.trys.push([
                                    2,
                                    8,
                                    9,
                                    10
                                ]);
                                _iterator = wishes[Symbol.iterator]();
                                _state.label = 3;
                            case 3:
                                if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                                    3,
                                    7
                                ];
                                wish = _step.value;
                                title = wish.title, des = wish.des, id = wish.id, startDate = wish.startDate, status = wish.status;
                                return [
                                    4,
                                    findActionCount({
                                        thingId: wish.id,
                                        type: ActionType.PRAISE
                                    })
                                ];
                            case 4:
                                count = _state.sent();
                                return [
                                    4,
                                    findActionCount({
                                        thingId: wish.id,
                                        type: ActionType.PRAISE,
                                        ip: ip
                                    })
                                ];
                            case 5:
                                alreadyPraise = _state.sent() > 0;
                                result.push({
                                    title: status === WishStatus.END ? "(已上线) ".concat(title) : title,
                                    des: des,
                                    id: id,
                                    startDate: startDate,
                                    count: count,
                                    alreadyPraise: alreadyPraise,
                                    status: status
                                });
                                _state.label = 6;
                            case 6:
                                _iteratorNormalCompletion = true;
                                return [
                                    3,
                                    3
                                ];
                            case 7:
                                return [
                                    3,
                                    10
                                ];
                            case 8:
                                err = _state.sent();
                                _didIteratorError = true;
                                _iteratorError = err;
                                return [
                                    3,
                                    10
                                ];
                            case 9:
                                try {
                                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                                        _iterator.return();
                                    }
                                } finally{
                                    if (_didIteratorError) {
                                        throw _iteratorError;
                                    }
                                }
                                return [
                                    7
                                ];
                            case 10:
                                result.sort(function(a, b) {
                                    return b.count - a.count;
                                });
                                return [
                                    2,
                                    result
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "praiseWis",
            value: /**
  * 点赞需求
  */ function praiseWis(id, ip) {
                return _async_to_generator(function() {
                    var wishes, praiseData;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    findWish({
                                        id: id
                                    })
                                ];
                            case 1:
                                wishes = _state.sent();
                                if (!wishes.length) {
                                    return [
                                        2,
                                        import_flash_wolves21.Response.fail(-1, "需求不存在")
                                    ];
                                }
                                return [
                                    4,
                                    findAction({
                                        ip: ip,
                                        thingId: id,
                                        type: ActionType.PRAISE
                                    })
                                ];
                            case 2:
                                praiseData = _state.sent();
                                if (praiseData.length) {
                                    return [
                                        2,
                                        import_flash_wolves21.Response.fail(1, "已经点赞过了")
                                    ];
                                }
                                return [
                                    4,
                                    addAction({
                                        type: ActionType.PRAISE,
                                        thingId: id,
                                        ip: ip
                                    })
                                ];
                            case 3:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return _a28;
}(), __name(_a28, "WishController"), _a28);
_ts_decorate25([
    (0, import_flash_wolves21.Post)("add", {
        CORS: true
    }),
    _ts_param(0, (0, import_flash_wolves21.ReqBody)()),
    _ts_metadata18("design:type", Function),
    _ts_metadata18("design:paramtypes", [
        typeof Wish === "undefined" ? Object : Wish,
        typeof import_flash_wolves21.FWRequest === "undefined" ? Object : import_flash_wolves21.FWRequest
    ])
], WishController.prototype, "addWish", null);
_ts_decorate25([
    (0, import_flash_wolves21.Get)("all", adminPower),
    _ts_metadata18("design:type", Function),
    _ts_metadata18("design:paramtypes", [])
], WishController.prototype, "getAllWish", null);
_ts_decorate25([
    (0, import_flash_wolves21.Put)("update", adminPower),
    _ts_param(0, (0, import_flash_wolves21.ReqBody)("id")),
    _ts_param(1, (0, import_flash_wolves21.ReqBody)("status")),
    _ts_metadata18("design:type", Function),
    _ts_metadata18("design:paramtypes", [
        String,
        typeof WishStatus === "undefined" ? Object : WishStatus
    ])
], WishController.prototype, "updateWishStatus", null);
_ts_decorate25([
    (0, import_flash_wolves21.Put)("update/:id", adminPower),
    _ts_param(0, (0, import_flash_wolves21.ReqParams)("id")),
    _ts_param(1, (0, import_flash_wolves21.ReqBody)()),
    _ts_metadata18("design:type", Function),
    _ts_metadata18("design:paramtypes", [
        String,
        typeof Wish === "undefined" ? Object : Wish
    ])
], WishController.prototype, "updateWishData", null);
_ts_decorate25([
    (0, import_flash_wolves21.Get)("all/docs", {
        CORS: true
    }),
    _ts_param(0, ReqIp()),
    _ts_metadata18("design:type", Function),
    _ts_metadata18("design:paramtypes", [
        String
    ])
], WishController.prototype, "getDocsWish", null);
_ts_decorate25([
    (0, import_flash_wolves21.Post)("praise/:id", {
        CORS: true
    }),
    _ts_param(0, (0, import_flash_wolves21.ReqParams)("id")),
    _ts_param(1, ReqIp()),
    _ts_metadata18("design:type", Function),
    _ts_metadata18("design:paramtypes", [
        String,
        String
    ])
], WishController.prototype, "praiseWis", null);
WishController = _ts_decorate25([
    (0, import_flash_wolves21.RouterController)("wish")
], WishController);
// src/controllers/super/overview.ts
var import_flash_wolves22 = require("flash-wolves");
var import_mongodb8 = require("mongodb");
function _ts_decorate26(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate26, "_ts_decorate");
function _ts_metadata19(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata19, "_ts_metadata");
function _ts_param2(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
__name(_ts_param2, "_ts_param");
var power = {
    userPower: USER_POWER.SUPER,
    needLogin: true
};
var tempTxtFileReg = /\d+-\d+.txt$/;
var _a29;
var OverviewController = (_a29 = /*#__PURE__*/ function() {
    "use strict";
    function _a29() {
        _class_call_check(this, _a29);
        __publicField(this, "cacheLogs", []);
    }
    _create_class(_a29, [
        {
            key: "filterLog",
            value: function filterLog(logs) {
                return logs.map(function(log) {
                    var _d_req, _d, _d1;
                    var type = log.type, data = log.data, id = log.id;
                    var date = new import_mongodb8.ObjectId(id).getTimestamp();
                    if (type === "request") {
                        var d2 = data;
                        return {
                            id: id,
                            date: date,
                            type: type,
                            ip: d2.ip,
                            msg: "".concat(d2.method, " ").concat(d2.url, " ").concat("".concat(d2.duration || 0, "ms"))
                        };
                    }
                    if (type === "behavior") {
                        var _d2_info, _d2, _d2_info_data, _d2_info1, _d2_info_data1, _d2_info2, _d2_req, _d21;
                        var d21 = data;
                        return {
                            id: id,
                            date: date,
                            type: type,
                            msg: (((_d2 = d21) === null || _d2 === void 0 ? void 0 : (_d2_info = _d2.info) === null || _d2_info === void 0 ? void 0 : _d2_info.msg) || "未知") + (((_d2_info1 = d21.info) === null || _d2_info1 === void 0 ? void 0 : (_d2_info_data = _d2_info1.data) === null || _d2_info_data === void 0 ? void 0 : _d2_info_data.size) && " ".concat(formatSize((_d2_info2 = d21.info) === null || _d2_info2 === void 0 ? void 0 : (_d2_info_data1 = _d2_info2.data) === null || _d2_info_data1 === void 0 ? void 0 : _d2_info_data1.size)) || ""),
                            ip: ((_d21 = d21) === null || _d21 === void 0 ? void 0 : (_d2_req = _d21.req) === null || _d2_req === void 0 ? void 0 : _d2_req.ip) || "未知"
                        };
                    }
                    if (type === "pv") {
                        var d22 = data;
                        return {
                            id: id,
                            date: date,
                            type: type,
                            ip: d22.ip,
                            msg: "".concat(d22.path)
                        };
                    }
                    var d = data;
                    return {
                        id: id,
                        date: date,
                        type: type,
                        ip: ((_d = d) === null || _d === void 0 ? void 0 : (_d_req = _d.req) === null || _d_req === void 0 ? void 0 : _d_req.ip) || "未知",
                        msg: ((_d1 = d) === null || _d1 === void 0 ? void 0 : _d1.msg) || "未知"
                    };
                });
            }
        },
        {
            key: "isExpiredCompressSource",
            value: function isExpiredCompressSource(putTime) {
                var downloadCompressExpired = LocalUserDB.getSiteConfig().downloadCompressExpired;
                return Date.now() - putTime > 1e3 * 60 * (downloadCompressExpired || 60);
            }
        },
        {
            key: "getLogDetail",
            value: /**
  * 查询某条日志的详细信息
  * TODO:针对不同类型过滤
  */ function getLogDetail(id) {
                return _async_to_generator(function() {
                    var _ref, log;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    findLog({
                                        id: id
                                    })
                                ];
                            case 1:
                                _ref = _sliced_to_array.apply(void 0, [
                                    _state.sent(),
                                    1
                                ]), log = _ref[0];
                                delete log.data.userId;
                                return [
                                    2,
                                    log.data
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "getDataOverview",
            value: function getDataOverview() {
                var _this = this;
                return _async_to_generator(function() {
                    var now, nowDate, users, userRecent, files, fileRecent, ossFiles, logCount, logRecent, pvList, uv, todayPv, todayUv, compressData, tempTxtFilesData;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                now = /* @__PURE__ */ new Date();
                                nowDate = /* @__PURE__ */ new Date("".concat(now.getFullYear(), "-").concat(now.getMonth() + 1, "-").concat(now.getDate(), " GMT+8"));
                                return [
                                    4,
                                    selectAllUser([
                                        "join_time"
                                    ])
                                ];
                            case 1:
                                users = _state.sent();
                                userRecent = users.filter(function(u) {
                                    return new Date(u.join_time) > nowDate;
                                }).length;
                                return [
                                    4,
                                    selectFilesNew({}, [
                                        "date",
                                        "size"
                                    ])
                                ];
                            case 2:
                                files = _state.sent();
                                fileRecent = files.filter(function(f) {
                                    return new Date(f.date) > nowDate;
                                }).length;
                                return [
                                    4,
                                    super_default.getOssFiles()
                                ];
                            case 3:
                                ossFiles = _state.sent();
                                return [
                                    4,
                                    findLogCount({})
                                ];
                            case 4:
                                logCount = _state.sent();
                                return [
                                    4,
                                    findLogWithTimeRange(nowDate)
                                ];
                            case 5:
                                logRecent = _state.sent();
                                return [
                                    4,
                                    findLogReserve({
                                        type: "pv"
                                    })
                                ];
                            case 6:
                                pvList = _state.sent();
                                uv = new Set(pvList.map(function(pv) {
                                    return pv.data.ip;
                                })).size;
                                return [
                                    4,
                                    findPvLogWithRange(nowDate)
                                ];
                            case 7:
                                todayPv = _state.sent();
                                todayUv = new Set(todayPv.map(function(pv) {
                                    return pv.data.ip;
                                })).size;
                                return [
                                    4,
                                    getFileKeys("easypicker2/temp_package")
                                ];
                            case 8:
                                compressData = _state.sent();
                                return [
                                    4,
                                    getFileKeys("1").then(function(v) {
                                        return v.filter(function(v2) {
                                            return tempTxtFileReg.test(v2.key);
                                        });
                                    })
                                ];
                            case 9:
                                tempTxtFilesData = _state.sent();
                                return [
                                    2,
                                    {
                                        user: {
                                            sum: users.length,
                                            recent: userRecent
                                        },
                                        file: {
                                            server: {
                                                sum: files.length,
                                                recent: fileRecent,
                                                size: formatSize(files.reduce(function(sum, f) {
                                                    return sum + f.size;
                                                }, 0))
                                            },
                                            oss: {
                                                sum: ossFiles.length,
                                                size: formatSize(ossFiles.reduce(function(sum, f) {
                                                    return sum + f.fsize;
                                                }, 0))
                                            }
                                        },
                                        log: {
                                            sum: logCount,
                                            recent: logRecent.length
                                        },
                                        pv: {
                                            today: {
                                                sum: todayPv.length,
                                                uv: todayUv
                                            },
                                            all: {
                                                sum: pvList.length,
                                                uv: uv
                                            }
                                        },
                                        compress: {
                                            all: {
                                                sum: compressData.length + tempTxtFilesData.length,
                                                size: formatSize(compressData.concat(tempTxtFilesData).reduce(function(sum, item) {
                                                    return sum + item.fsize;
                                                }, 0))
                                            },
                                            expired: {
                                                sum: compressData.concat(tempTxtFilesData).filter(function(item) {
                                                    return _this.isExpiredCompressSource(item.putTime / 1e4);
                                                }).length,
                                                size: formatSize(compressData.concat(tempTxtFilesData).filter(function(item) {
                                                    return _this.isExpiredCompressSource(item.putTime / 1e4);
                                                }).reduce(function(sum, item) {
                                                    return sum + item.fsize;
                                                }, 0))
                                            }
                                        }
                                    }
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "clearExpiredCompress",
            value: function clearExpiredCompress(req) {
                var _this = this;
                return _async_to_generator(function() {
                    var compressData, expired, txtFiles, expiredTxt;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    getFileKeys("easypicker2/temp_package")
                                ];
                            case 1:
                                compressData = _state.sent();
                                expired = compressData.filter(function(item) {
                                    return _this.isExpiredCompressSource(item.putTime / 1e4);
                                }).map(function(v) {
                                    return v.key;
                                });
                                return [
                                    4,
                                    batchDeleteFiles(expired, req)
                                ];
                            case 2:
                                _state.sent();
                                return [
                                    4,
                                    getFileKeys("1")
                                ];
                            case 3:
                                txtFiles = _state.sent().filter(function(v) {
                                    return tempTxtFileReg.test(v.key);
                                });
                                expiredTxt = txtFiles.filter(function(item) {
                                    return _this.isExpiredCompressSource(item.putTime / 1e4);
                                }).map(function(v) {
                                    return v.key;
                                });
                                return [
                                    4,
                                    batchDeleteFiles(expiredTxt, req)
                                ];
                            case 4:
                                _state.sent();
                                addBehavior(req, {
                                    module: "super",
                                    msg: "清理无用文件 ".concat(expired.length + expiredTxt.length, "个"),
                                    data: {
                                        keys: expired.concat(expiredTxt)
                                    }
                                });
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "getAllLog",
            value: /**
  * 一次性全查
  */ function getAllLog() {
                var _this = this;
                return _async_to_generator(function() {
                    var logs, result;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                logs = [];
                                if (!_this.cacheLogs) return [
                                    3,
                                    1
                                ];
                                logs = _this.cacheLogs;
                                findLogReserve({}).then(function(data) {
                                    _this.cacheLogs = data;
                                });
                                return [
                                    3,
                                    3
                                ];
                            case 1:
                                return [
                                    4,
                                    findLogReserve({})
                                ];
                            case 2:
                                logs = _state.sent();
                                _this.cacheLogs = logs;
                                _state.label = 3;
                            case 3:
                                result = _this.filterLog(logs);
                                return [
                                    2,
                                    {
                                        logs: result
                                    }
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "getPartLog",
            value: /**
  * 分页查询
  */ function getPartLog(type) {
                var size = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6, index = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, search = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "";
                var _this = this;
                return _async_to_generator(function() {
                    var query3, logCount, logs;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                query3 = {
                                    type: type
                                };
                                if (search) {
                                    switch(type){
                                        case "behavior":
                                            query3 = _object_spread_props(_object_spread({}, query3), {
                                                $or: [
                                                    {
                                                        "data.info.msg": {
                                                            $regex: ".*".concat(search, ".*")
                                                        }
                                                    },
                                                    {
                                                        "data.req.ip": {
                                                            $regex: ".*".concat(search, ".*")
                                                        }
                                                    }
                                                ]
                                            });
                                            break;
                                        case "request":
                                            query3 = _object_spread_props(_object_spread({}, query3), {
                                                $or: [
                                                    {
                                                        "data.method": {
                                                            $regex: ".*".concat(search, ".*")
                                                        }
                                                    },
                                                    {
                                                        "data.url": {
                                                            $regex: ".*".concat(search, ".*")
                                                        }
                                                    },
                                                    {
                                                        "data.ip": {
                                                            $regex: ".*".concat(search, ".*")
                                                        }
                                                    }
                                                ]
                                            });
                                            break;
                                        case "pv":
                                            query3 = _object_spread_props(_object_spread({}, query3), {
                                                $or: [
                                                    {
                                                        "data.path": {
                                                            $regex: ".*".concat(search, ".*")
                                                        }
                                                    },
                                                    {
                                                        "data.ip": {
                                                            $regex: ".*".concat(search, ".*")
                                                        }
                                                    }
                                                ]
                                            });
                                            break;
                                        case "error":
                                            query3 = _object_spread_props(_object_spread({}, query3), {
                                                $or: [
                                                    {
                                                        "data.req.ip": {
                                                            $regex: ".*".concat(search, ".*")
                                                        }
                                                    },
                                                    {
                                                        "data.msg": {
                                                            $regex: ".*".concat(search, ".*")
                                                        }
                                                    }
                                                ]
                                            });
                                            break;
                                        default:
                                            break;
                                    }
                                }
                                return [
                                    4,
                                    findLogCount(query3)
                                ];
                            case 1:
                                logCount = _state.sent();
                                return [
                                    4,
                                    findLogWithPageOffset((index - 1) * size, size, query3)
                                ];
                            case 2:
                                logs = _state.sent();
                                return [
                                    2,
                                    {
                                        logs: _this.filterLog(logs),
                                        sum: logCount
                                    }
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "changeDisabledRoute",
            value: function changeDisabledRoute(route, status) {
                return _async_to_generator(function() {
                    var actions, action;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    findAction({
                                        type: ActionType.DisabledRoute
                                    })
                                ];
                            case 1:
                                actions = _state.sent();
                                action = actions.find(function(v) {
                                    return v.data.route === route;
                                });
                                if (!!action) return [
                                    3,
                                    3
                                ];
                                return [
                                    4,
                                    addAction({
                                        type: ActionType.DisabledRoute,
                                        data: {
                                            route: route,
                                            status: status
                                        }
                                    })
                                ];
                            case 2:
                                _state.sent();
                                return [
                                    2
                                ];
                            case 3:
                                return [
                                    4,
                                    updateAction({
                                        id: action.id
                                    }, {
                                        $set: {
                                            data: {
                                                route: route,
                                                status: status
                                            }
                                        }
                                    })
                                ];
                            case 4:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "checkDisabledRoute",
            value: function checkDisabledRoute(route) {
                return _async_to_generator(function() {
                    var actionStatus, _action_data, _action, actions, action, error, _error;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                actionStatus = false;
                                _state.label = 1;
                            case 1:
                                _state.trys.push([
                                    1,
                                    3,
                                    ,
                                    4
                                ]);
                                return [
                                    4,
                                    findAction({
                                        type: ActionType.DisabledRoute
                                    })
                                ];
                            case 2:
                                actions = _state.sent();
                                action = actions.find(function(v) {
                                    return v.data.route === route;
                                });
                                actionStatus = Boolean((_action = action) === null || _action === void 0 ? void 0 : (_action_data = _action.data) === null || _action_data === void 0 ? void 0 : _action_data.status);
                                return [
                                    3,
                                    4
                                ];
                            case 3:
                                error = _state.sent();
                                console.warn("[super/route/disabled] skip disabled route check:", ((_error = error) === null || _error === void 0 ? void 0 : _error.message) || error);
                                return [
                                    3,
                                    4
                                ];
                            case 4:
                                return [
                                    2,
                                    {
                                        status: actionStatus
                                    }
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return _a29;
}(), __name(_a29, "OverviewController"), _a29);
_ts_decorate26([
    (0, import_flash_wolves22.Get)("log/:id", power),
    _ts_param2(0, (0, import_flash_wolves22.ReqParams)("id")),
    _ts_metadata19("design:type", Function),
    _ts_metadata19("design:paramtypes", [
        String
    ])
], OverviewController.prototype, "getLogDetail", null);
_ts_decorate26([
    (0, import_flash_wolves22.Get)("count", power),
    _ts_metadata19("design:type", Function),
    _ts_metadata19("design:paramtypes", [])
], OverviewController.prototype, "getDataOverview", null);
_ts_decorate26([
    (0, import_flash_wolves22.Delete)("compress", power),
    _ts_metadata19("design:type", Function),
    _ts_metadata19("design:paramtypes", [
        typeof FWRequest === "undefined" ? Object : FWRequest
    ])
], OverviewController.prototype, "clearExpiredCompress", null);
_ts_decorate26([
    (0, import_flash_wolves22.Get)("log", power),
    _ts_metadata19("design:type", Function),
    _ts_metadata19("design:paramtypes", [])
], OverviewController.prototype, "getAllLog", null);
_ts_decorate26([
    (0, import_flash_wolves22.Post)("log", power),
    _ts_param2(0, (0, import_flash_wolves22.ReqBody)("type")),
    _ts_param2(1, (0, import_flash_wolves22.ReqBody)("pageSize")),
    _ts_param2(2, (0, import_flash_wolves22.ReqBody)("pageIndex")),
    _ts_param2(3, (0, import_flash_wolves22.ReqBody)("search")),
    _ts_metadata19("design:type", Function),
    _ts_metadata19("design:paramtypes", [
        typeof LogType === "undefined" ? Object : LogType,
        void 0,
        void 0,
        void 0
    ])
], OverviewController.prototype, "getPartLog", null);
_ts_decorate26([
    (0, import_flash_wolves22.Post)("route/disabled", power),
    _ts_param2(0, (0, import_flash_wolves22.ReqBody)("route")),
    _ts_param2(1, (0, import_flash_wolves22.ReqBody)("status")),
    _ts_metadata19("design:type", Function),
    _ts_metadata19("design:paramtypes", [
        String,
        Boolean
    ])
], OverviewController.prototype, "changeDisabledRoute", null);
_ts_decorate26([
    (0, import_flash_wolves22.Get)("route/disabled"),
    _ts_param2(0, (0, import_flash_wolves22.ReqQuery)("route")),
    _ts_metadata19("design:type", Function),
    _ts_metadata19("design:paramtypes", [
        String
    ])
], OverviewController.prototype, "checkDisabledRoute", null);
OverviewController = _ts_decorate26([
    (0, import_flash_wolves22.RouterController)("super/overview")
], OverviewController);
// src/controllers/people.ts
var import_flash_wolves24 = require("flash-wolves");
// src/utils/context.ts
var import_flash_wolves23 = require("flash-wolves");
function wrapperCatchError(err) {
    var _ref = err || {}, code = _ref.code, msg = _ref.msg, data = _ref.data;
    if (code && msg && data) {
        return import_flash_wolves23.Response.fail(code, msg, data);
    }
    if (code && msg) {
        return import_flash_wolves23.Response.failWithError(err);
    }
    throw err;
}
__name(wrapperCatchError, "wrapperCatchError");
// src/controllers/people.ts
function _ts_decorate27(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate27, "_ts_decorate");
function _ts_metadata20(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata20, "_ts_metadata");
function _ts_param3(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
__name(_ts_param3, "_ts_param");
var power2 = {
    needLogin: true
};
var _a30;
var PeopleController = (_a30 = /*#__PURE__*/ function() {
    "use strict";
    function _a30() {
        _class_call_check(this, _a30);
        __publicField(this, "ctx");
        __publicField(this, "behaviorService");
        __publicField(this, "peopleService");
    }
    _create_class(_a30, [
        {
            key: "addPeople",
            value: function addPeople(key, name) {
                var _this = this;
                return _async_to_generator(function() {
                    var error;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _state.trys.push([
                                    0,
                                    2,
                                    ,
                                    3
                                ]);
                                return [
                                    4,
                                    _this.peopleService.addPeople(key, name)
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    3,
                                    3
                                ];
                            case 2:
                                error = _state.sent();
                                return [
                                    2,
                                    wrapperCatchError(error)
                                ];
                            case 3:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "checkPeopleIsExist",
            value: /**
  * 检查是否有提交权限
  */ function checkPeopleIsExist(name, key) {
                var _this = this;
                return _async_to_generator(function() {
                    var exist;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _this.peopleService.checkPeopleIsExist(key, name)
                                ];
                            case 1:
                                exist = _state.sent();
                                return [
                                    2,
                                    {
                                        exist: exist
                                    }
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "getUsefulTemplate",
            value: function getUsefulTemplate(taskKey) {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        return [
                            2,
                            _this.peopleService.getUsefulTemplate(taskKey)
                        ];
                    });
                })();
            }
        },
        {
            key: "importPeopleFromTpl",
            value: function importPeopleFromTpl(taskKey, tplKey, type) {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        return [
                            2,
                            _this.peopleService.importPeopleFromTpl(taskKey, tplKey, type)
                        ];
                    });
                })();
            }
        }
    ]);
    return _a30;
}(), __name(_a30, "PeopleController"), _a30);
_ts_decorate27([
    (0, import_flash_wolves24.InjectCtx)(),
    _ts_metadata20("design:type", typeof import_flash_wolves24.Context === "undefined" ? Object : import_flash_wolves24.Context)
], PeopleController.prototype, "ctx", void 0);
_ts_decorate27([
    (0, import_flash_wolves24.Inject)(BehaviorService),
    _ts_metadata20("design:type", typeof BehaviorService === "undefined" ? Object : BehaviorService)
], PeopleController.prototype, "behaviorService", void 0);
_ts_decorate27([
    (0, import_flash_wolves24.Inject)(PeopleService),
    _ts_metadata20("design:type", typeof PeopleService === "undefined" ? Object : PeopleService)
], PeopleController.prototype, "peopleService", void 0);
_ts_decorate27([
    (0, import_flash_wolves24.Post)("/add/:key", power2),
    _ts_param3(0, (0, import_flash_wolves24.ReqParams)("key")),
    _ts_param3(1, (0, import_flash_wolves24.ReqBody)("name")),
    _ts_metadata20("design:type", Function),
    _ts_metadata20("design:paramtypes", [
        String,
        String
    ])
], PeopleController.prototype, "addPeople", null);
_ts_decorate27([
    (0, import_flash_wolves24.Post)("/check/:key"),
    _ts_param3(0, (0, import_flash_wolves24.ReqBody)("name")),
    _ts_param3(1, (0, import_flash_wolves24.ReqParams)("key")),
    _ts_metadata20("design:type", Function),
    _ts_metadata20("design:paramtypes", [
        String,
        String
    ])
], PeopleController.prototype, "checkPeopleIsExist", null);
_ts_decorate27([
    (0, import_flash_wolves24.Get)("/template/:key", power2),
    _ts_param3(0, (0, import_flash_wolves24.ReqParams)("key")),
    _ts_metadata20("design:type", Function),
    _ts_metadata20("design:paramtypes", [
        String
    ])
], PeopleController.prototype, "getUsefulTemplate", null);
_ts_decorate27([
    (0, import_flash_wolves24.Put)("/template/:key", power2),
    _ts_param3(0, (0, import_flash_wolves24.ReqParams)("key")),
    _ts_param3(1, (0, import_flash_wolves24.ReqBody)("key")),
    _ts_param3(2, (0, import_flash_wolves24.ReqBody)("type")),
    _ts_metadata20("design:type", Function),
    _ts_metadata20("design:paramtypes", [
        String,
        void 0,
        String
    ])
], PeopleController.prototype, "importPeopleFromTpl", null);
PeopleController = _ts_decorate27([
    (0, import_flash_wolves24.RouterController)("people")
], PeopleController);
// src/controllers/file.ts
var import_flash_wolves25 = require("flash-wolves");
var import_mongodb9 = require("mongodb");
init_localFileUtil();
init_localFileUtil();
init_constants();
var import_formidable = __toESM(require("formidable"));
var import_node_fs5 = __toESM(require("fs"));
var import_node_path6 = __toESM(require("path"));
function _ts_decorate28(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate28, "_ts_decorate");
function _ts_metadata21(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata21, "_ts_metadata");
function _ts_param4(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
__name(_ts_param4, "_ts_param");
var power3 = {
    needLogin: true
};
var noLogin = {
    needLogin: false
};
var _a31;
var FileController = (_a31 = /*#__PURE__*/ function() {
    "use strict";
    function _a31() {
        _class_call_check(this, _a31);
        __publicField(this, "ctx");
        __publicField(this, "fileService");
        __publicField(this, "behaviorService");
        __publicField(this, "taskService");
        __publicField(this, "localFileService");
    }
    _create_class(_a31, [
        {
            key: "getPreviewURL",
            value: /**
  * 获取图片的预览图
  */ function getPreviewURL(idList, user2, req) {
                var _this = this;
                return _async_to_generator(function() {
                    var _LocalUserDB_getSiteConfig, files, keys, expiredTime, filesStatus, result;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                addBehavior(req, {
                                    module: "file",
                                    msg: "获取图片预览链接 用户:".concat(user2.account),
                                    data: {
                                        account: user2.account,
                                        idList: idList
                                    }
                                });
                                return [
                                    4,
                                    selectFiles({
                                        id: idList,
                                        userId: user2.id
                                    }, [
                                        "task_key",
                                        "name",
                                        "hash"
                                    ])
                                ];
                            case 1:
                                files = _state.sent();
                                keys = files.map(function(file) {
                                    return "easypicker2/".concat(file.task_key, "/").concat(file.hash, "/").concat(file.name);
                                });
                                expiredTime = getQiniuFileUrlExpiredTime(((_LocalUserDB_getSiteConfig = LocalUserDB.getSiteConfig()) === null || _LocalUserDB_getSiteConfig === void 0 ? void 0 : _LocalUserDB_getSiteConfig.downloadOneExpired) || 1);
                                return [
                                    4,
                                    _this.localFileService.batchFileStatus(keys)
                                ];
                            case 2:
                                filesStatus = _state.sent();
                                return [
                                    4,
                                    Promise.all(filesStatus.map(function() {
                                        var _ref = _async_to_generator(function(status, idx) {
                                            var _status_data_mimeType, _status_data, cover, preview;
                                            return _ts_generator(this, function(_state) {
                                                switch(_state.label){
                                                    case 0:
                                                        if (!(status.code === 200 && ((_status_data = status.data) === null || _status_data === void 0 ? void 0 : (_status_data_mimeType = _status_data.mimeType) === null || _status_data_mimeType === void 0 ? void 0 : _status_data_mimeType.includes("image")))) return [
                                                            3,
                                                            3
                                                        ];
                                                        return [
                                                            4,
                                                            _this.localFileService.getImagePreviewUrl(keys[idx], "cover", expiredTime, req)
                                                        ];
                                                    case 1:
                                                        cover = _state.sent();
                                                        return [
                                                            4,
                                                            _this.localFileService.getImagePreviewUrl(keys[idx], "preview", expiredTime, req)
                                                        ];
                                                    case 2:
                                                        preview = _state.sent();
                                                        return [
                                                            2,
                                                            {
                                                                cover: cover,
                                                                preview: preview
                                                            }
                                                        ];
                                                    case 3:
                                                        return [
                                                            2,
                                                            {
                                                                cover: "",
                                                                preview: "https://img.cdn.sugarat.top/mdImg/MTY0OTkwMDMxNTY4NA==649900315684"
                                                            }
                                                        ];
                                                }
                                            });
                                        });
                                        return function(status, idx) {
                                            return _ref.apply(this, arguments);
                                        };
                                    }()))
                                ];
                            case 3:
                                result = _state.sent();
                                return [
                                    2,
                                    result
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "downloadCount",
            value: function downloadCount(idList) {
                var _this = this;
                return _async_to_generator(function() {
                    var error;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _state.trys.push([
                                    0,
                                    2,
                                    ,
                                    3
                                ]);
                                return [
                                    4,
                                    _this.fileService.downloadCount(idList)
                                ];
                            case 1:
                                return [
                                    2,
                                    _state.sent()
                                ];
                            case 2:
                                error = _state.sent();
                                console.error("获取下载次数失败:", error);
                                return [
                                    2,
                                    wrapperCatchError(error)
                                ];
                            case 3:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "rewriteFilename",
            value: function rewriteFilename(id, newName, user2, req) {
                var _this = this;
                return _async_to_generator(function() {
                    var file, ossKey, newOssKey, isOldExist, isNewExist, _ref, keyToLocalPath2, oldPath, newPath, _ref1, ensureDir2;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    selectFiles({
                                        id: id,
                                        userId: user2.id
                                    })
                                ];
                            case 1:
                                file = _state.sent()[0];
                                if (!file) {
                                    addBehavior(req, {
                                        module: "file",
                                        msg: "重命名文件失败 用户:".concat(user2.account, " 文件id:").concat(id, " 新文件名:").concat(newName)
                                    });
                                    return [
                                        2,
                                        import_flash_wolves25.Response.failWithError(fileError.noPower)
                                    ];
                                }
                                ossKey = "easypicker2/".concat(file.task_key, "/").concat(file.hash, "/").concat(file.name);
                                newOssKey = "easypicker2/".concat(file.task_key, "/").concat(file.hash, "/").concat(newName);
                                return [
                                    4,
                                    _this.localFileService.judgeFileIsExist(ossKey)
                                ];
                            case 2:
                                isOldExist = _state.sent();
                                return [
                                    4,
                                    _this.localFileService.judgeFileIsExist(newOssKey)
                                ];
                            case 3:
                                isNewExist = _state.sent();
                                if (!isOldExist) {
                                    return [
                                        2,
                                        import_flash_wolves25.Response.failWithError(fileError.noOssFile)
                                    ];
                                }
                                if (isNewExist) {
                                    return [
                                        2,
                                        import_flash_wolves25.Response.failWithError(fileError.ossFileRepeat)
                                    ];
                                }
                                return [
                                    4,
                                    Promise.resolve().then(function() {
                                        return init_localFileUtil(), localFileUtil_exports;
                                    })
                                ];
                            case 4:
                                _ref = _state.sent(), keyToLocalPath2 = _ref.keyToLocalPath;
                                oldPath = keyToLocalPath2(ossKey);
                                newPath = keyToLocalPath2(newOssKey);
                                return [
                                    4,
                                    Promise.resolve().then(function() {
                                        return init_localFileUtil(), localFileUtil_exports;
                                    })
                                ];
                            case 5:
                                _ref1 = _state.sent(), ensureDir2 = _ref1.ensureDir;
                                ensureDir2(import_node_path6.default.dirname(newPath));
                                import_node_fs5.default.renameSync(oldPath, newPath);
                                return [
                                    4,
                                    updateFileInfo({
                                        id: id,
                                        userId: user2.id
                                    }, {
                                        name: newName
                                    })
                                ];
                            case 6:
                                _state.sent();
                                addBehavior(req, {
                                    module: "file",
                                    msg: "重命名文件成功 用户:".concat(user2.account, " 文件id:").concat(id, " 新文件名:").concat(newName)
                                });
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "listWithUrl",
            value: /**
  * 获取文件列表(带下载链接)
  */ function listWithUrl() {
                var _this = this;
                return _async_to_generator(function() {
                    var _LocalUserDB_getSiteConfig, _this_ctx_req_userInfo, userId, files, expiredTime;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _this_ctx_req_userInfo = _this.ctx.req.userInfo, userId = _this_ctx_req_userInfo.id;
                                return [
                                    4,
                                    selectFiles({
                                        userId: userId
                                    })
                                ];
                            case 1:
                                files = _state.sent();
                                expiredTime = getQiniuFileUrlExpiredTime(((_LocalUserDB_getSiteConfig = LocalUserDB.getSiteConfig()) === null || _LocalUserDB_getSiteConfig === void 0 ? void 0 : _LocalUserDB_getSiteConfig.downloadOneExpired) || 1);
                                return [
                                    2,
                                    {
                                        files: files.map(function(v) {
                                            return _object_spread_props(_object_spread({}, v), {
                                                download: _this.localFileService.getDownloadUrl(_this.fileService.getOssKey(v), expiredTime, _this.ctx.req)
                                            });
                                        })
                                    }
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "downloadOne",
            value: function downloadOne(id) {
                var _this = this;
                return _async_to_generator(function() {
                    var error;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _state.trys.push([
                                    0,
                                    2,
                                    ,
                                    3
                                ]);
                                return [
                                    4,
                                    _this.fileService.downloadOne(+id)
                                ];
                            case 1:
                                return [
                                    2,
                                    _state.sent()
                                ];
                            case 2:
                                error = _state.sent();
                                return [
                                    2,
                                    wrapperCatchError(error)
                                ];
                            case 3:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "downloadFile",
            value: /**
  * 文件重定向下载，记录下载日志，便于统计单文件真实被下载次数
  */ function downloadFile(key) {
                var _this = this;
                return _async_to_generator(function() {
                    var fileKey, download, _ref, downloadRecord, originUrl, token, e, localPath, _ref1, getThumbnailPath2, getPreviewPath2, fileName, stats, fileName1, _download_data, logAccount, tipName, mimeType, fileSize, _obj, logMap, fileStream;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                console.log("=== 文件下载接口被调用 ===");
                                console.log("下载 key:", key);
                                fileKey = null;
                                download = null;
                                _state.label = 1;
                            case 1:
                                _state.trys.push([
                                    1,
                                    3,
                                    ,
                                    4
                                ]);
                                (0, import_mongodb9.ObjectID)(key);
                                console.log("key 是 ObjectID，查找下载记录");
                                return [
                                    4,
                                    findAction({
                                        _id: (0, import_mongodb9.ObjectID)(key)
                                    })
                                ];
                            case 2:
                                _ref = _sliced_to_array.apply(void 0, [
                                    _state.sent(),
                                    1
                                ]), downloadRecord = _ref[0];
                                if (downloadRecord) {
                                    download = downloadRecord;
                                    console.log("找到下载记录:", downloadRecord.data);
                                    originUrl = downloadRecord.data.originUrl;
                                    if (originUrl.includes("/file/compress")) {
                                        console.log("检测到压缩文件下载，重定向到:", originUrl);
                                        _this.ctx.res.writeHead(302, {
                                            Location: originUrl
                                        });
                                        _this.ctx.res.end();
                                        return [
                                            2
                                        ];
                                    } else if (originUrl.includes("/file/download/")) {
                                        token = originUrl.split("/file/download/")[1];
                                        fileKey = verifyDownloadToken(token);
                                        console.log("从 originUrl 提取 token:", token, "fileKey:", fileKey);
                                    } else {
                                        fileKey = downloadRecord.data.originUrl.replace(/^https?:\/\/[^/]+/, "");
                                        console.log("使用 originUrl 作为 key:", fileKey);
                                    }
                                }
                                return [
                                    3,
                                    4
                                ];
                            case 3:
                                e = _state.sent();
                                console.log("key 不是 ObjectID，作为 token 处理");
                                fileKey = verifyDownloadToken(key);
                                console.log("token 验证结果:", fileKey);
                                if (!fileKey) {
                                    console.error("token 验证失败，key:", key);
                                    console.error("可能的原因：token 不存在或已过期");
                                }
                                return [
                                    3,
                                    4
                                ];
                            case 4:
                                if (!fileKey) return [
                                    3,
                                    8
                                ];
                                console.log("获取到文件 key:", fileKey);
                                if (!fileKey.startsWith("thumbnails/")) return [
                                    3,
                                    6
                                ];
                                return [
                                    4,
                                    Promise.resolve().then(function() {
                                        return init_localFileUtil(), localFileUtil_exports;
                                    })
                                ];
                            case 5:
                                _ref1 = _state.sent(), getThumbnailPath2 = _ref1.getThumbnailPath, getPreviewPath2 = _ref1.getPreviewPath;
                                localPath = import_node_path6.default.join(process.cwd(), "files-manage", fileKey);
                                return [
                                    3,
                                    7
                                ];
                            case 6:
                                if (fileKey.startsWith("compressed/")) {
                                    fileName = fileKey.replace("compressed/", "");
                                    localPath = import_node_path6.default.join(filesCompressedDir, fileName);
                                    console.log("压缩文件路径:", localPath);
                                } else {
                                    localPath = keyToLocalPath(fileKey);
                                }
                                _state.label = 7;
                            case 7:
                                console.log("文件本地路径:", localPath);
                                console.log("文件是否存在:", import_node_fs5.default.existsSync(localPath));
                                if (import_node_fs5.default.existsSync(localPath)) {
                                    stats = import_node_fs5.default.statSync(localPath);
                                    fileName1 = import_node_path6.default.basename(localPath);
                                    console.log("文件信息 - 名称:", fileName1, "大小:", stats.size);
                                    if (download) {
                                        _download_data = download.data, logAccount = _download_data.account, tipName = _download_data.tip, mimeType = _download_data.mimeType, fileSize = _download_data.size;
                                        ;
                                        logMap = (_obj = {}, _define_property(_obj, ActionType.Download, "下载文件成功"), _define_property(_obj, ActionType.Compress, "归档下载文件成功"), _define_property(_obj, ActionType.TemplateDownload, "下载模板文件"), _obj);
                                        _this.behaviorService.add("file", "".concat(logMap[download.type], " 用户:").concat(logAccount, " 文件:").concat(tipName || fileName1, " 类型:").concat(mimeType), {
                                            account: logAccount,
                                            downloadType: download.type,
                                            name: tipName || fileName1,
                                            size: fileSize || stats.size,
                                            mimeType: mimeType,
                                            downloadActionId: key
                                        });
                                    }
                                    console.log("设置响应头并开始发送文件流");
                                    _this.ctx.res.writeHead(200, {
                                        "Content-Type": "application/octet-stream",
                                        "Content-Disposition": 'attachment; filename="'.concat(encodeURIComponent(fileName1), '"'),
                                        "Content-Length": stats.size.toString(),
                                        "Cache-Control": "no-cache",
                                        "Access-Control-Allow-Origin": "*"
                                    });
                                    fileStream = import_node_fs5.default.createReadStream(localPath);
                                    fileStream.on("open", function() {
                                        console.log("文件流已打开");
                                    });
                                    fileStream.on("data", function(chunk) {
                                        console.log("发送数据块，大小:", chunk.length);
                                    });
                                    fileStream.on("error", function(err) {
                                        console.error("文件读取错误:", err);
                                        if (!_this.ctx.res.headersSent) {
                                            _this.ctx.res.writeHead(500, {
                                                "Content-Type": "application/json;charset=utf-8"
                                            });
                                            _this.ctx.res.end(JSON.stringify({
                                                code: 500,
                                                msg: "文件读取失败"
                                            }));
                                        } else {
                                            _this.ctx.res.destroy();
                                        }
                                    });
                                    fileStream.on("end", function() {
                                        console.log("文件流读取完成");
                                    });
                                    _this.ctx.res.on("finish", function() {
                                        console.log("响应已完成");
                                    });
                                    _this.ctx.res.on("close", function() {
                                        console.log("响应连接已关闭");
                                        if (!fileStream.destroyed) {
                                            fileStream.destroy();
                                        }
                                    });
                                    fileStream.pipe(_this.ctx.res);
                                    return [
                                        2,
                                        new Promise(function(resolve) {
                                            fileStream.on("end", function() {
                                                console.log("文件流读取完成，Promise resolve");
                                                resolve();
                                            });
                                            fileStream.on("error", function() {
                                                resolve();
                                            });
                                        })
                                    ];
                                }
                                _state.label = 8;
                            case 8:
                                console.error("文件下载失败 - fileKey:", fileKey, "key:", key);
                                _this.behaviorService.add("file", "文件下载失败: ".concat(key));
                                return [
                                    2,
                                    import_flash_wolves25.Response.failWithError(publicError.request.errorParams)
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "batchDownload",
            value: function batchDownload(body) {
                var _this = this;
                return _async_to_generator(function() {
                    var ids, zipName, result, archiveKey, expiredTime, downloadUrl, error;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                ids = body.ids, zipName = body.zipName;
                                _state.label = 1;
                            case 1:
                                _state.trys.push([
                                    1,
                                    3,
                                    ,
                                    4
                                ]);
                                return [
                                    4,
                                    _this.fileService.batchDownload(ids, zipName)
                                ];
                            case 2:
                                result = _state.sent();
                                archiveKey = result.k;
                                expiredTime = Math.floor(Date.now() / 1e3) + 3600 * 12;
                                downloadUrl = _this.localFileService.getDownloadUrl(archiveKey, expiredTime, _this.ctx.req);
                                return [
                                    2,
                                    _object_spread_props(_object_spread({}, result), {
                                        downloadUrl: downloadUrl
                                    })
                                ];
                            case 3:
                                error = _state.sent();
                                return [
                                    2,
                                    wrapperCatchError(error)
                                ];
                            case 4:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "downloadCompressFile",
            value: /**
  * 直接下载压缩文件（通过压缩文件 key）
  * 使用查询参数，避免路径中包含 / 导致路由匹配失败
  */ function downloadCompressFile(key) {
                var _this = this;
                return _async_to_generator(function() {
                    var decodedKey, localPath, fileName2, stats, fileName, fileStream;
                    return _ts_generator(this, function(_state) {
                        console.log("=== 压缩文件下载接口被调用 ===");
                        console.log("压缩文件 key:", key);
                        console.log("请求 URL:", _this.ctx.req.url);
                        if (!key) {
                            console.error("缺少 key 参数");
                            return [
                                2,
                                import_flash_wolves25.Response.failWithError(publicError.request.errorParams)
                            ];
                        }
                        decodedKey = decodeURIComponent(key);
                        console.log("解码后的 key:", decodedKey);
                        if (decodedKey.startsWith("compressed/")) {
                            fileName2 = decodedKey.replace("compressed/", "");
                            localPath = import_node_path6.default.join(filesCompressedDir, fileName2);
                        } else {
                            localPath = import_node_path6.default.join(filesCompressedDir, decodedKey);
                        }
                        console.log("压缩文件本地路径:", localPath);
                        console.log("文件是否存在:", import_node_fs5.default.existsSync(localPath));
                        if (!import_node_fs5.default.existsSync(localPath)) {
                            console.error("压缩文件不存在:", localPath);
                            return [
                                2,
                                import_flash_wolves25.Response.failWithError(publicError.request.errorParams)
                            ];
                        }
                        stats = import_node_fs5.default.statSync(localPath);
                        fileName = import_node_path6.default.basename(localPath);
                        console.log("文件信息 - 名称:", fileName, "大小:", stats.size);
                        console.log("设置响应头并开始发送文件流");
                        _this.ctx.res.writeHead(200, {
                            "Content-Type": "application/zip",
                            "Content-Disposition": 'attachment; filename="'.concat(encodeURIComponent(fileName), '"'),
                            "Content-Length": stats.size.toString(),
                            "Cache-Control": "no-cache",
                            "Access-Control-Allow-Origin": "*"
                        });
                        fileStream = import_node_fs5.default.createReadStream(localPath);
                        fileStream.on("error", function(err) {
                            console.error("文件读取错误:", err);
                            if (!_this.ctx.res.headersSent) {
                                _this.ctx.res.writeHead(500, {
                                    "Content-Type": "application/json;charset=utf-8"
                                });
                                _this.ctx.res.end(JSON.stringify({
                                    code: 500,
                                    msg: "文件读取失败"
                                }));
                            } else {
                                _this.ctx.res.destroy();
                            }
                        });
                        fileStream.pipe(_this.ctx.res);
                        return [
                            2,
                            new Promise(function(resolve) {
                                fileStream.on("end", function() {
                                    console.log("文件流读取完成");
                                    resolve();
                                });
                                fileStream.on("error", function() {
                                    resolve();
                                });
                            })
                        ];
                    });
                })();
            }
        },
        {
            key: "downloadTemplate",
            value: /**
  * 模板文件下载
  */ function downloadTemplate(query3) {
                var _this = this;
                return _async_to_generator(function() {
                    var template, key, error;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                template = query3.template, key = query3.key;
                                _state.label = 1;
                            case 1:
                                _state.trys.push([
                                    1,
                                    3,
                                    ,
                                    4
                                ]);
                                return [
                                    4,
                                    _this.fileService.downloadTemplate(template, key)
                                ];
                            case 2:
                                return [
                                    2,
                                    _state.sent()
                                ];
                            case 3:
                                error = _state.sent();
                                return [
                                    2,
                                    wrapperCatchError(error)
                                ];
                            case 4:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            /**
  * 获取上传令牌（兼容接口，返回上传地址）
  */ key: "getUploadToken",
            value: function getUploadToken() {
                this.behaviorService.add("file", "获取文件上传地址");
                return {
                    token: "",
                    uploadUrl: "/api/file/upload"
                };
            }
        },
        {
            key: "uploadFile",
            value: /**
  * 文件上传接口
  */ function uploadFile(req) {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        console.log("=== 文件上传接口被调用 ===");
                        console.log("URL:", req.url);
                        console.log("Method:", req.method);
                        console.log("Content-Type:", req.headers["content-type"]);
                        return [
                            2,
                            new Promise(function(resolve, reject) {
                                var form = (0, import_formidable.default)({
                                    multiples: false,
                                    keepExtensions: true,
                                    maxFileSize: 1024 * 1024 * 1024 * 5,
                                    uploadDir: filesTempDir
                                });
                                console.log("formidable 实例创建成功, uploadDir:", filesTempDir);
                                form.parse(req, function() {
                                    var _ref = _async_to_generator(function(err, fields, files) {
                                        var file, key, saved, info, result, error;
                                        return _ts_generator(this, function(_state) {
                                            switch(_state.label){
                                                case 0:
                                                    console.log("formidable parse 回调被调用");
                                                    console.log("err:", err);
                                                    console.log("fields:", JSON.stringify(fields));
                                                    console.log("files:", files ? Object.keys(files) : "null");
                                                    if (err) {
                                                        console.error("文件上传解析错误:", err);
                                                        resolve(import_flash_wolves25.Response.fail(500, "文件上传失败: ".concat(err.message)));
                                                        return [
                                                            2
                                                        ];
                                                    }
                                                    file = Array.isArray(files.file) ? files.file[0] : files.file;
                                                    if (!file) {
                                                        console.error("未找到上传文件, files:", files);
                                                        resolve(import_flash_wolves25.Response.fail(400, "未找到上传文件"));
                                                        return [
                                                            2
                                                        ];
                                                    }
                                                    _state.label = 1;
                                                case 1:
                                                    _state.trys.push([
                                                        1,
                                                        7,
                                                        ,
                                                        8
                                                    ]);
                                                    key = Array.isArray(fields.key) ? fields.key[0] : fields.key;
                                                    if (!key || typeof key !== "string") {
                                                        console.error("缺少文件 key 参数, fields:", fields);
                                                        resolve(import_flash_wolves25.Response.fail(400, "缺少文件 key 参数"));
                                                        return [
                                                            2
                                                        ];
                                                    }
                                                    console.log("开始保存文件, key:", key, "filepath:", file.filepath, "size:", file.size);
                                                    return [
                                                        4,
                                                        _this.localFileService.saveFile(key, file.filepath)
                                                    ];
                                                case 2:
                                                    saved = _state.sent();
                                                    if (!saved) {
                                                        console.error("文件保存失败, key:", key);
                                                        resolve(import_flash_wolves25.Response.fail(500, "文件保存失败"));
                                                        return [
                                                            2
                                                        ];
                                                    }
                                                    console.log("文件保存成功, key:", key);
                                                    return [
                                                        4,
                                                        _this.localFileService.getFileInfo(key)
                                                    ];
                                                case 3:
                                                    info = _state.sent();
                                                    if (!(info && info.mimeType.includes("image"))) return [
                                                        3,
                                                        6
                                                    ];
                                                    return [
                                                        4,
                                                        _this.localFileService.generateThumbnail(key)
                                                    ];
                                                case 4:
                                                    _state.sent();
                                                    return [
                                                        4,
                                                        _this.localFileService.generatePreview(key)
                                                    ];
                                                case 5:
                                                    _state.sent();
                                                    _state.label = 6;
                                                case 6:
                                                    try {
                                                        import_node_fs5.default.unlinkSync(file.filepath);
                                                    } catch (e) {}
                                                    _this.behaviorService.add("file", "文件上传成功: ".concat(key), {
                                                        key: key,
                                                        size: file.size,
                                                        mimeType: file.mimetype
                                                    });
                                                    result = {
                                                        code: 0,
                                                        data: {
                                                            key: key,
                                                            hash: "",
                                                            fsize: file.size
                                                        },
                                                        msg: "ok"
                                                    };
                                                    console.log("返回响应:", JSON.stringify(result));
                                                    resolve(result);
                                                    return [
                                                        3,
                                                        8
                                                    ];
                                                case 7:
                                                    error = _state.sent();
                                                    console.error("文件上传异常:", error);
                                                    resolve(import_flash_wolves25.Response.fail(500, "文件上传失败: ".concat(error)));
                                                    return [
                                                        3,
                                                        8
                                                    ];
                                                case 8:
                                                    return [
                                                        2
                                                    ];
                                            }
                                        });
                                    });
                                    return function(err, fields, files) {
                                        return _ref.apply(this, arguments);
                                    };
                                }());
                                form.on("error", function(err) {
                                    console.error("formidable 错误:", err);
                                    reject(err);
                                });
                            })
                        ];
                    });
                })();
            }
        },
        {
            key: "submitInfo",
            value: function submitInfo(data) {
                var _this = this;
                return _async_to_generator(function() {
                    var task, userId, error;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _state.trys.push([
                                    0,
                                    3,
                                    ,
                                    4
                                ]);
                                return [
                                    4,
                                    _this.taskService.getTaskByKey(data.taskKey)
                                ];
                            case 1:
                                task = _state.sent();
                                if (!task) {
                                    _this.behaviorService.add("file", "提交文件: 参数错误", data);
                                    throw publicError.request.errorParams;
                                }
                                userId = task.userId;
                                Object.assign(data, {
                                    userId: userId,
                                    categoryKey: "",
                                    people: data.people || "",
                                    originName: data.originName || ""
                                });
                                return [
                                    4,
                                    _this.fileService.addFile(data)
                                ];
                            case 2:
                                _state.sent();
                                _this.behaviorService.add("file", "提交文件: 文件名:".concat(data.name, " 成功"), data);
                                return [
                                    3,
                                    4
                                ];
                            case 3:
                                error = _state.sent();
                                return [
                                    2,
                                    wrapperCatchError(error)
                                ];
                            case 4:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "getAllUserFiles",
            value: function getAllUserFiles() {
                var _this = this;
                return _async_to_generator(function() {
                    var _this_ctx_req_userInfo, logAccount, files;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _this_ctx_req_userInfo = _this.ctx.req.userInfo, logAccount = _this_ctx_req_userInfo.account;
                                return [
                                    4,
                                    _this.fileService.getUserFiles()
                                ];
                            case 1:
                                files = _state.sent();
                                _this.behaviorService.add("file", "获取文件列表 用户:".concat(logAccount, " 成功"), {
                                    logAccount: logAccount
                                });
                                return [
                                    2,
                                    {
                                        files: files.map(function(v) {
                                            return _object_spread_props(_object_spread({}, v), {
                                                // 兼容逻辑
                                                category_key: v.categoryKey,
                                                origin_name: v.originName,
                                                task_name: v.taskName,
                                                task_key: v.taskKey,
                                                size: +v.size
                                            });
                                        })
                                    }
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "deleteOneFile",
            value: function deleteOneFile(id) {
                var _this = this;
                return _async_to_generator(function() {
                    var _this_ctx_req_userInfo, userId, file, error;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _this_ctx_req_userInfo = _this.ctx.req.userInfo, userId = _this_ctx_req_userInfo.id;
                                _state.label = 1;
                            case 1:
                                _state.trys.push([
                                    1,
                                    4,
                                    ,
                                    5
                                ]);
                                return [
                                    4,
                                    _this.fileService.findOneFile({
                                        id: id,
                                        userId: userId
                                    })
                                ];
                            case 2:
                                file = _state.sent();
                                return [
                                    4,
                                    _this.fileService.deleteOneFile(file)
                                ];
                            case 3:
                                _state.sent();
                                return [
                                    3,
                                    5
                                ];
                            case 4:
                                error = _state.sent();
                                return [
                                    2,
                                    wrapperCatchError(error)
                                ];
                            case 5:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "withdrawFile",
            value: function withdrawFile(body) {
                var _this = this;
                return _async_to_generator(function() {
                    var error;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _state.trys.push([
                                    0,
                                    2,
                                    ,
                                    3
                                ]);
                                return [
                                    4,
                                    _this.fileService.withdrawFile(body)
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    3,
                                    3
                                ];
                            case 2:
                                error = _state.sent();
                                return [
                                    2,
                                    wrapperCatchError(error)
                                ];
                            case 3:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "batchDelete",
            value: function batchDelete(ids) {
                var _this = this;
                return _async_to_generator(function() {
                    var error;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _state.trys.push([
                                    0,
                                    2,
                                    ,
                                    3
                                ]);
                                return [
                                    4,
                                    _this.fileService.batchDelete(ids)
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    3,
                                    3
                                ];
                            case 2:
                                error = _state.sent();
                                return [
                                    2,
                                    wrapperCatchError(error)
                                ];
                            case 3:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "compressStatus",
            value: /**
  * 查询文件归档进度，已下线
  */ function compressStatus(id, req) {
                return _async_to_generator(function() {
                    var data;
                    return _ts_generator(this, function(_state) {
                        data = checkLocalCompressStatus(id);
                        if (data.code === 3) {
                            addErrorLog(req, data.desc + data.error);
                            return [
                                2,
                                import_flash_wolves25.Response.fail(500, data.desc + data.error)
                            ];
                        }
                        return [
                            2,
                            data
                        ];
                    });
                })();
            }
        },
        {
            key: "checkSubmitInfo",
            value: function checkSubmitInfo(body) {
                var _this = this;
                return _async_to_generator(function() {
                    var result;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _this.fileService.checkSubmitInfo(body)
                                ];
                            case 1:
                                result = _state.sent();
                                return [
                                    2,
                                    result
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return _a31;
}(), __name(_a31, "FileController"), _a31);
_ts_decorate28([
    (0, import_flash_wolves25.InjectCtx)(),
    _ts_metadata21("design:type", typeof Context === "undefined" ? Object : Context)
], FileController.prototype, "ctx", void 0);
_ts_decorate28([
    (0, import_flash_wolves25.Inject)(FileService),
    _ts_metadata21("design:type", typeof FileService === "undefined" ? Object : FileService)
], FileController.prototype, "fileService", void 0);
_ts_decorate28([
    (0, import_flash_wolves25.Inject)(BehaviorService),
    _ts_metadata21("design:type", typeof BehaviorService === "undefined" ? Object : BehaviorService)
], FileController.prototype, "behaviorService", void 0);
_ts_decorate28([
    (0, import_flash_wolves25.Inject)(TaskService),
    _ts_metadata21("design:type", typeof TaskService === "undefined" ? Object : TaskService)
], FileController.prototype, "taskService", void 0);
_ts_decorate28([
    (0, import_flash_wolves25.Inject)(LocalFileService),
    _ts_metadata21("design:type", typeof LocalFileService === "undefined" ? Object : LocalFileService)
], FileController.prototype, "localFileService", void 0);
_ts_decorate28([
    (0, import_flash_wolves25.Post)("/image/preview"),
    _ts_param4(0, (0, import_flash_wolves25.ReqBody)("ids")),
    _ts_param4(1, ReqUserInfo()),
    _ts_metadata21("design:type", Function),
    _ts_metadata21("design:paramtypes", [
        Array,
        typeof User === "undefined" ? Object : User,
        typeof FWRequest === "undefined" ? Object : FWRequest
    ])
], FileController.prototype, "getPreviewURL", null);
_ts_decorate28([
    (0, import_flash_wolves25.Post)("/download/count"),
    _ts_param4(0, (0, import_flash_wolves25.ReqBody)("ids")),
    _ts_metadata21("design:type", Function),
    _ts_metadata21("design:paramtypes", [
        Array
    ])
], FileController.prototype, "downloadCount", null);
_ts_decorate28([
    (0, import_flash_wolves25.Put)("/name/rewrite"),
    _ts_param4(0, (0, import_flash_wolves25.ReqBody)("id")),
    _ts_param4(1, (0, import_flash_wolves25.ReqBody)("name")),
    _ts_param4(2, ReqUserInfo()),
    _ts_metadata21("design:type", Function),
    _ts_metadata21("design:paramtypes", [
        Number,
        String,
        typeof User === "undefined" ? Object : User,
        typeof FWRequest === "undefined" ? Object : FWRequest
    ])
], FileController.prototype, "rewriteFilename", null);
_ts_decorate28([
    (0, import_flash_wolves25.Get)("/list/withUrl"),
    _ts_metadata21("design:type", Function),
    _ts_metadata21("design:paramtypes", [])
], FileController.prototype, "listWithUrl", null);
_ts_decorate28([
    (0, import_flash_wolves25.Get)("/one"),
    _ts_param4(0, (0, import_flash_wolves25.ReqQuery)("id")),
    _ts_metadata21("design:type", Function),
    _ts_metadata21("design:paramtypes", [
        String
    ])
], FileController.prototype, "downloadOne", null);
_ts_decorate28([
    (0, import_flash_wolves25.Get)("/download/:key", noLogin),
    _ts_param4(0, (0, import_flash_wolves25.ReqParams)("key")),
    _ts_metadata21("design:type", Function),
    _ts_metadata21("design:paramtypes", [
        String
    ])
], FileController.prototype, "downloadFile", null);
_ts_decorate28([
    (0, import_flash_wolves25.Post)("/batch/down"),
    _ts_param4(0, (0, import_flash_wolves25.ReqBody)()),
    _ts_metadata21("design:type", Function),
    _ts_metadata21("design:paramtypes", [
        void 0
    ])
], FileController.prototype, "batchDownload", null);
_ts_decorate28([
    (0, import_flash_wolves25.Get)("/compress", noLogin),
    _ts_param4(0, (0, import_flash_wolves25.ReqQuery)("key")),
    _ts_metadata21("design:type", Function),
    _ts_metadata21("design:paramtypes", [
        String
    ])
], FileController.prototype, "downloadCompressFile", null);
_ts_decorate28([
    (0, import_flash_wolves25.Get)("/template", noLogin),
    _ts_param4(0, (0, import_flash_wolves25.ReqQuery)()),
    _ts_metadata21("design:type", Function),
    _ts_metadata21("design:paramtypes", [
        void 0
    ])
], FileController.prototype, "downloadTemplate", null);
_ts_decorate28([
    (0, import_flash_wolves25.Get)("/token", noLogin),
    _ts_metadata21("design:type", Function),
    _ts_metadata21("design:paramtypes", [])
], FileController.prototype, "getUploadToken", null);
_ts_decorate28([
    (0, import_flash_wolves25.Post)("/upload", noLogin),
    _ts_metadata21("design:type", Function),
    _ts_metadata21("design:paramtypes", [
        typeof FWRequest === "undefined" ? Object : FWRequest
    ])
], FileController.prototype, "uploadFile", null);
_ts_decorate28([
    (0, import_flash_wolves25.Post)("/info", noLogin),
    _ts_param4(0, (0, import_flash_wolves25.ReqBody)()),
    _ts_metadata21("design:type", Function),
    _ts_metadata21("design:paramtypes", [
        typeof Files === "undefined" ? Object : Files
    ])
], FileController.prototype, "submitInfo", null);
_ts_decorate28([
    (0, import_flash_wolves25.Get)("/list"),
    _ts_metadata21("design:type", Function),
    _ts_metadata21("design:paramtypes", [])
], FileController.prototype, "getAllUserFiles", null);
_ts_decorate28([
    (0, import_flash_wolves25.Delete)("/one"),
    _ts_param4(0, (0, import_flash_wolves25.ReqBody)("id")),
    _ts_metadata21("design:type", Function),
    _ts_metadata21("design:paramtypes", [
        void 0
    ])
], FileController.prototype, "deleteOneFile", null);
_ts_decorate28([
    (0, import_flash_wolves25.Delete)("/withdraw", noLogin),
    _ts_param4(0, (0, import_flash_wolves25.ReqBody)()),
    _ts_metadata21("design:type", Function),
    _ts_metadata21("design:paramtypes", [
        void 0
    ])
], FileController.prototype, "withdrawFile", null);
_ts_decorate28([
    (0, import_flash_wolves25.Delete)("/batch/del"),
    _ts_param4(0, (0, import_flash_wolves25.ReqBody)("ids")),
    _ts_metadata21("design:type", Function),
    _ts_metadata21("design:paramtypes", [
        Array
    ])
], FileController.prototype, "batchDelete", null);
_ts_decorate28([
    (0, import_flash_wolves25.Post)("/compress/status"),
    _ts_param4(0, (0, import_flash_wolves25.ReqBody)("id")),
    _ts_metadata21("design:type", Function),
    _ts_metadata21("design:paramtypes", [
        String,
        typeof FWRequest === "undefined" ? Object : FWRequest
    ])
], FileController.prototype, "compressStatus", null);
_ts_decorate28([
    (0, import_flash_wolves25.Post)("submit/people", noLogin),
    _ts_param4(0, (0, import_flash_wolves25.ReqBody)()),
    _ts_metadata21("design:type", Function),
    _ts_metadata21("design:paramtypes", [
        void 0
    ])
], FileController.prototype, "checkSubmitInfo", null);
FileController = _ts_decorate28([
    (0, import_flash_wolves25.RouterController)("file", power3)
], FileController);
// src/controllers/taskInfo.ts
var import_flash_wolves26 = require("flash-wolves");
function _ts_decorate29(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate29, "_ts_decorate");
function _ts_metadata22(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata22, "_ts_metadata");
function _ts_param5(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
__name(_ts_param5, "_ts_param");
var power4 = {
    needLogin: true
};
var notLogin = {
    needLogin: false
};
var _a32;
var TaskInfoController = (_a32 = /*#__PURE__*/ function() {
    "use strict";
    function _a32() {
        _class_call_check(this, _a32);
        __publicField(this, "taskInfoService");
    }
    _create_class(_a32, [
        {
            key: "getUsefulTemplate",
            value: function getUsefulTemplate(taskKey) {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        return [
                            2,
                            _this.taskInfoService.getUseFullTemplate(taskKey)
                        ];
                    });
                })();
            }
        },
        {
            key: "delTipImage",
            value: // TODO：预览图片流量统计
            function delTipImage(uid, name, key) {
                var _this = this;
                return _async_to_generator(function() {
                    var error;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _state.trys.push([
                                    0,
                                    2,
                                    ,
                                    3
                                ]);
                                return [
                                    4,
                                    _this.taskInfoService.delTipImage({
                                        uid: uid,
                                        name: name,
                                        key: key
                                    })
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    3,
                                    3
                                ];
                            case 2:
                                error = _state.sent();
                                return [
                                    2,
                                    wrapperCatchError(error)
                                ];
                            case 3:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "getTaskInfo",
            value: function getTaskInfo(key) {
                return this.taskInfoService.getTaskInfo(key);
            }
        },
        {
            key: "updateTaskInfo",
            value: function updateTaskInfo(body, key) {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        return [
                            2,
                            _this.taskInfoService.updateTaskInfo(body, key)
                        ];
                    });
                })();
            }
        }
    ]);
    return _a32;
}(), __name(_a32, "TaskInfoController"), _a32);
_ts_decorate29([
    (0, import_flash_wolves26.Inject)(TaskInfoService),
    _ts_metadata22("design:type", typeof TaskInfoService === "undefined" ? Object : TaskInfoService)
], TaskInfoController.prototype, "taskInfoService", void 0);
_ts_decorate29([
    (0, import_flash_wolves26.Get)("/template/:key"),
    _ts_param5(0, (0, import_flash_wolves26.ReqParams)("key")),
    _ts_metadata22("design:type", Function),
    _ts_metadata22("design:paramtypes", [
        String
    ])
], TaskInfoController.prototype, "getUsefulTemplate", null);
_ts_decorate29([
    (0, import_flash_wolves26.Delete)("/tip/image/:key"),
    _ts_param5(0, (0, import_flash_wolves26.ReqBody)("uid")),
    _ts_param5(1, (0, import_flash_wolves26.ReqBody)("name")),
    _ts_param5(2, (0, import_flash_wolves26.ReqParams)("key")),
    _ts_metadata22("design:type", Function),
    _ts_metadata22("design:paramtypes", [
        Number,
        String,
        String
    ])
], TaskInfoController.prototype, "delTipImage", null);
_ts_decorate29([
    (0, import_flash_wolves26.Get)("/:key", notLogin),
    _ts_param5(0, (0, import_flash_wolves26.ReqParams)("key")),
    _ts_metadata22("design:type", Function),
    _ts_metadata22("design:paramtypes", [
        String
    ])
], TaskInfoController.prototype, "getTaskInfo", null);
_ts_decorate29([
    (0, import_flash_wolves26.Put)("/:key"),
    _ts_param5(0, (0, import_flash_wolves26.ReqBody)()),
    _ts_param5(1, (0, import_flash_wolves26.ReqParams)("key")),
    _ts_metadata22("design:type", Function),
    _ts_metadata22("design:paramtypes", [
        void 0,
        String
    ])
], TaskInfoController.prototype, "updateTaskInfo", null);
TaskInfoController = _ts_decorate29([
    (0, import_flash_wolves26.RouterController)("task_info", power4)
], TaskInfoController);
// src/controllers/public.ts
var import_flash_wolves27 = require("flash-wolves");
function _ts_decorate30(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate30, "_ts_decorate");
function _ts_metadata23(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata23, "_ts_metadata");
function _ts_param6(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
__name(_ts_param6, "_ts_param");
var _a33;
var PublicController = (_a33 = /*#__PURE__*/ function() {
    "use strict";
    function _a33() {
        _class_call_check(this, _a33);
        __publicField(this, "publicService");
    }
    _create_class(_a33, [
        {
            key: "getVerCode",
            value: function getVerCode(email, scene, user2) {
                var _this = this;
                return _async_to_generator(function() {
                    var _user2, targetEmail, sceneKey, error;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                targetEmail = ((_user2 = user2) === null || _user2 === void 0 ? void 0 : _user2.email) || email;
                                _state.label = 1;
                            case 1:
                                _state.trys.push([
                                    1,
                                    3,
                                    ,
                                    4
                                ]);
                                if (!targetEmail) {
                                    throw UserError.email.noExist;
                                }
                                sceneKey = scene || "default";
                                return [
                                    4,
                                    _this.publicService.getVerifyCode(targetEmail, sceneKey)
                                ];
                            case 2:
                                _state.sent();
                                return [
                                    3,
                                    4
                                ];
                            case 3:
                                error = _state.sent();
                                return [
                                    2,
                                    wrapperCatchError(error)
                                ];
                            case 4:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "reportPv",
            value: function reportPv() {
                return this.publicService.reportPV();
            }
        },
        {
            key: "checkEmailIsExist",
            value: function checkEmailIsExist(email) {
                var _this = this;
                return _async_to_generator(function() {
                    var error;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _state.trys.push([
                                    0,
                                    2,
                                    ,
                                    3
                                ]);
                                return [
                                    4,
                                    _this.publicService.checkEmailIsExist(email)
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    3,
                                    3
                                ];
                            case 2:
                                error = _state.sent();
                                return [
                                    2,
                                    wrapperCatchError(error)
                                ];
                            case 3:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "getTipImage",
            value: function getTipImage(key, data) {
                return this.publicService.getTipImage(key, data);
            }
        }
    ]);
    return _a33;
}(), __name(_a33, "PublicController"), _a33);
_ts_decorate30([
    (0, import_flash_wolves27.Inject)(PublicService),
    _ts_metadata23("design:type", typeof PublicService === "undefined" ? Object : PublicService)
], PublicController.prototype, "publicService", void 0);
_ts_decorate30([
    (0, import_flash_wolves27.Get)("code"),
    _ts_param6(0, (0, import_flash_wolves27.ReqQuery)("email")),
    _ts_param6(1, (0, import_flash_wolves27.ReqQuery)("scene")),
    _ts_param6(2, ReqUserInfo()),
    _ts_metadata23("design:type", Function),
    _ts_metadata23("design:paramtypes", [
        String,
        String,
        typeof User2 === "undefined" ? Object : User2
    ])
], PublicController.prototype, "getVerCode", null);
_ts_decorate30([
    (0, import_flash_wolves27.Get)("report/pv", {
        CORS: true
    }),
    (0, import_flash_wolves27.Post)("report/pv"),
    _ts_metadata23("design:type", Function),
    _ts_metadata23("design:paramtypes", [])
], PublicController.prototype, "reportPv", null);
_ts_decorate30([
    (0, import_flash_wolves27.Get)("check/email"),
    _ts_param6(0, (0, import_flash_wolves27.ReqQuery)("email")),
    _ts_metadata23("design:type", Function),
    _ts_metadata23("design:paramtypes", [
        String
    ])
], PublicController.prototype, "checkEmailIsExist", null);
_ts_decorate30([
    (0, import_flash_wolves27.Post)("tip/image"),
    _ts_param6(0, (0, import_flash_wolves27.ReqBody)("key")),
    _ts_param6(1, (0, import_flash_wolves27.ReqBody)("data")),
    _ts_metadata23("design:type", Function),
    _ts_metadata23("design:paramtypes", [
        String,
        Array
    ])
], PublicController.prototype, "getTipImage", null);
PublicController = _ts_decorate30([
    (0, import_flash_wolves27.RouterController)("public")
], PublicController);
// src/controllers/super/user.ts
var import_flash_wolves28 = require("flash-wolves");
var import_dayjs3 = __toESM(require("dayjs"));
var import_typeorm11 = require("typeorm");
// src/service/file.ts
var _a34;
var FileService2 = (_a34 = /*#__PURE__*/ function() {
    "use strict";
    function _a34() {
        _class_call_check(this, _a34);
    }
    _create_class(_a34, [
        {
            key: "getOssKey",
            value: function getOssKey(file) {
                return "easypicker2/".concat(file.task_key || file.taskKey, "/").concat(file.hash, "/").concat(file.name);
            }
        }
    ]);
    return _a34;
}(), __name(_a34, "FileService"), _a34);
var file_default = new FileService2();
// src/db/model/message.ts
var MessageType;
(function(MessageType2) {
    MessageType2[MessageType2["GLOBAL_PUSH"] = 0] = "GLOBAL_PUSH";
    MessageType2[MessageType2["USER_PUSH"] = 1] = "USER_PUSH";
})(MessageType || (MessageType = {}));
var MessageStyle;
(function(MessageStyle2) {
    MessageStyle2[MessageStyle2["Dialog"] = 0] = "Dialog";
    MessageStyle2[MessageStyle2["Notification"] = 1] = "Notification";
    MessageStyle2[MessageStyle2["MESSAGE"] = 2] = "MESSAGE";
    MessageStyle2[MessageStyle2["Link"] = 3] = "Link";
})(MessageStyle || (MessageStyle = {}));
// src/service/message.ts
var _a35;
var MessageService = (_a35 = /*#__PURE__*/ function() {
    "use strict";
    function _a35() {
        _class_call_check(this, _a35);
    }
    _create_class(_a35, [
        {
            key: "sendMessage",
            value: function sendMessage(source, target, text) {
                return insertCollection("message", {
                    id: getUniqueKey(),
                    source: source,
                    target: target,
                    type: MessageType.USER_PUSH,
                    style: MessageStyle.Dialog,
                    date: /* @__PURE__ */ new Date(),
                    text: text,
                    read: false
                });
            }
        },
        {
            key: "sendGlobalMessage",
            value: function sendGlobalMessage(source, text) {
                return _async_to_generator(function() {
                    var users;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    selectAllUser([
                                        "id"
                                    ])
                                ];
                            case 1:
                                users = _state.sent();
                                return [
                                    2,
                                    insertCollection("message", users.map(function(u) {
                                        return {
                                            id: getUniqueKey(),
                                            source: source,
                                            target: u.id,
                                            type: MessageType.GLOBAL_PUSH,
                                            style: MessageStyle.Dialog,
                                            date: /* @__PURE__ */ new Date(),
                                            text: text,
                                            read: false
                                        };
                                    }), true)
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "getMessageList",
            value: function getMessageList(userId) {
                return findCollection("message", {
                    target: userId
                }).then(function(v) {
                    v.sort(function(a, b) {
                        return b.date.getTime() - a.date.getTime();
                    });
                    return v;
                });
            }
        },
        {
            key: "readMessage",
            value: function readMessage(userId, msgId) {
                return updateCollection("message", {
                    target: userId,
                    id: msgId
                }, {
                    $set: {
                        read: true
                    }
                });
            }
        },
        {
            key: "clearMessageFormat",
            value: function clearMessageFormat(title, lines) {
                var callMe = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
                return '<section id="nice" data-tool="mdnice编辑器" data-website="https://www.mdnice.com" style="font-size: 16px; color: black; padding: 0 10px; line-height: 1.6; word-spacing: 0px; letter-spacing: 0px; word-break: break-word; word-wrap: break-word; text-align: left; font-family: Optima-Regular, Optima, PingFangSC-light, PingFangTC-light, \'PingFang SC\', Cambria, Cochin, Georgia, Times, \'Times New Roman\', serif;"><h2 data-tool="mdnice编辑器" style="margin-top: 30px; padding: 0px; font-weight: bold; font-size: 22px; border-bottom: 2px solid rgb(89,89,89); margin-bottom: 30px; color: rgb(89,89,89);"><span class="prefix" style="display: none;"></span><span class="content" style="font-size: 22px; display: inline-block; border-bottom: 2px solid rgb(89,89,89);">'.concat(title, '</span><span class="suffix"></span></h2>\n    ').concat(lines.map(function(v) {
                    return '<p data-tool="mdnice编辑器" style="font-size: 16px; padding-top: 8px; padding-bottom: 8px; margin: 0; line-height: 26px; color: rgb(89,89,89);"><strong style="font-weight: bold; color: rgb(71, 193, 168);">'.concat(v, "</p>");
                }).join(""), "\n  ").concat(callMe ? '<figure data-tool="mdnice编辑器" style="margin: 0; margin-top: 10px; margin-bottom: 10px; display: flex; flex-direction: column; justify-content: center; align-items: center;"><img src="https://img.cdn.sugarat.top/mdImg/MTY3ODAwMDI5NDY4NQ==678000294685" alt style="display: block; margin: 0 auto; max-width: 100%;"></figure>' : "", "\n  </section>");
            }
        }
    ]);
    return _a35;
}(), __name(_a35, "MessageService"), _a35);
var message_default = new MessageService();
// src/controllers/super/user.ts
function _ts_decorate31(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate31, "_ts_decorate");
function _ts_metadata24(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata24, "_ts_metadata");
function _ts_param7(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
__name(_ts_param7, "_ts_param");
var power5 = {
    userPower: USER_POWER.SUPER,
    needLogin: true
};
var _a36;
var SuperUserController = (_a36 = /*#__PURE__*/ function() {
    "use strict";
    function _a36() {
        _class_call_check(this, _a36);
        __publicField(this, "tokenService");
        __publicField(this, "superUserService");
        __publicField(this, "behaviorService");
        __publicField(this, "userRepository");
        __publicField(this, "qiniuService");
        __publicField(this, "fileRepository");
        __publicField(this, "fileService");
    }
    _create_class(_a36, [
        {
            key: "sendMessage",
            value: function sendMessage(type, text, user2, target) {
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        if (type === MessageType.USER_PUSH && !target || !text.trim()) {
                            return [
                                2
                            ];
                        }
                        if (type === MessageType.USER_PUSH) {
                            message_default.sendMessage(user2.id, target, text);
                        } else if (type === MessageType.GLOBAL_PUSH) {
                            message_default.sendGlobalMessage(user2.id, text);
                        }
                        return [
                            2
                        ];
                    });
                })();
            }
        },
        {
            key: "logout",
            value: function logout(account) {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        return [
                            2,
                            _this.superUserService.logout(account)
                        ];
                    });
                })();
            }
        },
        {
            key: "getMessageList",
            value: function getMessageList(user2) {
                return _async_to_generator(function() {
                    var messageList;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    message_default.getMessageList(user2.id)
                                ];
                            case 1:
                                messageList = _state.sent();
                                return [
                                    2,
                                    messageList.map(function(v) {
                                        return {
                                            id: v.id,
                                            type: v.type,
                                            style: v.style,
                                            date: v.date,
                                            text: v.text,
                                            read: v.read
                                        };
                                    })
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "readMessage",
            value: function readMessage(user2, id) {
                message_default.readMessage(user2.id, id);
            }
        },
        {
            key: "getUserList",
            value: /**
  * 获取用户列表
  */ function getUserList() {
                var _this = this;
                return _async_to_generator(function() {
                    var users, files, moneyStartDay, filesMap, downloadLog, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _loop, _iterator, _step, err, sumCost;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _this.userRepository.findMany({})
                                ];
                            case 1:
                                users = _state.sent();
                                return [
                                    4,
                                    _this.fileRepository.findMany({})
                                ];
                            case 2:
                                files = _state.sent();
                                moneyStartDay = LocalUserDB.getSiteConfig().moneyStartDay;
                                return [
                                    4,
                                    _this.qiniuService.getFilesMap(files)
                                ];
                            case 3:
                                filesMap = _state.sent();
                                return [
                                    4,
                                    _this.fileService.downloadLog("", {
                                        startTime: new Date(moneyStartDay)
                                    })
                                ];
                            case 4:
                                downloadLog = _state.sent();
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                _state.label = 5;
                            case 5:
                                _state.trys.push([
                                    5,
                                    10,
                                    11,
                                    12
                                ]);
                                _loop = function() {
                                    var user2, fileInfo, overviewData;
                                    return _ts_generator(this, function(_state) {
                                        switch(_state.label){
                                            case 0:
                                                user2 = _step.value;
                                                fileInfo = files.filter(function(file) {
                                                    return file.userId === user2.id;
                                                });
                                                return [
                                                    4,
                                                    _this.fileService.getUserOverview(user2, {
                                                        files: fileInfo,
                                                        filesMap: filesMap,
                                                        downloadLog: downloadLog.filter(function(v) {
                                                            var _v_data_info_data, _v_data_info, _v_data;
                                                            return ((_v_data = v.data) === null || _v_data === void 0 ? void 0 : (_v_data_info = _v_data.info) === null || _v_data_info === void 0 ? void 0 : (_v_data_info_data = _v_data_info.data) === null || _v_data_info_data === void 0 ? void 0 : _v_data_info_data.account) === user2.account;
                                                        })
                                                    })
                                                ];
                                            case 1:
                                                overviewData = _state.sent();
                                                Object.assign(user2, overviewData);
                                                return [
                                                    2
                                                ];
                                        }
                                    });
                                };
                                _iterator = users[Symbol.iterator]();
                                _state.label = 6;
                            case 6:
                                if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                                    3,
                                    9
                                ];
                                return [
                                    5,
                                    _ts_values(_loop())
                                ];
                            case 7:
                                _state.sent();
                                _state.label = 8;
                            case 8:
                                _iteratorNormalCompletion = true;
                                return [
                                    3,
                                    6
                                ];
                            case 9:
                                return [
                                    3,
                                    12
                                ];
                            case 10:
                                err = _state.sent();
                                _didIteratorError = true;
                                _iteratorError = err;
                                return [
                                    3,
                                    12
                                ];
                            case 11:
                                try {
                                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                                        _iterator.return();
                                    }
                                } finally{
                                    if (_didIteratorError) {
                                        throw _iteratorError;
                                    }
                                }
                                return [
                                    7
                                ];
                            case 12:
                                sumCost = users.reduce(function(acc, cur) {
                                    return acc + cur.cost;
                                }, 0);
                                return [
                                    2,
                                    {
                                        list: users.map(function(u) {
                                            var _u;
                                            var email = (_u = u) === null || _u === void 0 ? void 0 : _u.email;
                                            var maskedEmail = email ? email.replace(/(.{2}).+(@.+)/, function(_, prefix, suffix) {
                                                return "".concat(prefix, "***").concat(suffix);
                                            }) : "";
                                            return _object_spread_props(_object_spread({}, u), {
                                                email: maskedEmail
                                            });
                                        }),
                                        sumCost: sumCost.toFixed(2)
                                    }
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "clearOssFiles",
            value: function clearOssFiles(id, type, userInfo) {
                var _this = this;
                return _async_to_generator(function() {
                    var user2, months, beforeDate, files, delKeys;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    selectUserById(id)
                                ];
                            case 1:
                                user2 = _state.sent()[0];
                                if (!user2) {
                                    return [
                                        2
                                    ];
                                }
                                months = {
                                    month: 1,
                                    quarter: 3,
                                    half: 6
                                };
                                if (!months[type]) {
                                    return [
                                        2
                                    ];
                                }
                                beforeDate = (0, import_dayjs3.default)().subtract(months[type], "month");
                                return [
                                    4,
                                    selectFiles({
                                        userId: id
                                    }, [
                                        "task_key",
                                        "user_id",
                                        "hash",
                                        "name",
                                        "date",
                                        "id",
                                        "oss_del_time"
                                    ])
                                ];
                            case 2:
                                files = _state.sent().filter(function(v) {
                                    return (0, import_dayjs3.default)(v.date).isBefore(beforeDate) && !v.oss_del_time;
                                });
                                if (files.length === 0) {
                                    return [
                                        2
                                    ];
                                }
                                delKeys = files.map(file_default.getOssKey);
                                message_default.sendMessage(userInfo.id, user2.id, message_default.clearMessageFormat("文件清理提醒", [
                                    '<strong style="font-weight: bold; color: rgb(71, 193, 168);">由于服务运维费用过高，系统已<span style="color:red;">自动清理 '.concat(months[type], " 个月</span>之前收集的文件</strong>"),
                                    "如有特殊疑问，或者以后不希望被清理，请联系系统管理员Thanks♪(･ω･)ﾉ"
                                ]));
                                batchDeleteFiles(delKeys);
                                return [
                                    4,
                                    _this.fileRepository.updateSpecifyFields({
                                        id: (0, import_typeorm11.In)(files.map(function(v) {
                                            return v.id;
                                        }))
                                    }, {
                                        ossDelTime: /* @__PURE__ */ new Date()
                                    })
                                ];
                            case 3:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "changeStatus",
            value: /**
  * 修改账号状态
  */ function changeStatus(id, status, openTime) {
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (status !== USER_STATUS.FREEZE) {
                                    openTime = null;
                                } else {
                                    openTime = new Date(new Date(openTime).getTime());
                                }
                                return [
                                    4,
                                    updateUser({
                                        status: status,
                                        openTime: openTime
                                    }, {
                                        id: id
                                    })
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "resetPassword",
            value: function resetPassword(id, password3, req) {
                return _async_to_generator(function() {
                    var user2;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    selectUserById(id)
                                ];
                            case 1:
                                user2 = _state.sent();
                                if (!user2.length || !rPassword.test(password3)) {
                                    addBehavior(req, {
                                        module: "super",
                                        data: req.body,
                                        msg: "管理员重置用户密码: 参数不合法"
                                    });
                                    return [
                                        2,
                                        import_flash_wolves28.Response.fail(500, "参数不合法")
                                    ];
                                }
                                delete req.body.password;
                                addBehavior(req, {
                                    module: "super",
                                    data: req.body,
                                    msg: "管理员重置用户密码: ".concat(user2[0].account)
                                });
                                return [
                                    4,
                                    updateUser({
                                        password: encryption(password3)
                                    }, {
                                        id: id
                                    })
                                ];
                            case 2:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "resetEmail",
            value: function resetEmail(id, email, code, operator, req) {
                var _this = this;
                return _async_to_generator(function() {
                    var _operator, user2, realCode, _ref, otherUser, ref;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    selectUserById(id)
                                ];
                            case 1:
                                user2 = _state.sent();
                                if (!user2.length || !rEmail.test(email) || !rVerCode.test(code)) {
                                    addBehavior(req, {
                                        module: "super",
                                        data: req.body,
                                        msg: "管理员重置邮箱: 参数不合法"
                                    });
                                    return [
                                        2,
                                        import_flash_wolves28.Response.fail(500, "参数不合法")
                                    ];
                                }
                                if (!((_operator = operator) === null || _operator === void 0 ? void 0 : _operator.email)) {
                                    addBehavior(req, {
                                        module: "super",
                                        data: req.body,
                                        msg: "管理员重置邮箱: 管理员未绑定邮箱"
                                    });
                                    return [
                                        2,
                                        import_flash_wolves28.Response.fail(500, "请先在个人资料中绑定管理员邮箱")
                                    ];
                                }
                                return [
                                    4,
                                    _this.tokenService.getVerifyCode(operator.email)
                                ];
                            case 2:
                                realCode = _state.sent();
                                if (realCode !== code) {
                                    addBehavior(req, {
                                        module: "super",
                                        data: req.body,
                                        msg: "管理员重置邮箱: 验证码错误"
                                    });
                                    return [
                                        2,
                                        import_flash_wolves28.Response.failWithError(UserError.code.fault)
                                    ];
                                }
                                return [
                                    4,
                                    selectUserByEmail(email)
                                ];
                            case 3:
                                _ref = _sliced_to_array.apply(void 0, [
                                    _state.sent(),
                                    1
                                ]), otherUser = _ref[0];
                                if (!!otherUser) return [
                                    3,
                                    5
                                ];
                                return [
                                    4,
                                    selectUserByAccount(email)
                                ];
                            case 4:
                                ref = _sliced_to_array.apply(void 0, [
                                    _state.sent(),
                                    1
                                ]), otherUser = ref[0], ref;
                                _state.label = 5;
                            case 5:
                                if (otherUser) {
                                    addBehavior(req, {
                                        module: "super",
                                        msg: "管理员重置邮箱: 邮箱 ".concat(email, " 已存在"),
                                        data: req.body
                                    });
                                    return [
                                        2,
                                        import_flash_wolves28.Response.failWithError(UserError.email.exist)
                                    ];
                                }
                                _this.tokenService.expiredVerifyCode(operator.email);
                                addBehavior(req, {
                                    module: "super",
                                    data: req.body,
                                    msg: "管理员重置用户邮箱: ".concat(user2[0].account)
                                });
                                return [
                                    4,
                                    updateUser({
                                        email: email
                                    }, {
                                        id: id
                                    })
                                ];
                            case 6:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "changeSize",
            value: function changeSize(id, size) {
                var _this = this;
                return _async_to_generator(function() {
                    var user2;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _this.userRepository.findOne({
                                        id: id
                                    })
                                ];
                            case 1:
                                user2 = _state.sent();
                                _this.behaviorService.add("super", "修改用户空间容量 ".concat(user2.account, " ").concat(user2.size, " => ").concat(size, "GB"), {
                                    oldSize: user2.size,
                                    newSize: size
                                });
                                user2.size = size;
                                return [
                                    4,
                                    _this.userRepository.update(user2)
                                ];
                            case 2:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "updateWalletValue",
            value: function updateWalletValue(id, value) {
                var _this = this;
                return _async_to_generator(function() {
                    var user2;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _this.userRepository.findOne({
                                        id: id
                                    })
                                ];
                            case 1:
                                user2 = _state.sent();
                                _this.behaviorService.add("super", "修改用户余额 ".concat(user2.account, " ").concat(user2.wallet, " => ").concat(value, " ￥"), {
                                    oldValue: user2.wallet,
                                    newValue: value
                                });
                                user2.wallet = value.toFixed(2);
                                return [
                                    4,
                                    _this.userRepository.update(user2)
                                ];
                            case 2:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return _a36;
}(), __name(_a36, "SuperUserController"), _a36);
_ts_decorate31([
    (0, import_flash_wolves28.Inject)(TokenService),
    _ts_metadata24("design:type", typeof TokenService === "undefined" ? Object : TokenService)
], SuperUserController.prototype, "tokenService", void 0);
_ts_decorate31([
    (0, import_flash_wolves28.Inject)(SuperUserService),
    _ts_metadata24("design:type", typeof SuperUserService === "undefined" ? Object : SuperUserService)
], SuperUserController.prototype, "superUserService", void 0);
_ts_decorate31([
    (0, import_flash_wolves28.Inject)(BehaviorService),
    _ts_metadata24("design:type", typeof BehaviorService === "undefined" ? Object : BehaviorService)
], SuperUserController.prototype, "behaviorService", void 0);
_ts_decorate31([
    (0, import_flash_wolves28.Inject)(UserRepository),
    _ts_metadata24("design:type", typeof UserRepository === "undefined" ? Object : UserRepository)
], SuperUserController.prototype, "userRepository", void 0);
_ts_decorate31([
    (0, import_flash_wolves28.Inject)(QiniuService),
    _ts_metadata24("design:type", typeof QiniuService === "undefined" ? Object : QiniuService)
], SuperUserController.prototype, "qiniuService", void 0);
_ts_decorate31([
    (0, import_flash_wolves28.Inject)(FileRepository),
    _ts_metadata24("design:type", typeof FileRepository === "undefined" ? Object : FileRepository)
], SuperUserController.prototype, "fileRepository", void 0);
_ts_decorate31([
    (0, import_flash_wolves28.Inject)(FileService),
    _ts_metadata24("design:type", typeof FileService === "undefined" ? Object : FileService)
], SuperUserController.prototype, "fileService", void 0);
_ts_decorate31([
    (0, import_flash_wolves28.Post)("message"),
    _ts_param7(0, (0, import_flash_wolves28.ReqBody)("type")),
    _ts_param7(1, (0, import_flash_wolves28.ReqBody)("text")),
    _ts_param7(2, ReqUserInfo()),
    _ts_param7(3, (0, import_flash_wolves28.ReqBody)("target")),
    _ts_metadata24("design:type", Function),
    _ts_metadata24("design:paramtypes", [
        typeof MessageType === "undefined" ? Object : MessageType,
        String,
        typeof User === "undefined" ? Object : User,
        Number
    ])
], SuperUserController.prototype, "sendMessage", null);
_ts_decorate31([
    (0, import_flash_wolves28.Delete)("logout"),
    _ts_param7(0, (0, import_flash_wolves28.ReqBody)("account")),
    _ts_metadata24("design:type", Function),
    _ts_metadata24("design:paramtypes", [
        String
    ])
], SuperUserController.prototype, "logout", null);
_ts_decorate31([
    (0, import_flash_wolves28.Get)("message", {
        userPower: USER_POWER.NORMAL
    }),
    _ts_param7(0, ReqUserInfo()),
    _ts_metadata24("design:type", Function),
    _ts_metadata24("design:paramtypes", [
        typeof User === "undefined" ? Object : User
    ])
], SuperUserController.prototype, "getMessageList", null);
_ts_decorate31([
    (0, import_flash_wolves28.Put)("message", {
        userPower: USER_POWER.NORMAL
    }),
    _ts_param7(0, ReqUserInfo()),
    _ts_param7(1, (0, import_flash_wolves28.ReqBody)("id")),
    _ts_metadata24("design:type", Function),
    _ts_metadata24("design:paramtypes", [
        typeof User === "undefined" ? Object : User,
        String
    ])
], SuperUserController.prototype, "readMessage", null);
_ts_decorate31([
    (0, import_flash_wolves28.Get)("list"),
    _ts_metadata24("design:type", Function),
    _ts_metadata24("design:paramtypes", [])
], SuperUserController.prototype, "getUserList", null);
_ts_decorate31([
    (0, import_flash_wolves28.Delete)("clear/oss"),
    _ts_param7(0, (0, import_flash_wolves28.ReqBody)("id")),
    _ts_param7(1, (0, import_flash_wolves28.ReqBody)("type")),
    _ts_param7(2, ReqUserInfo()),
    _ts_metadata24("design:type", Function),
    _ts_metadata24("design:paramtypes", [
        Number,
        String,
        typeof User === "undefined" ? Object : User
    ])
], SuperUserController.prototype, "clearOssFiles", null);
_ts_decorate31([
    (0, import_flash_wolves28.Put)("status"),
    _ts_param7(0, (0, import_flash_wolves28.ReqBody)("id")),
    _ts_param7(1, (0, import_flash_wolves28.ReqBody)("status")),
    _ts_param7(2, (0, import_flash_wolves28.ReqBody)("openTime")),
    _ts_metadata24("design:type", Function),
    _ts_metadata24("design:paramtypes", [
        Number,
        typeof USER_STATUS === "undefined" ? Object : USER_STATUS,
        Object
    ])
], SuperUserController.prototype, "changeStatus", null);
_ts_decorate31([
    (0, import_flash_wolves28.Put)("password"),
    _ts_param7(0, (0, import_flash_wolves28.ReqBody)("id")),
    _ts_param7(1, (0, import_flash_wolves28.ReqBody)("password")),
    _ts_metadata24("design:type", Function),
    _ts_metadata24("design:paramtypes", [
        Number,
        String,
        typeof FWRequest === "undefined" ? Object : FWRequest
    ])
], SuperUserController.prototype, "resetPassword", null);
_ts_decorate31([
    (0, import_flash_wolves28.Put)("email"),
    _ts_param7(0, (0, import_flash_wolves28.ReqBody)("id")),
    _ts_param7(1, (0, import_flash_wolves28.ReqBody)("email")),
    _ts_param7(2, (0, import_flash_wolves28.ReqBody)("code")),
    _ts_param7(3, ReqUserInfo()),
    _ts_metadata24("design:type", Function),
    _ts_metadata24("design:paramtypes", [
        Number,
        String,
        String,
        typeof User === "undefined" ? Object : User,
        typeof FWRequest === "undefined" ? Object : FWRequest
    ])
], SuperUserController.prototype, "resetEmail", null);
_ts_decorate31([
    (0, import_flash_wolves28.Put)("size"),
    _ts_param7(0, (0, import_flash_wolves28.ReqBody)("id")),
    _ts_param7(1, (0, import_flash_wolves28.ReqBody)("size")),
    _ts_metadata24("design:type", Function),
    _ts_metadata24("design:paramtypes", [
        Number,
        Number
    ])
], SuperUserController.prototype, "changeSize", null);
_ts_decorate31([
    (0, import_flash_wolves28.Put)("wallet"),
    _ts_param7(0, (0, import_flash_wolves28.ReqBody)("id")),
    _ts_param7(1, (0, import_flash_wolves28.ReqBody)("value")),
    _ts_metadata24("design:type", Function),
    _ts_metadata24("design:paramtypes", [
        Number,
        Number
    ])
], SuperUserController.prototype, "updateWalletValue", null);
SuperUserController = _ts_decorate31([
    (0, import_flash_wolves28.RouterController)("super/user", power5)
], SuperUserController);
// src/controllers/user.ts
var import_flash_wolves29 = require("flash-wolves");
function _ts_decorate32(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate32, "_ts_decorate");
function _ts_metadata25(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata25, "_ts_metadata");
function _ts_param8(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
__name(_ts_param8, "_ts_param");
var _a37;
var UserController = (_a37 = /*#__PURE__*/ function() {
    "use strict";
    function _a37() {
        _class_call_check(this, _a37);
        __publicField(this, "userService");
        __publicField(this, "behaviorService");
        __publicField(this, "tokenService");
        __publicField(this, "userRepository");
        __publicField(this, "fileService");
        __publicField(this, "Ctx");
    }
    _create_class(_a37, [
        {
            key: "register",
            value: function register(body) {
                var _this = this;
                return _async_to_generator(function() {
                    var _action_data, _action, _ref, action, _body, _body1, user2, token, error;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _state.trys.push([
                                    0,
                                    4,
                                    ,
                                    5
                                ]);
                                return [
                                    4,
                                    findAction({
                                        "type": ActionType.DisabledRoute,
                                        "data.route": "/register"
                                    })
                                ];
                            case 1:
                                _ref = _sliced_to_array.apply(void 0, [
                                    _state.sent(),
                                    1
                                ]), action = _ref[0];
                                if ((_action = action) === null || _action === void 0 ? void 0 : (_action_data = _action.data) === null || _action_data === void 0 ? void 0 : _action_data.status) {
                                    ;
                                    _this.behaviorService.add("user", "禁止注册 ".concat((_body = body) === null || _body === void 0 ? void 0 : _body.account), {
                                        account: (_body1 = body) === null || _body1 === void 0 ? void 0 : _body1.account
                                    });
                                    throw UserError.system.ban;
                                }
                                return [
                                    4,
                                    _this.userService.register(body)
                                ];
                            case 2:
                                user2 = _state.sent();
                                return [
                                    4,
                                    _this.tokenService.createTokenByUser(user2)
                                ];
                            case 3:
                                token = _state.sent();
                                return [
                                    2,
                                    {
                                        token: token
                                    }
                                ];
                            case 4:
                                error = _state.sent();
                                return [
                                    2,
                                    wrapperCatchError(error)
                                ];
                            case 5:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "login",
            value: function login(account, pwd) {
                var _this = this;
                return _async_to_generator(function() {
                    var systemUserConfigs, isSystemAccount, _pwd, systemPwdConfigs, isRightPwd, u, token2, tokenError, user2, token, error, _error, _error1, _error2, _error3;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _state.trys.push([
                                    0,
                                    8,
                                    ,
                                    9
                                ]);
                                if (!account || !pwd) {
                                    return [
                                        2,
                                        import_flash_wolves29.Response.failWithError(UserError.account.fault)
                                    ];
                                }
                                systemUserConfigs = LocalUserDB.findUserConfig({
                                    type: "server",
                                    key: "USER"
                                }) || [];
                                isSystemAccount = systemUserConfigs.length > 0 && systemUserConfigs.some(function(config) {
                                    var _config;
                                    return ((_config = config) === null || _config === void 0 ? void 0 : _config.value) === account;
                                });
                                console.log("[登录] 系统账号检查:", {
                                    account: account,
                                    systemUsers: systemUserConfigs.map(function(c) {
                                        var _c;
                                        return (_c = c) === null || _c === void 0 ? void 0 : _c.value;
                                    }).filter(Boolean),
                                    isSystemAccount: isSystemAccount,
                                    configCount: systemUserConfigs.length
                                });
                                if (!isSystemAccount) return [
                                    3,
                                    5
                                ];
                                systemPwdConfigs = LocalUserDB.findUserConfig({
                                    type: "server",
                                    key: "PWD"
                                }) || [];
                                isRightPwd = systemPwdConfigs.length > 0 && systemPwdConfigs.some(function(config) {
                                    var _config;
                                    return ((_config = config) === null || _config === void 0 ? void 0 : _config.value) === pwd;
                                });
                                console.log("[登录] 系统密码检查:", {
                                    pwdLength: (_pwd = pwd) === null || _pwd === void 0 ? void 0 : _pwd.length,
                                    isRightPwd: isRightPwd,
                                    pwdConfigCount: systemPwdConfigs.length
                                });
                                if (!isRightPwd) return [
                                    3,
                                    4
                                ];
                                _state.label = 1;
                            case 1:
                                _state.trys.push([
                                    1,
                                    3,
                                    ,
                                    4
                                ]);
                                u = new User2();
                                u.account = account;
                                u.power = USER_POWER.SYSTEM;
                                return [
                                    4,
                                    _this.tokenService.createTokenByUser(u)
                                ];
                            case 2:
                                token2 = _state.sent();
                                console.log("[登录] 系统账号登录成功:", account);
                                return [
                                    2,
                                    {
                                        token: token2,
                                        system: true
                                    }
                                ];
                            case 3:
                                tokenError = _state.sent();
                                console.error("[登录] 生成 token 失败:", tokenError);
                                return [
                                    2,
                                    import_flash_wolves29.Response.fail(500, "生成登录令牌失败")
                                ];
                            case 4:
                                console.log("[登录] 系统账号密码错误:", account);
                                return [
                                    2,
                                    import_flash_wolves29.Response.failWithError(UserError.pwd.fault)
                                ];
                            case 5:
                                return [
                                    4,
                                    _this.userService.login(account, pwd)
                                ];
                            case 6:
                                user2 = _state.sent();
                                return [
                                    4,
                                    _this.tokenService.createTokenByUser(user2)
                                ];
                            case 7:
                                token = _state.sent();
                                return [
                                    2,
                                    {
                                        token: token
                                    }
                                ];
                            case 8:
                                error = _state.sent();
                                console.error("[登录] 登录失败:", {
                                    error: ((_error = error) === null || _error === void 0 ? void 0 : _error.message) || error,
                                    stack: (_error1 = error) === null || _error1 === void 0 ? void 0 : _error1.stack,
                                    account: account
                                });
                                if (((_error2 = error) === null || _error2 === void 0 ? void 0 : _error2.code) && ((_error3 = error) === null || _error3 === void 0 ? void 0 : _error3.msg)) {
                                    return [
                                        2,
                                        import_flash_wolves29.Response.failWithError(error)
                                    ];
                                }
                                return [
                                    2,
                                    wrapperCatchError(error)
                                ];
                            case 9:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "logout",
            value: function logout() {
                var _this = this;
                return _async_to_generator(function() {
                    var account;
                    return _ts_generator(this, function(_state) {
                        account = _this.Ctx.req.userInfo.account;
                        _this.behaviorService.add("user", "退出登录 ".concat(account), {
                            account: account
                        });
                        _this.tokenService.expiredToken(_this.Ctx.req.headers.token);
                        return [
                            2
                        ];
                    });
                })();
            }
        },
        {
            key: "loginByCode",
            value: function loginByCode(body) {
                var _this = this;
                return _async_to_generator(function() {
                    var code, email, user2, token, error;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _state.trys.push([
                                    0,
                                    3,
                                    ,
                                    4
                                ]);
                                code = body.code, email = body.email;
                                return [
                                    4,
                                    _this.userService.loginByCode(email, code)
                                ];
                            case 1:
                                user2 = _state.sent();
                                return [
                                    4,
                                    _this.tokenService.createTokenByUser(user2)
                                ];
                            case 2:
                                token = _state.sent();
                                return [
                                    2,
                                    {
                                        token: token
                                    }
                                ];
                            case 3:
                                error = _state.sent();
                                return [
                                    2,
                                    wrapperCatchError(error)
                                ];
                            case 4:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "updatePassword",
            value: function updatePassword(body) {
                var _this = this;
                return _async_to_generator(function() {
                    var user2, token, error;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _state.trys.push([
                                    0,
                                    3,
                                    ,
                                    4
                                ]);
                                return [
                                    4,
                                    _this.userService.updatePassword(body)
                                ];
                            case 1:
                                user2 = _state.sent();
                                return [
                                    4,
                                    _this.tokenService.createTokenByUser(user2)
                                ];
                            case 2:
                                token = _state.sent();
                                return [
                                    2,
                                    {
                                        token: token
                                    }
                                ];
                            case 3:
                                error = _state.sent();
                                return [
                                    2,
                                    wrapperCatchError(error)
                                ];
                            case 4:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "isSuperPower",
            value: function isSuperPower() {
                var _this = this;
                return _async_to_generator(function() {
                    var _this_Ctx_req_userInfo, power6, account;
                    return _ts_generator(this, function(_state) {
                        _this_Ctx_req_userInfo = _this.Ctx.req.userInfo, power6 = _this_Ctx_req_userInfo.power, account = _this_Ctx_req_userInfo.account;
                        _this.tokenService.refreshToken(_this.Ctx.req.headers.token);
                        return [
                            2,
                            {
                                power: power6 === USER_POWER.SUPER,
                                name: account,
                                system: power6 === USER_POWER.SYSTEM
                            }
                        ];
                    });
                })();
            }
        },
        {
            key: "isLogin",
            value: function isLogin() {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        return [
                            2,
                            !!_this.Ctx.req.userInfo
                        ];
                    });
                })();
            }
        },
        {
            key: "getUsage",
            value: function getUsage() {
                var _this = this;
                return _async_to_generator(function() {
                    var user2, userOverview, maxSize, usage, limitUpload, wallet, cost, limitSpace, limitWallet, price;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _this.userRepository.findOne({
                                        id: _this.Ctx.req.userInfo.id
                                    })
                                ];
                            case 1:
                                user2 = _state.sent();
                                return [
                                    4,
                                    _this.fileService.getUserOverview(user2)
                                ];
                            case 2:
                                userOverview = _state.sent();
                                maxSize = userOverview.maxSize, usage = userOverview.usage, limitUpload = userOverview.limitUpload, wallet = userOverview.wallet, cost = userOverview.cost, limitSpace = userOverview.limitSpace, limitWallet = userOverview.limitWallet, price = userOverview.price;
                                if (limitSpace) {
                                    _this.behaviorService.add("user", "用户 ".concat(user2.account, " 超出容量限制"), {
                                        space: formatSize(maxSize),
                                        usage: formatSize(usage)
                                    });
                                }
                                if (limitWallet) {
                                    _this.behaviorService.add("user", "用户 ".concat(user2.account, " 余额不足"), {
                                        wallet: wallet,
                                        cost: cost
                                    });
                                }
                                return [
                                    2,
                                    {
                                        size: maxSize,
                                        usage: usage,
                                        limitUpload: limitUpload,
                                        wallet: wallet,
                                        cost: cost.toFixed(2),
                                        limitSpace: limitSpace,
                                        limitWallet: limitWallet,
                                        price: {
                                            storage: price.ossPrice,
                                            download: (+price.backhaulTrafficPrice + +price.cdnPrice + +price.compressPrice).toFixed(2)
                                        }
                                    }
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return _a37;
}(), __name(_a37, "UserController"), _a37);
_ts_decorate32([
    (0, import_flash_wolves29.Inject)(UserService),
    _ts_metadata25("design:type", typeof UserService === "undefined" ? Object : UserService)
], UserController.prototype, "userService", void 0);
_ts_decorate32([
    (0, import_flash_wolves29.Inject)(BehaviorService),
    _ts_metadata25("design:type", typeof BehaviorService === "undefined" ? Object : BehaviorService)
], UserController.prototype, "behaviorService", void 0);
_ts_decorate32([
    (0, import_flash_wolves29.Inject)(TokenService),
    _ts_metadata25("design:type", typeof TokenService === "undefined" ? Object : TokenService)
], UserController.prototype, "tokenService", void 0);
_ts_decorate32([
    (0, import_flash_wolves29.Inject)(UserRepository),
    _ts_metadata25("design:type", typeof UserRepository === "undefined" ? Object : UserRepository)
], UserController.prototype, "userRepository", void 0);
_ts_decorate32([
    (0, import_flash_wolves29.Inject)(FileService),
    _ts_metadata25("design:type", typeof FileService === "undefined" ? Object : FileService)
], UserController.prototype, "fileService", void 0);
_ts_decorate32([
    (0, import_flash_wolves29.InjectCtx)(),
    _ts_metadata25("design:type", typeof Context === "undefined" ? Object : Context)
], UserController.prototype, "Ctx", void 0);
_ts_decorate32([
    (0, import_flash_wolves29.Post)("register"),
    _ts_param8(0, (0, import_flash_wolves29.ReqBody)()),
    _ts_metadata25("design:type", Function),
    _ts_metadata25("design:paramtypes", [
        Object
    ])
], UserController.prototype, "register", null);
_ts_decorate32([
    (0, import_flash_wolves29.Post)("login"),
    _ts_param8(0, (0, import_flash_wolves29.ReqBody)("account")),
    _ts_param8(1, (0, import_flash_wolves29.ReqBody)("pwd")),
    _ts_metadata25("design:type", Function),
    _ts_metadata25("design:paramtypes", [
        String,
        String
    ])
], UserController.prototype, "login", null);
_ts_decorate32([
    (0, import_flash_wolves29.Get)("logout", {
        needLogin: true
    }),
    _ts_metadata25("design:type", Function),
    _ts_metadata25("design:paramtypes", [])
], UserController.prototype, "logout", null);
_ts_decorate32([
    (0, import_flash_wolves29.Post)("login/code"),
    _ts_param8(0, (0, import_flash_wolves29.ReqBody)()),
    _ts_metadata25("design:type", Function),
    _ts_metadata25("design:paramtypes", [
        void 0
    ])
], UserController.prototype, "loginByCode", null);
_ts_decorate32([
    (0, import_flash_wolves29.Put)("password"),
    _ts_param8(0, (0, import_flash_wolves29.ReqBody)()),
    _ts_metadata25("design:type", Function),
    _ts_metadata25("design:paramtypes", [
        void 0
    ])
], UserController.prototype, "updatePassword", null);
_ts_decorate32([
    (0, import_flash_wolves29.Get)("power/super", {
        needLogin: true
    }),
    _ts_metadata25("design:type", Function),
    _ts_metadata25("design:paramtypes", [])
], UserController.prototype, "isSuperPower", null);
_ts_decorate32([
    (0, import_flash_wolves29.Get)("login", {
        needLogin: true
    }),
    _ts_metadata25("design:type", Function),
    _ts_metadata25("design:paramtypes", [])
], UserController.prototype, "isLogin", null);
_ts_decorate32([
    (0, import_flash_wolves29.Get)("usage", {
        needLogin: true
    }),
    _ts_metadata25("design:type", Function),
    _ts_metadata25("design:paramtypes", [])
], UserController.prototype, "getUsage", null);
UserController = _ts_decorate32([
    (0, import_flash_wolves29.RouterController)("user")
], UserController);
// src/controllers/config.ts
var import_promises2 = __toESM(require("fs/promises"));
var import_node_path7 = __toESM(require("path"));
var import_mysql9 = __toESM(require("mysql"));
var import_redis3 = __toESM(require("redis"));
var import_mongodb12 = require("mongodb");
var import_flash_wolves30 = require("flash-wolves");
init_constants();
// src/utils/patch.ts
var import_promises = require("fs/promises");
var import_node_process5 = __toESM(require("process"));
function addTableField(tableName, field) {
    return _addTableField.apply(this, arguments);
}
function _addTableField() {
    _addTableField = _async_to_generator(function(tableName, field) {
        var cfg, dbName, fieldName, defaultValue, comment, fieldType, _field_lastUpdateTime, lastUpdateTime, checkFieldCountSql, count, sql, _;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    cfg = LocalUserDB.getUserConfigByType("mysql");
                    dbName = cfg.database;
                    fieldName = field.fieldName, defaultValue = field.defaultValue, comment = field.comment, fieldType = field.fieldType, _field_lastUpdateTime = field.lastUpdateTime, lastUpdateTime = _field_lastUpdateTime === void 0 ? false : _field_lastUpdateTime;
                    checkFieldCountSql = "SELECT count(*) as count FROM information_schema.COLUMNS WHERE table_name = ? AND column_name = ? AND table_schema = ?";
                    return [
                        4,
                        query2(checkFieldCountSql, tableName, "".concat(String(fieldName)), dbName)
                    ];
                case 1:
                    count = _state.sent()[0].count;
                    if (!(count === 0)) return [
                        3,
                        3
                    ];
                    console.log("添加字段 ".concat(tableName, ".").concat(String(fieldName)));
                    sql = "ALTER TABLE ".concat(tableName, " ADD COLUMN ").concat(String(fieldName), " ").concat(fieldType, " DEFAULT ").concat(defaultValue, " ").concat(lastUpdateTime ? "ON UPDATE CURRENT_TIMESTAMP" : "", " COMMENT '").concat(comment, "'");
                    console.log(sql);
                    _ = console.log;
                    return [
                        4,
                        query2(sql)
                    ];
                case 2:
                    _.apply(console, [
                        _state.sent()
                    ]);
                    _state.label = 3;
                case 3:
                    return [
                        2
                    ];
            }
        });
    });
    return _addTableField.apply(this, arguments);
}
__name(addTableField, "addTableField");
function modifyTableField(tableName, field) {
    return _modifyTableField.apply(this, arguments);
}
function _modifyTableField() {
    _modifyTableField = _async_to_generator(function(tableName, field) {
        var cfg, dbName, fieldName, fieldType, checkFieldCountSql, count, getColumnTypeSql, _, originType, _1;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    cfg = LocalUserDB.getUserConfigByType("mysql");
                    dbName = cfg.database;
                    fieldName = field.fieldName, fieldType = field.fieldType;
                    checkFieldCountSql = "SELECT count(*) as count FROM information_schema.COLUMNS WHERE table_name = ? AND column_name = ? AND table_schema = ?";
                    return [
                        4,
                        query2(checkFieldCountSql, tableName, "".concat(String(fieldName)), dbName)
                    ];
                case 1:
                    count = _state.sent()[0].count;
                    if (count === 0) {
                        console.log("表", tableName, "不存在字段", fieldName, fieldType);
                        return [
                            2
                        ];
                    }
                    getColumnTypeSql = "SELECT * FROM information_schema.COLUMNS WHERE table_name = ? AND column_name = ? AND table_schema = ?";
                    return [
                        4,
                        query2(getColumnTypeSql, tableName, "".concat(String(fieldName)), dbName)
                    ];
                case 2:
                    _ = _state.sent()[0], originType = _.COLUMN_TYPE;
                    if (!(originType !== fieldType)) return [
                        3,
                        4
                    ];
                    if (fieldType === "bigint" && originType.includes(fieldType)) {
                        return [
                            2
                        ];
                    }
                    console.log("修改字段 ".concat(tableName, ".").concat(String(fieldName)));
                    console.log("ALTER TABLE ".concat(tableName, " MODIFY ").concat(String(fieldName), " ").concat(fieldType));
                    _1 = console.log;
                    return [
                        4,
                        query2("ALTER TABLE ".concat(tableName, " MODIFY ").concat(String(fieldName), " ").concat(fieldType))
                    ];
                case 3:
                    _1.apply(console, [
                        _state.sent()
                    ]);
                    _state.label = 4;
                case 4:
                    return [
                        2
                    ];
            }
        });
    });
    return _modifyTableField.apply(this, arguments);
}
__name(modifyTableField, "modifyTableField");
function patchTable() {
    return _patchTable.apply(this, arguments);
}
function _patchTable() {
    _patchTable = _async_to_generator(function() {
        var TenK;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    TenK = Math.round(1024 * 10);
                    return [
                        4,
                        addTableField("task_info", {
                            fieldName: "tip",
                            fieldType: "text",
                            comment: "批注信息",
                            defaultValue: ""
                        })
                    ];
                case 1:
                    _state.sent();
                    return [
                        4,
                        addTableField("files", {
                            fieldName: "origin_name",
                            fieldType: "varchar(1024)",
                            comment: "原文件名",
                            defaultValue: ""
                        })
                    ];
                case 2:
                    _state.sent();
                    return [
                        4,
                        addTableField("task", {
                            fieldName: "del",
                            fieldType: "tinyint",
                            comment: "是否删除",
                            defaultValue: 0
                        })
                    ];
                case 3:
                    _state.sent();
                    return [
                        4,
                        addTableField("files", {
                            fieldName: "del",
                            fieldType: "tinyint",
                            comment: "是否删除",
                            defaultValue: 0
                        })
                    ];
                case 4:
                    _state.sent();
                    return [
                        4,
                        modifyTableField("task_info", {
                            fieldName: "info",
                            fieldType: "varchar(".concat(TenK, ")")
                        })
                    ];
                case 5:
                    _state.sent();
                    return [
                        4,
                        modifyTableField("files", {
                            fieldName: "info",
                            fieldType: "varchar(".concat(TenK, ")")
                        })
                    ];
                case 6:
                    _state.sent();
                    return [
                        4,
                        modifyTableField("task_info", {
                            fieldName: "tip",
                            fieldType: "text"
                        })
                    ];
                case 7:
                    _state.sent();
                    return [
                        4,
                        modifyTableField("files", {
                            fieldName: "size",
                            fieldType: "bigint"
                        })
                    ];
                case 8:
                    _state.sent();
                    return [
                        4,
                        addTableField("task_info", {
                            fieldName: "bind_field",
                            fieldType: "varchar(255)",
                            defaultValue: "'姓名'",
                            comment: "绑定表单字段"
                        })
                    ];
                case 9:
                    _state.sent();
                    return [
                        4,
                        addTableField("user", {
                            fieldName: "size",
                            fieldType: "int",
                            defaultValue: 2,
                            comment: "可支配空间上限"
                        })
                    ];
                case 10:
                    _state.sent();
                    return [
                        4,
                        addTableField("user", {
                            fieldName: "wallet",
                            fieldType: "decimal(10,2)",
                            defaultValue: 2,
                            comment: "钱包余额"
                        })
                    ];
                case 11:
                    _state.sent();
                    return [
                        4,
                        addTableField("files", {
                            fieldName: "oss_del_time",
                            fieldType: "timestamp",
                            defaultValue: null,
                            comment: "OSS资源删除时间"
                        })
                    ];
                case 12:
                    _state.sent();
                    return [
                        4,
                        addTableField("files", {
                            fieldName: "del_time",
                            fieldType: "timestamp",
                            defaultValue: null,
                            comment: "删除时间"
                        })
                    ];
                case 13:
                    _state.sent();
                    return [
                        4,
                        addTableField("files", {
                            fieldName: "last_update_time",
                            fieldType: "timestamp",
                            defaultValue: "CURRENT_TIMESTAMP",
                            comment: "最后更新时间",
                            lastUpdateTime: true
                        })
                    ];
                case 14:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    });
    return _patchTable.apply(this, arguments);
}
__name(patchTable, "patchTable");
function getRandomUser() {
    var key = getUniqueKey();
    return "ep".concat(key.slice(18, key.length));
}
__name(getRandomUser, "getRandomUser");
function getRandomPassword() {
    var key = getUniqueKey();
    return key.slice(10, 18);
}
__name(getRandomPassword, "getRandomPassword");
function initUserConfig() {
    return _initUserConfig.apply(this, arguments);
}
function _initUserConfig() {
    _initUserConfig = _async_to_generator(function() {
        var _LocalUserDB_findUserConfig_, _LocalUserDB_findUserConfig, _LocalUserDB_findUserConfig_1, _LocalUserDB_findUserConfig1, userAccount, userPWD, storeDbInfo;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    userAccount = (_LocalUserDB_findUserConfig = LocalUserDB.findUserConfig({
                        type: "server",
                        key: "USER"
                    })) === null || _LocalUserDB_findUserConfig === void 0 ? void 0 : (_LocalUserDB_findUserConfig_ = _LocalUserDB_findUserConfig[0]) === null || _LocalUserDB_findUserConfig_ === void 0 ? void 0 : _LocalUserDB_findUserConfig_.value;
                    userPWD = (_LocalUserDB_findUserConfig1 = LocalUserDB.findUserConfig({
                        type: "server",
                        key: "PWD"
                    })) === null || _LocalUserDB_findUserConfig1 === void 0 ? void 0 : (_LocalUserDB_findUserConfig_1 = _LocalUserDB_findUserConfig1[0]) === null || _LocalUserDB_findUserConfig_1 === void 0 ? void 0 : _LocalUserDB_findUserConfig_1.value;
                    if (!userAccount || !userPWD) {
                        userAccount = getRandomUser();
                        userPWD = getRandomPassword();
                        LocalUserDB.addUserConfigData({
                            type: "server",
                            key: "USER",
                            value: userAccount,
                            isSecret: true
                        });
                        LocalUserDB.addUserConfigData({
                            type: "server",
                            key: "PWD",
                            value: userPWD,
                            isSecret: true
                        });
                    }
                    console.log("!!! 服务管理面板!!! ", "账号:", userAccount, "密码:", userPWD);
                    console.log("!!! 服务管理面板!!! ", "账号:", userAccount, "密码:", userPWD);
                    console.log("!!! 服务管理面板!!! ", "账号:", userAccount, "密码:", userPWD);
                    storeDbInfo = /* @__PURE__ */ __name(function(type, config) {
                        var configList = LocalUserDB.findUserConfig({
                            type: type
                        }) || [];
                        Object.keys(config).forEach(function(key) {
                            if (!configList.some(function(item) {
                                return item.key === key;
                            })) {
                                console.log("[LocalUserDB] 添加默认配置 ".concat(type, ".").concat(key, "=").concat(config[key]));
                                LocalUserDB.addUserConfigData({
                                    type: type,
                                    key: key,
                                    value: config[key],
                                    isSecret: [
                                        "password",
                                        "secretKey"
                                    ].includes(key)
                                });
                            }
                            if (_instanceof(config[key], Object)) {
                                var _configList_find;
                                var oldConfig = (_configList_find = configList.find(function(item) {
                                    return item.key === key;
                                })) === null || _configList_find === void 0 ? void 0 : _configList_find.value;
                                if (Object.keys(config[key]).some(function(k) {
                                    var _oldConfig;
                                    return ((_oldConfig = oldConfig) === null || _oldConfig === void 0 ? void 0 : _oldConfig[k]) === void 0;
                                })) {
                                    var newValue = _object_spread({}, config[key], oldConfig);
                                    console.log("[LocalUserDB] 更新配置 ".concat(type, ".").concat(key, "=").concat(JSON.stringify(newValue)));
                                    LocalUserDB.updateUserConfig({
                                        type: type,
                                        key: key
                                    }, {
                                        value: newValue
                                    });
                                }
                            }
                        });
                    }, "storeDbInfo");
                    storeDbInfo("mysql", mysqlConfig);
                    storeDbInfo("mongo", mongodbConfig);
                    storeDbInfo("redis", redisConfig);
                    storeDbInfo("qiniu", qiniuConfig);
                    storeDbInfo("global", {
                        site: {
                            maxInputLength: 20,
                            openPraise: false,
                            formLength: 10,
                            downloadOneExpired: 1,
                            downloadCompressExpired: 60,
                            compressSizeLimit: 10,
                            needBindEmail: false,
                            limitSpace: false,
                            limitWallet: false,
                            qiniuOSSPrice: 0.099,
                            qiniuCDNPrice: 0.28,
                            qiniuBackhaulTrafficPrice: 0.15,
                            qiniuBackhaulTrafficPercentage: 0.8,
                            qiniuCompressPrice: 0.05,
                            moneyStartDay: +/* @__PURE__ */ new Date("2024-06-01"),
                            appName: "轻取"
                        }
                    });
                    return [
                        4,
                        LocalUserDB.updateCfg()
                    ];
                case 1:
                    _state.sent();
                    return [
                        4,
                        LocalUserDB.updateLocalEnv()
                    ];
                case 2:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    });
    return _initUserConfig.apply(this, arguments);
}
__name(initUserConfig, "initUserConfig");
function readyServerDepService() {
    return Promise.all([
        initTokenUtil(),
        // 1. MySQL
        initTypeORM(),
        refreshPool(),
        // 2. qiniu
        refreshQinNiuConfig(),
        // 4 mongodb
        refreshMongoDb()
    ]);
}
__name(readyServerDepService, "readyServerDepService");
function initTokenUtil() {
    if (!import_node_process5.default.env.TOKEN_PREFIX) {
        var prefix = Math.random().toString(36).slice(2, 8);
        import_node_process5.default.env.TOKEN_PREFIX = "ep-token-".concat(prefix);
        (0, import_promises.appendFile)(".env.local", "\nTOKEN_PREFIX=".concat(import_node_process5.default.env.TOKEN_PREFIX));
    }
}
__name(initTokenUtil, "initTokenUtil");
// src/controllers/config.ts
function _ts_decorate33(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate33, "_ts_decorate");
function _ts_metadata26(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata26, "_ts_metadata");
function _ts_param9(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
__name(_ts_param9, "_ts_param");
var AUTO_SQL_PATH = import_node_path7.default.join(process.cwd(), "docs/sql/auto_create.sql");
var cachedAutoCreateSql = "";
function loadAutoCreateSql() {
    return _loadAutoCreateSql.apply(this, arguments);
}
function _loadAutoCreateSql() {
    _loadAutoCreateSql = _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (!!cachedAutoCreateSql) return [
                        3,
                        2
                    ];
                    return [
                        4,
                        import_promises2.default.readFile(AUTO_SQL_PATH, "utf-8")
                    ];
                case 1:
                    cachedAutoCreateSql = _state.sent();
                    _state.label = 2;
                case 2:
                    return [
                        2,
                        cachedAutoCreateSql
                    ];
            }
        });
    });
    return _loadAutoCreateSql.apply(this, arguments);
}
__name(loadAutoCreateSql, "loadAutoCreateSql");
function normalizeMysqlPayload(payload) {
    return _object_spread_props(_object_spread({}, payload), {
        port: Number(payload.port) || 3306
    });
}
__name(normalizeMysqlPayload, "normalizeMysqlPayload");
function normalizeRedisPayload(payload) {
    return {
        host: payload.host,
        port: Number(payload.port) || 6379,
        password: payload.password || ""
    };
}
__name(normalizeRedisPayload, "normalizeRedisPayload");
function parseMongoUri(uri) {
    var _parsed_pathname;
    var parsed = new URL(uri);
    var auth3 = Boolean(parsed.username);
    return {
        uri: uri,
        host: parsed.hostname,
        port: Number(parsed.port) || 27017,
        user: parsed.username ? decodeURIComponent(parsed.username) : "",
        password: parsed.password ? decodeURIComponent(parsed.password) : "",
        database: ((_parsed_pathname = parsed.pathname) === null || _parsed_pathname === void 0 ? void 0 : _parsed_pathname.replace("/", "")) || "admin",
        auth: auth3
    };
}
__name(parseMongoUri, "parseMongoUri");
function createMysqlConnection(payload) {
    var useDb = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    var cfg = normalizeMysqlPayload(payload);
    var connectionConfig = {
        host: cfg.host,
        port: cfg.port,
        user: cfg.username,
        password: cfg.password,
        charset: "utf8mb4_general_ci",
        multipleStatements: true
    };
    if (useDb) {
        connectionConfig.database = cfg.database;
    }
    return new Promise(function(resolve, reject) {
        var connection = import_mysql9.default.createConnection(connectionConfig);
        connection.connect(function(err) {
            if (err) {
                reject(err);
                return;
            }
            resolve(connection);
        });
    });
}
__name(createMysqlConnection, "createMysqlConnection");
function exec(connection, sql) {
    return new Promise(function(resolve, reject) {
        connection.query(sql, function(err) {
            if (err) {
                reject(err);
                return;
            }
            resolve();
        });
    });
}
__name(exec, "exec");
function ensureMysqlSchema(payload) {
    return _ensureMysqlSchema.apply(this, arguments);
}
function _ensureMysqlSchema() {
    _ensureMysqlSchema = _async_to_generator(function(payload) {
        var dbPayload, connection, dbConnection, sql;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    dbPayload = normalizeMysqlPayload(payload);
                    return [
                        4,
                        createMysqlConnection(dbPayload)
                    ];
                case 1:
                    connection = _state.sent();
                    _state.label = 2;
                case 2:
                    _state.trys.push([
                        2,
                        ,
                        5,
                        6
                    ]);
                    return [
                        4,
                        exec(connection, "DROP DATABASE IF EXISTS `".concat(dbPayload.database, "`"))
                    ];
                case 3:
                    _state.sent();
                    return [
                        4,
                        exec(connection, "CREATE DATABASE IF NOT EXISTS `".concat(dbPayload.database, "` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci"))
                    ];
                case 4:
                    _state.sent();
                    return [
                        3,
                        6
                    ];
                case 5:
                    connection.end();
                    return [
                        7
                    ];
                case 6:
                    return [
                        4,
                        createMysqlConnection(dbPayload, true)
                    ];
                case 7:
                    dbConnection = _state.sent();
                    _state.label = 8;
                case 8:
                    _state.trys.push([
                        8,
                        ,
                        11,
                        12
                    ]);
                    return [
                        4,
                        loadAutoCreateSql()
                    ];
                case 9:
                    sql = _state.sent();
                    return [
                        4,
                        exec(dbConnection, sql)
                    ];
                case 10:
                    _state.sent();
                    return [
                        3,
                        12
                    ];
                case 11:
                    dbConnection.end();
                    return [
                        7
                    ];
                case 12:
                    return [
                        2
                    ];
            }
        });
    });
    return _ensureMysqlSchema.apply(this, arguments);
}
__name(ensureMysqlSchema, "ensureMysqlSchema");
function saveConfigEntries(entries) {
    return _saveConfigEntries.apply(this, arguments);
}
function _saveConfigEntries() {
    _saveConfigEntries = _async_to_generator(function(entries) {
        var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, entry, err;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        6,
                        7,
                        8
                    ]);
                    _iterator = entries[Symbol.iterator]();
                    _state.label = 2;
                case 2:
                    if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                        3,
                        5
                    ];
                    entry = _step.value;
                    return [
                        4,
                        LocalUserDB.setUserConfig({
                            type: entry.type,
                            key: entry.key,
                            value: entry.value,
                            isSecret: Boolean(entry.isSecret)
                        })
                    ];
                case 3:
                    _state.sent();
                    _state.label = 4;
                case 4:
                    _iteratorNormalCompletion = true;
                    return [
                        3,
                        2
                    ];
                case 5:
                    return [
                        3,
                        8
                    ];
                case 6:
                    err = _state.sent();
                    _didIteratorError = true;
                    _iteratorError = err;
                    return [
                        3,
                        8
                    ];
                case 7:
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                    return [
                        7
                    ];
                case 8:
                    return [
                        4,
                        LocalUserDB.updateLocalEnv()
                    ];
                case 9:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    });
    return _saveConfigEntries.apply(this, arguments);
}
__name(saveConfigEntries, "saveConfigEntries");
function persistMysqlConfig(payload) {
    return _persistMysqlConfig.apply(this, arguments);
}
function _persistMysqlConfig() {
    _persistMysqlConfig = _async_to_generator(function(payload) {
        var cfg, error, _error;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    cfg = normalizeMysqlPayload(payload);
                    return [
                        4,
                        saveConfigEntries([
                            {
                                type: "mysql",
                                key: "host",
                                value: cfg.host
                            },
                            {
                                type: "mysql",
                                key: "port",
                                value: cfg.port
                            },
                            {
                                type: "mysql",
                                key: "database",
                                value: cfg.database
                            },
                            {
                                type: "mysql",
                                key: "user",
                                value: cfg.username
                            },
                            {
                                type: "mysql",
                                key: "password",
                                value: cfg.password,
                                isSecret: true
                            }
                        ])
                    ];
                case 1:
                    _state.sent();
                    return [
                        4,
                        refreshPool()
                    ];
                case 2:
                    _state.sent();
                    _state.label = 3;
                case 3:
                    _state.trys.push([
                        3,
                        6,
                        ,
                        7
                    ]);
                    return [
                        4,
                        initTypeORM()
                    ];
                case 4:
                    _state.sent();
                    return [
                        4,
                        patchTable()
                    ];
                case 5:
                    _state.sent();
                    return [
                        3,
                        7
                    ];
                case 6:
                    error = _state.sent();
                    console.log("初始化 TypeORM 失败, 请确认数据库可用", (_error = error) === null || _error === void 0 ? void 0 : _error.message);
                    return [
                        3,
                        7
                    ];
                case 7:
                    return [
                        2
                    ];
            }
        });
    });
    return _persistMysqlConfig.apply(this, arguments);
}
__name(persistMysqlConfig, "persistMysqlConfig");
function testMysqlConnection(payload) {
    return _testMysqlConnection.apply(this, arguments);
}
function _testMysqlConnection() {
    _testMysqlConnection = _async_to_generator(function(payload) {
        var connection;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        createMysqlConnection(payload)
                    ];
                case 1:
                    connection = _state.sent();
                    _state.label = 2;
                case 2:
                    _state.trys.push([
                        2,
                        ,
                        4,
                        5
                    ]);
                    return [
                        4,
                        exec(connection, "SELECT 1")
                    ];
                case 3:
                    _state.sent();
                    return [
                        3,
                        5
                    ];
                case 4:
                    connection.end();
                    return [
                        7
                    ];
                case 5:
                    return [
                        2
                    ];
            }
        });
    });
    return _testMysqlConnection.apply(this, arguments);
}
__name(testMysqlConnection, "testMysqlConnection");
function createRedisClient(payload) {
    var cfg = normalizeRedisPayload(payload);
    var options = cfg.password ? {
        password: cfg.password
    } : void 0;
    var client = import_redis3.default.createClient(cfg.port, cfg.host, options);
    return {
        client: client,
        cfg: cfg
    };
}
__name(createRedisClient, "createRedisClient");
function testRedisConnection(payload) {
    return _testRedisConnection.apply(this, arguments);
}
function _testRedisConnection() {
    _testRedisConnection = _async_to_generator(function(payload) {
        var client;
        return _ts_generator(this, function(_state) {
            client = createRedisClient(payload).client;
            return [
                2,
                new Promise(function(resolve, reject) {
                    client.on("ready", function() {
                        client.quit();
                        resolve();
                    });
                    client.on("error", function(err) {
                        client.quit();
                        reject(err);
                    });
                })
            ];
        });
    });
    return _testRedisConnection.apply(this, arguments);
}
__name(testRedisConnection, "testRedisConnection");
function persistRedisConfig(payload) {
    return _persistRedisConfig.apply(this, arguments);
}
function _persistRedisConfig() {
    _persistRedisConfig = _async_to_generator(function(payload) {
        var cfg;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    cfg = normalizeRedisPayload(payload);
                    return [
                        4,
                        saveConfigEntries([
                            {
                                type: "redis",
                                key: "host",
                                value: cfg.host
                            },
                            {
                                type: "redis",
                                key: "port",
                                value: cfg.port
                            },
                            {
                                type: "redis",
                                key: "password",
                                value: cfg.password,
                                isSecret: true
                            },
                            {
                                type: "redis",
                                key: "auth",
                                value: Boolean(cfg.password)
                            }
                        ])
                    ];
                case 1:
                    _state.sent();
                    process.env.REDIS_DB_HOST = cfg.host;
                    process.env.REDIS_DB_PORT = String(cfg.port);
                    process.env.REDIS_DB_PASSWORD = cfg.password;
                    process.env.REDIS_DB_NEED_AUTH = String(Boolean(cfg.password));
                    return [
                        2
                    ];
            }
        });
    });
    return _persistRedisConfig.apply(this, arguments);
}
__name(persistRedisConfig, "persistRedisConfig");
function testMongoConnection(payload) {
    return _testMongoConnection.apply(this, arguments);
}
function _testMongoConnection() {
    _testMongoConnection = _async_to_generator(function(payload) {
        var client;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        import_mongodb12.MongoClient.connect(payload.uri, {
                            useUnifiedTopology: true,
                            useNewUrlParser: true
                        })
                    ];
                case 1:
                    client = _state.sent();
                    return [
                        4,
                        client.db().command({
                            ping: 1
                        })
                    ];
                case 2:
                    _state.sent();
                    return [
                        4,
                        client.close()
                    ];
                case 3:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    });
    return _testMongoConnection.apply(this, arguments);
}
__name(testMongoConnection, "testMongoConnection");
function persistMongoConfig(payload) {
    return _persistMongoConfig.apply(this, arguments);
}
function _persistMongoConfig() {
    _persistMongoConfig = _async_to_generator(function(payload) {
        var cfg;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    cfg = parseMongoUri(payload.uri);
                    return [
                        4,
                        saveConfigEntries([
                            {
                                type: "mongo",
                                key: "host",
                                value: cfg.host
                            },
                            {
                                type: "mongo",
                                key: "port",
                                value: cfg.port
                            },
                            {
                                type: "mongo",
                                key: "database",
                                value: cfg.database
                            },
                            {
                                type: "mongo",
                                key: "user",
                                value: cfg.user
                            },
                            {
                                type: "mongo",
                                key: "password",
                                value: cfg.password,
                                isSecret: Boolean(cfg.password)
                            },
                            {
                                type: "mongo",
                                key: "auth",
                                value: cfg.auth
                            },
                            {
                                type: "mongo",
                                key: "uri",
                                value: cfg.uri,
                                isSecret: Boolean(cfg.password)
                            }
                        ])
                    ];
                case 1:
                    _state.sent();
                    process.env.MONGO_DB_HOST = cfg.host;
                    process.env.MONGO_DB_PORT = String(cfg.port);
                    process.env.MONGO_DB_NAME = cfg.database;
                    process.env.MONGO_DB_USER = cfg.user;
                    process.env.MONGO_DB_PWD = cfg.password;
                    process.env.MONGO_DB_NEED_AUTH = String(cfg.auth);
                    return [
                        4,
                        refreshMongoDb()
                    ];
                case 2:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    });
    return _persistMongoConfig.apply(this, arguments);
}
__name(persistMongoConfig, "persistMongoConfig");
var _a38;
var /*#__PURE__*/ _tmp;
var UserController2 = ((_tmp = function() {
    "use strict";
    function _tmp() {
        _class_call_check(this, _tmp);
        __publicField(this, "tokenService");
    }
    _create_class(_tmp, [
        {
            key: "getServiceStatus",
            value: function getServiceStatus() {
                return _async_to_generator(function() {
                    var data, result;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    Promise.all([
                                        getQiniuStatus(),
                                        getRedisStatus(),
                                        getMysqlStatus(),
                                        getMongoDBStatus()
                                    ])
                                ];
                            case 1:
                                data = _state.sent();
                                result = data.reduce(function(pre, cur) {
                                    var type = cur.type, rest = _object_without_properties(cur, [
                                        "type"
                                    ]);
                                    pre[type] = rest;
                                    return pre;
                                }, {});
                                return [
                                    2,
                                    result
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "testMysql",
            value: function testMysql(payload) {
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    testMysqlConnection(payload)
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "initializeMysql",
            value: function initializeMysql(payload) {
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    testMysqlConnection(payload)
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    4,
                                    ensureMysqlSchema(payload)
                                ];
                            case 2:
                                _state.sent();
                                return [
                                    4,
                                    persistMysqlConfig(payload)
                                ];
                            case 3:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "testRedis",
            value: function testRedis(payload) {
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    testRedisConnection(payload)
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "initializeRedis",
            value: function initializeRedis(payload) {
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    testRedisConnection(payload)
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    4,
                                    persistRedisConfig(payload)
                                ];
                            case 2:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "testMongo",
            value: function testMongo(payload) {
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    testMongoConnection(payload)
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "initializeMongo",
            value: function initializeMongo(payload) {
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    testMongoConnection(payload)
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    4,
                                    persistMongoConfig(payload)
                                ];
                            case 2:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "cleanUserConfig",
            value: function cleanUserConfig(cfg) {
                return cfg.map(function(v) {
                    var key = v.key, isSecret = v.isSecret, value = v.value, type = v.type;
                    return {
                        key: key,
                        value: isSecret ? "******" : value,
                        type: type,
                        label: UserConfigLabels[type][key]
                    };
                });
            }
        },
        {
            key: "getUserConfig",
            value: function getUserConfig() {
                var _this = this;
                return _async_to_generator(function() {
                    var mysql3, qiniu3, mongo;
                    return _ts_generator(this, function(_state) {
                        mysql3 = _this.cleanUserConfig(LocalUserDB.findUserConfig({
                            type: "mysql"
                        }));
                        qiniu3 = _this.cleanUserConfig(LocalUserDB.findUserConfig({
                            type: "qiniu"
                        }));
                        mongo = _this.cleanUserConfig(LocalUserDB.findUserConfig({
                            type: "mongo"
                        }));
                        return [
                            2,
                            [
                                {
                                    title: "MySQL",
                                    data: mysql3
                                },
                                {
                                    title: "MongoDB",
                                    data: mongo
                                },
                                {
                                    title: "七牛云",
                                    data: qiniu3
                                }
                            ]
                        ];
                    });
                })();
            }
        },
        {
            key: "configureAdmin",
            value: function configureAdmin(body) {
                return _async_to_generator(function() {
                    var username, email, password3, admin, passwordHash;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                username = body.username, email = body.email, password3 = body.password;
                                if (!username) {
                                    throw UserError.account.fault;
                                }
                                if (!rEmail.test(email)) {
                                    throw UserError.email.fault;
                                }
                                if (!password3) {
                                    throw UserError.pwd.fault;
                                }
                                return [
                                    4,
                                    selectUserByAccount(username)
                                ];
                            case 1:
                                admin = _state.sent()[0];
                                if (!!admin) return [
                                    3,
                                    3
                                ];
                                return [
                                    4,
                                    selectUserByEmail(email)
                                ];
                            case 2:
                                admin = _state.sent()[0];
                                _state.label = 3;
                            case 3:
                                passwordHash = encryption(password3);
                                if (!admin) return [
                                    3,
                                    5
                                ];
                                return [
                                    4,
                                    updateUser({
                                        account: username,
                                        email: email,
                                        password: passwordHash,
                                        power: USER_POWER.SUPER,
                                        status: USER_STATUS.NORMAL
                                    }, {
                                        id: admin.id
                                    })
                                ];
                            case 4:
                                _state.sent();
                                return [
                                    2
                                ];
                            case 5:
                                return [
                                    4,
                                    insertUser({
                                        account: username,
                                        email: email,
                                        password: passwordHash,
                                        power: USER_POWER.SUPER,
                                        status: USER_STATUS.NORMAL,
                                        loginCount: 0
                                    })
                                ];
                            case 6:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "sendAdminVerification",
            value: function sendAdminVerification(email) {
                var _this = this;
                return _async_to_generator(function() {
                    var code;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!rEmail.test(email)) {
                                    throw UserError.email.fault;
                                }
                                code = randomNumStr(4);
                                return [
                                    4,
                                    sendMail({
                                        to: email,
                                        subject: "EasyPicker 管理员验证码",
                                        html: "<p>您正在初始化 EasyPicker，验证码为 <strong>".concat(code, "</strong>，有效期 2 分钟。</p>")
                                    })
                                ];
                            case 1:
                                _state.sent();
                                _this.tokenService.setVerifyCode(email, code, 60 * 2);
                                return [
                                    2,
                                    {
                                        message: "验证码已发送到 ".concat(email)
                                    }
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "finishInitialization",
            value: function finishInitialization(body) {
                return _async_to_generator(function() {
                    var email, mysql3, admin, cfg, html;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                email = body.email, mysql3 = body.mysql, admin = body.admin;
                                if (!rEmail.test(email)) {
                                    throw UserError.email.fault;
                                }
                                cfg = getMailConfig();
                                html = "\n      <h2>系统初始化完成</h2>\n      <p>系统已完成基础配置，以下是关键信息摘要，请妥善保存：</p>\n\n      <h3>管理员信息：</h3>\n      <p>账号：".concat(admin.username, "</p>\n      <p>密码：").concat(admin.password, "</p>\n      <p>邮箱：").concat(admin.email, "</p>\n\n      <hr />\n\n      <h3>数据库信息：</h3>\n      <p>数据库地址：").concat(mysql3.host, ":").concat(mysql3.port, "</p>\n      <p>数据库名称：").concat(mysql3.database, "</p>\n      <p>用户名：").concat(mysql3.username, "</p>\n    ");
                                return [
                                    4,
                                    sendMail({
                                        to: email,
                                        subject: cfg.subject || "系统初始化完成",
                                        html: html
                                    })
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2,
                                    {
                                        status: "ok"
                                    }
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "configureMail",
            value: function configureMail(body) {
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!body.smtpHost || !body.account || !body.password) {
                                    throw UserError.account.fault;
                                }
                                return [
                                    4,
                                    saveConfigEntries([
                                        {
                                            type: "mail",
                                            key: "smtpHost",
                                            value: body.smtpHost
                                        },
                                        {
                                            type: "mail",
                                            key: "smtpPort",
                                            value: body.smtpPort
                                        },
                                        {
                                            type: "mail",
                                            key: "useSSL",
                                            value: body.useSSL
                                        },
                                        {
                                            type: "mail",
                                            key: "account",
                                            value: body.account
                                        },
                                        {
                                            type: "mail",
                                            key: "password",
                                            value: body.password,
                                            isSecret: true
                                        },
                                        {
                                            type: "mail",
                                            key: "from",
                                            value: body.from || body.account
                                        },
                                        {
                                            type: "mail",
                                            key: "senderName",
                                            value: body.senderName || ""
                                        },
                                        {
                                            type: "mail",
                                            key: "subject",
                                            value: body.subject || "EasyPicker 通知"
                                        },
                                        {
                                            type: "mail",
                                            key: "template",
                                            value: body.template || ""
                                        }
                                    ])
                                ];
                            case 1:
                                _state.sent();
                                resetMailTransporter();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "sendMailTest",
            value: function sendMailTest(body) {
                return _async_to_generator(function() {
                    var cfg;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!rEmail.test(body.target)) {
                                    throw UserError.email.fault;
                                }
                                cfg = getMailConfig();
                                return [
                                    4,
                                    sendMail({
                                        to: body.target,
                                        subject: cfg.subject || "EasyPicker 测试邮件",
                                        html: cfg.template || "<p>这是一封测试邮件，如果您收到该邮件说明 SMTP 配置正常。</p>"
                                    })
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "sendMailLiveTest",
            value: function sendMailLiveTest(body) {
                return _async_to_generator(function() {
                    var smtpHost, smtpPort, useSSL, account, password3, from, senderName, subject, template, target, mailConfig;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                smtpHost = body.smtpHost, smtpPort = body.smtpPort, useSSL = body.useSSL, account = body.account, password3 = body.password, from = body.from, senderName = body.senderName, subject = body.subject, template = body.template, target = body.target;
                                if (!smtpHost || !account || !password3) {
                                    throw UserError.account.fault;
                                }
                                if (!rEmail.test(target)) {
                                    throw UserError.email.fault;
                                }
                                mailConfig = {
                                    smtpHost: smtpHost,
                                    smtpPort: smtpPort,
                                    useSSL: useSSL,
                                    account: account,
                                    password: password3,
                                    from: from || account,
                                    senderName: senderName,
                                    subject: subject,
                                    template: template
                                };
                                return [
                                    4,
                                    sendMail({
                                        to: target,
                                        subject: subject || "EasyPicker 测试邮件",
                                        html: template || "<p>这是一封测试邮件，如果您收到该邮件说明 SMTP 配置正常。</p>"
                                    }, mailConfig)
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "updateUserConfig",
            value: function updateUserConfig(data) {
                return _async_to_generator(function() {
                    var wrapperValue, error;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                wrapperValue = /* @__PURE__ */ __name(function(key, v) {
                                    var num = [
                                        "port"
                                    ];
                                    var bool = [
                                        "auth"
                                    ];
                                    var boolString = [
                                        "imageCoverStyle",
                                        "imagePreviewStyle"
                                    ];
                                    if (num.includes(key)) {
                                        return +v;
                                    }
                                    if (bool.includes(key)) {
                                        return String(true) === v;
                                    }
                                    if (boolString.includes(key)) {
                                        return String(false) === v ? "" : v;
                                    }
                                    return v;
                                }, "wrapperValue");
                                return [
                                    4,
                                    LocalUserDB.updateUserConfig({
                                        type: data.type,
                                        key: data.key
                                    }, {
                                        value: wrapperValue(data.key, data.value)
                                    })
                                ];
                            case 1:
                                _state.sent();
                                if (!(data.type === "mysql")) return [
                                    3,
                                    7
                                ];
                                return [
                                    4,
                                    refreshPool()
                                ];
                            case 2:
                                _state.sent();
                                _state.label = 3;
                            case 3:
                                _state.trys.push([
                                    3,
                                    6,
                                    ,
                                    7
                                ]);
                                return [
                                    4,
                                    initTypeORM()
                                ];
                            case 4:
                                _state.sent();
                                return [
                                    4,
                                    patchTable()
                                ];
                            case 5:
                                _state.sent();
                                return [
                                    3,
                                    7
                                ];
                            case 6:
                                error = _state.sent();
                                return [
                                    3,
                                    7
                                ];
                            case 7:
                                if (!(data.type === "qiniu")) return [
                                    3,
                                    9
                                ];
                                return [
                                    4,
                                    refreshQinNiuConfig()
                                ];
                            case 8:
                                _state.sent();
                                _state.label = 9;
                            case 9:
                                if (!(data.type === "mongo")) return [
                                    3,
                                    11
                                ];
                                return [
                                    4,
                                    refreshMongoDb()
                                ];
                            case 10:
                                _state.sent();
                                _state.label = 11;
                            case 11:
                                return [
                                    4,
                                    LocalUserDB.updateLocalEnv()
                                ];
                            case 12:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "getGlobalConfig",
            value: function getGlobalConfig() {
                var key = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "site";
                return _async_to_generator(function() {
                    var _globalConfig_, globalConfig, siteConfig, filterKey;
                    return _ts_generator(this, function(_state) {
                        globalConfig = LocalUserDB.findUserConfig({
                            type: "global",
                            key: key
                        });
                        siteConfig = ((_globalConfig_ = globalConfig[0]) === null || _globalConfig_ === void 0 ? void 0 : _globalConfig_.value) || (key === "site" ? LocalUserDB.getSiteConfig() : {}) || {};
                        filterKey = [
                            "maxInputLength",
                            "openPraise",
                            "formLength",
                            "compressSizeLimit",
                            "needBindEmail",
                            "limitSpace",
                            "limitWallet",
                            "moneyStartDay",
                            "appName"
                        ];
                        return [
                            2,
                            filterKey.reduce(function(pre, cur) {
                                pre[cur] = siteConfig[cur];
                                return pre;
                            }, {})
                        ];
                    });
                })();
            }
        },
        {
            key: "getAllGlobalConfig",
            value: function getAllGlobalConfig() {
                var key = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "site";
                return _async_to_generator(function() {
                    var _globalConfig_, globalConfig;
                    return _ts_generator(this, function(_state) {
                        globalConfig = LocalUserDB.findUserConfig({
                            type: "global",
                            key: key
                        });
                        return [
                            2,
                            ((_globalConfig_ = globalConfig[0]) === null || _globalConfig_ === void 0 ? void 0 : _globalConfig_.value) || (key === "site" ? LocalUserDB.getSiteConfig() : {})
                        ];
                    });
                })();
            }
        },
        {
            key: "updateGlobalConfig",
            value: function updateGlobalConfig(data) {
                return _async_to_generator(function() {
                    var key, value;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                key = data.key, value = data.value;
                                return [
                                    4,
                                    LocalUserDB.updateUserConfig({
                                        type: "global",
                                        key: key
                                    }, {
                                        value: value
                                    })
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return _tmp;
}(), _a38 = _tmp, _tmp), __name(_a38, "UserController"), _a38);
_ts_decorate33([
    (0, import_flash_wolves30.Inject)(TokenService),
    _ts_metadata26("design:type", typeof TokenService === "undefined" ? Object : TokenService)
], UserController2.prototype, "tokenService", void 0);
_ts_decorate33([
    (0, import_flash_wolves30.Get)("service/overview"),
    _ts_metadata26("design:type", Function),
    _ts_metadata26("design:paramtypes", [])
], UserController2.prototype, "getServiceStatus", null);
_ts_decorate33([
    (0, import_flash_wolves30.Post)("init/mysql/test"),
    _ts_param9(0, (0, import_flash_wolves30.ReqBody)()),
    _ts_metadata26("design:type", Function),
    _ts_metadata26("design:paramtypes", [
        typeof MysqlInitPayload === "undefined" ? Object : MysqlInitPayload
    ])
], UserController2.prototype, "testMysql", null);
_ts_decorate33([
    (0, import_flash_wolves30.Post)("init/mysql"),
    _ts_param9(0, (0, import_flash_wolves30.ReqBody)()),
    _ts_metadata26("design:type", Function),
    _ts_metadata26("design:paramtypes", [
        typeof MysqlInitPayload === "undefined" ? Object : MysqlInitPayload
    ])
], UserController2.prototype, "initializeMysql", null);
_ts_decorate33([
    (0, import_flash_wolves30.Post)("init/redis/test"),
    _ts_param9(0, (0, import_flash_wolves30.ReqBody)()),
    _ts_metadata26("design:type", Function),
    _ts_metadata26("design:paramtypes", [
        typeof RedisConfigPayload === "undefined" ? Object : RedisConfigPayload
    ])
], UserController2.prototype, "testRedis", null);
_ts_decorate33([
    (0, import_flash_wolves30.Post)("init/redis"),
    _ts_param9(0, (0, import_flash_wolves30.ReqBody)()),
    _ts_metadata26("design:type", Function),
    _ts_metadata26("design:paramtypes", [
        typeof RedisConfigPayload === "undefined" ? Object : RedisConfigPayload
    ])
], UserController2.prototype, "initializeRedis", null);
_ts_decorate33([
    (0, import_flash_wolves30.Post)("init/mongo/test"),
    _ts_param9(0, (0, import_flash_wolves30.ReqBody)()),
    _ts_metadata26("design:type", Function),
    _ts_metadata26("design:paramtypes", [
        typeof MongoConfigPayload === "undefined" ? Object : MongoConfigPayload
    ])
], UserController2.prototype, "testMongo", null);
_ts_decorate33([
    (0, import_flash_wolves30.Post)("init/mongo"),
    _ts_param9(0, (0, import_flash_wolves30.ReqBody)()),
    _ts_metadata26("design:type", Function),
    _ts_metadata26("design:paramtypes", [
        typeof MongoConfigPayload === "undefined" ? Object : MongoConfigPayload
    ])
], UserController2.prototype, "initializeMongo", null);
_ts_decorate33([
    (0, import_flash_wolves30.Get)("service/config"),
    _ts_metadata26("design:type", Function),
    _ts_metadata26("design:paramtypes", [])
], UserController2.prototype, "getUserConfig", null);
_ts_decorate33([
    (0, import_flash_wolves30.Post)("init/admin"),
    _ts_param9(0, (0, import_flash_wolves30.ReqBody)()),
    _ts_metadata26("design:type", Function),
    _ts_metadata26("design:paramtypes", [
        typeof AdminPayload === "undefined" ? Object : AdminPayload
    ])
], UserController2.prototype, "configureAdmin", null);
_ts_decorate33([
    (0, import_flash_wolves30.Post)("init/admin/verification"),
    _ts_param9(0, (0, import_flash_wolves30.ReqBody)("email")),
    _ts_metadata26("design:type", Function),
    _ts_metadata26("design:paramtypes", [
        String
    ])
], UserController2.prototype, "sendAdminVerification", null);
_ts_decorate33([
    (0, import_flash_wolves30.Post)("init/finish"),
    _ts_param9(0, (0, import_flash_wolves30.ReqBody)()),
    _ts_metadata26("design:type", Function),
    _ts_metadata26("design:paramtypes", [
        typeof FinishInitPayload === "undefined" ? Object : FinishInitPayload
    ])
], UserController2.prototype, "finishInitialization", null);
_ts_decorate33([
    (0, import_flash_wolves30.Post)("init/mail"),
    _ts_param9(0, (0, import_flash_wolves30.ReqBody)()),
    _ts_metadata26("design:type", Function),
    _ts_metadata26("design:paramtypes", [
        typeof MailConfigPayload === "undefined" ? Object : MailConfigPayload
    ])
], UserController2.prototype, "configureMail", null);
_ts_decorate33([
    (0, import_flash_wolves30.Post)("init/mail/test"),
    _ts_param9(0, (0, import_flash_wolves30.ReqBody)()),
    _ts_metadata26("design:type", Function),
    _ts_metadata26("design:paramtypes", [
        typeof MailTestPayload === "undefined" ? Object : MailTestPayload
    ])
], UserController2.prototype, "sendMailTest", null);
_ts_decorate33([
    (0, import_flash_wolves30.Post)("init/mail/test/live"),
    _ts_param9(0, (0, import_flash_wolves30.ReqBody)()),
    _ts_metadata26("design:type", Function),
    _ts_metadata26("design:paramtypes", [
        typeof MailLiveTestPayload === "undefined" ? Object : MailLiveTestPayload
    ])
], UserController2.prototype, "sendMailLiveTest", null);
_ts_decorate33([
    (0, import_flash_wolves30.Put)("service/config"),
    _ts_param9(0, (0, import_flash_wolves30.ReqBody)()),
    _ts_metadata26("design:type", Function),
    _ts_metadata26("design:paramtypes", [
        typeof Partial === "undefined" ? Object : Partial
    ])
], UserController2.prototype, "updateUserConfig", null);
_ts_decorate33([
    (0, import_flash_wolves30.Get)("global", {
        needLogin: false,
        userPower: null
    }),
    _ts_param9(0, (0, import_flash_wolves30.ReqQuery)("type")),
    _ts_metadata26("design:type", Function),
    _ts_metadata26("design:paramtypes", [
        void 0
    ])
], UserController2.prototype, "getGlobalConfig", null);
_ts_decorate33([
    (0, import_flash_wolves30.Get)("global/all", {
        userPower: USER_POWER.SUPER
    }),
    _ts_param9(0, (0, import_flash_wolves30.ReqQuery)("type")),
    _ts_metadata26("design:type", Function),
    _ts_metadata26("design:paramtypes", [
        void 0
    ])
], UserController2.prototype, "getAllGlobalConfig", null);
_ts_decorate33([
    (0, import_flash_wolves30.Put)("global", {
        userPower: USER_POWER.SUPER
    }),
    _ts_param9(0, (0, import_flash_wolves30.ReqBody)()),
    _ts_metadata26("design:type", Function),
    _ts_metadata26("design:paramtypes", [
        void 0
    ])
], UserController2.prototype, "updateGlobalConfig", null);
UserController2 = _ts_decorate33([
    (0, import_flash_wolves30.RouterController)("config", {
        userPower: USER_POWER.SYSTEM,
        needLogin: true
    })
], UserController2);
// src/controllers/action.ts
var import_node_path8 = __toESM(require("path"));
var import_flash_wolves31 = require("flash-wolves");
init_localFileUtil();
var import_flash_wolves32 = require("flash-wolves");
function _ts_decorate34(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate34, "_ts_decorate");
function _ts_metadata27(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata27, "_ts_metadata");
function _ts_param10(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
__name(_ts_param10, "_ts_param");
var _a39;
var ActionController = (_a39 = /*#__PURE__*/ function() {
    "use strict";
    function _a39() {
        _class_call_check(this, _a39);
        __publicField(this, "ctx");
        __publicField(this, "localFileService");
    }
    _create_class(_a39, [
        {
            key: "getDownloadActionList",
            value: function getDownloadActionList(size, index, ids) {
                var _this = this;
                return _async_to_generator(function() {
                    var pageIndex, extraIds, pageSize, user2, query3, count, actions, now, expiredHours, oneHour, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, action, needUpdate, pass, data, fileInfo, expiredTime, origin, baseUrl, encodedKey, filename;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                pageIndex = +(index !== null && index !== void 0 ? index : 1);
                                extraIds = ids !== null && ids !== void 0 ? ids : [];
                                pageSize = Math.max(+(size !== null && size !== void 0 ? size : 3), extraIds.length);
                                user2 = _this.ctx.req.userInfo;
                                query3 = {
                                    $or: _to_consumable_array(extraIds.map(function(e) {
                                        return {
                                            id: e
                                        };
                                    })).concat([
                                        {
                                            type: ActionType.Download
                                        },
                                        {
                                            type: ActionType.Compress
                                        }
                                    ]),
                                    userId: user2.id
                                };
                                return [
                                    4,
                                    findActionCount(query3)
                                ];
                            case 1:
                                count = _state.sent();
                                return [
                                    4,
                                    findActionWithPageOffset((pageIndex - 1) * pageSize, pageSize, query3)
                                ];
                            case 2:
                                actions = _state.sent();
                                now = Date.now();
                                expiredHours = 12;
                                oneHour = 1e3 * 60 * 60;
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                try {
                                    for(_iterator = actions[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                        action = _step.value;
                                        needUpdate = false;
                                        if (action.data.status === DownloadStatus.SUCCESS) {
                                            pass = Math.floor((now - +action.date) / oneHour);
                                            if (action.data.expiredTime && now > action.data.expiredTime) {
                                                action.data.status = DownloadStatus.EXPIRED;
                                                needUpdate = true;
                                            } else if (pass >= expiredHours) {
                                                action.data.status = DownloadStatus.EXPIRED;
                                                needUpdate = true;
                                            }
                                        }
                                        if (action.data.status === DownloadStatus.ARCHIVE) {
                                            console.log("检查归档状态, archiveKey:", action.data.archiveKey);
                                            data = checkLocalCompressStatus(action.data.archiveKey || "");
                                            console.log("压缩状态检查结果:", data);
                                            if (data.error) {
                                                console.error("压缩文件检查失败:", data.error);
                                                action.data.status = DownloadStatus.FAIL;
                                                action.data.error = data.error;
                                                needUpdate = true;
                                            }
                                            if (data.code === 0 && data.key) {
                                                console.log("压缩文件已就绪, 开始获取文件信息");
                                                fileInfo = getCompressedFileInfo(data.key);
                                                console.log("压缩文件信息:", fileInfo);
                                                if (fileInfo) {
                                                    action.data.status = DownloadStatus.SUCCESS;
                                                    expiredTime = Math.floor(Date.now() / 1e3) + 3600 * 12;
                                                    origin = _this.ctx.req.headers.origin || _this.ctx.req.headers.referer || "http://localhost:3000";
                                                    baseUrl = new URL(origin).origin;
                                                    encodedKey = encodeURIComponent(data.key);
                                                    action.data.originUrl = "".concat(baseUrl, "/file/compress?key=").concat(encodedKey);
                                                    console.log("生成的下载链接:", action.data.originUrl);
                                                    action.data.url = shortLink(action._id, _this.ctx.req);
                                                    action.data.size = fileInfo.fsize;
                                                    action.data.expiredTime = expiredTime * 1e3;
                                                    filename = import_node_path8.default.parse(fileInfo.key).name;
                                                    action.data.name = filename;
                                                    action.data.account = user2.account;
                                                    action.data.mimeType = fileInfo.mimeType;
                                                    needUpdate = true;
                                                    console.log("压缩文件状态已更新为 SUCCESS");
                                                } else {
                                                    console.error("压缩文件信息获取失败, key:", data.key);
                                                    action.data.status = DownloadStatus.FAIL;
                                                    action.data.error = "压缩文件信息获取失败";
                                                    needUpdate = true;
                                                }
                                            }
                                        }
                                        if (needUpdate) {
                                            updateAction({
                                                id: action.id
                                            }, {
                                                $set: {
                                                    data: _object_spread({}, action.data)
                                                }
                                            });
                                        }
                                    }
                                } catch (err) {
                                    _didIteratorError = true;
                                    _iteratorError = err;
                                } finally{
                                    try {
                                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                                            _iterator.return();
                                        }
                                    } finally{
                                        if (_didIteratorError) {
                                            throw _iteratorError;
                                        }
                                    }
                                }
                                return [
                                    2,
                                    {
                                        sum: count,
                                        pageIndex: index,
                                        pageSize: size,
                                        actions: actions.map(function(v) {
                                            return {
                                                id: v.id,
                                                type: v.type,
                                                status: v.data.status,
                                                url: v.data.url,
                                                tip: v.data.tip,
                                                date: +v.date,
                                                size: v.data.size,
                                                error: v.data.error
                                            };
                                        })
                                    }
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return _a39;
}(), __name(_a39, "ActionController"), _a39);
_ts_decorate34([
    (0, import_flash_wolves31.InjectCtx)(),
    _ts_metadata27("design:type", typeof Context === "undefined" ? Object : Context)
], ActionController.prototype, "ctx", void 0);
_ts_decorate34([
    (0, import_flash_wolves32.Inject)(LocalFileService),
    _ts_metadata27("design:type", typeof LocalFileService === "undefined" ? Object : LocalFileService)
], ActionController.prototype, "localFileService", void 0);
_ts_decorate34([
    (0, import_flash_wolves31.Post)("download/list"),
    _ts_param10(0, (0, import_flash_wolves31.ReqBody)("pageSize")),
    _ts_param10(1, (0, import_flash_wolves31.ReqBody)("pageIndex")),
    _ts_param10(2, (0, import_flash_wolves31.ReqBody)("extraIds")),
    _ts_metadata27("design:type", Function),
    _ts_metadata27("design:paramtypes", [
        Number,
        Number,
        Array
    ])
], ActionController.prototype, "getDownloadActionList", null);
ActionController = _ts_decorate34([
    (0, import_flash_wolves31.RouterController)("action", {
        needLogin: true
    })
], ActionController);
// src/controllers/task.ts
var import_flash_wolves33 = require("flash-wolves");
function _ts_decorate35(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate35, "_ts_decorate");
function _ts_metadata28(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata28, "_ts_metadata");
function _ts_param11(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
__name(_ts_param11, "_ts_param");
var needLogin = {
    needLogin: true
};
var _a40;
var TaskController = (_a40 = /*#__PURE__*/ function() {
    "use strict";
    function _a40() {
        _class_call_check(this, _a40);
        __publicField(this, "Ctx");
        __publicField(this, "taskService");
        __publicField(this, "behaviorService");
        __publicField(this, "userRepository");
        __publicField(this, "fileService");
    }
    _create_class(_a40, [
        {
            key: "createTask",
            value: /**
  * 创建任务
  */ function createTask(payload) {
                var _this = this;
                return _async_to_generator(function() {
                    var name, category, _this_Ctx_req_userInfo, id, logAccount, task;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                name = payload.name, category = payload.category;
                                _this_Ctx_req_userInfo = _this.Ctx.req.userInfo, id = _this_Ctx_req_userInfo.id, logAccount = _this_Ctx_req_userInfo.account;
                                task = new Task();
                                task.name = name;
                                task.categoryKey = category || "";
                                task.userId = id;
                                return [
                                    4,
                                    _this.taskService.createTask(task)
                                ];
                            case 1:
                                _state.sent();
                                _this.behaviorService.add("task", "创建任务 用户:".concat(logAccount, " 任务:").concat(name, " 成功"), {
                                    account: logAccount,
                                    name: name
                                });
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "getTasks",
            value: function getTasks() {
                var _this = this;
                return _async_to_generator(function() {
                    var _this_Ctx_req_userInfo, id, account;
                    return _ts_generator(this, function(_state) {
                        _this_Ctx_req_userInfo = _this.Ctx.req.userInfo, id = _this_Ctx_req_userInfo.id, account = _this_Ctx_req_userInfo.account;
                        return [
                            2,
                            _this.taskService.getTasks(id, account)
                        ];
                    });
                })();
            }
        },
        {
            key: "getTaskByKey",
            value: function getTaskByKey(key) {
                var _this = this;
                return _async_to_generator(function() {
                    var data, user2, userOverview, maxSize, usage, limitUpload, wallet, cost, limitSpace, limitWallet, error;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _state.trys.push([
                                    0,
                                    4,
                                    ,
                                    5
                                ]);
                                return [
                                    4,
                                    _this.taskService.getTaskByKey(key)
                                ];
                            case 1:
                                data = _state.sent();
                                return [
                                    4,
                                    _this.userRepository.findOne({
                                        id: data.userId
                                    })
                                ];
                            case 2:
                                user2 = _state.sent();
                                return [
                                    4,
                                    _this.fileService.getUserOverview(user2)
                                ];
                            case 3:
                                userOverview = _state.sent();
                                maxSize = userOverview.maxSize, usage = userOverview.usage, limitUpload = userOverview.limitUpload, wallet = userOverview.wallet, cost = userOverview.cost, limitSpace = userOverview.limitSpace, limitWallet = userOverview.limitWallet;
                                if (limitSpace) {
                                    _this.behaviorService.add("user", "用户 ".concat(user2.account, " 超出容量限制"), {
                                        space: formatSize(maxSize),
                                        usage: formatSize(usage)
                                    });
                                }
                                if (limitWallet) {
                                    _this.behaviorService.add("user", "用户 ".concat(user2.account, " 余额不足"), {
                                        wallet: wallet,
                                        cost: cost
                                    });
                                }
                                return [
                                    2,
                                    _object_spread_props(_object_spread({}, data), {
                                        limitUpload: limitUpload
                                    })
                                ];
                            case 4:
                                error = _state.sent();
                                return [
                                    2,
                                    wrapperCatchError(error)
                                ];
                            case 5:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "delTask",
            value: function delTask(key) {
                return this.taskService.delTask(key);
            }
        },
        {
            key: "updateTask",
            value: function updateTask(key, payload) {
                return this.taskService.updateTask(key, payload);
            }
        }
    ]);
    return _a40;
}(), __name(_a40, "TaskController"), _a40);
_ts_decorate35([
    (0, import_flash_wolves33.InjectCtx)(),
    _ts_metadata28("design:type", typeof Context === "undefined" ? Object : Context)
], TaskController.prototype, "Ctx", void 0);
_ts_decorate35([
    (0, import_flash_wolves33.Inject)(TaskService),
    _ts_metadata28("design:type", typeof TaskService === "undefined" ? Object : TaskService)
], TaskController.prototype, "taskService", void 0);
_ts_decorate35([
    (0, import_flash_wolves33.Inject)(BehaviorService),
    _ts_metadata28("design:type", typeof BehaviorService === "undefined" ? Object : BehaviorService)
], TaskController.prototype, "behaviorService", void 0);
_ts_decorate35([
    (0, import_flash_wolves33.Inject)(UserRepository),
    _ts_metadata28("design:type", typeof UserRepository === "undefined" ? Object : UserRepository)
], TaskController.prototype, "userRepository", void 0);
_ts_decorate35([
    (0, import_flash_wolves33.Inject)(FileService),
    _ts_metadata28("design:type", typeof FileService === "undefined" ? Object : FileService)
], TaskController.prototype, "fileService", void 0);
_ts_decorate35([
    (0, import_flash_wolves33.Post)("create"),
    _ts_param11(0, (0, import_flash_wolves33.ReqBody)()),
    _ts_metadata28("design:type", Function),
    _ts_metadata28("design:paramtypes", [
        void 0
    ])
], TaskController.prototype, "createTask", null);
_ts_decorate35([
    (0, import_flash_wolves33.Get)(""),
    _ts_metadata28("design:type", Function),
    _ts_metadata28("design:paramtypes", [])
], TaskController.prototype, "getTasks", null);
_ts_decorate35([
    (0, import_flash_wolves33.Get)("/:key", {
        needLogin: false
    }),
    _ts_param11(0, (0, import_flash_wolves33.ReqParams)("key")),
    _ts_metadata28("design:type", Function),
    _ts_metadata28("design:paramtypes", [
        String
    ])
], TaskController.prototype, "getTaskByKey", null);
_ts_decorate35([
    (0, import_flash_wolves33.Delete)("/:key"),
    _ts_param11(0, (0, import_flash_wolves33.ReqParams)("key")),
    _ts_metadata28("design:type", Function),
    _ts_metadata28("design:paramtypes", [
        String
    ])
], TaskController.prototype, "delTask", null);
_ts_decorate35([
    (0, import_flash_wolves33.Put)("/:key"),
    _ts_param11(0, (0, import_flash_wolves33.ReqParams)("key")),
    _ts_param11(1, (0, import_flash_wolves33.ReqBody)()),
    _ts_metadata28("design:type", Function),
    _ts_metadata28("design:paramtypes", [
        String,
        void 0
    ])
], TaskController.prototype, "updateTask", null);
TaskController = _ts_decorate35([
    (0, import_flash_wolves33.RouterController)("task", needLogin)
], TaskController);
// src/controllers/category.ts
var import_flash_wolves34 = require("flash-wolves");
function _ts_decorate36(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate36, "_ts_decorate");
function _ts_metadata29(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata29, "_ts_metadata");
function _ts_param12(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
__name(_ts_param12, "_ts_param");
var _a41;
var CategoryController = (_a41 = /*#__PURE__*/ function() {
    "use strict";
    function _a41() {
        _class_call_check(this, _a41);
        __publicField(this, "ctx");
        __publicField(this, "categoryService");
    }
    _create_class(_a41, [
        {
            key: "createCategory",
            value: function createCategory(name) {
                var _this = this;
                return _async_to_generator(function() {
                    var error;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _state.trys.push([
                                    0,
                                    2,
                                    ,
                                    3
                                ]);
                                return [
                                    4,
                                    _this.categoryService.createCategory(name)
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    3,
                                    3
                                ];
                            case 2:
                                error = _state.sent();
                                return [
                                    2,
                                    wrapperCatchError(error)
                                ];
                            case 3:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "getList",
            value: function getList() {
                return this.categoryService.getList();
            }
        },
        {
            key: "deleteCategory",
            value: function deleteCategory(key) {
                return this.categoryService.deleteCategory(key);
            }
        }
    ]);
    return _a41;
}(), __name(_a41, "CategoryController"), _a41);
_ts_decorate36([
    (0, import_flash_wolves34.InjectCtx)(),
    _ts_metadata29("design:type", typeof import_flash_wolves34.Context === "undefined" ? Object : import_flash_wolves34.Context)
], CategoryController.prototype, "ctx", void 0);
_ts_decorate36([
    (0, import_flash_wolves34.Inject)(CategoryService),
    _ts_metadata29("design:type", typeof CategoryService === "undefined" ? Object : CategoryService)
], CategoryController.prototype, "categoryService", void 0);
_ts_decorate36([
    (0, import_flash_wolves34.Post)("/create"),
    _ts_param12(0, (0, import_flash_wolves34.ReqBody)("name")),
    _ts_metadata29("design:type", Function),
    _ts_metadata29("design:paramtypes", [
        String
    ])
], CategoryController.prototype, "createCategory", null);
_ts_decorate36([
    (0, import_flash_wolves34.Get)(""),
    _ts_metadata29("design:type", Function),
    _ts_metadata29("design:paramtypes", [])
], CategoryController.prototype, "getList", null);
_ts_decorate36([
    (0, import_flash_wolves34.Delete)("/:key"),
    _ts_param12(0, (0, import_flash_wolves34.ReqParams)("key")),
    _ts_metadata29("design:type", Function),
    _ts_metadata29("design:paramtypes", [
        String
    ])
], CategoryController.prototype, "deleteCategory", null);
CategoryController = _ts_decorate36([
    (0, import_flash_wolves34.RouterController)("category", {
        needLogin: true
    })
], CategoryController);
// src/controllers/index.ts
var controllers_default = [
    WishController,
    OverviewController,
    PeopleController,
    FileController,
    TaskInfoController,
    PublicController,
    SuperUserController,
    UserController,
    UserController2,
    ActionController,
    TaskController,
    CategoryController
];
// src/middleware/routeInterceptor.ts
var systemWhiteList = [
    "/user/logout",
    "/user/power/super"
];
var interceptor = /* @__PURE__ */ __name(function() {
    var _ref = _async_to_generator(function(req, res) {
        var _loginUserInfo, meta, needLogin2, userPower, CORS, loginUserInfo, _loginUserInfo1, _loginUserInfo2, _loginUserInfo3;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (req._handled) {
                        return [
                            2
                        ];
                    }
                    if (!req.route) {
                        return [
                            2
                        ];
                    }
                    meta = req.route.meta;
                    if (!meta || Object.keys(meta).length === 0) return [
                        2
                    ];
                    needLogin2 = meta.needLogin, userPower = meta.userPower, CORS = meta.CORS;
                    if (CORS) {
                        res.setHeader("Access-Control-Allow-Origin", "*");
                        res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
                        res.setHeader("Access-Control-Allow-Headers", "*");
                        res.setHeader("Access-Control-Allow-Credentials", "true");
                    }
                    return [
                        4,
                        getUserInfo(req)
                    ];
                case 1:
                    loginUserInfo = _state.sent();
                    if (needLogin2 && (!req.headers.token || ![
                        USER_POWER.SUPER,
                        USER_POWER.SYSTEM,
                        USER_POWER.NORMAL
                    ].includes((_loginUserInfo = loginUserInfo) === null || _loginUserInfo === void 0 ? void 0 : _loginUserInfo.power))) {
                        addBehavior(req, {
                            module: "interceptor",
                            msg: "非法操作,未登录 path:".concat(req.url),
                            data: {
                                url: req.url
                            }
                        });
                        res.failWithError(publicError.request.notLogin);
                        return [
                            2
                        ];
                    }
                    if ([
                        USER_POWER.SUPER,
                        USER_POWER.SYSTEM
                    ].includes(userPower)) {
                        ;
                        if (((_loginUserInfo1 = loginUserInfo) === null || _loginUserInfo1 === void 0 ? void 0 : _loginUserInfo1.power) !== userPower) {
                            addBehavior(req, {
                                module: "interceptor",
                                msg: "非法操作,权限不足 path:".concat(req.url, " "),
                                data: {
                                    url: req.url
                                }
                            });
                            res.failWithError(publicError.request.notLogin);
                            return [
                                2
                            ];
                        }
                    }
                    if (needLogin2) {
                        ;
                        if (((_loginUserInfo2 = loginUserInfo) === null || _loginUserInfo2 === void 0 ? void 0 : _loginUserInfo2.power) === USER_POWER.SYSTEM && userPower !== USER_POWER.SYSTEM && // 白名单接口不做校验
                        !systemWhiteList.includes(req.url)) {
                            addBehavior(req, {
                                module: "interceptor",
                                msg: "系统账号,越权操作 path:".concat(req.url, " "),
                                data: {
                                    url: req.url
                                }
                            });
                            res.failWithError(publicError.request.notLogin);
                            return [
                                2
                            ];
                        }
                        if (!loginUserInfo) {
                            res.failWithError(publicError.request.notLogin);
                            return [
                                2
                            ];
                        }
                        req.userInfo = loginUserInfo;
                        if (((_loginUserInfo3 = loginUserInfo) === null || _loginUserInfo3 === void 0 ? void 0 : _loginUserInfo3.power) !== USER_POWER.SYSTEM) {
                            tokenUtil_default.checkOnlineUser(loginUserInfo.account, loginUserInfo, req.headers.token);
                        }
                    }
                    return [
                        2
                    ];
            }
        });
    });
    return function(req, res) {
        return _ref.apply(this, arguments);
    };
}(), "interceptor");
var routeInterceptor_default = interceptor;
// src/middleware/serverInterceptor.ts
var import_formidable2 = __toESM(require("formidable"));
var import_fs = require("fs");
init_constants();
var allowOrigins = [
    "http://localhost:8080",
    "https://ep2.sugarat.top",
    "https://ep2.dev.sugarat.top"
];
if (!(0, import_fs.existsSync)(uploadFileDir)) {
    (0, import_fs.mkdirSync)(uploadFileDir);
}
var interceptor2 = /* @__PURE__ */ __name(function() {
    var _ref = _async_to_generator(function(req, res) {
        var _req_url, _req_url1, _req_url2, method, _ref, filesTempDir2, form, p, error, form1, p1, error1, _, _tmp, _tmp1;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    method = req.method;
                    req.startTime = Date.now();
                    if ((_req_url = req.url) === null || _req_url === void 0 ? void 0 : _req_url.includes("/file/download/")) {
                        console.log("=== 中间件收到下载请求 ===");
                        console.log("URL:", req.url);
                        console.log("Method:", method);
                    }
                    if (allowOrigins.includes(req.headers.origin)) {}
                    if (((_req_url1 = req.url) === null || _req_url1 === void 0 ? void 0 : _req_url1.includes("/file/upload")) || ((_req_url2 = req.url) === null || _req_url2 === void 0 ? void 0 : _req_url2.includes("/file/download/"))) {} else {
                        res.setHeader("Content-Type", "application/json;charset=utf-8");
                    }
                    if (method === "OPTIONS") {
                        res.statusCode = 204;
                        res.setHeader("Access-Control-Allow-Origin", "*");
                        res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
                        res.setHeader("Access-Control-Allow-Headers", "*");
                        res.setHeader("Access-Control-Allow-Credentials", "true");
                        res.end();
                        return [
                            2
                        ];
                    }
                    if (!(req.url === "/file/upload" && method === "POST")) return [
                        3,
                        6
                    ];
                    console.log("=== 中间件拦截文件上传请求 ===");
                    return [
                        4,
                        Promise.resolve().then(function() {
                            return init_constants(), constants_exports;
                        })
                    ];
                case 1:
                    _ref = _state.sent(), filesTempDir2 = _ref.filesTempDir;
                    form = (0, import_formidable2.default)({
                        multiples: false,
                        keepExtensions: true,
                        maxFileSize: 1024 * 1024 * 1024 * 5,
                        uploadDir: filesTempDir2
                    });
                    p = new Promise(function(resolve, reject) {
                        form.parse(req, function() {
                            var _ref = _async_to_generator(function(err, fields, files) {
                                var file, key, _ref, keyToLocalPath2, ensureDir2, getFileInfo2, getThumbnailPath2, getPreviewPath2, fs7, path9, sharp2, localPath, info, thumbnailPath, previewPath, error, fs8, e, result, error1;
                                return _ts_generator(this, function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            if (err) {
                                                console.error("文件上传解析错误:", err);
                                                res.writeHead(500, {
                                                    "Content-Type": "application/json"
                                                });
                                                res.end(JSON.stringify({
                                                    code: 500,
                                                    msg: "文件上传失败: ".concat(err.message)
                                                }));
                                                reject(err);
                                                return [
                                                    2
                                                ];
                                            }
                                            file = Array.isArray(files.file) ? files.file[0] : files.file;
                                            if (!file) {
                                                console.error("未找到上传文件, files:", files);
                                                res.writeHead(400, {
                                                    "Content-Type": "application/json"
                                                });
                                                res.end(JSON.stringify({
                                                    code: 400,
                                                    msg: "未找到上传文件"
                                                }));
                                                reject(new Error("未找到上传文件"));
                                                return [
                                                    2
                                                ];
                                            }
                                            _state.label = 1;
                                        case 1:
                                            _state.trys.push([
                                                1,
                                                14,
                                                ,
                                                15
                                            ]);
                                            key = Array.isArray(fields.key) ? fields.key[0] : fields.key;
                                            if (!key || typeof key !== "string") {
                                                console.error("缺少文件 key 参数, fields:", fields);
                                                res.writeHead(400, {
                                                    "Content-Type": "application/json"
                                                });
                                                res.end(JSON.stringify({
                                                    code: 400,
                                                    msg: "缺少文件 key 参数"
                                                }));
                                                reject(new Error("缺少文件 key 参数"));
                                                return [
                                                    2
                                                ];
                                            }
                                            console.log("开始保存文件, key:", key, "filepath:", file.filepath, "size:", file.size);
                                            return [
                                                4,
                                                Promise.resolve().then(function() {
                                                    return init_localFileUtil(), localFileUtil_exports;
                                                })
                                            ];
                                        case 2:
                                            _ref = _state.sent(), keyToLocalPath2 = _ref.keyToLocalPath, ensureDir2 = _ref.ensureDir, getFileInfo2 = _ref.getFileInfo, getThumbnailPath2 = _ref.getThumbnailPath, getPreviewPath2 = _ref.getPreviewPath;
                                            return [
                                                4,
                                                import("fs")
                                            ];
                                        case 3:
                                            fs7 = _state.sent();
                                            return [
                                                4,
                                                import("path")
                                            ];
                                        case 4:
                                            path9 = _state.sent();
                                            return [
                                                4,
                                                import("sharp")
                                            ];
                                        case 5:
                                            sharp2 = _state.sent();
                                            localPath = keyToLocalPath2(key);
                                            ensureDir2(path9.dirname(localPath));
                                            if (!fs7.existsSync(file.filepath)) {
                                                console.error("源文件不存在:", file.filepath);
                                                res.writeHead(500, {
                                                    "Content-Type": "application/json"
                                                });
                                                res.end(JSON.stringify({
                                                    code: 500,
                                                    msg: "源文件不存在"
                                                }));
                                                reject(new Error("源文件不存在"));
                                                return [
                                                    2
                                                ];
                                            }
                                            fs7.copyFileSync(file.filepath, localPath);
                                            if (!fs7.existsSync(localPath)) {
                                                console.error("文件保存后验证失败:", localPath);
                                                res.writeHead(500, {
                                                    "Content-Type": "application/json"
                                                });
                                                res.end(JSON.stringify({
                                                    code: 500,
                                                    msg: "文件保存失败"
                                                }));
                                                reject(new Error("文件保存失败"));
                                                return [
                                                    2
                                                ];
                                            }
                                            console.log("文件保存成功, key:", key, "size:", fs7.statSync(localPath).size);
                                            info = getFileInfo2(localPath);
                                            if (!(info && info.mimeType.includes("image"))) return [
                                                3,
                                                10
                                            ];
                                            _state.label = 6;
                                        case 6:
                                            _state.trys.push([
                                                6,
                                                9,
                                                ,
                                                10
                                            ]);
                                            thumbnailPath = getThumbnailPath2(key);
                                            ensureDir2(path9.dirname(thumbnailPath));
                                            return [
                                                4,
                                                sharp2.default(localPath).resize(200, 200, {
                                                    fit: "cover",
                                                    position: "center"
                                                }).jpeg({
                                                    quality: 80
                                                }).toFile(thumbnailPath)
                                            ];
                                        case 7:
                                            _state.sent();
                                            previewPath = getPreviewPath2(key);
                                            ensureDir2(path9.dirname(previewPath));
                                            return [
                                                4,
                                                sharp2.default(localPath).resize(1200, 1200, {
                                                    fit: "inside",
                                                    withoutEnlargement: true
                                                }).jpeg({
                                                    quality: 85
                                                }).toFile(previewPath)
                                            ];
                                        case 8:
                                            _state.sent();
                                            return [
                                                3,
                                                10
                                            ];
                                        case 9:
                                            error = _state.sent();
                                            console.error("生成图片缩略图失败:", error);
                                            return [
                                                3,
                                                10
                                            ];
                                        case 10:
                                            _state.trys.push([
                                                10,
                                                12,
                                                ,
                                                13
                                            ]);
                                            return [
                                                4,
                                                import("fs")
                                            ];
                                        case 11:
                                            fs8 = _state.sent();
                                            fs8.unlinkSync(file.filepath);
                                            return [
                                                3,
                                                13
                                            ];
                                        case 12:
                                            e = _state.sent();
                                            return [
                                                3,
                                                13
                                            ];
                                        case 13:
                                            result = {
                                                code: 0,
                                                data: {
                                                    key: key,
                                                    hash: "",
                                                    fsize: file.size
                                                },
                                                msg: "ok"
                                            };
                                            console.log("返回响应:", JSON.stringify(result));
                                            res.writeHead(200, {
                                                "Content-Type": "application/json"
                                            });
                                            res.end(JSON.stringify(result));
                                            resolve(result);
                                            return [
                                                3,
                                                15
                                            ];
                                        case 14:
                                            error1 = _state.sent();
                                            console.error("文件上传异常:", error1);
                                            res.writeHead(500, {
                                                "Content-Type": "application/json"
                                            });
                                            res.end(JSON.stringify({
                                                code: 500,
                                                msg: "文件上传失败: ".concat(error1)
                                            }));
                                            reject(error1);
                                            return [
                                                3,
                                                15
                                            ];
                                        case 15:
                                            return [
                                                2
                                            ];
                                    }
                                });
                            });
                            return function(err, fields, files) {
                                return _ref.apply(this, arguments);
                            };
                        }());
                        form.on("error", function(err) {
                            console.error("formidable 错误:", err);
                            res.writeHead(500, {
                                "Content-Type": "application/json"
                            });
                            res.end(JSON.stringify({
                                code: 500,
                                msg: "文件上传失败: ".concat(err.message)
                            }));
                            reject(err);
                        });
                    });
                    _state.label = 2;
                case 2:
                    _state.trys.push([
                        2,
                        4,
                        ,
                        5
                    ]);
                    return [
                        4,
                        p
                    ];
                case 3:
                    _state.sent();
                    return [
                        3,
                        5
                    ];
                case 4:
                    error = _state.sent();
                    return [
                        3,
                        5
                    ];
                case 5:
                    return [
                        2
                    ];
                case 6:
                    if (!(req.url === "/public/upload")) return [
                        3,
                        10
                    ];
                    form1 = (0, import_formidable2.default)({
                        multiples: true,
                        uploadDir: uploadFileDir,
                        keepExtensions: true
                    });
                    p1 = new Promise(function(resolve, reject) {
                        form1.parse(req, function(err, fields, files) {
                            if (err) {
                                reject(err);
                            }
                            res.writeHead(200, {
                                "Content-Type": "application/json"
                            });
                            var data = {
                                name: files.file.newFilename,
                                size: files.file.size,
                                type: files.file.mimetype
                            };
                            res.end(JSON.stringify({
                                code: 0,
                                data: data,
                                msg: "ok"
                            }, null, 2));
                            resolve("ok");
                        });
                    });
                    _state.label = 7;
                case 7:
                    _state.trys.push([
                        7,
                        9,
                        ,
                        10
                    ]);
                    return [
                        4,
                        p1
                    ];
                case 8:
                    _state.sent();
                    return [
                        3,
                        10
                    ];
                case 9:
                    error1 = _state.sent();
                    res.end(JSON.stringify({
                        code: 500,
                        msg: error1
                    }));
                    return [
                        3,
                        10
                    ];
                case 10:
                    Object.defineProperty(req, "_ip", {
                        value: getClientIp(req)
                    });
                    _ = Object.defineProperty;
                    _tmp = [
                        req,
                        "_userinfo"
                    ];
                    _tmp1 = {};
                    return [
                        4,
                        getUserInfo(req)
                    ];
                case 11:
                    _.apply(Object, _tmp.concat([
                        (_tmp1.value = _state.sent(), _tmp1)
                    ]));
                    return [
                        2
                    ];
            }
        });
    });
    return function(req, res) {
        return _ref.apply(this, arguments);
    };
}(), "interceptor");
var serverInterceptor_default = interceptor2;
// src/middleware/beforeRouterInterceptor.ts
var interceptor3 = /* @__PURE__ */ __name(function() {
    var _ref = _async_to_generator(function(req, res) {
        return _ts_generator(this, function(_state) {
            if (req._handled) {
                req.route = null;
                return [
                    2
                ];
            }
            addRequestLog(req, res);
            return [
                2
            ];
        });
    });
    return function(req, res) {
        return _ref.apply(this, arguments);
    };
}(), "interceptor");
var beforeRouterInterceptor_default = interceptor3;
// src/middleware/beforeRuntimeErrorInterceptor.ts
var interceptor4 = /* @__PURE__ */ __name(function() {
    var _ref = _async_to_generator(function(req, res, err) {
        return _ts_generator(this, function(_state) {
            if (res.headersSent) {
                console.log("响应头已发送，忽略错误处理");
                return [
                    2
                ];
            }
            if (req._handled) {
                return [
                    2
                ];
            }
            addErrorLog(req, err.toString(), err.stack);
            return [
                2
            ];
        });
    });
    return function(req, res, err) {
        return _ref.apply(this, arguments);
    };
}(), "interceptor");
var beforeRuntimeErrorInterceptor_default = interceptor4;
// src/index.ts
console.time("server-start");
var app = new import_flash_wolves35.App(serverInterceptor_default, {
    beforeMathRoute: beforeRouterInterceptor_default,
    beforeRunRoute: routeInterceptor_default,
    beforeReturnRuntimeError: beforeRuntimeErrorInterceptor_default
});
app.addRoutes(routes_default);
app.addController(controllers_default);
app.listen(serverConfig.port, serverConfig.hostname, /*#__PURE__*/ _async_to_generator(function() {
    var err, _err, err1;
    return _ts_generator(this, function(_state) {
        switch(_state.label){
            case 0:
                console.log("-----", /* @__PURE__ */ new Date().toLocaleString(), "-----");
                console.timeEnd("server-start");
                return [
                    4,
                    LocalUserDB.initUserConfig()
                ];
            case 1:
                _state.sent();
                return [
                    4,
                    initUserConfig()
                ];
            case 2:
                _state.sent();
                _state.label = 3;
            case 3:
                _state.trys.push([
                    3,
                    5,
                    ,
                    6
                ]);
                return [
                    4,
                    readyServerDepService()
                ];
            case 4:
                _state.sent();
                return [
                    3,
                    6
                ];
            case 5:
                err = _state.sent();
                console.log("❌ readyServerDepService", (_err = err) === null || _err === void 0 ? void 0 : _err.message);
                return [
                    3,
                    6
                ];
            case 6:
                _state.trys.push([
                    6,
                    8,
                    ,
                    9
                ]);
                return [
                    4,
                    patchTable()
                ];
            case 7:
                _state.sent();
                console.log("\uD83D\uDE04\uD83D\uDE04 mysql patch success");
                return [
                    3,
                    9
                ];
            case 8:
                err1 = _state.sent();
                console.log("\uD83D\uDE2D\uD83D\uDE2D mysql 还未正常配置，请检查数据库是否配置正确或版本不匹配");
                return [
                    3,
                    9
                ];
            case 9:
                return [
                    2
                ];
        }
    });
}));
//# sourceMappingURL=index.js.map