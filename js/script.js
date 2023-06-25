// script.js

function convertColor() {
    var hexCodeInput = document.getElementById('hexCode');
    var rgbCodeInput = document.getElementById('rgbCode');
    var hslCodeInput = document.getElementById('hslCode');
    var colorPreview = document.getElementById('colorPreview');
  
    // Convert Hex to RGB
    if (hexCodeInput.value) {
      var hex = hexCodeInput.value.replace('#', '');
      if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
      }
      if (hex.length === 6) {
        var r = parseInt(hex.substring(0, 2), 16);
        var g = parseInt(hex.substring(2, 4), 16);
        var b = parseInt(hex.substring(4, 6), 16);
        rgbCodeInput.value = r + ', ' + g + ', ' + b;
        colorPreview.style.backgroundColor = '#' + hex;
      }
    }
  
    // Convert RGB to Hex
    if (rgbCodeInput.value) {
      var rgb = rgbCodeInput.value.split(',');
      var r = parseInt(rgb[0]);
      var g = parseInt(rgb[1]);
      var b = parseInt(rgb[2]);
      if (!isNaN(r) && !isNaN(g) && !isNaN(b) && r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255) {
        var hex = ((r << 16) | (g << 8) | b).toString(16).toUpperCase().padStart(6, '0');
        hexCodeInput.value = '#' + hex;
        colorPreview.style.backgroundColor = '#' + hex;
      }
    }
  
    // Convert RGB to HSL
    if (rgbCodeInput.value) {
      var rgb = rgbCodeInput.value.split(',');
      var r = parseInt(rgb[0]);
      var g = parseInt(rgb[1]);
      var b = parseInt(rgb[2]);
      if (!isNaN(r) && !isNaN(g) && !isNaN(b) && r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255) {
        var hsl = rgbToHsl(r, g, b);
        hslCodeInput.value = hsl[0] + ', ' + hsl[1] + '%, ' + hsl[2] + '%';
      }
    }
  }
  
  function rgbToHsl(r, g, b) {
    r /= 255, g /= 255, b /= 255;
  
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;
  
    if (max == min) {
      h = s = 0; // achromatic
    } else {
      var d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }
  
    return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
  }
  