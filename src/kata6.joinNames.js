const joinNames = (namesObj) => {
  const names = namesObj.map((element) => element.name);
  if (names <= 2) {
    return `${names[0]} & ${names}[1]`;
  }
  const nextName = `${names.pop()}`;
  return `${names.join(", ")} & ${nextName}`;
};

module.exports = joinNames;
