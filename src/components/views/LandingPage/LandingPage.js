import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { API_URL, API_KEY, IMAGE_BASE_URL } from '../../Config';
import MainImage from '../Sections/MainImage';
import GridCards from '../GridCard/GridCard'

const LandingPage = (props) => {
  const [Movies, setMovies] = useState([]); //배열로 값을받기 때문
  const [MainMovieImage, setMainMovieImage] = useState(null);

  useEffect(() => {
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    fetch(endpoint)
      .then((response) => response.json()) //응답을 json형태로 변경하여 then의 response에 반환
      .then((response) => {
        console.log(response);
        setMovies([...response.results]); //console로 찍어보면 results배열에 담겨서 데이터보내줌
        //스프레드연산자를 사용하여 배열에 집어넣음
        setMainMovieImage(MainMovieImage || response.results[0]);
        //로딩될때는 MainMovieImage값이 null이기 때문에 response.results[0]값이 들어오며
        //그다음 loding button을 눌릴때마다 MainMovieImage즉 초기이미지로 고정이된다.
        //안그러면 로그창에 오류발생
      });
  }, []);
  return (
    <div style={{ width: '100%', margin: '0' }}>
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

      <div style={{ width: '85%', margin: '1rem auto' }}>
        <h2>Movies by latest</h2>
        <hr />

        {/*Movie Grid Cards */}
        
      </div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button>Load More</button>
      </div>
   
          {Movies &&
            Movies.map((movie, index) => (
              <React.Fragment key={index}>
                <GridCards
                  image={
                    movie.poster_path
                      ? `${IMAGE_BASE_URL}w500/${movie.poster_path}`
                      : null
                  }
                  movieName={movie.original_title}
                />
              </React.Fragment>
            ))}
        
    </div>
  );
};

export default withRouter(LandingPage);