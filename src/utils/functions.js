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

const myFilter = (data, criteria) => {
  if (criteria.toLowerCase() === "css") {
    return data.filter((item) => item.language?.toLowerCase() === "css");
  }
  if (criteria.toLowerCase() === "html") {
    return data.filter((item) => item.language?.toLowerCase() === "html");
  }
  if (criteria.toLowerCase() === "javascript") {
    return data.filter((item) => item.language?.toLowerCase() === "javascript");
  }
  if (criteria.toLowerCase() === "python") {
    return data.filter((item) => item.language?.toLowerCase() === "python");
  }
  if (criteria.toLowerCase() === "null") {
    return data.filter((item) => item.language === null);
  }
};

export { langs, mySort, myFilter };
