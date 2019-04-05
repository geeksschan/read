export function isEmpty(obj) {
  obj = JSON.parse(JSON.stringify(obj));
  for(var key in obj) {
    if (obj.hasOwnProperty(key)) return true;
  }
  return false;
}