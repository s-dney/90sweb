var images = [
  "url(https://raw.githubusercontent.com/s-dney/90sweb/master/backgrounds/background_clouds_2.gif)",
  "url(https://raw.githubusercontent.com/s-dney/90sweb/master/backgrounds/0037wb.jpg)",
  "url(https://raw.githubusercontent.com/s-dney/90sweb/master/backgrounds/INSTANET.gif)",
  "url(https://raw.githubusercontent.com/s-dney/90sweb/master/backgrounds/bluebubblebg.jpeg)",
  "url(https://raw.githubusercontent.com/s-dney/90sweb/master/backgrounds/bg_stars.gif)",
  "url(https://raw.githubusercontent.com/s-dney/90sweb/master/backgrounds/best-of-bohemian-backgrounds-90s-background-tumblr-bohemian-backgrounds.gif)",
  "url(https://raw.githubusercontent.com/s-dney/90sweb/master/backgrounds/back_mac.gif)",
  "url(https://raw.githubusercontent.com/s-dney/90sweb/master/backgrounds/premium-weave.jpg)",
  "url(https://raw.githubusercontent.com/s-dney/90sweb/master/backgrounds/ss058.jpg)",
  "url(https://raw.githubusercontent.com/s-dney/90sweb/master/backgrounds/rubber-ducks-final.jpg)",
  "url(https://raw.githubusercontent.com/s-dney/90sweb/master/backgrounds/ComingWithClouds11.jpg)",
  "url(https://raw.githubusercontent.com/s-dney/90sweb/master/backgrounds/burnieani.gif)",
  "url(https://raw.githubusercontent.com/s-dney/90sweb/master/backgrounds/water002.gif)",
];

var strings = [
  "Abcde",
  "Zyxwv",
  "Welcome to my homepage!",
  "You've got mail",
  "Space Jam",
  "Welcome to Netscape",
  "Untitled",
  "Just Monika",
  "Je suis une pizza",
  "Rawr XD",
  "Welcome to my twisted mindddddd",
  "Hello darkness, my old friend",
  "java.lang.NullPointerException",
  "windows95tips.com",
  "cabbi.bo",
  "how bout i do anyway",
  "It's a secret to everybody",
  "Omae wa mou shindeiru",
  "Nyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanyanya",
  "This webpage is unavailable",
  "Never gonna give you up",
  "Smash that like button and subscribe for more videos",
  "Quality content since 1996",
  "No smoking",
  "No parking between 8am-6pm",
  "War is peace. Freedom is slavery. Ignorance is strength.",
  "INSUFFICIENT DATA FOR MEANINGFUL ANSWER",
  "the girl who was no longer blind saw 'the tree with the lights in it.'",
  "In death, a man or a woman is free of the weight of the past",
  "The Past in Death; That which we cannot escape.",
  "endorphin has performed an illegal operation",
  "Windows has encountered an problem and needs to close.",
  "Nene papa wain choudai",
  "Your breath fades away",
  "Click here to download more RAM",
  "Itsumo hitori de aruiteta",
  "how is babby formed",
];

var marqimgs = [
  "https://raw.githubusercontent.com/s-dney/90sweb/master/assets/Why_Taco_____Ntaco2big.gif",
  "https://raw.githubusercontent.com/s-dney/90sweb/master/assets/dancingbaby.gif",
  "https://raw.githubusercontent.com/s-dney/90sweb/master/assets/fishss.gif",
  "https://github.com/s-dney/90sweb/blob/master/assets/computer-01.gif",
  "https://raw.githubusercontent.com/s-dney/90sweb/master/assets/ieget_animated.gif",
  "https://raw.githubusercontent.com/s-dney/90sweb/master/assets/point.gif",
  "https://media.giphy.com/media/g4C8OnRIfyPp6/giphy.gif",
  "https://raw.githubusercontent.com/s-dney/90sweb/master/assets/Bill_Gates.gif",
  "https://raw.githubusercontent.com/s-dney/90sweb/master/assets/Cube.gif",
  "https://raw.githubusercontent.com/s-dney/90sweb/master/assets/ascend.jpg",
  "https://raw.githubusercontent.com/s-dney/90sweb/master/assets/back_mac.gif",
  "https://raw.githubusercontent.com/s-dney/90sweb/master/assets/billagram2.gif",
  "https://raw.githubusercontent.com/s-dney/90sweb/master/assets/burnieani.gif",
  "https://raw.githubusercontent.com/s-dney/90sweb/master/assets/comp7ae2.gif",
  "https://raw.githubusercontent.com/s-dney/90sweb/master/assets/cool.gif",
  "https://raw.githubusercontent.com/s-dney/90sweb/master/assets/fortuneinvestor992_050599_1298picture_ban.gif",
  "https://raw.githubusercontent.com/s-dney/90sweb/master/assets/immolation.jpg",
  "https://raw.githubusercontent.com/s-dney/90sweb/master/assets/loading.gif",
  "https://raw.githubusercontent.com/s-dney/90sweb/master/assets/man-farting.gif",
  "https://raw.githubusercontent.com/s-dney/90sweb/master/assets/nav.gif",
  "https://raw.githubusercontent.com/s-dney/90sweb/master/assets/ptart-1c.gif",
  "https://raw.githubusercontent.com/s-dney/90sweb/master/assets/spiralen_auf_zwei_ebenen.jpg",
  "https://raw.githubusercontent.com/s-dney/90sweb/master/assets/w_nalan222.jpg",
  "https://raw.githubusercontent.com/s-dney/90sweb/master/assets/waves.gif",
  "https://raw.githubusercontent.com/s-dney/90sweb/master/assets/what_you_think.gif",
  "https://raw.githubusercontent.com/s-dney/90sweb/master/assets/dolphins-04.gif",
];

var fonts = ["Times New Roman", "Impact", "Comic Sans MS"];

var randimage = images[Math.floor(Math.random() * images.length)];
var randfont = fonts[Math.floor(Math.random() * fonts.length)];
var randstring = strings[Math.floor(Math.random() * strings.length)];
var randmarqimg = marqimgs[Math.floor(Math.random() * marqimgs.length)];

var x = document.querySelectorAll("p,li,h1,h2,h3,h4,h5,h6,div,body,input");
var i;
for (i = 0; i < x.length; i++) {
  x[i].style.fontFamily = randfont;
  x[i].style.backgroundImage = randimage;
}

var sounds = [
  "https://www.dialupsound.com/audio/dialup.mp3",
  "https://www.myinstants.com/media/sounds/aol-you-got-mail.mp3",
  "https://ia801004.us.archive.org/5/items/MicrosoftWindowsXPStartupSound/Microsoft%20Windows%20XP%20Startup%20Sound.mp3",
  "https://www.myinstants.com/media/sounds/erro.mp3",
  "https://www.myinstants.com/media/sounds/preview_4.mp3",
  "https://www.myinstants.com/media/sounds/windows-98.mp3",
  "https://www.myinstants.com/media/sounds/windows-95.mp3",
  "https://www.myinstants.com/media/sounds/audio_30.mp3",
];

var marq = document.createElement("marquee");
var text = document.createTextNode(randstring);
marq.appendChild(text);
document.body.appendChild(marq);

var marqimg = document.createElement("marquee");
var img = document.createElement("img");
img.src = randmarqimg;
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

img.onload = function () {
  imgHeight = img.height;
  marqimg.height = screen.height - imgHeight;
  marqimg.width = img.width;
  document.body.appendChild(marqimg);
};

var sound = new Audio(sounds[Math.floor(Math.random() * images.length)]);
sound.loop = true;
document.body.appendChild(sound);
var playingSound = false;
var playAudioButton = document.createElement("button");
playAudioButton.id = "playAudioButton";
playAudioButton.textContent = "(Click to play audio)";
playAudioButton.style.zIndex = 1000;
playAudioButton.style.position = "fixed";
playAudioButton.style.left = "30px";
playAudioButton.style.top = "30px";
playAudioButton.addEventListener("click", () => {
	playingSound = !playingSound;
	if (playingSound) {
		sound.play();
		playAudioButton.textContent = "(Click to stop audio)";
	} else {
		sound.pause();
		playAudioButton.textContent = "(Click to play audio)";
	}
});

document.body.appendChild(playAudioButton);
