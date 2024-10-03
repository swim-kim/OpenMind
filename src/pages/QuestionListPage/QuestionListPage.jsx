import DropDown from "./components/drop_down/DropDown";
import UserCard from "./components/user_card/UserCard"

//부모 컴포넌트
function QuestionListPage() {
	return (
		<>
			<DropDown />
			<UserCard/>
		</>
	);
}

export default QuestionListPage;
