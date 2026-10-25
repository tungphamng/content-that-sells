param (
    [string]$msg = "test: update features on dev"
)

Write-Host "🧪 Dang push code len nhanh TEST (dev)..." -ForegroundColor Yellow

$pushTime = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
$commitMsg = "$msg | push: $pushTime"

# Dam bao dang o nhanh dev
git checkout dev

# Stage & Commit
git add .
git commit -m "$commitMsg"

# Push len dev
git push origin dev

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Da push thành cong len nhanh dev! ($pushTime)" -ForegroundColor Green
    Write-Host "   Commit: $commitMsg" -ForegroundColor DarkGray
} else {
    Write-Host "❌ Khong the push code. Vui long kiem tra lai!" -ForegroundColor Red
}
