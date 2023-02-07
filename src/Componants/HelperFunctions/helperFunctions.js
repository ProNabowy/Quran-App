// main audio
export const audio = new Audio("https://download.quranicaudio.com/qdc/mishari_al_afasy/murattal/1.mp3");

// control play and pause icone function

const control_play_pause_icone = (e, chapter, index) =>
{
    const key = Object.keys(chapter["audio_files"][index])[0];
    const classList = e.target.classList;

    if (classList.contains("fa-play"))
    {
        classList.remove("fa-play");
        classList.add("fa-pause");
        audio.pause();
        audio.src = chapter["audio_files"][index][key];
        audio.play();
    } else
    {
        classList.remove("fa-pause");
        classList.add("fa-play");
        audio.pause();
    }
};



// converte all pause icone to play icone
const convert_play_pause = () =>
{
    const elements = document.querySelectorAll(".fa-pause");

    elements.forEach(ele =>
    {
        const classList = ele.classList;

        if (!classList.contains("active-audio"))
        {
            classList.remove("fa-pause");
            classList.add("fa-play");
            audio.currentTime = 0;
        } else
        {
            classList.add("fa-pause");
            classList.remove("fa-play");
        }
    });
};

// this Function To push currrent Song to store and use it
export const hunadler_current_chapter = (e, chapter, index) =>
{
    // remove active-audio class from all audio elements
    const elements = document.querySelectorAll(".active-audio");
    elements.forEach(element => element.classList.remove("active-audio"));

    // add active-audio class to the current element
    e.target.classList.add("active-audio");
    convert_play_pause();
    control_play_pause_icone(e, chapter, index);
};


// this functio to play animation icone
const play_animation = (chapter_play) =>
{
    const elements = document.querySelectorAll(".loader div");

    if (chapter_play && elements.length)
    {
        elements.forEach((element) =>
        {
            element.style.cssText += "animation-name: line-grow;";
        });
    } else if (!chapter_play && elements.length)
    {
        elements.forEach((element) =>
        {
            element.style.cssText += "animation-name: stoped;";
        });
    }

}


// set a valid time to html time tag
export const timeUpdate = () =>
{
    const start_Time = document.querySelector(".start-time");
    const end_Time = document.querySelector(".end-time");
    const thumb_icone = document.querySelector(".thumb-icone");

    audio.addEventListener("timeupdate", () =>
    {
        thumb_icone.classList.remove("fa-play");
        thumb_icone.classList.add("fa-pause");

        let audio_duration = audio.duration;
        let audio_current_time = audio.currentTime;

        let start_minutes = Math.floor(audio_current_time / 60);
        let start_seconds = Math.floor(audio_current_time % 60);
        let start_hours = 0;

        if (start_minutes >= 60)
        {
            start_hours = Math.floor(start_minutes / 60);
            start_minutes = start_minutes % 60;
        }

        if (start_minutes < 10) start_minutes = `0${start_minutes}`;
        if (start_seconds < 10) start_seconds = `0${start_seconds}`;

        start_Time.innerHTML = `${start_hours}:${start_minutes}:${start_seconds}`;

        let end_minutes = Math.floor((audio_duration - audio_current_time) / 60);
        let end_seconds = Math.floor((audio_duration - audio_current_time) % 60);
        let end_hours = 0;

        if (end_minutes >= 60)
        {
            end_hours = Math.floor(end_minutes / 60);
            end_minutes = end_minutes % 60;
        }

        if (end_seconds < 10) end_seconds = `0${end_seconds}`;
        if (end_minutes < 10) end_minutes = `0${end_minutes}`;

        end_Time.innerHTML = `${end_hours}:${end_minutes}:${end_seconds}`;

        if (audio.paused)
        {
            thumb_icone.classList.remove("fa-pause");
            thumb_icone.classList.add("fa-play");
        }

        play_animation(!audio.paused);
    });
};

// this functio to reset cureent audio time when audio ended

const audioEnded = () =>
{
    audio.addEventListener("ended", () =>
    {
        Array.from(document.querySelectorAll(".fa-pause")).forEach(icon =>
        {
            icon.classList.remove("fa-pause");
            icon.classList.add("fa-play");
        });
    });
};

// control thumb to play when audio playing
export const control_thumb = () =>
{
    audio.addEventListener("timeupdate", () =>
    {
        const thumb = document.querySelector("#thumb");
        const seek = document.querySelector("#seek");
        const seekDot = document.querySelector("#seek_dot");
        const progress = parseInt((audio.currentTime / audio.duration) * 100) || 0;
        thumb.value = progress;

        seek.style.width = `${thumb.value}%`;
        seekDot.style.left = `${thumb.value}%`;

        thumb.addEventListener("change", () =>
        {
            audio.currentTime = thumb.value * audio.duration / 100;
        });

        audioEnded();
    });
}


// volume  handler
export const volumeHandler = () =>
{
    const volume = document.querySelector("#thumb-volume");
    const volumeIcon = document.querySelector(".volume-icone");
    const thumb = document.querySelector(".volume-controlar .thumb-ui");
    const seekDot = document.querySelector(".volume-controlar .thumb-cricle");

    volume.addEventListener("change", () =>
    {
        thumb.style.width = `${volume.value}%`;
        seekDot.style.left = `${volume.value}%`;
        if (+volume.value === 0)
        {
            volumeIcon.classList.remove("fa-volume");
            volumeIcon.classList.remove("fa-volume-high");
            volumeIcon.classList.add("fa-volume-xmark");
            audio.muted = true;
        } else if (volume.value <= 50)
        {
            audio.muted = false;
            volumeIcon.classList.remove("fa-volume-xmark");
            volumeIcon.classList.remove("fa-volume-high");
            volumeIcon.classList.add("fa-volume-low");
        } else if (volume.value > 50)
        {
            audio.muted = false;
            volumeIcon.classList.remove("fa-volume-xmark");
            volumeIcon.classList.remove("fa-volume-low");
            volumeIcon.classList.add("fa-volume-high");
        }
        audio.volume = volume.value / 100;
    });
    
}

export const control_thumb_audio = () =>
{
    const input = document.querySelector("#thumb");
    const thump = document.querySelector("#seek");
    const seek_dot = document.querySelector("#seek_dot");
    input.addEventListener("change", () =>
    {
        thump.style.width = input.value - 5 + "%";
        seek_dot.style.left = input.value - 5 + "%";
    });
}
// create function to controal next and perv

// next icone
const nextIcon = (state, active_chapter, index) =>
{
    const next = document.querySelector(".next-icone");
    // loop for state to get the  next song;
    next.addEventListener("click", () =>
    {
        let currentChapter = state.filter(chapter => Number(chapter.id) === Number(active_chapter.id) + 1);
        const key = Object.keys(currentChapter[0]["audio_files"][index])[0];
        return audio.src = currentChapter[0]["audio_files"][index][key];
    });
};
// perv icone
const pervIcon = (state, active_chapter, index) =>
{
    const perv = document.querySelector(".perv-icone");
    // loop for state to get the  perv song;
    perv.addEventListener("click", () =>
    {
        if (active_chapter.id !== 1)
        {
            let currentChapter = state.filter(chapter => +chapter.id === Number(active_chapter.id) - 1);
            const key = Object.keys(currentChapter[0]["audio_files"][index])[0];
            audio.src = currentChapter[0]["audio_files"][index][key];
        }
    });
};


export const handlePrevNextControls = (state, active_chapter, index) =>
{
    nextIcon(state, active_chapter, index);
    pervIcon(state, active_chapter, index);

    return audio.pause();
}

export const chooseReader = (arrOfReaders, value) =>
{
    const current_reader = arrOfReaders.filter(reader => Object.keys(reader)[0] === value);
    return arrOfReaders.indexOf(current_reader[0]);
}

// Create Function To Cotroal Keyboard

const controalKeyborad = () => {
    window.addEventListener("keydown" , (e) => {
        if((e.keyCode === 32 && e.target.id !== "search_input") || (e.keyCode === 13 && e.target.id !== "search_input")) {
            if(!audio.paused) {
                audio.pause();
            }else {
                audio.play();
            }
            e.preventDefault();
        }
    });
}

controalKeyborad();

// controal page-loader

export const pageLoader = () =>
{
    const loader = document.querySelector(".page-loader");
    window.addEventListener("load", _ => loader.remove() , {"once": true});
}

