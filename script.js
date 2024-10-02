const movies = [
    { title: "Avatar (2009)", description: "Description of Movie 1", image: "avatar.jpg", rating: "★★★★☆" },
    { title: "Avengers: Endgame (2019)", description: "Description of Movie 2", image: "avengers-endgame.jpg", rating: "★★★☆☆" },
    { title: "Avatar: The Way of Water (2022)", description: "Description of Movie 3", image: "avatar-the-way-of-water.jpg", rating: "★★★★★" },
    { title: "Titanic (1997)", description: "Description of Movie 3", image: "titanic.jpg", rating: "★★★★☆" },
    { title: "Star Wars: Episode VII - The Force Awakens (2015)", description: "Description of Movie 3", image: "star-wars-the-force-awakens.jpg", rating: "★★★☆☆" },
    { title: "Avengers: Infinity War (2018)", description: "Description of Movie 3", image: "avengers-infinity-war.jpg", rating: "★★★★☆" },
    { title: "Spider-Man: No Way Home (2021)", description: "Description of Movie 3", image: "spiderman-no-way-home.jpg", rating: "★★★★★" },
    { title: "Inside Out 2 (2024)", description: "Description of Movie 3", image: "inside-out-2.jpg", rating: "★★★★★" },
    { title: "Jurassic World (2015)", description: "Description of Movie 3", image: "jurassic-world.jpg", rating: "★★☆☆☆" },
    { title: "The Lion King (2019)", description: "Description of Movie 3", image: "the-lion-king.jpg", rating: "★★★★☆" },
];

const movieList = document.getElementById('movie-list');

movies.forEach(movie => {
    const card = document.createElement('div');
    card.className = 'col-12 col-sm-6 col-md-4 mb-4';
    card.innerHTML = `
        <div class="card h-100">
            <img src="${movie.image}" class="card-img-top img-fluid" alt="${movie.title}">
            <div class="card-body">
                <h5 class="card-title">${movie.title}</h5>
                <p class="rating">${movie.rating}</p>
                <p class="card-text">${movie.description}</p>
                <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#bookingModal" onclick="openBookingModal('${movie.title}')">Book Ticket</button>
            </div>
        </div>
    `;
    movieList.appendChild(card);
});

function openBookingModal(movieTitle) {
    document.getElementById('movieTitle').value = movieTitle;
}

function bookTicket() {
    const movieName = document.getElementById('movieTitle').value;
    const name = document.getElementById('name').value;
    const seatsValue = document.getElementById('seats').value;

    const message = `Booking ${movieName} for ${seatsValue} seats by ${name}`;
    
    const modal = bootstrap.Modal.getInstance(document.getElementById('bookingModal'));
    modal.hide();

    alert(message);

    document.getElementById('name').value = '';
    document.getElementById('seats').value = '';
}