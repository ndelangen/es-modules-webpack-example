export default (message, ...tail) => {
  const line = message.toString().split('').map(i => '◦').join('');

  console.log(line);
  console.log(message);

  if (tail.length) {
    console.log(line.replace(/./g, '-'));
    tail.forEach(item => console.log(item));
  }

  console.log('\n');
};
