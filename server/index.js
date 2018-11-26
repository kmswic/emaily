const express = require("express");
require("./services/passport");
const app = express();

require("./routes/authRoutes")(app);

const PORT = process.env.port || 5000;
app.listen(PORT);
