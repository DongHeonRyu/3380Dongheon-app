export async function getFavorite() {
  return fetch(`${process.env.REACT_APP_API_BASE_URL}/ratemovie/`).then((response) => response.json());
}

//get a specific data which has searched movieId
export async function getSpecific(movieId) {
  const getMovieData = JSON.stringify({ movieId: movieId });

  return fetch(`${process.env.REACT_APP_API_BASE_URL}/ratemovie/find`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: getMovieData
  }).then((response) => response.json());
}


export async function addFavorite(variables) {
  const addRatedMovie = JSON.stringify(variables);

  return fetch(`${process.env.REACT_APP_API_BASE_URL}/ratemovie/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: addRatedMovie,
  }).then((response) => response.json());
}

export async function deleteFavorite(movieId) {
  const deleteMovie = JSON.stringify({ movieId: movieId });

  return fetch(`${process.env.REACT_APP_API_BASE_URL}/ratemovie/delete`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: deleteMovie,
  }).then((response) => response.json());
}

export async function editFavorite(movieId, movieRate) {
  const editMovie = JSON.stringify({ movieId: movieId, movieRate: movieRate });

  return fetch(`${process.env.REACT_APP_API_BASE_URL}/ratemovie/edit`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: editMovie
  }).then((response) => response.json());
}
