#gianluca.carucci.org
This is my official pure html5/css3/javascript [personal website](http://gianluca.carucci.org).
The intent of this code is show how to move website asset and content development from windows (Visual Studio & powershell) to independent platform.

##Tools
In order to build this project you need only an editor (for example vim), nodejs and grunt: no server side technology was used.

##Build
Follow next steps to build and run project:

1. install [node.js](http://nodejs.org/)
2. clone this repository
3. run `npm install --save-dev` to install the project dependencies
4. run `grunt` to build assests
5. put '[your cloned repo folder]/publish' folder under an http server and visit index.html page 

If you need an embedded http-server you can run `npm install -g http-server`. After installation run `http-server [your cloned repo folder]/publish` and visit in your browser http://localhost:8080/index.html


##Licence
Project is under MIT licence, so feel free to copy and use code for your personal use.
