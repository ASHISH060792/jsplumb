import { Position } from 'jsplumb';

export default interface Group extends Partial<Position> {
  id: string;
}
