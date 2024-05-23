import "./TodoItem.css";

const TodoItem = ({id,isDone,content,date}) => {
    return (
    <div className="TodoItem">
        <input checked type="checkbox" />
        <div className="content">Todo..</div>
        <div className="date">Date</div>
        <button>삭제</button>
    </div>
    );
};

export default TodoItem;