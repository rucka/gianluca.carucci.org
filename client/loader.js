(function() {
    "use strict";
    var $ = require('jquery');
    require('jquery.html5loader');
    require('jquery.html5Loader.line');

    $(document).ready(function () {
        var options = {
            "files": [
            {
                "source": "css/reset.css",
                "type": "CSS",
                "size": 776
            },
            {
                "source": "css/main.css",
                "type": "CSS",
                "size": 10.757
            },
            {
                "source": "css/social.css",
                "type": "CSS",
                "size": 2.995
            },

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
            }
            ]
        };

        var loader = $("#html5Loader");
        var loaderAnimation = loader.LoaderAnimation({
            onComplete: function () {
                console.log("preloader animation completed!");
            }
        });
        $.html5Loader({
            filesToLoad: options,
            onComplete: function () {
                console.log("All the assets are loaded!");
           
                var app = require('app');
                app.start();
            
            },
            onUpdate: loaderAnimation.update
        });
    });
}());
