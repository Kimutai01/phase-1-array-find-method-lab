// code your solution here
function superbowlWin(record) {
  const foundItem = record.find((ele) => ele.result === "W");
  if (foundItem) return foundItem.year;
  return undefined;
}
