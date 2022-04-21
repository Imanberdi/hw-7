import CommentAvatar from "./CommentAvatar"
import CommentWrapper from "../UI/CommentWrapper"

import './UserInfo.css'

function UserInfo(props) {
	return (
		<CommentWrapper className="UserInfo">
			<div>
				<CommentAvatar author={props.author} />
				<div className="UserInfo-name">{props.author.name}</div>
			</div>
		</CommentWrapper>
	)
}
export default UserInfo