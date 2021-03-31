import React, { useEffect, useState } from "react";
import { getFavorite } from "../../service/service";
import { Rate } from "antd";
import "antd/dist/antd.css";

function FavoritePage(props) {
  const [ratedMovie, setRatedMovie] = useState([]);

  useEffect(() => {
    refreshPage();
  }, []);

  async function refreshPage() {
    await getFavorite()
      .then((json) => {
        setRatedMovie(json);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <div style={{ width: "85%", margin: "3rem auto" }}>
      <h3 style={{ textAlign: "center" }}>My Favorite Movies</h3>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Movie Title</th>
            <th>Movie RunTime</th>
            <th>Rate</th>
          </tr>
        </thead>
        <tbody>
          {ratedMovie.map((item) => {
            return (
              <tr>
                <td>{item.movieTitle}</td>
                <td>{item.movieRunTime}</td>
                
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default FavoritePage;
