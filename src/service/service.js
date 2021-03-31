export async function getFavorite() {
    return fetch(`${process.env.REACT_APP_API_BASE_URL}`).then((response) =>
      response.json()
    );
  }
  
  export async function addFavorite(variables) {
    const addRatedMovie = JSON.stringify(variables);

    return fetch(`${process.env.REACT_APP_API_BASE_URL}/add`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: addRatedMovie
    }).then((response) => response.json());

  }

  export async function deleteFavorite(movieId) {
    const deleteMovie = JSON.stringify({movieId:movieId});

    return fetch(`${process.env.REACT_APP_API_BASE_URL}/add`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: deleteMovie
    }).then((response) => response.json());

  }
