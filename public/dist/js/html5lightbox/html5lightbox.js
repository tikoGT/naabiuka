    /** HTML5 LightBox - jQuery Image and Video LightBox Plugin
     * Copyright 2014 Magic Hills Pty Ltd All Rights Reserved
     * Website: http://html5box.com
     * Version 8.2
     */
    (function () {
        var scripts = document.getElementsByTagName("script");
        var jsFolder = "";
        for (var i = 0; i < scripts.length; i++) if (scripts[i].src && scripts[i].src.match(/html5lightbox\.js/i)) jsFolder = scripts[i].src.substr(0, scripts[i].src.lastIndexOf("/") + 1);
        var loadjQuery = false;
        if (typeof jQuery == "undefined") loadjQuery = true;
        else {
            var jVersion = jQuery.fn.jquery.split(".");
            if (jVersion[0] < 1 || (jVersion[0] == 1 && jVersion[1] < 6)) loadjQuery = true;
        }
        if (loadjQuery) {
            var head = document.getElementsByTagName("head")[0];
            var script = document.createElement("script");
            script.setAttribute("type", "text/javascript");
            if (script.readyState)
                script.onreadystatechange = function () {
                    if (script.readyState == "loaded" || script.readyState == "complete") {
                        script.onreadystatechange = null;
                        loadHtml5LightBox(jsFolder);
                    }
                };
            else
                script.onload = function () {
                    loadHtml5LightBox(jsFolder);
                };
            script.setAttribute("src", jsFolder + "jquery.js");
            head.appendChild(script);
        } else loadHtml5LightBox(jsFolder);
    })();
    function loadHtml5LightBox(jsFolder) {
        (function ($) {
            $.fn.html5lightbox = function (options) {
                var inst = this;
                inst.options = $.extend(
                    {
                        freelink: "http://html5box.com/",
                        pushwindowhistory: false,
                        defaultvideovolume: 1,
                        mutevideo: false,
                        playsinline: false,
                        autoclose: false,
                        autoclosedelay: 0,
                        resizedelay: 100,
                        insideiframe: false,
                        iframetopmargin: -1,
                        iframesamedomain: false,
                        autoresizecontent: true,
                        defaultwidth: 960,
                        defaultheight: 540,
                        usedefaultsizeforcontent: false,
                        usedefaultwidthforcontent: true,
                        usedefaultheightforcontent: false,
                        mediumbreakpoint: 800,
                        smallbreakpoint: 600,
                        preload: true,
                        preloadallonpageload: false,
                        preloadalldelay: 5e3,
                        autoplay: true,
                        loopvideo: false,
                        html5player: true,
                        responsive: true,
                        nativehtml5controls: false,
                        videohidecontrols: false,
                        autoplayhtml5onmobile: true,
                        nativecontrolsonfirefox: false,
                        nativecontrolsonie: false,
                        nativecontrolsoniphone: true,
                        nativecontrolsonipad: true,
                        nativecontrolsonandroid: true,
                        nativecontrolsonfullscreen: true,
                        nativecontrolsnodownload: true,
                        noresizecallback: true,
                        imagekeepratio: true,
                        maxheight: false,
                        elemautoheight: false,
                        useflashonie9: true,
                        useflashonie10: true,
                        useflashonie11: false,
                        useflashformp4onfirefox: false,
                        transition: "none",
                        transitionduration: 400,
                        enteranimation: "",
                        enteranimationduration: "500ms",
                        exitanimation: "",
                        animationduration: "1s",
                        enablepdfjs: true,
                        pdfjsengine: "",
                        openpdfinnewtaboniphone: false,
                        openpdfinnewtabonipad: false,
                        googleanalyticsaccount: "",
                        arrowloop: true,
                        showall: false,
                        userelforgroup: true,
                        shownavigation: true,
                        thumbwidth: 96,
                        thumbheight: 72,
                        thumbgap: 4,
                        thumbtopmargin: 12,
                        thumbbottommargin: 12,
                        thumbborder: 1,
                        thumbbordercolor: "transparent",
                        thumbhighlightbordercolor: "#fff",
                        thumbopacity: 1,
                        navbuttonwidth: 32,
                        hidenavigationonmobile: false,
                        hidenavigationonipad: false,
                        navbgcolor: "rgba(0,0,0,0.2)",
                        shownavcontrol: true,
                        navcontrolimage: "lightbox-navcontrol.png",
                        hidenavdefault: false,
                        overlaybgcolor: "#000",
                        overlayopacity: 0.9,
                        bgcolor: "#fff",
                        bordersize: 8,
                        borderradius: 0,
                        bordermargin: 16,
                        bordertopmargin: 48,
                        barautoheight: true,
                        barheight: 64,
                        smallscreenheight: 415,
                        responsivebarheight: false,
                        barheightonsmallheight: 64,
                        notkeepratioonsmallheight: false,
                        bordertopmarginsmall: 36,
                        loadingwidth: 48,
                        loadingheight: 48,
                        loadingusefont: true,
                        loadingfontname: "mh-icon-spin5",
                        loadingfontcolor: "#222",
                        loadingfontbg: "transparent",
                        resizespeed: 400,
                        fadespeed: 0,
                        jsfolder: jsFolder,
                        skinsfoldername: "skins/default/",
                        loadingimage: "lightbox-loading.gif",
                        nextimage: "lightbox-next.png",
                        previmage: "lightbox-prev.png",
                        closeimage: "lightbox-close.png",
                        playvideoimage: "lightbox-playvideo.png",
                        titlebgimage: "lightbox-titlebg.png",
                        navarrowsprevimage: "lightbox-navprev.png",
                        navarrowsnextimage: "lightbox-navnext.png",
                        closepos: "outside",
                        closeusefont: true,
                        arrowsusefont: true,
                        navusefont: true,
                        navarrowsalwaysshowontouch: true,
                        showarrowsbottomonsmallscreen: true,
                        navarrowsbottomscreenwidth: 479,
                        outsidearrowspos: "middle",
                        closeonoverlay: true,
                        limitfocus: true,
                        navarrowspos: "inside",
                        alwaysshownavarrows: false,
                        showplaybutton: true,
                        playimage: "lightbox-play.png",
                        pauseimage: "lightbox-pause.png",
                        playimagesize: 32,
                        fullscreenmode: false,
                        fullscreencloseimage: "lightbox-close-fullscreen.png",
                        fullscreennextimage: "lightbox-next-fullscreen.png",
                        fullscreenprevimage: "lightbox-prev-fullscreen.png",
                        fullscreennomargin: false,
                        fullscreenmodeonsmallscreen: false,
                        fullscreennomarginonsmallscreen: false,
                        fullscreensmallscreenwidth: 800,
                        fullscreenbgcolor: "transparent",
                        fullscreenbordersize: 0,
                        fullscreentextinside: false,
                        fullscreentextoutside: true,
                        fullscreennotransition: true,
                        fullscreenloadingfontcolor: "#eee",
                        videobgcolor: "#000",
                        html5videoposter: "",
                        showtitle: true,
                        titlestyle: "bottom",
                        titleinsidecss: "color:#fff; font-size:16px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; text-align:left; margin:4px 8px;",
                        titlebottomcss: "color:#333; font-size:16px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; text-align:left;",
                        titleoutsidecss: "color:#fff; font-size:18px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; text-align:center; margin: 8px;",
                        resizeleftright: true,
                        showonmouseoverinside: false,
                        showinsidetitleforimageonly: true,
                        showdescription: true,
                        descriptioninsidecss: "color:#fff; font-size:12px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; text-align:left; margin:4px 0px 0px; padding: 0px;",
                        descriptionbottomcss: "color:#333; font-size:12px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; text-align:left; margin:4px 0px 0px; padding: 0px;",
                        descriptionoutsidecss: "color:#fff; font-size:14px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; text-align:center; margin:8px; padding: 0px;",
                        fullscreentitlebottomcss: "color:#fff; font-size:16px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; text-align:left; margin:4px 8px 8px;",
                        fullscreendescriptionbottomcss: "color:#fff; font-size:12px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; text-align:left; margin:4px 0px 0px; padding: 0px;",
                        showsocialmedia: true,
                        socialmediaposition: "position:absolute;top:8px;right:8px;",
                        showtitleprefix: true,
                        titleprefix: "%NUM / %TOTAL",
                        autoslide: false,
                        slideinterval: 5e3,
                        showtimer: true,
                        timerposition: "bottom",
                        timerheight: 2,
                        timercolor: "#dc572e",
                        timeropacity: 1,
                        initvimeo: true,
                        inityoutube: true,
                        swipepreventdefaultonandroid: false,
                        initsocial: true,
                        showsocial: false,
                        sharemediaurl: false,
                        socialposition: "position:absolute;top:100%;right:0;",
                        socialpositionsmallscreen: "position:absolute;top:100%;right:0;left:0;",
                        socialdirection: "horizontal",
                        socialbuttonsize: 32,
                        socialbuttonfontsize: 18,
                        socialrotateeffect: true,
                        showfacebook: true,
                        showtwitter: true,
                        showpinterest: true,
                        showemail: true,
                        sharetextprefix: "Check Out This",
                        imagepercentage: 75,
                        sidetobottomscreenwidth: 479,
                        errorwidth: 280,
                        errorheight: 48,
                        errorcss: "text-align:center; color:#ff0000; font-size:14px; font-family:Arial, sans-serif;",
                        enabletouchswipe: true,
                        mobileresizeevent: false,
                        swipedistance: 0,
                        bodynoscroll: false,
                        useabsolutepos: false,
                        useabsoluteposonmobile: false,
                        supportesckey: true,
                        supportarrowkeys: true,
                        showsubtitle: false,
                        vtturl: "",
                        vttline: -4,
                        vttlang: "en",
                        vttlabel: "English",
                        showsubtitlebydefault: true,
                        version: "3.3",
                        stamp: true,
                        freemark: "72,84,77,76,53,32,76,105,103,104,116,98,111,120,32,70,114,101,101,32,86,101,114,115,105,111,110",
                        watermark: "",
                        watermarklink: "",
                    },
                    options
                );
                if (typeof html5lightbox_options != "undefined" && html5lightbox_options) $.extend(inst.options, html5lightbox_options);
                if ($("div.html5lightbox_options").length)
                    $.each($("div.html5lightbox_options").data(), function (key, value) {
                        inst.options[key.toLowerCase()] = value;
                    });
                if ($("div#html5lightbox_options").length)
                    $.each($("div#html5lightbox_options").data(), function (key, value) {
                        inst.options[key.toLowerCase()] = value;
                    });
                if ($("div#html5lightbox_general_options").length)
                    $.each($("div#html5lightbox_general_options").data(), function (key, value) {
                        inst.options[key.toLowerCase()] = value;
                    });
                var ELEM_TYPE = 0,
                    ELEM_HREF = 1,
                    ELEM_TITLE = 2,
                    ELEM_GROUP = 3,
                    ELEM_WIDTH = 4,
                    ELEM_HEIGHT = 5,
                    ELEM_HREF_WEBM = 6,
                    ELEM_HREF_OGG = 7,
                    ELEM_THUMBNAIL = 8,
                    ELEM_DESCRIPTION = 9,
                    ELEM_DIV = 10,
                    ELEM_ORIGINALWIDTH = 11,
                    ELEM_ORIGINALHEIGHT = 12,
                    ELEM_SOCIALMEDIA = 13,
                    ELEM_WEBLINK = 14,
                    ELEM_WEBLINKTARGET = 15,
                    ELEM_WEBLINKTEXT = 16,
                    ELEM_MEDIUMWIDTH = 17,
                    ELEM_MEDIUMHEIGHT = 18,
                    ELEM_SMALLWIDTH = 19,
                    ELEM_SMALLHEIGHT = 20,
                    ELEM_ATTACHMENT = 21;
                inst.options.types = ["IMAGE", "FLASH", "VIDEO", "YOUTUBE", "VIMEO", "PDF", "MP3", "WEB", "FLV", "DAILYMOTION", "DIV", "WISTIA", "IFRAMEVIDEO"];
                inst.options.htmlfolder = window.location.href.substr(0, window.location.href.lastIndexOf("/") + 1);
                inst.options.skinsfolder = inst.options.skinsfoldername;
                if (inst.options.skinsfolder.length > 0 && inst.options.skinsfolder[inst.options.skinsfolder.length - 1] != "/") inst.options.skinsfolder += "/";
                if (inst.options.skinsfolder.charAt(0) != "/" && inst.options.skinsfolder.substring(0, 5) != "http:" && inst.options.skinsfolder.substring(0, 6) != "https:")
                    inst.options.skinsfolder = inst.options.jsfolder + inst.options.skinsfolder;
                var image_list = [
                    "loadingimage",
                    "nextimage",
                    "previmage",
                    "closeimage",
                    "playvideoimage",
                    "titlebgimage",
                    "navarrowsprevimage",
                    "navarrowsnextimage",
                    "navcontrolimage",
                    "playimage",
                    "pauseimage",
                    "fullscreencloseimage",
                    "fullscreennextimage",
                    "fullscreenprevimage",
                ];
                for (var i = 0; i < image_list.length; i++)
                    if (inst.options[image_list[i]])
                        if (inst.options[image_list[i]].substring(0, 7).toLowerCase() != "http://" && inst.options[image_list[i]].substring(0, 8).toLowerCase() != "https://")
                            inst.options[image_list[i]] = inst.options.skinsfolder + inst.options[image_list[i]];
                var i;
                var l;
                var mark = "";
                var bytes = inst.options.freemark.split(",");
                for (i = 0; i < bytes.length; i++) mark += String.fromCharCode(bytes[i]);
                inst.options.freemark = mark;
                var d0 = "hmtamgli5cboxh.iclolms";
                for (i = 1; i <= 5; i++) d0 = d0.slice(0, i) + d0.slice(i + 1);
                l = d0.length;
                for (i = 0; i < 5; i++) d0 = d0.slice(0, l - 9 + i) + d0.slice(l - 8 + i);
                if (inst.options.htmlfolder.indexOf(d0) != -1) inst.options.stamp = false;
                inst.options.flashInstalled = false;
                try {
                    if (new ActiveXObject("ShockwaveFlash.ShockwaveFlash")) inst.options.flashInstalled = true;
                } catch (e) {
                    if (navigator.mimeTypes["application/x-shockwave-flash"]) inst.options.flashInstalled = true;
                }
                inst.options.html5VideoSupported = !!document.createElement("video").canPlayType;
                inst.options.isChrome = navigator.userAgent.match(/Chrome/i) != null;
                inst.options.isFirefox = navigator.userAgent.match(/Firefox/i) != null;
                inst.options.isOpera = navigator.userAgent.match(/Opera/i) != null || navigator.userAgent.match(/OPR\//i) != null;
                inst.options.isSafari = navigator.userAgent.match(/Safari/i) != null;
                inst.options.isIE11 = navigator.userAgent.match(/Trident\/7/) != null && navigator.userAgent.match(/rv:11/) != null;
                inst.options.isIE = navigator.userAgent.match(/MSIE/i) != null && !inst.options.isOpera;
                inst.options.isIE10 = navigator.userAgent.match(/MSIE 10/i) != null && !this.options.isOpera;
                inst.options.isIE9 = navigator.userAgent.match(/MSIE 9/i) != null && !inst.options.isOpera;
                inst.options.isIE8 = navigator.userAgent.match(/MSIE 8/i) != null && !inst.options.isOpera;
                inst.options.isIE7 = navigator.userAgent.match(/MSIE 7/i) != null && !inst.options.isOpera;
                inst.options.isIE6 = navigator.userAgent.match(/MSIE 6/i) != null && !inst.options.isOpera;
                inst.options.isIE678 = inst.options.isIE6 || inst.options.isIE7 || inst.options.isIE8;
                inst.options.isIE6789 = inst.options.isIE6 || inst.options.isIE7 || inst.options.isIE8 || inst.options.isIE9;
                inst.options.isAndroid = navigator.userAgent.match(/Android/i) != null;
                inst.options.isIPad = navigator.userAgent.match(/iPad/i) != null;
                inst.options.isIPhone = navigator.userAgent.match(/iPod/i) != null || navigator.userAgent.match(/iPhone/i) != null;
                inst.options.isIOS = inst.options.isIPad || inst.options.isIPhone;
                inst.options.isMobile = inst.options.isAndroid || inst.options.isIPad || inst.options.isIPhone;
                inst.options.isIOSLess5 = inst.options.isIPad && inst.options.isIPhone && (navigator.userAgent.match(/OS 4/i) != null || navigator.userAgent.match(/OS 3/i) != null);
                inst.options.supportCSSPositionFixed = !inst.options.isIE6 && !inst.options.isIOSLess5;
                inst.options.iequirksmode = inst.options.isIE6789 && document.compatMode != "CSS1Compat";
                inst.options.isTouch = "ontouchstart" in window;
                if (inst.options.isChrome) {
                    var match = navigator.userAgent.match(/Chrome\/([0-9]+)/);
                    inst.options.chromeVersion = match && match.length >= 2 ? parseInt(match[1], 10) : 0;
                }
                if (inst.options.isAndroid) {
                    var match = navigator.userAgent.match(/Android\s([0-9\.]*)/i);
                    inst.options.androidVersion = match && match.length >= 2 ? parseInt(match[1], 10) : -1;
                }
                var v = document.createElement("video");
                inst.options.canplaymp4 = v && v.canPlayType && v.canPlayType("video/mp4").replace(/no/, "");
                if (
                    (inst.options.isFirefox && inst.options.nativecontrolsonfirefox) ||
                    ((inst.options.isIE6789 || inst.options.isIE10 || inst.options.isIE11) && inst.options.nativecontrolsonie) ||
                    (inst.options.isIPhone && inst.options.nativecontrolsoniphone) ||
                    (inst.options.isIPad && inst.options.nativecontrolsonipad) ||
                    (inst.options.isAndroid && inst.options.nativecontrolsonandroid)
                )
                    inst.options.nativehtml5controls = true;
                if (inst.options.isIOS || inst.options.isAndroid) inst.options.nativecontrolsonfullscreen = true;
                inst.options.navheight = 0;
                inst.options.thumbgap += 2 * inst.options.thumbborder;
                inst.options.resizeTimeout = -1;
                inst.slideTimeout = null;
                inst.autosliding = false;
                inst.existingElem = -1;
                inst.direction = -3;
                inst.elemArray = new Array();
                inst.options.curElem = -1;
                inst.defaultoptions = $.extend({}, inst.options);
                if (inst.options.googleanalyticsaccount && !window._gaq) {
                    window._gaq = window._gaq || [];
                    window._gaq.push(["_setAccount", inst.options.googleanalyticsaccount]);
                    window._gaq.push(["_trackPageview"]);
                    $.getScript("https://ssl.google-analytics.com/ga.js");
                }
            
                if (inst.options.inityoutube) {
                    var tag = document.createElement("script");
                    tag.src = "https://www.youtube.com/iframe_api";
                    var firstScriptTag = document.getElementsByTagName("script")[0];
                    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
                }
                if (inst.options.initsocial) $("head").append('<link rel="stylesheet" href="' + inst.options.jsfolder + 'icons/css/mhfontello.css" type="text/css" />');
                inst.showing = false;
                inst.navvisible = false;
                inst.disableKeyOutsideOfLightbox = function (event) {
                    if ($(event.target).closest("#html5box-html5-lightbox").length <= 0) {
                        event.preventDefault();
                        $("#html5-lightbox-box .html5-elem-box").attr("tabindex", "-1").focus();
                    }
                };
                if (inst.options.limitfocus) {
                    $(window).on("html5lightbox.lightboxopened", function () {
                        $(document).on("keydown", inst.disableKeyOutsideOfLightbox);
                        $("#html5-lightbox-box .html5-elem-box").attr("tabindex", "-1").focus();
                    });
                    $(window).on("html5lightbox.lightboxclosed", function () {
                        $(document).off("keydown", inst.disableKeyOutsideOfLightbox);
                    });
                }
                inst.disableEscKey = function (isFullscreen) {
                    if (isFullscreen) inst.disableesckeyinfullscreen = true;
                    else
                        setTimeout(function () {
                            inst.disableesckeyinfullscreen = false;
                        }, 1e3);
                };
                inst.supportKeyboard = function () {
                    inst.disableesckeyinfullscreen = false;
                    $(document).keyup(function (e) {
                        if (!inst.showing) return;
                        if (!inst.disableesckeyinfullscreen && inst.options.supportesckey && e.keyCode == 27) inst.finish();
                        else if (inst.options.supportarrowkeys)
                            if (e.keyCode == 39) inst.gotoSlide(-1);
                            else if (e.keyCode == 37) inst.gotoSlide(-2);
                    });
                    if (inst.options.supportesckey && document.addEventListener) {
                        document.addEventListener(
                            "MSFullscreenChange",
                            function () {
                                inst.disableEscKey(document.msFullscreenElement != null);
                            },
                            false
                        );
                        document.addEventListener(
                            "webkitfullscreenchange",
                            function () {
                                inst.disableEscKey(document.webkitIsFullScreen);
                            },
                            false
                        );
                    }
                };
                inst.supportKeyboard();
                inst.init = function () {
                    inst.showing = false;
                    inst.readData();
                    inst.createMarkup();
                    inst.initSlide();
                };
                inst.checkParentData = function (node, parentNode, attr) {
                    return node.data(attr) ? node.data(attr) : parentNode && parentNode.data(attr) ? parentNode.data(attr) : null;
                };
                inst.checkParentClass = function (node, parentNode, attr) {
                    var ret = null;
                    $.each([node, parentNode], function (index, nodeValue) {
                        if (nodeValue && nodeValue.attr("class")) {
                            var classList = nodeValue.attr("class").split(/\s+/);
                            $.each(classList, function (index, className) {
                                if (className && className.toLowerCase().indexOf("html5lightbox-" + attr + "-") == 0) {
                                    var names = className.split("-");
                                    if (names.length == 3) {
                                        var val = names[2];
                                        if (val.toLowerCase() == "true") val = true;
                                        else if (val.toLowerCase() == "false") val = false;
                                        else if (/^\d+$/.test(val)) val = parseInt(val);
                                        else if (!isNaN(val)) val = parseFloat(val);
                                        ret = val;
                                    }
                                }
                            });
                        }
                    });
                    return ret;
                };
                inst.readNodeData = function (node, parentNode) {
                    var fileType = "mediatype" in node.data() ? node.data("mediatype") : inst.checkType(node.attr("href"));
                    if (fileType < 0) return;
                    var title = node.data("title") ? node.data("title") : node.attr("title");
                    var group = node.data("group") ? node.data("group") : inst.options.userelforgroup ? node.attr("rel") : null;
                    if (!group && parentNode) group = parentNode.data("group") ? parentNode.data("group") : inst.options.userelforgroup ? parentNode.attr("rel") : null;
                    for (var i = 0; i < inst.elemArray.length; i++)
                        if (node.attr("href") == inst.elemArray[i][ELEM_HREF]) {
                            inst.elemArray[i][ELEM_TITLE] = title;
                            inst.elemArray[i][ELEM_GROUP] = group;
                            return;
                        }
                    var w = inst.checkParentData(node, parentNode, "width");
                    var h = inst.checkParentData(node, parentNode, "height");
                    if (!w) w = inst.checkParentClass(node, parentNode, "width");
                    if (!h) h = inst.checkParentClass(node, parentNode, "height");
                    var mediumw = inst.checkParentData(node, parentNode, "mediumwidth");
                    var mediumh = inst.checkParentData(node, parentNode, "mediumheight");
                    if (!mediumw) mediumw = inst.checkParentClass(node, parentNode, "mediumwidth");
                    if (!mediumw) mediumw = w;
                    if (!mediumh) mediumh = inst.checkParentClass(node, parentNode, "mediumheight");
                    if (!mediumh) mediumh = h;
                    var smallw = inst.checkParentData(node, parentNode, "smallwidth");
                    var smallh = inst.checkParentData(node, parentNode, "smallheight");
                    if (!smallw) smallw = inst.checkParentClass(node, parentNode, "smallwidth");
                    if (!smallw) smallw = mediumw;
                    if (!smallh) smallh = inst.checkParentClass(node, parentNode, "smallheight");
                    if (!smallh) smallh = mediumh;
                    var newItem = new Array(
                        fileType,
                        node.attr("href"),
                        title,
                        group,
                        w,
                        h,
                        inst.checkParentData(node, parentNode, "webm"),
                        inst.checkParentData(node, parentNode, "ogg"),
                        inst.checkParentData(node, parentNode, "thumbnail"),
                        inst.checkParentData(node, parentNode, "description"),
                        null,
                        null,
                        null,
                        inst.checkParentData(node, parentNode, "socialmedia"),
                        inst.checkParentData(node, parentNode, "weblink"),
                        inst.checkParentData(node, parentNode, "weblinktarget"),
                        inst.checkParentData(node, parentNode, "weblinktext"),
                        mediumw,
                        mediumh,
                        smallw,
                        smallh,
                        node.data("attachment")
                    );
                    var container = node.closest(".lightboxcontainer");
                    if (container.length > 0) {
                        if (container.find(".lightboxtitle").length > 0) newItem[ELEM_TITLE] = container.find(".lightboxtitle").text();
                        if (container.find(".lightboxdescription").length > 0) newItem[ELEM_DESCRIPTION] = container.find(".lightboxdescription").text();
                    }
                    inst.elemArray.push(newItem);
                };
                inst.readData = function () {
                    inst.each(function () {
                        var self = $(this);
                        if (this.nodeName.toLowerCase() == "a" || this.nodeName.toLowerCase() == "area") inst.readNodeData(self);
                        else
                            self.find("a,area").each(function () {
                                inst.readNodeData($(this), self);
                            });

                    });
                };
                inst.createMarkup = function () {
                    if ($(window).width() <= inst.options.fullscreensmallscreenwidth) {
                        if (inst.options.fullscreenmodeonsmallscreen) {
                            inst.options.fullscreenmode = true;
                            if (inst.options.fullscreennomarginonsmallscreen) inst.options.fullscreennomargin = true;
                        }
                        if (inst.options.fullscreenmode && inst.options.fullscreennomarginonsmallscreen) inst.options.fullscreennomargin = true;
                    }
                    if (inst.options.fullscreenmode) {
                        inst.options.bgcolor = inst.options.fullscreenbgcolor;
                        inst.options.bordersize = inst.options.fullscreenbordersize;
                        inst.options.loadingfontcolor = inst.options.fullscreenloadingfontcolor;
                        if (inst.options.fullscreennomargin) {
                            inst.options.bordersize = 0;
                            inst.options.bordermargin = 0;
                            inst.options.bordertopmargin = 0;
                            inst.options.bordertopmarginsmall = 0;
                        }
                        if (inst.options.fullscreentextoutside) {
                            inst.options.titlestyle = "outside";
                            inst.options.titlecss = inst.options.titleoutsidecss;
                            inst.options.descriptioncss = inst.options.descriptionoutsidecss;
                        } else if (inst.options.fullscreentextinside) {
                            inst.options.titlestyle = "inside";
                            inst.options.titlecss = inst.options.titleinsidecss;
                            inst.options.descriptioncss = inst.options.descriptioninsidecss;
                        } else {
                            inst.options.titlebottomcss = inst.options.fullscreentitlebottomcss;
                            inst.options.descriptionbottomcss = inst.options.fullscreendescriptionbottomcss;
                        }
                    }
                    inst.options.barheightoriginal = inst.options.barheight;
                    if (inst.options.responsivebarheight) {
                        var winH = inst.getWinH();
                        if (winH <= inst.options.smallscreenheight) inst.options.barheight = inst.options.barheightonsmallheight;
                    }
                    switch (inst.options.titlestyle) {
                        case "inside":
                            inst.options.titlecss = inst.options.titleinsidecss;
                            inst.options.descriptioncss = inst.options.descriptioninsidecss;
                            break;
                        case "outside":
                            inst.options.titlecss = inst.options.titleoutsidecss;
                            inst.options.descriptioncss = inst.options.descriptionoutsidecss;
                            break;
                        default:
                            inst.options.titlecss = inst.options.titlebottomcss;
                            inst.options.descriptioncss = inst.options.descriptionbottomcss;
                    }
                    inst.options.titlecss = $.trim(inst.options.titlecss);
                    if (inst.options.titlecss.length > 1) {
                        if (inst.options.titlecss.charAt(0) == "{") inst.options.titlecss = inst.options.titlecss.substring(1);
                        if (inst.options.titlecss.charAt(inst.options.titlecss.length - 1) == "}") inst.options.titlecss = inst.options.titlecss.substring(0, inst.options.titlecss.length - 1);
                    }
                    inst.options.descriptioncss = $.trim(inst.options.descriptioncss);
                    if (inst.options.descriptioncss.length > 1) {
                        if (inst.options.descriptioncss.charAt(0) == "{") inst.options.descriptioncss = inst.options.descriptioncss.substring(1);
                        if (inst.options.descriptioncss.charAt(inst.options.descriptioncss.length - 1) == "}") inst.options.descriptioncss = inst.options.descriptioncss.substring(0, inst.options.descriptioncss.length - 1);
                    }
                    inst.options.errorcss = $.trim(inst.options.errorcss);
                    if (inst.options.errorcss.length > 1) {
                        if (inst.options.errorcss.charAt(0) == "{") inst.options.errorcss = inst.options.errorcss.substring(1);
                        if (inst.options.errorcss.charAt(inst.options.errorcss.length - 1) == "}") inst.options.errorcss = inst.options.errorcss.substring(0, inst.options.errorcss.length - 1);
                    }
                    var styleCss = " .bodynoscroll {height:100%;overflow:hidden;}";
                    styleCss += " #html5box-html5-lightbox .html5-text {" + inst.options.titlecss + "}";
                    styleCss += " #html5box-html5-lightbox .html5-description {" + inst.options.descriptioncss + "}";
                    styleCss += " #html5box-html5-lightbox .html5-error {" + inst.options.errorcss + "}";
                    styleCss +=
                        " .html5-prev-fullscreen {display:block;cursor:pointer;position:absolute;z-index:1;left:" +
                        inst.options.bordersize +
                        "px;right:auto;top:50%;transform:translate(0,-50%)} .html5-next-fullscreen {display:block;cursor:pointer;position:absolute;z-index:1;left:auto;right:" +
                        inst.options.bordersize +
                        "px;top:50%;transform:translate(0,-50%)}";
                    styleCss += " .html5-prev, .html5-next {display:none;cursor:pointer;position:absolute;z-index:1;}";
                    styleCss +=
                        " .html5-prev-inside {left:" + inst.options.bordersize + "px;right:auto;top:50%;transform:translate(0,-50%)} .html5-next-inside {left:auto;right:" + inst.options.bordersize + "px;top:50%;transform:translate(0,-50%)}";
                    styleCss += " .html5-prev-outside {left:0;right:auto;top:50%;transform:translate(-100%,-50%);} .html5-next-outside {left:auto;right:0;top:50%;transform:translate(100%,-50%);}";
                    if (inst.options.showarrowsbottomonsmallscreen) {
                        styleCss += "@media (max-width: " + inst.options.navarrowsbottomscreenwidth + "px) {";
                        if (inst.options.outsidearrowspos == "bottom") styleCss += " .html5-prev-outside {display:block;top:100%;left:0;right:auto;transform:none;} .html5-next-outside {display:block;top:100%;left:auto;right:0;transform:none;}";
                        else if (inst.options.outsidearrowspos == "bottominside")
                            styleCss += " .html5-prev-outside {display:block;top:100%;left:0;right:auto;transform:translate(0,-100%);} .html5-next-outside {display:block;top:100%;left:auto;right:0;transform:translate(0,-100%);}";
                        else styleCss += " .html5-prev-outside {display:block;top:50%;left:0;right:auto;transform:translate(0,-50%);} .html5-next-outside {display:block;top:50%;left:auto;right:0;transform:translate(0,-50%);}";
                        styleCss += " .html5-prev-fullscreen {display:none;} .html5-next-fullscreen {display:none;}";
                        styleCss += "}";
                    }
                    styleCss +=
                        " .html5-prev-inside .mh-icon-left, .html5-next-inside .mh-icon-right { font-size: 20px; color: #ddd; background-color: rgba(0,0,0,0.6); line-height: 36px; width: 36px; height: 36px; text-align: center;} .html5-prev-inside .mh-icon-left:hover, .html5-next-inside .mh-icon-right:hover { color: #fff; } .html5-prev-outside .mh-icon-left, .html5-next-outside .mh-icon-right, .html5-prev-fullscreen .mh-icon-left, .html5-next-fullscreen .mh-icon-right { font-size: 24px; line-height: 36px; color: #ccc; background-color: rgba(0,0,0,0.6); } .html5-prev-outside .mh-icon-left:hover, .html5-next-outside .mh-icon-right:hover, .html5-prev-fullscreen .mh-icon-left:hover, .html5-next-fullscreen .mh-icon-right:hover { color: #fff; }";
                    if (inst.options.titlestyle == "right") {
                        styleCss += "#html5box-html5-lightbox .html5-elem-wrap {width:" + inst.options.imagepercentage + "%;height:100%;} #html5box-html5-lightbox .html5-elem-data-box {min-height:100%;}";
                        styleCss +=
                            "@media (max-width: " +
                            inst.options.sidetobottomscreenwidth +
                            "px) {#html5box-html5-lightbox .html5-elem-wrap {width:100%;height:auto;} #html5box-html5-lightbox .html5-elem-data-box {width:100%;height:auto;min-height:0;}}";
                    } else if (inst.options.titlestyle == "left") {
                        styleCss += "#html5box-html5-lightbox .html5-elem-wrap {height:100%;} #html5box-html5-lightbox .html5-elem-data-box {width:" + String(100 - inst.options.imagepercentage) + "%;min-height:100%;}";
                        styleCss +=
                            "@media (max-width: " +
                            inst.options.sidetobottomscreenwidth +
                            "px) {#html5box-html5-lightbox .html5-elem-wrap {width:100%;height:auto;} #html5box-html5-lightbox .html5-elem-data-box {width:100%;height:auto;min-height:0;}}";
                    }
                    styleCss += ".html5-rotate { border-radius:50%; -webkit-transition:-webkit-transform .4s ease-in; transition: transform .4s ease-in; } .html5-rotate:hover { -webkit-transform: rotate(360deg); transform: rotate(360deg); }";
                    styleCss += "@media (max-width: " + inst.options.navarrowsbottomscreenwidth + "px) {#html5-social {" + inst.options.socialpositionsmallscreen + "}}";
                    if (inst.options.exitanimationduration) inst.options.animationduration = inst.options.exitanimationduration;
                    styleCss +=
                        ".html5box-animated { -webkit-animation-duration:" + inst.options.animationduration + "; animation-duration:" + inst.options.animationduration + "; -webkit-animation-fill-mode: both; animation-fill-mode: both; }";
                    styleCss +=
                        "@-webkit-keyframes html5box-fadeOut { from { opacity: 1; } to { opacity: 0; } } @keyframes html5box-fadeOut { from { opacity: 1; } to { opacity: 0; } } .html5box-fadeOut { -webkit-animation-name: html5box-fadeOut; animation-name: html5box-fadeOut; }";
                    styleCss +=
                        "@-webkit-keyframes html5box-fadeOutDown { from { opacity: 1; } to { opacity: 0; -webkit-transform: translate3d(0, 100%, 0); transform: translate3d(0, 100%, 0); } } @keyframes html5box-fadeOutDown { from { opacity: 1; } to { opacity: 0; -webkit-transform: translate3d(0, 100%, 0); transform: translate3d(0, 100%, 0); } } .html5box-fadeOutDown { -webkit-animation-name: html5box-fadeOutDown; animation-name: html5box-fadeOutDown; }";
                    styleCss +=
                        ".html5box-enter-animated { -webkit-animation-duration:" +
                        inst.options.enteranimationduration +
                        "; animation-duration:" +
                        inst.options.enteranimationduration +
                        "; -webkit-animation-fill-mode: both; animation-fill-mode: both; }";
                    styleCss += " @keyframes html5box-none { } .html5box-none { animation-name: html5box-none; }";
                    styleCss += " @keyframes html5box-fadeIn { from { opacity: 0; } to { opacity: 1; } } .html5box-fadeIn { animation-name: html5box-fadeIn; }";
                    styleCss += " @keyframes html5box-fadeInDown { from { opacity: 0; transform: translate3d(0, -100%, 0); } to { opacity: 1; transform: translate3d(0, 0, 0); } } .html5box-fadeInDown { animation-name: html5box-fadeInDown; }";
                    styleCss += " @keyframes html5box-zoomIn { from { opacity: 0; transform: scale3d(0.3, 0.3, 0.3); } 50% { opacity: 1; } } .html5box-zoomIn { animation-name: html5box-zoomIn; }";
                    styleCss +=
                        " @keyframes html5box-bounceIn { from, 20%, 40%, 60%, 80%, to { animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); } 0% { opacity: 0; transform: scale3d(0.3, 0.3, 0.3); } 20% { transform: scale3d(1.1, 1.1, 1.1); } 40% { transform: scale3d(0.9, 0.9, 0.9); } 60% { opacity: 1; transform: scale3d(1.03, 1.03, 1.03); } 80% { transform: scale3d(0.97, 0.97, 0.97); } to { opacity: 1; transform: scale3d(1, 1, 1); } } .html5box-bounceIn { animation-name: html5box-bounceIn; }";
                    styleCss += " #html5-close .mh-icon-close { font-size: 14px; padding: 4px; color: #333; background-color: #fff; } #html5-close .mh-icon-close:hover { color: #000; }";
                    styleCss += " #html5-close-fullscreen .mh-icon-close { font-size: 24px; padding: 4px; color: #eee; background-color: rgba(0,0,0,0.7); } #html5-close-fullscreen .mh-icon-close:hover { color: #fff; }";
                    styleCss += " .html5-nav-showcontrol .mh-icon-th-thumb { color: #ddd; font-size: 16px; } .html5-nav-showcontrol .mh-icon-th-thumb:hover { color: #fff; }";
                    $("head").append("<style type='text/css' data-creator='html5box-html5-lightbox'>" + styleCss + "</style>");
                    var elemheight = inst.options.elemautoheight ? "auto" : "100%";
                    inst.$lightbox = $(
                        "<div id='html5box-html5-lightbox' style='display:none;top:0px;left:0px;width:100%;height:100%;z-index:9999998;text-align:center;'>" +
                            "<div id='html5-lightbox-overlay' style='display:block;position:absolute;top:0px;left:0px;width:100%;min-height:100%;background-color:" +
                            inst.options.overlaybgcolor +
                            ";opacity:" +
                            inst.options.overlayopacity +
                            ";filter:alpha(opacity=" +
                            Math.round(inst.options.overlayopacity * 100) +
                            ");'></div>" +
                            "<div id='html5-lightbox-box' style='display:block;position:relative;margin:0px auto;'>" +
                            "<div class='html5-elem-box' style='display:block;outline:none;position:relative;width:100%;overflow-x:hidden;overflow-y:auto;height:" +
                            elemheight +
                            ";margin:0px auto;text-align:center;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;'>" +
                            "<div class='html5-elem-wrap' style='display:block;position:relative;overflow:hidden;margin:0px auto;text-align:center;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;background-color:" +
                            inst.options.bgcolor +
                            ";'>" +
                            "<div class='html5-loading' style='display:none;position:absolute;text-align:center;'></div>" +
                            "<div class='html5-error-box html5-error' style='display:none;position:absolute;padding:" +
                            inst.options.bordersize +
                            "px;text-align:center;width:" +
                            inst.options.errorwidth +
                            "px;height:" +
                            inst.options.errorheight +
                            "px;'>" +
                            "The requested content cannot be loaded.<br />Please try again later." +
                            "</div>" +
                            "<div class='html5-image' style='display:none;position:relative;top:0px;left:0px;width:100%;height:100%;overflow:auto;" +
                            (inst.options.iequirksmode ? "margin" : "padding") +
                            ":" +
                            inst.options.bordersize +
                            "px;text-align:center;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;'></div>" +
                            "</div>" +
                            "</div>" +
                            "<div id='html5-watermark' style='display:none;position:absolute;left:" +
                            String(inst.options.bordersize + 2) +
                            "px;top:" +
                            String(inst.options.bordersize + 2) +
                            "px;'></div>" +
                            "</div>" +
                            "</div>"
                    );
                    inst.options.positionFixed = inst.options.supportCSSPositionFixed && inst.options.responsive && !inst.options.iequirksmode;
                    if (inst.options.useabsolutepos || (inst.options.useabsoluteposonmobile && inst.options.isMobile)) inst.options.positionFixed = false;
                    inst.$lightbox.css({ position: inst.options.positionFixed ? "fixed" : "absolute" });
                    inst.$lightbox.appendTo("body");
                    inst.$lightboxBox = $("#html5-lightbox-box", inst.$lightbox);
                    inst.$elem = $(".html5-elem-box", inst.$lightbox);
                    inst.$elemWrap = $(".html5-elem-wrap", inst.$lightbox);
                    inst.$loading = $(".html5-loading", inst.$lightbox);
                    inst.$error = $(".html5-error-box", inst.$lightbox);
                    inst.$image = $(".html5-image", inst.$lightbox);
                    if (inst.options.loadingusefont) {
                        inst.$loading.css({
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            "font-size": "24px",
                            "line-height": "44px",
                            padding: "10px",
                            color: inst.options.loadingfontcolor,
                            "background-color": inst.options.loadingfontbg,
                        });
                        inst.$loading.append('<div class="mh-spinicon animate-spin ' + inst.options.loadingfontname + '"></div>');
                    } else inst.$loading.css({ top: "0", left: "0", width: "100%", height: "100%", background: 'url("' + inst.options.loadingimage + '") no-repeat center center' });
                    if (inst.options.fullscreenmode && inst.options.fullscreennomargin) inst.$elem.css({ overflow: "hidden" });
                    var elemText = "<div class='html5-elem-data-box' style='display:none;box-sizing:border-box;'><div class='html5-text' style='display:block;overflow:hidden;'></div></div>";
                    if (inst.options.titlestyle == "left") inst.$elem.prepend(elemText);
                    else if (inst.options.titlestyle == "outside") inst.$lightbox.append(elemText);
                    else inst.$elem.append(elemText);
                    inst.$elemData = $(".html5-elem-data-box", inst.$lightbox);
                    inst.$text = $(".html5-text", inst.$lightbox);
                    if (inst.options.borderradius > 0) {
                        inst.$elem.css({ "border-radius": inst.options.borderradius + "px", "-moz-border-radius": inst.options.borderradius + "px", "-webkit-border-radius": inst.options.borderradius + "px" });
                        if (inst.options.titlestyle == "inside")
                            inst.$elemWrap.css({ "border-radius": inst.options.borderradius + "px", "-moz-border-radius": inst.options.borderradius + "px", "-webkit-border-radius": inst.options.borderradius + "px" });
                        else if (inst.options.titlestyle == "bottom") {
                            inst.$elemWrap.css({
                                "border-top-left-radius": inst.options.borderradius + "px",
                                "-moz-top-left-border-radius": inst.options.borderradius + "px",
                                "-webkit-top-left-border-radius": inst.options.borderradius + "px",
                                "border-top-right-radius": inst.options.borderradius + "px",
                                "-moz-top-right-border-radius": inst.options.borderradius + "px",
                                "-webkit-top-right-border-radius": inst.options.borderradius + "px",
                            });
                            inst.$elemData.css({
                                "border-bottom-left-radius": inst.options.borderradius + "px",
                                "-moz-top-bottom-border-radius": inst.options.borderradius + "px",
                                "-webkit-bottom-left-border-radius": inst.options.borderradius + "px",
                                "border-bottom-right-radius": inst.options.borderradius + "px",
                                "-moz-bottom-right-border-radius": inst.options.borderradius + "px",
                                "-webkit-bottom-right-border-radius": inst.options.borderradius + "px",
                            });
                        }
                    }
                    if (inst.options.titlestyle == "right" || inst.options.titlestyle == "left") {
                        inst.$lightboxBox.css({ "background-color": inst.options.bgcolor });
                        if (inst.options.titlestyle == "right") {
                            inst.$elemWrap.css({ position: "relative", float: "left" });
                            inst.$elemData.css({ position: "relative", overflow: "hidden", padding: inst.options.bordersize + "px" });
                        } else {
                            inst.$elemWrap.css({ position: "relative", overflow: "hidden" });
                            inst.$elemData.css({ position: "relative", float: "left", padding: inst.options.bordersize + "px" });
                        }
                    } else if (inst.options.titlestyle == "inside") {
                        inst.$elemData.css({
                            position: "absolute",
                            margin: 0,
                            padding: 0,
                            bottom: inst.options.bordersize + "px",
                            left: inst.options.bordersize + "px",
                            right: inst.options.bordersize + "px",
                            "background-color": "#333",
                            "background-color": "rgba(51, 51, 51, 0.6)",
                        });
                        if (inst.options.showonmouseoverinside) inst.$elemData.css({ opacity: 0 });
                        inst.$text.css({ padding: inst.options.bordersize + "px " + 2 * inst.options.bordersize + "px" });
                    } else if (inst.options.titlestyle == "outside") inst.$elemData.css({ position: "relative", width: "100%", height: "auto" });
                    else {
                        inst.$elemData.css({
                            position: "relative",
                            width: "100%",
                            height: inst.options.barautoheight ? "auto" : inst.options.barheight + "px",
                            padding: "0 0 " + inst.options.bordersize + "px" + " 0",
                            "background-color": inst.options.bgcolor,
                            "text-align": "left",
                        });
                        if (!inst.options.fullscreenmode || !inst.options.fullscreennomargin) inst.$text.css({ margin: "0 " + inst.options.bordersize + "px" });
                    }
                    if (inst.options.showsocial) {
                        var socialCode = '<div id="html5-social" style="display:none;' + inst.options.socialposition + '">';
                        var socialBtnCSS = (inst.options.socialdirection == "horizontal" ? "display:inline-block;" : "display:block;") + "margin:4px;";
                        var socialCSS =
                            "display:table-cell;width:" +
                            inst.options.socialbuttonsize +
                            "px;height:" +
                            inst.options.socialbuttonsize +
                            "px;font-size:" +
                            inst.options.socialbuttonfontsize +
                            "px;border-radius:50%;color:#fff;vertical-align:middle;text-align:center;cursor:pointer;padding:0;";
                        if (inst.options.showemail)
                            socialCode +=
                                '<div class="html5-social-btn' +
                                (inst.options.socialrotateeffect ? " html5-rotate" : "") +
                                ' html5-social-email" style="' +
                                socialBtnCSS +
                                '"><div class="mh-icon-mail" style="' +
                                socialCSS +
                                'background-color:#4d83ff;"></div></div>';
                        if (inst.options.showfacebook)
                            socialCode +=
                                '<div class="html5-social-btn' +
                                (inst.options.socialrotateeffect ? " html5-rotate" : "") +
                                ' html5-social-facebook" style="' +
                                socialBtnCSS +
                                '"><div class="mh-icon-facebook" style="' +
                                socialCSS +
                                'background-color:#3b5998;"></div></div>';
                        if (inst.options.showtwitter)
                            socialCode +=
                                '<div class="html5-social-btn' +
                                (inst.options.socialrotateeffect ? " html5-rotate" : "") +
                                ' html5-social-twitter" style="' +
                                socialBtnCSS +
                                '"><div class="mh-icon-twitter" style="' +
                                socialCSS +
                                'background-color:#03b3ee;"></div></div>';
                        if (inst.options.showpinterest)
                            socialCode +=
                                '<div class="html5-social-btn' +
                                (inst.options.socialrotateeffect ? " html5-rotate" : "") +
                                ' html5-social-pinterest" style="' +
                                socialBtnCSS +
                                '"><div class="mh-icon-pinterest" style="' +
                                socialCSS +
                                'background-color:#c92228;"></div></div>';
                        socialCode += '<div style="clear:both;"></div></div>';
                        inst.$lightboxBox.append(socialCode);
                        $(".html5-social-btn", inst.$lightbox).click(function () {
                            var shareUrl = inst.options.sharemediaurl
                                ? inst.currentElem[ELEM_HREF]
                                : window.location.href + (window.location.href.indexOf("?") < 0 ? "?" : "&") + "html5lightboxshare=" + encodeURIComponent(inst.currentElem[ELEM_HREF]);
                            var shareTitle = inst.currentElem[ELEM_TITLE];
                            var shareMedia = inst.currentElem[ELEM_HREF];
                            if (inst.currentElem[ELEM_TYPE] == 0) shareMedia = inst.absoluteUrl(inst.currentElem[ELEM_HREF]);
                            else if (inst.currentElem[ELEM_TYPE] == 3) shareMedia = "https://img.youtube.com/vi/" + inst.getYoutubeId(inst.currentElem[ELEM_HREF]) + "/0.jpg";
                            else {
                                var lightboxLink = $('.html5lightbox[href="' + inst.currentElem[ELEM_HREF] + '"]');
                                if (lightboxLink.length > 0)
                                    if (lightboxLink.data("shareimage") && lightboxLink.data("shareimage").length > 0) shareMedia = inst.absoluteUrl(lightboxLink.data("shareimage"));
                                    else if (lightboxLink.data("thumbnail") && lightboxLink.data("thumbnail").length > 0) shareMedia = inst.absoluteUrl(lightboxLink.data("thumbnail"));
                                    else {
                                        var lightboxImg = $("img", lightboxLink);
                                        if (lightboxImg.length > 0) shareMedia = inst.absoluteUrl(lightboxImg.attr("src"));
                                    }
                            }
                            var isVideo =
                                inst.currentElem[ELEM_TYPE] == 2 ||
                                inst.currentElem[ELEM_TYPE] == 3 ||
                                inst.currentElem[ELEM_TYPE] == 4 ||
                                inst.currentElem[ELEM_TYPE] == 8 ||
                                inst.currentElem[ELEM_TYPE] == 9 ||
                                inst.currentElem[ELEM_TYPE] == 11 ||
                                inst.currentElem[ELEM_TYPE] == 12;
                            if (!shareTitle) shareTitle = inst.options.sharetextprefix;
                            else shareTitle = inst.html2Text(shareTitle);
                            if ($(this).hasClass("html5-social-facebook")) window.open("https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(shareUrl) + "&t=" + encodeURIComponent(shareTitle), "_blank");
                            else if ($(this).hasClass("html5-social-twitter")) window.open("https://twitter.com/share?url=" + encodeURIComponent(shareUrl) + "&text=" + encodeURIComponent(shareTitle), "_blank");
                            else if ($(this).hasClass("html5-social-pinterest"))
                                window.open(
                                    "https://pinterest.com/pin/create/bookmarklet/?media=" +
                                        encodeURIComponent(shareMedia) +
                                        "&url=" +
                                        encodeURIComponent(shareUrl) +
                                        "&description=" +
                                        encodeURIComponent(shareTitle) +
                                        "&is_video=" +
                                        (isVideo ? "true" : "false"),
                                    "_blank"
                                );
                            else if ($(this).hasClass("html5-social-email")) window.open("mailto:?subject=" + encodeURIComponent(shareTitle) + "&body=" + encodeURIComponent(inst.options.sharetextprefix + " " + shareUrl));
                            return false;
                        });
                    }
                    if (inst.options.isTouch && inst.options.navarrowsalwaysshowontouch && inst.options.navarrowspos == "inside") inst.options.navarrowspos = "side";
                    inst.$lightboxBox.append("<div class='html5-next'></div><div class='html5-prev'></div>");
                    inst.$next = $(".html5-next", inst.$lightbox);
                    inst.$prev = $(".html5-prev", inst.$lightbox);
                    if (inst.options.fullscreenmode || inst.options.navarrowspos == "browserside") {
                        inst.$lightbox.append("<div class='html5-next-fullscreen'></div><div class='html5-prev-fullscreen'></div>");
                        inst.$nextfullscreen = $(".html5-next-fullscreen", inst.$lightbox);
                        inst.$prevfullscreen = $(".html5-prev-fullscreen", inst.$lightbox);
                        inst.$next.addClass("html5-next-outside");
                        inst.$prev.addClass("html5-prev-outside");
                    } else {
                        inst.$next.addClass(inst.options.navarrowspos == "side" ? "html5-next-outside" : "html5-next-inside");
                        inst.$prev.addClass(inst.options.navarrowspos == "side" ? "html5-prev-outside" : "html5-prev-inside");
                        if (inst.options.navarrowspos == "side" || inst.options.alwaysshownavarrows) {
                            inst.$next.css({ display: "block" });
                            inst.$prev.css({ display: "block" });
                        }
                    }
                    if (inst.options.arrowsusefont) {
                        inst.$next.append('<div class="mh-icon-right"></div>');
                        inst.$prev.append('<div class="mh-icon-left"></div>');
                        if (inst.$nextfullscreen) {
                            inst.$nextfullscreen.append('<div class="mh-icon-right"></div>');
                            inst.$prevfullscreen.append('<div class="mh-icon-left"></div>');
                        }
                    } else {
                        inst.$next.append("<img alt='' src='" + inst.options.nextimage + "'>");
                        inst.$prev.append("<img alt='' src='" + inst.options.previmage + "'>");
                        if (inst.$nextfullscreen) {
                            inst.$nextfullscreen.append("<img alt='' src='" + inst.options.fullscreennextimage + "'>");
                            inst.$prevfullscreen.append("<img alt='' src='" + inst.options.fullscreenprevimage + "'>");
                        }
                    }
                    if (inst.options.fullscreenmode || inst.options.closepos == "topright") {
                        inst.$lightbox.append(
                            "<button id='html5-close-fullscreen' style='display:block;cursor:pointer;position:absolute;top:0;right:0;margin-top:0;margin-right:0;margin-bottom:0;margin-left:0;padding:0;background:transparent;border:none;'></button>"
                        );
                        inst.$close = $("#html5-close-fullscreen", inst.$lightbox);
                    } else {
                        inst.$lightboxBox.append(
                            "<button id='html5-close' style='display:none;cursor:pointer;position:absolute;top:0;right:0;" +
                                (inst.options.closepos == "outside" ? "margin-top:-16px;margin-right:-16px;margin-bottom:0;margin-left:0;padding:0;background:transparent;border:none;" : "") +
                                "'></button>"
                        );
                        inst.$close = $("#html5-close", inst.$lightbox);
                    }
                    if (inst.options.closeusefont && (inst.options.fullscreenmode || inst.options.closepos == "topright" || inst.options.closepos == "inside")) inst.$close.append('<div class="mh-icon-close"></div>');
                    else inst.$close.append("<img alt='' src='" + (inst.options.fullscreenmode || inst.options.closepos == "topright" ? inst.options.fullscreencloseimage : inst.options.closeimage) + "'>");
                    if (inst.options.titlestyle == "inside" && inst.options.showonmouseoverinside)
                        inst.$lightboxBox.hover(
                            function () {
                                if (inst.currentElem[ELEM_TYPE] == 0 || !inst.options.showinsidetitleforimageonly) inst.$elemData.animate({ opacity: 1 }, 400);
                            },
                            function () {
                                inst.$elemData.animate({ opacity: 0 }, 400);
                            }
                        );
                    inst.$watermark = $("#html5-watermark", inst.$lightbox);
                    
                    if (inst.options.closeonoverlay) $("#html5-lightbox-overlay", inst.$lightbox).click(inst.finish);
                    inst.$close.click(inst.finish);
                    inst.$next.click(function () {
                        inst.nextArrowClicked();
                    });
                    inst.$prev.click(function () {
                        inst.prevArrowClicked();
                    });
                    if (inst.$nextfullscreen) {
                        inst.$nextfullscreen.click(function () {
                            inst.nextArrowClicked();
                        });
                        inst.$prevfullscreen.click(function () {
                            inst.prevArrowClicked();
                        });
                    }
                    $(window).resize(function () {
                        if (inst.options.isIOS && !inst.options.mobileresizeevent) return;
                        clearTimeout(inst.options.resizeTimeout);
                        inst.options.resizeTimeout = setTimeout(function () {
                            inst.resizeWindow();
                        }, inst.options.resizedelay);
                    });
                    $(window).scroll(function () {
                        if (inst.options.isIOS && !inst.options.mobileresizeevent) return;
                        inst.scrollBox();
                    });
                    $(window).on("orientationchange", function (e) {
                        if (inst.options.isMobile) {
                            clearTimeout(inst.options.resizeTimeout);
                            inst.options.resizeTimeout = setTimeout(function () {
                                inst.resizeWindow();
                            }, inst.options.resizedelay);
                        }
                    });
                    if (inst.options.enabletouchswipe) inst.enableSwipe();
                };
                inst.html2Text = function (html) {
                    var tag = document.createElement("div");
                    tag.innerHTML = html;
                    return tag.innerText;
                };
                inst.slideTimer = function (interval, callback, updatecallback) {
                    var timerInstance = this;
                    timerInstance.timeout = interval;
                    var updateinterval = 50;
                    var updateTimerId = null;
                    var runningTime = 0;
                    var paused = false;
                    var started = false;
                    var startedandpaused = false;
                    this.pause = function () {
                        if (started) {
                            paused = true;
                            clearInterval(updateTimerId);
                        }
                    };
                    this.resume = function (forceresume) {
                        if (startedandpaused && !forceresume) return;
                        startedandpaused = false;
                        if (started && paused) {
                            paused = false;
                            updateTimerId = setInterval(function () {
                                runningTime += updateinterval;
                                if (runningTime > timerInstance.timeout) {
                                    clearInterval(updateTimerId);
                                    if (callback) callback();
                                }
                                if (updatecallback) updatecallback(runningTime / timerInstance.timeout);
                            }, updateinterval);
                        }
                    };
                    this.stop = function () {
                        clearInterval(updateTimerId);
                        if (updatecallback) updatecallback(-1);
                        runningTime = 0;
                        paused = false;
                        started = false;
                    };
                    this.start = function () {
                        runningTime = 0;
                        paused = false;
                        started = true;
                        updateTimerId = setInterval(function () {
                            runningTime += updateinterval;
                            if (runningTime > timerInstance.timeout) {
                                clearInterval(updateTimerId);
                                if (callback) callback();
                            }
                            if (updatecallback) updatecallback(runningTime / timerInstance.timeout);
                        }, updateinterval);
                    };
                    this.startandpause = function () {
                        runningTime = 0;
                        paused = true;
                        started = true;
                        startedandpaused = true;
                    };
                    return this;
                };
                inst.updateTimer = function (percent) {
                    var w = Math.round(percent * 100);
                    if (w > 100) w = 100;
                    if (w < 0) w = 0;
                    $(".html5-timer", inst.$lightbox).css({ display: "block", width: w + "%" });
                };
                inst.initSlide = function () {
                    inst.autosliding = false;
                    inst.slideTimeout = inst.slideTimer(
                        inst.options.slideinterval,
                        function () {
                            inst.gotoSlide(-1);
                        },
                        inst.options.showtimer
                            ? function (percent) {
                                inst.updateTimer(percent);
                            }
                            : null
                    );
                    if (inst.options.autoslide) {
                        inst.slideTimeout.stop();
                        inst.autosliding = true;
                    }
                };
                inst.nextArrowClicked = function () {
                    if (inst.options.nextElem <= inst.options.curElem)
                        if (inst.options.onlastarrowclicked && window[inst.options.onlastarrowclicked] && typeof window[inst.options.onlastarrowclicked] == "function") window[inst.options.onlastarrowclicked]();
                    inst.gotoSlide(-1);
                };
                inst.prevArrowClicked = function () {
                    if (inst.options.prevElem >= inst.options.curElem)
                        if (inst.options.onfirstarrowclicked && window[inst.options.onfirstarrowclicked] && typeof window[inst.options.onfirstarrowclicked] == "function") window[inst.options.onfirstarrowclicked]();
                    inst.gotoSlide(-2);
                };
                inst.calcNextPrevElem = function () {
                    inst.options.nextElem = -1;
                    inst.options.prevElem = -1;
                    inst.options.inGroup = false;
                    inst.options.groupIndex = 0;
                    inst.options.groupCount = 0;
                    var group = inst.elemArray[inst.options.curElem][ELEM_GROUP];
                    for (var i = 0; i < inst.elemArray.length; i++)
                        if (inst.matchGroup(group, inst.elemArray[i][ELEM_GROUP])) {
                            if (i == inst.options.curElem) inst.options.groupIndex = inst.options.groupCount;
                            inst.options.groupCount++;
                        }
                    var j,
                        curGroup = inst.elemArray[inst.options.curElem][ELEM_GROUP];
                    if (curGroup != undefined && curGroup != null) {
                        for (j = inst.options.curElem + 1; j < inst.elemArray.length; j++)
                            if (inst.matchGroup(curGroup, inst.elemArray[j][ELEM_GROUP])) {
                                inst.options.nextElem = j;
                                break;
                            }
                        if (inst.options.nextElem < 0)
                            for (j = 0; j < inst.options.curElem; j++)
                                if (inst.matchGroup(curGroup, inst.elemArray[j][ELEM_GROUP])) {
                                    inst.options.nextElem = j;
                                    break;
                                }
                        if (inst.options.nextElem >= 0) {
                            for (j = inst.options.curElem - 1; j >= 0; j--)
                                if (inst.matchGroup(curGroup, inst.elemArray[j][ELEM_GROUP])) {
                                    inst.options.prevElem = j;
                                    break;
                                }
                            if (inst.options.prevElem < 0)
                                for (j = inst.elemArray.length - 1; j > inst.options.curElem; j--)
                                    if (inst.matchGroup(curGroup, inst.elemArray[j][ELEM_GROUP])) {
                                        inst.options.prevElem = j;
                                        break;
                                    }
                        }
                    }
                    if (inst.options.nextElem >= 0 || inst.options.prevElem >= 0) inst.options.inGroup = true;
                };
                inst.calcBoxPosition = function (initW, initH) {
                    var boxW = initW + 2 * inst.options.bordersize;
                    var boxH = initH + 2 * inst.options.bordersize;
                    var navH = inst.options.shownavigation && inst.navvisible ? inst.options.navheight : 0;
                    var winH = inst.getWinH();
                    var boxT = Math.round((winH - navH) / 2 - boxH / 2);
                    if (inst.options.titlestyle == "bottom") boxT -= Math.round(inst.options.barheight / 2);
                    var topmargin = $(window).height() < inst.options.smallscreenheight ? inst.options.bordertopmarginsmall : inst.options.bordertopmargin;
                    if (boxT < topmargin) boxT = topmargin;
                    if (inst.options.insideiframe && window.self != window.top) {
                        boxT = inst.options.iframetopmargin > 0 ? inst.options.iframetopmargin : topmargin;
                        if (inst.options.iframesamedomain && parent.window.jQuery && parent.window.jQuery("#" + inst.options.iframeid).length) {
                            var iframetop = parent.window.jQuery("#" + inst.options.iframeid).offset().top;
                            var parentscroll = parent.window.document.body.scrollTop;
                            boxT += parentscroll > iframetop ? parentscroll - iframetop : 0;
                        }
                    }
                    return [boxW, boxH, boxT];
                };
                inst.hideNavArrows = function () {
                    var showPrev = false;
                    var showNext = false;
                    if (inst.options.inGroup) {
                        if (inst.options.arrowloop || (!inst.options.arrowloop && inst.options.prevElem < inst.options.curElem)) showPrev = true;
                        if (inst.options.arrowloop || (!inst.options.arrowloop && inst.options.nextElem > inst.options.curElem)) showNext = true;
                    }
                    if (!showPrev) {
                        inst.$prev.css({ display: "none" });
                        if (inst.$prevfullscreen) inst.$prevfullscreen.css({ display: "none" });
                    }
                    if (!showNext) {
                        inst.$next.css({ display: "none" });
                        if (inst.$nextfullscreen) inst.$nextfullscreen.css({ display: "none" });
                    }
                };
                inst.resizePositionFixed = function () {
                    if (!inst.options.positionFixed) inst.$lightbox.css({ "padding-top": $(window).scrollTop() + "px", height: Math.max($(document).height(), $(window).height()) + "px" });
                };
                inst.adjustLightboxPos = function (w, h) {
                    var winWidth = $(window).width();
                    var boxPos = inst.calcBoxPosition(w, h);
                    var boxW = boxPos[0];
                    var boxH = boxPos[1];
                    var boxT = boxPos[2];
                    if (inst.options.iequirksmode) inst.$lightboxBox.css({ top: boxT });
                    else inst.$lightboxBox.css({ "margin-top": boxT });
                    inst.resizePositionFixed();
                    if ((inst.options.titlestyle == "left" || inst.options.titlestyle == "right") && winWidth > inst.options.sidetobottomscreenwidth) {
                        inst.$lightboxBox.css({ width: boxW, height: boxH });
                        inst.$elemWrap.css({ width: inst.options.imagepercentage + "%", height: "100%" });
                    } else {
                        inst.$lightboxBox.css({ width: boxW, height: "auto" });
                        inst.$elemWrap.css({ width: boxW, height: boxH });
                    }
                };
                inst.readClassOptions = function (element) {
                    var classoptions = {};
                    var classList = $(element).attr("class");
                    if (classList) {
                        classList = classList.split(/\s+/);
                        $.each(classList, function (index, className) {
                            if (className && className.toLowerCase().indexOf("html5lightbox-") == 0) {
                                var names = className.split("-");
                                if (names.length == 3 && names[2]) {
                                    var val = names[2];
                                    if (val.toLowerCase() == "true") val = true;
                                    else if (val.toLowerCase() == "false") val = false;
                                    else if (/^\d+$/.test(val)) val = parseInt(val);
                                    else if (!isNaN(val)) val = parseFloat(val);
                                    classoptions[names[1]] = val;
                                }
                            }
                        });
                    }
                    return classoptions;
                };
                inst.clickHandler = function () {
                    var $this = $(this);
                    var dataoptions = {};
                    $.each($this.data(), function (key, value) {
                        dataoptions[key.toLowerCase()] = value;
                    });
                    inst.options = $.extend(inst.options, inst.defaultoptions, dataoptions);
                    var classoptions = inst.readClassOptions(this);
                    inst.options = $.extend(inst.options, classoptions);
                    $(window).trigger("html5lightbox.lightboxshow");
                    inst.init();
                    if (inst.elemArray.length <= 0) return true;
                    inst.hideObjects();
                    for (var i = 0; i < inst.elemArray.length; i++) if (inst.elemArray[i][ELEM_HREF] == $this.attr("href")) break;
                    if (i == inst.elemArray.length) return true;
                    inst.options.curElem = i;
                    inst.calcNextPrevElem();
                    inst.reset();
                    inst.$lightbox.show();
                    inst.adjustLightboxPos(inst.options.loadingwidth, inst.options.loadingheight);
                    inst.loadCurElem();
                    return false;
                };
                inst.loadThumbnail = function (src, index, title) {
                    var imgLoader = new Image();
                    $(imgLoader).on("load", function () {
                        var style;
                        if (this.width / this.height <= inst.options.thumbwidth / inst.options.thumbheight) style = "width:100%;";
                        else style = "height:100%;";
                        $(".html5-nav-thumb")
                            .eq(index)
                            .html("<img alt='" + inst.html2Text(title) + "' style='" + style + "' src='" + src + "' />");
                    });
                    imgLoader.src = src;
                };
                inst.matchGroup = function (curGroup, elemGroup) {
                    if (inst.options.showall) return true;
                    if (!curGroup || !elemGroup) return false;
                    var curs = curGroup.split(":");
                    var elems = elemGroup.split(":");
                    var result = false;
                    for (var i in curs)
                        if ($.inArray(curs[i], elems) > -1) {
                            result = true;
                            break;
                        }
                    return result;
                };
                inst.getWinH = function () {
                    return inst.options.insideiframe && window.self != window.top && inst.options.iframesamedomain ? $(parent.window).height() : $(window).height();
                };
                inst.showNavigation = function () {
                    if (!inst.options.shownavigation) return;
                    if (((inst.options.isIPhone || inst.options.isAndroid) && inst.options.hidenavigationonmobile) || (inst.options.isIPad && inst.options.hidenavigationonipad)) return;
                    if (!inst.currentElem || !inst.currentElem[ELEM_GROUP]) return;
                    var i;
                    var showNav = false;
                    var group = inst.currentElem[ELEM_GROUP];
                    for (i = 0; i < inst.elemArray.length; i++)
                        if (inst.matchGroup(group, inst.elemArray[i][ELEM_GROUP]))
                            if (inst.elemArray[i][ELEM_THUMBNAIL] && inst.elemArray[i][ELEM_THUMBNAIL].length > 0) {
                                showNav = true;
                                break;
                            }
                    if (!showNav) return;
                    inst.options.navheight = inst.options.thumbheight + inst.options.thumbtopmargin + inst.options.thumbbottommargin;
                    if ($(".html5-nav").length > 0) return;
                    var posCss = inst.options.hidenavdefault ? "top:100%;bottom:auto;left:0;right:0;" : "top:auto;bottom:0;left:0;right:0;";
                    var posType = inst.options.positionFixed ? "fixed" : "absolute";
                    $("body").append(
                        "<div id='html5box-html5-lightbox-nav' class='html5-nav' style='display:block;position:" +
                            posType +
                            ";" +
                            posCss +
                            "width:100%;height:" +
                            inst.options.navheight +
                            "px;z-index:9999999;" +
                            (inst.options.navbgcolor ? "background-color:" + inst.options.navbgcolor + ";" : "") +
                            "'>" +
                            "<div class='html5-nav-container' style='position:relative;margin:" +
                            inst.options.thumbtopmargin +
                            "px auto " +
                            inst.options.thumbbottommargin +
                            "px;'>" +
                            "<div class='html5-nav-prev' style='display:block;position:absolute;cursor:pointer;width:" +
                            inst.options.navbuttonwidth +
                            'px;height:100%;left:0;top:0;background:url("' +
                            inst.options.navarrowsprevimage +
                            "\") no-repeat left center;'></div>" +
                            "<div class='html5-nav-mask' style='display:block;position:relative;margin:0 auto;overflow:hidden;'>" +
                            "<div class='html5-nav-list'></div>" +
                            "</div>" +
                            "<div class='html5-nav-next' style='display:block;position:absolute;cursor:pointer;width:" +
                            inst.options.navbuttonwidth +
                            'px;height:100%;right:0;top:0;background:url("' +
                            inst.options.navarrowsnextimage +
                            "\") no-repeat right center;'></div>" +
                            "</div>" +
                            "</div>"
                    );
                    inst.navvisible = inst.options.hidenavdefault ? false : true;
                    if (inst.options.shownavcontrol) {
                        $(".html5-nav").append('<div class="html5-nav-showcontrol" style="position:absolute;display:block;cursor:pointer;bottom:100%;right:12px;margin:0;padding:0;"></div>');
                        if (inst.options.navusefont) $(".html5-nav-showcontrol").append('<div class="mh-icon-th-thumb"></div>');
                        else $(".html5-nav-showcontrol").append('<img alt="" src="' + inst.options.navcontrolimage + '"></img>');
                        $(".html5-nav-showcontrol").click(function () {
                            var winH = inst.getWinH();
                            var navH = $(".html5-nav").height();
                            if (inst.navvisible) {
                                inst.navvisible = false;
                                $(".html5-nav")
                                    .css({ top: winH - navH + "px", bottom: "auto" })
                                    .animate({ top: winH + "px" }, function () {
                                        $(this).css({ top: "100%", bottom: "auto" });
                                    });
                            } else {
                                inst.navvisible = true;
                                var navH = $(".html5-nav").height();
                                $(".html5-nav")
                                    .css({ top: winH + "px", bottom: "auto" })
                                    .animate({ top: winH - navH + "px" }, function () {
                                        $(this).css({ top: "auto", bottom: 0 });
                                    });
                            }
                            inst.resizeWindow();
                        });
                    }
                    var index = 0;
                    for (i = 0; i < inst.elemArray.length; i++)
                        if (inst.matchGroup(group, inst.elemArray[i][ELEM_GROUP]))
                            if (inst.elemArray[i][ELEM_THUMBNAIL] && inst.elemArray[i][ELEM_THUMBNAIL].length > 0) {
                                $(".html5-nav-list").append(
                                    "<div class='html5-nav-thumb' data-arrayindex='" +
                                        i +
                                        "' style='float:left;overflow:hidden;cursor:pointer;opacity:" +
                                        inst.options.thumbopacity +
                                        ";margin: 0 " +
                                        inst.options.thumbgap / 2 +
                                        "px;width:" +
                                        inst.options.thumbwidth +
                                        "px;height:" +
                                        inst.options.thumbheight +
                                        "px;border:" +
                                        inst.options.thumbborder +
                                        "px solid " +
                                        inst.options.thumbbordercolor +
                                        ";'></div>"
                                );
                                this.loadThumbnail(inst.elemArray[i][ELEM_THUMBNAIL], index, inst.elemArray[i][ELEM_TITLE]);
                                index++;
                            }
                    $(".html5-nav-thumb").hover(
                        function () {
                            $(this).css({ opacity: 1 });
                            $(this).css({ border: inst.options.thumbborder + "px solid " + inst.options.thumbhighlightbordercolor });
                        },
                        function () {
                            $(this).css({ opacity: inst.options.thumbopacity });
                            $(this).css({ border: inst.options.thumbborder + "px solid " + inst.options.thumbbordercolor });
                        }
                    );
                    $(".html5-nav-thumb").click(function () {
                        var index = $(this).data("arrayindex");
                        if (index >= 0) inst.gotoSlide(index);
                    });
                    inst.options.totalwidth = index * (inst.options.thumbgap + inst.options.thumbwidth + 2 * inst.options.thumbborder);
                    $(".html5-nav-list")
                        .css({ display: "block", position: "relative", "margin-left": 0, width: inst.options.totalwidth + "px" })
                        .append("<div style='clear:both;'></div>");
                    var $navMask = $(".html5-nav-mask");
                    var $navPrev = $(".html5-nav-prev");
                    var $navNext = $(".html5-nav-next");
                    $navPrev.click(function () {
                        var $navList = $(".html5-nav-list");
                        var $navNext = $(".html5-nav-next");
                        var winWidth = $(window).width();
                        var maskWidth = winWidth - 2 * inst.options.navbuttonwidth;
                        var marginLeft = parseInt($navList.css("margin-left")) + maskWidth;
                        if (marginLeft >= 0) {
                            marginLeft = 0;
                            $(this).css({ "background-position": "center left" });
                        } else $(this).css({ "background-position": "center right" });
                        if (marginLeft <= maskWidth - inst.options.totalwidth) $navNext.css({ "background-position": "center left" });
                        else $navNext.css({ "background-position": "center right" });
                        $navList.animate({ "margin-left": marginLeft });
                    });
                    $navNext.click(function () {
                        var $navList = $(".html5-nav-list");
                        var $navPrev = $(".html5-nav-prev");
                        var winWidth = $(window).width();
                        var maskWidth = winWidth - 2 * inst.options.navbuttonwidth;
                        var marginLeft = parseInt($navList.css("margin-left")) - maskWidth;
                        if (marginLeft <= maskWidth - inst.options.totalwidth) {
                            marginLeft = maskWidth - inst.options.totalwidth;
                            $(this).css({ "background-position": "center left" });
                        } else $(this).css({ "background-position": "center right" });
                        if (marginLeft >= 0) $navPrev.css({ "background-position": "center left" });
                        else $navPrev.css({ "background-position": "center right" });
                        $navList.animate({ "margin-left": marginLeft });
                    });
                    var winWidth = $(window).width();
                    if (inst.options.totalwidth <= winWidth) {
                        $navMask.css({ width: inst.options.totalwidth + "px" });
                        $navPrev.hide();
                        $navNext.hide();
                    } else {
                        $navMask.css({ width: winWidth - 2 * inst.options.navbuttonwidth + "px" });
                        $navPrev.show();
                        $navNext.show();
                    }
                };
                inst.loadElem = function (elem) {
                    inst.currentElem = elem;
                    inst.showing = true;
                    if (inst.options.bodynoscroll) $("html,body").addClass("bodynoscroll");
                    if (
                        !(
                            (inst.options.showtitle && inst.currentElem[ELEM_TITLE] && inst.currentElem[ELEM_TITLE].length > 0) ||
                            (inst.options.showdescription && inst.currentElem[ELEM_DESCRIPTION] && inst.currentElem[ELEM_DESCRIPTION].length > 0) ||
                            (inst.options.inGroup && (inst.options.showplaybutton || inst.options.showtitleprefix))
                        )
                    )
                        inst.options.barheight = 0;
                    inst.showNavigation();
                    inst.$elem.off("mouseenter").off("mouseleave").off("mousemove");
                    inst.$loading.show();
                    if (inst.options.onshowitem && window[inst.options.onshowitem] && typeof window[inst.options.onshowitem] == "function") window[inst.options.onshowitem](elem);
                    if ((inst.options.transition == "slide" || inst.options.transition == "crossfade") && inst.existingElem >= 0) {
                        $(".html5-elem-box-previous").remove();
                        var newitem = inst.$elem.clone();
                        newitem.insertAfter(inst.$elem);
                        inst.$prevelem = inst.$elem;
                        inst.$elem = newitem;
                        inst.$prevelem.addClass("html5-elem-box-previous");
                        inst.$elem.addClass("html5-elem-box-current");
                        inst.$elemWrap = $(".html5-elem-wrap", inst.$elem);
                        inst.$loading = $(".html5-loading", inst.$elem);
                        inst.$error = $(".html5-error-box", inst.$elem);
                        inst.$image = $(".html5-image", inst.$elem);
                        if (inst.options.titlestyle != "outside") {
                            inst.$elemData = $(".html5-elem-data-box", inst.$elem);
                            inst.$text = $(".html5-text", inst.$elem);
                        }
                        inst.$elem.css({ position: "absolute", top: 0, left: inst.options.transition == "slide" ? (inst.direction == -1 ? "100%" : "-100%") : 0, opacity: 0, height: "auto" });
                        inst.$prevelem.css({ width: inst.$prevelem.width() + "px", height: inst.$prevelem.height() + "px" });
                        if (inst.options.transition == "crossfade") inst.$prevelem.css({ margin: 0, left: "50%", transform: "translateX(-50%)" });
                    }
                    switch (elem[ELEM_TYPE]) {
                        case 0:
                            var imgLoader = new Image();
                            $(imgLoader).on("load", function () {
                                elem[ELEM_ORIGINALWIDTH] = imgLoader.width;
                                elem[ELEM_ORIGINALHEIGHT] = imgLoader.height;
                                inst.showImage(elem, imgLoader.width, imgLoader.height);
                            });
                            $(imgLoader).on("error", function () {
                                inst.showError();
                            });
                            imgLoader.src = elem[ELEM_HREF];
                            break;
                        case 1:
                            inst.showSWF(elem);
                            break;
                        case 2:
                        case 8:
                            inst.showVideo(elem);
                            break;
                        case 3:
                        case 4:
                        case 9:
                        case 11:
                        case 12:
                            inst.showYoutubeVimeo(elem);
                            break;
                        case 5:
                            inst.showPDF(elem);
                            break;
                        case 6:
                            inst.showMP3(elem);
                            break;
                        case 7:
                            inst.showWeb(elem, false);
                            break;
                        case 10:
                            inst.showDiv(elem);
                            break;
                    }
                    if (inst.options.pushwindowhistory && window.history && window.history.pushState) {
                        var historyURL = window.location.pathname + window.location.search + "#html5lightbox_" + encodeURIComponent(elem[ELEM_HREF]);
                        window.history.pushState({}, "", historyURL);
                        window.onhashchange = function () {
                            if (!window.location.hash || window.location.hash.indexOf("#html5lightbox_") < 0) inst.finish();
                        };
                    }
                    if (inst.options.googleanalyticsaccount && window._gaq) window._gaq.push(["_trackEvent", "Lightbox", "Open", elem[ELEM_HREF]]);
                    if (inst.options.preload) {
                        if (inst.options.nextElem >= 0 && inst.elemArray[inst.options.nextElem][ELEM_TYPE] == 0) new Image().src = inst.elemArray[inst.options.nextElem][ELEM_HREF];
                        if (inst.options.prevElem >= 0 && inst.elemArray[inst.options.prevElem][ELEM_TYPE] == 0) new Image().src = inst.elemArray[inst.options.prevElem][ELEM_HREF];
                    }
                };
                inst.loadCurElem = function () {
                    inst.loadElem(inst.elemArray[inst.options.curElem]);
                };
                inst.showError = function () {
                    inst.$loading.hide();
                    inst.resizeLightbox(inst.options.errorwidth, inst.options.errorheight, true, function () {
                        inst.$loading.hide();
                        inst.$error.show();
                        inst.$elem.fadeIn(inst.options.fadespeed, function () {
                            inst.showData();
                        });
                    });
                };
                inst.calcTextWidth = function (objW) {
                    return objW - 36;
                };
                (inst.showTitle = function (t, description) {
                    var text = "";
                    var curEl = inst.currentElem;
                    if (inst.options.showtitle) if (t && t.length > 0) text += t;
                    if (inst.options.inGroup) {
                        if (inst.options.showtitleprefix)
                            text =
                                "<span class='html5-title-prefix'>" + inst.options.titleprefix.replace("%NUM", inst.options.groupIndex + 1).replace("%TOTAL", inst.options.groupCount) + "</span> <span class='html5-title-caption' title='"+ text +"' style='width: 60%; word-break: break-all;'>" + text + "</span> <a target='_blank' href='"+ SITE_URL +"/files/download/"+ window.btoa(curEl[ELEM_ATTACHMENT]) +"'><span style='float: right' class='html5-title-caption'><i class='fa fa-download' aria-hidden='true'></i></span></a>";
                        if (inst.options.showplaybutton)
                            text =
                                "<div class='html5-playpause' style='display:inline-block;cursor:pointer;vertical-align:middle;width:" +
                                inst.options.playimagesize +
                                "px;height:" +
                                inst.options.playimagesize +
                                "px;'><div class='html5-play' style='display:block;'><img alt='' src='" +
                                inst.options.playimage +
                                "'></div><div class='html5-pause' style='display:none;'><img alt='' src='" +
                                inst.options.pauseimage +
                                "'></div></div> " +
                                text;
                    } else {
                        if (inst.options.showtitleprefix) text = "<span class='html5-title-caption' title='"+ text +"' style='width: 60%; word-break: break-all;'>" + text + "</span> <a target='_blank' href='"+ SITE_URL +"/files/download/"+ window.btoa(curEl[ELEM_ATTACHMENT]) +"'><span style='float: right' class='html5-title-caption'><i class='fa fa-download' aria-hidden='true'></i></span></a>";
                    }
                    if (text.length > 0) text = '<div class="html5-title">' + text + "</div>";
                    if (inst.options.showdescription && description && description.length > 0) text += '<div class="html5-description">' + description + "</div>";
                    inst.$text.html(text);
                    if (inst.options.inGroup && inst.options.showplaybutton) {
                        if (inst.autosliding) {
                            $(".html5-play", inst.$lightbox).hide();
                            $(".html5-pause", inst.$lightbox).show();
                        } else {
                            $(".html5-play", inst.$lightbox).show();
                            $(".html5-pause", inst.$lightbox).hide();
                        }
                        $(".html5-play", inst.$lightbox).click(function () {
                            $(".html5-play", inst.$lightbox).hide();
                            $(".html5-pause", inst.$lightbox).show();
                            if (inst.slideTimeout) {
                                inst.slideTimeout.stop();
                                inst.slideTimeout.start();
                                inst.autosliding = true;
                            }
                        });
                        $(".html5-pause", inst.$lightbox).click(function () {
                            $(".html5-play", inst.$lightbox).show();
                            $(".html5-pause", inst.$lightbox).hide();
                            if (inst.slideTimeout) {
                                inst.slideTimeout.stop();
                                inst.autosliding = false;
                            }
                        });
                    }
                    $("#html5-social", inst.$lightbox).show();
                    if (inst.options.showsocialmedia)
                        if (inst.currentElem[ELEM_SOCIALMEDIA])
                            if ($("#html5-socialmedia", inst.$lightboxBox).length > 0) $("#html5-socialmedia", inst.$lightboxBox).html(inst.currentElem[ELEM_SOCIALMEDIA]);
                            else inst.$lightboxBox.append('<div id="html5-socialmedia" style="' + inst.options.socialmediaposition + '">' + inst.currentElem[ELEM_SOCIALMEDIA] + "</div>");
                        else if ($("#html5-socialmedia", inst.$lightboxBox).length > 0) $("#html5-socialmedia", inst.$lightboxBox).remove();
                }),
                    (inst.getElemSize = function (elem, initW, initH) {
                        var elemW, elemH;
                        if (!elem[ELEM_MEDIUMWIDTH]) elem[ELEM_MEDIUMWIDTH] = elem[ELEM_WIDTH];
                        if (!elem[ELEM_SMALLWIDTH]) elem[ELEM_SMALLWIDTH] = elem[ELEM_MEDIUMWIDTH];
                        if (!elem[ELEM_MEDIUMHEIGHT]) elem[ELEM_MEDIUMHEIGHT] = elem[ELEM_HEIGHT];
                        if (!elem[ELEM_SMALLHEIGHT]) elem[ELEM_SMALLHEIGHT] = elem[ELEM_MEDIUMHEIGHT];
                        var wIndex = ELEM_WIDTH;
                        var hIndex = ELEM_HEIGHT;
                        var winWidth = $(window).width();
                        if (winWidth < inst.options.smallbreakpoint) {
                            wIndex = ELEM_SMALLWIDTH;
                            hIndex = ELEM_SMALLHEIGHT;
                        } else if (winWidth < inst.options.mediumbreakpoint) {
                            wIndex = ELEM_MEDIUMWIDTH;
                            hIndex = ELEM_MEDIUMHEIGHT;
                        }
                        if (elem[ELEM_TYPE] == 0) {
                            if (elem[wIndex]) elemW = elem[wIndex];
                            else if (initW) {
                                elemW = initW;
                                elem[wIndex] = initW;
                            } else elemW = inst.options.defaultwidth;
                            if (elem[hIndex]) elemH = elem[hIndex];
                            else if (initH) {
                                elemH = initH;
                                elem[hIndex] = initH;
                            } else elemH = inst.options.defaultheight;
                        } else if (elem[ELEM_TYPE] == 5 || elem[ELEM_TYPE] == 7 || elem[ELEM_TYPE] == 10) {
                            elemW = elem[wIndex] ? elem[wIndex] : inst.options.usedefaultsizeforcontent || inst.options.usedefaultwidthforcontent ? inst.options.defaultwidth : initW;
                            elemH = elem[hIndex] ? elem[hIndex] : inst.options.usedefaultsizeforcontent || inst.options.usedefaultheightforcontent ? inst.options.defaultheight : initH;
                        } else {
                            elemW = elem[wIndex] ? elem[wIndex] : inst.options.defaultwidth;
                            elemH = elem[hIndex] ? elem[hIndex] : inst.options.defaultheight;
                        }
                        return { w: elemW, h: elemH };
                    }),
                    (inst.showImage = function (elem, imgW, imgH) {
                        var elemSize = inst.getElemSize(elem, imgW, imgH);
                        inst.showTitle(elem[ELEM_TITLE], elem[ELEM_DESCRIPTION]);
                        var sizeObj = inst.calcElemSize(elemSize, inst.options.imagekeepratio);
                        inst.resizeLightbox(sizeObj.w, sizeObj.h, true, function () {
                            inst.$loading.hide();
                            var timercode =
                                !inst.options.showtimer || !inst.options.inGroup
                                    ? ""
                                    : "<div class='html5-timer' style='display:none;position:absolute;" +
                                    inst.options.timerposition +
                                    ":0;left:0;width:0;height:" +
                                    inst.options.timerheight +
                                    "px;background-color:" +
                                    inst.options.timercolor +
                                    ";opacity:" +
                                    inst.options.timeropacity +
                                    ";'></div>";
                            var titlecode = elem[ELEM_WEBLINKTEXT] && elem[ELEM_WEBLINKTEXT].length > 0 ? " title='" + elem[ELEM_WEBLINKTEXT].replace(/'/g, "&#39;") + "'" : "";
                            var targetcode = elem[ELEM_WEBLINKTARGET] && elem[ELEM_WEBLINKTARGET].length > 0 ? " target='" + elem[ELEM_WEBLINKTARGET] + "'" : "";
                            var linkcode = elem[ELEM_WEBLINK] && elem[ELEM_WEBLINK].length > 0 ? "<a href='" + elem[ELEM_WEBLINK] + "'" + titlecode + targetcode + ">" : "";
                            var linkcodeafter = elem[ELEM_WEBLINK] && elem[ELEM_WEBLINK].length > 0 ? "</a>" : "";
                            inst.$image.hide();
                            inst.$image.html(
                                "<div class='html5-image-container' style='display:block;position:relative;width:100%;height:100%;" +
                                    (inst.options.imagekeepratio ? "overflow:hidden;" : "overflow:auto;") +
                                    "'>" +
                                    linkcode +
                                    "<img class='html5-image-img' alt='" +
                                    inst.html2Text(elem[ELEM_TITLE]) +
                                    "' src='" +
                                    elem[ELEM_HREF] +
                                    "' width='100%' height='auto' />" +
                                    linkcodeafter +
                                    timercode +
                                    "</div>"
                            );
                            inst.$image.fadeIn(inst.options.fadespeed);
                            inst.showData();
                            if (inst.autosliding) {
                                inst.slideTimeout.stop();
                                inst.slideTimeout.start();
                            }
                        });
                    });
                inst.showSWF = function (elem) {
                    var elemSize = inst.getElemSize(elem);
                    inst.showTitle(elem[ELEM_TITLE], elem[ELEM_DESCRIPTION]);
                    var sizeObj = inst.calcElemSize(elemSize, true);
                    var dataW = sizeObj.w;
                    var dataH = sizeObj.h;
                    inst.resizeLightbox(dataW, dataH, true, function () {
                        inst.$loading.hide();
                        inst.$image.html("<div class='html5lightbox-swf' style='display:block;width:100%;height:100%;'></div>").show();
                        inst.embedFlash($(".html5lightbox-swf", inst.$image), elem[ELEM_HREF], "window", { width: dataW, height: dataH });
                        inst.$elem.show();
                        inst.showData();
                        if (inst.autosliding) {
                            inst.slideTimeout.stop();
                            inst.slideTimeout.start();
                        }
                    });
                };
                inst.showVideo = function (elem) {
                    inst.slideTimeout.stop();
                    inst.showTitle(elem[ELEM_TITLE], elem[ELEM_DESCRIPTION]);
                    var elemSize = inst.getElemSize(elem);
                    var sizeObj = inst.calcElemSize(elemSize, true);
                    var dataW = sizeObj.w;
                    var dataH = sizeObj.h;
                    inst.resizeLightbox(
                        dataW,
                        dataH,
                        true,
                        function () {
                            inst.$loading.hide();
                            inst.$image.html("<div class='html5lightbox-video' style='display:block;width:100%;height:100%;overflow:hidden;background-color:" + inst.options.videobgcolor + ";'></div>").show();
                            var isHTML5 = false;
                            if (inst.options.isIE678 || elem[ELEM_TYPE] == 8 || (inst.options.isIE9 && inst.options.useflashonie9) || (inst.options.isIE10 && inst.options.useflashonie10) || (inst.options.isIE11 && inst.options.useflashonie11))
                                isHTML5 = false;
                            else if (inst.options.isMobile) isHTML5 = true;
                            else if ((inst.options.html5player || !inst.options.flashInstalled) && inst.options.html5VideoSupported) {
                                isHTML5 = true;
                                if (inst.options.isFirefox || inst.options.isOpera) if (!elem[ELEM_HREF_WEBM] && !elem[ELEM_HREF_OGG] && (!inst.options.canplaymp4 || inst.options.useflashformp4onfirefox)) isHTML5 = false;
                            }
                            if (isHTML5) {
                                var videoSrc = elem[ELEM_HREF];
                                if (inst.options.isFirefox || inst.options.isOpera)
                                    if (elem[ELEM_HREF_WEBM]) videoSrc = elem[ELEM_HREF_WEBM];
                                    else if (elem[ELEM_HREF_OGG]) videoSrc = elem[ELEM_HREF_OGG];
                                inst.embedHTML5Video($(".html5lightbox-video", inst.$image), videoSrc, inst.options.autoplay, inst.options.loopvideo, inst.options.mutevideo, inst.options.playsinline);
                                if (elem[ELEM_WEBLINK] && elem[ELEM_WEBLINK].length > 0)
                                    $(".html5-lightbox-video", inst.$image)
                                        .css({ cursor: "pointer" })
                                        .click(function () {
                                            if (elem[ELEM_WEBLINKTARGET] && elem[ELEM_WEBLINKTARGET].length > 0) window.open(elem[ELEM_WEBLINK], elem[ELEM_WEBLINKTARGET]);
                                            else window.open(elem[ELEM_WEBLINK]);
                                        });
                            } else {
                                var videoFile = elem[ELEM_HREF];
                                if (videoFile.charAt(0) != "/" && videoFile.substring(0, 5) != "http:" && videoFile.substring(0, 6) != "https:") videoFile = inst.options.htmlfolder + videoFile;
                                inst.embedFlash($(".html5lightbox-video", inst.$image), inst.options.jsfolder + "html5boxplayer.swf", "transparent", {
                                    width: dataW,
                                    height: dataH,
                                    jsobjectname: "html5Lightbox",
                                    hidecontrols: inst.options.videohidecontrols ? "1" : "0",
                                    hideplaybutton: "0",
                                    videofile: videoFile,
                                    hdfile: "",
                                    ishd: "0",
                                    defaultvolume: inst.options.defaultvideovolume,
                                    autoplay: inst.options.autoplay ? "1" : "0",
                                    loop: inst.options.loopvideo ? "1" : "0",
                                    errorcss: ".html5box-error" + inst.options.errorcss,
                                    id: 0,
                                });
                            }
                            inst.$elem.show();
                            inst.showData();
                        },
                        inst.options.isMobile && inst.options.autoplayhtml5onmobile
                    );
                };
                inst.loadNext = function () {
                    $(window).trigger("html5lightbox.videofinished");
                    if (inst.autosliding) inst.gotoSlide(-1);
                    else if (inst.options.autoclose)
                        setTimeout(function () {
                            inst.finish();
                        }, inst.options.autoclosedelay);
                };
                inst.getYoutubeParams = function (href) {
                    var result = {};
                    if (href.indexOf("?") < 0) return result;
                    var params = href.substring(href.indexOf("?") + 1).split("&");
                    for (var i = 0; i < params.length; i++) {
                        var value = params[i].split("=");
                        if (value && value.length == 2 && value[0].toLowerCase() != "v") result[value[0].toLowerCase()] = value[1];
                    }
                    return result;
                };
                inst.getYoutubeId = function (href) {
                    var youtubeId = "";
                    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\??v?=?))([^#\&\?]*).*/;
                    var match = href.match(regExp);
                    if (match && match[7] && match[7].length == 11) youtubeId = match[7];
                    return youtubeId;
                };
                inst.prepareYoutubeHref = function (href) {
                    var youtubeId = inst.getYoutubeId(href);
                    var protocol = "https:";
                    var result = protocol + "//www.youtube.com/embed/" + youtubeId;
                    var params = this.getYoutubeParams(href);
                    var first = true;
                    for (var key in params) {
                        if (first) {
                            result += "?";
                            first = false;
                        } else result += "&";
                        result += key + "=" + params[key];
                    }
                    return result;
                };
                inst.prepareDailymotionHref = function (href) {
                    if (href.match(/\:\/\/.*(dai\.ly)/i)) {
                        var protocol = "https:";
                        var id = href.match(/(dai\.ly\/)([a-zA-Z0-9\-\_]+)/)[2];
                        href = protocol + "//www.dailymotion.com/embed/video/" + id;
                    }
                    return href;
                };
                inst.showYoutubeVimeo = function (elem) {
                    inst.slideTimeout.stop();
                    inst.showTitle(elem[ELEM_TITLE], elem[ELEM_DESCRIPTION]);
                    var elemSize = inst.getElemSize(elem);
                    var sizeObj = inst.calcElemSize(elemSize, true);
                    var dataW = sizeObj.w;
                    var dataH = sizeObj.h;
                    if (inst.options.noresizecallback) {
                        inst.resizeLightbox(dataW, dataH, true, function () {
                            inst.showData();
                        });
                        inst.showYouTubeVimeoCallback(elem, sizeObj);
                    } else
                        inst.resizeLightbox(dataW, dataH, true, function () {
                            inst.showYouTubeVimeoCallback(elem, sizeObj);
                            inst.showData();
                        });
                };
                inst.showYouTubeVimeoCallback = function (elem, sizeObj) {
                    inst.$loading.hide();
                    inst.$image.html("<div class='html5lightbox-video' style='display:block;width:100%;height:100%;overflow:hidden;'></div>").show();
                    var href = elem[ELEM_HREF];
                    var youtubeid = "";
                    if (elem[ELEM_TYPE] == 3) {
                        youtubeid = inst.getYoutubeId(href);
                        href = inst.prepareYoutubeHref(href);
                    }
                    if (elem[ELEM_TYPE] == 9) href = inst.prepareDailymotionHref(href);
                    if (inst.options.autoplay) {
                        href += href.indexOf("?") < 0 ? "?" : "&";
                        if (elem[ELEM_TYPE] == 11) href += "autoPlay=true";
                        else href += "autoplay=1";
                    }
                    if (inst.options.loopvideo) {
                        href += href.indexOf("?") < 0 ? "?" : "&";
                        switch (elem[ELEM_TYPE]) {
                            case 3:
                                href += "loop=1&playlist=" + youtubeid;
                                break;
                            case 4:
                            case 9:
                                href += "loop=1";
                                break;
                            case 11:
                                href += "endVideoBehavior=loop";
                                break;
                        }
                    }
                    if (elem[ELEM_TYPE] == 3) {
                        if (href.indexOf("?") < 0) href += "?wmode=transparent&rel=0";
                        else href += "&wmode=transparent&rel=0";
                        if (inst.options.videohidecontrols) href += "&controls=0&showinfo=0";
                        if (inst.options.mutevideo) href += "&mute=1";
                        if (inst.options.playsinline) href += "&playsinline=1";
                        href += "&enablejsapi=1&origin=" + document.location.protocol + "//" + document.location.hostname;
                    } else if (elem[ELEM_TYPE] == 4) {
                        href += href.indexOf("?") < 0 ? "?" : "&";
                        href += "api=1&player_id=html5boxiframevideo" + inst.options.curElem;
                        if (inst.options.mutevideo) href += "&muted=1";
                        if (inst.options.playsinline) href += "&playsinline=1";
                    }
                    $(".html5lightbox-video", inst.$image).html(
                        "<iframe style='margin:0;padding:0;border:0;' class='html5boxiframevideo' id='html5boxiframevideo" +
                            inst.options.curElem +
                            "' width='100%' height='100%' src='" +
                            href +
                            "' frameborder='0' allow='autoplay' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>"
                    );
                    inst.$elem.show();
                    if (elem[ELEM_TYPE] == 3) {
                        if (inst.options.inityoutube) {
                            inst.youtubeFinishCount = 0;
                            inst.initYoutubeFinishCallback();
                        }
                    } else if (elem[ELEM_TYPE] == 4)
                        if (inst.options.initvimeo) {
                            inst.vimeoFinishCount = 0;
                            inst.initVimeoFinishCallback();
                        }
                };
                inst.initYoutubeFinishCallback = function () {
                    if (typeof YT === "object" && typeof YT.Player === "function")
                        inst.ytplayer = new YT.Player("html5boxiframevideo" + inst.options.curElem, {
                            events: {
                                onStateChange: function (event) {
                                    if (event.data == YT.PlayerState.ENDED) {
                                        $(window).trigger("html5lightbox.videofinished");
                                        if (inst.autosliding) inst.gotoSlide(-1);
                                        else if (inst.options.autoclose)
                                            setTimeout(function () {
                                                inst.finish();
                                            }, inst.options.autoclosedelay);
                                    }
                                },
                            },
                        });
                    else
                        setTimeout(function () {
                            if (inst.youtubeFinishCount < 10) {
                                inst.youtubeFinishCount++;
                                inst.initYoutubeFinishCallback();
                            }
                        }, 300);
                };
                inst.initVimeoFinishCallback = function () {
                    if (typeof $f === "function") {
                        var vimeoIframe = $("#html5boxiframevideo" + inst.options.curElem)[0];
                        inst.vimeoPlayer = $f(vimeoIframe);
                        inst.vimeoPlayer.addEvent("ready", function () {
                            inst.vimeoPlayer.addEvent("finish", function (id) {
                                $(window).trigger("html5lightbox.videofinished");
                                if (inst.autosliding) inst.gotoSlide(-1);
                                else if (inst.options.autoclose)
                                    setTimeout(function () {
                                        inst.finish();
                                    }, inst.options.autoclosedelay);
                            });
                        });
                    } else
                        setTimeout(function () {
                            if (inst.vimeoFinishCount < 10) {
                                inst.vimeoFinishCount++;
                                inst.initVimeoFinishCallback();
                            }
                        }, 300);
                };
                inst.showPDF = function (elem) {
                    if (inst.options.enablepdfjs) {
                        if ((inst.options.isIPhone && inst.options.openpdfinnewtaboniphone) || (inst.options.isIPad && inst.options.openpdfinnewtabonipad)) {
                            var win = window.open(elem[ELEM_HREF], "_blank");
                            win.focus();
                            inst.finish();
                            return;
                        }
                        if (!inst.options.pdfjsengine) inst.options.pdfjsengine = inst.options.jsfolder + "pdfjs/web/viewer.html";
                        var href = elem[ELEM_HREF];
                        if (href.substring(0, 5) != "http:" && href.substring(0, 6) != "https:") href = inst.absoluteUrl(href);
                        var hashindex = href.indexOf("#");
                        if (hashindex > 0) href = encodeURIComponent(href.substring(0, hashindex)) + href.substring(hashindex);
                        else href = encodeURIComponent(href);
                        var pdfelem = jQuery.extend(true, {}, elem);
                        pdfelem[ELEM_HREF] = inst.options.pdfjsengine + (inst.options.pdfjsengine.indexOf("?") < 0 ? "?" : "&") + "file=" + href;
                        inst.showWeb(pdfelem, false);
                    } else if (inst.options.isIPhone || inst.options.isIPad) inst.showWeb(elem, true);
                    else if (inst.options.isAndroid || inst.options.isIE || inst.options.isIE11) {
                        var win = window.open(elem[ELEM_HREF], "_blank");
                        win.focus();
                        inst.finish();
                        return;
                    } else inst.showWeb(elem, false);
                };
                inst.showMP3 = function (elem) {};
                inst.showDiv = function (elem) {
                    inst.showTitle(elem[ELEM_TITLE], elem[ELEM_DESCRIPTION]);
                    var winWidth = $(window).width();
                    var winH = inst.getWinH();
                    var navH = inst.options.shownavigation && inst.navvisible ? inst.options.navheight : 0;
                    var elemSize = inst.getElemSize(elem, winWidth, winH - navH);
                    var sizeObj = inst.calcElemSize(elemSize, false);
                    var dataW = sizeObj.w;
                    var dataH = sizeObj.h;
                    inst.resizeLightbox(dataW, dataH, true, function () {
                        inst.$loading.hide();
                        inst.$image
                            .html(
                                "<div class='html5lightbox-div' id='html5lightbox-div" +
                                    inst.options.curElem +
                                    "' style='display:block;width:100%;height:" +
                                    (inst.options.autoresizecontent ? "auto" : "100%") +
                                    ";" +
                                    (inst.options.isIOS ? "-webkit-overflow-scrolling:touch;overflow-y:scroll;" : "overflow:auto;") +
                                    "'></div>"
                            )
                            .show();
                        var divID = elem[ELEM_HREF];
                        if ($(divID).length > 0)
                            $(divID)
                                .children()
                                .appendTo($("#html5lightbox-div" + inst.options.curElem, inst.$image));
                        else $("#html5lightbox-div" + inst.options.curElem, inst.$image).html("<div class='html5-error'>The specified div ID does not exist.</div>");
                        inst.$elem.show();
                        inst.showData();
                        if (inst.options.autoresizecontent) inst.resizeWindow();
                        if (inst.autosliding) {
                            inst.slideTimeout.stop();
                            inst.slideTimeout.start();
                        }
                    });
                };
                inst.isSameDomain = function (href) {
                    if (href.substring(0, 5) != "http:" && href.substring(0, 6) != "https:") return true;
                    var link = document.createElement("a");
                    link.setAttribute("href", href);
                    var result = link.protocol == document.location.protocol && link.host == document.location.host && link.port == document.location.port;
                    link = null;
                    return result;
                };
                inst.showWeb = function (elem, pdfobject) {
                    inst.showTitle(elem[ELEM_TITLE], elem[ELEM_DESCRIPTION]);
                    var winWidth = $(window).width();
                    var winH = inst.getWinH();
                    var navH = inst.options.shownavigation && inst.navvisible ? inst.options.navheight : 0;
                    var elemSize = inst.getElemSize(elem, winWidth, winH - navH);
                    var sizeObj = inst.calcElemSize(elemSize, false);
                    var dataW = sizeObj.w;
                    var dataH = sizeObj.h;
                    inst.resizeLightbox(dataW, dataH, true, function () {
                        inst.$image.html("<div class='html5lightbox-web' style='display:block;width:100%;height:100%;" + (inst.options.isIOS ? "-webkit-overflow-scrolling:touch;overflow-y:scroll;" : "") + "'></div>").show();
                        if (pdfobject) {
                            $(".html5lightbox-web", inst.$image).html("<object data='" + elem[ELEM_HREF] + "' type='application/pdf' width='100%' height='100%'></object>");
                            inst.$loading.hide();
                        } else $(".html5lightbox-web", inst.$image).html("<iframe style='margin:0;padding:0;border:0;' class='html5lightbox-web-iframe' width='100%' height='100%' src='" + elem[ELEM_HREF] + "' frameborder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>");
                        $(".html5lightbox-web-iframe", inst.$image).on("load", function () {
                            inst.$loading.hide();
                        });
                        inst.$elem.show();
                        inst.showData();
                        if (inst.options.autoresizecontent && inst.isSameDomain(elem[ELEM_HREF])) {
                            $(".html5lightbox-web-iframe", inst.$image).data("sameorigin", true);
                            $(".html5lightbox-web-iframe", inst.$image).on("load", function () {
                                $(this).data("sameoriginloaded", true);
                                inst.resizeWindow();
                            });
                        }
                        if (inst.autosliding) {
                            inst.slideTimeout.stop();
                            inst.slideTimeout.start();
                        }
                    });
                };
                inst.scrollBox = function () {};
                inst.resizeWindow = function () {
                    if (!inst.currentElem) return;
                    if (!inst.options.responsive) return;
                    var winWidth = $(window).width();
                    var winH = inst.getWinH();
                    if (
                        !(
                            (inst.options.showtitle && inst.currentElem[ELEM_TITLE] && inst.currentElem[ELEM_TITLE].length > 0) ||
                            (inst.options.showdescription && inst.currentElem[ELEM_DESCRIPTION] && inst.currentElem[ELEM_DESCRIPTION].length > 0) ||
                            (inst.options.inGroup && (inst.options.showplaybutton || inst.options.showtitleprefix))
                        )
                    )
                        inst.options.barheight = 0;
                    var elemSize, keepratio;
                    if (inst.currentElem[ELEM_TYPE] == 5 || inst.currentElem[ELEM_TYPE] == 7 || inst.currentElem[ELEM_TYPE] == 10) {
                        var navH = inst.options.shownavigation && inst.navvisible ? inst.options.navheight : 0;
                        elemSize = inst.getElemSize(inst.currentElem, winWidth, winH - navH);
                        keepratio = false;
                    } else {
                        elemSize = inst.getElemSize(inst.currentElem);
                        keepratio = inst.currentElem[ELEM_TYPE] == 0 ? inst.options.imagekeepratio : true;
                    }
                    var sizeObj = inst.calcElemSize(elemSize, keepratio);
                    inst.adjustLightboxPos(sizeObj.w, sizeObj.h);
                    inst.adjustDataHeight();
                    if (inst.options.autoresizecontent && (inst.currentElem[ELEM_TYPE] == 5 || inst.currentElem[ELEM_TYPE] == 7 || inst.currentElem[ELEM_TYPE] == 10)) {
                        var resizeHeight = false;
                        if (inst.currentElem[ELEM_TYPE] == 7 && $(".html5lightbox-web-iframe", inst.$lightbox).length > 0 && $(".html5lightbox-web-iframe", inst.$lightbox).data("sameoriginloaded")) {
                            var iframe = $(".html5lightbox-web-iframe", inst.$lightbox)[0];
                            if (iframe && iframe.contentWindow && iframe.contentWindow.document && iframe.contentWindow.document.documentElement.offsetHeight)
                                if (elemSize.h > iframe.contentWindow.document.documentElement.offsetHeight) {
                                    elemSize.h = iframe.contentWindow.document.documentElement.offsetHeight;
                                    resizeHeight = true;
                                }
                        } else if (inst.currentElem[ELEM_TYPE] == 10 && $(".html5lightbox-div", inst.$lightbox).length > 0) {
                            var divH = $(".html5lightbox-div", inst.$lightbox).height();
                            if (elemSize.h > divH) {
                                elemSize.h = divH;
                                resizeHeight = true;
                            }
                        }
                        if (resizeHeight) {
                            sizeObj = inst.calcElemSize(elemSize, keepratio);
                            inst.adjustLightboxPos(sizeObj.w, sizeObj.h);
                        }
                    }
                    if ($(".html5-nav").length <= 0) return;
                    $(".html5-nav-list").css({ "margin-left": 0 });
                    var $navMask = $(".html5-nav-mask");
                    var $navPrev = $(".html5-nav-prev");
                    var $navNext = $(".html5-nav-next");
                    var winWidth = $(window).width();
                    if (inst.options.totalwidth <= winWidth) {
                        $navMask.css({ width: inst.options.totalwidth + "px" });
                        $navPrev.hide();
                        $navNext.hide();
                    } else {
                        $navMask.css({ width: winWidth - 2 * inst.options.navbuttonwidth + "px" });
                        $navPrev.show();
                        $navNext.show();
                    }
                };
                inst.calcElemSize = function (sizeObj, keepratio) {
                    if (!inst.options.responsive) return sizeObj;
                    var winWidth = $(window).width();
                    var winH = inst.getWinH();
                    winH = winH ? winH : $(document).height();
                    var strW = String(sizeObj.w);
                    if (strW.charAt(strW.length - 1) == "%") sizeObj.w = (winWidth * parseFloat(strW.substring(0, strW.length - 1))) / 100;
                    var strH = String(sizeObj.h);
                    if (strH.charAt(strH.length - 1) == "%") sizeObj.h = (winH * parseFloat(strH.substring(0, strH.length - 1))) / 100;
                    var navH = inst.options.shownavigation && inst.navvisible ? inst.options.navheight : 0;
                    var topmargin = $(window).height() < inst.options.smallscreenheight ? inst.options.bordertopmarginsmall : inst.options.bordertopmargin;
                    var h0 = winH - navH - 2 * inst.options.bordersize - 2 * topmargin;
                    if (inst.options.responsivebarheight)
                        if (winH <= inst.options.smallscreenheight) inst.options.barheight = inst.options.barheightonsmallheight;
                        else inst.options.barheight = inst.options.barheightoriginal;
                    if (inst.options.titlestyle == "bottom") h0 -= inst.options.barheight;
                    else if (inst.options.titlestyle == "outside") h0 -= inst.$elemData.outerHeight();
                    var w0 = winWidth - 2 * inst.options.bordersize - 2 * inst.options.bordermargin;
                    if (inst.options.resizeleftright && (inst.options.titlestyle == "left" || inst.options.titlestyle == "right") && winWidth > inst.options.sidetobottomscreenwidth) w0 -= 2 * inst.options.bordersize;
                    if ((inst.options.fullscreenmode && winWidth > inst.options.navarrowsbottomscreenwidth) || (inst.options.isTouch && inst.options.navarrowsalwaysshowontouch && winWidth > inst.options.navarrowsbottomscreenwidth)) w0 -= 64;
                    if (inst.options.notkeepratioonsmallheight && winH <= inst.options.smallscreenheight) keepratio = false;
                    if (keepratio) {
                        var originWidth = inst.currentElem[ELEM_TYPE] == 0 ? inst.currentElem[ELEM_ORIGINALWIDTH] : sizeObj.w;
                        var originHeight = inst.currentElem[ELEM_TYPE] == 0 ? inst.currentElem[ELEM_ORIGINALHEIGHT] : sizeObj.h;
                        if (inst.options.resizeleftright && (inst.options.titlestyle == "left" || inst.options.titlestyle == "right") && winWidth > inst.options.sidetobottomscreenwidth) {
                            var ratio = originWidth / originHeight;
                            sizeObj.h = Math.round(sizeObj.w / ratio);
                            if (sizeObj.h > h0) {
                                sizeObj.w = Math.round(ratio * h0);
                                sizeObj.h = h0;
                            }
                            if (((sizeObj.w + 2 * inst.options.bordersize) * 100) / inst.options.imagepercentage > w0) {
                                sizeObj.w = (w0 * inst.options.imagepercentage) / 100 - 2 * inst.options.bordersize;
                                sizeObj.h = Math.round(sizeObj.w / ratio);
                            }
                            sizeObj.w = ((sizeObj.w + 2 * inst.options.bordersize) * 100) / inst.options.imagepercentage - 2 * inst.options.bordersize;
                        } else {
                            var ratio = originWidth / originHeight;
                            sizeObj.h = Math.round(sizeObj.w / ratio);
                            if (sizeObj.h > h0) {
                                sizeObj.w = Math.round(ratio * h0);
                                sizeObj.h = h0;
                            }
                            if (sizeObj.w > w0) {
                                sizeObj.h = Math.round(w0 / ratio);
                                sizeObj.w = w0;
                            }
                        }
                    } else {
                        if (inst.options.resizeleftright && (inst.options.titlestyle == "left" || inst.options.titlestyle == "right") && winWidth > inst.options.sidetobottomscreenwidth)
                            sizeObj.w = (sizeObj.w * 100) / inst.options.imagepercentage;
                        if (sizeObj.h > h0) sizeObj.h = h0;
                        else if (inst.options.maxheight) sizeObj.h = h0;
                        if (sizeObj.w > w0) sizeObj.w = w0;
                    }
                    return sizeObj;
                };
                inst.adjustDataHeight = function () {
                    var winWidth = $(window).width();
                    var winH = inst.getWinH();
                    var isBottomText =
                        inst.options.titlestyle == "bottom" || inst.options.titlestyle == "outside" || ((inst.options.titlestyle == "left" || inst.options.titlestyle == "right") && winWidth <= inst.options.sidetobottomscreenwidth);
                    if (inst.options.responsivebarheight)
                        if (winH <= inst.options.smallscreenheight) inst.options.barheight = inst.options.barheightonsmallheight;
                        else inst.options.barheight = inst.options.barheightoriginal;
                    if (isBottomText) {
                        var topmargin = $(window).height() < inst.options.smallscreenheight ? inst.options.bordertopmarginsmall : inst.options.bordertopmargin;
                        var navH = inst.options.shownavigation && inst.navvisible ? inst.options.navheight : 0;
                        var winH = inst.getWinH();
                        var maxH = winH - topmargin - navH;
                        var barHeight = inst.options.barautoheight ? inst.$elemData.outerHeight() : inst.options.barheight;
                        var totalHeight = inst.$elemWrap.outerHeight() + barHeight;
                        var elemHeight = Math.min(maxH, totalHeight);
                        var boxMargin = (winH - navH - elemHeight) / 2;
                        inst.$elem.css({ "max-height": elemHeight + "px" });
                        var topmargin = $(window).height() < inst.options.smallscreenheight ? inst.options.bordertopmarginsmall : inst.options.bordertopmargin;
                        if (boxMargin < topmargin) boxMargin = topmargin;
                        if (inst.options.insideiframe && window.self != window.top) {
                            boxMargin = inst.options.iframetopmargin > 0 ? inst.options.iframetopmargin : topmargin;
                            if (inst.options.iframesamedomain && parent.window.jQuery && parent.window.jQuery("#" + inst.options.iframeid).length) {
                                var iframetop = parent.window.jQuery("#" + inst.options.iframeid).offset().top;
                                var parentscroll = parent.window.document.body.scrollTop;
                                boxMargin += parentscroll > iframetop ? parentscroll - iframetop : 0;
                            }
                        }
                        inst.$lightboxBox.css({ "margin-top": boxMargin + "px" });
                    } else inst.$elem.css({ "max-height": "none" });
                    if (inst.options.titlestyle == "bottom" || inst.options.titlestyle == "inside") inst.$lightboxBox.css({ height: "auto" });
                    if (inst.options.positionFixed) $("#html5-lightbox-overlay", inst.$lightbox).css({ height: Math.max($(window).height(), $(document).height()) });
                    else $("#html5-lightbox-overlay", inst.$lightbox).css({ height: "100%" });
                };
                inst.showData = function () {
                    if (inst.$text.text().length > 0) inst.$elemData.show();
                    inst.adjustDataHeight();
                    $(window).trigger("html5lightbox.lightboxopened");
                };
                inst.resizeLightbox = function (elemW, elemH, bAnimate, onFinish, speedZero) {
                    inst.hideNavArrows();
                    var boxPos = inst.calcBoxPosition(elemW, elemH);
                    var boxW = boxPos[0];
                    var boxH = boxPos[1];
                    var boxT = boxPos[2];
                    inst.$loading.hide();
                    inst.$watermark.hide();
                    if (inst.options.nextElem <= inst.options.curElem) if (inst.options.onlastitem && window[inst.options.onlastitem] && typeof window[inst.options.onlastitem] == "function") window[inst.options.onlastitem](inst.currentElem);
                    if (inst.options.prevElem >= inst.options.curElem)
                        if (inst.options.onfirstitem && window[inst.options.onfirstitem] && typeof window[inst.options.onfirstitem] == "function") window[inst.options.onfirstitem](inst.currentElem);
                    if (
                        !inst.options.fullscreenmode &&
                        !(inst.options.navarrowspos == "side") &&
                        !(inst.options.navarrowspos == "browserside") &&
                        (!inst.options.isTouch || !inst.options.navarrowsalwaysshowontouch) &&
                        !inst.options.alwaysshownavarrows
                    ) {
                        inst.$lightboxBox.on("mouseenter mousemove", function () {
                            if ((inst.options.arrowloop && inst.options.prevElem >= 0) || (!inst.options.arrowloop && inst.options.prevElem >= 0 && inst.options.prevElem < inst.options.curElem)) inst.$prev.fadeIn();
                            if ((inst.options.arrowloop && inst.options.nextElem >= 0) || (!inst.options.arrowloop && inst.options.nextElem >= 0 && inst.options.nextElem > inst.options.curElem)) inst.$next.fadeIn();
                        });
                        inst.$lightboxBox.on("mouseleave", function () {
                            inst.$next.fadeOut();
                            inst.$prev.fadeOut();
                        });
                    }
                    var existingBoxT = parseInt(inst.$lightboxBox.css("margin-top"));
                    inst.$lightboxBox.css({ "margin-top": boxT });
                    inst.resizePositionFixed();
                    var speed = bAnimate ? inst.options.resizespeed : 0;
                    if (inst.options.fullscreenmode && inst.options.fullscreennotransition) speed = 0;
                    if ((inst.options.transition == "slide" || inst.options.transition == "crossfade") && inst.existingElem >= 0) speed = 0;
                    if (typeof speedZero !== "undefined" && speedZero) speed = 0;
                    if (inst.options.enteranimation) {
                        speed = 0;
                        if (!inst.$lightboxBox.hasClass("html5box-enter-animated")) {
                            inst.$lightboxBox.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
                                inst.$lightboxBox.removeClass("html5box-" + inst.options.enteranimation);
                            });
                            inst.$lightboxBox.addClass("html5box-enter-animated html5box-" + inst.options.enteranimation);
                        }
                    }
                    var winWidth = $(window).width();
                    if ((inst.options.titlestyle == "left" || inst.options.titlestyle == "right") && winWidth > inst.options.sidetobottomscreenwidth) {
                        if (boxW == inst.$lightboxBox.width() && boxH == inst.$lightboxBox.height()) speed = 0;
                        inst.$lightboxBox.animate({ width: boxW }, speed).animate({ height: boxH }, speed, function () {
                            inst.onAnimateFinish(onFinish);
                        });
                    } else {
                        if (boxW == inst.$elemWrap.width() && boxH == inst.$elemWrap.height()) speed = 0;
                        inst.$lightboxBox.css({ width: boxW, height: "auto" });
                        inst.$elemWrap.animate({ width: boxW }, speed).animate({ height: boxH }, speed, function () {
                            inst.onAnimateFinish(onFinish);
                        });
                    }
                };
                inst.onAnimateFinish = function (onFinish) {
                    inst.$loading.show();
                    inst.$watermark.hide();
                    inst.$close.show();
                    inst.$elem.css({ "background-color": inst.options.bgcolor });
                    inst.resizePositionFixed();
                    onFinish();
                    inst.finishCallback();
                    $(window).trigger("html5lightbox.lightboxshowend");
                };
                (inst.finishCallback = function () {
                    if ((inst.options.transition == "slide" || inst.options.transition == "crossfade") && inst.existingElem >= 0)
                        if (inst.options.transition == "slide") {
                            inst.$prevelem.animate({ left: inst.direction == -1 ? "-100%" : "100%", opacity: 0 }, { duration: inst.options.transitionduration });
                            inst.$elem.animate(
                                { left: 0, opacity: 1 },
                                {
                                    duration: inst.options.transitionduration,
                                    always: function () {
                                        inst.$prevelem.remove();
                                        inst.$elem.removeClass("html5-elem-box-current").css({ position: "relative", height: "100%" });
                                    },
                                }
                            );
                        } else {
                            inst.$prevelem.animate({ opacity: 0 }, { duration: inst.options.transitionduration });
                            inst.$elem.animate(
                                { opacity: 1 },
                                {
                                    duration: inst.options.transitionduration,
                                    always: function () {
                                        inst.$prevelem.remove();
                                        inst.$elem.removeClass("html5-elem-box-current").css({ position: "relative", height: "100%" });
                                    },
                                }
                            );
                        }
                }),
                    (inst.resetDiv = function (elemID) {
                        if (inst.elemArray.length > 0 && elemID >= 0)
                            if (inst.elemArray[elemID][ELEM_TYPE] == 10) {
                                var divID = inst.elemArray[elemID][ELEM_HREF];
                                if ($(divID).length > 0)
                                    $("#html5lightbox-div" + elemID)
                                        .children()
                                        .appendTo($(divID));
                            }
                    });
                inst.reset = function () {
                    if (inst.options.stamp) inst.$watermark.hide();
                    inst.showing = false;
                    inst.$image.empty();
                    inst.$text.empty();
                    inst.$error.hide();
                    inst.$loading.hide();
                    inst.$image.hide();
                    if (inst.options.titlestyle == "bottom" || inst.options.titlestyle == "inside") inst.$elemData.hide();
                    if (!inst.options.fullscreenmode) inst.$close.hide();
                    inst.$elem.css({ "background-color": "" });
                };
                inst.resetNavigation = function () {
                    inst.options.navheight = 0;
                    $(".html5-nav").remove();
                    inst.navvisible = false;
                };
                inst.finish = function () {
                    if ($(".html5-nav").length > 0) $(".html5-nav").addClass("html5box-animated html5box-fadeOutDown");
                    if (inst.options.enteranimation) inst.$lightboxBox.removeClass("html5box-enter-animated html5box-" + inst.options.enteranimation);
                    if (inst.options.exitanimation == "fadeOut" || inst.options.exitanimation == "fadeOutDown") {
                        inst.$lightbox.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
                            inst.$lightboxBox.removeClass("html5box-animated html5box-" + inst.options.exitanimation);
                            inst.$lightbox.removeClass("html5box-animated html5box-fadeOut");
                            inst.finishDone();
                        });
                        inst.$lightbox.addClass("html5box-animated html5box-fadeOut");
                        inst.$lightboxBox.addClass("html5box-animated html5box-" + inst.options.exitanimation);
                    } else inst.finishDone();
                };
                inst.finishDone = function () {
                    inst.existingElem = -1;
                    inst.resetDiv(inst.options.curElem);
                    if ($(".html5-lightbox-video", inst.$lightbox).length) $(".html5-lightbox-video", inst.$lightbox).attr("src", "");
                    $("head")
                        .find("style")
                        .each(function () {
                            if ($(this).data("creator") == "html5box-html5-lightbox") $(this).remove();
                        });
                    if (inst.options.bodynoscroll) $("html,body").removeClass("bodynoscroll");
                    inst.slideTimeout.stop();
                    inst.reset();
                    inst.resetNavigation();
                    inst.$lightbox.remove();
                    $("#html5box-html5-lightbox").remove();
                    inst.showObjects();
                    if (inst.options.oncloselightbox && window[inst.options.oncloselightbox] && typeof window[inst.options.oncloselightbox] == "function") window[inst.options.oncloselightbox](inst.currentElem);
                    if (inst.onLightboxClosed && typeof inst.onLightboxClosed == "function") inst.onLightboxClosed(inst.currentElem);
                    $(window).trigger("html5lightbox.lightboxclosed");
                };
                inst.pauseSlide = function () {};
                inst.playSlide = function () {};
                inst.gotoSlide = function (slide) {
                    inst.existingElem = inst.options.curElem;
                    inst.direction = slide;
                    inst.resetDiv(inst.options.curElem);
                    if (slide == -1) {
                        if (inst.options.nextElem < 0) return;
                        inst.options.curElem = inst.options.nextElem;
                    } else if (slide == -2) {
                        if (inst.options.prevElem < 0) return;
                        inst.options.curElem = inst.options.prevElem;
                    } else if (slide >= 0) {
                        inst.direction = slide > inst.options.curElem ? -1 : -2;
                        inst.options.curElem = slide;
                    }
                    if (inst.autosliding) inst.slideTimeout.stop();
                    inst.calcNextPrevElem();
                    if (inst.options.transition != "slide" && inst.options.transition != "crossfade") inst.reset();
                    inst.loadCurElem();
                    if (inst.options.titlestyle == "inside" && inst.options.showonmouseoverinside && inst.currentElem[ELEM_TYPE] !== 0 && inst.options.showinsidetitleforimageonly) inst.$elemData.css({ opacity: 0 });
                };
                inst.enableSwipe = function () {
                    var preventDefault = inst.options.isAndroid && (inst.options.swipepreventdefaultonandroid || (inst.options.androidVersion >= 0 && inst.options.androidVersion <= 5)) ? true : false;
                    inst.$lightboxBox.html5lightboxTouchSwipe({
                        preventWebBrowser: preventDefault,
                        swipeDistance: inst.options.swipedistance,
                        swipeLeft: function () {
                            if (inst.options.inGroup) inst.gotoSlide(-1);
                        },
                        swipeRight: function () {
                            if (inst.options.inGroup) inst.gotoSlide(-2);
                        },
                    });
                };
                inst.hideObjects = function () {
                    $("embed, object").css({ visibility: "hidden" });
                };
                inst.showObjects = function () {
                    $("embed, object").css({ visibility: "visible" });
                };
                inst.embedHTML5Video = function ($container, src, autoplay, loopvideo, mutevideo, playsinline) {
                    $container.html(
                        "<div style='display:block;width:100%;height:100%;position:relative;'><video class='html5-lightbox-video' width='100%' height='100%'" +
                            (inst.options.html5videoposter && inst.options.html5videoposter.length > 0 ? "poster='" + inst.options.html5videoposter + "'" : "") +
                            (autoplay ? " autoplay" : "") +
                            (loopvideo ? " loop" : "") +
                            (mutevideo ? " muted" : "") +
                            (playsinline ? " playsinline" : "") +
                            (inst.options.nativehtml5controls && !inst.options.videohidecontrols ? " controls='controls'" : "") +
                            (inst.options.nativecontrolsnodownload ? ' controlsList="nodownload"' : "") +
                            " src='" +
                            src +
                            "'>" +
                            (inst.options.showsubtitle && inst.options.vtturl ? '<track default src="' + inst.options.vtturl + '" kind="subtitles" srclang="' + inst.options.vttlang + '" label="' + inst.options.vttlabel + '">' : "") +
                            "</video></div>"
                    );
                    if (mutevideo) inst.options.defaultvideovolume = 0;
                    if (!inst.options.nativehtml5controls && !inst.options.videohidecontrols) {
                        $("video", $container).data("src", src);
                        $("video", $container).lightboxHTML5VideoControls(
                            inst.options.skinsfolder,
                            inst,
                            ".html5-lightbox-video",
                            inst.options.videohidecontrols,
                            false,
                            inst.options.defaultvideovolume,
                            inst.options.nativecontrolsonfullscreen,
                            inst.options.nativecontrolsnodownload,
                            null,
                            inst.options.showsubtitle,
                            inst.options.vttline,
                            inst.options.showsubtitlebydefault
                        );
                    }
                    $("video", $container)
                        .off("ended")
                        .on("ended", function () {
                            $(window).trigger("html5lightbox.videofinished");
                            if (inst.autosliding) inst.gotoSlide(-1);
                            else if (inst.options.autoclose)
                                setTimeout(function () {
                                    inst.finish();
                                }, inst.options.autoclosedelay);
                        });
                };
                inst.embedFlash = function ($container, src, wmode, flashVars) {
                    if (inst.options.flashInstalled) {
                        var htmlOptions = { pluginspage: "http://www.adobe.com/go/getflashplayer", quality: "high", allowFullScreen: "true", allowScriptAccess: "always", type: "application/x-shockwave-flash" };
                        htmlOptions.width = "100%";
                        htmlOptions.height = "100%";
                        htmlOptions.src = src;
                        htmlOptions.flashVars = $.param(flashVars);
                        htmlOptions.wmode = wmode;
                        var htmlString = "";
                        for (var key in htmlOptions) htmlString += key + "=" + htmlOptions[key] + " ";
                        $container.html("<embed " + htmlString + "/>");
                    } else
                        $container.html(
                            "<div class='html5lightbox-flash-error' style='display:block; position:relative;text-align:center; width:100%; left:0px; top:40%;'><div class='html5-error'><div>The required Adobe Flash Player plugin is not installed</div><br /><div style='display:block;position:relative;text-align:center;width:112px;height:33px;margin:0px auto;'><a href='http://www.adobe.com/go/getflashplayer'><img src='http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif' alt='Get Adobe Flash player' width='112' height='33'></img></a></div></div>"
                        );
                };
                inst.checkType = function (href) {
                    if (!href) return -1;
                    if (href.match(/\.(jpg|gif|png|bmp|jpeg)(.*)?$/i)) return 0;
                    if (href.match(/[^\.]\.(swf)\s*$/i)) return 1;
                    if (href.match(/\.(mp4|m4v|ogv|ogg|webm)(.*)?$/i)) return 2;
                    if (href.match(/\:\/\/.*(youtube\.com)/i) || href.match(/\:\/\/.*(youtu\.be)/i)) return 3;
                    if (href.match(/\:\/\/.*(vimeo\.com)/i)) return 4;
                    if (href.match(/\:\/\/.*(dailymotion\.com)/i) || href.match(/\:\/\/.*(dai\.ly)/i)) return 9;
                    if (href.match(/[^\.]\.(pdf)/i)) return 5;
                    if (href.match(/[^\.]\.(mp3)\s*$/i)) return 6;
                    if (href.match(/[^\.]\.(flv)\s*$/i)) return 8;
                    if (href.match(/\#\w+/i)) return 10;
                    if (href.match(/\:\/\/.*(wistia)/i)) return 11;
                    return 7;
                };
                inst.getURLParams = function () {
                    var result = {};
                    var params = window.location.search.substring(1).split("&");
                    for (var i = 0; i < params.length; i++) {
                        var value = params[i].split("=");
                        if (value && value.length == 2) result[value[0].toLowerCase()] = unescape(value[1]);
                    }
                    return result;
                };
                inst.absoluteUrl = function (href) {
                    var link = document.createElement("a");
                    link.href = href;
                    return link.protocol + "//" + link.host + link.pathname + link.search + link.hash;
                };
                inst.showLightboxObject = function (obj) {
                    if (obj)
                        inst.showLightbox(
                            obj.type,
                            obj.href,
                            obj.title,
                            obj.width,
                            obj.height,
                            obj.webm,
                            obj.ogg,
                            obj.thumbnail,
                            obj.description,
                            obj.div,
                            obj.originalwidth,
                            obj.originalheight,
                            obj.socialmedia,
                            obj.weblink,
                            obj.weblinktarget,
                            obj.weblinktext,
                            obj.group,
                            obj.mediumwidth,
                            obj.mediumheight,
                            obj.smallwidth,
                            obj.smallheight
                        );
                };
                inst.showLightbox = function (
                    type,
                    href,
                    title,
                    width,
                    height,
                    webm,
                    ogg,
                    thumbnail,
                    description,
                    div,
                    originalwidth,
                    originalheight,
                    socialmedia,
                    weblink,
                    weblinktarget,
                    weblinktext,
                    group,
                    mediumwidth,
                    mediumheight,
                    smallwidth,
                    smallheight
                ) {
                    inst.options = $.extend(inst.options, inst.defaultoptions);
                    $(window).trigger("html5lightbox.lightboxshow");
                    inst.init();
                    inst.reset();
                    inst.$lightbox.show();
                    inst.adjustLightboxPos(inst.options.loadingwidth, inst.options.loadingheight);
                    inst.loadElem(
                        new Array(
                            type,
                            href,
                            title,
                            group,
                            width,
                            height,
                            webm,
                            ogg,
                            thumbnail,
                            description,
                            div,
                            originalwidth,
                            originalheight,
                            socialmedia,
                            weblink,
                            weblinktarget,
                            weblinktext,
                            mediumwidth,
                            mediumheight,
                            smallwidth,
                            smallheight
                        )
                    );
                };
                inst.addItemNoDuplicate = function (href, title, group, width, height, webm, ogg, thumbnail, description, mediatype, mediumwidth, mediumheight, smallwidth, smallheight) {
                    for (var i = 0; i < inst.elemArray.length; i++) if (inst.elemArray[i][ELEM_HREF] == href) return;
                    inst.addItem(href, title, group, width, height, webm, ogg, thumbnail, description, mediatype, mediumwidth, mediumheight, smallwidth, smallheight);
                };
                inst.addItem = function (href, title, group, width, height, webm, ogg, thumbnail, description, mediatype, mediumwidth, mediumheight, smallwidth, smallheight) {
                    type = mediatype && mediatype >= 0 ? mediatype : inst.checkType(href);
                    inst.elemArray.push(new Array(type, href, title, group, width, height, webm, ogg, thumbnail, description, null, null, null, null, null, null, null, mediumwidth, mediumheight, smallwidth, smallheight));
                };
                inst.showItem = function (href) {
                    inst.options = $.extend(inst.options, inst.defaultoptions);
                    $(window).trigger("html5lightbox.lightboxshow");
                    inst.init();
                    if (inst.elemArray.length <= 0) return true;
                    inst.hideObjects();
                    for (var i = 0; i < inst.elemArray.length; i++) if (inst.elemArray[i][ELEM_HREF] == href) break;
                    if (i == inst.elemArray.length) return true;
                    inst.options.curElem = i;
                    inst.calcNextPrevElem();
                    inst.reset();
                    inst.$lightbox.show();
                    inst.adjustLightboxPos(inst.options.loadingwidth, inst.options.loadingheight);
                    inst.loadCurElem();
                    return false;
                };
                inst.each(function () {
                    var self = $(this);
                    var nodeName = this.nodeName.toLowerCase();
                    if (nodeName == "a" || nodeName == "area") self.off("click").click(inst.clickHandler);
                    else
                        self.find("a,area").each(function () {
                            $(this).off("click").click(inst.clickHandler);
                        });
                    var autoopen = false;
                    var autoopendelay = 0;
                    var autoopenonce = false;
                    var autoopenonceexpire = 0;
                    if (typeof html5lightbox_options != "undefined" && html5lightbox_options) {
                        if ("autoopen" in html5lightbox_options) autoopen = html5lightbox_options.autoopen;
                        if ("autoopendelay" in html5lightbox_options) autoopendelay = html5lightbox_options.autoopendelay;
                        if ("autoopenonce" in html5lightbox_options) autoopenonce = html5lightbox_options.autoopenonce;
                        if ("autoopenonceexpire" in html5lightbox_options) autoopenonceexpire = html5lightbox_options.autoopenonceexpire;
                    }
                    autoopen = self.data("autoopen") ? self.data("autoopen") : autoopen;
                    autoopendelay = self.data("autoopendelay") ? self.data("autoopendelay") : autoopendelay;
                    autoopenonce = self.data("autoopenonce") ? self.data("autoopenonce") : autoopenonce;
                    autoopenonceexpire = self.data("autoopenonceexpire") ? self.data("autoopenonceexpire") : autoopenonceexpire;
                    var classoptions = inst.readClassOptions(self);
                    if (classoptions) {
                        if ("autoopen" in classoptions) autoopen = classoptions.autoopen;
                        if ("autoopendelay" in classoptions) autoopendelay = classoptions.autoopendelay;
                        if ("autoopenonce" in classoptions) autoopenonce = classoptions.autoopenonce;
                        if ("autoopenonceexpire" in classoptions) autoopenonceexpire = classoptions.autoopenonceexpire;
                    }
                    autocookie = "html5lightboxpopup=1;path=/";
                    if (autoopenonceexpire > 0) {
                        var expires = new Date();
                        expires.setTime(expires.getTime() + autoopenonceexpire * 60 * 60 * 1e3);
                        autocookie += ";expires=" + expires.toUTCString();
                    }
                    if (autoopen) {
                        var is_popped = false;
                        if (autoopenonce) {
                            var cookies = document.cookie ? document.cookie.split(";") : [];
                            for (var i in cookies) {
                                var parts = $.trim(cookies[i]).split("=");
                                if (parts.length && parts[0] == "html5lightboxpopup") {
                                    is_popped = true;
                                    break;
                                }
                            }
                        }
                        if (!is_popped) {
                            setTimeout(function () {
                                self.click();
                                document.cookie = autocookie;
                            }, autoopendelay);
                            return false;
                        }
                    }
                    if (self.data("preloadonpageload")) {
                        var fileType = "mediatype" in self.data() ? self.data("mediatype") : inst.checkType(self.attr("href"));
                        if (fileType == 0) {
                            var preloaddelay = self.data("preloaddelay") ? self.data("preloaddelay") : 0;
                            setTimeout(function () {
                                new Image().src = self.attr("href");
                            }, preloaddelay);
                        }
                    }
                });
                var urlParams = inst.getURLParams();
                if ("html5lightboxshare" in urlParams) {
                    var shareUrl = decodeURIComponent(urlParams["html5lightboxshare"]);
                    var shareLink = $('.html5lightbox[href="' + shareUrl + '"]');
                    if (shareLink.length > 0) shareLink.click();
                }
                if (inst.options.preloadallonpageload)
                    setTimeout(function () {
                        inst.each(function () {
                            if (this.nodeName.toLowerCase() != "a" && this.nodeName.toLowerCase() != "area") return;
                            var fileType = "mediatype" in $(this).data() ? $(this).data("mediatype") : inst.checkType($(this).attr("href"));
                            if (fileType !== 0) return;
                            new Image().src = $(this).attr("href");
                            if ($(this).data("thumbnail")) new Image().src = $(this).data("thumbnail");
                        });
                    }, inst.options.preloadalldelay);
                return inst;
            };
        })(jQuery);
        (function ($) {
            $.fn.html5lightboxTouchSwipe = function (options) {
                var defaults = { preventWebBrowser: false, swipeDistance: 0, swipeLeft: null, swipeRight: null, swipeTop: null, swipeBottom: null };
                if (options) $.extend(defaults, options);
                return this.each(function () {
                    var startX = -1,
                        startY = -1;
                    var curX = -1,
                        curY = -1;
                    function touchStart(event) {
                        var e = event.originalEvent;
                        if (e.targetTouches.length >= 1) {
                            startX = e.targetTouches[0].pageX;
                            startY = e.targetTouches[0].pageY;
                        } else touchCancel(event);
                    }
                    function touchMove(event) {
                        if (defaults.preventWebBrowser) event.preventDefault();
                        var e = event.originalEvent;
                        if (e.targetTouches.length >= 1) {
                            curX = e.targetTouches[0].pageX;
                            curY = e.targetTouches[0].pageY;
                        } else touchCancel(event);
                    }
                    function touchEnd(event) {
                        if (curX > 0 || curY > 0) {
                            triggerHandler();
                            touchCancel(event);
                        } else touchCancel(event);
                    }
                    function touchCancel(event) {
                        startX = -1;
                        startY = -1;
                        curX = -1;
                        curY = -1;
                    }
                    function triggerHandler() {
                        if (Math.abs(curX - startX) > Math.abs(curY - startY)) {
                            if (Math.abs(curX - startX) > defaults.swipeDistance)
                                if (curX > startX) {
                                    if (defaults.swipeRight) defaults.swipeRight.call();
                                } else if (defaults.swipeLeft) defaults.swipeLeft.call();
                        } else if (Math.abs(curY - startY) > defaults.swipeDistance)
                            if (curY > startY) {
                                if (defaults.swipeBottom) defaults.swipeBottom.call();
                            } else if (defaults.swipeTop) defaults.swipeTop.call();
                    }
                    try {
                        $(this).on("touchstart", touchStart);
                        $(this).on("touchmove", touchMove);
                        $(this).on("touchend", touchEnd);
                        $(this).on("touchcancel", touchCancel);
                    } catch (e) {}
                });
            };
        })(jQuery);
        (function ($) {
            $.fn.lightboxHTML5VideoControls = function (skinFolder, parentInst, videoElem, hideControls, hidePlayButton, defaultVolume, fullscreenNativeControls, html5VideoNoDownload, skinImages, showsubtitle, vttline, showsubtitlebydefault) {
                var isTouch = "ontouchstart" in window;
                var eStart = isTouch ? "touchstart" : "mousedown";
                var eMove = isTouch ? "touchmove" : "mousemove";
                var eCancel = isTouch ? "touchcancel" : "mouseup";
                var eClick = "click";
                var BUTTON_SIZE = 32;
                var BAR_HEIGHT = isTouch ? 48 : 36;
                var hideControlsTimerId = null;
                var hideVolumeBarTimeoutId = null;
                var sliderDragging = false;
                var isFullscreen = false;
                var userActive = true;
                var isHd = $(this).data("ishd");
                var hd = $(this).data("hd");
                var src = $(this).data("src");
                var $videoObj = $(this);
                $videoObj.get(0).removeAttribute("controls");
                var $videoPlay = $("<div class='html5boxVideoPlay'></div>");
                $videoObj.after($videoPlay);
                var playbuttonImage = skinImages && "playbutton" in skinImages && skinImages.playbutton.length > 0 ? skinImages.playbutton : skinFolder + "html5boxplayer_playvideo.png";
                $videoPlay
                    .css({
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        display: "block",
                        cursor: "pointer",
                        width: 64,
                        height: 64,
                        "margin-left": -32,
                        "margin-top": -32,
                        "background-image": "url('" + playbuttonImage + "')",
                        "background-position": "center center",
                        "background-repeat": "no-repeat",
                    })
                    .on(eClick, function () {
                        $videoObj.get(0).play();
                    });
                var $videoFullscreenBg = $("<div class='html5boxVideoFullscreenBg'></div>");
                var $videoControls = $(
                    "<div class='html5boxVideoControls'>" +
                        "<div class='html5boxVideoControlsBg'></div>" +
                        "<div class='html5boxPlayPause'>" +
                        "<div class='html5boxPlay'></div>" +
                        "<div class='html5boxPause'></div>" +
                        "</div>" +
                        "<div class='html5boxTimeCurrent'>--:--</div>" +
                        "<div class='html5boxFullscreen'></div>" +
                        "<div class='html5boxCaption'></div>" +
                        "<div class='html5boxHD'></div>" +
                        "<div class='html5boxVolume'>" +
                        "<div class='html5boxVolumeButton'></div>" +
                        "<div class='html5boxVolumeBar'>" +
                        "<div class='html5boxVolumeBarBg'>" +
                        "<div class='html5boxVolumeBarActive'></div>" +
                        "</div>" +
                        "</div>" +
                        "</div>" +
                        "<div class='html5boxTimeTotal'>--:--</div>" +
                        "<div class='html5boxSeeker'>" +
                        "<div class='html5boxSeekerBuffer'></div>" +
                        "<div class='html5boxSeekerPlay'></div>" +
                        "<div class='html5boxSeekerHandler'></div>" +
                        "</div>" +
                        "<div style='clear:both;'></div>" +
                        "</div>"
                );
                $videoObj.after($videoControls);
                $videoObj.after($videoFullscreenBg);
                $videoFullscreenBg.css({ display: "none", position: "fixed", left: 0, top: 0, bottom: 0, right: 0 });
                $videoControls.css({ display: "block", position: "absolute", width: "100%", height: BAR_HEIGHT, left: 0, bottom: 0, right: 0, margin: "0 auto" });
                var userActivate = function () {
                    userActive = true;
                };
                $videoObj.on("touch click mousemove mouseenter", function () {
                    userActive = true;
                });
                if (!hideControls)
                    setInterval(function () {
                        if (userActive) {
                            $videoControls.show();
                            userActive = false;
                            clearTimeout(hideControlsTimerId);
                            hideControlsTimerId = setTimeout(function () {
                                if (!$videoObj.get(0).paused) $videoControls.fadeOut();
                            }, 5e3);
                        }
                    }, 250);
                $(".html5boxVideoControlsBg", $videoControls).css({ display: "block", position: "absolute", width: "100%", height: "100%", left: 0, top: 0, "background-color": "#000000", opacity: 0.7, filter: "alpha(opacity=70)" });
                $(".html5boxPlayPause", $videoControls).css({ display: "block", position: "relative", width: BUTTON_SIZE + "px", height: BUTTON_SIZE + "px", margin: Math.floor((BAR_HEIGHT - BUTTON_SIZE) / 2), float: "left" });
                var $videoBtnPlay = $(".html5boxPlay", $videoControls);
                var $videoBtnPause = $(".html5boxPause", $videoControls);
                $videoBtnPlay
                    .css({
                        display: "block",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: BUTTON_SIZE + "px",
                        height: BUTTON_SIZE + "px",
                        cursor: "pointer",
                        "background-image": "url('" + skinFolder + "html5boxplayer_playpause.png" + "')",
                        "background-position": "top left",
                    })
                    .hover(
                        function () {
                            $(this).css({ "background-position": "bottom left" });
                        },
                        function () {
                            $(this).css({ "background-position": "top left" });
                        }
                    )
                    .on(eClick, function () {
                        $videoObj.get(0).play();
                    });
                $videoBtnPause
                    .css({
                        display: "none",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: BUTTON_SIZE + "px",
                        height: BUTTON_SIZE + "px",
                        cursor: "pointer",
                        "background-image": "url('" + skinFolder + "html5boxplayer_playpause.png" + "')",
                        "background-position": "top right",
                    })
                    .hover(
                        function () {
                            $(this).css({ "background-position": "bottom right" });
                        },
                        function () {
                            $(this).css({ "background-position": "top right" });
                        }
                    )
                    .on(eClick, function () {
                        $videoObj.get(0).pause();
                    });
                var $videoTimeCurrent = $(".html5boxTimeCurrent", $videoControls);
                var $videoTimeTotal = $(".html5boxTimeTotal", $videoControls);
                var $videoSeeker = $(".html5boxSeeker", $videoControls);
                var $videoSeekerPlay = $(".html5boxSeekerPlay", $videoControls);
                var $videoSeekerBuffer = $(".html5boxSeekerBuffer", $videoControls);
                var $videoSeekerHandler = $(".html5boxSeekerHandler", $videoControls);
                $videoTimeCurrent.css({
                    display: "block",
                    position: "relative",
                    float: "left",
                    "line-height": BAR_HEIGHT + "px",
                    "font-weight": "normal",
                    "font-size": "12px",
                    margin: "0 8px",
                    "font-family": "Arial, Helvetica, sans-serif",
                    color: "#fff",
                });
                $videoTimeTotal.css({
                    display: "block",
                    position: "relative",
                    float: "right",
                    "line-height": BAR_HEIGHT + "px",
                    "font-weight": "normal",
                    "font-size": "12px",
                    margin: "0 8px",
                    "font-family": "Arial, Helvetica, sans-serif",
                    color: "#fff",
                });
                $videoSeeker
                    .css({ display: "block", cursor: "pointer", overflow: "hidden", position: "relative", height: "10px", "background-color": "#222", margin: Math.floor((BAR_HEIGHT - 10) / 2) + "px 4px" })
                    .on(eStart, function (e) {
                        var e0 = isTouch ? e.originalEvent.touches[0] : e;
                        var pos = e0.pageX - $videoSeeker.offset().left;
                        $videoSeekerPlay.css({ width: pos });
                        $videoObj.get(0).currentTime = (pos * $videoObj.get(0).duration) / $videoSeeker.width();
                        $videoSeeker.on(eMove, function (e) {
                            var e0 = isTouch ? e.originalEvent.touches[0] : e;
                            var pos = e0.pageX - $videoSeeker.offset().left;
                            $videoSeekerPlay.css({ width: pos });
                            $videoObj.get(0).currentTime = (pos * $videoObj.get(0).duration) / $videoSeeker.width();
                        });
                    })
                    .on(eCancel, function () {
                        $videoSeeker.off(eMove);
                    });
                $videoSeekerBuffer.css({ display: "block", position: "absolute", left: 0, top: 0, height: "100%", "background-color": "#444" });
                $videoSeekerPlay.css({ display: "block", position: "absolute", left: 0, top: 0, height: "100%", "background-color": "#fcc500" });
                var $videoFSObj = fullscreenNativeControls ? $videoObj : $videoObj.parent();
                if ($videoFSObj.get(0).requestFullscreen || $videoFSObj.get(0).webkitRequestFullScreen || $videoFSObj.get(0).mozRequestFullScreen || $videoFSObj.get(0).webkitEnterFullScreen || $videoFSObj.get(0).msRequestFullscreen) {
                    var switchScreen = function (fullscreen) {
                        if (fullscreen) {
                            if (fullscreenNativeControls) {
                                $videoObj.get(0).setAttribute("controls", "controls");
                                if (html5VideoNoDownload) $videoObj.get(0).setAttribute("controlsList", "nodownload");
                            }
                            if ($videoFSObj.get(0).requestFullscreen) $videoFSObj.get(0).requestFullscreen();
                            else if ($videoFSObj.get(0).webkitRequestFullScreen) $videoFSObj.get(0).webkitRequestFullScreen();
                            else if ($videoFSObj.get(0).mozRequestFullScreen) $videoFSObj.get(0).mozRequestFullScreen();
                            else if ($videoFSObj.get(0).webkitEnterFullScreen) $videoFSObj.get(0).webkitEnterFullScreen();
                            if ($videoFSObj.get(0).msRequestFullscreen) $videoFSObj.get(0).msRequestFullscreen();
                        } else if (document.cancelFullScreen) document.cancelFullScreen();
                        else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
                        else if (document.webkitCancelFullScreen) document.webkitCancelFullScreen();
                        else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
                        else if (document.msExitFullscreen) document.msExitFullscreen();
                    };
                    var switchScreenCSS = function (fullscreen) {
                        if (fullscreenNativeControls)
                            if (fullscreen) {
                                $videoObj.get(0).setAttribute("controls", "controls");
                                if (html5VideoNoDownload) $videoObj.get(0).setAttribute("controlsList", "nodownload");
                            } else $videoObj.get(0).removeAttribute("controls");
                        else if (fullscreen) {
                            $(document).on("mousemove", userActivate);
                            $videoControls.css({ "z-index": 2147483647, position: "fixed" });
                            $videoFullscreenBg.css({ "z-index": 2147483647, display: "block" });
                            $videoPlay.css({ "z-index": 2147483647 });
                        } else {
                            $(document).off("mousemove", userActivate);
                            $videoControls.css({ "z-index": "", position: "absolute" });
                            $videoFullscreenBg.css({ "z-index": "", display: "none" });
                            $videoPlay.css({ "z-index": "" });
                        }
                    };
                    if (document.addEventListener) {
                        document.addEventListener(
                            "MSFullscreenChange",
                            function () {
                                isFullscreen = document.msFullscreenElement != null;
                                switchScreenCSS(isFullscreen);
                            },
                            false
                        );
                        document.addEventListener(
                            "fullscreenchange",
                            function () {
                                isFullscreen = document.fullscreen;
                                switchScreenCSS(isFullscreen);
                            },
                            false
                        );
                        document.addEventListener(
                            "mozfullscreenchange",
                            function () {
                                isFullscreen = document.mozFullScreen;
                                switchScreenCSS(isFullscreen);
                            },
                            false
                        );
                        document.addEventListener(
                            "webkitfullscreenchange",
                            function () {
                                isFullscreen = document.webkitIsFullScreen;
                                switchScreenCSS(isFullscreen);
                            },
                            false
                        );
                    }
                    if ($videoFSObj && $videoFSObj.get(0) && $videoFSObj.get(0).addEventListener) {
                        $videoFSObj.get(0).addEventListener(
                            "webkitbeginfullscreen",
                            function () {
                                isFullscreen = true;
                                switchScreenCSS(isFullscreen);
                            },
                            false
                        );
                        $videoFSObj.get(0).addEventListener(
                            "webkitendfullscreen",
                            function () {
                                isFullscreen = false;
                                switchScreenCSS(isFullscreen);
                            },
                            false
                        );
                    }
                    if (!fullscreenNativeControls) $("head").append("<style type='text/css'>video" + videoElem + "::-webkit-media-controls { display:none !important; }</style>");
                    var $videoFullscreen = $(".html5boxFullscreen", $videoControls);
                    $videoFullscreen
                        .css({
                            display: "block",
                            position: "relative",
                            float: "right",
                            width: BUTTON_SIZE + "px",
                            height: BUTTON_SIZE + "px",
                            margin: Math.floor((BAR_HEIGHT - BUTTON_SIZE) / 2),
                            cursor: "pointer",
                            "background-image": "url('" + skinFolder + "html5boxplayer_fullscreen.png" + "')",
                            "background-position": "left top",
                        })
                        .hover(
                            function () {
                                var backgroundPosX = $(this).css("background-position") ? $(this).css("background-position").split(" ")[0] : $(this).css("background-position-x");
                                $(this).css({ "background-position": backgroundPosX + " bottom" });
                            },
                            function () {
                                var backgroundPosX = $(this).css("background-position") ? $(this).css("background-position").split(" ")[0] : $(this).css("background-position-x");
                                $(this).css({ "background-position": backgroundPosX + " top" });
                            }
                        )
                        .on(eClick, function () {
                            isFullscreen = !isFullscreen;
                            switchScreen(isFullscreen);
                        });
                }
                if (hd) {
                    var $videoHD = $(".html5boxHD", $videoControls);
                    $videoHD
                        .css({
                            display: "block",
                            position: "relative",
                            float: "right",
                            width: BUTTON_SIZE + "px",
                            height: BUTTON_SIZE + "px",
                            margin: Math.floor((BAR_HEIGHT - BUTTON_SIZE) / 2),
                            cursor: "pointer",
                            "background-image": "url('" + skinFolder + "html5boxplayer_hd.png" + "')",
                            "background-position": (isHd ? "right" : "left") + " center",
                        })
                        .on(eClick, function () {
                            isHd = !isHd;
                            $(this).css({ "background-position": (isHd ? "right" : "left") + " center" });
                            parentInst.isHd = isHd;
                            var isPaused = $videoObj.get(0).isPaused;
                            $videoObj.get(0).setAttribute("src", (isHd ? hd : src) + "#t=" + $videoObj.get(0).currentTime);
                            if (!isPaused) $videoObj.get(0).play();
                            else $videoObj.get(0).pause();
                        });
                }
                if (showsubtitle) {
                    var $videoCaption = $(".html5boxCaption", $videoControls);
                    $videoCaption
                        .css({
                            display: "block",
                            position: "relative",
                            float: "right",
                            width: BUTTON_SIZE + "px",
                            height: BUTTON_SIZE + "px",
                            margin: Math.floor((BAR_HEIGHT - BUTTON_SIZE) / 2),
                            cursor: "pointer",
                            "background-image": "url('" + skinFolder + "html5boxplayer_caption.png" + "')",
                            "background-position": showsubtitlebydefault ? "right center" : "left center",
                        })
                        .data("showcaption", showsubtitlebydefault)
                        .on(eClick, function () {
                            var showcaption = !$videoCaption.data("showcaption");
                            $videoCaption.data("showcaption", showcaption).css({ "background-position": (showcaption ? "right" : "left") + " center" });
                            if ($videoObj.get(0).textTracks) for (var i = 0; i < $videoObj.get(0).textTracks.length; i++) $videoObj.get(0).textTracks[i].mode = showcaption ? "showing" : "hidden";
                        });
                }
                $videoObj.get(0).volume = defaultVolume;
                var volumeSaved = defaultVolume == 0 ? 1 : defaultVolume;
                var volume = $videoObj.get(0).volume;
                $videoObj.get(0).volume = volume / 2 + 0.1;
                if ($videoObj.get(0).volume === volume / 2 + 0.1) {
                    $videoObj.get(0).volume = volume;
                    var $videoVolume = $(".html5boxVolume", $videoControls);
                    var $videoVolumeButton = $(".html5boxVolumeButton", $videoControls);
                    var $videoVolumeBar = $(".html5boxVolumeBar", $videoControls);
                    var $videoVolumeBarBg = $(".html5boxVolumeBarBg", $videoControls);
                    var $videoVolumeBarActive = $(".html5boxVolumeBarActive", $videoControls);
                    $videoVolume.css({ display: "block", position: "relative", float: "right", width: BUTTON_SIZE + "px", height: BUTTON_SIZE + "px", margin: Math.floor((BAR_HEIGHT - BUTTON_SIZE) / 2) }).hover(
                        function () {
                            clearTimeout(hideVolumeBarTimeoutId);
                            var volume = $videoObj.get(0).volume;
                            $videoVolumeBarActive.css({ height: Math.round(volume * 100) + "%" });
                            $videoVolumeBar.show();
                        },
                        function () {
                            clearTimeout(hideVolumeBarTimeoutId);
                            hideVolumeBarTimeoutId = setTimeout(function () {
                                $videoVolumeBar.hide();
                            }, 1e3);
                        }
                    );
                    $videoVolumeButton
                        .css({
                            display: "block",
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: BUTTON_SIZE + "px",
                            height: BUTTON_SIZE + "px",
                            cursor: "pointer",
                            "background-image": "url('" + skinFolder + "html5boxplayer_volume.png" + "')",
                            "background-position": "top " + (volume > 0 ? "left" : "right"),
                        })
                        .hover(
                            function () {
                                var backgroundPosX = $(this).css("background-position") ? $(this).css("background-position").split(" ")[0] : $(this).css("background-position-x");
                                $(this).css({ "background-position": backgroundPosX + " bottom" });
                            },
                            function () {
                                var backgroundPosX = $(this).css("background-position") ? $(this).css("background-position").split(" ")[0] : $(this).css("background-position-x");
                                $(this).css({ "background-position": backgroundPosX + " top" });
                            }
                        )
                        .on(eClick, function () {
                            var volume = $videoObj.get(0).volume;
                            if (volume > 0) {
                                volumeSaved = volume;
                                volume = 0;
                            } else volume = volumeSaved;
                            var backgroundPosY = $(this).css("background-position") ? $(this).css("background-position").split(" ")[1] : $(this).css("background-position-y");
                            $videoVolumeButton.css({ "background-position": (volume > 0 ? "left" : "right") + " " + backgroundPosY });
                            if (volume > 0) $videoObj.prop("muted", false);
                            $videoObj.get(0).volume = volume;
                            $videoVolumeBarActive.css({ height: Math.round(volume * 100) + "%" });
                        });
                    $videoVolumeBar.css({
                        display: "none",
                        position: "absolute",
                        left: 4,
                        bottom: "100%",
                        width: 24,
                        height: 80,
                        "margin-bottom": Math.floor((BAR_HEIGHT - BUTTON_SIZE) / 2),
                        "background-color": "#000000",
                        opacity: 0.7,
                        filter: "alpha(opacity=70)",
                    });
                    $videoVolumeBarBg.css({ display: "block", position: "relative", width: 10, height: 68, margin: 7, cursor: "pointer", "background-color": "#222" });
                    $videoVolumeBarActive.css({ display: "block", position: "absolute", bottom: 0, left: 0, width: "100%", height: "100%", "background-color": "#fcc500" });
                    $videoVolumeBarBg
                        .on(eStart, function (e) {
                            var e0 = isTouch ? e.originalEvent.touches[0] : e;
                            var vol = 1 - (e0.pageY - $videoVolumeBarBg.offset().top) / $videoVolumeBarBg.height();
                            vol = vol > 1 ? 1 : vol < 0 ? 0 : vol;
                            $videoVolumeBarActive.css({ height: Math.round(vol * 100) + "%" });
                            $videoVolumeButton.css({ "background-position": "left " + (vol > 0 ? "top" : "bottom") });
                            if (vol > 0) $videoObj.prop("muted", false);
                            $videoObj.get(0).volume = vol;
                            $videoVolumeBarBg.on(eMove, function (e) {
                                var e0 = isTouch ? e.originalEvent.touches[0] : e;
                                var vol = 1 - (e0.pageY - $videoVolumeBarBg.offset().top) / $videoVolumeBarBg.height();
                                vol = vol > 1 ? 1 : vol < 0 ? 0 : vol;
                                $videoVolumeBarActive.css({ height: Math.round(vol * 100) + "%" });
                                $videoVolumeButton.css({ "background-position": "left " + (vol > 0 ? "top" : "bottom") });
                                if (vol > 0) $videoObj.prop("muted", false);
                                $videoObj.get(0).volume = vol;
                            });
                        })
                        .on(eCancel, function () {
                            $videoVolumeBarBg.off(eMove);
                        });
                }
                var calcTimeFormat = function (seconds) {
                    var h0 = Math.floor(seconds / 3600);
                    var h = h0 < 10 ? "0" + h0 : h0;
                    var m0 = Math.floor((seconds - h0 * 3600) / 60);
                    var m = m0 < 10 ? "0" + m0 : m0;
                    var s0 = Math.floor(seconds - (h0 * 3600 + m0 * 60));
                    var s = s0 < 10 ? "0" + s0 : s0;
                    var r = m + ":" + s;
                    if (h0 > 0) r = h + ":" + r;
                    return r;
                };
                if (hidePlayButton) $videoPlay.hide();
                if (hideControls) $videoControls.hide();
                var setVttline = function (vttline) {
                    if ($videoObj.get(0).textTracks) {
                        for (var i = 0; i < $videoObj.get(0).textTracks.length; i++) {
                            $videoObj.get(0).textTracks[i].mode = "hidden";
                            if ($videoObj.get(0).textTracks[i].activeCues) for (var j = 0; j < $videoObj.get(0).textTracks[i].activeCues.length; j++) $videoObj.get(0).textTracks[i].activeCues[j].line = vttline;
                            if ($videoObj.get(0).textTracks[i].cues) for (var j = 0; j < $videoObj.get(0).textTracks[i].cues.length; j++) $videoObj.get(0).textTracks[i].cues[j].line = vttline;
                        }
                        var showcaption = $(".html5boxCaption", $videoControls).data("showcaption");
                        for (var i = 0; i < $videoObj.get(0).textTracks.length; i++) $videoObj.get(0).textTracks[i].mode = showcaption ? "showing" : "hidden";
                    }
                };
                var onVideoPlay = function () {
                    if (!hidePlayButton) $videoPlay.hide();
                    if (!hideControls) {
                        $videoBtnPlay.hide();
                        $videoBtnPause.show();
                    }
                };
                var onVideoPause = function () {
                    if (!hidePlayButton) $videoPlay.show();
                    if (!hideControls) {
                        $videoControls.show();
                        clearTimeout(hideControlsTimerId);
                        $videoBtnPlay.show();
                        $videoBtnPause.hide();
                    }
                };
                var onVideoEnded = function () {
                    $(window).trigger("html5lightbox.videoended");
                    if (!hidePlayButton) $videoPlay.show();
                    if (!hideControls) {
                        $videoControls.show();
                        clearTimeout(hideControlsTimerId);
                        $videoBtnPlay.show();
                        $videoBtnPause.hide();
                    }
                };
                var onVideoUpdate = function () {
                    var curTime = $videoObj.get(0).currentTime;
                    if (curTime) {
                        $videoTimeCurrent.text(calcTimeFormat(curTime));
                        var duration = $videoObj.get(0).duration;
                        if (duration) {
                            $videoTimeTotal.text(calcTimeFormat(duration));
                            if (!sliderDragging) {
                                var sliderW = $videoSeeker.width();
                                var pos = Math.round((sliderW * curTime) / duration);
                                $videoSeekerPlay.css({ width: pos });
                                $videoSeekerHandler.css({ left: pos });
                            }
                        }
                    }
                };
                var onVideoProgress = function () {
                    if ($videoObj.get(0).buffered && $videoObj.get(0).buffered.length > 0 && !isNaN($videoObj.get(0).buffered.end(0)) && !isNaN($videoObj.get(0).duration)) {
                        var sliderW = $videoSeeker.width();
                        $videoSeekerBuffer.css({ width: Math.round((sliderW * $videoObj.get(0).buffered.end(0)) / $videoObj.get(0).duration) });
                    }
                };
                try {
                    $videoObj.on("canplay", function () {
                        if (showsubtitle) setVttline(vttline);
                    });
                    $videoObj.on("play", onVideoPlay);
                    $videoObj.on("pause", onVideoPause);
                    $videoObj.on("ended", onVideoEnded);
                    $videoObj.on("timeupdate", onVideoUpdate);
                    $videoObj.on("progress", onVideoProgress);
                } catch (e) {}
            };
        })(jQuery);
        jQuery(document).ready(function () {
            if (typeof html5Lightbox === "undefined") if (jQuery.fn.html5lightbox) html5Lightbox = jQuery(".html5lightbox").html5lightbox();
        });
    }
