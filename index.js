// Token Management System in JavaScript

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
        const minUsage = Math.min(...this.tokens.map(token => token.usageCount));
        const leastUsedTokens = this.tokens.filter(token => token.usageCount === minUsage);
        const selectedToken = leastUsedTokens[Math.floor(Math.random() * leastUsedTokens.length)];
        
        selectedToken.usageCount++;
        return selectedToken;
    }

    // 2. Reseting all token along with usage count
    resetUsageCounts() {
        this.tokens.forEach(token => token.usageCount = 0);
        this.lastResetTime = Date.now();
    }

    // 3. Reseting token once it pass 24hrs
    checkAndReset() {
        const currentTime = Date.now();
        const hoursSinceLastReset = (currentTime - this.lastResetTime) / (1000 * 60 * 60);
        if (hoursSinceLastReset >= 24) {
            this.resetUsageCounts();
        }
    }

    // Simulate token operations
    simulateOperations(numOperations, timeStep = null) {
        for (let i = 0; i < numOperations; i++) {
            this.selectToken();

            if (timeStep && (i + 1) % timeStep === 0) {
                this.resetUsageCounts();
            }
        }
    }

    displayResults() {
        console.log("Token Usage Counts:");
        this.tokens.forEach(token => console.log(`${token.id}: ${token.usageCount} uses`));

        const minUsage = Math.min(...this.tokens.map(token => token.usageCount));
        const leastUsedTokens = this.tokens.filter(token => token.usageCount === minUsage);

        console.log("\nLeast Used Token(s):");
        leastUsedTokens.forEach(token => console.log(`${token.id}: ${token.usageCount} use(s)`));
    }
}

const numTokens = 10;
const tokenManager = new TokenManager(numTokens);

const numOperations = 5;
const timeStep = null;

tokenManager.simulateOperations(numOperations, timeStep);
tokenManager.displayResults();



