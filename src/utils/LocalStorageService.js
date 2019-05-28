class localStorageService {
  favHotels = []

  add = hotel => {

    if( !localStorage.getItem('my_favorite_hotels') ){
      this.favHotels.push(hotel)
      localStorage.setItem('my_favorite_hotels', JSON.stringify(this.favHotels));
    } else {
      let existing = JSON.parse(localStorage.getItem('my_favorite_hotels'));
      this.favHotels = [...existing, hotel]
      localStorage.setItem('my_favorite_hotels', JSON.stringify(this.favHotels));
    }
  }

  remove = id => {

    let remaining = JSON.parse(localStorage.getItem('my_favorite_hotels')).filter(({ hotel_id })=> hotel_id !== Number(id))
    this.favHotels = remaining
    localStorage.setItem('my_favorite_hotels', JSON.stringify(this.favHotels));

  }

}

export default localStorageService;