/**
 * Required External Modules
 */
const express = require("express")
const path = require("path")

/**
 * App Variables
 */
const app = express();
const port = process.env.PORT || 8080

/**
 *  App Configuration
 */
app.use(express.static('views'));

/**
 * Routes Definitions
 */
app.get("", (req, res) => {
    res.redirect("index.html");
});

/**
 * Server Activation
 */
app.listen(port, () => {
    console.log(`Listening on port ${port}"`);
});
