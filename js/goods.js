function Page(){
    this.url = "http://localhost/1902-myself/sell/js/goods.json";
    this.list1 = document.querySelector(".list1");

    this.load();
}

Page.prototype.load = function(){
    ajaxGet(this.url,(res)=>{
        this.res = JSON.parse(res);
        // console.log(res)
        this.display();
    })
}
Page.prototype.display = function(){
    var str ="";
    for(var i=0;i<this.res.length;i++){
        if(i<this.res.length){
            str += `<div class="one">
                        <img src="${this.res[i].url}">
                        <div class="one-t">
                            <p>${this.res[i].name}</p>
                            <span class="tong">${this.res[i].style}</span>
                            <div class="price">
                                <span>￥${this.res[i].price}</span>
                                <b>${this.res[i].Original}</b>
                            </div>
                        </div>
                    </div>`
        }
    }
    this.list1.innerHTML = str;
}



new Page();

