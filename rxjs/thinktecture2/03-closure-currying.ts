function greet(greeting: string, name: string): void {
  console.log(`${greeting}, ${name}`);
}

function greeter(greeting: string): (name: string) => void {
  return name => {
    console.log(`${greeting}, ${name}`);
  };
}

const german = greeter('Hallo');
const english = greeter('Hello');

german('Yannick');
english('Viewers');
