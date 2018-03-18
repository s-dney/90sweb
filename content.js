//var images = document.getElementsByTagName('img');
//for (var i = 0, l = images.length; i < l; i++) {
//	images[i].src = 'http://placekitten.com/' + images[i].width + '/' + images[i].height;
//}

var marq = document.createElement("marquee");
var text = document.createTextNode("This is a test marquee. kermitttttta");
marq.appendChild(text);
marq.id = "marquee";
document.body.appendChild(marq);

var marqimg = document.createElement("marquee");
var img = document.createElement("img");
img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Creative-Tail-Animal-frog.svg/128px-Creative-Tail-Animal-frog.svg.png";
var imgHeight = 0;

marqimg.id = "marqimg";
marqimg.appendChild(img);
marqimg.position = "relative";
marqimg.zIndex = 999;
marqimg.position = "fixed";
marqimg.behavior = "alternate";
marqimg.left = 30;
marqimg.scrollamount = "50";
marqimg.direction = "down";

marqimg.width = screen.width;
img.onload = function(){
	imgHeight = img.height;
	marqimg.height = screen.height - imgHeight;
	document.body.appendChild(marqimg);
}
