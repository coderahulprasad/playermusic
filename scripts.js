const audio = new Audio("music/humsafar.mp3" );
const play=document.getElementById("play");
const image=document.querySelector("img");
const title=document.getElementById("title");
const artist=document.getElementById("artist");
const forward=document.getElementById("forward");
const backward=document.getElementById("backward");


const songs=[{
    name:"humsafar",
    title:"HUMSAFAR",
    artist:"By : Akhil Sachdeva",
},
{
name:"kinna",
title:"KINNA SONA",
artist:"By : Sunil kamath",
},
{
name:"mastmagan",
title:"MAST MAGAN",
artist:"By : Shankar-Ehsaan",
},
{
name:"meraman",
title:"MERA MAN",
artist:"By : Falak shabir",
},
{
name:"zalima",
title:"ZALIMA",
artist:"By : Abhijeet sawant",
}
            
];

let isplaying =false;


// for play
const playMusic=function()
{
    isplaying=true;
    audio.play();
    play.classList.replace("fa-play","fa-pause");
    image.classList.add("animation");
};


// for pause
const pauseMusic=function()
{
    isplaying=false;
    audio.pause();
    play.classList.replace("fa-pause","fa-play");
    image.classList.remove("animation");
};

$(".main_button").click(function()
{
    if(isplaying)
    {
        pauseMusic();
    }
    else
    {
        playMusic();
    }
})

const loadsong=function(songs)
{
    title.textContent=songs.title;
    artist.textContent=songs.artist;
    audio.src="music/"+songs.name+".mp3";
    image.src="images/"+songs.name+".jpg";
}

// loadsong(songs[]);

var index=0;
const nextsong=()=>
{
    if(index<4)
    {
    index=index+1;
    }
    else
    {
        index=0;
    }
    loadsong(songs[index]);
    playMusic();
};

const prevsong=()=>
{
    if(index>0)
    {
    index=index-1;
    }
    else
    {
        index=4;
    }
    loadsong(songs[index]);
    playMusic();
};

$("#forward").click(nextsong);
$("#backward").click(prevsong);
