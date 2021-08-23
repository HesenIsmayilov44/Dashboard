
// ----------analyitcs upload function----------

// function
function uploadAnalyticGraph(week,femaleData,maleData){
    const f_line = document.querySelector("." + week + "-f-line");
    const m_line = document.querySelector("." + week + "-m-line");
    let i = 0;
    let f_percent;
    let m_percent;
    if(femaleData>50000){
        f_percent = 100;
    }else{
        f_percent = femaleData/50000*100
    }
    if(maleData>50000){
        m_percent = 100;
    }else{
        m_percent = maleData/50000*100
    }
    setInterval(()=>{
        if(i>100){
            clearInterval();
            return;
        }
        console.log("i = " + i)
        if(i<= f_percent){
            f_line.style.height = i+"%";
        }
        if(i<= m_percent){
            m_line.style.height = i+"%";
        }
        i++
    },20)
}

// ----------Navigation click event function----------
// variables
const root = document.documentElement;
// function
function activeNavigation(){
    let navs = document.querySelectorAll(".nav");
    navs.forEach((nav,index,arr)=>{
        nav.addEventListener("click",()=>{
            for(let i=0;i<arr.length;i++){
                arr[i].classList = "nav";
            }
            nav.classList = "nav active";
            if(nav == arr[0]){
                root.style.setProperty("--dashboard-display", "none");
            }else{
                root.style.setProperty("--dashboard-display", "grid");
            }
            
        })
    })
}

// ----------profile infos uplod function----------
// variables
const profileViewCount = document.querySelector(".profile-view-count");
const followersCount = document.querySelector(".followers-count");
const likesCount = document.querySelector(".likes-count");
// function
function uploadProfileRate(pVC, fC, lC) {
    
    let i = 0;
    setInterval(() => {
        if (i > pVC && i > fC && i > lC){
            clearInterval();
            return 
        }
        if (i <= pVC){
            profileViewCount.textContent = i + " K";
        }
        if (i <= fC){
            followersCount.textContent = i + " K";
        }
        if (i <= lC){
            likesCount.textContent = i + " K";
        }
        
       
        i++;
    }, 20);

}