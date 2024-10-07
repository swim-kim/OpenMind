import axios from 'axios';
const BASE_URL = 'https://openmind-api.vercel.app/10-1/subjects';

export async function getQuestions(subjectId, limit, offset) {
    try {
        const response = await axios.get(`${BASE_URL}/${subjectId}/questions/?limit=${limit}&offset=${offset}`)
        if(response.status === 200){
            return response.data;
        } else {
            throw new Error(`HTTP error: ${response.status}`);
        }
    } catch (error) {
        console.log("Failed to get questions: " , error)
        throw error;
    }
}

export default getQuestions;

