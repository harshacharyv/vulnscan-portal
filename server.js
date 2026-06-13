const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Secure Auth API Route Endpoint
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  const SECURE_EMAIL = "admin@gmail.com";
  const SECURE_PASSWORD = "admin";

  if (email === SECURE_EMAIL && password === SECURE_PASSWORD) {
    res
      .status(200)
      .json({ success: true, message: "Authentication successful!" });
  } else {
    res.status(401).json({
      success: false,
      message: "Invalid email or password. Try again!",
    });
  }
});

// NEW: Vulnerability Scanning Process Automation Simulator Mock API Endpoint
app.post("/api/scan", (req, res) => {
  const { url, type } = req.body;

  console.log(
    `[SCANNER LOG] Initializing standard operational payload array execution targeting: ${url} (Mode: ${type})`,
  );

  // Mock logs payload configuration stream matching execution parameters
  const processLogs = [
    `[INFO] Spawning network inspection subprocess threads framework...`,
    `[INFO] Checking DNS registers records mapping for: ${url}`,
    `[SUCCESS] Resolution successful. Resolving target core hosting structures...`,
    `[NMAP_ENGINE] Launching stealth syn scan profile flags (-sS -T4 -p-)...`,
    `[NMAP_ENGINE] Port 80/tcp OPEN (Service: HTTP server engine backend)`,
    `[NMAP_ENGINE] Port 443/tcp OPEN (Service: OpenSSL runtime architecture)`,
    `[NIKTO_CORE] Auditing web application structural metadata traces...`,
    `[WARNING] Sensitive server banner exposed: Apache/2.4.41 (Ubuntu Enterprise Build)`,
    `[XSS_AUDITOR] Fuzzing input injection entry arrays endpoints...`,
    `[SQLI_AUDITOR] Analyzing error-based boolean conditional response reflections...`,
    `[ALERT] Potential vulnerability structural anomalies discovered inside target frame query sets!`,
    `[SUCCESS] Vulnerability assessment pipelines execution finished. Compiling binary footprint metrics logs state successfully.`,
  ];

  // Return the logs stream back
  res
    .status(200)
    .json({ success: true, target: url, mode: type, logs: processLogs });
});

app.listen(PORT, () => {
  console.log(
    `[SERVER] Backend security service running on http://localhost:${PORT}`,
  );
});
