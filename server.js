const express = require('express');

const app = express();

const port = process.env.PORT || 7500;

app.listen(port, () => console.log(`Server is up on port ${port}`));
