# Token Management System

## Overview
The Token Management System is a JavaScript-based implementation designed to manage a pool of tokens efficiently. The system tracks token usage, resets usage counts every 24 hours, and selects tokens based on their usage counts.

This project includes:
1. Initialization of tokens with unique identifiers.
2. Selection of tokens with the least usage count.
3. Periodic reset of usage counts every 24 hours.
4. Simulation of token usage operations.
5. Display of usage statistics and identification of the least-used tokens.

## Features
- **Token Initialization**: Creates a specified number of tokens, each starting with a usage count of zero.
- **Efficient Reset**: Resets all token usage counts every 24 hours without affecting performance.
- **Simulation**: Allows users to simulate a specified number of token usage operations.
- **Randomized Selection**: Randomly selects among tokens with equal usage counts to ensure fair usage.


## Running the Solution
1. Open a terminal in the project directory.
2. Run the script using Node.js:
   ```bash
   node test.js <number of operations>
   ```
3. Example:
   ```
   node test.js 2
   2 refer to the number of operations to be simulate
   ```

## Output
The system will display the following:
- Usage count for each token.
- The least-used tokens and their usage counts.

### Example Output
```
Simulation time: 10
Token Usage Counts:
Token 1: 2 uses
Token 2: 1 use
Token 3: 1 use
...
Token 1000: 0 uses

Least Used Token(s):
Token 2: 1 use
Token 3: 1 use
Token 1000: 0 uses
```

## Implementation Details
### Code Structure
1. **`Token` Class**:
   - Represents an individual token.
   - Tracks the token's identifier and usage count.

2. **`TokenManager` Class**:
   - Manages the pool of tokens.
   - Includes methods for selecting tokens, resetting usage counts, and simulating operations.

3. **`selectToken` Method**:
   - Chooses the token with the least usage count.
   - Randomly selects from ties.

4. **`checkAndReset` Method**:
   - Checks if 24 hours have passed since the last reset.
   - Resets usage counts when necessary.

### Key Concepts
- **Randomized Selection**: Ensures fairness when multiple tokens have the same usage count.
- **Efficient Reset**: Minimizes performance impact by resetting usage counts only when necessary.

## Testing
You can simulate operations for various scenarios by:
1. Specifying different numbers of tokens (`numTokens`).
2. Running simulations with different operation counts.
3. Adjusting the time step in `simulateOperations` for testing resets.


## Contact
For questions or suggestions, please contact.

