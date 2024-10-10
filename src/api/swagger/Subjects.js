import axios from 'axios';

import LocalStorage from '../storage/LocalStorage';



/**
 * Fetches a list of subjects from the OpenMind API for the specified team, with optional pagination.
 * GET /{team}/subjects/
 *
 * @param {string} team - The team ID for which to fetch the subjects.
 * @param {number} [offset=0] - The offset to use for pagination (default is 0).
 * @param {number} [limit=10] - The maximum number of subjects to fetch per page (default is 10).
 * @returns {Promise<Object[]>} - An array of subject objects.
 * {
 *   count*	integer
 *   next	string($uri) x-nullable: true
 *   previous	string($uri) x-nullable: true
 *   results*	[Subject{
 *     id	ID[...]
 *     name*	Name[...]
 *     imageSource	Imagesource[...]
 *     questionCount	Questioncount[...]
 *     createdAt	CreatedAt[...]
 *     team*	Team[...]
 *   }]
 * }
 * @throws {Error} - If there is an error fetching the subjects.
 */

  const URL = `https://openmind-api.vercel.app/${team}/subjects/?limit=${limit}&offset=${offset}`;

  try {
    const res = await axios.get(URL, {
      headers: {
        'accept': 'application/json',
      }
    });

    // 200 OK
    // Store the fetched subject in localStorage
    if (res.status === 200) {
      const subjects = res.data;
      LocalStorage.setItem('subjects', JSON.stringify(subjects));
      return subjects;
    } else {
      throw new Error('Failed to fetch subjects');
    }
  } catch (error) {
    console.error('Error fetching subjects:', error);

    // If there's an error, try to retrieve subjects from localStorage
    const storedSubjects = LocalStorage.getItem('subjects');
    return storedSubjects ? JSON.parse(storedSubjects) : [];
  }
};

/**
 * Creates a new subject in the specified team.
 * POST /{team}/subjects/
 * -d '{
 *      "name": "string",
 *      "team": "string"
 *  }'
 *
 * @param {string} team - The team ID for which to create the subject.
 * @param {string} name - The name of the new subject.
 * @returns {Promise<Object>} - The created subject object.
 * Subject {
 *   id	integer title: ID readOnly: true
 *   name*	string title: Name maxLength: 30 minLength: 1
 *   imageSource	string($uri) title: Imagesource readOnly: true minLength: 1
 *   questionCount	string title: Questioncount readOnly: true
 *   createdAt	string($date-time) title: CreatedAt readOnly: true
 *   team*	string title: Team minLength: 1
 * }
 * @throws {Error} - If there is an error creating the subject.
 */


  const URL = `https://openmind-api.vercel.app/${team}/subjects/`

  try {
    const res = await axios.post(URL, {
      name,
      team,
    }, {
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })

    // 201 OK
    // Store the fetched subject in localStorage
    if (res.status === 201) {
      const subject = res.data;
      LocalStorage.setItem('subject', JSON.stringify(subject));
      return subject;
    } else {
      throw new Error('Failed to fetch subject');
    }
  } catch (error) {
    console.error('Error fetching subject:', error);

    // If there's an error, try to retrieve subject from localStorage
    const storedSubject = LocalStorage.getItem('subject');
    return storedSubject ? JSON.parse(storedSubject) : [];
  }
}

/**
 * Retrieves a subject by its ID for the specified team.
 * GET /{team}/subjects/{id}/
 *
 * @param {string} team - The team ID for which to retrieve the subject.
 * @param {string} id - The ID of the subject to retrieve.
 * @returns {Promise<Object>} - The subject object, or null if not found.
 * Subject {
 *   id	integer title: ID readOnly: true
 *   name*	string title: Name maxLength: 30 minLength: 1
 *   imageSource	string($uri) title: Imagesource readOnly: true minLength: 1
 *   questionCount	string title: Questioncount readOnly: true
 *   createdAt	string($date-time) title: CreatedAt readOnly: true
 *   team*	string title: Team minLength: 1
 * }
 * @throws {Error} - If there is an error querying the subject.
 */

  const URL = `https://openmind-api.vercel.app/${team}/subjects/${id}/`

  try {
    const res = await axios.get(URL, {
      headers: {
        'accept': 'application/json',
      }
    })

    // 200 OK
    // Store the fetched subject in localStorage
    if (res.status === 200) {
      const subject = res.data
      LocalStorage.setItem(`subject_${id}`, JSON.stringify(subject))
      return subject
    } else {
      throw new Error('Failed to fetch subject')
    }
  } catch (error) {
    console.error('Error querying subject:', error)

    // If there's an error, try to retrieve subject from localStorage
    const storedSubject = LocalStorage.getItem(`subject_${id}`)
    return storedSubject ? JSON.parse(storedSubject) : null
  }
}

/**
 * Deletes a subject by its ID for the specified team.
 * DELETE /{team}/subjects/{id}/
 *
 * @param {string} team - The team ID for which to delete the subject.
 * @param {string} id - The ID of the subject to delete.
 * @returns {Promise<Object>} - The res data from the delete request.
 * @throws {Error} - If there is an error deleting the subject.
 */

  const URL = `https://openmind-api.vercel.app/${team}/subjects/${id}/`

  try {
    const res = await axios.delete(URL, {
      headers: {
        'accept': 'application/json',
      }
    })

    // 204 OK
    // Remove the deleted subject from localStorage
    if (res.status === 204) {
      const subject = res.data;
      LocalStorage.setItem(`subject_${id}`, JSON.stringify(subject));
      return subject;
    } else {
      throw new Error('Failed to fetch subject');
    }
  } catch (error) {
    console.error('Error deleting subject:', error)
    throw error
  }
}

/**
 * Retrieves the questions for a given subject.
 * GET /{team}/subjects/{subject_id}/questions/
 *
 * @param {string} team - The team ID for which to retrieve the subject questions.
 * @param {string} id - The ID of the subject for which to retrieve the questions.
 * @param {number} [limit=10] - The maximum number of questions to retrieve.
 * @param {number} [offset=0] - The offset for the questions to retrieve.
 * @returns {Promise<Object[]>} - The array of subject questions.
 * {
 *    count*	integer
 *    next	string($uri) x-nullable: true
 *    previous	string($uri) x-nullable: true
 *    results*	[ Question {
 *      id	ID[...]
 *      subjectId*	Subjectid[...]
 *      content*	Content[...]
 *      like	Like[...]
 *      dislike	Dislike[...]
 *      createdAt	CreatedAt[...]
 *      team*	Team[...]
 *      answer	AnswerRetrieveUpdate{...}
 *    }]
 * }
 * @throws {Error} - If there is an error querying the subject questions.
 */

  const URL = `https://openmind-api.vercel.app/${team}/subjects/${id}/questions/?limit=${limit}&offset=${offset}`
  const storageKey = `subject_${id}_questions`

  try {
    const res = await axios.get(URL, {
      headers: {
        'accept': 'application/json',
      }
    })

    // 200 OK
    // Store the fetched questions in localStorage
    if (res.status === 200) {
      const questions = res.data
      LocalStorage.setItem(storageKey, JSON.stringify(questions))
      return questions
    } else {
      throw new Error('Failed to fetch subject questions')
    }
  } catch (error) {
    console.error('Error querying subject questions:', error)

    // If there's an error, try to retrieve questions from localStorage
    const storedQuestions = LocalStorage.getItem(storageKey)
    return storedQuestions ? JSON.parse(storedQuestions) : null
  }
}

/**
 * Creates a new subject question.
 * POST /{team}/subjects/{subject_id}/questions/
 * -d '{
 *      "subjectId": 0,
 *      "content": "string",
 *      "like": 2147483647,
 *      "dislike": 2147483647,
 *      "team": "string",
 *      "answer": {
 *        "content": "string",
 *        "isRejected": true
 *      }
 * 	  }'
 *
 * @param {string} team - The team for which to create the subject question.
 * @param {string} id - The ID of the subject for which to create the question.
 * @param {Object} questionData - The data for the new subject question.
 * @param {string} questionData.content - The content of the new subject question.
 * @param {number} questionData.like - The initial like count for the new subject question.
 * @param {number} questionData.dislike - The initial dislike count for the new subject question.
 * @param {string} questionData.team - The team for the new subject question.
 * @param {Object} questionData.answer - The answer data for the new subject question.
 * @param {string} questionData.answer.content - The content of the answer for the new subject question.
 * @param {boolean} questionData.answer.isRejected - Whether the answer for the new subject question is rejected.
 * @returns {Promise<Object>} - The created subject question.
 *  Question {
 *    subjectId*	integer title: Subjectid
 *    content*	string title: Content minLength: 1
 *    like	integer title: Like maximum: 2147483647 minimum: -2147483648
 *    dislike	integer title: Dislike maximum: 2147483647 minimum: -2147483648
 *    team*	string title: Team minLength: 1
 *    answer	AnswerRetrieveUpdate {
 *      content*	Contentstring title: Content minLength: 1
 *      isRejected*	IsRejectedboolean title: IsRejected
 *    }
 *  }
 * @throws {Error} - If there is an error creating the subject question.
 */

  const URL = `https://openmind-api.vercel.app/${team}/subjects/${id}/questions/`
  const storageKey = `subject_${id}_questions`

  try {
    const res = await axios.post(URL, questionData, {
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })

    // 201 OK
    // Update the stored questions in localStorage
    if (res.status === 201) {
      const subject = res.data;
      const storedQuestions = LocalStorage.getItem(storageKey)
      if (storedQuestions) {
        const updatedQuestions = JSON.parse(storedQuestions)
        updatedQuestions.push(subject)
        LocalStorage.setItem(storageKey, JSON.stringify(updatedQuestions))
      }
      return subject;
    } else {
      throw new Error('Failed to fetch subject');
    }
  } catch (error) {
    console.error('Error creating subject question:', error)
    return null
  }
}


