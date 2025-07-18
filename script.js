
    const buttons = document.querySelectorAll(".tabbtn button");
    const contents = document.querySelectorAll(".tabs > div");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            // Remove 'active' class from all buttons and content divs
            buttons.forEach(btn => btn.classList.remove("active"));
            contents.forEach(tab => tab.classList.remove("active"));

            // Add 'active' to clicked button
            button.classList.add("active");

            // Add 'active' to corresponding tab content
            const tabClass = button.textContent.toLowerCase();
            document.querySelector(`.${tabClass}`).classList.add("active");
        });
    });


  const seeBtn = document.querySelector('.see');
  const extra = document.querySelector('.extra');
   const contacts = document.querySelector('.contacts');


  seeBtn.addEventListener('click', () => {
    const isVisible = extra.classList.contains('show');

    if (isVisible) {
      extra.classList.remove('show');
      seeBtn.textContent = 'See More';
      seeBtn.classList.remove('down'); // move up
       contacts.classList.remove('show')
    } else {
      extra.classList.add('show');
      seeBtn.textContent = 'See Less';
      seeBtn.classList.add('down'); // move down
      contacts.classList.add('show');
    }
  });
   const scriptURL = 'https://script.google.com/macros/s/AKfycbxHjRNBFsP5YqxglO-srbnsqqaPn0MhRAoG1ZlEpcq6IkkaESJV3z-siiBPFRQYZOz6Ng/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg= document.getElementById("msg")
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML="This message has been successfully sent"
        setTimeout(function(){
          msg.innerHTML=""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })


function toggleMenu() {
  document.querySelector('.header li').classList.toggle('show');
}


  const scrollBtn = document.getElementById('scrollUpBtn');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      scrollBtn.style.display = 'block';
    } else {
      scrollBtn.style.display = 'none';
    }
  });


