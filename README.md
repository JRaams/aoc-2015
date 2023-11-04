# Advent of Code 2015

https://adventofcode.com/2015 by [Eric Wastl](http://was.tl/)

Solutions using TypeScript \w Deno

### 0. Progress

![Finished calendar](/assets/finished_calendar.webp)

| [01](https://adventofcode.com/2015/day/1)  | [02](https://adventofcode.com/2015/day/2)  | [03](https://adventofcode.com/2015/day/3)  | [04](https://adventofcode.com/2015/day/4)  | [05](https://adventofcode.com/2015/day/5)  | [06](https://adventofcode.com/2015/day/6)  | [07](https://adventofcode.com/2015/day/7)  |
| :----------------------------------------: | :----------------------------------------: | :----------------------------------------: | :----------------------------------------: | :----------------------------------------: | :----------------------------------------: | :----------------------------------------: |
|                    💫️💫️                    |                    💫️💫️                    |                    💫️💫️                    |                    💫️💫️                    |                    💫️💫️                    |                    💫️💫️                    |                    💫️💫️                    |
| [08](https://adventofcode.com/2015/day/8)  | [09](https://adventofcode.com/2015/day/9)  | [10](https://adventofcode.com/2015/day/10) | [11](https://adventofcode.com/2015/day/11) | [12](https://adventofcode.com/2015/day/12) | [13](https://adventofcode.com/2015/day/13) | [14](https://adventofcode.com/2015/day/14) |
|                    💫️💫️                    |                    💫️💫️                    |                    💫️💫️                    |                    💫️💫️                    |                    💫️💫️                    |                    💫️💫️                    |                    💫️💫️                    |
| [15](https://adventofcode.com/2015/day/15) | [16](https://adventofcode.com/2015/day/16) | [17](https://adventofcode.com/2015/day/17) | [18](https://adventofcode.com/2015/day/18) | [19](https://adventofcode.com/2015/day/19) | [20](https://adventofcode.com/2015/day/20) | [21](https://adventofcode.com/2015/day/21) |
|                    💫️💫️                    |                    💫️💫️                    |                    💫️💫️                    |                    💫️💫️                    |                    💫️💫️                    |                    💫️💫️                    |                    💫️💫️                    |
| [22](https://adventofcode.com/2015/day/22) | [23](https://adventofcode.com/2015/day/23) | [24](https://adventofcode.com/2015/day/24) | [25](https://adventofcode.com/2015/day/25) |                                            |                                            |                                            |
|                    💫️💫️                    |                    💫️💫️                    |                    💫️💫️                    |                    💫️💫️                    |                                            |                                            |                                            |

### 1. Requirements

- Deno https://docs.deno.com/runtime/manual/getting_started/installation

### 2. Running

Go to the folder of the desired day

`cd 01`

Run part A or B, while allowing all permissions

`deno run -A a.ts`

### 3. Testing

`cd 01`

`deno test -A .`

### 4. Debugging

Debugging in Visual Studio Code

1. Open the desired file in the editor

2. Set breakpoints

3. Press F5

### 5. Techniques used per day

1. Simple arithmetic calculations
2. Simple math formulas for calculating area and perimiter of a cube.
3. Walking an infinite grid via "><^v" instructions
4. Brute forcing MD5 hash to find one that starts with 5 or 6 times '0'
5. String operations, finding valid strings based on certain constraints
6. Applying 3 different instructions on a fixed 1000x1000 grid.
7. Bitwise logic gates (wires, gates, numeric inputs) with AND/OR/LSHIFT/RSHIFT/NOT
8. String encoding/decoding with eval and JSON.stringify
9. Ceating permutations of places to visit, and then calculating the shortest path by brute forcing TSP (Traveling Salesman Problem).
10. Look-and-say sequence, reading aloud a sentence and using that to create a new sequence.
11. Like day 5, string operations generating a valid password string based on constraints.
12. Recursively reading JSON objects
13. Like day 9, creating permutations of possible seat arrangements, then brute forcing the most optimal arrangement.
14. Moving reindeer velocity simulation
15. Nested for loops
16. Math puzzle, if statement fiesta
17. Combinations of arrays
18. Game of life (Grid where each cells state depends on its neighbours)
19. \* (De)constructing molecules with various different parts. Multiple string replacements that can each have multiple replacement options.
20. More maths, budget Riemann sequence
21. RPG Simulator, checking effectiveness of combinations of items using a fitness function
22. \* Bounded Depth First Search to find optimal solution / path with unknown endpoint or amount of nodes.
23. Making a simple 'computer' that has two static registers and a set of 6 instructions.
24. \* Splittin a list of numbers in three lists with equal sums.
25. More math operations with large numbers
