import React, { useEffect, useState } from "react";
import { API_URL, API_KEY, IMAGE_BASE_URL } from "../../Config";
import GridCards from "../GridCard/GridCard";
import MovieInfo from "../MovieInfo/MovieInfo";
import MainImage from "../Sections/MainImage";
import { Row } from "antd";
import Favorite from "../Favorite/Favorite";

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
        console.log(response);
        setMovie(response);
      });

    fetch(endpointCrew)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setCasts(response.cast);
      });
  }, []);

  const toggleActorView = () => {
    setActorToggle(!ActorToggle);
  };
  return (
    <div>
      {/* Header*/}
      {Movie.backdrop_path && ( //Movie안의 backdrop_path를 가져오는데
        //시간이 오래걸릴 수도있기때문에 근데 가져오는 도중에 렌더링을 할려고하여 오류가발생한다.
        //이를 방지하기위한 코드(실제 콘솔에 이를안해주면 undefined라고 오류발생)
        <MainImage
          image={`${IMAGE_BASE_URL}w1280/${Movie.backdrop_path}`} //영화이미지
          title={Movie.original_title} //영화제목
          text={Movie.overview} //영화에대한설명
        />
      )}

      {/* Body*/}
      <div style={{ width: "85%", margin: "1rem auto" }}>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
         <Favorite></Favorite>
        </div>

        {/* Movie Info*/}

        <MovieInfo movie={Movie} />

        <br />
        {/* Actors Grid*/}
        <div
          style={{ display: "flex", justifyContent: "center", margin: "2rem" }}
        >
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
                    image={
                      cast.profile_path
                        ? `${IMAGE_BASE_URL}w500${cast.profile_path}`
                        : null
                    }
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
