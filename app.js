const loveme = document.querySelector('.loveme');
const times = document.getElementById('times');

let timesclicked = 0;

// Double click as dblclick 

let clicktimes = 0;

loveme.addEventListener('click',(e)=>{
    // console.log(e.target);

    if(clicktimes === 0){
        clicktimes = new Date().getTime();
        // console.log(clicktimes);

    }else{

        if((new Date().getTime() - clicktimes) < 1000){

            createheart(e);

            clicktimes = 0;
        }else{
            clicktimes = new Date().getTime();
            console.log(clicktimes);
        }
    }

});

const createheart = (e)=>{
    // console.log(e.target);

    const heart = document.createElement('i');
    // heart.className = "fas fa-heart";
    heart.classList.add("fas");
    heart.classList.add("fa-heart");

    const cx = e.clientX;
    const cy = e.clientY;

    const topoffest = e.target.offsetTop;
    const leftoffset = e.target.offsetLeft;
    // console.log(topoffest,leftoffset);

    const letfinsde = cx - leftoffset;
    const topinside = cy - topoffest;
    // console.log(letfinsde,topinside);
    

    heart.style.top = `${topinside}px`;
    heart.style.left = `${letfinsde}px`;

    loveme.appendChild(heart);

    times.textContent = ++timesclicked;

    setTimeout(function(){
        heart.remove();
    },400);



    // console.log(heart);
}