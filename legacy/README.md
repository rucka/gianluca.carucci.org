#gianluca.carucci.org
This is my official pure html5/css3/javascript [personal website](http://gianluca.carucci.org).
The intent of this code is show how to move website asset and content development from windows (Visual Studio & powershell) to os independent platform.

##Tools
In order to build this project you need only an editor (for example vim), nodejs and grunt: no server side technology was used.

##Build
Follow next steps to build and run:

1. install [node.js](http://nodejs.org/)
2. clone this repository
3. run `npm install --save-dev` to install the project dependencies
4. run `grunt` to build assests and lunch web server
5. open your browser and go to http://localhost:8080/index.html 

If you want only build assets without start web server run, please `grunt debug`. In this case you can run your own http server. If you need an embedded http-server you can run `npm install -g http-server`. After installation run `http-server [your cloned repo folder]/publish` and visit in your browser http://localhost:8080/index.html

##Watch file changes and live reload
Running grunt default task invokes watch [grunt](https://github.com/gruntjs/grunt-contrib-watch) plugin that enable auto rebuild of all assets when source files changes. 
In addition, grunt has been configured in order to live reload browser page when source files change, so enjoy your coding session without worry about your assets.

##Licence
Project is under MIT licence, so feel free to copy and use code for your personal use.
