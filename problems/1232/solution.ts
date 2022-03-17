function checkStraightLine(coordinates: number[][]): boolean {
  if (coordinates.length == 2) return true;

  const deltaX = (coordinates[1][0] - coordinates[0][0])
  const deltaY = (coordinates[1][1] - coordinates[0][1])

  for (let i = 2; i < coordinates.length; i++) {
    const dX = (coordinates[i][0] - coordinates[0][0])
    const dY = (coordinates[i][1] - coordinates[0][1])
    if (deltaX * dY !== dX * deltaY) return false;
  }


  return true;
};