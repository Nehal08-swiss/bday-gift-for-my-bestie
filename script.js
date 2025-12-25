// ==================
// STORE ANSWERS
// ==================
const answers = {
  q1: "",
  q2: "",
  q3: "",
  q4: ""
};

// ==================
// ALL PAGES
// ==================
const pages = {
  intro: {
    cat: "images/intro.jpg",
    title: "HAPPY BIRTHDAY DEAR BESTIEE 😽😽😽😽",
    text: "I made this lil mini-game type present for you.<br><br>I really hope you like it.<br><br>PLEASE CONTINUE (and dont make fun of me jaebal)<br>MWAH 😽",
    buttons: [
      { text: "CUNTINUE 💅 →", next: "stats" }
    ]
  },

  stats: {
    cat: "images/stats.jpg",
    title: "This year was a rollercoaster ride for you.... and I kind of tried to summarize it ☝️",
    text: "• GAAND PHAD RAGEBAIT (mostly XY chromosomes)<br>• Your breakup-<br>• Academic setback (issokay 🫂)<br>• Great ppl online 😍<br>• kulsi- AHEMM<br>• Fuckass college<br>• Even more stupid suar ke bacche<br>•Upgrade in music taste (goated, truly)<br> WELL... the list goes on and on...",
    buttons: [
      { text: "Next →", next: "q1" }
    ]
  },

  // ==================
  // QUESTION 1
  // ==================
  q1: {
    cat: "images/q1.jpg",
    title: "QUESTION 1",
    text: "Which part do you think was the hardest for me to do?",
    buttons: [
      { text: "Song selection", next: "q2", value: "song selection" },
      { text: "Writing the code", next: "q2", value: "writing the code" },
      { text: "Making time despite errands", next: "q2", value: "making time" }
    ]
  },

  // ==================
  // QUESTION 2
  // ==================
  q2: {
    cat: "images/q2.jpg",
    title: "QUESTION 2",
    text: "Why do you think I made this for you?",
    buttons: [
      { text: "Because it’s your birthday", next: "q3", value: "birthday" },
      { text: "Because you’re my bestie ", next: "q3", value: "bestie" },
      { text: "Because I wanted to do something different ", next: "q3", value: "different" },
      { text: "Because you deserve the best ", next: "q3", value: "deserve" },
      { text: "All of these ", next: "q3", value: "all" }
    ]
  },

  // ==================
  // QUESTION 3
  // ==================
  q3: {
    cat: "images/q3.jpg",
    title: "QUESTION 3",
    text: "How satisfied are you with this year? (im proud of you either way)",
    buttons: [
      { text: "It was okay-ish", next: "q4", value: "okayish" },
      { text: "It was terrible", next: "q4", value: "terrible" },
      { text: "Terrible but I had my bestie 🫶", next: "q4", value: "bestie support" },
      { text: "I wasn’t paying attention", next: "q4", value: "not paying attention" }
    ]
  },

  // ==================
  // QUESTION 4 (TEXT INPUT)
  // ==================
  q4: {
    cat: "images/q4.jpg",
    title: "FINAL QUESTION",
    text: `
      Please drop your honest thoughts about this present<br><br>
      <textarea id="feedback"
        placeholder="Type whatever you want...."
        rows="4"
        style="width:100%; padding:10px; border-radius:12px;"></textarea>
    `,
    buttons: [
      { text: "Submit 💗", next: "final", submit: true }
    ]
  },

  // ==================
  // FINAL SLIDE
  // ==================
  final: {
    cat: "images/final.jpg",
    title: "HAPPY BIRTHDAY 💖",
    text: "This was made with a lot of love, chaos, and overthinking. It was made in such a short time so I am apologizing since this is certainly not the best present, YOU CLEARLY DESERVE BETTER.<br><br> Thank you so much for existing. You really really mean a lot to me. Thank you so much for being the amazing and goated bestie. I really couldn't ask for more (I am officialy one of the favorite children of god lmao 😭😭). I love you so freakin much. Please stay happy and have a smile on your face. MWAAH.<br><br>May you accomplish the best in your life. May you lead a very succesful year ahead. May you be able to complete your goals. May your hobbies never die.<br><br> I am always here for you. In your every stage , I am always there. Always supporting you and rooting for you. You deserve the best , honestly.<br><br>OKAY OKAY ENOUGH YAPPITY YAPPITY YAP YAP. I wish you a very Happy 19th Birthday Gaarvi. Please enjoy this day very much 🫶💓.",
    buttons: [
      { text: "Replay", next: "intro" }
    ]
  }
};

// ==================
// CORE NAVIGATION
// ==================
function go(page) {
  const music = document.getElementById("bgm");
  if (music && music.paused) {
    music.play().catch(() => {});
  }

  const p = pages[page];
  if (!p) return;

  document.getElementById("cat").src = p.cat;
  document.getElementById("title").innerText = p.title;
  document.getElementById("text").innerHTML = p.text;

  const btnDiv = document.getElementById("buttons");
  btnDiv.innerHTML = "";

  p.buttons.forEach(b => {
    const btn = document.createElement("button");
    btn.innerText = b.text;

    btn.onclick = () => {
      // store MCQ answers in order
      if (b.value) {
        if (!answers.q1) answers.q1 = b.value;
        else if (!answers.q2) answers.q2 = b.value;
        else if (!answers.q3) answers.q3 = b.value;
      }

      // handle text submission
      if (b.submit) {
        const fb = document.getElementById("feedback");
        if (!fb || !fb.value.trim()) {
          alert("You can’t leave this empty 😭");
          return;
        }
        answers.q4 = fb.value.trim();
        localStorage.setItem("birthdayAnswers", JSON.stringify(answers));
      }

      go(b.next);
    };

    btnDiv.appendChild(btn);
  });
}

// ==================
// START
// ==================
go("intro");
