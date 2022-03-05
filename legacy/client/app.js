module.exports = appFactory();

function appFactory() {
    "use strict";
    
    var _ = require('underscore');
    var $ = require('jquery');
    require('jquery.scrollTo');
    require('jquery.knob');
    require('jquery.awesomeCloud'); 
    require('waypoints');
    
    var that = {};
    
    var viewportHeight = $.waypoints('viewportHeight');
    //var viewportWidth = $.waypoints('viewportWidth');
    var scenePositions = {};
    var touchSupported = isTouchSupported();
    var isIpad = checkDevices(['iPad']);
    var isIphone = checkDevices(['iPhone', 'iPod']);
    var lastScene;

    var progressBarSecondsLength = 4;

    that.start = function() {
        console.log('document ready!');
        $('html').animate({ scrollTop: 0 }, 1);
        $('body').animate({ scrollTop: 0 }, 1);
        
        if (isIpad || isIphone || touchSupported) {
            setupScroolableVersion();
            //setupSperimentalIosVersion();
            return;
        }

        setupParallaxVersion();
        resize();
    };
    
    function setupParallaxVersion() {
        init();
        configureScroller();

        initOverlayButtons();
        initNavigationButtons();

        $(window).resize(function () {
            resize();
        });
    }
    
    function resize(){
            viewportHeight = $.waypoints('viewportHeight');
            $('#overlay').css('margin-top', '0px');

            initSizes();

            handleScroll();
            initSkillPills();
    };
    
    function init() {
        $('#bar').addClass('absolute');

        initAndSetSkillPositions();

        setHerosPosition();
        initContactAnimation();

        initSizes();
        
        handleScroll();
        
        $("#html5Loader").addClass('hidden');
        $('#wrapper').removeClass('hidden');

        initSkillPills();
        initKnobAnimation();
    }
    
    function initContactAnimation() {
        var classes = _($('#contact ul.info').attr('class').split(/\s+/)).filter(function (name) {
            return name.indexOf('ae-animation') !== -1;
        });

        $('#scene3')
            .waypoint({
            triggerOnce: true,
            offset: function() {
                return -$(this).height() / 3;
            },
            handler : function() {
                $('#contact ul.info').addClass('animated');
                _(classes).each(function(name) {
                    $('#contact ul.info').removeClass(name);
                    $('#contact ul.info').addClass(name);
                });
            }
        });
    }

    function initOverlayButtons() {
        $('.scroller').click(function () {
            var top = $(document).scrollTop();
            var position = calculatePosition(top);

            $.scrollTo(getNextScenePosition(position.scene), 800, { 'axis': 'y' });
        });
    }

    function initNavigationButtons() {
        $('#bar li a').click(function () {
            if ($(this).hasClass('current')) {
                return false;
            }
            var scene = $(this).data('ref');
            var newposition = scenePositions[scene];
            $.scrollTo(newposition, 800, { 'axis': 'y' });
            return false;
        });
    }

    function initSizes() {
        $('#overlay').height(viewportHeight);
        $('#intro').height(viewportHeight);
        $('#contact').height(viewportHeight);

        $('#scene3').css('min-height', viewportHeight + 'px');
        if ($('#scene3').width() >= 640) {
            var width = ($('#scene3').width() - $('.skills').width()) / 2 - 10;
            $('#scene3 .pills').css('width', width + 'px');
        } else {
            $('#scene3 .pills').css('width', '100%');
        }

        var sceneOffset = $('#intro').height() + $('#overlay').height();

        $('.scene').css('top', sceneOffset + 'px');
        calculateScenePositions();
    }
    
    function calculateScenePositions() {
        var sceneOffset = $('#intro').height() + $('#overlay').height();

        scenePositions.overlay = 0;
        scenePositions.intro = $('#overlay').height();

        var bodyHeight = sceneOffset + _($('.scene')).reduce(function (total, scene) {
            scenePositions[scene.id] = total + sceneOffset;
            return total + $(scene).height();
        }, 0) + $('#contact').height() / 3 * 2;
        $('body').height(bodyHeight);
        scenePositions.contact = $(document).height() - viewportHeight;
    }

    function configureScroller() {
        $(document).scroll(function() {
            handleScroll($(document).scrollTop());
        });
    }

    function handleScroll(top) {
        if (_(top).isUndefined()) {
            top = $(document).scrollTop();
        }
        var position = calculatePosition(top);
        lastScene = position.scene;
        handleScrollOverlay(position);
        handleBar(position);
        handleContact(position);
        handleIos(position);
        console.log('[' + viewportHeight + ']scroll to ' + top + '. Overlay position: ' + $('#overlay').css('margin-top') + '. Scene0 position: ' + $('#intro').css('margin-top') + '- Scene ' + position.scene + '. offset: ' + position.offset);
    }

    function handleScrollOverlay(position) {
        $('#overlay').css('margin-top', -position.scroll + 'px');
        
        if (position.scroll > scenePositions.scene1 && !$('#intro').hasClass('hidden')) {
            $('#intro').addClass('hidden');
        }

        if (position.scroll <= scenePositions.scene1 && $('#intro').hasClass('hidden')) {
            $('#intro').removeClass('hidden');
        }
    }

    function handleBar(position) {
        var nextScene = position.scene;
        var expectedMenuItemSelector = "#bar li a[data-ref='" + nextScene + "']";
        var oldMenuItemSelector = '#bar li a.current';
        if ($(expectedMenuItemSelector).get(0) !== $(oldMenuItemSelector).get(0)) {
            $(oldMenuItemSelector).removeClass('current');
            $(expectedMenuItemSelector).addClass('current');
        }

        if ($(oldMenuItemSelector).length === 0) {
            $('#bar li a:first').addClass('current');
        }

        if (position.scroll <= scenePositions.scene1 && ($('#bar').hasClass('fixed') || $('#bar').css('top') !== scenePositions.scene1 + 'px')) {
            $('#bar').removeClass('fixed');
            $('#bar').addClass('absolute');
            $('#bar').css('top', scenePositions.scene1 + 'px');
        }

        if (position.scroll > scenePositions.scene1 && (!$('#bar').hasClass('fixed') || $('#bar').css('top') !== '0px')) {
            $('#bar').removeClass('absolute');
            $('#bar').addClass('fixed');
            $('#bar').css('top', '0px');
        }

        if (position.scroll < scenePositions.intro && $('#bar').css('opacity') !== '0px') {
            $('#bar').css('opacity', '0px');
        }

        if (position.scroll >= scenePositions.intro && position.scroll < scenePositions.scene1) {
            var margin = (viewportHeight - position.offset);
            var opacity = 1 - (margin / viewportHeight);
            $('#bar').fadeTo(0, opacity);
        }
    }
    
    function handleContact(position) {
        var contactTop = parseInt($('#contact').css('top').replace('px', ''));
        var limit = scenePositions.scene3;
        if (position.scroll >= limit  && contactTop !== 0) {
            $('#contact').css('top', '0px');
            return;
        }
        if (position.scroll < limit) {
            var newTop = $('body').height() - position.scroll;
            $('#contact').css('top', newTop + 'px');
            return;
        }
    }

    function handleIos(position) {
        if (!isIpad || !isIphone) {
            return;
        }

        if (position.scroll === scenePositions.intro || position.scroll === scenePositions.overlay) {
            var progressBarSelector = '#' + position.scene + ' div.progressbar';
            _.delay(function () {
                $.scrollTo(getNextScenePosition(position.scene), 800);
                $(progressBarSelector).removeClass('tn-progress');
            }, (progressBarSecondsLength + 1) * 1000);
            $(progressBarSelector).addClass('tn-progress');
        }
    }

    function setHerosPosition(offsetDegree) {
        offsetDegree = _(offsetDegree).isUndefined() ? 0 : offsetDegree;
        
        var heros = $('#heros li');
        var items = heros.length;

        var gridSize = Math.min($('#heros ul').width(), $('#heros ul').height());
        var itemSize = Math.min($('#heros li').width(), $('#heros li').height());

        var availableSize = gridSize - itemSize;
        var radius = availableSize / 2;

        var angleXItem = (360 / items) * (Math.PI / 180);
        var offset = offsetDegree * (Math.PI / 180);

        _(heros).each(function(hero, index) {
            var angle = angleXItem * index + offset;
            var x = Math.sin(angle) * radius;
            var y = Math.cos(angle) * radius;

            $(hero).css('top',  -(y-radius) + 'px');
            $(hero).css('left', (x+radius) + 'px');
        });
    }

    function initAndSetSkillPositions() {
        $('.skill').knob();
    }

    function initKnobAnimation() {
        var animation = function() {
            _($('#scene3 .skill').each(function (index, skill) {
                var current = parseInt($(skill).val());
                var end = $(skill).data('rel');
                if (current === end) {
                    return;
                }
                var target = $(skill).data("rel");
                $({ value: 0 }).animate({ value: target }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function() {
                        $(skill).val(Math.ceil(this.value)).trigger('change');
                    }
                });
            }));
        };

        $('.skills').waypoint({
            offset: '100%',
            handler: animation
        });
    }

    function initSkillPills() {
        var pills = $('#scene3 .pills');
        $(pills).html('');

        _.chain(features).shuffle().each(function (skill, index) {
            $(pills.get(index % 2)).append('<span data-weight="1">' + skill + '</span>');
        });

        var settings = {
            "size": {
                "grid": 20
            },
            "options": {
                "color": "random-light",
                "printMultiplier": 3
            },
            "font": "Oswald, Dosis, Arial, Tahoma, Verdana, serif",//"Futura, Helvetica, sans-serif",
            "shape": "square"
        };
        pills.awesomeCloud(settings);
    }
 
    function calculatePosition(scroll) {
        var sceneStart = _.chain(scenePositions).filter(function (offset, label) {
            return offset <= scroll;
        }).max(function (offset, label) {
            return offset;
        }).value();

        var sceneName = _.chain(scenePositions).keys().find(function (label) {
            return scenePositions[label] === sceneStart;
        }).value();

        return {
            scroll: scroll,
            scene: sceneName,
            offset: scroll - sceneStart
        };
    }


    function getNextScenePosition(scene) {
        var current = scenePositions[scene];
        var next = _.chain(scenePositions).filter(function(pos) {
            return pos > current;
        }).min().value();
        return next;
    }

    function isTouchSupported() {
        return (('ontouchstart' in window) ||
							window.DocumentTouch && document instanceof DocumentTouch);
    }

    function checkDevices(devices) {
        var i = 0;
        var match = false;

        for (; i < devices.length ; i++) {
            if (navigator.platform === devices[i]) { match = true; break; }
        }
        return match;
    }
    
    function debugTouch() {
        $(window).bind('touchstart', function (e) {
            //e.preventDefault();
            logTouch('touchend', e);
            //var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];

            //console.log('touchstart:' + touch.pageY + ' ' + touch.pageX);
        });

        $(window).bind('touchmove', function (e) {
            //e.preventDefault();
            logTouch('touchend', e);
            //var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];

            //console.log('touchmove:' + touch.pageY + ' ' + touch.pageX);
        });

        $(window).bind('touchend', function (e) {
            //e.preventDefault();
            logTouch('touchend', e);
            //var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];

            //console.log('touchend:' + touch.pageY + ' ' + touch.pageX);
        });
    }

    function logTouch(event, arg) {
        var touch = arg.originalEvent.touches[0] || arg.originalEvent.changedTouches[0];

        console.log(event + '+:' + touch.pageY + ' ' + touch.pageX);
    }
    
    function setupScroolableVersion() {
        $('.scroller').css('top', '-100px');
        $('.scroller').css('cursor', 'default');
        $('.scroller').removeClass('hidden');
        $('.scroller').addClass('scroller-animation');
        $('.scroller').addClass('scroller-circle');
        

        setHerosPosition();
        $('.fixed').removeClass('fixed');
        $('#overlay').css({ 'height': viewportHeight + 'px', 'background-color': 'rgba(62,62,62,0.95)' });
        $('#copyright').css({ 'position': 'static', 'padding-bottom':'10px' });
        $('#intro').css('height', viewportHeight + 'px');

        $('#bar').css('opacity', '0px');

        //$('#intro .scroller').click(function () {
        //    $.scrollTo(scenePositions.scene1, 9600, {'axis':'y'});
        //});

        calculateScenePositions();


        $(window).resize(function() {
            viewportHeight = $.waypoints('viewportHeight');
            $('#overlay').css('height', viewportHeight + 'px');
            $('#intro').css('height', viewportHeight + 'px');
            calculateScenePositions();
            initSkillPills();
        });

        $(document).scroll(function () {
            var top = $(document).scrollTop();
            var position = calculatePosition(top);
            handleBar(position);
            
            if (position.scroll >= scenePositions.intro && $('#overlay').hasClass('overlay')) {
                $('#overlay').removeClass('overlay');
                $('#overlay').addClass('hidden');
            }

            if (position.scroll < scenePositions.intro && !$('#overlay').hasClass('overlay')) {
                $('#overlay').addClass('overlay');
                $('#overlay').removeClass('hidden');
            }
        });
        initNavigationButtons();
        $('#wrapper').removeClass('hidden');
        initAndSetSkillPositions();
        initSkillPills();
        initKnobAnimation();
    }
    
    function setupSperimentalIosVersion() {
        var touchHandler = function (e) {
            var top = $(document).scrollTop();

            var position = calculatePosition(top);

            if (position.scroll < scenePositions.scene1) {
                e.preventDefault();
                return;
            }
        };

        $(window).bind('touchstart', touchHandler);
        $(window).bind('touchmove', touchHandler);
        $(window).bind('touchend', touchHandler);

        $(window).bind('touchend', function () {
            var top = $(document).scrollTop();
            if (top === scenePositions.offset || top === scenePositions.intro || top >= scenePositions.scene1) {
                return;
            }
            var offset = scenePositions.scene1 - top;
            var duration = scenePositions.scene1 / 1600 * offset;
            $.scrollTo(scenePositions.scene1, duration, { 'axis': 'y' });
        });
        setupParallaxVersion();
    }
   
    var features = ['C++',
'DDD',
'NoSQL',
'MongoDB',
'HTML 5',
'CSS3',
'SSIS',
'REST',
'Node.js',
'Team Leadership',
'Operations Management',
'Technical Leadership',
'Technical Writing',
'Object Oriented Design',
'TFS',
'Software Engineering',
'AJAX',
'Database Design',
'Enterprise Library',
'Software Project Management',
'Software Design',
'Start-up Environment',
'Business Planning',
'BDD',
'CQRS',
'COM',
'Direct Show',
'.NET',
'Agile Methodologies',
'C#',
'Test Driven Development',
'Scrum',
'JavaScript',
'Microsoft SQL Server',
'Software Development',
'TDD',
'Web Services',
'WCF',
'Design Patterns',
'T-SQL',
'WPF',
'XSLT',
'ASP.NET MVC',
'jQuery',
'LINQ',
'SOA',
'UML',
'OOP',
'Visual Studio',
'Entity Framework'
    ];
    
    return that;
};

