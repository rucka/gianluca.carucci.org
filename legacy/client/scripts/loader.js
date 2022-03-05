(function() {
    "use strict";
    $(document).ready(function () {
        var options = {
            "files": [
            {
                "source": "images/landing.jpg",
                "type": "IMAGE",
                "size": 508.356
            },
            {
                "source": "images/titlemask.png",
                "type": "IMAGE",
                "size": 628.837
            },
            {
                "source": "images/logo-bar-white.png",
                "type": "IMAGE",
                "size": 2.594
            },
            {
                "source": "images/pattern.png",
                "type": "IMAGE",
                "size": 1.761
            },
            {
                "source": "images/scroller.png",
                "type": "IMAGE",
                "size": 628.837
            },
            {
                "source": "images/social-black.png",
                "type": "IMAGE",
                "size": 9854.837
            },
            {
                "source": "images/social-white.png",
                "type": "IMAGE",
                "size": 22.219
            },
            {
                "source": "images/heros/beck.jpg",
                "type": "IMAGE",
                "size": 26.462
            },
            {
                "source": "images/heros/campagna.jpg",
                "type": "IMAGE",
                "size": 25.935
            },
            {
                "source": "images/heros/deandre.jpg",
                "type": "IMAGE",
                "size": 16.140
            },
            {
                "source": "images/heros/norman.jpg",
                "type": "IMAGE",
                "size": 18.725
            },
            {
                "source": "images/heros/senna.jpg",
                "type": "IMAGE",
                "size": 22.061
            },
            {
                "source": "images/hobbies/daughter.jpg",
                "type": "IMAGE",
                "size": 156.308
            },
            {
                "source": "images/hobbies/food.jpg",
                "type": "IMAGE",
                "size": 171.214
            },
            {
                "source": "images/hobbies/interior_design.jpg",
                "type": "IMAGE",
                "size": 93.287
            },
            {
                "source": "images/hobbies/juve.jpg",
                "type": "IMAGE",
                "size": 74.755
            },
            {
                "source": "images/hobbies/waterpolo.jpg",
                "type": "IMAGE",
                "size": 141.931
            }/*,
            {
                "source": "scripts/default.js",
                "type": "SCRIPT",
                "size": 6.986
            },
            {
                "source": "scripts/loader.js",
                "type": "SCRIPT",
                "size": 1.081
            },
            {
                "source": "vendor/html5.js",
                "type": "SCRIPT",
                "size": 2.333
            },
            {
                "source": "vendor/jquery.awesomeCloud.js",
                "type": "SCRIPT",
                "size": 16.491
            },
            {
                "source": "vendor/jquery.knob.js",
                "type": "SCRIPT",
                "size": 7.891
            },
            {
                "source": "vendor/jquery.js",
                "type": "SCRIPT",
                "size": 83.034
            },
            {
                "source": "vendor/jquery.scrollTo.js",
                "type": "SCRIPT",
                "size": 2.022
            },
            {
                "source": "vendor/underscore.js",
                "type": "SCRIPT",
                "size": 14.181
            },
            {
                "source": "vendor/waypoints.js",
                "type": "SCRIPT",
                "size": 7.591
            },
            {
                "source": "css/main.css",
                "type": "CSS",
                "size": 10.757
            },
            {
                "source": "css/reset.css",
                "type": "CSS",
                "size": 776
            },
            {
                "source": "css/social.css",
                "type": "CSS",
                "size": 2.995
            },
            {
                "source": "http://themes.googleusercontent.com/static/fonts/oswald/v8/-g5pDUSRgvxvOl5u-a_WHw.woff",
                "type": "FONT",
                "size": 21.400
            },
            {
                "source": "http://themes.googleusercontent.com/static/fonts/dosis/v2/xIAtSaglM8LZOYdGmG1JqQ.woff",
                "type": "FONT",
                "size": 36.800
            },
            {
                "source": "http://themes.googleusercontent.com/static/fonts/oswald/v8/HqHm7BVC_nzzTui2lzQTDT8E0i7KZn-EPnyo3HZu7kw.woff",
                "type": "FONT",
                "size": 20.600
            },
            {
                "source": "http://themes.googleusercontent.com/static/fonts/dosis/v2/GpmMKE0dnXylect5ObzLR_esZW2xOQ-xsNqO47m55DA.woff",
                "type": "FONT",
                "size": 37.400
            },
            {
                "source": "http://themes.googleusercontent.com/static/fonts/lobstertwo/v5/Law3VVulBOoxyKPkrNsAaIbN6UDyHWBl620a-IRfuBk.woff",
                "type": "FONT",
                "size": 79.900
            }*/
            ]
        };

        var loaderAnimation = $("#html5Loader").LoaderAnimation({
            onComplete: function () {
                console.log("preloader animation completed!");
            }
        });
        $.html5Loader({
            filesToLoad: options,
            onComplete: function () {
                console.log("All the assets are loaded!");
            },
            onUpdate: loaderAnimation.update
        });
    });
}());