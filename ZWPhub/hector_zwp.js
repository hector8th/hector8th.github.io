// #################### SIDE MENU OPEN // CLOSE FUNCTIONS ####################
document.getElementById('menu-open').onclick = function() {
    document.getElementById('side-menu-area').classList.toggle('reveal');
    document.getElementById('side-btn').classList.toggle('hide');
}

document.getElementById('menu-close').onclick = function() {
    document.getElementById('side-menu-area').classList.toggle('reveal');
    document.getElementById('side-btn').classList.toggle('hide');
}

// #################### DROPDOWN MENU FUNCTIONS ####################
document.getElementById('nav1').onmouseenter = function() {
    document.getElementById('dropdown1').classList.remove('hide');
    document.getElementById('dropdown2').classList.add('hide');
    document.getElementById('dropdown3').classList.add('hide');
}

document.getElementById('nav2').onmouseenter = function() {
    document.getElementById('dropdown1').classList.add('hide');
    document.getElementById('dropdown2').classList.remove('hide');
    document.getElementById('dropdown3').classList.add('hide');
}

document.getElementById('nav3').onmouseenter = function() {
    document.getElementById('dropdown1').classList.add('hide');
    document.getElementById('dropdown2').classList.add('hide');
    document.getElementById('dropdown3').classList.remove('hide');
}

document.getElementById('nav-area').onmouseleave = function() {
    document.getElementById('dropdown1').classList.add('hide');
    document.getElementById('dropdown2').classList.add('hide');
    document.getElementById('dropdown3').classList.add('hide');
}


// *********************** SKYWARD SWORD *************************
document.getElementById("skywardsword").onclick = function() {
    window.open("https://zelda.fandom.com/wiki/The_Legend_of_Zelda:_Skyward_Sword", "_blank");
}

// *********************** THE MINISH CAP *************************
document.getElementById("minishcap").onclick = function() {
    window.open("https://zelda.fandom.com/wiki/The_Legend_of_Zelda:_The_Minish_Cap", "_blank");
}

// *********************** FOUR SWORDS *************************
document.getElementById("fourswords").onclick = function() {
    window.open("https://zelda.fandom.com/wiki/The_Legend_of_Zelda:_Four_Swords", "_blank");
}

// *********************** OCARINA OF TIME *************************
document.getElementById("ocarinaOT").onclick = function() {
    window.open("https://zelda.fandom.com/wiki/The_Legend_of_Zelda:_Ocarina_of_Time", "_blank");
}

// *********************** A LINK TO THE PAST *************************
document.getElementById("link2Past").onclick = function() {
    window.open("https://zelda.fandom.com/wiki/The_Legend_of_Zelda:_A_Link_to_the_Past", "_blank");
}

// *********************** LINK'S AWAKENING *************************
document.getElementById("linkAwkn").onclick = function() {
    window.open("https://zelda.fandom.com/wiki/The_Legend_of_Zelda:_Link%27s_Awakening", "_blank");
}

// *********************** ORACLE OF SEASONS // AGES *************************
document.getElementById("seasonAges").onclick = function() {
    window.open("https://zelda.fandom.com/wiki/Zelda_Timeline#Oracle_of_Seasons_and_Oracle_of_Ages", "_blank");
}

// *********************** A LINK BETWEEN WORLDS *************************
document.getElementById("linkBetween").onclick = function() {
    window.open("https://zelda.fandom.com/wiki/The_Legend_of_Zelda:_A_Link_Between_Worlds", "_blank");
}

// *********************** TRI FORCE HEROES *************************
document.getElementById("triforceHeroes").onclick = function() {
    window.open("https://zelda.fandom.com/wiki/The_Legend_of_Zelda:_Tri_Force_Heroes", "_blank");
}

// *********************** THE LEGEND OF ZELDA *************************
document.getElementById("legendZelda").onclick = function() {
    window.open("https://zelda.fandom.com/wiki/The_Legend_of_Zelda", "_blank");
}

// *********************** ZELDA II: THE ADVENTURES OF LINK *************************
document.getElementById("zeldaII").onclick = function() {
    window.open("https://zelda.fandom.com/wiki/Zelda_II:_The_Adventure_of_Link", "_blank");
}

// *********************** MAJORA'S MASK *************************
document.getElementById("majora").onclick = function() {
    window.open("https://zelda.fandom.com/wiki/The_Legend_of_Zelda:_Majora%27s_Mask", "_blank");
}

// *********************** TWILIGHT PRINCESS *************************
document.getElementById("twilight").onclick = function() {
    window.open("https://zelda.fandom.com/wiki/The_Legend_of_Zelda:_Twilight_Princess", "_blank");
}

// *********************** FOUR SWORDS ADVENTURES *************************
document.getElementById("fourSwordsAdv").onclick = function() {
    window.open("https://zelda.fandom.com/wiki/The_Legend_of_Zelda:_Four_Swords_Adventures", "_blank");
}

// *********************** THE WIND WAKER *************************
document.getElementById("windWaker").onclick = function() {
    window.open("https://zelda.fandom.com/wiki/The_Legend_of_Zelda:_The_Wind_Waker", "_blank");
}

// *********************** THE PHANTOM HOURGLASS *************************
document.getElementById("phantom").onclick = function() {
    window.open("https://zelda.fandom.com/wiki/The_Legend_of_Zelda:_The_Phantom_Hourglass", "_blank");
}

// *********************** SPIRIT TRACKS *************************
document.getElementById("spiritTracks").onclick = function() {
    window.open("https://zelda.fandom.com/wiki/The_Legend_of_Zelda:_Spirit_Tracks", "_blank");
}

// *********************** BREATH OF THE WILD *************************
document.getElementById("wildBreath").onclick = function() {
    window.open("https://zelda.fandom.com/wiki/The_Legend_of_Zelda:_Breath_of_the_Wild", "_blank");
}





// #################### DYNAMICALLY INSERTING LIST ITEMS // SIDE MENU ####################
// const zeldaLinks = [
//     {title: 'Skyward Sword', image: 'https://zelda.com/zelda.jpg'},
//     {title: 'The MinishCap', image: 'https://zelda.com/minishCap.jpg'}
// ]

// const list = document.getElementById("list");

// for (i = 0; i < zeldaLinks.length; i++) {
//     const zeldaLinkDet = zeldaLinks[i];
//     const liElem = document.createElement("li");
//     const aElem = document.createElement("a");
//     aElem.href = zeldaLinkDet.image;
//     aElem.innerText = zeldaLinkDet.title;
//     liElem.appendChild(aElem);
//     list.appendChild(liElem);
// }
