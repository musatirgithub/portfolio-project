const langs = (data) => {
  const langs = [];
  data.map((item) => langs.push(item.language));
  const res = new Set(langs);
  return res;
};

const mySort = (data, criteria) => {
  if (criteria === "name-a") {
    return data.sort((a, b) => a.name.localeCompare(b.name));
  }
  if (criteria === "name-z") {
    return data.sort((a, b) => b.name.localeCompare(a.name));
  }
  if (criteria === "create-date") {
    return data.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
  }
  if (criteria === "update-date") {
    return data.sort((a, b) => new Date(a.updated_at) - new Date(b.updated_at));
  }
  if (criteria === "language") {
    return data.sort((a, b) => a.language?.localeCompare(b.language));
  }
};

export { langs, mySort };
