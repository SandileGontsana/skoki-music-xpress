// Navbar and move to top button
const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu-list");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");

menuBtn.onclick = () => {
  menu.classList.add("active");
  menuBtn.classList.add("hide");
  cancelBtn.classList.add("show");
  body.classList.add("disabledScroll");
}

cancelBtn.onclick = () => {
  menu.classList.remove("active");
  menuBtn.classList.remove("hide");
  cancelBtn.classList.remove("show");
  body.classList.remove("disabledScroll");
}

const siteLogo = document.querySelector('.logo a');

// Get all the menu items
const navLinks = document.querySelectorAll('.menu-list li');

const playSongBtn = document.querySelector('.play-song-btn');

// Add click event listener to each menu item
navLinks.forEach(item => {
  item.addEventListener('click', function () {
    // Remove the 'active' class from all menu items
    navLinks.forEach(menuItem => menuItem.classList.remove('active-menu-list'));

    // Add the 'active' class to the clicked menu item
    this.classList.add('active-menu-list');
  });
});

playSongBtn.onclick = () => {
  removeActiveClass();
}

siteLogo.onclick = () => {
  removeActiveClass();
};

function removeActiveClass() {
  navLinks.forEach(menuItem => menuItem.classList.remove('active-menu-list'));
}

window.onscroll = () => {
  this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");

  // When the user scrolls down 75px from the top of the document, show the button
  if (document.body.scrollTop > 75 || document.documentElement.scrollTop > 75) {
    moveTopBtn.style.display = "block";
  } else {
    moveTopBtn.style.display = "none";
  }
}

// PLAY MUSIC 
const playSong = document.getElementById("song");
var icon = document.getElementById("icon");

icon.addEventListener("click", playMusic);

function playMusic() {
  if (playSong.paused) {
    playSong.play();
    icon.src = "./assets/Image/pause.png";
  } else {
    playSong.pause();
    icon.src = "./assets/Image/play.png";
  }
}

// Move to Top button
var moveTopBtn = document.getElementById("moveTopBtn");

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  removeActiveClass();
}

// PreLoader
var loader = document.getElementById("loading");
function preLoader() {
  loader.style.display = "none";
}

// CHOOSE A SONG
const buttons = document.querySelectorAll(".btn");

const photo = document.getElementById("banner");
const song = document.getElementById("song");
const songName = document.getElementById("songName");
const songBy = document.getElementById("songBy");
const aboutSong = document.getElementById("aboutSong");
const title = document.getElementById("title");
const download = document.getElementById("download");

buttons[0].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "./assets/Image/khoya.jpg";
  song.src = "./assets/Songs/vula_vala_aac_57062.m4a";
  songName.innerText = "Vula vala";
  songBy.innerText = "Kabza de small";
  title.innerText = "Vula vala";
  download.href = "./assets/Songs/khoya.mp3";
  aboutSong.innerText = "Music has the power to uplift your mood and also makes you feel the warmth of emotions in the most memorable ways.Weaving magic once again, Label Day One announces the launch of 'khoya sa' by singer, songwriter & composer, KASYAP who is ready to twirl up emotions and make you feel the jitters of love at first sight. ";
});

buttons[1].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "./assets/Image/ilikemebetter.png";
  song.src = "./assets/Songs/cocosa_ft_chini_i_never_thought_cocosa_soulful_touch_aac_53464.m4a";
  songName.innerText = "I never thought";
  songBy.innerText = "cocosa ft chini";
  title.innerText = " I Like Me Better";
  download.href = "./assets/Songs/I Like Me Better - Lauv.mp3";
  aboutSong.innerText = "“I never thought” is a song recorded by American singer-songwriter Lauv. It was released on May 19, 2017, and is included on Lauv's compilation album I Met You When I Was 18, which was released on May 31, 2018. It has also been used in an Android Auto app commercial, in the trailer of Netflix's romantic comedy To All the Boys I've Loved Before, and in the fall ball episode of Netflix's comedy series The Expanding Universe of Ashley Garcia.";
});

buttons[2].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "./assets/Image/mazaak.jpg";
  song.src = "./assets/Songs/korobela_aac_57037.m4a";
  songName.innerText = "Korobela";
  songBy.innerText = "Kabza de small";
  title.innerText = "Korobela";
  download.href = "./assets/Songs/mazaak.mp3";
  aboutSong.innerText = "I don't think that I needs to explain much about this song just close your eyes and try to feel it but for now I am just gonna tell ya' for the context that how absurd is it that when we least expect love, it still finds us? And when it does, we hope that it isn't a Mazaak, it isn't a joke…";
});

buttons[3].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "./assets/Image/betty.jpeg";
  song.src = "./assets/Songs/abuyile_amakhosi_aac_57201.m4a";
  songName.innerText = "abuyile amakhosi";
  songBy.innerText = "Kabza de song";
  title.innerText = "Kabza de song";
  download.href = "./assets/Songs/betty.mp3";
  aboutSong.innerText = `"Betty (Get Money)" is a song by the American rapper and songwriter Yung Gravy. Yung Gravy, whose real name is Matthew Hauri, is known for his unique blend of hip-hop and comedy, often incorporating humorous and witty lyrics into his songs.

  "Betty (Get Money)" is a track from Yung Gravy's mixtape called "Thanksgiving's Eve," which was released in 2017. The song showcases Yung Gravy's playful and tongue-in-cheek style, with lyrics that touch on themes of money, success, and his own rise in the music industry.

  The track features a catchy beat and Yung Gravy's distinctive delivery, characterized by his laid-back flow and clever wordplay. The song's title, "Betty (Get Money)," is a nod to the slang term "betty," which is often used to refer to an attractive woman. In the context of the song, Yung Gravy is expressing his desire to pursue financial success while attracting attention from women.

  Overall, "Betty (Get Money)" is a light-hearted and humorous track that showcases Yung Gravy's unique style and approach to hip-hop music.`;
});

buttons[4].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "./assets/Image/ghost.jpg";
  song.src = "./assets/Songs/zee_nxumalo_tbo_feat._pyy_log_drum_king_dj_tearz_dr_thulz_ngisakuthanda_official_visualiser_aac_57241.m4a";
  songName.innerText = "Ngisahuthanda";
  songBy.innerText = "Zee Nxumalo";
  title.innerText = "Ngisahuthanda";
  download.href = "./assets/Songs/ghost.mp3";
  aboutSong.innerText = `"Mary on a Cross" is a song by the Swedish rock band Ghost. Ghost, also known as Ghost B.C. in the United States, is a heavy metal band known for their theatrical and occult-themed performances. They gained international recognition with their unique blend of metal, rock, and pop elements.

  "Mary on a Cross" is featured on Ghost's fourth studio album, "Prequelle," which was released in 2018. The song showcases the band's signature sound, characterized by catchy melodies, heavy guitar riffs, and melodic vocals.

  Lyrically, "Mary on a Cross" touches on themes of religion and the subversion of traditional religious imagery. The lyrics depict a reinterpretation of Mary, the mother of Jesus, as a powerful and rebellious figure. The song's lyrics are often cryptic and open to interpretation, which is a characteristic of many Ghost songs.

  Musically, "Mary on a Cross" combines elements of classic rock and heavy metal with a modern twist. The band's use of layered harmonies, memorable hooks, and a driving rhythm section creates a powerful and anthemic sound.

  Overall, "Mary on a Cross" is a dynamic and thought-provoking song that showcases Ghost's unique blend of heavy metal and rock with their characteristic theatrical and occult-inspired style.`;
});

buttons[5].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "./assets/Image/baraat.jpeg";
  song.src = "./assets/Songs/de_mthuda_da_muziqal_chef_ntandane_visualizer_ft._mkeyz_aac_57307.m4a";
  songName.innerText = "Ntandane";
  songBy.innerText = "De Mthude";
  title.innerText = "Ntandane";
  download.href = "./assets/Songs/baraat.mp3";
  aboutSong.innerText = `Ritviz is an Indian electronic music producer, singer, and songwriter known for his fusion of electronic music with traditional Indian sounds. He gained popularity with his breakthrough track "Udd Gaye" in 2017 and has since released several successful songs, collaborating with various artists.
  
  "Baaraat" is a song from Ritviz's debut album, "Ved," which was released in 2018. The song showcases Ritviz's unique blend of electronic music with traditional Indian sounds, creating a dynamic and energetic track.

  Ritviz is an Indian electronic music producer, singer, and songwriter known for his fusion of electronic music with traditional Indian sounds. He gained popularity with his breakthrough track "Udd Gaye" in 2017 and has since released several successful songs, collaborating with various artists..
  `;
});

buttons[6].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "./assets/Image/ishq.jpg";
  song.src = "./assets/Songs/de_mthuda_sir_trill_emlanjeni_visualizer_ft._da_muziqal_chef_aac_57355.m4a";
  songName.innerText = "Emlanjeni";
  songBy.innerText = "De Mthude";
  title.innerText = "Emlanjeni";
  download.href = "./assets/Songs/ishq.mp3";
  aboutSong.innerText = "Music has the power to uplift your mood and also makes you feel  the warmth of emotions in the most memorable ways. Weaving magic once again, Label Day One announces the launch of 'Ishq Bulaava' that is ready to twirl up emotions and make you feel the jitters of love at first sight.";
});

buttons[7].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "./assets/Image/katputli.jpg";
  song.src = "./assets/Songs/de_mthuda_da_muziqal_chef_kwiish_sa_ithuba_visualizer_ft._eemoh_aac_57397.m4a";
  songName.innerText = "Ithuba";
  songBy.innerText = "De Mtuda";
  title.innerText = "Ithuba";
  download.href = "./assets/Songs/katputli.mp3";
  aboutSong.innerText = "Music has the power to uplift your mood and also makes you feel the warmth of emotions in the most memorable ways. 'Katputli Ke Dhaage' song was released in 2021.";
});

buttons[8].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "./assets/Image/you.jpg";
  song.src = "./assets/Songs/tns_umona_ft._mpumi_aac_57473.m4a";
  songName.innerText = "Umona";
  songBy.innerText = "TNS ft Mpumi";
  title.innerText = "Umona";
  download.href = "./assets/Songs/you.mp3";
  aboutSong.innerText = "Music has the power to uplift your mood and also makes you feel  the warmth of emotions in the most memorable ways. 'Tu/You' was released in 2022";
});

buttons[9].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "./assets/Image/pal.jpg";
  song.src = "./assets/Songs/sha_sha_ndawana_official_audio_feat._sykes_kelvin_momo_aac_57532.m4a";
  songName.innerText = "Ndawana";
  songBy.innerText = "Sha Sha";
  title.innerText = "Ndawana";
  download.href = "./assets/Songs/pal.mp3";
  aboutSong.innerText = "Music has the power to uplift your mood and also makes you feel  the warmth of emotions in the most memorable ways. 'Har Ek Pal' was released in 2017.";
});

buttons[10].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "./assets/Image/chand.jpg";
  song.src = "./assets/Songs/dj_maphorisa_x_kabza_de_small_ft_mhaw_keys_koko_c0fuyilii2g_360p_mp4_aac_57008.m4a";
  songName.innerText = "Koko";
  songBy.innerText = "Kabza de small ft dj maphorisa";
  title.innerText = "Koko";
  download.href = "./assets/Songs/chand.mp3";
  aboutSong.innerText = "Music has the power to uplift your mood and also makes you feel  the warmth of emotions in the most memorable ways. 'Chand Baliyan' was released in 2023.";
});

buttons[11].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "./assets/Image/aisay.jpeg";
  song.src = "./assets/Songs/kabza_de_small_njelic_nana_thula_remix_feat._young_stunna_nkosazana_daughter_aac_57615.m4a";
  songName.innerText = "Nana thula";
  songBy.innerText = "Kabza de small";
  title.innerText = "Aisay Kaisay";
  download.href = "./assets/Songs/aisay.mp3";
  aboutSong.innerText = "Music has the power to uplift your mood and also makes you feel  the warmth of emotions in the most memorable ways. 'Aisay Kaisay' was released in 2020.";
});






