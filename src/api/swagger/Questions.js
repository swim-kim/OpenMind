import axios from 'axios';

const team = '10-1';

/**
 * Retrieves a question from the API based on the provided ID.
 * GET /{team}/questions/{id}/
 *
 * @param {number} id - The unique identifier of the question to retrieve.
 * @returns {Promise<Object>} - The question data, or throws an error if the request fails.
 */
const questions_read = async (id) => {
  try {
    const response = await axios.get(`https://openmind-api.vercel.app/${team}/questions/${id}/`, {
      headers: {
        'accept': 'application/json',
      }
    });

    if (response.status === 200) {
      const questionData = response.data;
      localStorage.setItem(`question_${id}`, JSON.stringify(questionData));
      return questionData;
    } else {
      throw new Error(`Failed to getQuestions(${id}) and return ststus is ${response.status}`);
    }
  } catch (error) {
    console.error('Error fetching question:', error);
    throw error;
  }
};

/**
 * Deletes a question from the API based on the provided ID.
 * DELETE /{team}/questions/{id}/
 *
 * @param {number} id - The unique identifier of the question to delete.
 * @returns {Promise<boolean>} - True if the question was successfully deleted, or throws an error if the request fails.
 */
const questions_delete = async (id) => {
  try {
    const response = await axios.delete(`https://openmind-api.vercel.app/${team}/questions/${id}/`, {
      headers: {
        'accept': 'application/json',
      }
    });

    if (response.status === 204) {
      localStorage.removeItem(`question_${id}`);
      return true;
    } else {
      throw new Error('Failed to delete question');
    }
  } catch (error) {
    console.error('Error deleting question:', error);
    throw error;
  }
};

/**
 * Sends a POST request to the API to add an reaction type to the specified question.
 * POST /{team}/questions/{id}/reaction/
 * -d '{
 *    "type": "like"
 * }'
 *
 * @param {number} id - The unique identifier of the question to react to.
 * @param {string} reactionType - The type of reaction to add (e.g. "like" or "dislike").
 * @returns {Promise<Object>} - The updated question object after the reaction is added.
 * @throws {Error} - If the request to add the reaction fails.
 */
const questions_reaction_create = async (id, reactionType) => {
  try {
    const response = await axios.post(`https://openmind-api.vercel.app/${team}/questions/${id}/reaction/`, {
      type: reactionType
    }, {
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
      }
    });

    if (response.status === 201) {
      const updatedQuestion = response.data;
      localStorage.setItem(`question_${id}`, JSON.stringify(updatedQuestion));
      return updatedQuestion;
    } else {
      throw new Error('Failed to react to question');
    }
  } catch (error) {
    console.error('Error reacting to question:', error);
    throw error;
  }
};

/**

 *
 * @param {number} questionId - The unique identifier of the question to answer.
 * @param {string} content - The content of the answer.
 * @param {boolean} isRejected - Indicates whether the answer is rejected or not.
 * @param {string} team - The team associated with the question.
 * @returns {Promise<Object>} - The updated question object after the answer is added.
 * @throws {Error} - If the request to add the answer fails.
 */
const questions_answers_create = async (questionId, content, isRejected, team) => {
  try {
    const response = await axios.post(`https://openmind-api.vercel.app/${team}/questions/${questionId}/answers/`, {
      questionId,
      content,
      isRejected,
      team
    }, {
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
      }
    });

    if (response.status === 201) {
      const updatedQuestion = response.data;
      localStorage.setItem(`question_${questionId}`, JSON.stringify(updatedQuestion));
      return updatedQuestion;
    } else {
      throw new Error('Failed to answer question');
    }
  } catch (error) {
    console.error('Error answering question:', error);
    throw error;
  }
};

export {
  questions_read,
  questions_delete,
  questions_reaction_create,
  questions_answers_create
};