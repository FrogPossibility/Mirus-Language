@echo off
if "%1"=="" (
    echo File not found.
    exit /b 1
)

echo %1
node parse.js %1
node generate.js %1.ast
node %~n1.js