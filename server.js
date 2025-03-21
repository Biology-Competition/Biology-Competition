const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 8000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Path to the JSON file where submissions are stored
const submissionsFile = path.join(__dirname, 'submissions.json');

// Helper function to ensure the file exists
function ensureFileExists(filePath) {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, '[]', 'utf8'); // Initialize with an empty array
  }
}

// Ensure the file exists before reading/writing
ensureFileExists(submissionsFile);

// Helper function to read submissions from the JSON file
function readSubmissions() {
  try {
    const data = fs.readFileSync(submissionsFile, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading submissions:', error);
    return [];
  }
}

// Helper function to write submissions to the JSON file
function writeSubmissions(submissions) {
  try {
    fs.writeFileSync(submissionsFile, JSON.stringify(submissions, null, 2), 'utf8');
  } catch (error) {
    console.error('Error writing submissions:', error);
  }
}

// In-memory events log (if you want to log events similarly, you could add file storage here as well)
let eventsLog = [];

// Endpoint to submit exam responses
app.post('/submit-responses', (req, res) => {
  const submission = {
    timestamp: new Date().toISOString(),
    responses: req.body
  };

  // Read the current submissions, append the new one, and write back to the file
  const submissions = readSubmissions();
  submissions.push(submission);
  writeSubmissions(submissions);

  console.log('Submission Received:', submission);
  res.json({ status: 'success', data: submission });
});

// Endpoint to log events (e.g., tab-switching, cursor exit)
app.post('/log-event', (req, res) => {
  const event = {
    timestamp: new Date().toISOString(),
    eventType: req.body.eventType,
    additionalData: req.body.additionalData || {}
  };

  eventsLog.push(event);
  console.log('Event Logged:', event);
  res.json({ status: 'success', data: event });
});

// Optional endpoint to view logs
app.get('/logs', (req, res) => {
  res.json({ submissions: readSubmissions(), eventsLog });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
