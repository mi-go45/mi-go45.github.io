let roadmap = [
    ["1","サンズ戦","HYZQ’s Badtime simulatorのforkですね。遊ぶならhttps://mi-go45.github.io/hohoho/ です","res/spacecenter.png"],
    ["2","マイクラ","eaglecraftのforkですね。遊ぶならhttps://mi-go45.github.io/es/ です。パスワードはbob", "res/zerog.png"],
    ["3","Physical Therapy and Preperation","In the final 8 months leading up to the space launch, trainees will build their bodies into peak shape to prepare them for the disorienting and fatiguing conditions of space travel. Trainees will be undergo intense weight training, cardio, and calisthenic exercise while also being educated on the various elements of physical health and stength.", "res/fitness.png"],
    ["End of Course","Take Off and Recovery","Trainees will complete their training with a final exam covering all corners of the course and embark on a space launch to International Space Station. Trainees will be travelling on the Space Launch System(SLS), provided by our partner organization, NASA. Upon re-entering the atmosphere, our trained Rescue and Recovery Team will clear and establish a safe splashdown area off the coast of Florida, where they will recover the crew from their capsule.","res/recovery.png"]
];





function loadRoadmapSlide(arr,ind){
    currentRmInd = ind;
    fade("slideContent",FADESPEED/2,"out",function(){
        document.getElementById("rmSlideImage").setAttribute("src",arr[ind][3]);
        document.getElementById("rmSlideHeader").innerHTML = `${arr[ind][0]}: <span class="blueGradientText">${arr[ind][1]}</span>`;
        document.getElementById("rmSlideSub").textContent = arr[ind][2];
        
        //update dots
        document.getElementById("rmDotContainer").innerHTML = "";
        for(let i = 0; i < roadmap.length;i++){
            if(i != currentRmInd) document.getElementById("rmDotContainer").innerHTML += `<span class="rmSideDot" onclick="loadRoadmapSlide(roadmap,${i})"></span>`;
            else document.getElementById("rmDotContainer").innerHTML += `<span class="rmMainDot" onclick="loadRoadmapSlide(roadmap,${i})"></span>`;
        }
        
        fade("slideContent",FADESPEED/2,"in");
    });
    
}

let currentRmInd = 0;
loadRoadmapSlide(roadmap,currentRmInd);

function nextRmSlide(){
    currentRmInd++;
    if(currentRmInd == roadmap.length)currentRmInd=0;
    loadRoadmapSlide(roadmap,currentRmInd);
}

function prevRmSlide(){
    currentRmInd--;
    if(currentRmInd == -1)currentRmInd=roadmap.length-1;
    loadRoadmapSlide(roadmap,currentRmInd);
}

