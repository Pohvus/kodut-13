const images = ['mina1.png', 'mina2.png', 'mina3.png', 'mina4.png']; 
const targetImage = document.querySelector('.profile-pic img');
let i = 1;

targetImage.addEventListener('click', () => {
    
    targetImage.style.opacity = '0';
    
   
    setTimeout(() => {
        if (i === images.length - 1) {
            i = 0;
        }

        targetImage.src = 'images/' + images[i];
        i++;
    }, 500); 

    setTimeout(() => {
        targetImage.style.opacity = '1';
    }, 600);
});

const stars = document.querySelectorAll('.rating-stars li i');

stars.forEach((star, index) => {
    star.addEventListener('click', () => {
        stars.forEach((s, idx) => {
            if (idx <= index) {
                
                s.classList.remove('fa-regular');
                s.classList.add('fa-solid');
                s.style.color = 'var(--star-color)';
            } else {
                
                s.classList.remove('fa-solid');
                s.classList.add('fa-regular');
                s.style.color = '#ccc';
            }
        });
    });
});


const fNameSpan = document.querySelector('#fName');
const lNameSpan = document.querySelector('#lName');
const ageSpan = document.querySelector('#age');
const emailSpan = document.querySelector('#email');

window.onload = () => {
    
    fetch('profile.json')
    .then(response => response.json())
    .then(data => {
        
        if(fNameSpan) fNameSpan.textContent = data.fName;
        if(lNameSpan) lNameSpan.textContent = data.lName;
        if(ageSpan) ageSpan.textContent = data.age;
        if(emailSpan) emailSpan.textContent = data.email;
    })
    .catch(error => console.error('Viga andmete laadimisel:', error));
};