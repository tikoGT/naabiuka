"use strict";
var _createClass = (function () {
    function e(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
    }
    return function (t, i, n) {
        return i && e(t.prototype, i), n && e(t, n), t;
    };
})();
function _possibleConstructorReturn(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
}
function _inherits(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
var Emitter = (function () {
        function e() {
            _classCallCheck(this, e);
        }
        return (
            _createClass(e, [
                {
                    key: "on",
                    value: function (e, t) {
                        return (this._callbacks = this._callbacks || {}), this._callbacks[e] || (this._callbacks[e] = []), this._callbacks[e].push(t), this;
                    },
                },
                {
                    key: "emit",
                    value: function (e) {
                        this._callbacks = this._callbacks || {};
                        var t = this._callbacks[e];
                        if (t) {
                            for (var i = arguments.length, n = Array(i > 1 ? i - 1 : 0), r = 1; r < i; r++) n[r - 1] = arguments[r];
                            for (var o = 0, a = (a = t); ; ) {
                                if (o >= a.length) break;
                                a[o++].apply(this, n);
                            }
                        }
                        return this;
                    },
                },
                {
                    key: "off",
                    value: function (e, t) {
                        if (!this._callbacks || 0 === arguments.length) return (this._callbacks = {}), this;
                        var i = this._callbacks[e];
                        if (!i) return this;
                        if (1 === arguments.length) return delete this._callbacks[e], this;
                        for (var n = 0; n < i.length; n++) {
                            if (i[n] === t) {
                                i.splice(n, 1);
                                break;
                            }
                        }
                        return this;
                    },
                },
            ]),
            e
        );
    })(),
    Dropzone = (function (e) {
        function t(e, i) {
            _classCallCheck(this, t);
            var n,
                r = _possibleConstructorReturn(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this)),
                o = void 0;
            if (
                ((r.element = e),
                (r.version = t.version),
                (r.defaultOptions.previewTemplate = r.defaultOptions.previewTemplate.replace(/\n*/g, "")),
                (r.clickableElements = []),
                (r.listeners = []),
                (r.files = []),
                "string" == typeof r.element && (r.element = document.querySelector(r.element)),
                !r.element || null == r.element.nodeType)
            )
                throw new Error("Invalid dropzone element.");
            if (r.element.dropzone) throw new Error("Dropzone already attached.");
            t.instances.push(r), (r.element.dropzone = r);
            var a,
                s = null != (n = t.optionsForElement(r.element)) ? n : {};
            if (((r.options = t.extend({}, r.defaultOptions, s, null != i ? i : {})), r.options.forceFallback || !t.isBrowserSupported())) return (a = r.options.fallback.call(r)), _possibleConstructorReturn(r, a);
            if ((null == r.options.url && (r.options.url = r.element.getAttribute("action")), !r.options.url)) throw new Error("No URL provided.");
            if (r.options.acceptedFiles && r.options.acceptedMimeTypes) throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");
            if (r.options.uploadMultiple && r.options.chunking) throw new Error("You cannot set both: uploadMultiple and chunking.");
            return (
                r.options.acceptedMimeTypes && ((r.options.acceptedFiles = r.options.acceptedMimeTypes), delete r.options.acceptedMimeTypes),
                null != r.options.renameFilename &&
                    (r.options.renameFile = function (e) {
                        return r.options.renameFilename.call(r, e.name, e);
                    }),
                (r.options.method = r.options.method.toUpperCase()),
                (o = r.getExistingFallback()) && o.parentNode && o.parentNode.removeChild(o),
                !1 !== r.options.previewsContainer && (r.options.previewsContainer ? (r.previewsContainer = t.getElement(r.options.previewsContainer, "previewsContainer")) : (r.previewsContainer = r.element)),
                r.options.clickable && (!0 === r.options.clickable ? (r.clickableElements = [r.element]) : (r.clickableElements = t.getElements(r.options.clickable, "clickable"))),
                r.init(),
                r
            );
        }
        return (
            _inherits(t, Emitter),
            _createClass(t, null, [
                {
                    key: "initClass",
                    value: function () {
                        (this.prototype.Emitter = Emitter),
                            (this.prototype.events = [
                                "drop",
                                "dragstart",
                                "dragend",
                                "dragenter",
                                "dragover",
                                "dragleave",
                                "addedfile",
                                "addedfiles",
                                "removedfile",
                                "thumbnail",
                                "error",
                                "errormultiple",
                                "processing",
                                "processingmultiple",
                                "uploadprogress",
                                "totaluploadprogress",
                                "sending",
                                "sendingmultiple",
                                "success",
                                "successmultiple",
                                "canceled",
                                "canceledmultiple",
                                "complete",
                                "completemultiple",
                                "reset",
                                "maxfilesexceeded",
                                "maxfilesreached",
                                "queuecomplete",
                            ]),
                            (this.prototype.defaultOptions = {
                                url: null,
                                method: "post",
                                withCredentials: !1,
                                timeout: 3e4,
                                parallelUploads: 2,
                                uploadMultiple: !1,
                                chunking: !1,
                                forceChunking: !1,
                                chunkSize: 2e6,
                                parallelChunkUploads: !1,
                                retryChunks: !1,
                                retryChunksLimit: 3,
                                maxFilesize: maxFileSize, // default 256
                                paramName: "file",
                                createImageThumbnails: !0,
                                maxThumbnailFilesize: 10,
                                thumbnailWidth: 120,
                                thumbnailHeight: 120,
                                thumbnailMethod: "crop",
                                resizeWidth: null,
                                resizeHeight: null,
                                resizeMimeType: null,
                                resizeQuality: 0.8,
                                resizeMethod: "contain",
                                filesizeBase: 1e3,
                                maxFiles: null,
                                headers: null,
                                clickable: !0,
                                ignoreHiddenFiles: !0,
                                acceptedFiles: acceptedFiles, //defaulr null
                                acceptedMimeTypes: null,
                                autoProcessQueue: !0,
                                autoQueue: !0,
                                addRemoveLinks: !1,
                                previewsContainer: null,
                                hiddenInputContainer: "body",
                                capture: null,
                                renameFilename: null,
                                renameFile: null,
                                forceFallback: !1,
                                dictDefaultMessage: "Drop files here to upload",
                                dictFallbackMessage: "Your browser does not support drag'n'drop file uploads.",
                                dictFallbackText: "Please use the fallback form below to upload your files like in the olden days.",
                                dictFileTooBig: "File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",
                                dictInvalidFileType: "You can't upload files of this type.",
                                dictResponseError: "Server responded with {{statusCode}} code.",
                                dictCancelUpload: "Cancel upload",
                                dictUploadCanceled: "Upload canceled.",
                                dictCancelUploadConfirmation: "Are you sure you want to cancel this upload?",
                                dictRemoveFile: "Remove file",
                                dictRemoveFileConfirmation: null,
                                dictMaxFilesExceeded: "You can not upload any more files.",
                                dictFileSizeUnits: { tb: "TB", gb: "GB", mb: "MB", kb: "KB", b: "b" },
                                init: function () {},
                                params: function (e, t, i) {
                                    if (i)
                                        return {
                                            dzuuid: i.file.upload.uuid,
                                            dzchunkindex: i.index,
                                            dztotalfilesize: i.file.size,
                                            dzchunksize: this.options.chunkSize,
                                            dztotalchunkcount: i.file.upload.totalChunkCount,
                                            dzchunkbyteoffset: i.index * this.options.chunkSize,
                                        };
                                },
                                accept: function (e, t) {
                                    return t();
                                },
                                chunksUploaded: function (e, t) {
                                    t();
                                },
                                fallback: function () {
                                    var e = void 0;
                                    this.element.className = this.element.className + " dz-browser-not-supported";
                                    for (var i = 0, n = (n = this.element.getElementsByTagName("div")); ; ) {
                                        if (i >= n.length) break;
                                        var r = n[i++];
                                        if (/(^| )dz-message($| )/.test(r.className)) {
                                            (e = r), (r.className = "dz-message");
                                            break;
                                        }
                                    }
                                    e || ((e = t.createElement('<div class="dz-message"><span></span></div>')), this.element.appendChild(e));
                                    var o = e.getElementsByTagName("span")[0];
                                    return (
                                        o && (null != o.textContent ? (o.textContent = this.options.dictFallbackMessage) : null != o.innerText && (o.innerText = this.options.dictFallbackMessage)),
                                        this.element.appendChild(this.getFallbackForm())
                                    );
                                },
                                resize: function (e, t, i, n) {
                                    var r = { srcX: 0, srcY: 0, srcWidth: e.width, srcHeight: e.height },
                                        o = e.width / e.height;
                                    null == t && null == i ? ((t = r.srcWidth), (i = r.srcHeight)) : null == t ? (t = i * o) : null == i && (i = t / o);
                                    var a = (t = Math.min(t, r.srcWidth)) / (i = Math.min(i, r.srcHeight));
                                    if (r.srcWidth > t || r.srcHeight > i)
                                        if ("crop" === n) o > a ? ((r.srcHeight = e.height), (r.srcWidth = r.srcHeight * a)) : ((r.srcWidth = e.width), (r.srcHeight = r.srcWidth / a));
                                        else {
                                            if ("contain" !== n) throw new Error("Unknown resizeMethod '" + n + "'");
                                            o > a ? (i = t / o) : (t = i * o);
                                        }
                                    return (r.srcX = (e.width - r.srcWidth) / 2), (r.srcY = (e.height - r.srcHeight) / 2), (r.trgWidth = t), (r.trgHeight = i), r;
                                },
                                transformFile: function (e, t) {
                                    return (this.options.resizeWidth || this.options.resizeHeight) && e.type.match(/image.*/) ? this.resizeImage(e, this.options.resizeWidth, this.options.resizeHeight, this.options.resizeMethod, t) : t(e);
                                },
                                previewTemplate:
                                    '<div class="dz-preview dz-file-preview">\n  <div class="dz-image"><img data-dz-thumbnail /></div>\n  <div class="dz-details">\n    <div class="dz-size"><span data-dz-size></span></div>\n    <div class="dz-filename"><span data-dz-name></span></div>\n  </div>\n  <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>\n  <div class="dz-error-message"><span data-dz-errormessage></span></div>\n  <div class="dz-success-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Check</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <path d="M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" stroke-opacity="0.198794158" stroke="#747474" fill-opacity="0.816519475" fill="#FFFFFF" sketch:type="MSShapeGroup"></path>\n      </g>\n    </svg>\n  </div>\n  <div class="dz-error-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Error</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <g id="Check-+-Oval-2" sketch:type="MSLayerGroup" stroke="#747474" stroke-opacity="0.198794158" fill="#FFFFFF" fill-opacity="0.816519475">\n          <path d="M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" sketch:type="MSShapeGroup"></path>\n        </g>\n      </g>\n    </svg>\n  </div>\n</div>',
                                drop: function (e) {
                                    return this.element.classList.remove("dz-drag-hover");
                                },
                                dragstart: function (e) {},
                                dragend: function (e) {
                                    return this.element.classList.remove("dz-drag-hover");
                                },
                                dragenter: function (e) {
                                    return this.element.classList.add("dz-drag-hover");
                                },
                                dragover: function (e) {
                                    return this.element.classList.add("dz-drag-hover");
                                },
                                dragleave: function (e) {
                                    return this.element.classList.remove("dz-drag-hover");
                                },
                                paste: function (e) {},
                                reset: function () {
                                    return this.element.classList.remove("dz-started");
                                },
                                addedfile: function (e) {
                                    var i = this;
                                    if ((this.element === this.previewsContainer && this.element.classList.add("dz-started"), this.previewsContainer)) {
                                        (e.previewElement = t.createElement(this.options.previewTemplate.trim())), (e.previewTemplate = e.previewElement), this.previewsContainer.appendChild(e.previewElement);
                                        for (var n = 0, r = (r = e.previewElement.querySelectorAll("[data-dz-name]")); ; ) {
                                            if (n >= r.length) break;
                                            var o = r[n++];
                                            o.textContent = e.name;
                                        }
                                        for (var a = 0, s = (s = e.previewElement.querySelectorAll("[data-dz-size]")); !(a >= s.length); ) (o = s[a++]).innerHTML = this.filesize(e.size);
                                        this.options.addRemoveLinks &&
                                            ((e._removeLink = t.createElement('<a class="dz-remove" href="javascript:undefined;" data-dz-remove>' + this.options.dictRemoveFile + "</a>")), e.previewElement.appendChild(e._removeLink));
                                        for (
                                            var l = function (n) {
                                                    return (
                                                        n.preventDefault(),
                                                        n.stopPropagation(),
                                                        e.status === t.UPLOADING
                                                            ? t.confirm(i.options.dictCancelUploadConfirmation, function () {
                                                                  return i.removeFile(e);
                                                              })
                                                            : i.options.dictRemoveFileConfirmation
                                                            ? t.confirm(i.options.dictRemoveFileConfirmation, function () {
                                                                  return i.removeFile(e);
                                                              })
                                                            : i.removeFile(e)
                                                    );
                                                },
                                                u = 0,
                                                d = (d = e.previewElement.querySelectorAll("[data-dz-remove]"));
                                            ;

                                        ) {
                                            if (u >= d.length) break;
                                            d[u++].addEventListener("click", l);
                                        }
                                    }
                                },
                                removedfile: function (e) {
                                    return null != e.previewElement && null != e.previewElement.parentNode && e.previewElement.parentNode.removeChild(e.previewElement), this._updateMaxFilesReachedClass();
                                },
                                thumbnail: function (e, t) {
                                    if (e.previewElement) {
                                        e.previewElement.classList.remove("dz-file-preview");
                                        for (var i = 0, n = (n = e.previewElement.querySelectorAll("[data-dz-thumbnail]")); ; ) {
                                            if (i >= n.length) break;
                                            var r = n[i++];
                                            (r.alt = e.name), (r.src = t);
                                        }
                                        return setTimeout(function () {
                                            return e.previewElement.classList.add("dz-image-preview");
                                        }, 1);
                                    }
                                },
                                error: function (e, t) {
                                    if (e.previewElement) {
                                        e.previewElement.classList.add("dz-error"), "String" != typeof t && t.error && (t = t.error);
                                        for (var i = 0, n = (n = e.previewElement.querySelectorAll("[data-dz-errormessage]")); ; ) {
                                            if (i >= n.length) break;
                                            n[i++].textContent = t;
                                        }
                                    }
                                },
                                errormultiple: function () {},
                                processing: function (e) {
                                    if (e.previewElement && (e.previewElement.classList.add("dz-processing"), e._removeLink)) return (e._removeLink.textContent = this.options.dictCancelUpload);
                                },
                                processingmultiple: function () {},
                                uploadprogress: function (e, t, i) {
                                    if (e.previewElement)
                                        for (var n = 0, r = (r = e.previewElement.querySelectorAll("[data-dz-uploadprogress]")); ; ) {
                                            if (n >= r.length) break;
                                            var o = r[n++];
                                            "PROGRESS" === o.nodeName ? (o.value = t) : (o.style.width = t + "%");
                                        }
                                },
                                totaluploadprogress: function () {},
                                sending: function () {},
                                sendingmultiple: function () {},
                                success: function (e) {
                                    return this.emit("error", e, this.options.dictUploadCanceled);
                                },
                                canceledmultiple: function () {},
                                complete: function (e) {
                                },
                                completemultiple: function () {},
                                queuecomplete: function () {},
                                addedfiles: function () {},
                            }),
                            (this.prototype._thumbnailQueue = []),
                            (this.prototype._processingThumbnail = !1);
                    },
                },
                {
                    key: "extend",
                    value: function (e) {
                        for (var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) i[n - 1] = arguments[n];
                        for (var r = 0, o = (o = i); ; ) {
                            if (r >= o.length) break;
                            var a = o[r++];
                            for (var s in a) {
                                var l = a[s];
                                e[s] = l;
                            }
                        }
                        return e;
                    },
                },
            ]),
            _createClass(
                t,
                [
                    {
                        key: "getAcceptedFiles",
                        value: function () {
                            return this.files
                                .filter(function (e) {
                                    return e.accepted;
                                })
                                .map(function (e) {
                                    return e;
                                });
                        },
                    },
                    {
                        key: "getRejectedFiles",
                        value: function () {
                            return this.files
                                .filter(function (e) {
                                    return !e.accepted;
                                })
                                .map(function (e) {
                                    return e;
                                });
                        },
                    },
                    {
                        key: "getFilesWithStatus",
                        value: function (e) {
                            return this.files
                                .filter(function (t) {
                                    return t.status === e;
                                })
                                .map(function (e) {
                                    return e;
                                });
                        },
                    },
                    {
                        key: "getQueuedFiles",
                        value: function () {
                            return this.getFilesWithStatus(t.QUEUED);
                        },
                    },
                    {
                        key: "getUploadingFiles",
                        value: function () {
                            return this.getFilesWithStatus(t.UPLOADING);
                        },
                    },
                    {
                        key: "getAddedFiles",
                        value: function () {
                            return this.getFilesWithStatus(t.ADDED);
                        },
                    },
                    {
                        key: "getActiveFiles",
                        value: function () {
                            return this.files
                                .filter(function (e) {
                                    return e.status === t.UPLOADING || e.status === t.QUEUED;
                                })
                                .map(function (e) {
                                    return e;
                                });
                        },
                    },
                    {
                        key: "init",
                        value: function () {
                            var e = this;
                            if (
                                ("form" === this.element.tagName && this.element.setAttribute("enctype", "multipart/form-data"),
                                this.element.classList.contains("dropzone") &&
                                    !this.element.querySelector(".dz-message") &&
                                    this.element.appendChild(t.createElement('<div class="dz-default dz-message"><span>' + this.options.dictDefaultMessage + "</span></div>")),
                                this.clickableElements.length)
                            ) {
                                !(function t() {
                                    return (
                                        e.hiddenFileInput && e.hiddenFileInput.parentNode.removeChild(e.hiddenFileInput),
                                        (e.hiddenFileInput = document.createElement("input")),
                                        e.hiddenFileInput.setAttribute("type", "file"),
                                        (null === e.options.maxFiles || e.options.maxFiles > 1) && e.hiddenFileInput.setAttribute("multiple", "multiple"),
                                        (e.hiddenFileInput.className = "dz-hidden-input"),
                                        null !== e.options.acceptedFiles && e.hiddenFileInput.setAttribute("accept", e.options.acceptedFiles),
                                        null !== e.options.capture && e.hiddenFileInput.setAttribute("capture", e.options.capture),
                                        (e.hiddenFileInput.style.visibility = "hidden"),
                                        (e.hiddenFileInput.style.position = "absolute"),
                                        (e.hiddenFileInput.style.top = "0"),
                                        (e.hiddenFileInput.style.left = "0"),
                                        (e.hiddenFileInput.style.height = "0"),
                                        (e.hiddenFileInput.style.width = "0"),
                                        document.querySelector(e.options.hiddenInputContainer).appendChild(e.hiddenFileInput),
                                        e.hiddenFileInput.addEventListener("change", function () {
                                            var i = e.hiddenFileInput.files;
                                            if (i.length)
                                                for (var n = 0, r = (r = i); !(n >= r.length); ) {
                                                    var o = r[n++];
                                                    e.addFile(o);
                                                }
                                            return e.emit("addedfiles", i), t();
                                        })
                                    );
                                })();
                            }
                            this.URL = null !== window.URL ? window.URL : window.webkitURL;
                            for (var i = 0, n = (n = this.events); ; ) {
                                if (i >= n.length) break;
                                var r = n[i++];
                                this.on(r, this.options[r]);
                            }
                            this.on("uploadprogress", function () {
                                return e.updateTotalUploadProgress();
                            }),
                                this.on("removedfile", function () {
                                    return e.updateTotalUploadProgress();
                                }),
                                this.on("canceled", function (t) {
                                    return e.emit("complete", t);
                                }),
                                this.on("complete", function (t) {
                                    if (0 === e.getAddedFiles().length && 0 === e.getUploadingFiles().length && 0 === e.getQueuedFiles().length)
                                        return setTimeout(function () {
                                            return e.emit("queuecomplete");
                                        }, 0);
                                });
                            var o = function (e) {
                                return e.stopPropagation(), e.preventDefault ? e.preventDefault() : (e.returnValue = !1);
                            };
                            return (
                                (this.listeners = [
                                    {
                                        element: this.element,
                                        events: {
                                            dragstart: function (t) {
                                                return e.emit("dragstart", t);
                                            },
                                            dragenter: function (t) {
                                                return o(t), e.emit("dragenter", t);
                                            },
                                            dragover: function (t) {
                                                var i = void 0;
                                                try {
                                                    i = t.dataTransfer.effectAllowed;
                                                } catch (e) {}
                                                return (t.dataTransfer.dropEffect = "move" === i || "linkMove" === i ? "move" : "copy"), o(t), e.emit("dragover", t);
                                            },
                                            dragleave: function (t) {
                                                return e.emit("dragleave", t);
                                            },
                                            drop: function (t) {
                                                return o(t), e.drop(t);
                                            },
                                            dragend: function (t) {
                                                return e.emit("dragend", t);
                                            },
                                        },
                                    },
                                ]),
                                this.clickableElements.forEach(function (i) {
                                    return e.listeners.push({
                                        element: i,
                                        events: {
                                            click: function (n) {
                                                return (i !== e.element || n.target === e.element || t.elementInside(n.target, e.element.querySelector(".dz-message"))) && e.hiddenFileInput.click(), !0;
                                            },
                                        },
                                    });
                                }),
                                this.enable(),
                                this.options.init.call(this)
                            );
                        },
                    },
                    {
                        key: "destroy",
                        value: function () {
                            return (
                                this.disable(),
                                this.removeAllFiles(!0),
                                (null != this.hiddenFileInput ? this.hiddenFileInput.parentNode : void 0) && (this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput), (this.hiddenFileInput = null)),
                                delete this.element.dropzone,
                                t.instances.splice(t.instances.indexOf(this), 1)
                            );
                        },
                    },
                    {
                        key: "updateTotalUploadProgress",
                        value: function () {
                            var e = void 0,
                                t = 0,
                                i = 0;
                            if (this.getActiveFiles().length) {
                                for (var n = 0, r = (r = this.getActiveFiles()); ; ) {
                                    if (n >= r.length) break;
                                    var o = r[n++];
                                    (t += o.upload.bytesSent), (i += o.upload.total);
                                }
                                e = (100 * t) / i;
                            } else e = 100;
                            return this.emit("totaluploadprogress", e, i, t);
                        },
                    },
                    {
                        key: "_getParamName",
                        value: function (e) {
                            return "function" == typeof this.options.paramName ? this.options.paramName(e) : this.options.paramName + (this.options.uploadMultiple ? "[" + e + "]" : "");
                        },
                    },
                    {
                        key: "_renameFile",
                        value: function (e) {
                            return "function" != typeof this.options.renameFile ? e.name : this.options.renameFile(e);
                        },
                    },
                    {
                        key: "getFallbackForm",
                        value: function () {
                            var e,
                                i = void 0;
                            if ((e = this.getExistingFallback())) return e;
                            var n = '<div class="dz-fallback">';
                            this.options.dictFallbackText && (n += "<p>" + this.options.dictFallbackText + "</p>"),
                                (n += '<input type="file" name="' + this._getParamName(0) + '" ' + (this.options.uploadMultiple ? 'multiple="multiple"' : void 0) + ' /><input type="submit" value="Upload!"></div>');
                            var r = t.createElement(n);
                            return (
                                "FORM" !== this.element.tagName
                                    ? (i = t.createElement('<form action="' + this.options.url + '" enctype="multipart/form-data" method="' + this.options.method + '"></form>')).appendChild(r)
                                    : (this.element.setAttribute("enctype", "multipart/form-data"), this.element.setAttribute("method", this.options.method)),
                                null != i ? i : r
                            );
                        },
                    },
                    {
                        key: "getExistingFallback",
                        value: function () {
                            for (
                                var e = function (e) {
                                        for (var t = 0, i = (i = e); ; ) {
                                            if (t >= i.length) break;
                                            var n = i[t++];
                                            if (/(^| )fallback($| )/.test(n.className)) return n;
                                        }
                                    },
                                    t = ["div", "form"],
                                    i = 0;
                                i < t.length;
                                i++
                            ) {
                                var n,
                                    r = t[i];
                                if ((n = e(this.element.getElementsByTagName(r)))) return n;
                            }
                        },
                    },
                    {
                        key: "setupEventListeners",
                        value: function () {
                            return this.listeners.map(function (e) {
                                return (function () {
                                    var t = [];
                                    for (var i in e.events) {
                                        var n = e.events[i];
                                        t.push(e.element.addEventListener(i, n, !1));
                                    }
                                    return t;
                                })();
                            });
                        },
                    },
                    {
                        key: "removeEventListeners",
                        value: function () {
                            return this.listeners.map(function (e) {
                                return (function () {
                                    var t = [];
                                    for (var i in e.events) {
                                        var n = e.events[i];
                                        t.push(e.element.removeEventListener(i, n, !1));
                                    }
                                    return t;
                                })();
                            });
                        },
                    },
                    {
                        key: "disable",
                        value: function () {
                            var e = this;
                            return (
                                this.clickableElements.forEach(function (e) {
                                    return e.classList.remove("dz-clickable");
                                }),
                                this.removeEventListeners(),
                                (this.disabled = !0),
                                this.files.map(function (t) {
                                    return e.cancelUpload(t);
                                })
                            );
                        },
                    },
                    {
                        key: "enable",
                        value: function () {
                            return (
                                delete this.disabled,
                                this.clickableElements.forEach(function (e) {
                                    return e.classList.add("dz-clickable");
                                }),
                                this.setupEventListeners()
                            );
                        },
                    },
                    {
                        key: "filesize",
                        value: function (e) {
                            var t = 0,
                                i = "b";
                            if (e > 0) {
                                for (var n = ["tb", "gb", "mb", "kb", "b"], r = 0; r < n.length; r++) {
                                    var o = n[r];
                                    if (e >= Math.pow(this.options.filesizeBase, 4 - r) / 10) {
                                        (t = e / Math.pow(this.options.filesizeBase, 4 - r)), (i = o);
                                        break;
                                    }
                                }
                                t = Math.round(10 * t) / 10;
                            }
                            return "<strong>" + t + "</strong> " + this.options.dictFileSizeUnits[i];
                        },
                    },
                    {
                        key: "_updateMaxFilesReachedClass",
                        value: function () {
                            return null != this.options.maxFiles && this.getAcceptedFiles().length >= this.options.maxFiles
                                ? (this.getAcceptedFiles().length === this.options.maxFiles && this.emit("maxfilesreached", this.files), this.element.classList.add("dz-max-files-reached"))
                                : this.element.classList.remove("dz-max-files-reached");
                        },
                    },
                    {
                        key: "drop",
                        value: function (e) {
                            if (e.dataTransfer) {
                                this.emit("drop", e);
                                for (var t = [], i = 0; i < e.dataTransfer.files.length; i++) t[i] = e.dataTransfer.files[i];
                                if ((this.emit("addedfiles", t), t.length)) {
                                    var n = e.dataTransfer.items;
                                    n && n.length && null != n[0].webkitGetAsEntry ? this._addFilesFromItems(n) : this.handleFiles(t);
                                }
                            }
                        },
                    },
                    {
                        key: "paste",
                        value: function (e) {
                            if (
                                null !=
                                __guard__(null != e ? e.clipboardData : void 0, function (e) {
                                    return e.items;
                                })
                            ) {
                                this.emit("paste", e);
                                var t = e.clipboardData.items;
                                return t.length ? this._addFilesFromItems(t) : void 0;
                            }
                        },
                    },
                    {
                        key: "handleFiles",
                        value: function (e) {
                            for (var t = 0, i = (i = e); ; ) {
                                if (t >= i.length) break;
                                var n = i[t++];
                                this.addFile(n);
                            }
                        },
                    },
                    {
                        key: "_addFilesFromItems",
                        value: function (e) {
                            var t = this;
                            return (function () {
                                for (var i = [], n = 0, r = (r = e); ; ) {
                                    if (n >= r.length) break;
                                    var o,
                                        a = r[n++];
                                    null != a.webkitGetAsEntry && (o = a.webkitGetAsEntry())
                                        ? o.isFile
                                            ? i.push(t.addFile(a.getAsFile()))
                                            : o.isDirectory
                                            ? i.push(t._addFilesFromDirectory(o, o.name))
                                            : i.push(void 0)
                                        : null != a.getAsFile && (null == a.kind || "file" === a.kind)
                                        ? i.push(t.addFile(a.getAsFile()))
                                        : i.push(void 0);
                                }
                                return i;
                            })();
                        },
                    },
                    {
                        key: "_addFilesFromDirectory",
                        value: function (e, t) {
                            var i = this,
                                n = e.createReader(),
                                r = function (e) {
                                    return __guardMethod__(console, "log", function (t) {
                                        return t.log(e);
                                    });
                                };
                            return (function e() {
                                return n.readEntries(function (n) {
                                    if (n.length > 0) {
                                        for (var r = 0, o = (o = n); !(r >= o.length); ) {
                                            var a = o[r++];
                                            a.isFile
                                                ? a.file(function (e) {
                                                      if (!i.options.ignoreHiddenFiles || "." !== e.name.substring(0, 1)) return (e.fullPath = t + "/" + e.name), i.addFile(e);
                                                  })
                                                : a.isDirectory && i._addFilesFromDirectory(a, t + "/" + a.name);
                                        }
                                        e();
                                    }
                                    return null;
                                }, r);
                            })();
                        },
                    },
                    {
                        key: "accept",
                        value: function (e, i) {
                            return this.options.maxFilesize && e.size > 1024 * this.options.maxFilesize * 1024
                                ? i(this.options.dictFileTooBig.replace("{{filesize}}", Math.round(e.size / 1024 / 10.24) / 100).replace("{{maxFilesize}}", this.options.maxFilesize))
                                : t.isValidFile(e, this.options.acceptedFiles)
                                ? null != this.options.maxFiles && this.getAcceptedFiles().length >= this.options.maxFiles
                                    ? (i(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}", this.options.maxFiles)), this.emit("maxfilesexceeded", e))
                                    : this.options.accept.call(this, e, i)
                                : i(this.options.dictInvalidFileType);
                        },
                    },
                    {
                        key: "addFile",
                        value: function (e) {
                            var i = this;
                            return (
                                (e.upload = {
                                    uuid: t.uuidv4(),
                                    progress: 0,
                                    total: e.size,
                                    bytesSent: 0,
                                    filename: this._renameFile(e),
                                    chunked: this.options.chunking && (this.options.forceChunking || e.size > this.options.chunkSize),
                                    totalChunkCount: Math.ceil(e.size / this.options.chunkSize),
                                }),
                                this.files.push(e),
                                (e.status = t.ADDED),
                                this.emit("addedfile", e),
                                this._enqueueThumbnail(e),
                                this.accept(e, function (t) {
                                    return t ? ((e.accepted = !1), i._errorProcessing([e], t)) : ((e.accepted = !0), i.options.autoQueue && i.enqueueFile(e)), i._updateMaxFilesReachedClass();
                                })
                            );
                        },
                    },
                    {
                        key: "enqueueFiles",
                        value: function (e) {
                            for (var t = 0, i = (i = e); ; ) {
                                if (t >= i.length) break;
                                var n = i[t++];
                                this.enqueueFile(n);
                            }
                            return null;
                        },
                    },
                    {
                        key: "enqueueFile",
                        value: function (e) {
                            var i = this;
                            if (e.status !== t.ADDED || !0 !== e.accepted) throw new Error("This file can't be queued because it has already been processed or was rejected.");
                            if (((e.status = t.QUEUED), this.options.autoProcessQueue))
                                return setTimeout(function () {
                                    return i.processQueue();
                                }, 0);
                        },
                    },
                    {
                        key: "_enqueueThumbnail",
                        value: function (e) {
                            var t = this;
                            if (this.options.createImageThumbnails && e.type.match(/image.*/) && e.size <= 1024 * this.options.maxThumbnailFilesize * 1024)
                                return (
                                    this._thumbnailQueue.push(e),
                                    setTimeout(function () {
                                        return t._processThumbnailQueue();
                                    }, 0)
                                );
                        },
                    },
                    {
                        key: "_processThumbnailQueue",
                        value: function () {
                            var e = this;
                            if (!this._processingThumbnail && 0 !== this._thumbnailQueue.length) {
                                this._processingThumbnail = !0;
                                var t = this._thumbnailQueue.shift();
                                return this.createThumbnail(t, this.options.thumbnailWidth, this.options.thumbnailHeight, this.options.thumbnailMethod, !0, function (i) {
                                    return e.emit("thumbnail", t, i), (e._processingThumbnail = !1), e._processThumbnailQueue();
                                });
                            }
                        },
                    },
                    {
                        key: "removeFile",
                        value: function (e) {
                            if ((e.status === t.UPLOADING && this.cancelUpload(e), (this.files = without(this.files, e)), this.emit("removedfile", e), 0 === this.files.length)) return this.emit("reset");
                        },
                    },
                    {
                        key: "removeAllFiles",
                        value: function (e) {
                            null == e && (e = !1);
                            for (var i = 0, n = (n = this.files.slice()); ; ) {
                                if (i >= n.length) break;
                                var r = n[i++];
                                (r.status !== t.UPLOADING || e) && this.removeFile(r);
                            }
                            return null;
                        },
                    },
                    {
                        key: "resizeImage",
                        value: function (e, i, n, r, o) {
                            var a = this;
                            return this.createThumbnail(e, i, n, r, !1, function (i, n) {
                                if (null == n) return o(e);
                                var r = a.options.resizeMimeType;
                                null == r && (r = e.type);
                                var s = n.toDataURL(r, a.options.resizeQuality);
                                return ("image/jpeg" !== r && "image/jpg" !== r) || (s = ExifRestore.restore(e.dataURL, s)), o(t.dataURItoBlob(s));
                            });
                        },
                    },
                    {
                        key: "createThumbnail",
                        value: function (e, t, i, n, r, o) {
                            var a = this,
                                s = new FileReader();
                            return (
                                (s.onload = function () {
                                    if (((e.dataURL = s.result), "image/svg+xml" !== e.type)) return a.createThumbnailFromUrl(e, t, i, n, r, o);
                                    null != o && o(s.result);
                                }),
                                s.readAsDataURL(e)
                            );
                        },
                    },
                    {
                        key: "createThumbnailFromUrl",
                        value: function (e, t, i, n, r, o, a) {
                            var s = this,
                                l = document.createElement("img");
                            return (
                                a && (l.crossOrigin = a),
                                (l.onload = function () {
                                    var a = function (e) {
                                        return e(1);
                                    };
                                    return (
                                        "undefined" != typeof EXIF &&
                                            null !== EXIF &&
                                            r &&
                                            (a = function (e) {
                                                return EXIF.getData(l, function () {
                                                    return e(EXIF.getTag(this, "Orientation"));
                                                });
                                            }),
                                        a(function (r) {
                                            (e.width = l.width), (e.height = l.height);
                                            var a = s.options.resize.call(s, e, t, i, n),
                                                u = document.createElement("canvas"),
                                                d = u.getContext("2d");
                                            switch (((u.width = a.trgWidth), (u.height = a.trgHeight), r > 4 && ((u.width = a.trgHeight), (u.height = a.trgWidth)), r)) {
                                                case 2:
                                                    d.translate(u.width, 0), d.scale(-1, 1);
                                                    break;
                                                case 3:
                                                    d.translate(u.width, u.height), d.rotate(Math.PI);
                                                    break;
                                                case 4:
                                                    d.translate(0, u.height), d.scale(1, -1);
                                                    break;
                                                case 5:
                                                    d.rotate(0.5 * Math.PI), d.scale(1, -1);
                                                    break;
                                                case 6:
                                                    d.rotate(0.5 * Math.PI), d.translate(0, -u.height);
                                                    break;
                                                case 7:
                                                    d.rotate(0.5 * Math.PI), d.translate(u.width, -u.height), d.scale(-1, 1);
                                                    break;
                                                case 8:
                                                    d.rotate(-0.5 * Math.PI), d.translate(-u.width, 0);
                                            }
                                            drawImageIOSFix(d, l, null != a.srcX ? a.srcX : 0, null != a.srcY ? a.srcY : 0, a.srcWidth, a.srcHeight, null != a.trgX ? a.trgX : 0, null != a.trgY ? a.trgY : 0, a.trgWidth, a.trgHeight);
                                            var c = u.toDataURL("image/png");
                                            if (null != o) return o(c, u);
                                        })
                                    );
                                }),
                                null != o && (l.onerror = o),
                                (l.src = e.dataURL)
                            );
                        },
                    },
                    {
                        key: "processQueue",
                        value: function () {
                            var e = this.options.parallelUploads,
                                t = this.getUploadingFiles().length,
                                i = t;
                            if (!(t >= e)) {
                                var n = this.getQueuedFiles();
                                if (n.length > 0) {
                                    if (this.options.uploadMultiple) return this.processFiles(n.slice(0, e - t));
                                    for (; i < e; ) {
                                        if (!n.length) return;
                                        this.processFile(n.shift()), i++;
                                    }
                                }
                            }
                        },
                    },
                    {
                        key: "processFile",
                        value: function (e) {
                            return this.processFiles([e]);
                        },
                    },
                    {
                        key: "processFiles",
                        value: function (e) {
                            for (var i = 0, n = (n = e); ; ) {
                                if (i >= n.length) break;
                                var r = n[i++];
                                (r.processing = !0), (r.status = t.UPLOADING), this.emit("processing", r);
                            }
                            return this.options.uploadMultiple && this.emit("processingmultiple", e), this.uploadFiles(e);
                        },
                    },
                    {
                        key: "_getFilesWithXhr",
                        value: function (e) {
                            return this.files
                                .filter(function (t) {
                                    return t.xhr === e;
                                })
                                .map(function (e) {
                                    return e;
                                });
                        },
                    },
                    {
                        key: "cancelUpload",
                        value: function (e) {
                            if (e.status === t.UPLOADING) {
                                for (var i = this._getFilesWithXhr(e.xhr), n = 0, r = (r = i); ; ) {
                                    if (n >= r.length) break;
                                    r[n++].status = t.CANCELED;
                                }
                                void 0 !== e.xhr && e.xhr.abort();
                                for (var o = 0, a = (a = i); ; ) {
                                    if (o >= a.length) break;
                                    var s = a[o++];
                                    this.emit("canceled", s);
                                }
                                this.options.uploadMultiple && this.emit("canceledmultiple", i);
                            } else (e.status !== t.ADDED && e.status !== t.QUEUED) || ((e.status = t.CANCELED), this.emit("canceled", e), this.options.uploadMultiple && this.emit("canceledmultiple", [e]));
                            if (this.options.autoProcessQueue) return this.processQueue();
                        },
                    },
                    {
                        key: "resolveOption",
                        value: function (e) {
                            if ("function" == typeof e) {
                                for (var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) i[n - 1] = arguments[n];
                                return e.apply(this, i);
                            }
                            return e;
                        },
                    },
                    {
                        key: "uploadFile",
                        value: function (e) {
                            return this.uploadFiles([e]);
                        },
                    },
                    {
                        key: "uploadFiles",
                        value: function (e) {
                            var i = this;
                            this._transformFiles(e, function (n) {
                                if (e[0].upload.chunked) {
                                    var r = e[0],
                                        o = n[0];
                                    r.upload.chunks = [];
                                    var a = function () {
                                        for (var n = 0; void 0 !== r.upload.chunks[n]; ) n++;
                                        if (!(n >= r.upload.totalChunkCount)) {
                                            0;
                                            var a = n * i.options.chunkSize,
                                                s = Math.min(a + i.options.chunkSize, r.size),
                                                l = { name: i._getParamName(0), data: o.webkitSlice ? o.webkitSlice(a, s) : o.slice(a, s), filename: r.upload.filename, chunkIndex: n };
                                            (r.upload.chunks[n] = { file: r, index: n, dataBlock: l, status: t.UPLOADING, progress: 0, retries: 0 }), i._uploadData(e, [l]);
                                        }
                                    };
                                    if (
                                        ((r.upload.finishedChunkUpload = function (n) {
                                            var o = !0;
                                            (n.status = t.SUCCESS), (n.dataBlock = null);
                                            for (var s = 0; s < r.upload.totalChunkCount; s++) {
                                                if (void 0 === r.upload.chunks[s]) return a();
                                                r.upload.chunks[s].status !== t.SUCCESS && (o = !1);
                                            }
                                            o &&
                                                i.options.chunksUploaded(r, function () {
                                                    i._finished(e, "", null);
                                                });
                                        }),
                                        i.options.parallelChunkUploads)
                                    )
                                        for (var s = 0; s < r.upload.totalChunkCount; s++) a();
                                    else a();
                                } else {
                                    for (var l = [], u = 0; u < e.length; u++) l[u] = { name: i._getParamName(u), data: n[u], filename: e[u].upload.filename };
                                    i._uploadData(e, l);
                                }
                            });
                        },
                    },
                    {
                        key: "_getChunk",
                        value: function (e, t) {
                            for (var i = 0; i < e.upload.totalChunkCount; i++) if (void 0 !== e.upload.chunks[i] && e.upload.chunks[i].xhr === t) return e.upload.chunks[i];
                        },
                    },
                    {
                        key: "_uploadData",
                        value: function (e, i) {
                            for (var n = this, r = new XMLHttpRequest(), o = 0, a = (a = e); ; ) {
                                if (o >= a.length) break;
                                a[o++].xhr = r;
                            }
                            e[0].upload.chunked && (e[0].upload.chunks[i[0].chunkIndex].xhr = r);
                            var s = this.resolveOption(this.options.method, e),
                                l = this.resolveOption(this.options.url, e);
                            r.open(s, l, !0),
                                (r.timeout = this.resolveOption(this.options.timeout, e)),
                                (r.withCredentials = !!this.options.withCredentials),
                                (r.onload = function (t) {
                                    n._finishedUploading(e, r, t);
                                }),
                                (r.onerror = function () {
                                    n._handleUploadError(e, r);
                                }),
                                ((null != r.upload ? r.upload : r).onprogress = function (t) {
                                    return n._updateFilesUploadProgress(e, r, t);
                                });
                            var u = { Accept: "application/json", "Cache-Control": "no-cache", "X-Requested-With": "XMLHttpRequest" };
                            for (var d in (this.options.headers && t.extend(u, this.options.headers), u)) {
                                var c = u[d];
                                c && r.setRequestHeader(d, c);
                            }
                            var p = new FormData();
                            if (this.options.params) {
                                var h = this.options.params;
                                for (var f in ("function" == typeof h && (h = h.call(this, e, r, e[0].upload.chunked ? this._getChunk(e[0], r) : null)), h)) {
                                    var m = h[f];
                                    p.append(f, m);
                                }
                            }
                            for (var v = 0, g = (g = e); ; ) {
                                if (v >= g.length) break;
                                var k = g[v++];
                                this.emit("sending", k, r, p);
                            }
                            this.options.uploadMultiple && this.emit("sendingmultiple", e, r, p), this._addFormElementData(p);
                            for (var y = 0; y < i.length; y++) {
                                var b = i[y];
                                p.append(b.name, b.data, b.filename);
                            }
                            this.submitRequest(r, p, e);
                        },
                    },
                    {
                        key: "_transformFiles",
                        value: function (e, t) {
                            for (
                                var i = this,
                                    n = [],
                                    r = 0,
                                    o = function (o) {
                                        i.options.transformFile.call(i, e[o], function (i) {
                                            (n[o] = i), ++r === e.length && t(n);
                                        });
                                    },
                                    a = 0;
                                a < e.length;
                                a++
                            )
                                o(a);
                        },
                    },
                    {
                        key: "_addFormElementData",
                        value: function (e) {
                            if ("FORM" === this.element.tagName)
                                for (var t = 0, i = (i = this.element.querySelectorAll("input, textarea, select, button")); ; ) {
                                    if (t >= i.length) break;
                                    var n = i[t++],
                                        r = n.getAttribute("name"),
                                        o = n.getAttribute("type");
                                    if ((o && (o = o.toLowerCase()), null != r))
                                        if ("SELECT" === n.tagName && n.hasAttribute("multiple"))
                                            for (var a = 0, s = (s = n.options); ; ) {
                                                if (a >= s.length) break;
                                                var l = s[a++];
                                                l.selected && e.append(r, l.value);
                                            }
                                        else (!o || ("checkbox" !== o && "radio" !== o) || n.checked) && e.append(r, n.value);
                                }
                        },
                    },
                    {
                        key: "_updateFilesUploadProgress",
                        value: function (e, t, i) {
                            var n = void 0;
                            if (void 0 !== i) {
                                if (((n = (100 * i.loaded) / i.total), e[0].upload.chunked)) {
                                    var r = e[0],
                                        o = this._getChunk(r, t);
                                    (o.progress = n), (o.total = i.total), (o.bytesSent = i.loaded);
                                    (r.upload.progress = 0), (r.upload.total = 0), (r.upload.bytesSent = 0);
                                    for (var a = 0; a < r.upload.totalChunkCount; a++)
                                        void 0 !== r.upload.chunks[a] &&
                                            void 0 !== r.upload.chunks[a].progress &&
                                            ((r.upload.progress += r.upload.chunks[a].progress), (r.upload.total += r.upload.chunks[a].total), (r.upload.bytesSent += r.upload.chunks[a].bytesSent));
                                    r.upload.progress = r.upload.progress / r.upload.totalChunkCount;
                                } else
                                    for (var s = 0, l = (l = e); ; ) {
                                        if (s >= l.length) break;
                                        var u = l[s++];
                                        (u.upload.progress = n), (u.upload.total = i.total), (u.upload.bytesSent = i.loaded);
                                    }
                                for (var d = 0, c = (c = e); ; ) {
                                    if (d >= c.length) break;
                                    var p = c[d++];
                                    this.emit("uploadprogress", p, p.upload.progress, p.upload.bytesSent);
                                }
                            } else {
                                var h = !0;
                                n = 100;
                                for (var f = 0, m = (m = e); ; ) {
                                    if (f >= m.length) break;
                                    var v = m[f++];
                                    (100 === v.upload.progress && v.upload.bytesSent === v.upload.total) || (h = !1), (v.upload.progress = n), (v.upload.bytesSent = v.upload.total);
                                }
                                if (h) return;
                                for (var g = 0, k = (k = e); ; ) {
                                    if (g >= k.length) break;
                                    var y = k[g++];
                                    this.emit("uploadprogress", y, n, y.upload.bytesSent);
                                }
                            }
                        },
                    },
                    {
                        key: "_finishedUploading",
                        value: function (e, i, n) {
                            var r = void 0;
                            if (e[0].status !== t.CANCELED && 4 === i.readyState) {
                                if ("arraybuffer" !== i.responseType && "blob" !== i.responseType && ((r = i.responseText), i.getResponseHeader("content-type") && ~i.getResponseHeader("content-type").indexOf("application/json")))
                                    try {
                                        r = JSON.parse(r);
                                    } catch (e) {
                                        (n = e), (r = "Invalid JSON response from server.");
                                    }
                                this._updateFilesUploadProgress(e),
                                    200 <= i.status && i.status < 300 ? (e[0].upload.chunked ? e[0].upload.finishedChunkUpload(this._getChunk(e[0], i)) : this._finished(e, r, n)) : this._handleUploadError(e, i, r);
                            }
                        },
                    },
                    {
                        key: "_handleUploadError",
                        value: function (e, i, n) {
                            if (e[0].status !== t.CANCELED) {
                                if (e[0].upload.chunked && this.options.retryChunks) {
                                    var r = this._getChunk(e[0], i);
                                    if (r.retries++ < this.options.retryChunksLimit) return void this._uploadData(e, [r.dataBlock]);
                                    console.warn("Retried this chunk too often. Giving up.");
                                }
                                for (var o = 0, a = (a = e); ; ) {
                                    if (o >= a.length) break;
                                    a[o++];
                                    this._errorProcessing(e, n || this.options.dictResponseError.replace("{{statusCode}}", i.status), i);
                                }
                            }
                        },
                    },
                    {
                        key: "submitRequest",
                        value: function (e, t, i) {
                            e.send(t);
                        },
                    },
                    {
                        key: "_finished",
                        value: function (e, i, n) {
                            for (var r = 0, o = (o = e); ; ) {
                                if (r >= o.length) break;
                                var a = o[r++];
                                (a.status = t.SUCCESS), this.emit("success", a, i, n), this.emit("complete", a);
                            }
                            if ((this.options.uploadMultiple && (this.emit("successmultiple", e, i, n), this.emit("completemultiple", e)), this.options.autoProcessQueue)) return this.processQueue();
                        },
                    },
                    {
                        key: "_errorProcessing",
                        value: function (e, i, n) {
                            for (var r = 0, o = (o = e); ; ) {
                                if (r >= o.length) break;
                                var a = o[r++];
                                (a.status = t.ERROR), this.emit("error", a, i, n), this.emit("complete", a);
                            }
                            if ((this.options.uploadMultiple && (this.emit("errormultiple", e, i, n), this.emit("completemultiple", e)), this.options.autoProcessQueue)) return this.processQueue();
                        },
                    },
                ],
                [
                    {
                        key: "uuidv4",
                        value: function () {
                            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
                                var t = (16 * Math.random()) | 0;
                                return ("x" === e ? t : (3 & t) | 8).toString(16);
                            });
                        },
                    },
                ]
            ),
            t
        );
    })();
Dropzone.initClass(),
    (Dropzone.version = "5.4.0"),
    (Dropzone.options = {}),
    (Dropzone.optionsForElement = function (e) {
        return e.getAttribute("id") ? Dropzone.options[camelize(e.getAttribute("id"))] : void 0;
    }),
    (Dropzone.instances = []),
    (Dropzone.forElement = function (e) {
        if (("string" == typeof e && (e = document.querySelector(e)), null == (null != e ? e.dropzone : void 0)))
            throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");
        return e.dropzone;
    }),
    (Dropzone.autoDiscover = !0),
    (Dropzone.discover = function () {
        var e = void 0;
        if (document.querySelectorAll) e = document.querySelectorAll(".dropzone");
        else {
            e = [];
            var t = function (t) {
                return (function () {
                    for (var i = [], n = 0, r = (r = t); ; ) {
                        if (n >= r.length) break;
                        var o = r[n++];
                        /(^| )dropzone($| )/.test(o.className) ? i.push(e.push(o)) : i.push(void 0);
                    }
                    return i;
                })();
            };
            t(document.getElementsByTagName("div")), t(document.getElementsByTagName("form"));
        }
        return (function () {
            for (var t = [], i = 0, n = (n = e); ; ) {
                if (i >= n.length) break;
                var r = n[i++];
                !1 !== Dropzone.optionsForElement(r) ? t.push(new Dropzone(r)) : t.push(void 0);
            }
            return t;
        })();
    }),
    (Dropzone.blacklistedBrowsers = [/opera.*(Macintosh|Windows Phone).*version\/12/i]),
    (Dropzone.isBrowserSupported = function () {
        var e = !0;
        if (window.File && window.FileReader && window.FileList && window.Blob && window.FormData && document.querySelector)
            if ("classList" in document.createElement("a"))
                for (var t = 0, i = (i = Dropzone.blacklistedBrowsers); ; ) {
                    if (t >= i.length) break;
                    i[t++].test(navigator.userAgent) && (e = !1);
                }
            else e = !1;
        else e = !1;
        return e;
    }),
    (Dropzone.dataURItoBlob = function (e) {
        for (var t = atob(e.split(",")[1]), i = e.split(",")[0].split(":")[1].split(";")[0], n = new ArrayBuffer(t.length), r = new Uint8Array(n), o = 0, a = t.length, s = 0 <= a; s ? o <= a : o >= a; s ? o++ : o--) r[o] = t.charCodeAt(o);
        return new Blob([n], { type: i });
    });
var without = function (e, t) {
        return e
            .filter(function (e) {
                return e !== t;
            })
            .map(function (e) {
                return e;
            });
    },
    camelize = function (e) {
        return e.replace(/[\-_](\w)/g, function (e) {
            return e.charAt(1).toUpperCase();
        });
    };
(Dropzone.createElement = function (e) {
    var t = document.createElement("div");
    return (t.innerHTML = e), t.childNodes[0];
}),
    (Dropzone.elementInside = function (e, t) {
        if (e === t) return !0;
        for (; (e = e.parentNode); ) if (e === t) return !0;
        return !1;
    }),
    (Dropzone.getElement = function (e, t) {
        var i = void 0;
        if (("string" == typeof e ? (i = document.querySelector(e)) : null != e.nodeType && (i = e), null == i)) throw new Error("Invalid `" + t + "` option provided. Please provide a CSS selector or a plain HTML element.");
        return i;
    }),
    (Dropzone.getElements = function (e, t) {
        var i = void 0,
            n = void 0;
        if (e instanceof Array) {
            n = [];
            try {
                for (var r = 0, o = (o = e); !(r >= o.length); ) (i = o[r++]), n.push(this.getElement(i, t));
            } catch (e) {
                n = null;
            }
        } else if ("string" == typeof e) {
            n = [];
            for (var a = 0, s = (s = document.querySelectorAll(e)); !(a >= s.length); ) (i = s[a++]), n.push(i);
        } else null != e.nodeType && (n = [e]);
        if (null == n || !n.length) throw new Error("Invalid `" + t + "` option provided. Please provide a CSS selector, a plain HTML element or a list of those.");
        return n;
    }),
    (Dropzone.confirm = function (e, t, i) {
        return window.confirm(e) ? t() : null != i ? i() : void 0;
    }),
    (Dropzone.isValidFile = function (e, t) {
        if (!t) return !0;
        t = t.split(",");
        for (var i = e.type, n = i.replace(/\/.*$/, ""), r = 0, o = (o = t); ; ) {
            if (r >= o.length) break;
            var a = o[r++];
            if ("." === (a = a.trim()).charAt(0)) {
                if (-1 !== e.name.toLowerCase().indexOf(a.toLowerCase(), e.name.length - a.length)) return !0;
            } else if (/\/\*$/.test(a)) {
                if (n === a.replace(/\/.*$/, "")) return !0;
            } else if (i === a) return !0;
        }
        return !1;
    }),
    "undefined" != typeof jQuery &&
        null !== jQuery &&
        (jQuery.fn.dropzone = function (e) {
            return this.each(function () {
                return new Dropzone(this, e);
            });
        }),
    "undefined" != typeof module && null !== module ? (module.exports = Dropzone) : (window.Dropzone = Dropzone),
    (Dropzone.ADDED = "added"),
    (Dropzone.QUEUED = "queued"),
    (Dropzone.ACCEPTED = Dropzone.QUEUED),
    (Dropzone.UPLOADING = "uploading"),
    (Dropzone.PROCESSING = Dropzone.UPLOADING),
    (Dropzone.CANCELED = "canceled"),
    (Dropzone.ERROR = "error"),
    (Dropzone.SUCCESS = "success");
var detectVerticalSquash = function (e) {
        e.naturalWidth;
        var t = e.naturalHeight,
            i = document.createElement("canvas");
        (i.width = 1), (i.height = t);
        var n = i.getContext("2d");
        n.drawImage(e, 0, 0);
        for (var r = n.getImageData(1, 0, 1, t).data, o = 0, a = t, s = t; s > o; ) {
            0 === r[4 * (s - 1) + 3] ? (a = s) : (o = s), (s = (a + o) >> 1);
        }
        var l = s / t;
        return 0 === l ? 1 : l;
    },
    drawImageIOSFix = function (e, t, i, n, r, o, a, s, l, u) {
        var d = detectVerticalSquash(t);
        return e.drawImage(t, i, n, r, o, a, s, l, u / d);
    },
    ExifRestore = (function () {
        function e() {
            _classCallCheck(this, e);
        }
        return (
            _createClass(e, null, [
                {
                    key: "initClass",
                    value: function () {
                        this.KEY_STR = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                    },
                },
                {
                    key: "encode64",
                    value: function (e) {
                        for (
                            var t = "", i = void 0, n = void 0, r = "", o = void 0, a = void 0, s = void 0, l = "", u = 0;
                            (o = (i = e[u++]) >> 2),
                                (a = ((3 & i) << 4) | ((n = e[u++]) >> 4)),
                                (s = ((15 & n) << 2) | ((r = e[u++]) >> 6)),
                                (l = 63 & r),
                                isNaN(n) ? (s = l = 64) : isNaN(r) && (l = 64),
                                (t = t + this.KEY_STR.charAt(o) + this.KEY_STR.charAt(a) + this.KEY_STR.charAt(s) + this.KEY_STR.charAt(l)),
                                (i = n = r = ""),
                                (o = a = s = l = ""),
                                u < e.length;

                        );
                        return t;
                    },
                },
                {
                    key: "restore",
                    value: function (e, t) {
                        if (!e.match("data:image/jpeg;base64,")) return t;
                        var i = this.decode64(e.replace("data:image/jpeg;base64,", "")),
                            n = this.slice2Segments(i),
                            r = this.exifManipulation(t, n);
                        return "data:image/jpeg;base64," + this.encode64(r);
                    },
                },
                {
                    key: "exifManipulation",
                    value: function (e, t) {
                        var i = this.getExifArray(t),
                            n = this.insertExif(e, i);
                        return new Uint8Array(n);
                    },
                },
                {
                    key: "getExifArray",
                    value: function (e) {
                        for (var t = void 0, i = 0; i < e.length; ) {
                            if ((255 === (t = e[i])[0]) & (225 === t[1])) return t;
                            i++;
                        }
                        return [];
                    },
                },
                {
                    key: "insertExif",
                    value: function (e, t) {
                        var i = e.replace("data:image/jpeg;base64,", ""),
                            n = this.decode64(i),
                            r = n.indexOf(255, 3),
                            o = n.slice(0, r),
                            a = n.slice(r),
                            s = o;
                        return (s = (s = s.concat(t)).concat(a));
                    },
                },
                {
                    key: "slice2Segments",
                    value: function (e) {
                        for (var t = 0, i = []; ; ) {
                            if ((255 === e[t]) & (218 === e[t + 1])) break;
                            if ((255 === e[t]) & (216 === e[t + 1])) t += 2;
                            else {
                                var n = t + (256 * e[t + 2] + e[t + 3]) + 2,
                                    r = e.slice(t, n);
                                i.push(r), (t = n);
                            }
                            if (t > e.length) break;
                        }
                        return i;
                    },
                },
                {
                    key: "decode64",
                    value: function (e) {
                        var t = void 0,
                            i = void 0,
                            n = "",
                            r = void 0,
                            o = void 0,
                            a = "",
                            s = 0,
                            l = [];
                        for (
                            /[^A-Za-z0-9\+\/\=]/g.exec(e) && console.warn("There were invalid base64 characters in the input text.\nValid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\nExpect errors in decoding."),
                                e = e.replace(/[^A-Za-z0-9\+\/\=]/g, "");
                            (t = (this.KEY_STR.indexOf(e.charAt(s++)) << 2) | ((r = this.KEY_STR.indexOf(e.charAt(s++))) >> 4)),
                                (i = ((15 & r) << 4) | ((o = this.KEY_STR.indexOf(e.charAt(s++))) >> 2)),
                                (n = ((3 & o) << 6) | (a = this.KEY_STR.indexOf(e.charAt(s++)))),
                                l.push(t),
                                64 !== o && l.push(i),
                                64 !== a && l.push(n),
                                (t = i = n = ""),
                                (r = o = a = ""),
                                s < e.length;

                        );
                        return l;
                    },
                },
            ]),
            e
        );
    })();
ExifRestore.initClass();
var contentLoaded = function (e, t) {
    var i = !1,
        n = !0,
        r = e.document,
        o = r.documentElement,
        a = r.addEventListener ? "addEventListener" : "attachEvent",
        s = r.addEventListener ? "removeEventListener" : "detachEvent",
        l = r.addEventListener ? "" : "on",
        u = function n(o) {
            if ("readystatechange" !== o.type || "complete" === r.readyState) return ("load" === o.type ? e : r)[s](l + o.type, n, !1), !i && (i = !0) ? t.call(e, o.type || o) : void 0;
        };
    if ("complete" !== r.readyState) {
        if (r.createEventObject && o.doScroll) {
            try {
                n = !e.frameElement;
            } catch (e) {}
            n &&
                (function e() {
                    try {
                        o.doScroll("left");
                    } catch (t) {
                        return void setTimeout(e, 50);
                    }
                    return u("poll");
                })();
        }
        return r[a](l + "DOMContentLoaded", u, !1), r[a](l + "readystatechange", u, !1), e[a](l + "load", u, !1);
    }
};
function __guard__(e, t) {
    return null != e ? t(e) : void 0;
}
function __guardMethod__(e, t, i) {
    return null != e && "function" == typeof e[t] ? i(e, t) : void 0;
}
(Dropzone._autoDiscoverFunction = function () {
    if (Dropzone.autoDiscover) return Dropzone.discover();
}),
    contentLoaded(window, Dropzone._autoDiscoverFunction);
