@echo off

cls

:: Install NPM packages
echo Installing NPM packages...
cmd /c npm install

cls

:: Build and Package Application
echo Building and Packaging...
cmd /c npm run package

:: Quit
exit /b %errorlevel%