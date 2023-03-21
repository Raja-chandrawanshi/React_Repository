import { useState } from "react";

const ToDoListRender = () => {
  let [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [editing, setEditing] = useState({});
  const render = () => {
    setList((prevList) => [
      ...prevList,
      { title: input, id: new Date().getTime() },
    ]);
    setInput("");
  };
  const Remove = (id) =>
    setList((prevState) => prevState.filter((data) => data.id !== id));

  const edit = (e) => {
    const { value } = e.target;
    console.log(value);
    setEditing((prevState) => {
      return {
        ...prevState,
        title: value,
      };
    });
  };

  const onUpdate = () => {
    setList((prevState) =>
      prevState.map((data) => {
        if (data.id === editing.id) {
          return editing;
        }
        return data;
      })
    );
    setEditing({});
  };
  console.log("list", list);
  return (
    <div className="Containar">
      <div className="firstinput">
        <input
          className="input1"
          type="text"
          name="todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={render}>Add</button>
      </div>
      <p>To do List</p>
      <div>
        {list.map((data, index) => {
          return editing.id === data.id ? (
            <div key={data.id}>
              <input type="text" value={editing.title} onChange={edit} />
              <button onClick={onUpdate}>save</button>
            </div>
          ) : (
            <div className="Containar1" key={data.id}>
              <span>{data.title}</span>
              <button onClick={() => Remove(data.id)}>Delete</button>
              <button onClick={() => setEditing(data)}>Edit</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ToDoListRender;
