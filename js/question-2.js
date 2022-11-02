/*Make a call to the Rawg API.

Go to https://rawg.io/apidocs and get an API key which you’ll use as part of the endpoint you’re making an API call to. You can use https://noroff.no for the URL and Noroff Assignment for the description. -- done

You'll be given an API Key you can add as a "key" parameter in your fetch request.

Make a call to the following API endpoint replacing INSERTAPIKEYHERE with the key given to you from the Rawg API.
https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=INSERTAPIKEYHERE

Loop through the results and display the following properties in HTML, but only for the first eight results:
name
rating
number of tags (not the tag details, just the amount of tags)
The styling for this assignment is not important but loading indicator should be displayed while the API call is in progress.

Be sure to handle any potential errors in the code.

You can use either regular promise or async/await syntax to make the call.

Be sure to arrange all file types appropriately, consult the repos from the lessons for examples.
Submission
Create a repository in your GitHub account called your-name-js1-ma3, for example mary-smith-js1-ma3, and make sure it's public. --- done
Add your answer for question 1 in a file called question-1.js --- done
Add your answer for question 2 in a file called question-2.js --- done
Add, commit and push your files - both .js files and any .html and .css files you may create - to this repo.
Submit the repo link.*/


const options = {"headers": {
    `API-Key` : `f1ff1da604aa407699fa111b1459a231`
}};
  

const API_URL = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=INSERTAPIKEYHERE ${API-key}";

async function games() {
    const response = await fetch(API_URL);
    const results = await response.json();
    console.log(results);
}

for ()

games ()