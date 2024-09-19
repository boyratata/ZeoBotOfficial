// Function to generate a random 10-digit ID
function generateRandomId() {
  const min = 1000000000; // 1 billion
  const max = 9999999999; // 10 billion - 1
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to fetch a random username from 'usernames.json'
async function getRandomUsername() {
  try {
    const response = await fetch('usernames.json');
    console.log('Response Status:', response.status);
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const data = await response.json();
    console.log('Fetched Data:', data);
    
    const usernames = data.usernames;
    
    if (!usernames || usernames.length === 0) {
      throw new Error('No usernames found in the data.');
    }
    
    const randomIndex = Math.floor(Math.random() * usernames.length);
    const randomUsername = usernames[randomIndex];
    
    const usernameElement = document.getElementById('Ohballs');
    if (usernameElement) {
      usernameElement.textContent = randomUsername;
    } else {
      console.error('Element with ID "Ohballs" not found.');
    }
  } catch (error) {
    console.error('Error fetching usernames:', error);
  }
}

// Initialize content when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  const discordIdElement = document.getElementById('ID');
  
  if (discordIdElement) {
    discordIdElement.textContent = generateRandomId();
  } else {
    console.error('Element with ID "ID" not found.');
  }
  
  getRandomUsername();
});
