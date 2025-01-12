# Clamp Calculator

**Clamp Calculator** is a CLI tool for generating responsive CSS `clamp()` values. Use it to calculate optimal `clamp()` functions for fluid designs directly in your terminal.

## Usage

1. Install the tool (if needed) or clone the repository:
   ```bash
   git clone https://github.com/tomjpeg/clamp-calculator.git
   cd clamp-calculator
   ```

2. Run the script using Node.js:
   ```bash
   node app.js
   ```

3. Example:
   ```bash
   node app.js
   minimum value: 15
   maximum value: 20
   ```
   Output:
   ```css
   clamp(0.9375rem, calc(0.8617rem + 0.3236vw), 1.25rem) /* viewport 375px - 1920px - value: 15px - 20px */
   ```
