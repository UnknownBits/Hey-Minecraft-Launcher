// 从 Tauri 的全局对象中引入 invoke 方法，用于调用 Rust 后端的命令
// const { invoke } = window.__TAURI__.core;

// 关闭程序按钮被点击
// document.getElementById('hml_js_Shut_down').addEventListener('click', async function () {
//   var hml_js_css_js = await invoke("greet");
//   alert(hml_js_css_js) //弹窗试试
//
// });



// 监听 DOMContentLoaded 事件，确保页面加载完成后执行以下代码
// window.addEventListener("DOMContentLoaded", () => {这个});