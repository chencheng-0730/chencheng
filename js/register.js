    class Car{
        constructor(){
            this.url = "http://www.icodeilife.cn/ctrl/register.php";
            this.btn = $(".btns .btn-lg");
            this.txt = $(".login .txt");
            this.pass = $(".login .pass");
            this.span = $(".btns span")
            
            this.init()
        }
        init(){
            var that = this;
            this.btn.click(function(){
                // console.log(1)
                that.load()
            })
        }
        load(){
            var that = this;
            $.ajax({
                url:this.url,
                data:{
                    tel:this.txt.val(),
                    pass:this.pass.val()
                },
                success:function(res){
                    console.log(res)
                    switch(res){
                        case "0":
                            that.span.html("你的名字已被注册 请换一个");break;
                        case "1":
                            that.span.html("恭喜你，注册成功，3秒后跳转到登录");
                            setTimeout(() => {
                                location.href = "login.html";
                            }, 3000);
                            break;
                        case "2":
                            that.span.html("你的数据不全");break;
                    }
                },
            // beforeSend:function(){
            //     that.span.html("<img src='loading.gif'>")
            // }
        })
    }
    display(){
        console.log(this.res)
    }
}
new Car()


