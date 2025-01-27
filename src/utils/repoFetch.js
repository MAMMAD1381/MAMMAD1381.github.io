const axios = require('axios');
const fs = require('fs');
const path = require('path');

// Your GitHub username and access token
const username = 'MAMMAD1381';
const accessToken = '****';

// GitHub API endpoint to get repositories
const url = `https://api.github.com/users/${username}/repos`;

// Categories for filtering repos based on their names
const categories = {
    'machine learning': ['ICU-Admission-Prediction_COVID-19', 'Loan-Insights-Analysis', 'RAG', 'CarClassification', 'FacialClustering', 'PatternMining', 'SearchProject_SortIt'],
    'web development': ['bootcamp-api', 'Employee-service-API', 'MAMMAD1381.github.io', 'calorieTracker-via-webpack', 'movie-site'],
    'linux&Networking': ['SecureChat', 'linux-configurator', 'linux-shell', 'Client-server-chat', 'packetSender'],
    'others': ['Blog-app', 'Star_Collector_v1', 'bmp-project']
};

async function getRepos() {
    try {
        const response = await axios.get(url, {
            headers: {
                'Authorization': `token ${accessToken}`
            }
        });

        const repos = response.data;

        // Initialize the repos object to store categorized repos
        let categorizedRepos = {
            'machine learning': [],
            'web development': [],
            'linux&Networking': [],
            'others': []
        };

        // Categorize repos based on their name
        repos.forEach(repo => {
            const repoData = {
                name: repo.name,
                url: repo.html_url,
                tags: repo.topics,
                description: repo.description,
                created_at: repo.created_at
            };

            // Check which category the repo belongs to based on its name
            for (let category in categories) {
                const categoryKeywords = categories[category];
                const repoName = repo.name;

                if (categoryKeywords.some(keyword => repoName.includes(keyword))) {
                    categorizedRepos[category].push(repoData);
                }
            }
        });

        // Create the directory if it doesn't exist
        const dirPath = path.join(__dirname, '../configs');
        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath, { recursive: true });
        }

        // Define the path for the repos.js file
        const reposFilePath = path.join(dirPath, 'Repos.js');

        // Save the categorized repos in the repos.js file
        const reposJsContent = `const repos = ${JSON.stringify(categorizedRepos, null, 2)};\n\nmodule.exports = repos;`;

        fs.writeFileSync(reposFilePath, reposJsContent);

        // Print the saving path
        console.log(`Repositories saved to: ${reposFilePath}`);
    } catch (error) {
        console.error('Error:', error.response ? error.response.status : error.message);
    }
}

getRepos();
