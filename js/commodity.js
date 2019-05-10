function Page(){
    this.url = "http://localhost/1902-myself/sell/js/commodity.json";
    this.cont = document.getElementById("cont");

    this.load();
}

Page.prototype.load = function(){
    this.addEvent();
    ajaxGet(this.url,(res)=>{
    this.res = JSON.parse(res);
    // console.log(res)
    this.display();
    })
}

Page.prototype.display = function(){
    var str ="";
    for(var i in this.res){
            str +=`<li class="box" index="${this.res[i].goodsId}">
                        <a href="details.html"><img src="${this.res[i].url}"></a>
                        <p>${this.res[i].name}</p>
                        <div class="xiao">
                        <b>${this.res[i].style}</b>
                        <i>${this.res[i].Original}</i>
                        </div>
                        <div class="xia">
                        <b>￥${this.res[i].price}</b>
                            <i class='add'>购物车</i>
                        </div>
                    </li> ` 
        
    }
    
    this.cont.innerHTML = str;
    
}
Page.prototype.addEvent = function(){
    var that = this;
    this.cont.addEventListener('click',function(e){
        var e = e || window.event;
        var target = e.target || e.srcElement;
        if(target.className === 'add'){
            that.id = target.parentNode.parentNode.getAttribute('index');
            console.log(that.id)
            that.setCookie();
        }
    })
}
Page.prototype.setCookie = function(){
    this.goods = getCookie('goods');
    if(this.goods === ''){
        this.goods = [{id:this.id,num:1}];
    }else{
        this.goods = JSON.parse(this.goods);
        console.log(this.goods)
        this.onoff = true;
        for(var i = 0 ;i<this.goods.length;i++){
            if(this.goods[i].id === this.id){                
                this.goods[i].num +=1 ;
                this.onoff = false;
            }
        }
        if(this.onoff){
            this.goods.push({id:this.id,num:1});
        }
        }
        setCookie('goods',JSON.stringify(this.goods));
    }


new Page();