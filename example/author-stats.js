// Dependencies
const GitStats = require("../lib");

// Create the GitStats instance
const g1 = new GitStats();

console.log("Author Statistics Examples:\n");

// Display author statistics (both additions and deletions)
console.log("1. Author statistics (additions + deletions):");
g1.authorsStatsPie({
    repo: process.cwd(),
    mode: "both"
}, function (err, data) {
    console.log(err || data);
    console.log("\n" + "=".repeat(50) + "\n");

    // Display only additions
    console.log("2. Author statistics (additions only):");
    g1.authorsStatsPie({
        repo: process.cwd(),
        mode: "additions"
    }, function (err, data) {
        console.log(err || data);
        console.log("\n" + "=".repeat(50) + "\n");

        // Display only deletions
        console.log("3. Author statistics (deletions only):");
        g1.authorsStatsPie({
            repo: process.cwd(),
            mode: "deletions"
        }, function (err, data) {
            console.log(err || data);
            console.log("\n" + "=".repeat(50) + "\n");

            // Display raw JSON data
            console.log("4. Raw JSON data:");
            g1.authorsStats({
                repo: process.cwd(),
                mode: "both"
            }, function (err, data) {
                console.log(err || JSON.stringify(data, null, 2));
            });
        });
    });
});