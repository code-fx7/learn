function interpret() {
  let end = false;

  while (!end) {
      switch (program[ipointer]) {
          case '>':
              if (mpointer == memory.length - 1)
                  memory.push(0, 0, 0, 0, 0);
              mpointer++;
              break;
          case '<':
              if (mpointer > 0)
                  mpointer--;
              break;
          case '+':
              memory[mpointer]++;
              break;
          case '-':
              memory[mpointer]--;
              break;
          case '.':
              sendOutput(memory[mpointer]);
              break;
          case ',':
              memory[mpointer] = getInput();
              break;
          case '[':
              if (memory[mpointer]) {
                  astack.push(ipointer);
              } else {
                  let count = 0;
                  while (true) {
                      ipointer++;
                      if (!program[ipointer]) break;
                      if (program[ipointer] === "[") count++;
                      else if (program[ipointer] === "]") {
                          if (count) count--;
                          else break;
                      }
                  }
              }
              break;
          case ']':
              ipointer = astack.pop() - 1;
              break;
          case undefined:
              end = true;
              break;
          default:
              break;
      }
      ipointer++;

  }
  console.log(output);
  return output;
}
