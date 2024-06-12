//  return undefined, a string, or a Map
import { fromJS } from 'immutable';

export default function accessImmutableObject(object, array) {
  const mappedObj = fromJS(object);

  return mappedObj.getIn(array, undefined);
}
