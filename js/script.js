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
        emergenciesPhone.style.top = '-10rem';
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
        var initialPosX;
        var initialPosY;
        var vely;
        var animate;

        var goingUp = new Boolean(false);
        var goingDown = new Boolean(false);
        var notMoving = new Boolean(true);

        initialPosX = img.style.left;
        initialPosY = img.style.top;

        posx = img.style.left;
        posy = img.style.top;
        
        move();

        function move(){
            

            if (notMoving == false){
                move();
            }
        }

        if (goingUp == true){
            notMoving = false;
            moveUp();
        } if (goingDown == true){
            notMoving = false;
            moveDown();
        } if (notMoving == true){
            stop();
            resetPos();
        }

        function moveUp(){
            vely = -1;
            img.style.top += vely + 'px';
        }

        function moveDown(){
            vely = 1;
            img.style.top += vely + 'px';
        }

        function resetPos(){
            img.style.left = initialPosX;
            img.style.top = initialPosY;
        }

        function stop(){
            vely = 0;
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



