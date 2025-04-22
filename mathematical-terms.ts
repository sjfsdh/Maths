export const mathematicalTerms = [
  {
    category: "Arithmetic & Basic Algebra",
    terms: [
      {
        term: "Addition",
        definition: "The operation of combining two numbers into a single sum.",
        formula: "a + b",
        example: "5 + 3 = 8",
      },
      {
        term: "Subtraction",
        definition: "The operation of finding the difference between two numbers.",
        formula: "a - b",
        example: "9 - 4 = 5",
      },
      {
        term: "Multiplication",
        definition: "The operation of scaling one number by another.",
        formula: "a × b or a * b",
        example: "6 × 7 = 42",
      },
      {
        term: "Division",
        definition: "The operation of determining how many times one number contains another.",
        formula: "a ÷ b or a / b",
        example: "20 ÷ 4 = 5",
      },
      {
        term: "Exponentiation",
        definition: "The operation of raising a base to a power.",
        formula: "a^b or a**b",
        example: "2^3 = 8",
      },
      {
        term: "Square Root",
        definition: "A value that, when multiplied by itself, gives the original number.",
        formula: "√a or sqrt(a)",
        example: "√16 = 4",
      },
      {
        term: "Cube Root",
        definition: "A value that, when multiplied by itself three times, gives the original number.",
        formula: "∛a or cbrt(a)",
        example: "∛27 = 3",
      },
      {
        term: "Absolute Value",
        definition: "The distance of a number from zero on the number line.",
        formula: "|a| or abs(a)",
        example: "|−5| = 5",
      },
      {
        term: "Factorial",
        definition: "The product of all positive integers less than or equal to a given number.",
        formula: "n!",
        example: "5! = 5 × 4 × 3 × 2 × 1 = 120",
      },
      {
        term: "Modulo",
        definition: "The remainder when one number is divided by another.",
        formula: "a mod b or a % b",
        example: "17 mod 5 = 2",
      },
      {
        term: "PEMDAS",
        definition: "Order of operations: Parentheses, Exponents, Multiplication/Division, Addition/Subtraction.",
        example: "2 + 3 × 4 = 2 + 12 = 14",
      },
      {
        term: "Variable",
        definition: "A symbol that represents an unknown value or a value that can change.",
        example: "In y = 2x + 3, x is a variable",
      },
      {
        term: "Coefficient",
        definition: "A number or symbol multiplied with a variable or an unknown quantity.",
        example: "In 5x, 5 is the coefficient",
      },
      {
        term: "Term",
        definition: "A single number or variable, or numbers and variables multiplied together.",
        example: "In 3x² + 4y - 7, the terms are 3x², 4y, and -7",
      },
      {
        term: "Expression",
        definition: "A combination of numbers, variables, and operations that represents a value.",
        example: "2x + 3y - 5",
      },
      {
        term: "Equation",
        definition: "A statement that asserts the equality of two expressions.",
        formula: "a = b",
        example: "x + 5 = 10",
      },
      {
        term: "Inequality",
        definition: "A relation that holds between two values when they are different.",
        formula: "a < b, a > b, a ≤ b, a ≥ b",
        example: "x + 3 > 7",
      },
      {
        term: "Linear Equation",
        definition:
          "An equation where each term is either a constant or the product of a constant and a single variable.",
        formula: "ax + b = 0",
        example: "2x + 3 = 7",
      },
      {
        term: "Quadratic Equation",
        definition: "An equation involving a single variable where the highest exponent of the variable is 2.",
        formula: "ax² + bx + c = 0",
        example: "x² - 5x + 6 = 0",
      },
      {
        term: "Polynomial",
        definition:
          "An expression consisting of variables and coefficients using only addition, subtraction, and multiplication.",
        example: "3x⁴ + 2x² - 5x + 1",
      },
    ],
  },
  {
    category: "Calculus",
    terms: [
      {
        term: "Limit",
        definition: "The value that a function approaches as the input approaches some value.",
        formula: "lim(x→a) f(x) = L",
        example: "lim(x→0) sin(x)/x = 1",
      },
      {
        term: "Derivative",
        definition: "The rate at which a function changes at a particular point.",
        formula: "f'(x) or df/dx",
        example: "If f(x) = x², then f'(x) = 2x",
      },
      {
        term: "Integral",
        definition: "The accumulation of quantities, commonly the area under a curve.",
        formula: "∫f(x)dx",
        example: "∫x²dx = x³/3 + C",
      },
      {
        term: "Differential Equation",
        definition: "An equation that relates a function with its derivatives.",
        formula: "dy/dx = f(x,y)",
        example: "dy/dx = 2x",
      },
      {
        term: "Chain Rule",
        definition: "A formula for computing the derivative of a composite function.",
        formula: "(f∘g)'(x) = f'(g(x))·g'(x)",
        example: "If f(x) = sin(x²), then f'(x) = 2x·cos(x²)",
      },
      {
        term: "Product Rule",
        definition: "A formula for finding the derivative of a product of two functions.",
        formula: "(f·g)' = f'·g + f·g'",
        example: "If f(x) = x·sin(x), then f'(x) = sin(x) + x·cos(x)",
      },
      {
        term: "Quotient Rule",
        definition: "A formula for finding the derivative of a quotient of two functions.",
        formula: "(f/g)' = (f'·g - f·g')/g²",
        example: "If f(x) = sin(x)/x, then f'(x) = (cos(x)·x - sin(x))/x²",
      },
      {
        term: "Fundamental Theorem of Calculus",
        definition: "Establishes the connection between differentiation and integration.",
        formula: "∫[a,b] f(x)dx = F(b) - F(a), where F'(x) = f(x)",
        example: "∫[0,1] 2x dx = x²|[0,1] = 1 - 0 = 1",
      },
      {
        term: "Partial Derivative",
        definition:
          "A derivative of a function of several variables with respect to one variable, holding others constant.",
        formula: "∂f/∂x",
        example: "If f(x,y) = x² + xy, then ∂f/∂x = 2x + y",
      },
      {
        term: "Multiple Integral",
        definition: "An integral of a function of more than one variable.",
        formula: "∫∫f(x,y)dxdy",
        example: "∫∫[0,1]×[0,1] xy dxdy = 1/4",
      },
      {
        term: "Taylor Series",
        definition:
          "A representation of a function as an infinite sum of terms calculated from the values of its derivatives at a single point.",
        formula: "f(x) = f(a) + f'(a)(x-a) + f''(a)(x-a)²/2! + ...",
        example: "sin(x) = x - x³/3! + x⁵/5! - ...",
      },
      {
        term: "L'Hôpital's Rule",
        definition:
          "A rule for evaluating limits of indeterminate forms by taking the derivative of numerator and denominator.",
        formula: "lim(x→a) f(x)/g(x) = lim(x→a) f'(x)/g'(x)",
        example: "lim(x→0) sin(x)/x = lim(x→0) cos(x)/1 = 1",
      },
    ],
  },
  {
    category: "Trigonometry",
    terms: [
      {
        term: "Sine",
        definition: "The ratio of the opposite side to the hypotenuse in a right triangle.",
        formula: "sin(θ) = opposite/hypotenuse",
        example: "sin(30°) = 0.5",
      },
      {
        term: "Cosine",
        definition: "The ratio of the adjacent side to the hypotenuse in a right triangle.",
        formula: "cos(θ) = adjacent/hypotenuse",
        example: "cos(60°) = 0.5",
      },
      {
        term: "Tangent",
        definition: "The ratio of the opposite side to the adjacent side in a right triangle.",
        formula: "tan(θ) = opposite/adjacent = sin(θ)/cos(θ)",
        example: "tan(45°) = 1",
      },
      {
        term: "Cotangent",
        definition: "The reciprocal of the tangent.",
        formula: "cot(θ) = 1/tan(θ) = cos(θ)/sin(θ)",
        example: "cot(45°) = 1",
      },
      {
        term: "Secant",
        definition: "The reciprocal of the cosine.",
        formula: "sec(θ) = 1/cos(θ)",
        example: "sec(60°) = 2",
      },
      {
        term: "Cosecant",
        definition: "The reciprocal of the sine.",
        formula: "csc(θ) = 1/sin(θ)",
        example: "csc(30°) = 2",
      },
      {
        term: "Pythagorean Identity",
        definition: "The fundamental trigonometric identity relating sine and cosine.",
        formula: "sin²(θ) + cos²(θ) = 1",
        example: "sin²(45°) + cos²(45°) = 0.5² + 0.5² = 0.5 + 0.5 = 1",
      },
      {
        term: "Inverse Sine",
        definition: "The inverse function of sine, giving the angle whose sine is a given value.",
        formula: "arcsin(x) or sin⁻¹(x)",
        example: "arcsin(0.5) = 30°",
      },
      {
        term: "Inverse Cosine",
        definition: "The inverse function of cosine, giving the angle whose cosine is a given value.",
        formula: "arccos(x) or cos⁻¹(x)",
        example: "arccos(0.5) = 60°",
      },
      {
        term: "Inverse Tangent",
        definition: "The inverse function of tangent, giving the angle whose tangent is a given value.",
        formula: "arctan(x) or tan⁻¹(x)",
        example: "arctan(1) = 45°",
      },
      {
        term: "Radian",
        definition: "A unit of angle measure, where 2π radians equals 360 degrees.",
        formula: "1 radian = 180°/π ≈ 57.3°",
        example: "π/4 radians = 45°",
      },
      {
        term: "Law of Sines",
        definition: "A relationship between the sides and angles of a triangle.",
        formula: "a/sin(A) = b/sin(B) = c/sin(C)",
        example: "In a triangle with sides a, b, c and opposite angles A, B, C",
      },
      {
        term: "Law of Cosines",
        definition: "A generalization of the Pythagorean theorem to any triangle.",
        formula: "c² = a² + b² - 2ab·cos(C)",
        example: "In a triangle with sides a, b, c and angle C opposite to side c",
      },
    ],
  },
  {
    category: "Statistics & Probability",
    terms: [
      {
        term: "Mean",
        definition: "The average of a set of numbers.",
        formula: "μ = (x₁ + x₂ + ... + xₙ)/n",
        example: "Mean of [2, 4, 6, 8] is (2+4+6+8)/4 = 5",
      },
      {
        term: "Median",
        definition: "The middle value of a sorted set of numbers.",
        example: "Median of [2, 4, 6, 8] is (4+6)/2 = 5",
      },
      {
        term: "Mode",
        definition: "The most frequently occurring value in a set of numbers.",
        example: "Mode of [2, 4, 4, 6, 8] is 4",
      },
      {
        term: "Variance",
        definition: "A measure of how far a set of numbers is spread out from their mean.",
        formula: "σ² = Σ(xᵢ - μ)²/n",
        example: "Variance of [2, 4, 6, 8] is ((2-5)² + (4-5)² + (6-5)² + (8-5)²)/4 = 5",
      },
      {
        term: "Standard Deviation",
        definition: "The square root of the variance, measuring the amount of variation of a set of values.",
        formula: "σ = √(σ²)",
        example: "Standard deviation of [2, 4, 6, 8] is √5 ≈ 2.24",
      },
      {
        term: "Probability",
        definition: "A measure of the likelihood of an event occurring.",
        formula: "P(A) = Number of favorable outcomes / Total number of possible outcomes",
        example: "Probability of rolling a 6 on a die is 1/6",
      },
      {
        term: "Conditional Probability",
        definition: "The probability of an event occurring given that another event has occurred.",
        formula: "P(A|B) = P(A ∩ B) / P(B)",
        example: "P(Card is a King | Card is a face card) = 4/12 = 1/3",
      },
      {
        term: "Bayes' Theorem",
        definition: "A formula for calculating conditional probabilities.",
        formula: "P(A|B) = P(B|A) · P(A) / P(B)",
        example: "Used in medical testing to find probability of disease given positive test",
      },
      {
        term: "Normal Distribution",
        definition: "A continuous probability distribution that is symmetric about the mean.",
        formula: "f(x) = (1/(σ√(2π))) · e^(-(x-μ)²/(2σ²))",
        example: "IQ scores follow approximately a normal distribution",
      },
      {
        term: "Z-Score",
        definition: "The number of standard deviations by which a value differs from the mean.",
        formula: "z = (x - μ) / σ",
        example: "If x = 70, μ = 60, σ = 5, then z = (70-60)/5 = 2",
      },
      {
        term: "Correlation Coefficient",
        definition: "A measure of the strength and direction of the linear relationship between two variables.",
        formula: "r = Σ((x - μₓ)(y - μᵧ)) / (nσₓσᵧ)",
        example: "r = 1 indicates perfect positive correlation",
      },
      {
        term: "Regression",
        definition: "A statistical method for estimating the relationships among variables.",
        formula: "y = mx + b (linear regression)",
        example: "Predicting house prices based on square footage",
      },
    ],
  },
  {
    category: "Number Theory",
    terms: [
      {
        term: "Prime Number",
        definition: "A natural number greater than 1 that is not a product of two smaller natural numbers.",
        example: "2, 3, 5, 7, 11, 13, 17, 19, ...",
      },
      {
        term: "Composite Number",
        definition: "A natural number greater than 1 that is not prime.",
        example: "4, 6, 8, 9, 10, 12, ...",
      },
      {
        term: "Greatest Common Divisor (GCD)",
        definition: "The largest positive integer that divides two or more integers without a remainder.",
        formula: "gcd(a, b)",
        example: "gcd(12, 18) = 6",
      },
      {
        term: "Least Common Multiple (LCM)",
        definition: "The smallest positive integer that is divisible by two or more integers.",
        formula: "lcm(a, b) = (a × b) / gcd(a, b)",
        example: "lcm(4, 6) = 12",
      },
      {
        term: "Euclidean Algorithm",
        definition: "An efficient method for computing the greatest common divisor of two integers.",
        example: "To find gcd(48, 18): 48 = 18 × 2 + 12, 18 = 12 × 1 + 6, 12 = 6 × 2 + 0, so gcd(48, 18) = 6",
      },
      {
        term: "Fermat's Little Theorem",
        definition: "If p is a prime number, then for any integer a, the number a^p - a is an integer multiple of p.",
        formula: "a^p ≡ a (mod p)",
        example: "For p = 5, a = 2: 2^5 = 32, 32 ≡ 2 (mod 5)",
      },
      {
        term: "Euler's Totient Function",
        definition: "Counts the positive integers up to a given integer n that are relatively prime to n.",
        formula: "φ(n)",
        example: "φ(10) = 4, as 1, 3, 7, 9 are relatively prime to 10",
      },
      {
        term: "Modular Arithmetic",
        definition:
          "A system of arithmetic for integers, where numbers wrap around after reaching a certain value (the modulus).",
        formula: "a ≡ b (mod n) means a and b have the same remainder when divided by n",
        example: "17 ≡ 5 (mod 12)",
      },
    ],
  },
  {
    category: "Linear Algebra",
    terms: [
      {
        term: "Vector",
        definition: "A quantity having direction and magnitude, often represented as an ordered list of numbers.",
        example: "v = [3, 4, 5]",
      },
      {
        term: "Matrix",
        definition: "A rectangular array of numbers, symbols, or expressions, arranged in rows and columns.",
        example: "A = [[1, 2], [3, 4]]",
      },
      {
        term: "Determinant",
        definition: "A scalar value that can be computed from the elements of a square matrix.",
        formula: "det(A) or |A|",
        example: "For A = [[a, b], [c, d]], det(A) = ad - bc",
      },
      {
        term: "Eigenvalue",
        definition:
          "A scalar associated with a linear system of equations that is sometimes also known as a characteristic value.",
        formula: "Av = λv",
        example: "If A = [[4, 1], [2, 3]], then λ = 5 and λ = 2 are eigenvalues",
      },
      {
        term: "Eigenvector",
        definition:
          "A non-zero vector that changes only by a scalar factor when a linear transformation is applied to it.",
        formula: "Av = λv",
        example: "If A = [[4, 1], [2, 3]], then v = [1, 1] is an eigenvector for λ = 5",
      },
      {
        term: "Dot Product",
        definition: "A scalar product of two vectors, calculated by multiplying corresponding entries and summing.",
        formula: "a·b = a₁b₁ + a₂b₂ + ... + aₙbₙ",
        example: "[1, 2, 3]·[4, 5, 6] = 1×4 + 2×5 + 3×6 = 32",
      },
      {
        term: "Cross Product",
        definition:
          "A binary operation on two vectors in three-dimensional space, resulting in a vector perpendicular to both.",
        formula: "a×b = [a₂b₃-a₃b₂, a₃b₁-a₁b₃, a₁b₂-a₂b₁]",
        example: "[1, 0, 0]×[0, 1, 0] = [0, 0, 1]",
      },
      {
        term: "Matrix Multiplication",
        definition: "A binary operation that produces a matrix from two matrices.",
        example: "[[1, 2], [3, 4]] × [[5, 6], [7, 8]] = [[19, 22], [43, 50]]",
      },
      {
        term: "Inverse Matrix",
        definition: "A matrix that, when multiplied by the original matrix, yields the identity matrix.",
        formula: "A·A⁻¹ = A⁻¹·A = I",
        example: "If A = [[1, 2], [3, 4]], then A⁻¹ = [[-2, 1], [1.5, -0.5]]",
      },
      {
        term: "Transpose",
        definition: "A matrix formed by turning rows into columns and columns into rows.",
        formula: "(A^T)ᵢⱼ = Aⱼᵢ",
        example: "If A = [[1, 2], [3, 4]], then A^T = [[1, 3], [2, 4]]",
      },
    ],
  },
  {
    category: "Discrete Mathematics",
    terms: [
      {
        term: "Set",
        definition: "A collection of distinct objects, considered as an object in its own right.",
        example: "A = {1, 2, 3, 4}",
      },
      {
        term: "Subset",
        definition: "A set A is a subset of a set B if every element of A is also an element of B.",
        formula: "A ⊆ B",
        example: "{1, 2} ⊆ {1, 2, 3, 4}",
      },
      {
        term: "Union",
        definition: "The set of all elements that are in either set or in both sets.",
        formula: "A ∪ B",
        example: "{1, 2} ∪ {2, 3} = {1, 2, 3}",
      },
      {
        term: "Intersection",
        definition: "The set of all elements that are in both sets.",
        formula: "A ∩ B",
        example: "{1, 2, 3} ∩ {2, 3, 4} = {2, 3}",
      },
      {
        term: "Complement",
        definition: "The set of all elements in the universal set that are not in a given set.",
        formula: "A'",
        example: "If U = {1, 2, 3, 4, 5} and A = {1, 3, 5}, then A' = {2, 4}",
      },
      {
        term: "Cartesian Product",
        definition:
          "The set of all ordered pairs where the first element is from the first set and the second element is from the second set.",
        formula: "A × B",
        example: "{1, 2} × {a, b} = {(1, a), (1, b), (2, a), (2, b)}",
      },
      {
        term: "Graph",
        definition: "A structure consisting of a set of vertices and a set of edges connecting pairs of vertices.",
        example: "G = (V, E) where V = {1, 2, 3} and E = {(1, 2), (2, 3)}",
      },
      {
        term: "Tree",
        definition: "A connected graph with no cycles.",
        example: "A binary tree with nodes 1, 2, 3 where 1 is the root and 2, 3 are children",
      },
      {
        term: "Permutation",
        definition: "An arrangement of objects in a specific order.",
        formula: "P(n, r) = n! / (n - r)!",
        example: "P(4, 2) = 4! / (4 - 2)! = 24 / 2 = 12",
      },
      {
        term: "Combination",
        definition: "A selection of objects where the order does not matter.",
        formula: "C(n, r) = n! / (r! × (n - r)!)",
        example: "C(4, 2) = 4! / (2! × (4 - 2)!) = 24 / (2 × 2) = 6",
      },
      {
        term: "Recurrence Relation",
        definition: "An equation that recursively defines a sequence.",
        example: "Fibonacci sequence: F(n) = F(n-1) + F(n-2) with F(0) = 0, F(1) = 1",
      },
    ],
  },
  {
    category: "Mathematical Logic",
    terms: [
      {
        term: "Proposition",
        definition: "A statement that is either true or false, but not both.",
        example: "'The sky is blue' is a proposition",
      },
      {
        term: "Logical Connectives",
        definition: "Symbols or words used to connect propositions.",
        example: "AND (∧), OR (∨), NOT (¬), IMPLIES (→), EQUIVALENT (↔)",
      },
      {
        term: "Truth Table",
        definition:
          "A table showing the truth values of a compound proposition for all possible combinations of truth values of its components.",
        example: "Truth table for p ∧ q shows all combinations of true/false for p and q",
      },
      {
        term: "Tautology",
        definition: "A proposition that is always true, regardless of the truth values of its components.",
        example: "p ∨ ¬p is a tautology",
      },
      {
        term: "Contradiction",
        definition: "A proposition that is always false, regardless of the truth values of its components.",
        example: "p ∧ ¬p is a contradiction",
      },
      {
        term: "Logical Equivalence",
        definition:
          "Two propositions are logically equivalent if they have the same truth value for all possible truth values of their components.",
        formula: "p ↔ q",
        example: "p → q is logically equivalent to ¬p ∨ q",
      },
      {
        term: "Quantifier",
        definition:
          "A symbol that specifies the quantity of instances in the domain of discourse that satisfy an open formula.",
        example: "Universal quantifier (∀), Existential quantifier (∃)",
      },
      {
        term: "Predicate",
        definition:
          "A statement containing variables that becomes a proposition when the variables are assigned values.",
        example: "P(x): 'x is a prime number'",
      },
    ],
  },
  {
    category: "Geometry",
    terms: [
      {
        term: "Point",
        definition: "A location in space with no size or dimension.",
        example: "A point is represented by coordinates, like (3, 4)",
      },
      {
        term: "Line",
        definition: "A straight one-dimensional figure with no thickness and extending infinitely in both directions.",
        formula: "y = mx + b (slope-intercept form)",
        example: "y = 2x + 3",
      },
      {
        term: "Plane",
        definition: "A flat, two-dimensional surface that extends infinitely.",
        formula: "ax + by + cz + d = 0",
        example: "2x + 3y + 4z + 5 = 0",
      },
      {
        term: "Angle",
        definition: "A figure formed by two rays sharing a common endpoint.",
        example: "An angle of 45° or π/4 radians",
      },
      {
        term: "Triangle",
        definition: "A polygon with three edges and three vertices.",
        formula: "Area = (1/2) × base × height",
        example: "A triangle with base 4 and height 3 has area 6",
      },
      {
        term: "Circle",
        definition: "A set of all points in a plane that are at a fixed distance from a fixed point.",
        formula: "Area = πr², Circumference = 2πr",
        example: "A circle with radius 2 has area 4π and circumference 4π",
      },
      {
        term: "Sphere",
        definition: "A set of all points in three-dimensional space that are at a fixed distance from a fixed point.",
        formula: "Volume = (4/3)πr³, Surface Area = 4πr²",
        example: "A sphere with radius 3 has volume 36π and surface area 36π",
      },
      {
        term: "Pythagorean Theorem",
        definition:
          "In a right triangle, the square of the length of the hypotenuse equals the sum of the squares of the lengths of the other two sides.",
        formula: "a² + b² = c²",
        example: "If a = 3 and b = 4, then c = 5",
      },
      {
        term: "Coordinate System",
        definition: "A system that uses one or more numbers to uniquely determine the position of a point.",
        example: "Cartesian coordinates (x, y) or polar coordinates (r, θ)",
      },
      {
        term: "Transformation",
        definition: "A function that changes the position, size, or shape of a geometric figure.",
        example: "Translation, rotation, reflection, scaling",
      },
    ],
  },
  {
    category: "Complex Numbers",
    terms: [
      {
        term: "Complex Number",
        definition:
          "A number that can be expressed in the form a + bi, where a and b are real numbers and i is the imaginary unit.",
        formula: "z = a + bi",
        example: "3 + 4i",
      },
      {
        term: "Imaginary Unit",
        definition: "A number whose square is -1.",
        formula: "i² = -1",
        example: "i is the imaginary unit",
      },
      {
        term: "Real Part",
        definition: "The real number part of a complex number.",
        formula: "Re(a + bi) = a",
        example: "Re(3 + 4i) = 3",
      },
      {
        term: "Imaginary Part",
        definition: "The coefficient of the imaginary unit in a complex number.",
        formula: "Im(a + bi) = b",
        example: "Im(3 + 4i) = 4",
      },
      {
        term: "Complex Conjugate",
        definition: "The complex number with the same real part but opposite imaginary part.",
        formula: "(a + bi)* = a - bi",
        example: "(3 + 4i)* = 3 - 4i",
      },
      {
        term: "Modulus",
        definition: "The distance from the origin to a complex number in the complex plane.",
        formula: "|a + bi| = √(a² + b²)",
        example: "|3 + 4i| = √(3² + 4²) = 5",
      },
      {
        term: "Argument",
        definition:
          "The angle in the complex plane between the positive real axis and the line joining the origin to the complex number.",
        formula: "arg(a + bi) = tan⁻¹(b/a)",
        example: "arg(3 + 4i) = tan⁻¹(4/3) ≈ 53.1°",
      },
      {
        term: "Euler's Formula",
        definition:
          "A mathematical formula that establishes the relationship between trigonometric functions and the complex exponential function.",
        formula: "e^(ix) = cos(x) + i·sin(x)",
        example: "e^(iπ) = -1",
      },
    ],
  },
]
