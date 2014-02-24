Remove-Item "publish" -Force -Recurse -ErrorAction SilentlyContinue
New-Item -ItemType directory -Path publish
copy index.htm .\publish
copy robot.txt .\publish
copy fonts publish\fonts
copy-item -rec images publish\images
copy-item -rec -filter *.min.css css publish\css
copy-item -rec -filter *.min.js vendor publish\vendor
copy-item -rec -filter *.min.js scripts publish\scripts

(Get-Content .\publish\index.htm) | ForEach-Object {$_ -replace "\.js", ".min.js"} | Set-Content publish\index.htm
(Get-Content .\publish\index.htm) | ForEach-Object {$_ -replace "\.css", ".min.css"} | Set-Content publish\index.htm
(Get-Content .\publish\scripts\loader.min.js) | ForEach-Object {$_ -replace "\.js", ".min.js"} | Set-Content .\publish\scripts\loader.min.js
(Get-Content .\publish\scripts\loader.min.js) | ForEach-Object {$_ -replace "\.css", ".min.css"} | Set-Content .\publish\scripts\loader.min.js
#del .\publish\index.htm.src*
#dir publish -rec
#(Get-Content .\publish\index.htm)



