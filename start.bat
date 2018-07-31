@echo off
nodemon index.js
:loop
timeout 10800 /nobreak
rs
goto loop