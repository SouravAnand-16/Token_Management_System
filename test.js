const readline = require('readline');

class Token {
    constructor(id) {
        this.id = id;
        this.usageCount = 0;
    }
}

class TokenManager {
    constructor(numTokens) {
        this.tokens = [];
        this.lastResetTime = Date.now(); 
        for (let i = 1; i <= numTokens; i++) {
            this.tokens.push(new Token(`Token ${i}`));
        }
    }

    // 1. Token Selection with the least usage count
    selectToken() {
        this.checkAndReset();

        let minUsage = Infinity;
        let leastUsedTokens = [];

        for (const token of this.tokens) {
            if (token.usageCount < minUsage) {
                minUsage = token.usageCount;
                leastUsedTokens = [token];
            } else if (token.usageCount === minUsage) {
                leastUsedTokens.push(token);
            }
        }

        const selectedToken = leastUsedTokens[Math.floor(Math.random() * leastUsedTokens.length)];
        selectedToken.usageCount++;
        return selectedToken;
    }

    // 2. Token reset along with usage count
    resetUsageCounts() {
        for (const token of this.tokens) {
            token.usageCount = 0;
        }
        this.lastResetTime = Date.now();
    }

    // 3. Token reset after 24hrs
    checkAndReset() {
        const currentTime = Date.now();
        const hoursSinceLastReset = (currentTime - this.lastResetTime) / (1000 * 60 * 60);
        if (hoursSinceLastReset >= 24) {
            this.resetUsageCounts();
        }
    }

    // function to simulate token
    simulateOperations(numOperations, resetInterval = null) {
        for (let i = 0; i < numOperations; i++) {
            this.selectToken();

            if (resetInterval && (i + 1) % resetInterval === 0) {
                this.resetUsageCounts();
            }
        }
    }

    displayResults() {
        for (const token of this.tokens) {
            console.log(`${token.id}: ${token.usageCount} uses`);
        }

        const minUsage = Math.min(...this.tokens.map(token => token.usageCount));
        const leastUsedTokens = this.tokens.filter(token => token.usageCount === minUsage);

        console.log("\nLeast Used Token(s):");
        for (const token of leastUsedTokens) {
            console.log(`${token.id}: ${token.usageCount} use(s)`);
        }
    }
}

// const numTokens = 10;
// const tokenManager = new TokenManager(numTokens);

// const numOperations = 4;
// const resetInterval = null;

// tokenManager.simulateOperations(numOperations, resetInterval);
// tokenManager.displayResults();

const numTokens = 10; 
const args = process.argv.slice(2);

if (args.length < 1) {
    console.error("Please provide the number of operations as a command-line argument.");
    process.exit(1);
}

const numOperations = parseInt(args[0], 10);
if (isNaN(numOperations) || numOperations <= 0) {
    console.error("Invalid number of operations. Please provide a positive integer.");
    process.exit(1);
}

console.log(`Simulation Time: ${numOperations} operations`);

const tokenManager = new TokenManager(numTokens);
tokenManager.simulateOperations(numOperations);
tokenManager.displayResults();



