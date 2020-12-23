@echo off
cls

start DOSBox/dosbox.exe -conf DOSBox/editart.conf -noconsole -c "MOUNT C Data" -c "C:" -c "EDITART.EXE" -c "EXIT"
