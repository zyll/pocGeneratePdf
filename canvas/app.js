var Canvas = require('canvas')
  , Image = Canvas.Image
  , Font = Canvas.Font
  , fs = require('fs');

function save(filename, canvas) {
  var b = canvas.toBuffer();
  fs.writeFile(__dirname + '/../build/canvas/' + filename, b, function(err) {
    if(err) throw err
    console.log('created '+filename+' (size: ' + b.length + ')');
  });
};


var lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In elementum, nisi eu scelerisque facilisis, urna ligula interdum nulla, hendrerit dignissim elit dui nec justo. Duis erat dolor, mollis vitae tincidunt in, consectetur ut mi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pellentesque cursus odio imperdiet iaculis. Nam iaculis sollicitudin semper. Donec vitae tempus elit. Donec ornare fermentum magna, lacinia euismod odio vestibulum sit amet. Integer quis tortor eget est scelerisque commodo. Nulla commodo erat et mi tincidunt at hendrerit urna aliquet. Suspendisse ultrices, enim nec ornare varius, tellus enim vestibulum purus, ut tempus sapien risus a eros. Cras mattis placerat nisi non euismod. Donec urna ante, porttitor quis ornare id, posuere sit amet neque. In libero felis, ultrices non volutpat at, gravida et velit. Cras id lacus justo, gravida tristique purus. Donec ligula augue, gravida eu gravida pharetra, adipiscing id arcu.";

function someText(ctx) {
  ctx.font = '22px Noto'
  ctx.fillText(lorem, 50, 80);
  ctx.addPage();
}

var font = new Font('Noto', "../fonts/noto.ttf");

var canvas = new Canvas(500, 500, 'pdf')
var ctx = canvas.getContext('2d');

ctx.addFont(font);
ctx.textDrawingMode = 'glyph';
var img = new Image;
img.dataMode = Image.MODE_MIME | Image.MODE_IMAGE;
img.src = '../img/lime-cat.jpg';
for (var i = 0; i < 10; i++) {
    ctx.drawImage(img, 100, 100);
    ctx.addPage();
    someText(ctx);
}
save('glyph_' + (process.argv[2] || '1') + '.pdf', canvas);

/*
var canvas2 = new Canvas(500, 500, 'pdf')
var ctx2 = canvas2.getContext('2d');
ctx2.addFont(font);
ctx2.textDrawingMode = 'path';
img('/../img/squid.png', ctx2, function() {
  someText(ctx2);
  save('path.pdf', canvas2);
});
*/