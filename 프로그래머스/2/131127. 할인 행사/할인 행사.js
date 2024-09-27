function solution(want, number, discount) {
  const wantObj = {};
  want.forEach((x, i) => (wantObj[x] = number[i]));

  let result = 0;
  for (let i = 0; i <= discount.length - 10; i++) {
    const discount10Obj = {};

    for (let j = i; j < i + 10; j++) {
      if (wantObj[discount[j]]) {
        discount10Obj[discount[j]] = (discount10Obj[discount[j]] || 0) + 1;
      }
    }
    if (isShallowEqual(discount10Obj, wantObj)) {
      result += 1;
    }
  }
  return result;
}

function isShallowEqual(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) return false;

  for (const key of keys1) {
    if (object1[key] !== object2[key]) return false;
  }
  return true;
}