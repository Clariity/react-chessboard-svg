import { COLUMNS } from './consts';

export function SVGWrapper({ children }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800 800"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
    >
      {children}
    </svg>
  );
}

export function ChessBoard({ squareDarkColour, squareLightColour }) {
  return (
    <>
      <rect width="100" height="100" rx="0" ry="0" transform="translate(0 700)" fill={squareDarkColour} strokeWidth="0" />
      <rect width="100" height="100" rx="0" ry="0" transform="translate(100 600)" fill={squareDarkColour} strokeWidth="0" />
      <rect width="100" height="100" rx="0" ry="0" transform="translate(0 500)" fill={squareDarkColour} strokeWidth="0" />
      <rect width="100" height="100" rx="0" ry="0" transform="translate(200 500)" fill={squareDarkColour} strokeWidth="0" />
      <rect width="100" height="100" rx="0" ry="0" transform="translate(400 500)" fill={squareDarkColour} strokeWidth="0" />
      <rect width="100" height="100" rx="0" ry="0" transform="translate(600 500)" fill={squareDarkColour} strokeWidth="0" />
      <rect width="100" height="100" rx="0" ry="0" transform="translate(700 400)" fill={squareDarkColour} strokeWidth="0" />
      <rect width="100" height="100" rx="0" ry="0" transform="translate(500 400)" fill={squareDarkColour} strokeWidth="0" />
      <rect width="100" height="100" rx="0" ry="0" transform="translate(300 400)" fill={squareDarkColour} strokeWidth="0" />
      <rect width="100" height="100" rx="0" ry="0" transform="translate(100 400)" fill={squareDarkColour} strokeWidth="0" />
      <rect width="100" height="100" rx="0" ry="0" transform="translate(0 300)" fill={squareDarkColour} strokeWidth="0" />
      <rect width="100" height="100" rx="0" ry="0" transform="translate(200 300)" fill={squareDarkColour} strokeWidth="0" />
      <rect width="100" height="100" rx="0" ry="0" transform="translate(400 300)" fill={squareDarkColour} strokeWidth="0" />
      <rect width="100" height="100" rx="0" ry="0" transform="translate(600 300)" fill={squareDarkColour} strokeWidth="0" />
      <rect width="100" height="100" rx="0" ry="0" transform="translate(700 200)" fill={squareDarkColour} strokeWidth="0" />
      <rect width="100" height="100" rx="0" ry="0" transform="translate(500 200)" fill={squareDarkColour} strokeWidth="0" />
      <rect width="100" height="100" rx="0" ry="0" transform="translate(300 200)" fill={squareDarkColour} strokeWidth="0" />
      <rect width="100" height="100" rx="0" ry="0" transform="translate(100 200)" fill={squareDarkColour} strokeWidth="0" />
      <rect width="100" height="100" rx="0" ry="0" transform="translate(0 100)" fill={squareDarkColour} strokeWidth="0" />
      <rect width="100" height="100" rx="0" ry="0" transform="translate(200 100)" fill={squareDarkColour} strokeWidth="0" />
      <rect width="100" height="100" rx="0" ry="0" transform="translate(400 100)" fill={squareDarkColour} strokeWidth="0" />
      <rect width="100" height="100" rx="0" ry="0" transform="translate(600 100)" fill={squareDarkColour} strokeWidth="0" />
      <rect width="100" height="100" rx="0" ry="0" transform="translate(700 0)" fill={squareDarkColour} strokeWidth="0" />
      <rect width="100" height="100" rx="0" ry="0" transform="translate(500 0)" fill={squareDarkColour} strokeWidth="0" />
      <rect width="100" height="100" rx="0" ry="0" transform="translate(300 0)" fill={squareDarkColour} strokeWidth="0" />
      <rect width="100" height="100" rx="0" ry="0" transform="translate(100 0)" fill={squareDarkColour} strokeWidth="0" />
      <rect width="100" height="100" rx="0" ry="0" transform="translate(300 600)" fill={squareDarkColour} strokeWidth="0" />
      <rect width="100" height="100" rx="0" ry="0" transform="translate(500 600)" fill={squareDarkColour} strokeWidth="0" />
      <rect width="100" height="100" rx="0" ry="0" transform="translate(700 600)" fill={squareDarkColour} strokeWidth="0" />
      <rect width="100" height="100" rx="0" ry="0" transform="translate(600 700)" fill={squareDarkColour} strokeWidth="0" />
      <rect width="100" height="100" rx="0" ry="0" transform="translate(400 700)" fill={squareDarkColour} strokeWidth="0" />
      <rect width="100" height="100" rx="0" ry="0" transform="translate(200 700)" fill={squareDarkColour} strokeWidth="0" />
      <rect width="100" height="100" rx="0" ry="0" transform="translate(100 700)" fill={squareLightColour} strokeWidth="0" />
      <rect width="100" height="100" rx="0" ry="0" transform="translate(0 600)" fill={squareLightColour} strokeWidth="0" />
      <rect width="100" height="100" rx="0" ry="0" transform="translate(100 500)" fill={squareLightColour} strokeWidth="0" />
      <rect width="100" height="100" rx="0" ry="0" transform="translate(300 500)" fill={squareLightColour} strokeWidth="0" />
      <rect width="100" height="100" rx="0" ry="0" transform="translate(500 500)" fill={squareLightColour} strokeWidth="0" />
      <rect width="100" height="100" rx="0" ry="0" transform="translate(0 400)" fill={squareLightColour} strokeWidth="0" />
      <rect width="100" height="100" rx="0" ry="0" transform="translate(200 400)" fill={squareLightColour} strokeWidth="0" />
      <rect width="100" height="100" rx="0" ry="0" transform="translate(400 400)" fill={squareLightColour} strokeWidth="0" />
      <rect width="100" height="100" rx="0" ry="0" transform="translate(600 400)" fill={squareLightColour} strokeWidth="0" />
      <rect width="100" height="100" rx="0" ry="0" transform="translate(700 500)" fill={squareLightColour} strokeWidth="0" />
      <rect width="100" height="100" rx="0" ry="0" transform="translate(100 300)" fill={squareLightColour} strokeWidth="0" />
      <rect width="100" height="100" rx="0" ry="0" transform="translate(300 300)" fill={squareLightColour} strokeWidth="0" />
      <rect width="100" height="100" rx="0" ry="0" transform="translate(500 300)" fill={squareLightColour} strokeWidth="0" />
      <rect width="100" height="100" rx="0" ry="0" transform="translate(700 300)" fill={squareLightColour} strokeWidth="0" />
      <rect width="100" height="100" rx="0" ry="0" transform="translate(0 200)" fill={squareLightColour} strokeWidth="0" />
      <rect width="100" height="100" rx="0" ry="0" transform="translate(200 200)" fill={squareLightColour} strokeWidth="0" />
      <rect width="100" height="100" rx="0" ry="0" transform="translate(400 200)" fill={squareLightColour} strokeWidth="0" />
      <rect width="100" height="100" rx="0" ry="0" transform="translate(600 200)" fill={squareLightColour} strokeWidth="0" />
      <rect width="100" height="100" rx="0" ry="0" transform="translate(100 100)" fill={squareLightColour} strokeWidth="0" />
      <rect width="100" height="100" rx="0" ry="0" transform="translate(300 100)" fill={squareLightColour} strokeWidth="0" />
      <rect width="100" height="100" rx="0" ry="0" transform="translate(500 100)" fill={squareLightColour} strokeWidth="0" />
      <rect width="100" height="100" rx="0" ry="0" transform="translate(700 100)" fill={squareLightColour} strokeWidth="0" />
      <rect width="100" height="100" rx="0" ry="0" fill={squareLightColour} strokeWidth="0" />
      <rect width="100" height="100" rx="0" ry="0" transform="translate(200 0)" fill={squareLightColour} strokeWidth="0" />
      <rect width="100" height="100" rx="0" ry="0" transform="translate(400 0)" fill={squareLightColour} strokeWidth="0" />
      <rect width="100" height="100" rx="0" ry="0" transform="translate(600 0)" fill={squareLightColour} strokeWidth="0" />
      <rect width="100" height="100" rx="0" ry="0" transform="translate(200 600)" fill={squareLightColour} strokeWidth="0" />
      <rect width="100" height="100" rx="0" ry="0" transform="translate(400 600)" fill={squareLightColour} strokeWidth="0" />
      <rect width="100" height="100" rx="0" ry="0" transform="translate(600 600)" fill={squareLightColour} strokeWidth="0" />
      <rect width="100" height="100" rx="0" ry="0" transform="translate(300 700)" fill={squareLightColour} strokeWidth="0" />
      <rect width="100" height="100" rx="0" ry="0" transform="translate(500 700)" fill={squareLightColour} strokeWidth="0" />
      <rect width="100" height="100" rx="0" ry="0" transform="translate(700 700)" fill={squareLightColour} strokeWidth="0" />
    </>
  );
}

function isString(s) {
  return typeof s === 'string';
}

export function convertPositionToObject(position) {
  if (position === 'start') return fenToObj('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR');
  if (validFen(position)) return fenToObj(position);
  return {};
}

function fenToObj(fen) {
  if (!validFen(fen)) return false;
  // cut off any move, castling, etc info from the end. we're only interested in position information
  fen = fen.replace(/ .+$/, '');
  const rows = fen.split('/');
  const position = {};
  let currentRow = 8;

  for (let i = 0; i < 8; i++) {
    const row = rows[i].split('');
    let colIdx = 0;

    // loop through each character in the FEN section
    for (let j = 0; j < row.length; j++) {
      // number / empty squares
      if (row[j].search(/[1-8]/) !== -1) {
        const numEmptySquares = parseInt(row[j], 10);
        colIdx = colIdx + numEmptySquares;
      } else {
        // piece
        const square = COLUMNS[colIdx] + currentRow;
        position[square] = fenToPieceCode(row[j]);
        colIdx = colIdx + 1;
      }
    }
    currentRow = currentRow - 1;
  }
  return position;
}

function expandFenEmptySquares(fen) {
  return fen
    .replace(/8/g, '11111111')
    .replace(/7/g, '1111111')
    .replace(/6/g, '111111')
    .replace(/5/g, '11111')
    .replace(/4/g, '1111')
    .replace(/3/g, '111')
    .replace(/2/g, '11');
}

function validFen(fen) {
  if (!isString(fen)) return false;
  // cut off any move, castling, etc info from the end. we're only interested in position information
  fen = fen.replace(/ .+$/, '');
  // expand the empty square numbers to just 1s
  fen = expandFenEmptySquares(fen);
  // FEN should be 8 sections separated by slashes
  const chunks = fen.split('/');
  if (chunks.length !== 8) return false;
  // check each section
  for (let i = 0; i < 8; i++) {
    if (chunks[i].length !== 8 || chunks[i].search(/[^kqrnbpKQRNBP1]/) !== -1) {
      return false;
    }
  }
  return true;
}

// convert FEN piece code to bP, wK, etc
function fenToPieceCode(piece) {
  // black piece
  if (piece.toLowerCase() === piece) {
    return 'b' + piece.toUpperCase();
  }
  // white piece
  return 'w' + piece.toUpperCase();
}
