//窗口控制的js
const { Window } = window.__TAURI__.window;
const appWindow = new Window('main');

// 最小化
document
    .getElementById('hml_js_minimize')
    ?.addEventListener('click', () => appWindow.minimize());

//关闭
document
    .getElementById('hml_js_Shut_down')
    ?.addEventListener('click', () => appWindow.close());