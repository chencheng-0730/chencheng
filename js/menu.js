function Menu(){
    this.ali = document.querySelectorAll(".banner .banner-l ul li");
    this.op = document.querySelectorAll(".meng p")

    this.load()
    
}
Menu.prototype.load = function(){
    var that = this
    for(var i=0;i<this.ali.length;i++){
        this.ali[i].setAttribute("cc",i)
    }

        for(var i=0;i<this.ali.length;i++){
            this.ali[i].onmouseover = function(){
            //    this.ap[i]

            for(var j=0;j<that.ali.length;j++){
                that.op[j].style.display = "none";
            }
            var index = parseInt(this.getAttribute("cc"));
            that.op[index].style.display = "block";
        }
    }
}
new Menu()