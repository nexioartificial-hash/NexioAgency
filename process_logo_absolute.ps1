Add-Type -AssemblyName System.Drawing
$inputPath = "C:\Users\Noxi-PC\.gemini\antigravity\brain\52afa43b-f367-4bf7-a4ad-a26119768c61\uploaded_image_1767478775078.png"
$outputPath = "c:\Users\Noxi-PC\Desktop\Nexio-Agency\client\public\logo_nexio_transparent_absolute.png"

Write-Host "Processing clean source $inputPath with Global Color Replacement..."

$bitmap = New-Object System.Drawing.Bitmap($inputPath)
$width = $bitmap.Width
$height = $bitmap.Height
$newBitmap = New-Object System.Drawing.Bitmap($width, $height, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

for ($x = 0; $x -lt $width; $x++) {
    for ($y = 0; $y -lt $height; $y++) {
        $pixel = $bitmap.GetPixel($x, $y)
        
        # If pixel is "white-ish" (R, G, B all > 220), make it transparent
        # This will catch background AND islands inside the logo
        if ($pixel.R -gt 220 -and $pixel.G -gt 220 -and $pixel.B -gt 220) {
            $newBitmap.SetPixel($x, $y, [System.Drawing.Color]::Transparent)
        }
        else {
            # Keep original pixel but ensure it's in the right surface format
            $newBitmap.SetPixel($x, $y, $pixel)
        }
    }
}

$newBitmap.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)
$bitmap.Dispose()
$newBitmap.Dispose()

Write-Host "Success! Saved to $outputPath"
