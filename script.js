var cross = document.querySelector("#icon");
var block = document.querySelector("#block");
var flag = 0;
document.getElementById("icon").onclick = function () {
    this.classList.toggle("change");
        };
        
//         var modal = document.querySelector("#icon");
//         var button =  document.querySelector("#btn");
        
//         button.addEventListener("click", function(){
    // })
    
    
    // var change = document.querySelector(".change");

cross.addEventListener("click", function(){
                if(flag===0){
                console.log("first")
                block.style.right = "0px";
                block.style.boxShadow = "0px 0px 0px 0px rgba(0, 0, 0, 0.644)";
                console.log("firstcam");
                flag = 1;
                console.log("first100")
                gsap.from("#icon1",{
                    y: '-100px',
                    duration: 3,
                    delay: 0,
                    ease: Bounce.easeOut
                })
                
                gsap.from("#data1",{
                    x: '200px',
                    duration: 1,
                    opacity: 0,
                    delay: 1,
                    ease: Expo.easeOut
                })
                gsap.from("#data2",{
                    x: '200px',
                    duration: 1,
                    opacity: 0,
                    delay: 2,
                    ease: Expo.easeOut
                })
                gsap.from("#data3",{
                    x: '200px',
                    duration: 1,
                    opacity: 0,
                    delay: 3,
                    ease: Expo.easeOut
                })
                gsap.from("#data4",{
                    x: '200px',
                    duration: 2,
                    opacity: 0,
                    delay: 4,
                    ease: Expo.easeOut
                })
                gsap.from("#data5",{
                    x: '200px',
                    duration: 3,
                    opacity: 0,
                    delay: 5,    
                    ease: Expo.easeOut
                })
                gsap.from("#data6",{
                    x: '200px',
                    duration: 3,
                    opacity: 0,
                    stagger: 2,
                    delay: 6,
                    ease: Expo.easeOut
                })
            }
    
                else{
                    console.log("sec")
                    block.style.right = "-50%";
                    block.style.boxShadow = "initial";
                    console.log("seccam")
                    flag = 0;
                    console.log("sec100")}

            })
            
                
        //     cross.addEventListener("click", function(){
        //         // alert();
        //     })
        // }

        // gsap.from("#ram1",{
        //     x: '200px',
        //     duration: 1,
        //     opacity: 0,
        //     delay: 1,
        //     ease: Expo.easeOut
        // })
        // gsap.from("#ram2",{
        //     x: '200px',
        //     duration: 1,
        //     opacity: 0,
        //     delay: 2,
        //     ease: Expo.easeOut
        // })
        // gsap.from("#ram3",{
        //     x: '200px',
        //     duration: 1,
        //     opacity: 0,
        //     delay: 3,
        //     ease: Expo.easeOut
        // })
        // gsap.from("#ram4",{
        //     x: '200px',
        //     duration: 2,
        //     opacity: 0,
        //     delay: 4,
        //     ease: Expo.easeOut
        // })

gsap.from("#ram1",{
    x: '100px',
    duration: 3,
    opacity: 0,
    delay: 0,
    ease: Bounce.easeOut
})
gsap.from("#ram2",{
    x: '100px',
    duration: 3,
    opacity: 0,
    delay: 2,
    ease: Bounce.easeOut
})
gsap.from("#ram3",{
    x: '100px',
    duration: 3,
    opacity: 0,
    delay: 1,
    ease: Bounce.easeOut
})
gsap.from("#ram4",{
    x: '100px',
    duration: 3,
    opacity: 0,
    delay: 3,
    ease: Bounce.easeOut
})