(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[c[0x0]] = c;
    return '';
}
function regTextVar(a, b) {
    var c = ![];
    b = b['toLowerCase']();
    var d = function () {
        var m = this['get']('data');
        m['updateText'](m['translateObjs'][a]);
    };
    var e = function (m) {
        var n = m['data']['nextSelectedIndex'];
        if (n >= 0x0) {
            var o = m['source']['get']('items')[n];
            var p = function () {
                o['unbind']('start', p, this);
                d['call'](this);
            };
            o['bind']('start', p, this);
        } else
            d['call'](this);
    };
    var f = function (m) {
        return function (n) {
            if (m in n) {
                d['call'](this);
            }
        }['bind'](this);
    };
    var g = function (m, n) {
        return function (o, p) {
            if (m == o && n in p) {
                d['call'](this);
            }
        }['bind'](this);
    };
    var h = function (m, n, o) {
        for (var p = 0x0; p < m['length']; ++p) {
            var q = m[p];
            var r = q['get']('selectedIndex');
            if (r >= 0x0) {
                var s = n['split']('.');
                var t = q['get']('items')[r];
                if (o !== undefined && !o['call'](this, t))
                    continue;
                for (var u = 0x0; u < s['length']; ++u) {
                    if (t == undefined)
                        return '';
                    t = 'get' in t ? t['get'](s[u]) : t[s[u]];
                }
                return t;
            }
        }
        return '';
    };
    var i = function (m) {
        var n = m['get']('player');
        return n !== undefined && n['get']('viewerArea') == this['getMainViewer']();
    };
    switch (b) {
    case 'title':
    case 'subtitle':
        var k = function () {
            switch (b) {
            case 'title':
                return 'media.label';
            case 'subtitle':
                return 'media.data.subtitle';
            }
        }();
        if (k) {
            return function () {
                var m = this['_getPlayListsWithViewer'](this['getMainViewer']());
                if (!c) {
                    for (var n = 0x0; n < m['length']; ++n) {
                        m[n]['bind']('changing', e, this);
                    }
                    c = !![];
                }
                return h['call'](this, m, k, i);
            };
        }
        break;
    default:
        if (b['startsWith']('quiz.') && 'Quiz' in TDV) {
            var l = undefined;
            var k = function () {
                switch (b) {
                case 'quiz.questions.answered':
                    return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                case 'quiz.question.count':
                    return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                case 'quiz.items.found':
                    return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                case 'quiz.item.count':
                    return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                case 'quiz.score':
                    return TDV['Quiz']['PROPERTY']['SCORE'];
                case 'quiz.score.total':
                    return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                case 'quiz.time.remaining':
                    return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                case 'quiz.time.elapsed':
                    return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                case 'quiz.time.limit':
                    return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                case 'quiz.media.items.found':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                case 'quiz.media.item.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                case 'quiz.media.questions.answered':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                case 'quiz.media.question.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                case 'quiz.media.score':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                case 'quiz.media.score.total':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                case 'quiz.media.index':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                case 'quiz.media.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                case 'quiz.media.visited':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                default:
                    var m = /quiz\.([\w_]+)\.(.+)/['exec'](b);
                    if (m) {
                        l = m[0x1];
                        switch ('quiz.' + m[0x2]) {
                        case 'quiz.score':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                        case 'quiz.score.total':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                        case 'quiz.media.items.found':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                        case 'quiz.media.item.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                        case 'quiz.media.questions.answered':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                        case 'quiz.media.question.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                        case 'quiz.questions.answered':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                        case 'quiz.question.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                        case 'quiz.items.found':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                        case 'quiz.item.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                        case 'quiz.media.score':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                        case 'quiz.media.score.total':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                        }
                    }
                }
            }();
            if (k) {
                return function () {
                    var m = this['get']('data')['quiz'];
                    if (m) {
                        if (!c) {
                            if (l != undefined)
                                if (l == 'global') {
                                    var o = this['get']('data')['quizConfig'];
                                    var q = o['objectives'];
                                    for (var s = 0x0, u = q['length']; s < u; ++s) {
                                        m['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], g['call'](this, q[s]['id'], k), this);
                                    }
                                } else {
                                    m['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], g['call'](this, l, k), this);
                                }
                            else
                                m['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], f['call'](this, k), this);
                            c = !![];
                        }
                        try {
                            var v = 0x0;
                            if (l != undefined) {
                                if (l == 'global') {
                                    var o = this['get']('data')['quizConfig'];
                                    var q = o['objectives'];
                                    for (var s = 0x0, u = q['length']; s < u; ++s) {
                                        v += m['getObjective'](q[s]['id'], k);
                                    }
                                } else {
                                    v = m['getObjective'](l, k);
                                }
                            } else {
                                v = m['get'](k);
                                if (k == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                    v += 0x1;
                            }
                            return v;
                        } catch (w) {
                            return undefined;
                        }
                    }
                };
            }
        }
        break;
    }
    return '';
}
function createQuizConfig(player, a) {
    var b = {};
    b['player'] = player;
    b['playList'] = a;
    function c(f) {
        for (var g = 0x0; g < f['length']; ++g) {
            var h = f[g];
            if ('id' in h)
                player[h['id']] = h;
        }
    }
    if (b['questions']) {
        c(b['questions']);
        for (var d = 0x0; d < b['questions']['length']; ++d) {
            var e = b['questions'][d];
            c(e['options']);
        }
    }
    if (b['objectives']) {
        c(b['objectives']);
    }
    if (b['califications']) {
        c(b['califications']);
    }
    if (b['score']) {
        player[b['score']['id']] = b['score'];
    }
    if (b['question']) {
        player[b['question']['id']] = b['question'];
    }
    if (b['timeout']) {
        player[b['timeout']['id']] = b['timeout'];
    }
    player['get']('data')['translateObjs'] = translateObjs;
    return b;
}
var script = {"start":"this.playAudioList([this.audio_EB3F0716_F9D9_256B_41E6_5DE0B981EDF5], true); this.init()","borderSize":0,"borderRadius":0,"scrollBarColor":"#000000","gap":10,"width":"100%","paddingLeft":0,"paddingTop":0,"id":"rootPlayer","mouseWheelEnabled":true,"desktopMipmappingEnabled":false,"defaultMenu":["fullscreen","mute","rotation"],"paddingBottom":0,"paddingRight":0,"horizontalAlign":"left","backgroundColorRatios":[0],"scripts":{"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"showWindow":TDV.Tour.Script.showWindow,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"isPanorama":TDV.Tour.Script.isPanorama,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"initAnalytics":TDV.Tour.Script.initAnalytics,"historyGoForward":TDV.Tour.Script.historyGoForward,"quizFinish":TDV.Tour.Script.quizFinish,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"getMainViewer":TDV.Tour.Script.getMainViewer,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"getKey":TDV.Tour.Script.getKey,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"historyGoBack":TDV.Tour.Script.historyGoBack,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"executeJS":TDV.Tour.Script.executeJS,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"showPopupImage":TDV.Tour.Script.showPopupImage,"openLink":TDV.Tour.Script.openLink,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"clone":TDV.Tour.Script.clone,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"init":TDV.Tour.Script.init,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"resumePlayers":TDV.Tour.Script.resumePlayers,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"textToSpeech":TDV.Tour.Script.textToSpeech,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"cloneBindings":TDV.Tour.Script.cloneBindings,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"registerKey":TDV.Tour.Script.registerKey,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"initQuiz":TDV.Tour.Script.initQuiz,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"getMediaByName":TDV.Tour.Script.getMediaByName,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"cloneCamera":TDV.Tour.Script.cloneCamera,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"playAudioList":TDV.Tour.Script.playAudioList,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"unregisterKey":TDV.Tour.Script.unregisterKey,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"getOverlays":TDV.Tour.Script.getOverlays,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"setMapLocation":TDV.Tour.Script.setMapLocation,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"setValue":TDV.Tour.Script.setValue,"shareSocial":TDV.Tour.Script.shareSocial,"getPixels":TDV.Tour.Script.getPixels,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"setLocale":TDV.Tour.Script.setLocale,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"downloadFile":TDV.Tour.Script.downloadFile,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"mixObject":TDV.Tour.Script.mixObject,"quizShowScore":TDV.Tour.Script.quizShowScore,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"existsKey":TDV.Tour.Script.existsKey,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getComponentByName":TDV.Tour.Script.getComponentByName,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"translate":TDV.Tour.Script.translate,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"quizStart":TDV.Tour.Script.quizStart},"scrollBarMargin":2,"backgroundOpacity":1,"vrPolyfillScale":0.75,"contentOpaque":false,"toolTipHorizontalAlign":"center","height":"100%","verticalAlign":"top","backgroundColor":["#FFFFFF"],"defaultVRPointer":"laser","layout":"absolute","backgroundPreloadEnabled":true,"overflow":"hidden","scrollBarOpacity":0.5,"definitions": [{"frames":[{"thumbnailUrl":"media/panorama_F3B5F65F_F9D7_2799_41E1_4D73DD2A1617_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"width":12288,"url":"media/panorama_F3B5F65F_F9D7_2799_41E1_4D73DD2A1617_0/{face}/0/{row}_{column}.jpg","height":2048,"colCount":24,"class":"TiledImageResourceLevel","rowCount":4,"tags":"ondemand"},{"width":6144,"url":"media/panorama_F3B5F65F_F9D7_2799_41E1_4D73DD2A1617_0/{face}/1/{row}_{column}.jpg","height":1024,"colCount":12,"class":"TiledImageResourceLevel","rowCount":2,"tags":"ondemand"},{"width":3072,"url":"media/panorama_F3B5F65F_F9D7_2799_41E1_4D73DD2A1617_0/{face}/2/{row}_{column}.jpg","height":512,"colCount":6,"class":"TiledImageResourceLevel","rowCount":1,"tags":["ondemand","preload"]},{"width":9216,"url":"media/panorama_F3B5F65F_F9D7_2799_41E1_4D73DD2A1617_0/{face}/vr/0.jpg","height":1536,"colCount":6,"class":"TiledImageResourceLevel","rowCount":1,"tags":"mobilevr"},{"width":12288,"url":"media/panorama_F3B5F65F_F9D7_2799_41E1_4D73DD2A1617_0/{face}/vr2gen/0.jpg","height":2048,"colCount":6,"class":"TiledImageResourceLevel","rowCount":1,"tags":"mobilevr2gen"}],"class":"ImageResource"}}],"data":{"label":"Entrada lado direfito"},"partial":false,"overlays":["this.overlay_F7273F25_F9E8_E5A9_41E1_29C684746EA3"],"pitch":0,"id":"panorama_F3B5F65F_F9D7_2799_41E1_4D73DD2A1617","thumbnailUrl":"media/panorama_F3B5F65F_F9D7_2799_41E1_4D73DD2A1617_t.jpg","hfovMin":"150%","label":trans('panorama_F3B5F65F_F9D7_2799_41E1_4D73DD2A1617.label'),"hfovMax":140,"class":"Panorama","hfov":360,"cardboardMenu":"this.Menu_E81B0FAF_F9DF_24B9_41C2_4C291374A08E","vfov":180},{"hoverFactor":0,"idleSequence":"this.sequence_F3A26CAD_F9D8_E4BE_41E5_BD66DC82D003","manualRotationSpeed":200,"timeToIdle":10000,"automaticZoomSpeed":10,"class":"PanoramaCamera","manualZoomSpeed":0,"initialPosition":{"hfov":120,"yaw":1.58,"class":"PanoramaCameraPosition","pitch":-11.93},"initialSequence":"this.sequence_F3A26CAD_F9D8_E4BE_41E5_BD66DC82D003","id":"panorama_F572B209_F9D7_5F79_41CA_7119384BFBCF_camera"},{"data":{"label":"y2mate.com - Travis Scott HVME  Goosebumps Remix  Official Audio"},"loop":false,"audio":"this.audiores_EB62A3E4_F9D9_5CAF_41DD_F67A2F51554D","class":"MediaAudio","autoplay":true,"id":"audio_EB3F0716_F9D9_256B_41E6_5DE0B981EDF5"},{"hoverFactor":0,"displayMovements":[{"duration":1000,"easing":"linear","class":"TargetRotationalCameraDisplayMovement"},{"duration":3000,"easing":"cubic_in_out","targetPitch":-4.1,"class":"TargetRotationalCameraDisplayMovement","targetHfov":120,"targetStereographicFactor":0}],"class":"PanoramaCamera","displayOriginPosition":{"hfov":165,"stereographicFactor":1,"yaw":-178.7,"class":"RotationalCameraDisplayPosition","pitch":-90},"automaticZoomSpeed":10,"initialSequence":"this.sequence_F3A67CAD_F9D8_E4BE_41E2_3C9A15DECDE8","idleSequence":"this.sequence_F3A67CAD_F9D8_E4BE_41E2_3C9A15DECDE8","manualRotationSpeed":200,"timeToIdle":10000,"manualZoomSpeed":0,"initialPosition":{"hfov":120,"yaw":-178.7,"class":"PanoramaCameraPosition","pitch":-4.1},"id":"panorama_F3B9FFAC_F9D8_E4BF_41E7_E633789A6354_camera"},{"iconURL":"skin/IconButton_E93355E8_F9FB_24A6_41A6_CC74C5121616.jpg","borderSize":0,"borderRadius":0,"width":71,"cursor":"hand","paddingLeft":0,"paddingTop":0,"id":"IconButton_E93355E8_F9FB_24A6_41A6_CC74C5121616","paddingBottom":0,"paddingRight":0,"horizontalAlign":"center","backgroundColorRatios":[],"backgroundOpacity":0.3,"toolTipHorizontalAlign":"center","height":46,"verticalAlign":"middle","backgroundColor":[],"click":"this.openLink(this.translate('LinkBehaviour_E85D48B4_F9EB_ECAF_41DA_9204E64E2A91.source'), '_blank')","transparencyActive":true,"mode":"push","class":"IconButton","minHeight":1,"propagateClick":false,"minWidth":1,"shadow":false,"backgroundColorDirection":"vertical","data":{"name":"Whatsapp"}},{"class":"PlayList","items":[{"player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","media":"this.panorama_F3B9FFAC_F9D8_E4BF_41E7_E633789A6354","class":"PanoramaPlayListItem","camera":"this.panorama_F3B9FFAC_F9D8_E4BF_41E7_E633789A6354_camera"},"this.PanoramaPlayListItem_EE0ED327_FA59_5DA9_41DC_87A1970CF6D4","this.PanoramaPlayListItem_EE0E8328_FA59_5DA7_41CF_4B2B5787212E","this.PanoramaPlayListItem_EE0E7329_FA59_5DB9_41CA_47A313012C91","this.PanoramaPlayListItem_EE0E5329_FA59_5DB9_41E1_0F758F8A054C"],"id":"mainPlayList"},{"adjacentPanoramas":[{"distance":100,"yaw":1.26,"select":"this.overlay_F7F47319_F9EF_5D99_41CB_E4C4F508C1E7.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_F7F47319_F9EF_5D99_41CB_E4C4F508C1E7"},"class":"AdjacentPanorama","panorama":"this.panorama_F3B5A9E4_F9D7_2CAF_41E1_F9B6B366E01B"}],"data":{"label":"Meio lado esquerdo"},"partial":false,"overlays":["this.overlay_F7F47319_F9EF_5D99_41CB_E4C4F508C1E7"],"hfovMin":"150%","frames":[{"thumbnailUrl":"media/panorama_F331DDCA_F9D7_64FB_41E4_36B21FC81098_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"width":12288,"url":"media/panorama_F331DDCA_F9D7_64FB_41E4_36B21FC81098_0/{face}/0/{row}_{column}.jpg","height":2048,"colCount":24,"class":"TiledImageResourceLevel","rowCount":4,"tags":"ondemand"},{"width":6144,"url":"media/panorama_F331DDCA_F9D7_64FB_41E4_36B21FC81098_0/{face}/1/{row}_{column}.jpg","height":1024,"colCount":12,"class":"TiledImageResourceLevel","rowCount":2,"tags":"ondemand"},{"width":3072,"url":"media/panorama_F331DDCA_F9D7_64FB_41E4_36B21FC81098_0/{face}/2/{row}_{column}.jpg","height":512,"colCount":6,"class":"TiledImageResourceLevel","rowCount":1,"tags":["ondemand","preload"]},{"width":9216,"url":"media/panorama_F331DDCA_F9D7_64FB_41E4_36B21FC81098_0/{face}/vr/0.jpg","height":1536,"colCount":6,"class":"TiledImageResourceLevel","rowCount":1,"tags":"mobilevr"},{"width":12288,"url":"media/panorama_F331DDCA_F9D7_64FB_41E4_36B21FC81098_0/{face}/vr2gen/0.jpg","height":2048,"colCount":6,"class":"TiledImageResourceLevel","rowCount":1,"tags":"mobilevr2gen"}],"class":"ImageResource"}}],"id":"panorama_F331DDCA_F9D7_64FB_41E4_36B21FC81098","thumbnailUrl":"media/panorama_F331DDCA_F9D7_64FB_41E4_36B21FC81098_t.jpg","pitch":0,"label":trans('panorama_F331DDCA_F9D7_64FB_41E4_36B21FC81098.label'),"hfovMax":140,"class":"Panorama","hfov":360,"cardboardMenu":"this.Menu_E81B0FAF_F9DF_24B9_41C2_4C291374A08E","vfov":180},{"hoverFactor":0,"idleSequence":"this.sequence_F3A5FCAD_F9D8_E4BE_41D5_C044B642C63D","manualRotationSpeed":200,"timeToIdle":10000,"automaticZoomSpeed":10,"class":"PanoramaCamera","manualZoomSpeed":0,"initialPosition":{"hfov":120,"yaw":5.47,"class":"PanoramaCameraPosition","pitch":-8.21},"initialSequence":"this.sequence_F3A5FCAD_F9D8_E4BE_41D5_C044B642C63D","id":"panorama_F331DDCA_F9D7_64FB_41E4_36B21FC81098_camera"},{"hoverFactor":0,"idleSequence":"this.sequence_F3A63CAD_F9D8_E4BE_41E6_E47E2064EDD7","manualRotationSpeed":200,"timeToIdle":10000,"automaticZoomSpeed":10,"class":"PanoramaCamera","manualZoomSpeed":0,"initialPosition":{"hfov":120,"yaw":-9.2,"class":"PanoramaCameraPosition","pitch":-7.43},"initialSequence":"this.sequence_F3A63CAD_F9D8_E4BE_41E6_E47E2064EDD7","id":"panorama_F3B5F65F_F9D7_2799_41E1_4D73DD2A1617_camera"},{"viewerArea":"this.MainViewer","zoomEnabled":true,"class":"PanoramaPlayer","aaEnabled":true,"arrowKeysAction":"translate","touchControlMode":"drag_rotation","mouseControlMode":"drag_rotation","displayPlaybackBar":true,"gyroscopeVerticalDraggingEnabled":true,"surfaceSelectionEnabled":false,"id":"MainViewerPanoramaPlayer"},{"iconURL":"skin/IconButton_E8FCEBC4_F9FB_ECEF_41E3_12A15635C381.jpg","borderSize":0,"borderRadius":0,"width":81,"cursor":"hand","paddingLeft":0,"paddingTop":0,"id":"IconButton_E8FCEBC4_F9FB_ECEF_41E3_12A15635C381","paddingBottom":0,"paddingRight":0,"horizontalAlign":"center","backgroundColorRatios":[],"backgroundOpacity":0.3,"toolTipHorizontalAlign":"center","height":43,"verticalAlign":"middle","backgroundColor":[],"click":"this.openLink(this.translate('LinkBehaviour_E8CAC6FC_F9E9_249F_41D4_C360D9BEA1F8.source'), '_blank')","transparencyActive":true,"mode":"push","class":"IconButton","minHeight":1,"propagateClick":false,"minWidth":1,"shadow":false,"backgroundColorDirection":"vertical","data":{"name":"Maps"}},{"iconURL":"skin/IconButton_E8F24B72_F9F9_6DAB_41EA_6D76209965B3.jpg","borderSize":0,"borderRadius":0,"width":67,"cursor":"hand","paddingLeft":0,"paddingTop":0,"id":"IconButton_E8F24B72_F9F9_6DAB_41EA_6D76209965B3","paddingBottom":0,"paddingRight":0,"horizontalAlign":"center","backgroundColorRatios":[],"backgroundOpacity":0.3,"toolTipHorizontalAlign":"center","height":47,"verticalAlign":"middle","backgroundColor":[],"click":"this.openLink(this.translate('LinkBehaviour_E84D73F0_F9E9_5CA7_41B2_D3C0C7BF52D5.source'), '_blank')","transparencyActive":true,"mode":"push","class":"IconButton","minHeight":1,"propagateClick":false,"minWidth":1,"shadow":false,"backgroundColorDirection":"vertical","data":{"name":"Instagram"}},{"borderSize":0,"data":{"name":"Container7156"},"borderRadius":0,"width":"25.575%","paddingLeft":0,"paddingTop":0,"id":"Container_E9C61344_F9FF_3DEF_41DA_570199AEC899","paddingBottom":0,"paddingRight":0,"horizontalAlign":"center","scrollBarMargin":2,"backgroundOpacity":0,"contentOpaque":false,"bottom":"1.49%","toolTipHorizontalAlign":"center","height":"13.44%","verticalAlign":"middle","layout":"horizontal","children":["this.IconButton_E8F24B72_F9F9_6DAB_41EA_6D76209965B3","this.IconButton_E93355E8_F9FB_24A6_41A6_CC74C5121616","this.IconButton_E8FCEBC4_F9FB_ECEF_41E3_12A15635C381"],"overflow":"scroll","scrollBarOpacity":0.5,"scrollBarVisible":"rollOver","scrollBarColor":"#000000","class":"Container","propagateClick":false,"left":"44.05%","minWidth":20,"shadow":false,"minHeight":20,"scrollBarWidth":10,"gap":10},{"adjacentPanoramas":[{"distance":100,"yaw":-7.57,"select":"this.overlay_F46E2F1D_F9E9_2599_41E0_EEFFD2BC29E3.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_F46E2F1D_F9E9_2599_41E0_EEFFD2BC29E3"},"class":"AdjacentPanorama","panorama":"this.panorama_F331DDCA_F9D7_64FB_41E4_36B21FC81098"}],"data":{"label":"Entrada lado esquerdo"},"partial":false,"overlays":["this.overlay_F46E2F1D_F9E9_2599_41E0_EEFFD2BC29E3"],"hfovMin":"150%","frames":[{"thumbnailUrl":"media/panorama_F572B209_F9D7_5F79_41CA_7119384BFBCF_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"width":12288,"url":"media/panorama_F572B209_F9D7_5F79_41CA_7119384BFBCF_0/{face}/0/{row}_{column}.jpg","height":2048,"colCount":24,"class":"TiledImageResourceLevel","rowCount":4,"tags":"ondemand"},{"width":6144,"url":"media/panorama_F572B209_F9D7_5F79_41CA_7119384BFBCF_0/{face}/1/{row}_{column}.jpg","height":1024,"colCount":12,"class":"TiledImageResourceLevel","rowCount":2,"tags":"ondemand"},{"width":3072,"url":"media/panorama_F572B209_F9D7_5F79_41CA_7119384BFBCF_0/{face}/2/{row}_{column}.jpg","height":512,"colCount":6,"class":"TiledImageResourceLevel","rowCount":1,"tags":["ondemand","preload"]},{"width":9216,"url":"media/panorama_F572B209_F9D7_5F79_41CA_7119384BFBCF_0/{face}/vr/0.jpg","height":1536,"colCount":6,"class":"TiledImageResourceLevel","rowCount":1,"tags":"mobilevr"},{"width":12288,"url":"media/panorama_F572B209_F9D7_5F79_41CA_7119384BFBCF_0/{face}/vr2gen/0.jpg","height":2048,"colCount":6,"class":"TiledImageResourceLevel","rowCount":1,"tags":"mobilevr2gen"}],"class":"ImageResource"}}],"id":"panorama_F572B209_F9D7_5F79_41CA_7119384BFBCF","thumbnailUrl":"media/panorama_F572B209_F9D7_5F79_41CA_7119384BFBCF_t.jpg","pitch":0,"label":trans('panorama_F572B209_F9D7_5F79_41CA_7119384BFBCF.label'),"hfovMax":140,"class":"Panorama","hfov":360,"cardboardMenu":"this.Menu_E81B0FAF_F9DF_24B9_41C2_4C291374A08E","vfov":180},{"fontFamily":"Arial","distance":2,"rollOverFontColor":"#FFFFFF","selectedFontColor":"#FFFFFF","label":trans('Menu_E81B0FAF_F9DF_24B9_41C2_4C291374A08E.label'),"class":"Menu","backgroundColor":"#404040","rollOverOpacity":0.8,"children":["this.MenuItem_EE0C533A_FA59_5D9B_41D5_F738E868F9E5","this.MenuItem_EE0C9339_FA59_5D99_41EE_AB4907B49234","this.MenuItem_EE0C7339_FA59_5D99_41E2_51E4FC863894","this.MenuItem_EE0C433A_FA59_5D9B_41C0_207FC7A5C832","this.MenuItem_EE0C8339_FA59_5D99_41D9_2605593B8FCD"],"fontColor":"#FFFFFF","selectedBackgroundColor":"#202020","opacity":0.4,"rollOverBackgroundColor":"#000000","id":"Menu_E81B0FAF_F9DF_24B9_41C2_4C291374A08E"},{"adjacentPanoramas":[{"distance":100,"yaw":173.56,"select":"this.overlay_F49E7F1D_F9E9_2599_41D9_B93F9FDEE786.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_F49E7F1D_F9E9_2599_41D9_B93F9FDEE786"},"class":"AdjacentPanorama","panorama":"this.panorama_F572B209_F9D7_5F79_41CA_7119384BFBCF"}],"data":{"label":"Fachada loja\u000a"},"partial":false,"overlays":["this.overlay_F49E7F1D_F9E9_2599_41D9_B93F9FDEE786"],"hfovMin":"150%","frames":[{"thumbnailUrl":"media/panorama_F3B9FFAC_F9D8_E4BF_41E7_E633789A6354_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"width":12288,"url":"media/panorama_F3B9FFAC_F9D8_E4BF_41E7_E633789A6354_0/{face}/0/{row}_{column}.jpg","height":2048,"colCount":24,"class":"TiledImageResourceLevel","rowCount":4,"tags":"ondemand"},{"width":6144,"url":"media/panorama_F3B9FFAC_F9D8_E4BF_41E7_E633789A6354_0/{face}/1/{row}_{column}.jpg","height":1024,"colCount":12,"class":"TiledImageResourceLevel","rowCount":2,"tags":"ondemand"},{"width":3072,"url":"media/panorama_F3B9FFAC_F9D8_E4BF_41E7_E633789A6354_0/{face}/2/{row}_{column}.jpg","height":512,"colCount":6,"class":"TiledImageResourceLevel","rowCount":1,"tags":["ondemand","preload"]},{"width":9216,"url":"media/panorama_F3B9FFAC_F9D8_E4BF_41E7_E633789A6354_0/{face}/vr/0.jpg","height":1536,"colCount":6,"class":"TiledImageResourceLevel","rowCount":1,"tags":"mobilevr"},{"width":12288,"url":"media/panorama_F3B9FFAC_F9D8_E4BF_41E7_E633789A6354_0/{face}/vr2gen/0.jpg","height":2048,"colCount":6,"class":"TiledImageResourceLevel","rowCount":1,"tags":"mobilevr2gen"}],"class":"ImageResource"}}],"id":"panorama_F3B9FFAC_F9D8_E4BF_41E7_E633789A6354","thumbnailUrl":"media/panorama_F3B9FFAC_F9D8_E4BF_41E7_E633789A6354_t.jpg","pitch":0,"label":trans('panorama_F3B9FFAC_F9D8_E4BF_41E7_E633789A6354.label'),"hfovMax":140,"class":"Panorama","hfov":360,"cardboardMenu":"this.Menu_E81B0FAF_F9DF_24B9_41C2_4C291374A08E","vfov":180},{"progressBackgroundColorDirection":"vertical","propagateClick":false,"borderSize":0,"toolTipTextShadowColor":"#000000","playbackBarProgressBackgroundColorDirection":"vertical","subtitlesEnabled":true,"progressLeft":0,"paddingLeft":0,"id":"MainViewer","subtitlesFontColor":"#FFFFFF","playbackBarBackgroundColor":["#FFFFFF"],"progressBackgroundOpacity":1,"paddingRight":0,"subtitlesTextDecoration":"none","playbackBarHeight":10,"playbackBarHeadWidth":6,"surfaceReticleOpacity":0.6,"playbackBarHeadBackgroundColorDirection":"vertical","surfaceReticleColor":"#FFFFFF","progressBarBackgroundColor":["#3399FF"],"toolTipShadowColor":"#333138","subtitlesTextShadowBlurRadius":0,"toolTipOpacity":1,"width":"100%","playbackBarBackgroundColorDirection":"vertical","toolTipPaddingRight":6,"playbackBarProgressBorderSize":0,"playbackBarRight":0,"vrPointerSelectionTime":2000,"progressBorderColor":"#000000","toolTipShadowVerticalLength":0,"toolTipFontFamily":"Arial","vrPointerSelectionColor":"#FF6600","toolTipHorizontalAlign":"center","height":"100%","subtitlesFontFamily":"Arial","progressBackgroundColor":["#FFFFFF"],"transitionDuration":500,"subtitlesPaddingTop":5,"progressBarOpacity":1,"toolTipDisplayTime":600,"playbackBarProgressBorderRadius":0,"subtitlesOpacity":1,"subtitlesShadow":false,"playbackBarProgressBackgroundColor":["#3399FF"],"subtitlesTop":0,"firstTransitionDuration":0,"surfaceReticleSelectionColor":"#FFFFFF","vrPointerColor":"#FFFFFF","subtitlesGap":0,"class":"ViewerArea","playbackBarBackgroundOpacity":1,"toolTipFontSize":"1.11vmin","minHeight":50,"toolTipFontColor":"#606060","minWidth":100,"progressBottom":0,"toolTipFontStyle":"normal","surfaceReticleSelectionOpacity":1,"subtitlesFontWeight":"normal","subtitlesHorizontalAlign":"center","subtitlesBackgroundColor":"#000000","toolTipBorderColor":"#767676","subtitlesTextShadowColor":"#000000","borderRadius":0,"toolTipFontWeight":"normal","playbackBarHeadShadowOpacity":0.7,"playbackBarHeadShadowBlurRadius":3,"toolTipTextShadowOpacity":0,"progressBackgroundColorRatios":[0],"subtitlesVerticalAlign":"bottom","playbackBarLeft":0,"translationTransitionDuration":1000,"progressHeight":10,"toolTipBackgroundColor":"#F6F6F6","subtitlesPaddingBottom":5,"displayTooltipInTouchScreens":true,"paddingTop":0,"subtitlesPaddingLeft":5,"toolTipTextShadowBlurRadius":3,"subtitlesBackgroundOpacity":0.2,"progressBorderSize":0,"playbackBarHeadShadowVerticalLength":0,"paddingBottom":0,"subtitlesTextShadowVerticalLength":1,"progressBarBorderSize":0,"playbackBarHeadShadowColor":"#000000","playbackBarProgressBackgroundColorRatios":[0],"progressBarBorderRadius":0,"playbackBarHeadHeight":15,"subtitlesPaddingRight":5,"subtitlesBottom":50,"toolTipBorderRadius":3,"playbackBarBorderColor":"#FFFFFF","subtitlesFontSize":"3vmin","toolTipPaddingTop":4,"playbackBarHeadShadowHorizontalLength":0,"toolTipBorderSize":1,"playbackBarHeadBackgroundColorRatios":[0,1],"subtitlesTextShadowOpacity":1,"toolTipShadowBlurRadius":3,"toolTipPaddingBottom":4,"playbackBarBorderRadius":0,"toolTipShadowSpread":0,"displayTooltipInSurfaceSelection":true,"playbackBarProgressBorderColor":"#000000","progressRight":0,"progressBarBackgroundColorDirection":"vertical","doubleClickAction":"toggle_fullscreen","progressOpacity":1,"subtitlesBorderSize":0,"playbackBarHeadBorderSize":0,"playbackBarHeadOpacity":1,"transitionMode":"blending","playbackBarHeadShadow":true,"subtitlesTextShadowHorizontalLength":1,"progressBarBorderColor":"#000000","progressBarBackgroundColorRatios":[0],"playbackBarHeadBorderRadius":0,"toolTipShadowHorizontalLength":0,"toolTipPaddingLeft":6,"playbackBarOpacity":1,"subtitlesBorderColor":"#FFFFFF","progressBorderRadius":0,"toolTipShadowOpacity":1,"playbackBarProgressOpacity":1,"shadow":false,"playbackBarHeadBorderColor":"#000000","playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarBorderSize":0,"playbackBarBottom":5,"data":{"name":"Main Viewer"}},{"adjacentPanoramas":[{"distance":100,"yaw":2.41,"select":"this.overlay_F75D9F25_F9E8_E5A9_41E5_1B5A2514FBB5.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_F75D9F25_F9E8_E5A9_41E5_1B5A2514FBB5"},"class":"AdjacentPanorama","panorama":"this.panorama_F3B5F65F_F9D7_2799_41E1_4D73DD2A1617"}],"data":{"label":"Meio lado direito"},"partial":false,"overlays":["this.overlay_F75D9F25_F9E8_E5A9_41E5_1B5A2514FBB5"],"hfovMin":"150%","frames":[{"thumbnailUrl":"media/panorama_F3B5A9E4_F9D7_2CAF_41E1_F9B6B366E01B_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"width":12288,"url":"media/panorama_F3B5A9E4_F9D7_2CAF_41E1_F9B6B366E01B_0/{face}/0/{row}_{column}.jpg","height":2048,"colCount":24,"class":"TiledImageResourceLevel","rowCount":4,"tags":"ondemand"},{"width":6144,"url":"media/panorama_F3B5A9E4_F9D7_2CAF_41E1_F9B6B366E01B_0/{face}/1/{row}_{column}.jpg","height":1024,"colCount":12,"class":"TiledImageResourceLevel","rowCount":2,"tags":"ondemand"},{"width":3072,"url":"media/panorama_F3B5A9E4_F9D7_2CAF_41E1_F9B6B366E01B_0/{face}/2/{row}_{column}.jpg","height":512,"colCount":6,"class":"TiledImageResourceLevel","rowCount":1,"tags":["ondemand","preload"]},{"width":9216,"url":"media/panorama_F3B5A9E4_F9D7_2CAF_41E1_F9B6B366E01B_0/{face}/vr/0.jpg","height":1536,"colCount":6,"class":"TiledImageResourceLevel","rowCount":1,"tags":"mobilevr"},{"width":12288,"url":"media/panorama_F3B5A9E4_F9D7_2CAF_41E1_F9B6B366E01B_0/{face}/vr2gen/0.jpg","height":2048,"colCount":6,"class":"TiledImageResourceLevel","rowCount":1,"tags":"mobilevr2gen"}],"class":"ImageResource"}}],"id":"panorama_F3B5A9E4_F9D7_2CAF_41E1_F9B6B366E01B","thumbnailUrl":"media/panorama_F3B5A9E4_F9D7_2CAF_41E1_F9B6B366E01B_t.jpg","pitch":0,"label":trans('panorama_F3B5A9E4_F9D7_2CAF_41E1_F9B6B366E01B.label'),"hfovMax":140,"class":"Panorama","hfov":360,"cardboardMenu":"this.Menu_E81B0FAF_F9DF_24B9_41C2_4C291374A08E","vfov":180},{"hoverFactor":0,"idleSequence":"this.sequence_F3A61CAD_F9D8_E4BE_4181_79654221B4AF","manualRotationSpeed":200,"timeToIdle":10000,"automaticZoomSpeed":10,"class":"PanoramaCamera","manualZoomSpeed":0,"initialPosition":{"hfov":120,"yaw":3.6,"class":"PanoramaCameraPosition","pitch":-0.97},"initialSequence":"this.sequence_F3A61CAD_F9D8_E4BE_4181_79654221B4AF","id":"panorama_F3B5A9E4_F9D7_2CAF_41E1_F9B6B366E01B_camera"},{"items":[{"image":"this.AnimatedImageResource_EE17F25C_FA59_5F9F_41EA_725448D6B25E","distance":100,"yaw":-6.48,"data":{"label":"GoToMeioLadoDireito"},"class":"HotspotPanoramaOverlayImage","vfov":6.55,"hfov":12,"verticalAlign":"middle","horizontalAlign":"center","pitch":-0.16,"scaleMode":"fit_inside"}],"data":{"label":"GoToMeioLadoDireito"},"useHandCursor":true,"maps":[],"areas":["this.HotspotPanoramaOverlayArea_F6ACB2D0_F9E9_DCE7_41EB_E10AAB605FD0"],"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"id":"overlay_F7273F25_F9E8_E5A9_41E1_29C684746EA3"},{"id":"sequence_F3A26CAD_F9D8_E4BE_41E5_BD66DC82D003","movements":[{"yawDelta":32.5,"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawSpeed":5.31},{"yawDelta":295,"easing":"linear","class":"DistancePanoramaCameraMovement","yawSpeed":5.31},{"yawDelta":32.5,"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawSpeed":5.31}],"class":"PanoramaCameraSequence","restartMovementOnUserInteraction":false},{"mp3Url":trans('audiores_EB62A3E4_F9D9_5CAF_41DD_F67A2F51554D.mp3Url'),"class":"AudioResource","id":"audiores_EB62A3E4_F9D9_5CAF_41DD_F67A2F51554D"},{"id":"sequence_F3A67CAD_F9D8_E4BE_41E2_3C9A15DECDE8","movements":[{"yawDelta":32.5,"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawSpeed":5.31},{"yawDelta":295,"easing":"linear","class":"DistancePanoramaCameraMovement","yawSpeed":5.31},{"yawDelta":32.5,"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawSpeed":5.31}],"class":"PanoramaCameraSequence","restartMovementOnUserInteraction":false},{"player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)","media":"this.panorama_F572B209_F9D7_5F79_41CA_7119384BFBCF","class":"PanoramaPlayListItem","camera":"this.panorama_F572B209_F9D7_5F79_41CA_7119384BFBCF_camera","id":"PanoramaPlayListItem_EE0ED327_FA59_5DA9_41DC_87A1970CF6D4"},{"player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 3)","media":"this.panorama_F331DDCA_F9D7_64FB_41E4_36B21FC81098","class":"PanoramaPlayListItem","camera":"this.panorama_F331DDCA_F9D7_64FB_41E4_36B21FC81098_camera","id":"PanoramaPlayListItem_EE0E8328_FA59_5DA7_41CF_4B2B5787212E"},{"player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 3, 4)","media":"this.panorama_F3B5A9E4_F9D7_2CAF_41E1_F9B6B366E01B","class":"PanoramaPlayListItem","camera":"this.panorama_F3B5A9E4_F9D7_2CAF_41E1_F9B6B366E01B_camera","id":"PanoramaPlayListItem_EE0E7329_FA59_5DB9_41CA_47A313012C91"},{"player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 4, 0)","media":"this.panorama_F3B5F65F_F9D7_2799_41E1_4D73DD2A1617","class":"PanoramaPlayListItem","camera":"this.panorama_F3B5F65F_F9D7_2799_41E1_4D73DD2A1617_camera","end":"this.trigger('tourEnded')","id":"PanoramaPlayListItem_EE0E5329_FA59_5DB9_41E1_0F758F8A054C"},{"items":[{"image":"this.AnimatedImageResource_EE16725B_FA59_5F99_41EC_F49DD96C0CDB","distance":100,"yaw":1.26,"data":{"label":"GoToMeioLadoDireito"},"class":"HotspotPanoramaOverlayImage","vfov":6.55,"hfov":12,"verticalAlign":"middle","horizontalAlign":"center","pitch":2.48,"scaleMode":"fit_inside"}],"data":{"label":"GoToMeioLadoDireito"},"useHandCursor":true,"maps":[],"areas":["this.HotspotPanoramaOverlayArea_F7D3C319_F9EF_5D99_41E1_554406C8ECBC"],"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"id":"overlay_F7F47319_F9EF_5D99_41CB_E4C4F508C1E7"},{"id":"sequence_F3A5FCAD_F9D8_E4BE_41D5_C044B642C63D","movements":[{"yawDelta":32.5,"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawSpeed":5.31},{"yawDelta":295,"easing":"linear","class":"DistancePanoramaCameraMovement","yawSpeed":5.31},{"yawDelta":32.5,"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawSpeed":5.31}],"class":"PanoramaCameraSequence","restartMovementOnUserInteraction":false},{"id":"sequence_F3A63CAD_F9D8_E4BE_41E6_E47E2064EDD7","movements":[{"yawDelta":32.5,"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawSpeed":5.31},{"yawDelta":295,"easing":"linear","class":"DistancePanoramaCameraMovement","yawSpeed":5.31},{"yawDelta":32.5,"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawSpeed":5.31}],"class":"PanoramaCameraSequence","restartMovementOnUserInteraction":false},{"items":[{"image":"this.AnimatedImageResource_EE16B25A_FA59_5F9B_41DF_CEDFBEBDC438","distance":100,"yaw":-7.57,"data":{"label":"GoToFachadaLoja"},"class":"HotspotPanoramaOverlayImage","vfov":6.55,"hfov":12,"verticalAlign":"middle","horizontalAlign":"center","pitch":0.65,"scaleMode":"fit_inside"}],"data":{"label":"GoToFachadaLoja"},"useHandCursor":true,"maps":[],"areas":["this.HotspotPanoramaOverlayArea_F702F7A6_F9EB_64AB_41B9_E96052F0077F"],"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"id":"overlay_F46E2F1D_F9E9_2599_41E0_EEFFD2BC29E3"},{"click":"this.mainPlayList.set('selectedIndex', 0)","class":"MenuItem","label":trans('MenuItem_EE0C533A_FA59_5D9B_41D5_F738E868F9E5.label'),"id":"MenuItem_EE0C533A_FA59_5D9B_41D5_F738E868F9E5"},{"click":"this.mainPlayList.set('selectedIndex', 1)","class":"MenuItem","label":trans('MenuItem_EE0C9339_FA59_5D99_41EE_AB4907B49234.label'),"id":"MenuItem_EE0C9339_FA59_5D99_41EE_AB4907B49234"},{"click":"this.mainPlayList.set('selectedIndex', 2)","class":"MenuItem","label":trans('MenuItem_EE0C7339_FA59_5D99_41E2_51E4FC863894.label'),"id":"MenuItem_EE0C7339_FA59_5D99_41E2_51E4FC863894"},{"click":"this.mainPlayList.set('selectedIndex', 3)","class":"MenuItem","label":trans('MenuItem_EE0C433A_FA59_5D9B_41C0_207FC7A5C832.label'),"id":"MenuItem_EE0C433A_FA59_5D9B_41C0_207FC7A5C832"},{"click":"this.mainPlayList.set('selectedIndex', 4)","class":"MenuItem","label":trans('MenuItem_EE0C8339_FA59_5D99_41D9_2605593B8FCD.label'),"id":"MenuItem_EE0C8339_FA59_5D99_41D9_2605593B8FCD"},{"items":[{"image":"this.AnimatedImageResource_EE16C25A_FA59_5F9B_41CE_194165E77836","distance":100,"yaw":173.56,"data":{"label":"GoToEntradaLadoEsquerdo"},"class":"HotspotPanoramaOverlayImage","vfov":6.55,"hfov":12,"verticalAlign":"middle","horizontalAlign":"center","pitch":5.63,"scaleMode":"fit_inside"}],"data":{"label":"GoToEntradaLadoEsquerdo"},"useHandCursor":true,"maps":[],"areas":["this.HotspotPanoramaOverlayArea_F40DCF5C_F9E9_259F_41E2_AA020EDC564C"],"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"id":"overlay_F49E7F1D_F9E9_2599_41D9_B93F9FDEE786"},{"items":[{"image":"this.AnimatedImageResource_EE16225C_FA59_5F9F_41EC_7E8377AC8B73","distance":100,"yaw":2.41,"data":{"label":"GoToEntradaLadoDirefito"},"class":"HotspotPanoramaOverlayImage","vfov":6.55,"hfov":12,"verticalAlign":"middle","horizontalAlign":"center","pitch":1.05,"scaleMode":"fit_inside"}],"data":{"label":"GoToEntradaLadoDirefito"},"useHandCursor":true,"maps":[],"areas":["this.HotspotPanoramaOverlayArea_F736CF35_F9E8_E5A9_41D6_FAC1033E4DC1"],"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"id":"overlay_F75D9F25_F9E8_E5A9_41E5_1B5A2514FBB5"},{"id":"sequence_F3A61CAD_F9D8_E4BE_4181_79654221B4AF","movements":[{"yawDelta":32.5,"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawSpeed":5.31},{"yawDelta":295,"easing":"linear","class":"DistancePanoramaCameraMovement","yawSpeed":5.31},{"yawDelta":32.5,"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawSpeed":5.31}],"class":"PanoramaCameraSequence","restartMovementOnUserInteraction":false},{"frameDuration":62,"rowCount":3,"id":"AnimatedImageResource_EE17F25C_FA59_5F9F_41EA_725448D6B25E","colCount":3,"class":"AnimatedImageResource","frameCount":9,"levels":[{"height":180,"width":330,"class":"ImageResourceLevel","url":"media/res_F779E7C7_F9EF_24E9_41EE_09DFA7F05942_0.png"}]},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_F6ACB2D0_F9E9_DCE7_41EB_E10AAB605FD0"},{"frameDuration":62,"rowCount":3,"id":"AnimatedImageResource_EE16725B_FA59_5F99_41EC_F49DD96C0CDB","colCount":3,"class":"AnimatedImageResource","frameCount":9,"levels":[{"height":180,"width":330,"class":"ImageResourceLevel","url":"media/res_F779E7C7_F9EF_24E9_41EE_09DFA7F05942_0.png"}]},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_EE0E7329_FA59_5DB9_41CA_47A313012C91, 0, 0, 120 || TDV.Player.DEFAULT_PANORAMA_HFOV); this.mainPlayList.set('selectedIndex', 3)","id":"HotspotPanoramaOverlayArea_F7D3C319_F9EF_5D99_41E1_554406C8ECBC"},{"frameDuration":62,"rowCount":3,"id":"AnimatedImageResource_EE16B25A_FA59_5F9B_41DF_CEDFBEBDC438","colCount":3,"class":"AnimatedImageResource","frameCount":9,"levels":[{"height":180,"width":330,"class":"ImageResourceLevel","url":"media/res_F779E7C7_F9EF_24E9_41EE_09DFA7F05942_0.png"}]},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_EE0E8328_FA59_5DA7_41CF_4B2B5787212E, 0, 0, 120 || TDV.Player.DEFAULT_PANORAMA_HFOV); this.mainPlayList.set('selectedIndex', 2)","id":"HotspotPanoramaOverlayArea_F702F7A6_F9EB_64AB_41B9_E96052F0077F"},{"frameDuration":62,"rowCount":3,"id":"AnimatedImageResource_EE16C25A_FA59_5F9B_41CE_194165E77836","colCount":3,"class":"AnimatedImageResource","frameCount":9,"levels":[{"height":180,"width":330,"class":"ImageResourceLevel","url":"media/res_F779E7C7_F9EF_24E9_41EE_09DFA7F05942_0.png"}]},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_EE0ED327_FA59_5DA9_41DC_87A1970CF6D4, -21.04615384615385, 0.21896243291592216, 120 || TDV.Player.DEFAULT_PANORAMA_HFOV); this.mainPlayList.set('selectedIndex', 1)","id":"HotspotPanoramaOverlayArea_F40DCF5C_F9E9_259F_41E2_AA020EDC564C"},{"frameDuration":62,"rowCount":3,"id":"AnimatedImageResource_EE16225C_FA59_5F9F_41EC_7E8377AC8B73","colCount":3,"class":"AnimatedImageResource","frameCount":9,"levels":[{"height":180,"width":330,"class":"ImageResourceLevel","url":"media/res_F779E7C7_F9EF_24E9_41EE_09DFA7F05942_0.png"}]},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_EE0E5329_FA59_5DB9_41E1_0F758F8A054C, -11.076923076923077, -1.4436493738819312, 120 || TDV.Player.DEFAULT_PANORAMA_HFOV); this.mainPlayList.set('selectedIndex', 4)","id":"HotspotPanoramaOverlayArea_F736CF35_F9E8_E5A9_41D6_FAC1033E4DC1"}],"mediaActivationMode":"window","children":["this.MainViewer","this.Container_E9C61344_F9FF_3DEF_41DA_570199AEC899"],"scrollBarVisible":"rollOver","class":"Player","minHeight":0,"propagateClick":false,"minWidth":0,"shadow":false,"mobileMipmappingEnabled":false,"scrollBarWidth":10,"backgroundColorDirection":"vertical","downloadEnabled":true,"data":{"defaultLocale":"pt","name":"Player504","locales":{"pt":"locale/pt.txt"},"textToSpeechConfig":{"speechOnInfoWindow":false,"volume":1,"stopBackgroundAudio":false,"rate":1,"speechOnQuizQuestion":false,"pitch":1,"speechOnTooltip":false}}};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['history'] = {};
script['scripts']['createQuizConfig'] = createQuizConfig;
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2022.1.14.js.map
})();
//Generated with v2022.1.14, Thu Sep 1 2022