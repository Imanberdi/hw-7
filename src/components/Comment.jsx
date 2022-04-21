import CommentDate from "./CommentDate"
import UserInfo from "./UserInfo"
import CommentWrapper from "../UI/CommentWrapper"
import './Comment.css'

function Comment(props) {
	return (
		<div className="App">
			<div className="Comment">
				<UserInfo author={props.author} />
				<CommentWrapper className="Comment-text">
					<div >{props.text}</div>
					<CommentDate date={props.date} />
				</CommentWrapper>
			</div>
		</div>
	)
}

export default Comment