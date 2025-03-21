// 个性化颜色的js

// 变量

// 全局窗口颜色
var hml_js_Window_theme_color = "#ffffff30"

// 全局主题颜色+部分字体
var hml_js_Big_picture_theme_color = "#E69F6C"

// 全局虚化颜色
var hml_js_Bokeh_color = "#e69f6c20"
//全局虚化效果
var hml_js_xh = "5"


// -------------------------颜色css------------------------------
// 窗口1 
var hml_js_css_js = document.getElementById("hml_js1_window")
// 背景颜色
hml_js_css_js.style.backgroundColor = hml_js_Window_theme_color;
// 虚化
hml_js_css_js.style.backdropFilter = "blur(" + hml_js_xh + "px)";

// --------------------
// 窗口2 
var hml_js_css_js = document.getElementById("hml_js2_window")
// 背景颜色
hml_js_css_js.style.backgroundColor = hml_js_Window_theme_color;

// --------------------
// logo按钮 
var hml_js_css_js = document.getElementById("hml_js_logo_button")
// 边框颜色
hml_js_css_js.style.border = "1px solid " + hml_js_Big_picture_theme_color;

// --------------------
// 覆盖装饰框
document.querySelectorAll('[id="hml_js_Border_color"]').forEach(function (hml_js_css_js) {


    // 边框颜色
    hml_js_css_js.style.border = "1px solid " + hml_js_Big_picture_theme_color;

});

// --------------------
// 搜索筛选按钮
var hml_js_css_js = document.getElementById("hml_js_Search_for_the_filter_button")
// 边框颜色
hml_js_css_js.style.border = "1px solid " + hml_js_Big_picture_theme_color;

// --------------------
// 分割栏
document.querySelectorAll('[id="hml_js_Split_bar"]').forEach(function (hml_js_css_js) {

    // 背景颜色
    hml_js_css_js.style.backgroundColor = hml_js_Big_picture_theme_color;

});
// --------------------
// 提示标签
document.querySelectorAll('[id="hml_js_Tip_tabs"]').forEach(function (hml_js_css_js) {
    // 虚化
    hml_js_css_js.style.backdropFilter = "blur(" + hml_js_xh + "px)";
    // 背景颜色
    hml_js_css_js.style.backgroundColor = hml_js_Bokeh_color;

});
// --------------------


// 设置按钮
var hml_js_css_js = document.getElementById("hml_js_Settings_button")
// 背景颜色
hml_js_css_js.style.backgroundColor = hml_js_Bokeh_color;

// 虚化
hml_js_css_js.style.backdropFilter = "blur(" + hml_js_xh + "px)";


// 鼠标靠近时改变颜色
hml_js_css_js.addEventListener('mouseover', function () {
    this.style.backgroundColor = "#b8b8b8"; // 鼠标靠近后的颜色
});

// 鼠标离开时恢复颜色
hml_js_css_js.addEventListener('mouseout', function () {
    this.style.backgroundColor = hml_js_Bokeh_color; // 恢复初始颜色
});
// --------------------


// 启动游戏按钮
var hml_js_css_js = document.getElementById("hml_js_Launch_the_game_button")
// 背景颜色
hml_js_css_js.style.backgroundColor = hml_js_Bokeh_color;

// 虚化
hml_js_css_js.style.backdropFilter = "blur(" + hml_js_xh + "px)";


// 鼠标靠近时改变颜色
hml_js_css_js.addEventListener('mouseover', function () {
    this.style.backgroundColor = "#b8b8b8"; // 鼠标靠近后的颜色
});

// 鼠标离开时恢复颜色
hml_js_css_js.addEventListener('mouseout', function () {
    this.style.backgroundColor = hml_js_Bokeh_color; // 恢复初始颜色
});

// --------------------



// 账号管理按钮
var hml_js_css_js = document.getElementById("hml_js_Account_Management_button")
// 背景颜色
hml_js_css_js.style.backgroundColor = hml_js_Bokeh_color;
// 虚化
hml_js_css_js.style.backdropFilter = "blur(" + hml_js_xh + "px)";

// 鼠标靠近时改变颜色
hml_js_css_js.addEventListener('mouseover', function () {
    this.style.backgroundColor = "#b8b8b8"; // 鼠标靠近后的颜色
});

// 鼠标离开时恢复颜色
hml_js_css_js.addEventListener('mouseout', function () {
    this.style.backgroundColor = hml_js_Bokeh_color; // 恢复初始颜色
});

// --------------------



// 帮助按钮
var hml_js_css_js = document.getElementById("hml_js_Help_button")
// 背景颜色
hml_js_css_js.style.backgroundColor = hml_js_Bokeh_color;

// 虚化
hml_js_css_js.style.backdropFilter = "blur(" + hml_js_xh + "px)";


// 鼠标靠近时改变颜色
hml_js_css_js.addEventListener('mouseover', function () {
    this.style.backgroundColor = "#b8b8b8"; // 鼠标靠近后的颜色
});

// 鼠标离开时恢复颜色
hml_js_css_js.addEventListener('mouseout', function () {
    this.style.backgroundColor = hml_js_Bokeh_color; // 恢复初始颜色
});

// --------------------

// 主页时间
var hml_js_css_js = document.getElementById("hml_js_Time")
// 字体颜色
hml_js_css_js.style.color = hml_js_Big_picture_theme_color;

// --------------------

// 更多页面按钮1
var hml_js_css_js = document.getElementById("hml_js_more_1")
// 背景颜色
hml_js_css_js.style.backgroundColor = hml_js_Bokeh_color;

// 虚化
hml_js_css_js.style.backdropFilter = "blur(" + hml_js_xh + "px)";


// 鼠标靠近时改变颜色
hml_js_css_js.addEventListener('mouseover', function () {
    this.style.backgroundColor = "#b8b8b8"; // 鼠标靠近后的颜色
});

// 鼠标离开时恢复颜色
hml_js_css_js.addEventListener('mouseout', function () {
    this.style.backgroundColor = hml_js_Bokeh_color; // 恢复初始颜色
});

// --------------------

// 更多页面按钮2
var hml_js_css_js = document.getElementById("hml_js_more_2")
// 背景颜色
hml_js_css_js.style.backgroundColor = hml_js_Bokeh_color;

// 虚化
hml_js_css_js.style.backdropFilter = "blur(" + hml_js_xh + "px)";


// 鼠标靠近时改变颜色
hml_js_css_js.addEventListener('mouseover', function () {
    this.style.backgroundColor = "#b8b8b8"; // 鼠标靠近后的颜色
});

// 鼠标离开时恢复颜色
hml_js_css_js.addEventListener('mouseout', function () {
    this.style.backgroundColor = hml_js_Bokeh_color; // 恢复初始颜色
});

// --------------------

// 更多页面按钮3
var hml_js_css_js = document.getElementById("hml_js_more_3")
// 背景颜色
hml_js_css_js.style.backgroundColor = hml_js_Bokeh_color;

// 虚化
hml_js_css_js.style.backdropFilter = "blur(" + hml_js_xh + "px)";


// 鼠标靠近时改变颜色
hml_js_css_js.addEventListener('mouseover', function () {
    this.style.backgroundColor = "#b8b8b8"; // 鼠标靠近后的颜色
});

// 鼠标离开时恢复颜色
hml_js_css_js.addEventListener('mouseout', function () {
    this.style.backgroundColor = hml_js_Bokeh_color; // 恢复初始颜色
});

// --------------------

// 更多页面按钮4
var hml_js_css_js = document.getElementById("hml_js_more_4")
// 背景颜色
hml_js_css_js.style.backgroundColor = hml_js_Bokeh_color;

// 虚化
hml_js_css_js.style.backdropFilter = "blur(" + hml_js_xh + "px)";


// 鼠标靠近时改变颜色
hml_js_css_js.addEventListener('mouseover', function () {
    this.style.backgroundColor = "#b8b8b8"; // 鼠标靠近后的颜色
});

// 鼠标离开时恢复颜色
hml_js_css_js.addEventListener('mouseout', function () {
    this.style.backgroundColor = hml_js_Bokeh_color; // 恢复初始颜色
});

// --------------------

// 更多页面按钮5
var hml_js_css_js = document.getElementById("hml_js_more_5")
// 背景颜色
hml_js_css_js.style.backgroundColor = hml_js_Bokeh_color;

// 虚化
hml_js_css_js.style.backdropFilter = "blur(" + hml_js_xh + "px)";


// 鼠标靠近时改变颜色
hml_js_css_js.addEventListener('mouseover', function () {
    this.style.backgroundColor = "#b8b8b8"; // 鼠标靠近后的颜色
});

// 鼠标离开时恢复颜色
hml_js_css_js.addEventListener('mouseout', function () {
    this.style.backgroundColor = hml_js_Bokeh_color; // 恢复初始颜色
});

// --------------------

// 更多页面按钮6
var hml_js_css_js = document.getElementById("hml_js_more_6")
// 背景颜色
hml_js_css_js.style.backgroundColor = hml_js_Bokeh_color;

// 虚化
hml_js_css_js.style.backdropFilter = "blur(" + hml_js_xh + "px)";


// 鼠标靠近时改变颜色
hml_js_css_js.addEventListener('mouseover', function () {
    this.style.backgroundColor = "#b8b8b8"; // 鼠标靠近后的颜色
});

// 鼠标离开时恢复颜色
hml_js_css_js.addEventListener('mouseout', function () {
    this.style.backgroundColor = hml_js_Bokeh_color; // 恢复初始颜色
});

// --------------------

// 更多页面按钮7
var hml_js_css_js = document.getElementById("hml_js_more_7")
// 背景颜色
hml_js_css_js.style.backgroundColor = hml_js_Bokeh_color;

// 虚化
hml_js_css_js.style.backdropFilter = "blur(" + hml_js_xh + "px)";


// 鼠标靠近时改变颜色
hml_js_css_js.addEventListener('mouseover', function () {
    this.style.backgroundColor = "#b8b8b8"; // 鼠标靠近后的颜色
});

// 鼠标离开时恢复颜色
hml_js_css_js.addEventListener('mouseout', function () {
    this.style.backgroundColor = hml_js_Bokeh_color; // 恢复初始颜色
});

// --------------------

// 更多页面按钮8
var hml_js_css_js = document.getElementById("hml_js_more_8")
// 背景颜色
hml_js_css_js.style.backgroundColor = hml_js_Bokeh_color;

// 虚化
hml_js_css_js.style.backdropFilter = "blur(" + hml_js_xh + "px)";


// 鼠标靠近时改变颜色
hml_js_css_js.addEventListener('mouseover', function () {
    this.style.backgroundColor = "#b8b8b8"; // 鼠标靠近后的颜色
});

// 鼠标离开时恢复颜色
hml_js_css_js.addEventListener('mouseout', function () {
    this.style.backgroundColor = hml_js_Bokeh_color; // 恢复初始颜色
});

// --------------------

// 更多页面按钮9
var hml_js_css_js = document.getElementById("hml_js_more_9")
// 背景颜色
hml_js_css_js.style.backgroundColor = hml_js_Bokeh_color;

// 虚化
hml_js_css_js.style.backdropFilter = "blur(" + hml_js_xh + "px)";


// 鼠标靠近时改变颜色
hml_js_css_js.addEventListener('mouseover', function () {
    this.style.backgroundColor = "#b8b8b8"; // 鼠标靠近后的颜色
});

// 鼠标离开时恢复颜色
hml_js_css_js.addEventListener('mouseout', function () {
    this.style.backgroundColor = hml_js_Bokeh_color; // 恢复初始颜色
});

// --------------------

// 更多页面按钮10
var hml_js_css_js = document.getElementById("hml_js_more_10")
// 背景颜色
hml_js_css_js.style.backgroundColor = hml_js_Bokeh_color;

// 虚化
hml_js_css_js.style.backdropFilter = "blur(" + hml_js_xh + "px)";


// 鼠标靠近时改变颜色
hml_js_css_js.addEventListener('mouseover', function () {
    this.style.backgroundColor = "#b8b8b8"; // 鼠标靠近后的颜色
});

// 鼠标离开时恢复颜色
hml_js_css_js.addEventListener('mouseout', function () {
    this.style.backgroundColor = hml_js_Bokeh_color; // 恢复初始颜色
});

// --------------------

// 更多页面按钮11
var hml_js_css_js = document.getElementById("hml_js_more_11")
// 背景颜色
hml_js_css_js.style.backgroundColor = hml_js_Bokeh_color;

// 虚化
hml_js_css_js.style.backdropFilter = "blur(" + hml_js_xh + "px)";


// 鼠标靠近时改变颜色
hml_js_css_js.addEventListener('mouseover', function () {
    this.style.backgroundColor = "#b8b8b8"; // 鼠标靠近后的颜色
});

// 鼠标离开时恢复颜色
hml_js_css_js.addEventListener('mouseout', function () {
    this.style.backgroundColor = hml_js_Bokeh_color; // 恢复初始颜色
});

// --------------------

// 更多页面按钮12
var hml_js_css_js = document.getElementById("hml_js_more_12")
// 背景颜色
hml_js_css_js.style.backgroundColor = hml_js_Bokeh_color;

// 虚化
hml_js_css_js.style.backdropFilter = "blur(" + hml_js_xh + "px)";


// 鼠标靠近时改变颜色
hml_js_css_js.addEventListener('mouseover', function () {
    this.style.backgroundColor = "#b8b8b8"; // 鼠标靠近后的颜色
});

// 鼠标离开时恢复颜色
hml_js_css_js.addEventListener('mouseout', function () {
    this.style.backgroundColor = hml_js_Bokeh_color; // 恢复初始颜色
});

// --------------------

// 更多页面按钮13
var hml_js_css_js = document.getElementById("hml_js_more_13")
// 背景颜色
hml_js_css_js.style.backgroundColor = hml_js_Bokeh_color;

// 虚化
hml_js_css_js.style.backdropFilter = "blur(" + hml_js_xh + "px)";


// 鼠标靠近时改变颜色
hml_js_css_js.addEventListener('mouseover', function () {
    this.style.backgroundColor = "#b8b8b8"; // 鼠标靠近后的颜色
});

// 鼠标离开时恢复颜色
hml_js_css_js.addEventListener('mouseout', function () {
    this.style.backgroundColor = hml_js_Bokeh_color; // 恢复初始颜色
});

// --------------------

// 更多页面按钮14
var hml_js_css_js = document.getElementById("hml_js_more_14")
// 背景颜色
hml_js_css_js.style.backgroundColor = hml_js_Bokeh_color;

// 虚化
hml_js_css_js.style.backdropFilter = "blur(" + hml_js_xh + "px)";


// 鼠标靠近时改变颜色
hml_js_css_js.addEventListener('mouseover', function () {
    this.style.backgroundColor = "#b8b8b8"; // 鼠标靠近后的颜色
});

// 鼠标离开时恢复颜色
hml_js_css_js.addEventListener('mouseout', function () {
    this.style.backgroundColor = hml_js_Bokeh_color; // 恢复初始颜色
});

// --------------------

// 更多页面按钮15
var hml_js_css_js = document.getElementById("hml_js_more_15")
// 背景颜色
hml_js_css_js.style.backgroundColor = hml_js_Bokeh_color;

// 虚化
hml_js_css_js.style.backdropFilter = "blur(" + hml_js_xh + "px)";


// 鼠标靠近时改变颜色
hml_js_css_js.addEventListener('mouseover', function () {
    this.style.backgroundColor = "#b8b8b8"; // 鼠标靠近后的颜色
});

// 鼠标离开时恢复颜色
hml_js_css_js.addEventListener('mouseout', function () {
    this.style.backgroundColor = hml_js_Bokeh_color; // 恢复初始颜色
});

