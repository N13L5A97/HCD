const captions = document.getElementById("cc");

const fetchCaption = async () => {
	const response = await fetch("./assets/transcript_firstcourse.txt");
	const data = await response.text();

	// array of captions sentences
	const captionsArray = data.split("\n");
	console.log(captionsArray);

	//insert first caption on 2 seconds of video
	// bell dings
	const video = document.getElementById("video");
	video.addEventListener("timeupdate", () => {
		console.log(video.currentTime);
		if (
			video.currentTime >= 2.5 &&
			video.currentTime <= 17 &&
			!document.getElementById("caption-0")
		) {
			const captionElement = document.createElement("p");
			captionElement.textContent = captionsArray[0];
			captionElement.classList.add("caption");
			captionElement.id = `caption-0`;
			captions.appendChild(captionElement);
		} else if (video.currentTime >= 17) {
			document.getElementById("caption-0").remove();
		}
	});

	// lowik: Okay
	video.addEventListener("timeupdate", () => {
		console.log(video.currentTime);
		if (
			video.currentTime >= 17 &&
			video.currentTime <= 18 &&
			!document.getElementById("caption-1")
		) {
			const captionElement = document.createElement("p");
			captionElement.textContent = captionsArray[1];
			captionElement.classList.add("caption");
			captionElement.id = `caption-1`;
			captions.appendChild(captionElement);
		} else if (
			video.currentTime >= 18 &&
			document.getElementById("caption-1")
		) {
			document.getElementById("caption-1").remove();
		}
	});

	// man: yes chef
	video.addEventListener("timeupdate", () => {
		console.log(video.currentTime);
		if (
			video.currentTime >= 18 &&
			video.currentTime <= 19 &&
			!document.getElementById("caption-2")
		) {
			const captionElement = document.createElement("p");
			captionElement.textContent = captionsArray[2];
			captionElement.classList.add("caption");
			captionElement.id = `caption-2`;
			captions.appendChild(captionElement);
		} else if (
			video.currentTime >= 19 &&
			document.getElementById("caption-2")
		) {
			document.getElementById("caption-2").remove();
		}
	});

	// Lowik: good evening
	video.addEventListener("timeupdate", () => {
		console.log(video.currentTime);
		if (
			video.currentTime >= 45.5 &&
			video.currentTime <= 46.5 &&
			!document.getElementById("caption-6")
		) {
			const captionElement = document.createElement("p");
			captionElement.textContent = captionsArray[6];
			captionElement.classList.add("caption");
			captionElement.id = `caption-6`;
			captions.appendChild(captionElement);
		} else if (
			video.currentTime >= 46.5 &&
			document.getElementById("caption-6")
		) {
			document.getElementById("caption-6").remove();
		}
	});

	// man: good evening
	video.addEventListener("timeupdate", () => {
		console.log(video.currentTime);
		if (
			video.currentTime >= 46.5 &&
			video.currentTime <= 47.5 &&
			!document.getElementById("caption-7")
		) {
			const captionElement = document.createElement("p");
			captionElement.textContent = captionsArray[7];
			captionElement.classList.add("caption");
			captionElement.id = `caption-7`;
			captions.appendChild(captionElement);
		} else if (
			video.currentTime >= 47.5 &&
			document.getElementById("caption-7")
		) {
			document.getElementById("caption-7").remove();
		}
	});

	// Man: Hello
	video.addEventListener("timeupdate", () => {
		console.log(video.currentTime);
		if (
			video.currentTime >= 47.8 &&
			video.currentTime <= 48.8 &&
			!document.getElementById("caption-9")
		) {
			const captionElement = document.createElement("p");
			captionElement.textContent = captionsArray[9];
			captionElement.classList.add("caption");
			captionElement.id = `caption-9`;
			captions.appendChild(captionElement);
		} else if (
			video.currentTime >= 48.8 &&
			document.getElementById("caption-9")
		) {
			document.getElementById("caption-9").remove();
		}
	});

	// Slowik: Welcome
	video.addEventListener("timeupdate", () => {
		console.log(video.currentTime);
		if (
			video.currentTime >= 50.5 &&
			video.currentTime <= 56 &&
			!document.getElementById("caption-10")
		) {
			const captionElement = document.createElement("p");
			captionElement.textContent = captionsArray[10];
			captionElement.classList.add("caption");
			captionElement.id = `caption-10`;
			captions.appendChild(captionElement);
		} else if (
			video.currentTime >= 56 &&
			document.getElementById("caption-10")
		) {
			document.getElementById("caption-10").remove();
		}
	});

	// man: the curtain rises
	video.addEventListener("timeupdate", () => {
		console.log(video.currentTime);
		if (
			video.currentTime >= 56 &&
			video.currentTime <= 57 &&
			!document.getElementById("caption-11")
		) {
			const captionElement = document.createElement("p");
			captionElement.textContent = captionsArray[11];
			captionElement.classList.add("caption");
			captionElement.id = `caption-11`;
			captions.appendChild(captionElement);
		} else if (
			video.currentTime >= 57 &&
			document.getElementById("caption-11")
		) {
			document.getElementById("caption-11").remove();
		}
	});

	// Slowik: 3
	video.addEventListener("timeupdate", () => {
		console.log(video.currentTime);
		if (
			video.currentTime >= 58 &&
			video.currentTime <= 66 &&
			!document.getElementById("caption-12")
		) {
			const captionElement = document.createElement("p");
			captionElement.textContent = captionsArray[12];
			captionElement.classList.add("caption");
			captionElement.id = `caption-12`;
			captions.appendChild(captionElement);
		} else if (
			video.currentTime >= 66 &&
			document.getElementById("caption-12")
		) {
			document.getElementById("caption-12").remove();
		}
	});

	// Slowik: 4
	video.addEventListener("timeupdate", () => {
		console.log(video.currentTime);
		if (
			video.currentTime >= 66 &&
			video.currentTime <= 75 &&
			!document.getElementById("caption-13")
		) {
			const captionElement = document.createElement("p");
			captionElement.textContent = captionsArray[13];
			captionElement.classList.add("caption");
			captionElement.id = `caption-13`;
			captions.appendChild(captionElement);
		} else if (
			video.currentTime >= 75 &&
			document.getElementById("caption-13")
		) {
			document.getElementById("caption-13").remove();
		}
	});

	// Slowik: 4
	video.addEventListener("timeupdate", () => {
		console.log(video.currentTime);
		if (
			video.currentTime >= 75.5 &&
			video.currentTime <= 79 &&
			!document.getElementById("caption-14")
		) {
			const captionElement = document.createElement("p");
			captionElement.textContent = captionsArray[14];
			captionElement.classList.add("caption");
			captionElement.id = `caption-14`;
			captions.appendChild(captionElement);
		} else if (
			video.currentTime >= 79 &&
			document.getElementById("caption-14")
		) {
			document.getElementById("caption-14").remove();
		}
	});

	// Slowik: 5
	video.addEventListener("timeupdate", () => {
		console.log(video.currentTime);
		if (
			video.currentTime >= 79 &&
			video.currentTime <= 80 &&
			!document.getElementById("caption-15")
		) {
			const captionElement = document.createElement("p");
			captionElement.textContent = captionsArray[15];
			captionElement.classList.add("caption");
			captionElement.id = `caption-15`;
			captions.appendChild(captionElement);
		} else if (
			video.currentTime >= 80 &&
			document.getElementById("caption-15")
		) {
			document.getElementById("caption-15").remove();
		}
	});

	// Slowik: 6
	video.addEventListener("timeupdate", () => {
		console.log(video.currentTime);
		if (
			video.currentTime >= 80 &&
			video.currentTime <= 83 &&
			!document.getElementById("caption-16")
		) {
			const captionElement = document.createElement("p");
			captionElement.textContent = captionsArray[16];
			captionElement.classList.add("caption");
			captionElement.id = `caption-16`;
			captions.appendChild(captionElement);
		} else if (
			video.currentTime >= 83 &&
			document.getElementById("caption-16")
		) {
			document.getElementById("caption-16").remove();
		}
	});

	// man: is he serious?
	video.addEventListener("timeupdate", () => {
		console.log(video.currentTime);
		if (
			video.currentTime >= 83.5 &&
			video.currentTime <= 84.5 &&
			!document.getElementById("caption-17")
		) {
			const captionElement = document.createElement("p");
			captionElement.textContent = captionsArray[17];
			captionElement.classList.add("caption");
			captionElement.id = `caption-17`;
			captions.appendChild(captionElement);
		} else if (
			video.currentTime >= 84.5 &&
			document.getElementById("caption-17")
		) {
			document.getElementById("caption-17").remove();
		}
	});

	// Slowik: 7
	video.addEventListener("timeupdate", () => {
		console.log(video.currentTime);
		if (
			video.currentTime >= 85 &&
			video.currentTime <= 87 &&
			!document.getElementById("caption-18")
		) {
			const captionElement = document.createElement("p");
			captionElement.textContent = captionsArray[18];
			captionElement.classList.add("caption");
			captionElement.id = `caption-18`;
			captions.appendChild(captionElement);
		} else if (
			video.currentTime >= 87 &&
			document.getElementById("caption-18")
		) {
			document.getElementById("caption-18").remove();
		}
	});

	// Slowik: 8
	video.addEventListener("timeupdate", () => {
		console.log(video.currentTime);
		if (
			video.currentTime >= 88 &&
			video.currentTime <= 88.9 &&
			!document.getElementById("caption-18")
		) {
			const captionElement = document.createElement("p");
			captionElement.textContent = captionsArray[19];
			captionElement.classList.add("caption");
			captionElement.id = `caption-19`;
			captions.appendChild(captionElement);
		} else if (
			video.currentTime >= 88.9 &&
			document.getElementById("caption-19")
		) {
			document.getElementById("caption-19").remove();
		}
	});

	// Slowik: 8 - relish
	video.addEventListener("timeupdate", () => {
		console.log(video.currentTime);
		if (
			video.currentTime >= 89 &&
			video.currentTime <= 90.5 &&
			!document.getElementById("caption-20")
		) {
			const captionElement = document.createElement("p");
			captionElement.textContent = captionsArray[20];
			captionElement.classList.add("caption");
			captionElement.id = `caption-20`;
			captions.appendChild(captionElement);
		} else if (
			video.currentTime >= 90.5 &&
			document.getElementById("caption-20")
		) {
			document.getElementById("caption-20").remove();
		}
	});

	// Slowik: 8
	video.addEventListener("timeupdate", () => {
		console.log(video.currentTime);
		if (
			video.currentTime >= 91 &&
			video.currentTime <= 94 &&
			!document.getElementById("caption-21")
		) {
			const captionElement = document.createElement("p");
			captionElement.textContent = captionsArray[21];
			captionElement.classList.add("caption");
			captionElement.id = `caption-21`;
			captions.appendChild(captionElement);
		} else if (
			video.currentTime >= 94 &&
			document.getElementById("caption-21")
		) {
			document.getElementById("caption-21").remove();
		}
	});

	// Slowik: 8
	video.addEventListener("timeupdate", () => {
		console.log(video.currentTime);
		if (
			video.currentTime >= 96 &&
			video.currentTime <= 97.5 &&
			!document.getElementById("caption-22")
		) {
			const captionElement = document.createElement("p");
			captionElement.textContent = captionsArray[22];
			captionElement.classList.add("caption");
			captionElement.id = `caption-22`;
			captions.appendChild(captionElement);
		} else if (
			video.currentTime >= 97.5 &&
			document.getElementById("caption-22")
		) {
			document.getElementById("caption-22").remove();
		}
	});

	// Slowik: 8 but do not eat
	video.addEventListener("timeupdate", () => {
		console.log(video.currentTime);
		if (
			video.currentTime >= 98 &&
			video.currentTime <= 100 &&
			!document.getElementById("caption-23")
		) {
			const captionElement = document.createElement("p");
			captionElement.textContent = captionsArray[23];
			captionElement.classList.add("caption");
			captionElement.id = `caption-23`;
			captions.appendChild(captionElement);
		} else if (
			video.currentTime >= 100 &&
			document.getElementById("caption-23")
		) {
			document.getElementById("caption-23").remove();
		}
	});

    // Slowik: 9
	video.addEventListener("timeupdate", () => {
		console.log(video.currentTime);
		if (
			video.currentTime >= 101 &&
			video.currentTime <= 102 &&
			!document.getElementById("caption-24")
		) {
			const captionElement = document.createElement("p");
			captionElement.textContent = captionsArray[24];
			captionElement.classList.add("caption");
			captionElement.id = `caption-24`;
			captions.appendChild(captionElement);
		} else if (
			video.currentTime >= 103 &&
			document.getElementById("caption-24")
		) {
			document.getElementById("caption-24").remove();
		}
	});
    
    // chuckles
	video.addEventListener("timeupdate", () => {
		console.log(video.currentTime);
		if (
			video.currentTime >= 103 &&
			video.currentTime <= 103.5 &&
			!document.getElementById("caption-25")
		) {
			const captionElement = document.createElement("p");
			captionElement.textContent = captionsArray[25];
			captionElement.classList.add("caption");
			captionElement.id = `caption-25`;
			captions.appendChild(captionElement);
		} else if (
			video.currentTime >= 103.5 &&
			document.getElementById("caption-25")
		) {
			document.getElementById("caption-25").remove();
		}
	});

    // Slowik: and look around you
	video.addEventListener("timeupdate", () => {
		console.log(video.currentTime);
		if (
			video.currentTime >= 104 &&
			video.currentTime <= 105 &&
			!document.getElementById("caption-26")
		) {
			const captionElement = document.createElement("p");
			captionElement.textContent = captionsArray[26];
			captionElement.classList.add("caption");
			captionElement.id = `caption-26`;
			captions.appendChild(captionElement);
		} else if (
			video.currentTime >= 105 &&
			document.getElementById("caption-26")
		) {
			document.getElementById("caption-26").remove();
		}
	});

    // Slowik: 11 here we are
	video.addEventListener("timeupdate", () => {
		console.log(video.currentTime);
		if (
			video.currentTime >= 105.5 &&
			video.currentTime <= 109 &&
			!document.getElementById("caption-27")
		) {
			const captionElement = document.createElement("p");
			captionElement.textContent = captionsArray[27];
			captionElement.classList.add("caption");
			captionElement.id = `caption-27`;
			captions.appendChild(captionElement);
		} else if (
			video.currentTime >= 109 &&
			document.getElementById("caption-27")
		) {
			document.getElementById("caption-27").remove();
		}
	});

    // Slowik: 12 accept 
	video.addEventListener("timeupdate", () => {
		console.log(video.currentTime);
		if (
			video.currentTime >= 109.5 &&
			video.currentTime <= 111 &&
			!document.getElementById("caption-28")
		) {
			const captionElement = document.createElement("p");
			captionElement.textContent = captionsArray[28];
			captionElement.classList.add("caption");
			captionElement.id = `caption-28`;
			captions.appendChild(captionElement);
		} else if (
			video.currentTime >= 111 &&
			document.getElementById("caption-28")
		) {
			document.getElementById("caption-28").remove();
		}
	});

    // Slowik: 13 accept all of it 
	video.addEventListener("timeupdate", () => {
		console.log(video.currentTime);
		if (
			video.currentTime >= 112 &&
			video.currentTime <= 114 &&
			!document.getElementById("caption-29")
		) {
			const captionElement = document.createElement("p");
			captionElement.textContent = captionsArray[29];
			captionElement.classList.add("caption");
			captionElement.id = `caption-29`;
			captions.appendChild(captionElement);
		} else if (
			video.currentTime >= 114 &&
			document.getElementById("caption-29")
		) {
			document.getElementById("caption-29").remove();
		}
	});

     // Slowik: 14 and forgive
	video.addEventListener("timeupdate", () => {
		console.log(video.currentTime);
		if (
			video.currentTime >= 114 &&
			video.currentTime <= 117 &&
			!document.getElementById("caption-30")
		) {
			const captionElement = document.createElement("p");
			captionElement.textContent = captionsArray[30];
			captionElement.classList.add("caption");
			captionElement.id = `caption-30`;
			captions.appendChild(captionElement);
		} else if (
			video.currentTime >= 117 &&
			document.getElementById("caption-30")
		) {
			document.getElementById("caption-30").remove();
		}
	});

     // Slowik: 15 and on that note
	video.addEventListener("timeupdate", () => {
		console.log(video.currentTime);
		if (
			video.currentTime >= 118 &&
			video.currentTime <= 119 &&
			!document.getElementById("caption-31")
		) {
			const captionElement = document.createElement("p");
			captionElement.textContent = captionsArray[31];
			captionElement.classList.add("caption");
			captionElement.id = `caption-31`;
			captions.appendChild(captionElement);
		} else if (
			video.currentTime >= 119 &&
			document.getElementById("caption-31")
		) {
			document.getElementById("caption-31").remove();
		}
	});

    // Slowik: 16 food!
	video.addEventListener("timeupdate", () => {
		console.log(video.currentTime);
		if (
			video.currentTime >= 120 &&
			video.currentTime <= 121 &&
			!document.getElementById("caption-32")
		) {
			const captionElement = document.createElement("p");
			captionElement.textContent = captionsArray[32];
			captionElement.classList.add("caption");
			captionElement.id = `caption-32`;
			captions.appendChild(captionElement);
		} else if (
			video.currentTime >= 121 &&
			document.getElementById("caption-32")
		) {
			document.getElementById("caption-32").remove();
		}
	});

    // man: bring it!
	video.addEventListener("timeupdate", () => {
		console.log(video.currentTime);
		if (
			video.currentTime >= 122.5 &&
			video.currentTime <= 123.5 &&
			!document.getElementById("caption-33")
		) {
			const captionElement = document.createElement("p");
			captionElement.textContent = captionsArray[33];
			captionElement.classList.add("caption");
			captionElement.id = `caption-33`;
			captions.appendChild(captionElement);
		} else if (
			video.currentTime >= 123.5 &&
			document.getElementById("caption-33")
		) {
			document.getElementById("caption-33").remove();
		}
	});

    // man: here they come
	video.addEventListener("timeupdate", () => {
		console.log(video.currentTime);
		if (
			video.currentTime >= 125 &&
			video.currentTime <= 126 &&
			!document.getElementById("caption-34")
		) {
			const captionElement = document.createElement("p");
			captionElement.textContent = captionsArray[34];
			captionElement.classList.add("caption");
			captionElement.id = `caption-34`;
			captions.appendChild(captionElement);
		} else if (
			video.currentTime >= 126 &&
			document.getElementById("caption-34")
		) {
			document.getElementById("caption-34").remove();
		}
	});

    // woman: oh wauw looks like a marching band
	video.addEventListener("timeupdate", () => {
		console.log(video.currentTime);
		if (
			video.currentTime >= 128 &&
			video.currentTime <= 131 &&
			!document.getElementById("caption-35")
		) {
			const captionElement = document.createElement("p");
			captionElement.textContent = captionsArray[35];
			captionElement.classList.add("caption");
			captionElement.id = `caption-35`;
			captions.appendChild(captionElement);
		} else if (
			video.currentTime >= 131 &&
			document.getElementById("caption-35")
		) {
			document.getElementById("caption-35").remove();
		}
	});

    // Slowik: the island
	video.addEventListener("timeupdate", () => {
		console.log(video.currentTime);
		if (
			video.currentTime >= 134 &&
			video.currentTime <= 137 &&
			!document.getElementById("caption-36")
		) {
			const captionElement = document.createElement("p");
			captionElement.textContent = captionsArray[36];
			captionElement.classList.add("caption");
			captionElement.id = `caption-36`;
			captions.appendChild(captionElement);
		} else if (
			video.currentTime >= 137 &&
			document.getElementById("caption-36")
		) {
			document.getElementById("caption-36").remove();
		}
	});

    // Slowik: explaining
	video.addEventListener("timeupdate", () => {
		console.log(video.currentTime);
		if (
			video.currentTime >= 137 &&
			video.currentTime <= 139 &&
			!document.getElementById("caption-37")
		) {
			const captionElement = document.createElement("p");
			captionElement.textContent = captionsArray[37];
			captionElement.classList.add("caption");
			captionElement.id = `caption-37`;
			captions.appendChild(captionElement);
		} else if (
			video.currentTime >= 139 &&
			document.getElementById("caption-37")
		) {
			document.getElementById("caption-37").remove();
		}
	});

        // Slowik: explaining 2
	video.addEventListener("timeupdate", () => {
		console.log(video.currentTime);
		if (
			video.currentTime >= 139 &&
			video.currentTime <= 143 &&
			!document.getElementById("caption-38")
		) {
			const captionElement = document.createElement("p");
			captionElement.textContent = captionsArray[38];
			captionElement.classList.add("caption");
			captionElement.id = `caption-38`;
			captions.appendChild(captionElement);
		} else if (
			video.currentTime >= 143 &&
			document.getElementById("caption-38")
		) {
			document.getElementById("caption-38").remove();
		}
	});

            // Slowik: explaining 3
	video.addEventListener("timeupdate", () => {
		console.log(video.currentTime);
		if (
			video.currentTime >= 143 &&
			video.currentTime <= 146 &&
			!document.getElementById("caption-39")
		) {
			const captionElement = document.createElement("p");
			captionElement.textContent = captionsArray[39];
			captionElement.classList.add("caption");
			captionElement.id = `caption-39`;
			captions.appendChild(captionElement);
		} else if (
			video.currentTime >= 146 &&
			document.getElementById("caption-39")
		) {
			document.getElementById("caption-39").remove();
		}
	});

};

fetchCaption();
