##Scrolls Prices
--------------


To Install
----------
  * Install node.js: ```http://nodejs.org/ (should auto-install npm)```
  * Install yeoman: ```http://yeoman.io/```
  * Checkout the repo: ```git checkout https://github.com/Tidwell/scrollsguidepost-frontend.git```


Development
-----------
  * Development occurs in the ```./app``` directory.
  * There is an included app.js that can be run from the project root with ```node app``` (this is just a static file server, you could alternatively place the repo inside of an apache docroot and hit it that way)
  * Once happy with changes, run ```grunt build``` from the project root
  * Then push the changes to the build branch: ```git subtree push --prefix dist origin build```

Production
----------
  * Production should use the build branch ```git checkout build``` - this can be placed in any static file server and should work correctly (this will match the dist folder, so alternatively that can just be copied manually to the production server if git is not on prod)

