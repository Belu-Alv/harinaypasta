$desktopPath = [System.Environment]::GetFolderPath([System.Environment+SpecialFolder]::Desktop)
$WshShell = New-Object -ComObject WScript.Shell
$Shortcut = $WshShell.CreateShortcut("$desktopPath\Gourmet Hub.lnk")
$Shortcut.TargetPath = "C:\Users\usuario\.gemini\antigravity\scratch\delivery-whatsapp-app\index.html"
$Shortcut.Description = "Gourmet Hub | Delivery & Admin Dashboard"
$Shortcut.Save()
Write-Output "Shortcut created successfully at: $desktopPath\Gourmet Hub.lnk"
