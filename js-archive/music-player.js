var songs = [
	{
		songName: "5ive Years Gone - Mary Jane",
		url: "music-archive/01-Mary-Jane.mp3"
	},
	{
		songName: "5ive Years Gone - The Way You're Pleased",
		url: "music-archive/02-The-Way-You_re-Pleased.mp3"
	},
	{
		songName: "5ive Years Gone - All I Know",
		url: "music-archive/03-All-I-Know.mp3"
	},
	{
		songName: "5ive Years Gone - Never Be The Same",
		url: "music-archive/04-Never-Be-The-Same.mp3"
	},
	{
		songName: "5ive Years Gone - Outta My Head",
		url: "music-archive/05-Outta-My-Head.mp3"
	},
	{
		songName: "5ive Years Gone - Scars Of Love",
		url: "music-archive/06-Scars-Of-Love.mp3"
	},
	{
		songName: "5ive Years Gone - Don't Shoot Me",
		url: "music-archive/07-Don_t-Shoot-Me.mp3"
	},
	{
		songName: "5ive Years Gone - Promise",
		url: "music-archive/08-Promise.mp3"
	},
	{
		songName: "5ive Years Gone - Get Us Right",
		url: "music-archive/09-Get-Us-Right.mp3"
	},
	{
		songName: "5ive Years Gone - In The Heat Of The Night",
		url: "music-archive/10-In-The-Heat-Of-The-Night.mp3"
	},
	{
		songName: "5ive Years Gone - Song 4 U",
		url: "music-archive/11-Song-4-U.mp3"
	}
]

var audio = new Audio(songs[0].url);
var previousButton = document.querySelector('.previous');
var playButton = document.querySelector('.play');
var $playButton = $(".play");
var pauseButton = document.querySelector('.pause');
var $pauseButton = $(".pause");
var nextButton = document.querySelector('.next');
var buttons = document.querySelector(".music-player-buttons");
var songInfoContainer = document.querySelector(".song-info-container");
var songInfo = document.querySelector(".song-info");

var currentSongIndex = 0;
var hasBeenPlayed = false;

const checkIfHasBeenPlayed = () => {
	if (hasBeenPlayed == false) {
		hasBeenPlayed = true;
		buttons.classList.add("music-player-buttons-expanded");
		songInfoContainer.classList.add("music-player-song-info-container-expanded")
		songInfoContainer.style.display = "flex";
	}
}

const updateSongInfo = (index) => {
	songInfo.innerText = songs[index].songName;
};

const manageTextAnimationClass = () => {
	songInfo.classList.remove('song-text-animation');
	if (songInfoContainer.clientWidth < songInfo.clientWidth) {
		songInfo.classList.add('song-text-animation');
	}
}

audio.onended = () => {
	newSongIndex = currentSongIndex == songs.length - 1 ? 0 : currentSongIndex + 1;
	updateSongInfo(newSongIndex);
	manageTextAnimationClass();
	audio.src = songs[newSongIndex].url;
	audio.play();
	currentSongIndex = newSongIndex;
};

playButton.addEventListener('click', function () {
	checkIfHasBeenPlayed();
	audio.play();
	updateSongInfo(currentSongIndex);
	manageTextAnimationClass();
	$playButton.css({ "display": "none" });
	$pauseButton.css({ "display": "inline-block" });
});

pauseButton.addEventListener('click', function () {
	audio.pause();
	$pauseButton.css({ "display": "none" });
	$playButton.css({ "display": "inline-block" });
});

const nextSong = () => {
	checkIfHasBeenPlayed();
	newSongIndex = currentSongIndex == songs.length - 1 ? 0 : currentSongIndex + 1;
	if (!audio.paused) {
		audio.pause();
		updateSongInfo(newSongIndex);
		manageTextAnimationClass();
		audio.src = songs[newSongIndex].url;
		audio.play();
	} else {
		updateSongInfo(newSongIndex);
		manageTextAnimationClass();
		audio.src = songs[newSongIndex].url;
	}
	currentSongIndex = newSongIndex;
};

const previousSong = () => {
	checkIfHasBeenPlayed();
	newSongIndex = currentSongIndex == 0 ? songs.length - 1 : currentSongIndex - 1;
	if (!audio.paused) {
		audio.pause();
		updateSongInfo(newSongIndex);
		manageTextAnimationClass();
		audio.src = songs[newSongIndex].url;
		audio.play();
	} else {
		updateSongInfo(newSongIndex);
		manageTextAnimationClass();
		audio.src = songs[newSongIndex].url;
	}
	currentSongIndex = newSongIndex;
};

nextButton.addEventListener('click', function () {
	nextSong();
});

previousButton.addEventListener('click', function () {
	previousSong();
});

