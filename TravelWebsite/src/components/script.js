
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content .section__description", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__btn", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".header__content .socials", {
  ...scrollRevealOption,
  delay: 2000,
});

ScrollReveal().reveal(".popular__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".discover__card img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".discover__card:nth-child(2) img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".discover__card__content h4", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".discover__card__content .section__description", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".discover__card__content h3", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".discover__card__btn", {
  ...scrollRevealOption,
  delay: 2000,
});

ScrollReveal().reveal(".subscribe__content .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".subscribe__content .section__description", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".subscribe__content form", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".poular .map h1", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".popular .map .box", {
  ...scrollRevealOption,
  delay: 800,
});
ScrollReveal().reveal(".popular .map iframe", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".forum", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".photo img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".photo:nth-child(2) img", {
  ...scrollRevealOption,
  origin: "right",
});

ScrollReveal().reveal(".tip-card", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".tip-card:nth-child(2)", {
  ...scrollRevealOption,
  origin: "right",
});


function addQuestion() {
  const questionInput = document.getElementById('questionInput');
  const questionText = questionInput.value.trim();

  if (questionText) {
      const questionCard = document.createElement('div');
      questionCard.className = 'question-card';
      
      questionCard.innerHTML = `
          <div class="question-content">${questionText}</div>
          <div class="comment-section">
              <input type="text" placeholder="Your Name" class="name-input"/>
              <input type="text" placeholder="Add a comment..." class="comment-input"/>
              <button onclick="addComment(this)">Comment</button>
              <div class="comments"></div>
          </div>
      `;

      document.getElementById('questionsContainer').prepend(questionCard);
      questionInput.value = '';
  }
}


function addComment(button) {
  const nameInput = button.previousElementSibling.previousElementSibling;
  const commentInput = button.previousElementSibling;
  const nameText = nameInput.value.trim() || "Anonymous";
  const commentText = commentInput.value.trim();

  if (commentText) {
      const commentDiv = document.createElement('div');
      commentDiv.className = 'comment';

      const timestamp = new Date().toLocaleString();

      commentDiv.innerHTML = `
          <div class="comment-info">
              <strong>${nameText}</strong> • <small>${timestamp}</small>
              <p>${commentText}</p>
          </div>
          <button class="like-button" onclick="likeComment(this)">
              ❤️ <span class="like-count">0</span>
          </button>
      `;

      const commentsContainer = button.nextElementSibling;
      commentsContainer.appendChild(commentDiv);

      nameInput.value = '';
      commentInput.value = '';
  }
}


function likeComment(button) {
  const likeCount = button.querySelector('.like-count');
  let count = parseInt(likeCount.innerText);
  likeCount.innerText = ++count;
}
