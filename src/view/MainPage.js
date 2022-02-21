import React from 'react'

const MainPage = () => {
  return (
    <>
      <div class="container">
        <div class ="row fluid" id="spacer">space</div>
        <div class="row">
          <div class="col">
              {//https://getbootstrap.com/docs/5.0/components/carousel/#with-controls
              }
            <div
              id="carouselExampleControls"
              class="carousel slide bg-dark"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="logo512.png" class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src="..." class="d-block w-100" alt="logo512.png" />
                </div>
                <div class="carousel-item">
                  <img src="logo512.png" class="d-block w-100" alt="..." />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div class="col">
            <div class="row">inside 1 of 2</div>
            <div class="row">inside 2 of 2</div>
          </div>
        </div>
        <div class="row">
          <div class="col">1 of 3</div>
          <div class="col">2 of 3</div>
          <div class="col">3 of 3</div>
        </div>
      </div>
    </>
  )
}

export default MainPage
