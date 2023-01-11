import React,{useContext} from "react";
import noteContext from "../context/notes/noteContext";

const Home = () => {
    const context = useContext(noteContext)
    const {notes,setNote} = context;
  return (
    <div>
      <div className="container my-5">
        <h1>Add Note</h1>
        <form>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <input type="password" className="form-control" />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      <div className="container my-3">
        <h3>Your Notes</h3>
        {notes.map((note)=>{
            return note.title
        })}
      </div>
    </div>
  );
};

export default Home;
