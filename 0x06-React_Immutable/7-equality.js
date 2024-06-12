// equality :3
// true if maps are equal
import { is } from 'immutable';

export default function areMapsEqual(map1, map2) {
  return is(map1, map2);
}
