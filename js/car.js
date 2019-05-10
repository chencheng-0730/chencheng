class Car{
    constructor(){
        this.tbody = document.querySelector('tbody');
        this.allCheck = document.querySelector('tfoot .sum');
        this.Money = document.querySelector('tfoot .money')
        this.pay = document.querySelector('tfoot .pay')
        this.onoff = true;
        
        this.url = "http://localhost/1902-myself/sell/js/commodity.json";
    }

    init(){
        this.addEvent();
        this.getData();
    }
    getData(){
        var that = this;
        this.goods =  JSON.parse(getCookie('goods'));
        // console.log(this.goods)
        ajaxGet(this.url).then(function(res){
            that.res = JSON.parse(res);
           that.display();
          })
    }
    display(){
        var str = '';
        for(var i = 0;i<this.goods.length;i++){
            // console.log(this.goods.length)
            for(var j=0;j<this.res.length;j++){
                if(this.res[j].goodsId === this.goods[i].id){
                    str += `<tr index = ${this.goods[i].id}>
                                <td><input class='checkbox' type = 'checkbox' name = 'goods'/></td>
                                <td><img src="${this.res[j].url}"/></td>
                                <td>${this.res[j].name}</td>
                                <td class="price">${this.res[j].price}</td>
                                <td><input class = 'inp' type = 'number' min = "1" value= '${this.goods[i].num}'></td>
                                <td><em class="dele">删除</em></td>
                            </tr>`;
                            break;
                }
            }
        }
        this.tbody.innerHTML = str;
    }
    addEvent(){
        var that = this;
        this.tbody.addEventListener('click',function(e){
            var e = e || window.event;
            var target = e.target || e.srcElement;
            if(target.className === 'dele'){
              that.id = target.parentNode.parentNode.getAttribute('index');
            //   console.log(that.id)
              target.parentNode.parentNode.remove();
              that.getCheckbox();
              that.sumMoney();
                that.changeCookie((i)=>{
                    that.goods.splice(i,1);
                });
            }
        })
        this.tbody.addEventListener('input',function(e){
            var e = e || window.event;
            var target = e.target || e.srcElement;
            if(target.className === 'inp'){
                that.id = target.parentNode.parentNode.getAttribute('index');
                // console.log(that.id)
                that.changeCookie((i)=>{
                    that.goods[i].num = target.value;
                    that.sumMoney()
                });
            }
        })
        this.tbody.addEventListener('change',function(e){
            var e = e || window.event;
            var target = e.target || e.srcElement;
            if(target.className === 'checkbox'){
                that.parent = target.parentNode.parentNode;
                console.log(1)

                if(target.checked){
                   that.onoff = true;
                   that.checked();
               }else{
                   that.onoff = false;
                   that.checked();
               }
               that.sumMoney();
            }
        })
        this.allCheck.onclick = function(){
            // that.checkbox = document.querySelectorAll('tbody input[type = checkbox]');
            that.getCheckbox();
            if(this.checked){
               for(var i=0;i<that.checkbox.length;i++){
                //    console.log(that.checkbox.length)
                that.checkbox[i].checked = 'checked';

               }
            }else{
                for(var i=0;i<that.checkbox.length;i++){
                    that.checkbox[i].checked = '';
                }
            }
            that.sumMoney()
        }

    }
    changeCookie(callback){
        this.goods =  JSON.parse(getCookie('goods'));
        // console.log(this.goods)
        for(var i =0 ;i<this.goods.length;i++){
            if(this.goods[i].id == this.id){
                callback(i);
            }
        }
        setCookie('goods',JSON.stringify(this.goods));
    }
    
    checked(){
        // this.checkbox = document.querySelectorAll('tbody input[type = checkbox]');
        this.getCheckbox();
        for(var i =0 ;i<this.checkbox.length;i++){
            console.log(this.checkbox.length)
            if(!this.checkbox[i].checked){
                this.onoff = false;
            }
        }
        if(this.onoff){
            this.allCheck.checked = 'checked';
        }else{
            this.allCheck.checked = '';
        }
    }
    sumMoney(){
        var n = 0;
        for(var i = 0;i<this.checkbox.length;i++){
            // console.log(this.checkbox.length);
            if(this.checkbox[i].checked){
                var parentNode = this.checkbox[i].parentNode.parentNode;
                // console.log(parentNode)
                var price = parentNode.querySelector('.price');
                // console.log(price)
                var num = parentNode.querySelector('.inp');
                n +=price.innerHTML*num.value;
            }
        }
       this.Money.innerHTML=n;
    }

    getCheckbox(){
        this.checkbox = document.querySelectorAll('tbody input[type = checkbox]');
        console.log(this.checkbox)
    }

}

let c1 =  new Car;
c1.init();