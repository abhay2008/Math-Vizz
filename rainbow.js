// rainbow in the square
var image = new SimpleImage(256, 256);
for (var pixel of image.values()) {
    var x = pixel.getX();
    var y = pixel.getY();
    pixel.setRed(255-x);
    pixel.setGreen(255-y);
    pixel.setBlue(x);
}
print(image);