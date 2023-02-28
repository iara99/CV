// SCROLL TOP

      let mybutton = document.getElementById("TopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


      // SIDEBAR      
const li = document.querySelectorAll('.list');
const section = document.querySelectorAll("section"); 

function activeMenu (){
  let len= section.length;
  while(--len && window.scrollY + 97 < section[len].offsetTop){}
    li.forEach(ltx => ltx.classList.remove('active'));
    li[len].classList.add('active');
}

activeMenu();
window.addEventListener("scroll", activeMenu);


        // SKILLS
const skillsSection = document.getElementById('skills');
const progressBar = document.querySelectorAll('.skill-per');

function showProgress(){
  progressBar.forEach(progressBar=>{
    const value = progressBar.dataset.progress;
    progressBar.style.opacity = 1;
    progressBar.style.width = `${value}%`;
  });
}

function circle(el){
  $(el).circleProgress({fill: {color: '#F28B8B'}})
  .on('circle-animation-progress', function(event, progress, stepValue){
    $(this).find('.value-container2').text(parseInt(stepValue * 100) + '%');
  });
};

function onSkills() {
  const sectionPos = skillsSection.getBoundingClientRect().top;
  const screenPos = window.innerHeight / 2;

  if(sectionPos < screenPos){
    showProgress();
    circle('.round');
    window.removeEventListener('scroll', onSkills);
  }
};
window.addEventListener('scroll', onSkills);