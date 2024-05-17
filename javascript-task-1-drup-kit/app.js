const audioId = ["65", "83", "68", "70", "71", "72", "74", "75", "76"];
function palyMusic(musicId) {
  if (event.keyCode) {
    var keyCode = event?.keyCode?.toString();
    console.log(keyCode);
  } else {
    var keyCode = musicId;
    console.log(keyCode);
  }
  if (audioId.includes(keyCode)) {
    const audioElement = document.getElementById(keyCode);
    const soundName = document.getElementsByClassName(keyCode)[0] ;
    soundName.classList.add ("music-on") ;
    setTimeout(() =>{
      soundName.classList.remove("music-on"); 
    }, 200)
    console.log(soundName[0])
    audioElement.play();
  } else {
    return;
  }
}
window.addEventListener("keydown", palyMusic);
