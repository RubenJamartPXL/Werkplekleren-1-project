document.addEventListener("DOMContentLoaded", function() {
    let buttonUp = document.getElementById("backtotop");

    window.onscroll = function() {
        scrollFunction();
    };

    function scrollFunction() {
        if (document.body.scrollTop > 1080 || document.documentElement.scrollTop > 1080) {
            buttonUp.style.display = "block";
        } else {
            buttonUp.style.display = "none";
        }
    }

    buttonUp.addEventListener("click", scrollTop);

    function scrollTop() {
        document.documentElement.scrollTop = 0;
    }

    let fillwho = document.getElementById("fillwho");

    let targetDate = new Date(2002, 10, 4);

    let currentDate = new Date();
    const timeDifference = currentDate - targetDate;

    const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25; // accounting for leap years
    const yearsDifference = Math.round(timeDifference / millisecondsInYear);



    fillwho.textContent = "My name is Ruben and I am " + yearsDifference + " years old. I live in Limburg - Belgium and I am very passionate about a lot of things that have to do with computers. I am most passionate about making websites. My hobbies are working out, playing games and watching various shows and movies. I can be a little chaotic in a fun way and have a decent sense of humour.\n" +
        "I am always looking to learn new skills for web-designing.\n" +
        "I will tell more about myself and my experience later on into this website!";
});