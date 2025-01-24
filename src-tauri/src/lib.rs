
// #[tauri::command]
// fn greet() -> String {
//     format!("你好，世界")
// }
//

// --------------------------------------------------
#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![]) //有新的要改这里
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
