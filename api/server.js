const express = require("express");
const app = express();

app.get("/health", (req, res) => {
  res.json({ ok: true, service: "gemia-status-api", timestamp: new Date().toISOString() });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`API running on port ${port}`));