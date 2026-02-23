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


window.onload = () => {
    fetch('profile.json')
    .then(response => response.json())
    .then(data => {
        
        document.getElementById('nimi').textContent = data.nimi;
        document.getElementById('perekonnanimi').textContent = data.perekonnanimi;
        document.getElementById('vanus').textContent = data.vanus;
        document.getElementById('email').textContent = data.email;
    })
    .catch(error => {
        console.error('Viga andmete laadimisel:', error);
    });
};