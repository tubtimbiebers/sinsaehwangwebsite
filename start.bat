@echo off
chcp 65001 >nul
title ซินแสหวาง Backend Server

echo.
echo  ╔════════════════════════════════════╗
echo  ║   ซินแสหวาง Backend Server v1.0   ║
echo  ╚════════════════════════════════════╝
echo.

:: Check Node.js
where node >nul 2>&1
if %errorlevel% neq 0 (
  echo  [ERROR] ไม่พบ Node.js กรุณาติดตั้งที่ https://nodejs.org
  pause
  exit /b 1
)

:: Install dependencies if needed
if not exist "node_modules\express" (
  echo  กำลังติดตั้ง dependencies...
  npm install
  if %errorlevel% neq 0 (
    echo  [ERROR] npm install ล้มเหลว
    pause
    exit /b 1
  )
)

echo  กำลังเริ่ม server...
echo  เว็บไซต์ : http://localhost:3000
echo  Admin    : http://localhost:3000/admin/login.html
echo  กด Ctrl+C เพื่อหยุด
echo.

:: Open browser after 2 seconds
start /b cmd /c "timeout /t 2 >nul && start http://localhost:3000"

node server.js
pause
