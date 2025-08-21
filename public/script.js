
//like-dislike button feature----------------------------------

const post=document.querySelectorAll(".post-img");

post.forEach((el)=>{
    const likeBtn=el.querySelector(".like-btn");
    const disBtn=el.querySelector(".dis-btn");
    const likeBtni=el.querySelector(".like-btn i");
    const disBtni=el.querySelector(".dis-btn i");
    const likeCount=el.querySelector(".like-btn span");
    const disCount=el.querySelector(".dis-btn span");

   

    likeBtn.addEventListener("click",()=>{
        
        disBtni.classList.remove("dis-btn-i");

        let lCount=parseInt(likeCount.innerText);

        let isLikeCounted=false;

        if(isLikeCounted===false){
            lCount+=1;
            likeCount.innerHTML=`${lCount}`;
            isLikeCounted=true;
            likeBtni.classList.add("like-btn-i");
        }

    })

    disBtn.addEventListener("click",()=>{
        
        likeBtni.classList.remove("like-btn-i");
        let dCount=parseInt(disCount.innerText);

         let isLikeCounted=false;
        if(isLikeCounted==false){
            dCount+=1;
            disCount.innerHTML=`${dCount}`;
            disBtni.classList.add("dis-btn-i");
        }
    })
})