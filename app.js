// Array to store song details
const songs = [
    {
        name: "Song 1",
        artist: "Artist 1",
        albumArt: "album1.jpg",
        file: "song1.mp3"
    },
    {
        name: "Song 2",
        artist: "Artist 2",
        albumArt: "album2.jpg",
        file: "song2.mp3"
    },
    {
        name: "Song 3",
        artist: "Artist 3",
        albumArt: "album3.jpg",
        file: "song3.mp3"
    }
];

let currentSongIndex = 0;
const audioPlayer = document.getElementById('audioPlayer');
const playPauseBtn = document.getElementById('playPauseBtn');
const playPauseIcon = document.getElementById('playPauseIcon');
const progressBar = document.getElementById('progressBar');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const songName = document.getElementById('songName');
const artistName = document.getElementById('artistName');
const albumArt = document.getElementById('albumArt');

// Function to load the current song
function loadSong(songIndex) {
    const song = songs[songIndex];
    songName.textContent = song.name;
    artistName.textContent = song.artist;
    albumArt.src = song.albumArt;
    audioPlayer.src = song.file;
}

// Function to play/pause the song
function togglePlayPause() {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseIcon.src = 'pause.png'; // Change to pause icon
    } else {
        audioPlayer.pause();
        playPauseIcon.src = 'play.png';  // Change to play icon
    }
}

// Function to update progress bar
function updateProgressBar() {
    const progressPercent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressBar.value = progressPercent;
}

// Function to set song progress based on progress bar value
function setSongProgress() {
    const progress = progressBar.value;
    audioPlayer.currentTime = (progress / 100) * audioPlayer.duration;
}

// Function to play the next song
function playNextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    audioPlayer.play();
    playPauseIcon.src = 'pause.png';
}

// Function to play the previous song
function playPrevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    audioPlayer.play();
    playPauseIcon.src = 'pause.png';
}

// Event listeners
playPauseBtn.addEventListener('click', togglePlayPause);
audioPlayer.addEventListener('timeupdate', updateProgressBar);
progressBar.addEventListener('input', setSongProgress);
nextBtn.addEventListener('click', playNextSong);
prevBtn.addEventListener('click', playPrevSong);

// Load the first song initially
loadSong(currentSongIndex);
