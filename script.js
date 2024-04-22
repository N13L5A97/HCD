const captions = document.getElementById("cc");
const video = document.getElementById("video");

const insertCaption = async () => {
    video.addEventListener("timeupdate", () => {
        console.log(video.currentTime);
    });

    video.addEventListener("timeupdate", () => {
        // sea gulls screeching softly in the background while water splashes gently
        let start = 0;
        let end = 2;
        let id = "caption-1";
        let caption = "*SEAGULLS SCREECHING SOFTLY IN THE BACKGROUND WHILE WATER SPLASHES GENTLY*";
        let styling = "soft-sound";
        
        handleCaption(start, end, id, caption, styling);
    });


    video.addEventListener("timeupdate", () => {
        // loud echoing bell dings once and fades out slowly
        let start = 2.5;
        let end = 20;
        let id = "caption-2";
        let caption = "*LOUD ECHOING BELL DINGS ONCE AND FADES OUT SLOWLY*";
        let styling = "normal-sound";
        let animation = "hardToSoft"
        let duration = 5;
        
        handleCaption(start, end, id, caption, styling, animation, duration);
    });
    
    video.addEventListener("timeupdate", () => {
        // slowik: Okay
        let start = 17;
        let end = 18;
        let id = "caption-3";
        let caption = "Okay";
        let styling = "slowik";
        
        handleCaption(start, end, id, caption, styling);
    });

    video.addEventListener("timeupdate", () => {
        // cook: Yes, Chef.
        let start = 18;
        let end = 19;
        let id = "caption-4";
        let caption = "Yes, Chef.";
        let styling = "man";
        
        handleCaption(start, end, id, caption, styling);
    });

    video.addEventListener("timeupdate", () => {
        //Knife clings on the plate
        let start = 19;
        let end = 20;
        let id = "caption-5";
        let caption = "*A KNIFE MAKES A SOFT CLINKING SOUND AGAINST SOMETHING METALLIC*";
        let styling = "soft-sound";
        
        handleCaption(start, end, id, caption, styling);
    });

    video.addEventListener("timeupdate", () => {
        // (CLASSICAL MUSIC PLAYING)
        let start = 20;
        let end = 36;
        let id = "caption-6";
        let caption = "🎶CLASSICAL VIOLINS PLAYING A IN THE BACKGROUND🎶";  
        let styling = "music";
        
        handleCaption(start, end, id, caption, styling);
    });

    video.addEventListener("timeupdate", () => {
        // (Soft scratching sound)
        let start = 20.5;
        let end = 21.5;
        let id = "caption-7";
        let caption = "*SOFT SCRATCHING SOUND*";  
        let styling = "soft-sound";
        
        handleCaption(start, end, id, caption, styling);
    });

    //deze vertalen naar animatie
    video.addEventListener("timeupdate", () => {
        // (Soft short clicking and ticking sounds of the tweezers)
        let start = 22;
        let end = 35;
        let id = "caption-8"
        let caption = "*SOFT SHORT CLICKING AND TICKING SOUNDS OF THE TWEEZERS*";  
        let styling = "soft-sound";
        
        handleCaption(start, end, id, caption, styling);
    });

    video.addEventListener("timeupdate", () => {
        // ("echoing bell dings once in de background and fades out slowly")
        let start = 36;
        let end = 38;
        let id = "caption-9"
        let caption = "*ECHOING BELL DINGS ONCE IN THE BACKGROUND AND FADES OUT SLOWLY*";  
        let styling = "soft-sound";
        let animation = "dingFadeOut"
        let duration = 1;
        
        handleCaption(start, end, id, caption, styling, animation, duration);
    });

    video.addEventListener("timeupdate", () => {
        // ("echoing bell turns into dark, deep, ominous sound and becomes louder and louder")
        let start = 38;
        let end = 42;
        let id = "caption-10"
        let caption = "*ECHOING BELL TURNS INTO DARK, DEEP, OMINOUS SOUND AND BECOMES LOUDER AND LOUDER*";  
        let styling = "normal-sound";
        let animation = "softToHard"
        let duration = end - start;
        
        handleCaption(start, end, id, caption, styling, animation, duration);
    });

    video.addEventListener("timeupdate", () => {
        // ("LOUD CLAP")
        let start = 42.3;
        let end = 43;
        let id = "caption-11"
        let caption = "*LOUD CLAP*";  
        let styling = "loud-sound";

        //video scale animation
        let animation = "scale"
        let duration = .1;
        // let overlay = "triangle"
        // let overlay = "slowikBorder"
        // let overlay = "slowikMask"
        // let duration = .2

        
        handleCaption(start, end, id, caption, styling);
        addVideoAnimation(start, end, animation, duration);
        addOverlayAnimation(start, end, overlay, duration);
    });

    video.addEventListener("timeupdate", () => {
        // ("One Hard stomping sound of the chef's shoes")
        let start = 43;
        let end = 44;
        let id = "caption-12"
        let caption = "*ONE HARD STOMPING SOUND OF THE CHEF'S SHOES*";  
        let styling = "loud-sound";
        
        handleCaption(start, end, id, caption, styling);
    });

    video.addEventListener("timeupdate", () => {
        // ("silence")
        let start = 44;
        let end = 45;
        let id = "caption-13"
        let caption = "*SILENCE*";  
        let styling = "soft-sound";
        
        handleCaption(start, end, id, caption, styling);
    });

    video.addEventListener("timeupdate", () => {
        // ("slowik: Good Evening")
        let start = 45;
        let end = 46;
        let id = "caption-14"
        let caption = "Slowik: Good Evening";  
        let styling = "slowik";
        
        handleCaption(start, end, id, caption, styling);
    });

    video.addEventListener("timeupdate", () => {
        // ("Richard: Good Evening")
        let start = 46.5;
        let end = 48;
        let id = "caption-15"
        let caption = "Richard: Good Evening";  
        let styling = "richard";
        
        handleCaption(start, end, id, caption, styling);
    });

    video.addEventListener("timeupdate", () => {
        // ("Woman in the background: Good Evening")
        let start = 47;
        let end = 48;
        let id = "caption-16"
        let caption = "Woman in the background: Good Evening";  
        let styling = "woman";
        
        handleCaption(start, end, id, caption, styling);
    });

    video.addEventListener("timeupdate", () => {
        // ("Man: Hello")
        let start = 48;
        let end = 49.5;
        let id = "caption-17"
        let caption = "Man: Hello";  
        let styling = "man";
        
        handleCaption(start, end, id, caption, styling);
    });

    video.addEventListener("timeupdate", () => {
        // ("Man: Hello")
        let start = 48.5;
        let end = 49.5;
        let id = "caption-18"
        let caption = "Woman in the background: Hello";  
        let styling = "woman";
        
        handleCaption(start, end, id, caption, styling);
    });

    video.addEventListener("timeupdate", () => {
        // (Squeecking sound of the boots of the chef's on the floor)
        let start = 49.5;
        let end = 52;
        let id = "caption-19"
        let caption = "*SQUEAKING SOUND OF THE BOOTS OF THE CHEF'S ON THE FLOOR*";  
        let styling = "soft-sound";
        
        handleCaption(start, end, id, caption, styling);
    });

    video.addEventListener("timeupdate", () => {
        // (slowik: welcome to hawthorne)
        let start = 50;
        let end = 52;
        let id = "caption-21"
        let caption = "Welcome to Hawthòrne";  
        let styling = "slowik";
        
        handleCaption(start, end, id, caption, styling);
    });

    video.addEventListener("timeupdate", () => {
        // (slowik: I'm Julian Slowik)
        let start = 52;
        let end = 53.5;
        let id = "caption-22"
        let caption = "I'm Julian Slowik";  
        let styling = "slowik";
        
        handleCaption(start, end, id, caption, styling);
    });

    video.addEventListener("timeupdate", () => {
        // (slowik: and tonight It'll be our pleasure to fééd you)
        let start = 53.5;
        let end = 56;
        let id = "caption-23"
        let caption = "and tonight It'll be our pleasure to fééd you";  
        let styling = "slowik";
        
        handleCaption(start, end, id, caption, styling);
    });

    video.addEventListener("timeupdate", () => {
        // (Lillian: the curtain rises)
        let start = 56.2;
        let end = 57.2;
        let id = "caption-24"
        let caption = "Lillian: the curtain rises";  
        let styling = "lillian";
        
        handleCaption(start, end, id, caption, styling);
    });

    video.addEventListener("timeupdate", () => {
        // (Slowik: over the next few hours)
        let start = 58;
        let end = 59.5;
        let id = "caption-25"
        let caption = "Slowik: over the next fêw hours";  
        let styling = "slowik";
        
        handleCaption(start, end, id, caption, styling);
    });

    video.addEventListener("timeupdate", () => {
        // (Slowik: you will ingest)
        let start = 59.5;
        let end = 61;
        let id = "caption-26"
        let caption = "you will ingèst";  
        let styling = "slowik";
        
        handleCaption(start, end, id, caption, styling);
    });

    video.addEventListener("timeupdate", () => {
        // (Slowik: fat)
        let start = 61;
        let end = 62;
        let id = "caption-27"
        let caption = "fàt";  
        let styling = "slowik";
        
        handleCaption(start, end, id, caption, styling);
    });

    video.addEventListener("timeupdate", () => {
        // (Slowik: salt)
        let start = 62.3;
        let end = 63.3;
        let id = "caption-28"
        let caption = "sàlt";  
        let styling = "slowik";
        
        handleCaption(start, end, id, caption, styling);
    });

    video.addEventListener("timeupdate", () => {
        // (Slowik: sugar)
        let start = 63.5;
        let end = 64.5;
        let id = "caption-29"
        let caption = "sugàr";  
        let styling = "slowik";
        
        handleCaption(start, end, id, caption, styling);
    });

    video.addEventListener("timeupdate", () => {
        // (soft mysterious sound rises in the background)
        let start = 64.5;
        let end = 75;
        let id = "caption-30"
        let caption = "*SOFT MYSTERIOUS SOUND RISES IN THE BACKGROUND*";  
        let styling = "soft-sound";
        
        handleCaption(start, end, id, caption, styling);
    });

    video.addEventListener("timeupdate", () => {
        // (Slowik: protein)
        let start = 65;
        let end = 66;
        let id = "caption-31"
        let caption = "protein";  
        let styling = "slowik";
        
        handleCaption(start, end, id, caption, styling);
    });

    video.addEventListener("timeupdate", () => {
        // (Slowik: bacteria)
        let start = 66.2;
        let end = 67.2;
        let id = "caption-32"
        let caption = "bactèria";  
        let styling = "slowik";
        
        handleCaption(start, end, id, caption, styling);
    });


    video.addEventListener("timeupdate", () => {
        // (Slowik: funghi)
        let start = 68;
        let end = 69;
        let id = "caption-33"
        let caption = "funghaí";  
        let styling = "slowik";
        
        handleCaption(start, end, id, caption, styling);
    });

    video.addEventListener("timeupdate", () => {
        // (Slowik: various plants and animals)
        let start = 69.5;
        let end = 71;
        let id = "caption-34"
        let caption = "variousss plànts and ànimals";  
        let styling = "slowik";
        
        handleCaption(start, end, id, caption, styling);
    });

    video.addEventListener("timeupdate", () => {
        // (Slowik: and at times)
        let start = 71.5;
        let end = 72.5;
        let id = "caption-35"
        let caption = "and at times";  
        let styling = "slowik";
        
        handleCaption(start, end, id, caption, styling);
    });

    video.addEventListener("timeupdate", () => {
        // (Slowik: entire ecosystems)
        let start = 72.5;
        let end = 74;
        let id = "caption-36"
        let caption = "entíre ecosystems";  
        let styling = "slowik";
        
        handleCaption(start, end, id, caption, styling);
    });

    video.addEventListener("timeupdate", () => {
        // (mysterious sound slowly changes into slow violins playing)
        let start = 75;
        let end = 110;
        let id = "caption-37"
        let caption = "*MYSTERIOUS SOUND SLOWLY CHANGES INTO SLOW VIOLINS PLAYING*";  
        let styling = "music";
        
        handleCaption(start, end, id, caption, styling);
    });


    video.addEventListener("timeupdate", () => {
        // (Slowik: but...)
        let start = 75.5;
        let end = 76;
        let id = "caption-38"
        let caption = "but...";  
        let styling = "slowik";
        
        handleCaption(start, end, id, caption, styling);
    });

    video.addEventListener("timeupdate", () => {
        // (Slowik: I have to beg of you one thing)
        let start = 77;
        let end = 78.5;
        let id = "caption-39"
        let caption = "I have to bèg of you one thing";  
        let styling = "slowik";
        
        handleCaption(start, end, id, caption, styling);
    });

    video.addEventListener("timeupdate", () => {
        // (Slowik: it's just one)
        let start = 78.5;
        let end = 79.8;
        let id = "caption-40"
        let caption = "it's just one";  
        let styling = "slowik";
        
        handleCaption(start, end, id, caption, styling);
    });

    video.addEventListener("timeupdate", () => {
        // (Slowik: do not)
        let start = 80.5;
        let end = 81.5;
        let id = "caption-41"
        let caption = "do nòt";  
        let styling = "slowik";
        
        handleCaption(start, end, id, caption, styling);
    });

    video.addEventListener("timeupdate", () => {
        // (Slowik: eat)
        let start = 81.8;
        let end = 82.5;
        let id = "caption-42"
        let caption = "éat.";  
        let styling = "slowik";
        
        handleCaption(start, end, id, caption, styling);
    });

    video.addEventListener("timeupdate", () => {
        // (man: Is he serious?)
        let start = 83.5;
        let end = 84.5;
        let id = "caption-43"
        let caption = "Is he serious?";  
        let styling = "man";
        
        handleCaption(start, end, id, caption, styling);
    });

    video.addEventListener("timeupdate", () => {
        // (Slowik: Taste)
        let start = 85;
        let end = 86;
        let id = "caption-44"
        let caption = "Tássste";  
        let styling = "slowik";
        
        handleCaption(start, end, id, caption, styling);
    });

    video.addEventListener("timeupdate", () => {
        // (Slowik: savor)
        let start = 88;
        let end = 89;
        let id = "caption-45"
        let caption = "ssavor";  
        let styling = "slowik";
        
        handleCaption(start, end, id, caption, styling);
    });

    video.addEventListener("timeupdate", () => {
        // (Slowik: relish)
        let start = 89.5;
        let end = 90.5;
        let id = "caption-46"
        let caption = "relissh";  
        let styling = "slowik";
        
        handleCaption(start, end, id, caption, styling);
    });

    video.addEventListener("timeupdate", () => {
        // (Slowik: consider every morsel that you place inside your mouth)
        let start = 91;
        let end = 94;
        let id = "caption-47"
        let caption = "consider every mòrsel that you place inside your mouth";  
        let styling = "slowik";
        
        handleCaption(start, end, id, caption, styling);
    });

    video.addEventListener("timeupdate", () => {
        // (Slowik: Be mindful)
        let start = 96;
        let end = 97.4;
        let id = "caption-48"
        let caption = "Be míndful";  
        let styling = "slowik";
        
        handleCaption(start, end, id, caption, styling);
    });

    video.addEventListener("timeupdate", () => {
        // (Slowik: but do nòt)
        let start = 98;
        let end = 98.8;
        let id = "caption-49"
        let caption = "but do nòt...";  
        let styling = "slowik";
        
        handleCaption(start, end, id, caption, styling);
    });

    video.addEventListener("timeupdate", () => {
        // (Slowik: eat)
        let start = 99;
        let end = 100.5;
        let id = "caption-50"
        let caption = "éat.";  
        let styling = "slowik";
        
        handleCaption(start, end, id, caption, styling);
    });

    video.addEventListener("timeupdate", () => {
        // (Slowik: out menu is to precious for thàt)
        let start = 101;
        let end = 103;
        let id = "caption-51"
        let caption = "our menu is to precious for thàt";  
        let styling = "slowik";
        
        handleCaption(start, end, id, caption, styling);
    });

    video.addEventListener("timeupdate", () => {
        // (Slowik: snifs)
        let start = 103;
        let end = 104;
        let id = "caption-52"
        let caption = "(SNIFS)";  
        let styling = "soft-sound";
        
        handleCaption(start, end, id, caption, styling);
    });

    video.addEventListener("timeupdate", () => {
        // (Slowik: And look around you)
        let start = 104.5;
        let end = 105.5;
        let id = "caption-53"
        let caption = "Ànd look around you";  
        let styling = "slowik";
        
        handleCaption(start, end, id, caption, styling);
    });

    video.addEventListener("timeupdate", () => {
        // (Slowik: Here we are)
        let start = 105.5;
        let end = 106.5;
        let id = "caption-54"
        let caption = "Hére we àre";  
        let styling = "slowik";
        
        handleCaption(start, end, id, caption, styling);
    });

    video.addEventListener("timeupdate", () => {
        // (Slowik: on this island)
        let start = 107;
        let end = 108;
        let id = "caption-55"
        let caption = "on this ìsland";  
        let styling = "slowik";
        
        handleCaption(start, end, id, caption, styling);
    });

    video.addEventListener("timeupdate", () => {
        // (Slowik: Accept)
        let start = 109;
        let end = 110;
        let id = "caption-56"
        let caption = "Slowik: Accèpt";  
        let styling = "slowik";
        
        handleCaption(start, end, id, caption, styling);
    });

    video.addEventListener("timeupdate", () => {
        // (Tyler: breathes in)
        let start = 110;
        let end = 111.3;
        let id = "caption-57"
        let caption = "*BREATHES IN*";  
        let styling = "soft-sound";
        let animation = "breatheIn"
        let duration = end - start;
        
        handleCaption(start, end, id, caption, styling, animation, duration);
    });

    video.addEventListener("timeupdate", () => {
        // (more violins play euphoric and deeper)
        let start = 112;
        let end = 121.5;
        let id = "caption-58"
        let caption = "🎶MORE VIOLINS START PLAYING EUPHORIC AND DEEPER🎶";  
        let styling = "music";
        
        handleCaption(start, end, id, caption, styling);
    });

    video.addEventListener("timeupdate", () => {
        // (Slowik: Accept all of it)
        let start = 112;
        let end = 113;
        let id = "caption-59"
        let caption = "Àccept all of it";  
        let styling = "slowik";
        
        handleCaption(start, end, id, caption, styling);
    });

    video.addEventListener("timeupdate", () => {
        // (Slowik: And)
        let start = 114;
        let end = 115;
        let id = "caption-60"
        let caption = "Ànd...";  
        let styling = "slowik";
        
        handleCaption(start, end, id, caption, styling);
    });


    video.addEventListener("timeupdate", () => {
        // (Slowik: forgive)
        let start = 115.5;
        let end = 116.5;
        let id = "caption-61"
        let caption = "forgíve";  
        let styling = "slowik";
        
        handleCaption(start, end, id, caption, styling);
    });

    video.addEventListener("timeupdate", () => {
        // (Slowik: and on that note...)
        let start = 118;
        let end = 119.5;
        let id = "caption-62"
        let caption = "Slowik: and on that nóte...";  
        let styling = "slowik";
        
        handleCaption(start, end, id, caption, styling);
    });

    video.addEventListener("timeupdate", () => {
        // (Slowik: FOOD!)
        let start = 120;
        let end = 121.5;
        let id = "caption-63"
        let caption = "Fóóód!";  
        let styling = "slowik";
        
        handleCaption(start, end, id, caption, styling);
    });

    video.addEventListener("timeupdate", () => {
        // (clinging sounds of the plates and cutlery)
        let start = 121.5;
        let end = 123;
        let id = "caption-64"
        let caption = "*CLINGING SOUNDS OF THE PLATES AND CUTLERY*";  
        let styling = "normal-sound";
        
        handleCaption(start, end, id, caption, styling);
    });

    video.addEventListener("timeupdate", () => {
        // (man: yeah, bring it, bring it!)
        let start = 122;
        let end = 124;
        let id = "caption-65"
        let caption = "Man in the background: yeah, yeah, bring it, bring it!";  
        let styling = "man";
        
        handleCaption(start, end, id, caption, styling);
    });

    video.addEventListener("timeupdate", () => {
        // (multiple food steps march in the background)
        let start = 124;
        let end = 126;
        let id = "caption-66"
        let caption = "*MULTIPLE FOOD STEPS MARCH IN THE BACKGROUND*";  
        let styling = "normal-sound";
        
        handleCaption(start, end, id, caption, styling);
    });

    video.addEventListener("timeupdate", () => {
        // (Man in the background: Here they come!)
        let start = 125;
        let end = 126.5;
        let id = "caption-67"
        let caption = "Man in the background: Here they come!";  
        let styling = "man";
        
        handleCaption(start, end, id, caption, styling);
    });


    video.addEventListener("timeupdate", () => {
        // (piano music starts playing)
        let start = 128;
        let end = 133;
        let id = "caption-68"
        let caption = "🎶PIANO MUSIC STARTS PLAYING🎶";  
        let styling = "music";
        
        handleCaption(start, end, id, caption, styling);
    });

    video.addEventListener("timeupdate", () => {
        // lillian: oh wauw it sounds just like a marching band
        let start = 128.5;
        let end = 130;
        let id = "caption-69"
        let caption = "Lillian: Oh wauw, it sounds just like a marching band";  
        let styling = "lillian-soft";
        
        handleCaption(start, end, id, caption, styling);
    });

    video.addEventListener("timeupdate", () => {
        // high pitched flute making a uprising sound 
        let start = 133;
        let end = 136;
        let id = "caption-70"
        let caption = "🎶HIGH PITCHED FLUTE MAKING A UPRISING SOUND🎶";  
        let styling = "music";
        
        handleCaption(start, end, id, caption, styling);
    });

    video.addEventListener("timeupdate", () => {
        // Slowik: Our first course
        let start = 134;
        let end = 135.5;
        let id = "caption-71"
        let caption = "Slowik: Our first còurse is called";  
        let styling = "slowik";
        
        handleCaption(start, end, id, caption, styling);
    });

    video.addEventListener("timeupdate", () => {
        // Slowik: The Island
        let start = 135.5;
        let end = 136.5;
        let id = "caption-72"
        let caption = "The Ísland";  
        let styling = "slowik";
        
        handleCaption(start, end, id, caption, styling);
    });

    video.addEventListener("timeupdate", () => {
        // Slowik: On your plate are plants from around the island
        let start = 137;
        let end = 139;
        let id = "caption-73"
        let caption = "On your pláte are plànts from around the ísland";  
        let styling = "slowik";
        
        handleCaption(start, end, id, caption, styling);
    });

    video.addEventListener("timeupdate", () => {
        // Slowik: placed on rocks,
        let start = 139;
        let end = 140;
        let id = "caption-74"
        let caption = "placed on rócks,";  
        let styling = "slowik";
        
        handleCaption(start, end, id, caption, styling);
    });

    video.addEventListener("timeupdate", () => {
        // Slowik: from the shore,
        let start = 140;
        let end = 141;
        let id = "caption-75"
        let caption = "from the shòre,";  
        let styling = "slowik";
        
        handleCaption(start, end, id, caption, styling);
    });

    video.addEventListener("timeupdate", () => {
        // Slowik: covered in barely frozen,
        let start = 141.5;
        let end = 143;
        let id = "caption-76"
        let caption = "cóvered in bàrely frozen,";  
        let styling = "slowik";
        
        handleCaption(start, end, id, caption, styling);
    });

    video.addEventListener("timeupdate", () => {
        // Slowik: filtered seawater
        let start = 143;
        let end = 144;
        let id = "caption-77"
        let caption = "fíltered séawater";  
        let styling = "slowik";
        
        handleCaption(start, end, id, caption, styling);
    });

    video.addEventListener("timeupdate", () => {
        // Slowik: which will 
        let start = 144;
        let end = 145.1;
        let id = "caption-78"
        let caption = "whích will";  
        let styling = "slowik";
        
        handleCaption(start, end, id, caption, styling);
    });

};

// function that inserts the captions
const handleCaption = (start, end, id, caption, styling, animation, duration) => {
    if (
        video.currentTime >= start &&
        video.currentTime <= end &&
        !document.getElementById(id)
    ) {
        console.log("inserting caption", caption);

        let captionElement = document.createElement("p");
        captionElement.textContent = caption;
        captionElement.classList.add(styling);
        captionElement.id = id;
        captions.appendChild(captionElement);

        if(animation){
            captionElement.classList.add(animation);
            captionElement.style.animationDuration = `${duration}s`;
        }

    } else if (
        (video.currentTime < start || video.currentTime > end) &&
        document.getElementById(id)
    ) {
        document.getElementById(id).remove();
    }
};

insertCaption();

// video animation
const addVideoAnimation = (start, end ,animation, duration) => {
    if (video.currentTime > start && video.currentTime < end) {
        video.classList.add(animation);
        video.style.animationDuration = `${duration}s`;
    } else {
        video.classList.remove(animation);
    }
}

// overlay animation
const addOverlayAnimation = (start, end ,overlay, duration) => {
    const overlayElement = document.querySelector(".overlay");
    console.log("overlayElement", overlayElement);

    if (video.currentTime > start && video.currentTime < end) {
        overlayElement.classList.add(overlay);
        overlayElement.style.animationDuration = `${duration}s`;
    } else {
        overlayElement.classList.remove(overlay);
    }
}


// set audio visualizer video same time as video
const audio = document.getElementById("audioVisualizer");

video.addEventListener("timeupdate", () => {
    audio.currentTime = video.currentTime;
});

// // play audio visualizer when video is playing and pause when paused
video.addEventListener("play", () => {
    audio.play();
    console.log("audio playing");
});

video.addEventListener("pause", () => {
    audio.pause();
    console.log("audio paused");
});

