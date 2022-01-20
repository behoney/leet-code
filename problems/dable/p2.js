function solution(skill, skill_trees) {
  let result = 0;
  const seq = skill.split("").reverse();

  const help = (seq_stack, input) => {
    for (let i = 0; i < input.length; i++) {
      if (seq.indexOf(input[i]) != -1) {
        if (seq_stack.pop() != input[i]) {
          return false;
        }
      }
    }
    return true;
  };

  skill_trees.forEach((e) => {
    const seq_stack = [...seq];
    result += help(seq_stack, e) ? 1 : 0;
  });

  return result;
}
