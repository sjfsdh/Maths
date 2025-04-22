export const exampleCategories = [
  {
    name: "Basic Operations",
    examples: [
      {
        text: "5+3",
        description: "Simple addition",
        explanation: "Adding two numbers: 5 plus 3 equals 8",
      },
      {
        text: "10-4",
        description: "Simple subtraction",
        explanation: "Subtracting 4 from 10 equals 6",
      },
      {
        text: "6*7",
        description: "Simple multiplication",
        explanation: "Multiplying 6 by 7 equals 42",
      },
      {
        text: "20/5",
        description: "Simple division",
        explanation: "Dividing 20 by 5 equals 4",
      },
      {
        text: "10+5-3",
        description: "Multiple operations (addition and subtraction)",
        explanation:
          "First 10+5=15, then 15-3=12. Addition and subtraction have the same precedence and are evaluated from left to right.",
      },
      {
        text: "4*3/2",
        description: "Multiple operations (multiplication and division)",
        explanation:
          "First 4*3=12, then 12/2=6. Multiplication and division have the same precedence and are evaluated from left to right.",
      },
    ],
  },
  {
    name: "Order of Operations",
    examples: [
      {
        text: "2+3*4",
        description: "Multiplication before addition",
        explanation: "Multiplication has higher precedence than addition: 3*4=12, then 2+12=14",
      },
      {
        text: "(2+3)*4",
        description: "Parentheses change the order",
        explanation: "Operations in parentheses are performed first: (2+3)=5, then 5*4=20",
      },
      {
        text: "10-4/2",
        description: "Division before subtraction",
        explanation: "Division has higher precedence than subtraction: 4/2=2, then 10-2=8",
      },
      {
        text: "8/4/2",
        description: "Multiple divisions (left to right)",
        explanation: "When operations have the same precedence, evaluate from left to right: 8/4=2, then 2/2=1",
      },
      {
        text: "2*(3+4)-5",
        description: "Parentheses, multiplication, and subtraction",
        explanation: "First (3+4)=7, then 2*7=14, finally 14-5=9",
      },
      {
        text: "10/(2+3)",
        description: "Division with parentheses",
        explanation: "First (2+3)=5, then 10/5=2",
      },
    ],
  },
  {
    name: "Exponents & Roots",
    examples: [
      {
        text: "2^3",
        description: "Simple exponent",
        explanation: "2 raised to the power of 3: 2*2*2=8",
      },
      {
        text: "sqrt(16)",
        description: "Square root",
        explanation: "The square root of 16 is 4, because 4*4=16",
      },
      {
        text: "2^3+4",
        description: "Exponents and addition",
        explanation: "Exponents are calculated before addition: 2^3=8, then 8+4=12",
      },
      {
        text: "sqrt(9)+sqrt(16)",
        description: "Multiple square roots",
        explanation: "sqrt(9)=3, sqrt(16)=4, so sqrt(9)+sqrt(16)=3+4=7",
      },
      {
        text: "2^(3+1)",
        description: "Exponent with expression in parentheses",
        explanation: "The expression in parentheses is evaluated first: 3+1=4, then 2^4=16",
      },
      {
        text: "cbrt(27)",
        description: "Cube root",
        explanation: "The cube root of 27 is 3, because 3*3*3=27",
      },
    ],
  },
  {
    name: "Trigonometry",
    examples: [
      {
        text: "sin(0)",
        description: "Sine of 0 radians",
        explanation: "The sine of 0 radians is 0",
      },
      {
        text: "cos(0)",
        description: "Cosine of 0 radians",
        explanation: "The cosine of 0 radians is 1",
      },
      {
        text: "sin(π/2)",
        description: "Sine of π/2 radians (90 degrees)",
        explanation: "The sine of π/2 radians is 1",
      },
      {
        text: "cos(π)",
        description: "Cosine of π radians (180 degrees)",
        explanation: "The cosine of π radians is -1",
      },
      {
        text: "tan(π/4)",
        description: "Tangent of π/4 radians (45 degrees)",
        explanation: "The tangent of π/4 radians is 1",
      },
      {
        text: "sin(π/6)+cos(π/3)",
        description: "Sum of trigonometric functions",
        explanation: "sin(π/6)=0.5 and cos(π/3)=0.5, so the sum is 0.5+0.5=1",
      },
    ],
  },
  {
    name: "Logarithms",
    examples: [
      {
        text: "log(10)",
        description: "Base-10 logarithm of 10",
        explanation: "The base-10 logarithm of 10 is 1, because 10¹=10",
      },
      {
        text: "log(100)",
        description: "Base-10 logarithm of 100",
        explanation: "The base-10 logarithm of 100 is 2, because 10²=100",
      },
      {
        text: "ln(e)",
        description: "Natural logarithm of e",
        explanation: "The natural logarithm (base e) of e is 1, because e¹=e",
      },
      {
        text: "ln(e^3)",
        description: "Natural logarithm of e raised to a power",
        explanation: "The natural logarithm (base e) of e^3 is 3, because ln(e^x)=x",
      },
      {
        text: "log(10^3)",
        description: "Logarithm of a power of 10",
        explanation: "log(10^3)=3, because log(10^n)=n",
      },
    ],
  },
  {
    name: "Special Functions",
    examples: [
      {
        text: "abs(-15)",
        description: "Absolute value",
        explanation: "The absolute value of -15 is 15",
      },
      {
        text: "floor(7.8)",
        description: "Floor function (round down)",
        explanation: "The floor function rounds down to the nearest integer: floor(7.8)=7",
      },
      {
        text: "ceil(3.2)",
        description: "Ceiling function (round up)",
        explanation: "The ceiling function rounds up to the nearest integer: ceil(3.2)=4",
      },
      {
        text: "round(4.7)",
        description: "Rounding to nearest integer",
        explanation: "The round function rounds to the nearest integer: round(4.7)=5",
      },
      {
        text: "max(4,9,2)",
        description: "Maximum value",
        explanation: "Returns the largest value from the given numbers: max(4,9,2)=9",
      },
      {
        text: "min(5,2,8)",
        description: "Minimum value",
        explanation: "Returns the smallest value from the given numbers: min(5,2,8)=2",
      },
    ],
  },
  {
    name: "Complex Expressions",
    examples: [
      {
        text: "(5+3)*(10-7)/2",
        description: "Combined operations with parentheses",
        explanation: "First (5+3)=8 and (10-7)=3, then 8*3=24, finally 24/2=12",
      },
      {
        text: "sqrt(3^2+4^2)",
        description: "Pythagorean theorem calculation",
        explanation: "3^2=9, 4^2=16, so sqrt(9+16)=sqrt(25)=5",
      },
      {
        text: "sin(π/4)^2+cos(π/4)^2",
        description: "Trigonometric identity",
        explanation: "This is the Pythagorean identity: sin²(θ)+cos²(θ)=1 for any angle θ",
      },
      {
        text: "5!",
        description: "Factorial",
        explanation: "5! = 5×4×3×2×1 = 120",
      },
      {
        text: "2^3*2^2",
        description: "Product of powers with same base",
        explanation: "2^3=8, 2^2=4, so 2^3*2^2=8*4=32. Also equals 2^(3+2)=2^5=32",
      },
      {
        text: "log(100)/log(10)",
        description: "Change of base formula",
        explanation: "This is equivalent to log₁₀(100), which equals 2",
      },
    ],
  },
]
