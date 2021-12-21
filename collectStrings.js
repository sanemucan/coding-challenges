const collectStrings = (obj) => {
  let arr = [];
  for (let key in obj) {
    let item = obj[key];

    if (typeof item === "string") arr.push(item);
    else if (typeof item === "object" && !Array.isArray(item)) {
      arr = arr.concat(collectStrings(item));
    }
  }

  return arr;
};

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])
