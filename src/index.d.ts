import { ReactElement } from 'react';

interface ChessBoardSVGProps {
  /**
   * FEN string or position object notating where the chess pieces are on the board. Start position can also be notated with the string: 'start'.
   */
  fen?: string;
}
export function ChessboardSVG(props: ChessBoardSVGProps): ReactElement;
