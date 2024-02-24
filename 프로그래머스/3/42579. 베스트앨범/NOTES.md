# Intuition

주어진 노래들을 장르별로 재생 횟수에 따라 정렬하고, 각 장르에서 가장 많이 재생된 노래 두 개를 선택하여 베스트 앨범을 구성하는 것.
이를 위해 주어진 노래 정보를 바탕으로 장르별 총 재생 횟수와 각 노래의 정보를 집계한 후, 이를 정렬하여 베스트 앨범을 결정한다.

## Approach

1. **노래 정보 집계**: `genres`와 `plays` 배열을 이용하여 각 장르별로 총 재생 횟수와 각 노래의 고유 번호 및 재생 횟수를 객체에 저장한다. 이때, 객체의 각 키는 장르명이고, 값은 해당 장르의 총 재생 횟수와 노래 리스트(고유 번호와 재생 횟수가 포함된 배열)이다.
2. **장르별 정렬**: 집계된 정보를 바탕으로 장르별 총 재생 횟수에 따라 내림차순으로 정렬한다.
3. **노래 선택**: 각 장르별로 노래 리스트를 재생 횟수에 따라 내림차순으로 정렬하고, 최대 두 개의 노래를 선택한다.
4. **베스트 앨범 구성**: 선택된 노래의 고유 번호를 순서대로 배열에 추가하여 최종 결과를 반환한다.

## Complexity

- **Time complexity**: $$O(N \log N)$$ - 여기서 $$N$$은 `genres` 배열의 길이. 장르별로 노래 정보를 정렬하는 과정에서 가장 많은 시간이 소용된다.
- **Space complexity**: $$O(N)$$ - 추가적인 객체와 배열을 사용하여 노래 정보를 저장하므로, 공간 복잡도는 입력 크기에 비례한다.

## Code

```javascript
function solution(genres, plays) {
  const songs = genres.reduce((obj, genre, index) => {
    if (!obj[genre]) {
      obj[genre] = { playCount: plays[index], list: [] };
    } else {
      obj[genre].playCount += plays[index];
    }
    obj[genre].list.push([index, plays[index]]);

    return obj;
  }, {});

  const sorted = Object.values(songs).sort((a, b) => b.playCount - a.playCount);
  return sorted.reduce((arr, cur) => {
    cur.list.sort((a, b) => b[1] - a[1]);
    arr.push(cur.list[0][0]);
    if (cur.list.length > 1) {
      arr.push(cur.list[1][0]);
    }
    return arr;
  }, []);
}
```
