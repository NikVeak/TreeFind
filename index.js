// главный js файл
// подключение файлов и основных модулей
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';
const path = require('path');
const url = require('url');
const {app,BrowserWindow}= require('electron');

// главная переменная
let MainWindow;

// функция создания окна
function createMainWindow(){

    MainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true
        },
        width:820,
        height:550,

    });
    // подгрузка html странички
    MainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol:'file:',
        slashes:true
    }));
    // режим разработчика
   // MainWindow.webContents.openDevTools();

    // закрытие окна
    MainWindow.on('closed', ()=> {
        win = null;
    });
}

app.on('ready', createMainWindow);

// полное закрытие приложения
app.on('window-all-closed', ()=>{
    app.quit()
});