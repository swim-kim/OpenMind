import axios from 'axios';

const team = '10-1';

/**
 * Fetches an answer from the API by its ID.
 * GET /{team}/answers/{id}/
 *
 * @param {number} id - The unique identifier of the answer to fetch.
 * @returns {Promise<Object>} - The fetched answer object.
 * @throws {Error} - If there is an error fetching the answer.
 */

  try {
    const response = await axios.get(`https://openmind-api.vercel.app/${team}/answers/${id}/`, {
      headers: {
        'accept': 'application/json',
      }
    });

    if (response.status === 200) {
      const answer = response.data;
      localStorage.setItem(`answer_${id}`, JSON.stringify(answer));
      return answer;
    } else {
      throw new Error('Failed to fetch answer');
    }
  } catch (error) {
    console.error('Error fetching answer:', error);
    throw error;
  }
};

/**
 * Updates an existing answer in the API.
 * PUT /{team}/answers/{id}/
 * -d '{
 *      "content": "string",
 *      "isRejected": true
 * }'
 *
 * @param {number} id - The unique identifier of the answer to update.
 * @param {string} content - The new content of the answer.
 * @param {boolean} isRejected - The new rejected status of the answer.
 * @returns {Promise<Object>} - The updated answer object.
 * @throws {Error} - If there is an error updating the answer.
 */

  try {
    const response = await axios.put(`https://openmind-api.vercel.app/${team}/answers/${id}/`, {
      content,
      isRejected
    }, {
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
      }
    });

    if (response.status === 200) {
      const updatedAnswer = response.data;
      localStorage.setItem(`answer_${id}`, JSON.stringify(updatedAnswer));
      return updatedAnswer;
    } else {
      throw new Error('Failed to update answer');
    }
  } catch (error) {
    console.error('Error updating answer:', error);
    throw error;
  }
};

/**
 * Updates an existing answer by patching the specified fields.
 * PATCH /{team}/answers/{id}/
 * -d '{
 *      "content": "string",
 *      "isRejected": true
 * }'
 *
 * @param {number} id - The unique identifier of the answer to update.
 * @param {string} content - The new content of the answer.
 * @param {boolean} isRejected - The new rejected status of the answer.
 * @returns {Promise<Object>} - The updated answer object.
 * @throws {Error} - If there is an error updating the answer.
 */

  try {
    const response = await axios.patch(`https://openmind-api.vercel.app/${team}/answers/${id}/`, {
      content,
      isRejected
    }, {
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
      }
    });

    if (response.status === 200) {
      const patchedAnswer = response.data;
      localStorage.setItem(`answer_${id}`, JSON.stringify(patchedAnswer));
      return patchedAnswer;
    } else {
      throw new Error('Failed to patch answer');
    }
  } catch (error) {
    console.error('Error patching answer:', error);
    throw error;
  }
};

/**
 * Deletes an answer from the API.
 * DELETE /{team}/answers/{id}/
 *
 * @param {number} id - The unique identifier of the answer to delete.
 * @returns {Promise<boolean>} - True if the answer was successfully deleted, false otherwise.
 * @throws {Error} - If there is an error deleting the answer.
 */

  try {
    const response = await axios.delete(`https://openmind-api.vercel.app/${team}/answers/${id}/`, {
      headers: {
        'accept': 'application/json',
      }
    });

    if (response.status === 204) {
      localStorage.removeItem(`answer_${id}`);
      return true;
    } else {
      throw new Error('Failed to delete answer');
    }
  } catch (error) {
    console.error('Error deleting answer:', error);
    throw error;
  }
};


