function getValue(obj, path) {
  let keys = path.split(".");
  let current = obj;

  for (let key of keys) {
    if (current[key] === undefined) {
      return undefined;
    }
    current = current[key];
  }

  return current;
}

const user = {
  profile: {
    address: {
      city: "Delhi"
    }
  }
};

console.log(getValue(user, "profile.address.city"));
console.log(getValue(user, "profile.phone")); 