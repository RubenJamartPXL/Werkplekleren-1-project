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

    fillwho.textContent = "My name is Ruben and I am " + yearsDifference + " years old. I live in Limburg - Belgium. I am very passionate about a lot of things that have to do with computers but I am most passionate about making websites. My hobbies are working out at the local gym, music, playing games and watching various shows and movies. I can be a little chaotic in a fun way and have a decent sense of humour.\n" +
        "I am always looking to learn new skills for web-designing, always looking to get more experience in the working field.\n" +
        "I will tell more about myself and my experience later on into this website!";


    let fillwhy = document.getElementById("fillwhy");

    let whyoutput = "What makes me special is that I'm extremely passionate about self improvement. I'm always looking to improve myself as a person and as a web designer. I will give it my all. I have a lot of experience with various tools. I am creative, great at problem-solving and I pick up new things very quickly. I think I'm ahead of the average person at my age. Socially I get along with a lot of people and I'd be a great fit in almost any work environment."

    fillwhy.textContent = whyoutput;

    let buttonTranslate = document.getElementById("translate");
    buttonTranslate.addEventListener("click", translating);
    let engels = true;

    let inleiding = document.getElementById("inleiding");
    let textinleiding = document.getElementById("textinleiding");
    let midden = document.getElementById("midden");
    let textmidden = document.getElementById("textmidden");
    let pop = document.getElementById("pop");
    let textpop = document.getElementById("textpop");
    let werkveld = document.getElementById("werkveld");
    let textwerkveld = document.getElementById("textwerkveld");
    let analyse = document.getElementById("analyse");
    let textanalyse = document.getElementById("textanalyse");
    let dashboard = document.getElementById("dashboard");
    let textdashboard = document.getElementById("textdashboard");
    let portfolio = document.getElementById("portfolio");
    let textportfolio = document.getElementById("textportfolio");
    let slot = document.getElementById("slot");
    let textslot = document.getElementById("textslot");

    english();

    function translating() {
        if(engels) { //ENGELS
            buttonTranslate.innerText = "English";
            console.log("english");
            english();
            engels = false;

        }
        else { //NEDERLANDS
            buttonTranslate.innerText = "Nederlands";
            console.log("dutch");
            nederlands();
            engels = true;
        }
    }

    function nederlands() {
        inleiding.textContent = "Inleiding";
        textinleiding.textContent = "Voor het schooljaar 2023-2024 volg ik het keuzetraject Digitale Vormgeving op de hogeschool PXL.\n" +
            "Hier volg ik verschillende vakken waaronder het vak Werkplekleren 1. In dit vak worden we voorbereid om te gaan werken binnen ons vak.\n" +
            "Dit vak houd vanalles in waar ik verder in dit document meer over ga vertellen.\n";
        midden.textContent = "Midden";
        textmidden.textContent = "Voor het vak Werkplekleren 1 heb ik enorm veel bijgeleerd. Dit hebben we in verschillende sessies gedaan waar andere onderwerpen zijn besproken en uitgelegd.";
        pop.textContent = "POP";
        textpop.textContent = "Het begon bij de verschillende POP sessies.\n" +
            "POP staat voor Persoonlijke OntwikkelingsPlan, hier leer je over hoe en waarom je aan personal branding zou doen, wat jouw motivatie is om dit te doen, jouw kernwaarden en kernkwadranten.\n" +
            "Ook leer je hier over reflectie en waarom het belangrijk is.\n" +
            "Persoonlijk heb ik tijdens deze sessies geleerd dat ik een leuke sfeer heel belangrijk vind, ook hebben deze sessies mij enorm gemotiveerd om aan personal branding te doen en ben hier vaak mee bezig. Mijn motivatie om dit te doen is omdat ik een passie heb voor websites bouwen en ik wil mijzelf hier succesvol mee maken. Beloning en dankbaarheid zijn ook een grote motivatie voor mij.\n" +
            "Mijn hard skills zijn verschillende tools zoals Photoshop, Illustrator, Premiere Pro, After Effects, deze heb ik pas geleerd tijdens de lessen Graphics Skills en in mijn vrije tijd, maar ook programmeertalen zoals HTML, CSS, JavaScript, Java, C++, C#, PHP, SQL, ..., maar deze bezat ik al. Ik\n" +
            "Ook kan ik heel goed om met computers.\n" +
            "Mijn soft skills zijn creatief, humor, communicatief, snel lerend, leergierig en vriendelijk. Ik ben zeker creatiever geworden aangezien mijn teamgenoten voor dit project mij geïnspireerd hebben en ik heb een leuke kans gekregen om het uit te voeren.\n" +
            "Ik zou graag meer ervaring willen opbouwen in werkplekleren 2 en kijk hier al erg naar uit.\n";
        werkveld.textContent = "Werkveldverkenning";
        textwerkveld.textContent = "Daarna hebben we de werkveldverkenning sessies gehad waar we gastsprekers kregen van bedrijven. Ik heb zelfs bij een van de bedrijven gesolliciteerd als jobstudent om meer ervaring op te bouwen.\n" +
            "We hebben 3 bedrijven mogen verkennen, het eerste bedrijf was Codeurs, het tweede bedrijf was Yappa en het derde bedrijf was Monocode. Bij monocode heb ik gesolliciteerd.\n" +
            "Ik heb hier veel geleerd over hoe het proces werkt om een website te maken en dat een werksfeer super belangrijk is wanneer je een job zoekt.\n";
        analyse.textContent = "Analyse Arbeidsmarkt";
        textanalyse.textContent = "Tijdens deze sessies hebben wij een analyse moeten maken voor de arbeidsmarkt. Hiervoor moesten we vacatures zoeken die ons interessant leken. Hier heb ik geleerd dat veel bedrijven minstens een bachelor vragen maar dat er wel enorm veel vraag is naar Front-End/Full-Stack developers wat ik juist wil doen. We krijgen ook vaak veel extra voordelen bovenop een goed loon.";
        dashboard.textContent = "Dashboard";
        textdashboard.textContent = "Daarna moesten we in een groep een dashboard maken. Dit heb ik met mijn teamgenoten Bo en Lukas gedaan.\n" +
            "Eerst hebben we geleerd  wat een dashboard eigenlijk inhoud en wat er allemaal in voor moet komen.\n" +
            "Daarna hebben we samen aan een wireframe gewerkt en kregen het idee om een blauwprint als design te kiezen. Dit hebben we voor het hele dashboard gebruikt. Uiteindelijk kregen we het idee om verschillende kleuren te gebruiken voor het blauwprint per sectie. Dit is uiteindelijk veel groter geworden dan dat we dachten en we zijn hier heel trots op.\n";
        portfolio.textContent = "Portfolio";
        textportfolio.textContent = "Dit is ons eindproject voor werkplekleren 1. Ik heb hier veel tijd aan uitgegeven aangezien ik nog vanalles had moeten opfrissen uit de lessen Web Essentials. Ik heb vrijstelling voor dit vak dus het is al een jaar geleden voor mij.  Gelukkig was dit geen probleem en is alles goed verlopen.\n" +
            "Ik ben erg trots met wat ik bekomen ben, dit is de eerste keer dat ik een website maak die zo groot is als deze opdracht.\n" +
            "Met het maken van deze portfolio heb ik niet veel bijgeleerd maar wat ik tijdens dit vak en de andere vakken heb bijgeleerd heb ik wel toegepast.\n" +
            "Deze tekst is het laatste deel wat ik nog moet maken en dus brengt ons dit tot het slot van mijn eindreflectie.\n";
        slot.textContent = "Slot";
        textslot.textContent = "Ik heb enorm veel over mijzelf bijgeleerd maar ook over de job die ik wil beoefenen later.\n" +
            "Ik weet nu veel beter hoe het proces werkt om een website te maken en hoe het is om dat in een team te maken.\n" +
            "Ook heb ik veel technieken geleerd die ik kan gebruiken later om mijn werk beter te doen.\n" +
            "Ik wil dit moment ook gebruiken om iedereen te bedanken die deze opdracht heeft helpen opstellen en natuurlijk ook aan de leerkrachten die mij geholpen hebben en advies gegeven hebben doorheen het vak. Ik hoop heel erg dat ik het goed gedaan heb.\n" +
            "Bedankt.\n";
    }

    function english() {
        inleiding.textContent = "Introduction";
        textinleiding.textContent = "For the academic year 2023-2024, I am pursuing the course Digital Design at PXL University. Here, I am taking various subjects, including Workplace Learning 1. In this course, we are being prepared to work within our field. This subject encompasses a variety of topics, which I will further elaborate on in this document.";
        midden.textContent = "Middle";
        textmidden.textContent = "I have learned a great deal during Workplace Learning 1. We covered various topics in different sessions where different subjects were discussed and explained.";
        pop.textContent = "POP";
        textpop.textContent = "It all began with the various POP sessions. POP stands for Personal Development Plan (in Dutch), where you learn about how and why you should engage in personal branding, your motivation for doing so, your core values, and core quadrants. You also learn about reflection and why it is essential. Personally, during these sessions, I learned that I find a pleasant atmosphere crucial. These sessions also motivated me greatly to invest in personal branding, something I am often engaged in now. My motivation for this is my passion for building websites, and I want to make myself successful in this area. Reward and gratitude are also significant motivators for me.\n" +
            "My hard skills include various tools like Photoshop, Illustrator, Premiere Pro, After Effects, as well as programming languages like HTML, CSS, JavaScript, Java, C++, C#, PHP, SQL, and more. I am also very proficient with computers. My soft skills include creativity, humor, communication, quick learning, curiosity, and friendliness. I definitely became more creative as my teammates on this project inspired me and I had a fun opportunity to implement it.\n" +
            "I would like to build more experience in Workplace Learning 2 and am looking forward to it.\n";
        werkveld.textContent = "Field Exploration";
        textwerkveld.textContent = "Afterward, we had field exploration sessions where guest speakers from companies shared their insights. I even applied for a job as a student at one of the companies to gain more experience. We explored three companies: Codeurs, Yappa, and Monocode. I applied at Monocode.\n" +
            "I learned a lot here about the process of making a website and the fact that the atmosphere of a workplace a very important thing is when looking for a job.\n";
        analyse.textContent = "Labor Market Analysis";
        textanalyse.textContent = "During these sessions, we had to analyze the labor market. We had to search for vacancies that interested us. Here, I learned that many companies require at least a bachelor's degree, but there is a high demand for Front-End/Full-Stack developers, which is what I aspire to become. We often receive many additional benefits along with a good salary.";
        dashboard.textContent = "Dashboard";
        textdashboard.textContent = "Next, we had to create a dashboard in a group. I worked on this with my teammates Bo and Lukas. First, we learned what a dashboard entails and what should be included. Then, we collaborated on a wireframe and decided to choose a blueprint as the design. We used this for the entire dashboard. Eventually, we got the idea to use different colors for the blueprint per section. It turned out much bigger than we thought, and we are very proud of it.";
        portfolio.textContent = "Portfolio";
        textportfolio.textContent = "This is our final project for this class. I spent a lot of time on it as I had to refresh my memory from Web Essentials classes. I have an exemption for this subject, so it's been a year for me. Fortunately, it was not a problem, and everything went well. I am very proud of what I have achieved. This is the first time I have created a website as extensive as this assignment. While I didn't learn much while creating this portfolio, I applied what I learned during this course and others.\n" +
            "This text is the last part I still have to create, bringing us to the conclusion of my final reflection.\n";
        slot.textContent = "Conclusion";
        textslot.textContent = "I have learned a lot about myself and the job I aspire to pursue later.\n" +
            "I saw a clear growth in my interest and motivation for the profession.\n" +
            "I now have a much better understanding of the process of creating a website and what it's like to do it in a team. I have also learned many techniques that I can use later to improve my work. I want to take this moment to thank everyone who helped create this assignment and, of course, the teachers who assisted and provided advice throughout the course. I hope I have done well. Thank you.\n";
    }
});