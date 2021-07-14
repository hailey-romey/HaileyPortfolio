//alert('linked!');


// DARK MODE ------------------------------------
// help from: https://dev.to/ananyaneogi/create-a-dark-light-mode-switch-with-css-variables-34l8

// DARK MODE TOGGLE -----------------------------
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark'); //add this
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light'); //add this
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);

// DARK MODE CHECK PREFERENCES STORAGE -----------

const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}


// IMAGE ANIMATION

    var emergenciesImg;
    var emergenciesPhone;
    var emergenciesLaptop;
    var verifiedShield;
    var animate;

    function init(){
        emergenciesImg = document.getElementById('emergencies_placeholder');
        emergenciesImg.style.position= 'relative';
        emergenciesImg.style.left = '0rem';
        emergenciesImg.style.top = '0rem';

        emergenciesPhone = document.getElementById('emergencies_phone');
        emergenciesPhone.style.position= 'relative';
        emergenciesPhone.style.top = '0rem';
        emergenciesPhone.style.left = '6.5rem';
        
        emergenciesLaptop = document.getElementById('emergencies_laptop');
        emergenciesLaptop.style.position= 'relative';
        emergenciesLaptop.style.top = '2rem';
        emergenciesLaptop.style.left = '-7rem';
    }

    function moveRight(img1){
        //emergenciesImg.style.left = parseInt(emergenciesImg.style.left) + 5 + 'rem';
        img1.style.left = parseInt(img1.style.left) + 1 + 'rem';
        animate = setTimeout(moveRight, 100, img1);
    }

    function bounce(img){
        var posx;
        var posy;
        var vely;
        var animate;

        var goingUp = new boolean(false);
        var goinDown = new boolean(false);
        var notMoving = new boolean(true);

        posx = img.style.left;
        posy = img.style.top;

        if (goingUp == true){
            vely = -1;
            notMoving = false;
        } if (goingDown == true){
            vely = 1;
            nootMoving = false;
        } if (notMoving == true){
            vely = 0;
        }

        function stop(img){
            notMoving = true;
            goingDown = false;
            goingUp = false;
            clearTimeout(animate)
        }


    }



/*
    function bounceUp(img1, i, top, left){
        img1.style.top = parseInt(img1.style.top) - top - .5 + 'rem';
        i = i+1;

        if (i<5){ 
            var animate = setTimeout(bounceUp, 50, img1, i, top, left);
        } if (i>=5){
            animate = setTimeout(bounceDown, 50, img1, i, top, left);
        }
        
    }


    function bounceDown(img1, i, top, left){
        img1.style.top = parseInt(img1.style.top) + top + .5 + 'rem';
        i = i-1;

        if (i>=-4){
            animate = setTimeout(bounceDown, 50, img1, i, top, left);
        } if (i<=-5){
            animate = setTimeout(bounceUp, 50, img1, i, top, left);
        }
      //  console.log(i);
    }


    function stop(img1, top, left){
        clearTimeout(animate);
        img1.style.left = left + 'rem';
        img1.style.top = top + 'rem';
        console.log('STOP');
    }
*/
    window.onload = init;



