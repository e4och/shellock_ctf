const { spawn } = require('child_process');
const path = require('path');

const challenges = [
  // Cookie challenges
  'Cookie/challenge-1/app.js',
  'Cookie/challenge-2/app.js',
  'Cookie/challenge-3/app.js',
  'Cookie/challenge-4/app.js',
  'Cookie/challenge-5/app.js',
  // Header Manipulation challenges
  'Header-Manipulation/challenge-1/app.js',
  'Header-Manipulation/challenge-2/app.js',
  'Header-Manipulation/challenge-3/app.js',
  'Header-Manipulation/challenge-4/app.js',
  'Header-Manipulation/challenge-5/app.js',
  // Path Traversal challenges
  'Path-Traversal/challenge-1/app.js',
  'Path-Traversal/challenge-2/app.js',
  'Path-Traversal/challenge-3/app.js',
  'Path-Traversal/challenge-4/app.js',
  'Path-Traversal/challenge-5/app.js',
  // Web Discovery challenges
  'Web-Discovery/challenge-1/app.js',
  'Web-Discovery/challenge-2/app.js',
  'Web-Discovery/challenge-3/app.js',
  'Web-Discovery/challenge-4/app.js',
  'Web-Discovery/challenge-5/app.js',
  // Web Inspection challenges
  'Web-Inspection/challenge-1/app.js',
  'Web-Inspection/challenge-2/app.js',
  'Web-Inspection/challenge-3/app.js',
  'Web-Inspection/challenge-4/app.js',
  'Web-Inspection/challenge-5/app.js',
];

challenges.forEach((challenge) => {
  const challengePath = path.join(__dirname, challenge);
  const process = spawn('node', [challengePath], {
    stdio: 'inherit',
    detached: true,
  });

  process.on('close', (code) => {
    console.log(`Process for ${challenge} exited with code ${code}`);
  });
});
