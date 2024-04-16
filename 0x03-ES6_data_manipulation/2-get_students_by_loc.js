export default function getStudentsByLocation(list, city) {
  if (list instanceof Array && typeof city === 'string') {
    return list.filter((listItem) => listItem.location === city);
  }
  return [];
}
