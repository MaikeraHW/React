@echo off
REM Caminho do Node binário
set NODE_PATH=C:\Users\QXZ4NPD\Desktop\QXZ4NPD\Project\node-v24.11.0-win-x64

REM Caminho do projeto React
set PROJECT_PATH=C:\Users\QXZ4NPD\Desktop\QXZ4NPD\Project\REACT\HEFESTOS

REM Ir para a pasta do projeto
cd /d "%PROJECT_PATH%"

REM Rodar Vite diretamente com Node binário e forçar porta 5173
"%NODE_PATH%\node.exe" "%PROJECT_PATH%\node_modules\vite\bin\vite.js" --port 5173

REM Abrir automaticamente o navegador na porta 5173
start http://localhost:5173/

pause