export default function getListStudentIds(arr) {
  if (arr instanceof Array) {
    return arr.map((newArr) => newArr.id);
  }
  return [];
}
