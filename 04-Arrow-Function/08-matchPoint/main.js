let matchPoint = (win, draw) => {
  winPoint = 3;
  drawPoint = 1;
  return winPoint * win + drawPoint * draw;
};
console.log(matchPoint(2, 6));
