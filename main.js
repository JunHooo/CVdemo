let html = document.querySelector("#html");
let style = document.querySelector("#style");
let div = document.querySelector("#box");
let top = document.querySelector("#top");
let under = document.querySelector("#under");
let i = 0;
let string = `/*你好,
我是一名前端新人,
这是我的第一次实验,
接下来我要加样式了
我的样式是:*/
#box{
    border:1px solid red;
    height:200px;
    width:200px;
}
/*下面开始制作一个太极图
首先生成一个左黑右白的圆形
*/
#box{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none;
}
#box{
    background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 100%);
}
/*然后形成两条黑白阴阳鱼*/
#top {
    height: 100px;
    width: 100px;
    border-radius: 50%;
    margin-left: 50px;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}

#under {
    height: 100px;
    width: 100px;
    margin-left: 50px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
`;
let string2 = '';
// string = string.replace(/\n/g, "<br>");
function fn() {
    setTimeout(() => {
        if (i < string.length) {
            if (string[i] === '\n') {
                string2 = string2 + "<br>";
            } else if (string[i] === ' ') {
                string2 = string2 + "&nbsp";
            } else {
                string2 = string2 + string[i];
            }
            html.innerHTML = string2;
            style.innerHTML = string.substring(0, i);
            i = i + 1;
            fn()
            window.scrollTo(0, 9999);
            html.scrollTo(0, 9999);
        } else {
        }

    }, 0)
}
fn();
//
// style.innerHTML = `
// body{
//     color:red;
// }
// `;