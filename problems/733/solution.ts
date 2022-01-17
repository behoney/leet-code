function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  newColor: number
): number[][] {
  if (image.length == 1 && image[0].length == 1) return [[newColor]];
  const maxR = image.length;
  const maxC = image[0].length;

  let changed = false;

  const fillConnected = (r, c, targetColor) => {
    console.log(r, c, image);
    if (image[r][c] == newColor) return;
    image[r][c] = newColor;
    if (r + 1 < maxR && image[r + 1][c] == targetColor)
      fillConnected(r + 1, c, targetColor);
    if (c + 1 < maxC && image[r][c + 1] == targetColor)
      fillConnected(r, c + 1, targetColor);
    if (r - 1 >= 0 && image[r - 1][c] == targetColor)
      fillConnected(r - 1, c, targetColor);
    if (c - 1 >= 0 && image[r][c - 1] == targetColor)
      fillConnected(r, c - 1, targetColor);
  };
  fillConnected(sr, sc, image[sr][sc]);

  return image;
}
