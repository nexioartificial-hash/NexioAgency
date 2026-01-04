Add-Type -AssemblyName System.Drawing
$inputPath = "C:\Users\Noxi-PC\.gemini\antigravity\brain\52afa43b-f367-4bf7-a4ad-a26119768c61\uploaded_image_1767478775078.png"
$outputPath = "c:\Users\Noxi-PC\Desktop\Nexio-Agency\client\public\logo_nexio_ultimate_transparent.png"

Write-Host "Processing clean source $inputPath with Flood Fill..."

$bitmap = New-Object System.Drawing.Bitmap($inputPath)
$width = $bitmap.Width
$height = $bitmap.Height
$newBitmap = New-Object System.Drawing.Bitmap($width, $height, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

# Copy original to new
$g = [System.Drawing.Graphics]::FromImage($newBitmap)
$g.DrawImage($bitmap, 0, 0)
$g.Dispose()

$tolerance = 40 # Increased tolerance for white/near-white
$visited = New-Object 'bool[,]' $width, $height
$queue = New-Object System.Collections.Generic.Queue[System.Drawing.Point]

# Seed from 4 corners and middle of edges to ensure the background is fully captured
$seeds = @(
    (New-Object System.Drawing.Point(0, 0)),
    (New-Object System.Drawing.Point(($width - 1), 0)),
    (New-Object System.Drawing.Point(0, ($height - 1))),
    (New-Object System.Drawing.Point(($width - 1), ($height - 1))),
    (New-Object System.Drawing.Point(($width / 2), 0)),
    (New-Object System.Drawing.Point(0, ($height / 2))),
    (New-Object System.Drawing.Point(($width - 1), ($height / 2))),
    (New-Object System.Drawing.Point(($width / 2), ($height - 1)))
)

foreach ($seed in $seeds) {
    if (-not $visited[$seed.X, $seed.Y]) {
        $queue.Enqueue($seed)
        $visited[$seed.X, $seed.Y] = $true
    }
}

while ($queue.Count -gt 0) {
    $p = $queue.Dequeue()
    $pixel = $bitmap.GetPixel($p.X, $p.Y)
    
    # Check if pixel is "white-ish" (R, G, B > (255 - tolerance))
    if ($pixel.R -gt (255 - $tolerance) -and $pixel.G -gt (255 - $tolerance) -and $pixel.B -gt (255 - $tolerance)) {
        $newBitmap.SetPixel($p.X, $p.Y, [System.Drawing.Color]::Transparent)
        
        # Check 4-connected neighbors
        $neighbors = @(
            (New-Object System.Drawing.Point(($p.X + 1), $p.Y)),
            (New-Object System.Drawing.Point(($p.X - 1), $p.Y)),
            (New-Object System.Drawing.Point($p.X, ($p.Y + 1))),
            (New-Object System.Drawing.Point($p.X, ($p.Y - 1)))
        )
        
        foreach ($n in $neighbors) {
            if ($n.X -ge 0 -and $n.X -lt $width -and $n.Y -ge 0 -and $n.Y -lt $height) {
                if (-not $visited[$n.X, $n.Y]) {
                    $visited[$n.X, $n.Y] = $true
                    $queue.Enqueue($n)
                }
            }
        }
    }
}

$newBitmap.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)
$bitmap.Dispose()
$newBitmap.Dispose()

Write-Host "Success! Saved to $outputPath"
