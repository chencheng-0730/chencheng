    class Car{
        constructor(){
            this.url = "http://www.icodeilife.cn/ctrl/login.php";
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
            console.log({
                user:this.txt.val(),
                pass:this.pass.val()
            })
            var that = this;
            $.ajax({
                url:this.url,
                data:{
                    user:this.txt.val(),
                    pass:this.pass.val()
                },
                success:function(res){
                    console.log(res);
                    switch(res){
                        case "0":
                            that.span.html("用户名密码不符");break;
                        case "1":
                            that.span.html("请重新登陆");break;
                        default:
                            that.span.html("登录成功，正在跳转");
                            setTimeout(() => {
                                location.href = "index.html";
                            }, 3000);
                            that.res = JSON.parse(res);
                            that.display()
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


