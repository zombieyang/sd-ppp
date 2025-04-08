const fs = require('fs');
const path = require('path');
const jsonc = require('jsonc-parser');

// File paths
const rootDir = path.resolve(__dirname, '..');
const uxprcPath = path.join(rootDir, 'plugins', 'photoshop', '.uxprc');
const launchJsonPath = path.join(rootDir, '.vscode', 'launch.json');

// Read the session ID from .uxprc
try {
  const uxprcContent = fs.readFileSync(uxprcPath, 'utf8');
  const uxprcData = JSON.parse(uxprcContent);
  const sessionId = uxprcData.plugin.sessions[0].pluginSessionId;
  
  if (!sessionId) {
    console.error('No pluginSessionId found in .uxprc');
    process.exit(1);
  }
  
  // Read launch.json
  const launchJsonContent = fs.readFileSync(launchJsonPath, 'utf8');
  const launchJsonData = jsonc.parse(launchJsonContent);
  
  // Update websocketAddress in all configurations
  let modified = false;
  let modifiedConfigList = [];
  launchJsonData.configurations.forEach(config => {
    if (config.websocketAddress
      && config.address
      && config.port) 
    {
      const originalWebsocketAddress = config.websocketAddress;
      // // Extract the base URL part and replace only the session ID
      // const baseUrl = config.websocketAddress.split('/socket/cdt/')[0];
      const baseUrl = `ws://${config.address}:${config.port}`;
      const newWebsocketAddress = `${baseUrl}/socket/cdt/${sessionId}`;
      if (originalWebsocketAddress !== newWebsocketAddress) {
        config.websocketAddress = newWebsocketAddress;
        modified = true;
        modifiedConfigList.push(config.name);
      }
    }
  });
  
  if (modified) {
    // Write updated launch.json
    fs.writeFileSync(launchJsonPath, JSON.stringify(launchJsonData, null, 4), 'utf8');
    console.log(`Successfully updated websocketAddress in config [${modifiedConfigList}] with session ID: ${sessionId}`);
  } 
} catch (error) {
  console.error('Error updating session ID:', error.message);
  process.exit(1);
}