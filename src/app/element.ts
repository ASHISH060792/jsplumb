import { Position } from 'jsplumb';

export default interface Element extends Partial<Position> {
  id: string;
}
