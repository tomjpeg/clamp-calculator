const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const convertToRem = (value, root) => {
  return value / root;
};

const toFixed = (value) => {
  return parseFloat(value.toFixed(4));
};

const calculateClamp = (minValue, maxValue, minViewport, maxViewport, root) => {
  const minSize = convertToRem(minValue, root);
  const maxSize = convertToRem(maxValue, root);
  const minWidth = convertToRem(minViewport, root);
  const maxWidth = convertToRem(maxViewport, root);

  const slope = (maxSize - minSize) / (maxWidth - minWidth);
  const yAxisIntersection = toFixed(-minWidth * slope + minSize);

  const min = `${minSize}rem`;
  const max = `${maxSize}rem`;
  const preferred = `calc(${yAxisIntersection}rem + ${toFixed(slope * 100)}vw)`;

  return `clamp(${min}, ${preferred}, ${max})`;
}

rl.question('minimum value: ', minValue => {
  rl.question('maximum value: ', maxValue => {
    const minViewport = 375; // Default Breakpoint
    const maxViewport = 1920; // Default Breakpoint
    const root = 16; // Base size
    const result = calculateClamp(minValue, maxValue, minViewport, maxViewport, root);
    const comment = `/* viewport ${minViewport}px - ${maxViewport}px - value: ${minValue}px - ${maxValue}px */`;
    console.log(`------------------------------`);
    console.log(`\n`);
    console.log(`${result} ${comment}`);
    console.log(`\n`);
    console.log(`------------------------------`);
    rl.close();
  });
});
