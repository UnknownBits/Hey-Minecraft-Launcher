//动画控制的js
var hml_js_Animation_speed = "0.4"
var hml_js_Animation_speed2 = 400

// 首页按钮被点击
document.getElementById('hml_js_Toggle_the_home_page1').addEventListener('click', function () {
    hml_Dim_activation("hml_js_Main_page2", "hml_js_Main_page1")

});

// 更多按钮被点击
document.getElementById('hml_js_Toggle_the_home_page2').addEventListener('click', function () {
    hml_Dim_activation("hml_js_Main_page1", "hml_js_Main_page2")

});


// --------------------------------------------------------------------------------
function hml_Dim_activation(hml_yc_id, hml_byc_id){

    var hml_js_css_js = document.getElementById('hml_js_Right_layout_js');//程序右布局
    hml_js_css_js.style.animation = 'hml_css_Dim_animations ' + hml_js_Animation_speed + 's linear 0s 1 normal forwards'; //执行动画-正
    setTimeout(function() {

        var hml_js_css_js2 = document.getElementById(hml_yc_id);//布局
        //隐藏
        hml_js_css_js2.style.display = 'none';

        var hml_js_css_js2 = document.getElementById(hml_byc_id);//布局
        //不隐藏
        hml_js_css_js2.style.display = '';

        //消除动画记录
        hml_js_css_js.style.animation = ""
        hml_js_css_js.style.animation = 'hml_css_Dim_animations2 ' + hml_js_Animation_speed + 's linear 0s 1 normal forwards'; //执行动画-反
        setTimeout(function() {
            //消除动画记录
            hml_js_css_js.style.animation = ""

        }, hml_js_Animation_speed2);  // 延时

    }, hml_js_Animation_speed2);  // 延时

}
