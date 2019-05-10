
// class Color{
//     constructor(){
//         this.i1 = document.querySelector(".listunti .rob .hea .tt .i1")
//         this.i2 = document.querySelector(".listunti .rob .hea .tt .i2")
//         this.i3 = document.querySelector(".listunti .rob .hea .tt .i3")
//         this.startNum = this.i3.innerHTML;
//     }

//     init(){
//         this.addEvent();

//     }
//     addEvent(){
//         var that = this;
//         document.onmouseenter = function(){
//             setInterval(function(){
//                 console.log( that.i3.innerHtml)
//                 // that.i3.innerHtml = --that.startNum;
//             },1000)
//             // console.log(1)
//         }


//     }

// }
// let c =  new Color;
// c.init();

    var oi1 = document.querySelector(".listunti .rob .hea .tt .i1");
    var oi2 = document.querySelector(".listunti .rob .hea .tt .i2");
    var oi3 = document.querySelector(".listunti .rob .hea .tt .i3");
    var startNum =  oldNum = oi3.innerHTML;

   
    var timer;

    var i=0
    // document.onclick = function(){
        // console.log(1)
        for(var j=0;j<10;j++ ){
        if(i == 0){
            clearTimeout(timer)
            timer = setInterval(function(){
                if(startNum == 0){
                    clearTimeout(timer)
                    i=1;
                }else{
                    oi3.innerHTML = --startNum;
                }
            },1000)
        }else if(i == 1){
            oi2.innerHTML = oi2.innerHTML-1;
            oi3.innerHTML = startNum = oldNum;
            i = 0;
        }
        console.log(i)
    }    

    // }
    





