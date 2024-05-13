const fs = require('fs').promises;

export async function loadJson(path) {
  try {
    // Read the JSON file
    const data = await fs.readFile(path, 'utf8');
    // Parse the JSON data
    const jsonData = JSON.parse(data);
    return jsonData;
  } catch (error) {
    console.error('Error reading or parsing JSON:', error);
    throw error; // Rethrow the error
  }
}
