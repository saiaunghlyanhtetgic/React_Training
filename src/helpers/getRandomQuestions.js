let categories = [
    "General Knowledge",
    "Entertainment: Books",
    "Entertainment: Film",
    "Entertainment: Music",
    "Entertainment: Musicals & Theatres",
    "Entertainment: Television",
    "Entertainment: Video Games",
    "Entertainment: Board Games",
    "Science & Nature",
    "Science: Mathematics",
    "Science: Computers",
    "Mythology",
    "Sports",
    "Geography",
    "History",
    "Politics",
    "Art",
    "Animals"
]

let difficulties = ["easy", "medium"]

let questionTypes = ["multiple", "boolean"]


function getRandomElement(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

function getRandomIndex(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return randomIndex;
}

export default async function generateRandomQuestion() {
    const randomCategory = getRandomIndex(categories);
    const randomDifficulty = getRandomElement(difficulties);
    const randomQuestionType = getRandomElement(questionTypes);
  
    let apiUrl = `https://opentdb.com/api.php?amount=5&category=${randomCategory}&difficulty=${randomDifficulty}&type=${randomQuestionType}`;
    console.log(apiUrl);
  
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  }
  






