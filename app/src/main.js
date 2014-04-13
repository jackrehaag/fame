/*globals define*/
define(function(require, exports, module) {
    'use strict';
    // import dependencies
    var Engine = require('famous/core/Engine');
    var Surface = require('famous/core/Surface');
    var ContainerSurface = require('famous/surfaces/ContainerSurface');
    var Modifier = require('famous/core/Modifier');
    var Scrollview = require('famous/views/Scrollview');

    // create the main context
    var mainContext = Engine.createContext();

    // your app here
    var outline = new Surface({
        size: [200, 200],
        content: '<img width="200" src="' + 'content/images/famous_symbol_transparent.png' + '"/>',
        properties: {
            lineHeight: '200px',
            textAlign: 'center'
        }
    });
    var listcontainer = new ContainerSurface({
      size: [500, 400],
      classes: ['list-container'],
      properties: {
        margin: '0 auto'
      }
    });
    var listposition = new Modifier({
      origin: [0.5, 0.5]
    });
    var surfaces = [];
    function createSurfaces(number) {
      for(var i=0; i < number; i++)
        surfaces.push(new Surface({
          size: [500, 30],
          content: '<div>' + 'Yo ' + i + '<div/>',
          classes: ['option']
        }));
    }
    createSurfaces(100);
    var newscroll = new Scrollview();
    newscroll.sequenceFrom(surfaces);
    listcontainer.add(newscroll);
    Engine.pipe(newscroll);
    mainContext.add(listposition).add(listcontainer);
});
