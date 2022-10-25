// #################### Link - Gif Image FUNCTIONS ####################
const screenElem = document.getElementById('content-box-area');
const musicPlayer = document.getElementById('player');

// #################### DYNAMICALLY INSERTING LIST ITEMS // SIDE MENU ####################
const musicLinks = [
    {title: 'Flying Battery Zone', src: 'music_files/link1.mp3', loop: true, controls: true},
    {title: 'Finale', src: 'music_files/link2.mp3', loop: true, controls: true},
]

const mPlayer = document.getElementById("player");

for (i = 0; i < musicLinks.length; i++) {
    const musicLoader = musicLinks[i];
    const audioElem = document.createElement("audio");
    const sourceElem = document.createElement("source");
    audioElem.classList.add('musicStart');
    audioElem.classList.add('hide');
    audioElem.id = "player" + (i + 1);
    audioElem.loop = musicLoader.loop;
    audioElem.controls = musicLoader.controls;
    sourceElem.name = musicLoader.title;
    sourceElem.src = musicLoader.src;
    sourceElem.type = "audio/mpeg";
    sourceElem.id = "music" + (i + 1);
    audioElem.appendChild(sourceElem);
    screenElem.appendChild(audioElem);
}


document.getElementById('link1').onclick = function() {
    screenElem.classList.toggle('link1');
    screenElem.classList.remove('link2');
    screenElem.classList.remove('link3');
    screenElem.classList.remove('link4');
    screenElem.classList.remove('link5');
    screenElem.classList.remove('link6');
    screenElem.classList.remove('link7');
    document.getElementById('player1').classList.toggle('hide');
    document.getElementById('player2').classList.add('hide');
    document.getElementById('player3').classList.add('hide');
    document.getElementById('player4').classList.add('hide');
    document.getElementById('player5').classList.add('hide');
    document.getElementById('player6').classList.add('hide');
    document.getElementById('player7').classList.add('hide');
}

document.getElementById('link2').onclick = function() {
    screenElem.classList.toggle('link2');
    screenElem.classList.remove('link1');
    screenElem.classList.remove('link3');
    screenElem.classList.remove('link4');
    screenElem.classList.remove('link5');
    screenElem.classList.remove('link6');
    screenElem.classList.remove('link7');
    document.getElementById('player2').classList.toggle('hide');
    document.getElementById('player1').classList.add('hide');
    document.getElementById('player3').classList.add('hide');
    document.getElementById('player4').classList.add('hide');
    document.getElementById('player5').classList.add('hide');
    document.getElementById('player6').classList.add('hide');
    document.getElementById('player7').classList.add('hide');
}
