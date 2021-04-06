import React, { useEffect, useState } from "react";
import { Descriptions } from "antd";
import "antd/dist/antd.css";
import { addFavorite, getSpecific, editComment } from "../../Service/service";
import "./comment.css";

function MovieComment(props) {
  const [ratedMovie, setRatedMovie] = useState([]);
  const [mComment, setmComment] = useState();

  const movieId = props.movieId;
  const movieTitle = props.movieInfo.title;
  const movieRunTime = props.movieInfo.runtime;

  useEffect(() => {
    refreshPage();
  }, []);

  function refreshPage() {
    getSpecific(movieId)
      .then((json) => {
        setRatedMovie(json);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  const userInput = (e) => {
    setmComment(e.target.value);
    refreshPage();
  };

  const handleChange = async () => {
    refreshPage();

    let variables = {
      movieId: movieId,
      movieTitle: movieTitle,
      movieRunTime: movieRunTime,
      movieRate: 0,
      movieComment: mComment,
    };

    await addFavorite(variables);
  };

  async function editMovie() {
    const id = movieId;
    const value = mComment;

    await editComment(id, value);
    refreshPage();
  }

  return (
    <Descriptions title="Movie Comment" bordered>
      <div className="d-flex justify-content-center">
        <table id="commentTable">
          <thead>
            <tr>
              <th>
                <h3>{ratedMovie ? <div>{ratedMovie.movieComment}</div> : <div>{mComment}</div>}</h3>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {ratedMovie ? (
                  <div className="input-group mb-1">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Write 70 words comment"
                      onChange={userInput}
                      maxLength="70"
                      aria-describedby="button-addon2"
                    />
                    <button
                      className="btn btn-outline-secondary"
                      type="button"
                      id="button-addon2"
                      onClick={editMovie}
                    >
                      Submit
                    </button>
                  </div>
                ) : (
                  <div className="input-group mb-1">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Write 70 words comment"
                      onChange={userInput}
                      maxLength="70"
                      aria-describedby="button-addon2"
                    />
                    <button
                      className="btn btn-outline-secondary"
                      type="button"
                      id="button-addon2"
                      onClick={handleChange}
                    >
                      Submit
                    </button>
                  </div>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Descriptions>
  );
}

export default MovieComment;
