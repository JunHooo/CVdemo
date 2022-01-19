let html = document.querySelector("#html");
let style = document.querySelector("#style");
let i = 0;
let string = `/*你好,
我是一名前端新人,
这是我的第一次实验,
接下来我要加样式了
我的样式是*/
body{
    color:red;
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
        } else {
        }

    }, 100)
}
fn();
//
// style.innerHTML = `
// body{
//     color:red;
// }
// `;