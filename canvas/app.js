var Canvas = require('canvas')
  , Image = Canvas.Image
  , fs = require('fs');

function save(filename, canvas) {
  var b = canvas.toBuffer();
  fs.writeFile(__dirname + '/../build/canvas/' + filename, b, function(err) {
    if(err) throw err
    console.log('created '+filename+' (size: ' + b.length + ')');
  });
};

function img(src, ctx, cb) {
  fs.readFile(__dirname + src, function(err, data) {
    if(err) throw err
    var img = new Image;
    img.src = data;
    ctx.drawImage(img, 100, 100);
    ctx.addPage();
    cb(err);
  });
}

var lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In elementum, nisi eu scelerisque facilisis, urna ligula interdum nulla, hendrerit dignissim elit dui nec justo. Duis erat dolor, mollis vitae tincidunt in, consectetur ut mi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pellentesque cursus odio imperdiet iaculis. Nam iaculis sollicitudin semper. Donec vitae tempus elit. Donec ornare fermentum magna, lacinia euismod odio vestibulum sit amet. Integer quis tortor eget est scelerisque commodo. Nulla commodo erat et mi tincidunt at hendrerit urna aliquet. Suspendisse ultrices, enim nec ornare varius, tellus enim vestibulum purus, ut tempus sapien risus a eros. Cras mattis placerat nisi non euismod. Donec urna ante, porttitor quis ornare id, posuere sit amet neque. In libero felis, ultrices non volutpat at, gravida et velit. Cras id lacus justo, gravida tristique purus. Donec ligula augue, gravida eu gravida pharetra, adipiscing id arcu.";

function someText(ctx) {
  ctx.font = '22px Helvetica'
  ctx.fillText(lorem, 50, 80);
  ctx.addPage();
}

var canvas = new Canvas(500, 500, 'pdf')
var ctx = canvas.getContext('2d');
ctx.textDrawingMode = 'glyph';
img('/../img/squid.png', ctx, function() {
  someText(ctx);
  save('glyph.pdf', canvas);
});

var canvas2 = new Canvas(500, 500, 'pdf')
var ctx2 = canvas2.getContext('2d');
ctx2.textDrawingMode = 'path';
img('/../img/squid.png', ctx2, function() {
  someText(ctx2);
  save('path.pdf', canvas2);
});
