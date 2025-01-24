// 页面互动的js文件

// 首页按钮被点击
document.getElementById('hml_js_Toggle_the_home_page1').addEventListener('click', function () {

    var hml_js_css_js = document.getElementById('hml_js_fg1');//分割1
    hml_js_css_js.style.display = 'block'; //不隐藏

    var hml_js_css_js = document.getElementById('hml_js_fg2');//分割2
    hml_js_css_js.style.display = 'none'; //隐藏
});

// 更多按钮被点击
document.getElementById('hml_js_Toggle_the_home_page2').addEventListener('click', function () {

    var hml_js_css_js = document.getElementById('hml_js_fg1');//分割1
    hml_js_css_js.style.display = 'none'; //隐藏

    var hml_js_css_js = document.getElementById('hml_js_fg2');//分割2
    hml_js_css_js.style.display = 'block'; //不隐藏
});