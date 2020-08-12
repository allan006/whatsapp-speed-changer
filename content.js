
const interval = setInterval(() => {

    const header = document.querySelector("._1QUKR");

    if (header) {
        clearInterval(interval);

        const button = document.createElement("button");
        button.innerHTML = "&#9658;2x";
        button.classList.add("twoTimesButton");

        button.addEventListener("click", () => {
            if(button.classList.contains("speed")){

                button.classList.remove("speed");

                const audios = document.querySelectorAll("audio");
                
                audios.forEach((audio) => {
                    audio.playbackRate = 1;
                });

            } else{

                button.classList.add("speed");

                const audios = document.querySelectorAll("audio");
                
                audios.forEach((audio) => {
                    audio.playbackRate = 2;
                });

            }
            

        });

        header.appendChild(button);
    }

}, 1000);