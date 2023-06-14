function greet(greeting: string, name: string): void {
  console.log(`${greeting} ${name}`);
}

// greet('Hallo', 'Yannick');
// greet('Hallo', 'Viewers');
// greet('Hallo', 'Welt!');
// wird ersetzt durch:

// function hallo(name: string): void {
//   greet('Hallo', name);
// }
// wird ersetzt durch

const hallo = (name: string) => greet('Hallo', name);

hallo('Yannick');
hallo('Viewers');
hallo('Welt!');
