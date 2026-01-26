import React from 'react';
import { COLUMN_X_VALUES, PIECES, ROW_Y_VALUES } from './consts';
import { ChessBoard, convertPositionToObject, SVGWrapper } from './functions';

export function ChessboardSVG({ fen = 'start', squareDarkColour = '#b58863', squareLightColour = '#f0d9b5', orientation = 'white' }) {
  const fenObj = convertPositionToObject(fen);
  const colValues = COLUMN_X_VALUES[orientation];
  const rowValues = ROW_Y_VALUES[orientation];
  return (
    <SVGWrapper>
      <ChessBoard squareDarkColour={squareDarkColour} squareLightColour={squareLightColour} />
      {Object.entries(fenObj).map(([square, piece]) =>
        PIECES[piece](`${colValues[square[0]]} ${rowValues[square[1]]}`, square)
      )}
    </SVGWrapper>
  );
}
