var images = [
'url(https://raw.githubusercontent.com/s-dney/90sweb/master/backgrounds/background_clouds_2.gif)',
'url(https://raw.githubusercontent.com/s-dney/90sweb/master/backgrounds/0037wb.jpg)',
'url(https://raw.githubusercontent.com/s-dney/90sweb/master/backgrounds/INSTANET.gif)',
'url(https://raw.githubusercontent.com/s-dney/90sweb/master/backgrounds/bluebubblebg.jpeg)',
'url(https://raw.githubusercontent.com/s-dney/90sweb/master/backgrounds/bg_stars.gif)',
'url(https://raw.githubusercontent.com/s-dney/90sweb/master/backgrounds/best-of-bohemian-backgrounds-90s-background-tumblr-bohemian-backgrounds.gif)',
'url(https://raw.githubusercontent.com/s-dney/90sweb/master/backgrounds/back_mac.gif)',
'url(https://raw.githubusercontent.com/s-dney/90sweb/master/backgrounds/premium-weave.jpg)',
'url(https://raw.githubusercontent.com/s-dney/90sweb/master/backgrounds/ss058.jpg)',
'url(https://raw.githubusercontent.com/s-dney/90sweb/master/backgrounds/rubber-ducks-final.jpg)'
];

var fonts = [


];

var sounds = [
"https://www.dialupsound.com/audio/dialup.mp3",
"https://www.myinstants.com/media/sounds/aol-you-got-mail.mp3",
"https://ia801004.us.archive.org/5/items/MicrosoftWindowsXPStartupSound/Microsoft%20Windows%20XP%20Startup%20Sound.mp3",
"https://www.myinstants.com/media/sounds/erro.mp3",
"https://www.myinstants.com/media/sounds/preview_4.mp3",
"https://www.myinstants.com/media/sounds/windows-98.mp3",
"https://www.myinstants.com/media/sounds/windows-95.mp3",
"https://www.myinstants.com/media/sounds/audio_30.mp3"
];

var randimage = images[Math.floor(Math.random() * images.length)];

document.body.style.backgroundColor = "blue";
//document.div.style.backgroundImage = randimage;
//document.p.style.backgroundImage = randimage;
document.body.style.backgroundImage = randimage;

var marq = document.createElement("marquee");
var text = document.createTextNode("Welcome To My Website!");
marq.appendChild(text);
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


img.onload = function(){
	imgHeight = img.height;
	marqimg.height = screen.height - imgHeight;
	marqimg.width = img.width;
	document.body.appendChild(marqimg);
}


var sound = new Audio(sounds[Math.floor(Math.random() * images.length)]);
sound.loop = true;
sound.play();