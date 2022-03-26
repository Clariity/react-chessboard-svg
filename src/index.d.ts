import { ReactElement } from 'react';

interface ChessBoardSVGProps {
  /**
   * FEN string or position object notating where the chess pieces are on the board. Start position can also be notated with the string: 'start'.
   */
  fen?: string;
  /**
   * String defining fill colour for chessboard dark tiles e.g. '#b58863'
   */
  squareDarkColour?: string;
  /**
   * String defining fill colour for chessboard light tiles e.g. '#f0d9b5'
   */
  squareLightColour?: string;
}
export function ChessboardSVG(props: ChessBoardSVGProps): ReactElement;
