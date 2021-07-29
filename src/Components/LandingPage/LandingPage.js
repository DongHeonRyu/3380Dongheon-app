import React, { useEffect, useState } from "react";
import { API_URL, API_KEY, IMAGE_BASE_URL } from "../../Config";
import MainImage from "../MainImage/MainImage";
import GridCards from "../GridCard/GridCard";
import { Row } from 'antd';
import 'antd/dist/antd.css';

const LandingPage = (props) => {
  const [Movies, setMovies] = useState([]);
  const [MainMovieImage, setMainMovieImage] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    fetchMovies(endpoint);
  }, []);

  const fetchMovies = (endpoint) => {
    fetch(endpoint)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setMovies([...Movies, ...response.results]);

        setMainMovieImage(MainMovieImage || response.results[0]);

        setCurrentPage(response.page);
      });
  };

  const loadmoreItems = () => {
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${
      currentPage + 1
    }`;
    fetchMovies(endpoint);
  };

  return (
    <div style={{ width: "100%", margin: "0" }}>
    
      {/*Main Image */}
      {MainMovieImage && ( //만약 이러한 작업을 하지않을 경우 React는 MainMovieImage를 state에 넣기전에
        //페이지를 렌더링 할려고 하여 backrop_path가 null 에러가 발생한다.

        /*console.log 보면 backdrop_path에 이미지에대한 이름이 담겨있다.*/
        <MainImage
          image={`${IMAGE_BASE_URL}w1280/${MainMovieImage.backdrop_path}`} //영화이미지
          title={MainMovieImage.original_title} //영화제목
          text={MainMovieImage.overview} //영화에대한설명
        />
      )}

      <div style={{ width: "85%", margin: "1rem auto" }}>
        <h2 style={{ textAlign: "center" }}>Popular Movies Now</h2>
        <hr />

        {/*Movie Grid Cards */}
      </div>

      <div>
      <Row gutter={[16, 16]}>
            {Movies &&
              Movies.map((movie, index) => (
                <React.Fragment key={index}>
                  <GridCards
                    landingPage
                    image={
                      movie.poster_path
                        ? `${IMAGE_BASE_URL}w500/${movie.poster_path}`
                        : null
                    }
                    movieId={movie.id}
                    movieName={movie.original_title}
                  />
                </React.Fragment>
              ))}
          </Row>
      </div>
      <br />

      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          style={{
            background: "#f44336",
            color: "white",
            width: 1000,
            height: 50,
          }}
          onClick={loadmoreItems}
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
