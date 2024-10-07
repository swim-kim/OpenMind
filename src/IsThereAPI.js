import axios from "axios";

export async function getItems(limit, page) { // 인덱스 0부터시작하게된다, api에서는 0페이지부터 세고있다, 개발자가 페이지를 셀때는 1페이지부터 센다.
  try {
    const offset = (page-1)*limit
    const response = await axios.get(`https://openmind-api.vercel.app/10-1/subjects/?limit=${limit}&offset=${offset}`);
    return response.data;  // 이미 JSON 형태로 변환되어 있음
  } catch (error) {
    console.error("Error fetching items:", error);
    throw error;  // 오류를 다시 던져서 호출자에게 알려줄 수 있음
  }
}