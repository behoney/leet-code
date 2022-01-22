function solution(N, coffee_times) {
  const result = [];

  const slots = new Array(coffee_times.length).fill(0);

  const updateSlot = () => {
    const targetIndex = [];
    for (let i = 0; i < coffee_times.length; i++) {
      if (slots[i] == coffee_times[i]) {
        slots[i] = -1;
        result.push(i + 1);
      }

      if (slots[i] != -1 && targetIndex.length < N) {
        targetIndex.push(i);

        if (targetIndex.length == N) break;
      }
    }

    let min = Infinity;
    for (let i = 0; i < targetIndex.length; i++) {
      min = Math.min(min, coffee_times[targetIndex[i]] - slots[targetIndex[i]]);
    }

    targetIndex.forEach((e) => {
      slots[e] += min;
    });
  };

  while (slots.some((e) => e != -1)) {
    updateSlot();
    // console.log(result, slots);
  }

  return result;
}

// console.log(solution(3, [4, 2, 2, 5, 3]));
