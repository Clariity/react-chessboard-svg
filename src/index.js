import React from 'react';
import { COLUMN_X_VALUES, PIECES, ROW_Y_VALUES } from './consts';
import { ChessBoard, convertPositionToObject, SVGWrapper } from './functions';

export function ChessboardSVG({ fen = 'start' }) {
  const fenObj = convertPositionToObject(fen);
  return (
    <SVGWrapper>
      <ChessBoard />
      {Object.entries(fenObj).map(([square, piece]) =>
        PIECES[piece](`${COLUMN_X_VALUES[square[0]]} ${ROW_Y_VALUES[square[1]]}`)
      )}
    </SVGWrapper>
  );
}
