export default function getStudentIdsSum(list) {
  if (Array.isArray(list)) {
    return list.map((student) => student.id).reduce((acc, cur) => acc + cur, 0);
  }
  return 0;
}
