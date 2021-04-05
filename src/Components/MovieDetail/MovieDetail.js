import React, { useEffect, useState } from "react";
import { API_URL, API_KEY, IMAGE_BASE_URL } from "../../Config";
import GridCards from "../gridCard/GridCard";
import MovieInfo from "../movieInfo/MovieInfo";
import MainImage from "../mainImage/MainImage";
import Favorite from "../favorite/Favorite";
import { Row } from "antd";
import "antd/dist/antd.css";
import MovieComment from "../movieComment/MovieComment";

function MovieDetail(props) {
  console.log(props.match);
  let movieId = props.match.params.movieId;

  const [Movie, setMovie] = useState({});
  const [Casts, setCasts] = useState([]);
  const [ActorToggle, setActorToggle] = useState(false);

  useEffect(() => {
    let endpointCrew = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
    let endpointInfo = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;

    fetch(endpointInfo)
      .then((response) => response.json())
      .then((response) => {
        // console.log(response);
        setMovie(response);
      });

    fetch(endpointCrew)
      .then((response) => response.json())
      .then((response) => {
        // console.log(response);
        setCasts(response.cast);
      });
  }, []);

  const toggleActorView = () => {
    setActorToggle(!ActorToggle);
  };
  return (
    <div>
      {/* Header*/}
      {Movie.backdrop_path && (
        <MainImage
          image={`${IMAGE_BASE_URL}w1280/${Movie.backdrop_path}`} //영화이미지
          title={Movie.original_title} //영화제목
          text={Movie.overview} //영화에대한설명
        />
      )}

      {/* Body*/}
      <div style={{ width: "100%", margin: "1rem auto" }}>
        <div style={{ display: "flex", justifyContent: "center", marginLeft: "0%" }}>
          <Favorite
            movieInfo={Movie} //무비정보
            movieId={movieId} //무비Id
          />
        </div>

        {/* Movie Comment*/}
        <br></br>
        <MovieComment movieInfo={Movie} movieId={movieId} />

        {/* Movie Info*/}
        <br></br>
        <MovieInfo movie={Movie} />

        <br />
        {/* Actors Grid*/}
        <div style={{ display: "flex", justifyContent: "center", margin: "2rem" }}>
          <button
            onClick={toggleActorView}
            style={{
              background: "#f44336",
              color: "white",
              width: 1000,
              height: 50,
            }}
          >
            {" "}
            Toggle Actor View
          </button>
        </div>
        {ActorToggle && (
          <Row gutter={[16, 16]}>
            {/*gutter는 Col간의 위 아래여백을 줄때 사용 */}
            {Casts &&
              Casts.map((cast, index) => (
                <React.Fragment key={index}>
                  <GridCards
                    image={cast.profile_path ? `${IMAGE_BASE_URL}w500${cast.profile_path}` : null}
                    characterName={cast.name}
                  />
                </React.Fragment>
              ))}
          </Row>
        )}
      </div>
    </div>
  );
}

export default MovieDetail;
