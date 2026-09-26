import React from "react";

export default function BootstrapExample() {
  let data = [
    {
      id: 1001,
      name: "Product1",
      basePrice: 8900,
      discount: 50,
      finalPrice: 4450,
      pic: "",
    },
    {
      id: 1002,
      name: "Product2",
      basePrice: 8900,
      discount: 50,
      finalPrice: 4450,
      pic: "",
    },
    {
      id: 1003,
      name: "Product3",
      basePrice: 8900,
      discount: 50,
      finalPrice: 4450,
      pic: "",
    },
    {
      id: 1004,
      name: "Product4",
      basePrice: 8900,
      discount: 50,
      finalPrice: 4450,
      pic: "",
    },
    {
      id: 1005,
      name: "Product5",
      basePrice: 8900,
      discount: 50,
      finalPrice: 4450,
      pic: "",
    },
    {
      id: 1006,
      name: "Product6",
      basePrice: 8900,
      discount: 50,
      finalPrice: 4450,
      pic: "",
    },
    {
      id: 1007,
      name: "Product7",
      basePrice: 8900,
      discount: 50,
      finalPrice: 4450,
      pic: "",
    },
    {
      id: 1008,
      name: "Product8",
      basePrice: 8900,
      discount: 50,
      finalPrice: 4450,
      pic: "",
    },
    {
      id: 1009,
      name: "Product9",
      basePrice: 8900,
      discount: 50,
      finalPrice: 4450,
      pic: "",
    },
    {
      id: 1010,
      name: "Product10",
      basePrice: 8900,
      discount: 50,
      finalPrice: 4450,
      pic: "",
    },
    {
      id: 1011,
      name: "Product11",
      basePrice: 8900,
      discount: 50,
      finalPrice: 4450,
      pic: "",
    },
    {
      id: 1012,
      name: "Product12",
      basePrice: 8900,
      discount: 50,
      finalPrice: 4450,
      pic: "",
    },
    {
      id: 1013,
      name: "Product13",
      basePrice: 8900,
      discount: 50,
      finalPrice: 4450,
      pic: "",
    },
    {
      id: 1014,
      name: "Product14",
      basePrice: 8900,
      discount: 50,
      finalPrice: 4450,
      pic: "",
    },
    {
      id: 1015,
      name: "Product15",
      basePrice: 8900,
      discount: 50,
      finalPrice: 4450,
      pic: "",
    },
    {
      id: 1016,
      name: "Product16",
      basePrice: 8900,
      discount: 50,
      finalPrice: 4450,
      pic: "",
    },
    {
      id: 1017,
      name: "Product17",
      basePrice: 8900,
      discount: 50,
      finalPrice: 4450,
      pic: "",
    },
    {
      id: 1018,
      name: "Product18",
      basePrice: 8900,
      discount: 50,
      finalPrice: 4450,
      pic: "",
    },
    {
      id: 1019,
      name: "Product19",
      basePrice: 8900,
      discount: 50,
      finalPrice: 4450,
      pic: "",
    },
    {
      id: 1020,
      name: "Product20",
      basePrice: 8900,
      discount: 50,
      finalPrice: 4450,
      pic: "",
    },
  ];
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-secondary">
        <div className="container-fluid text-light">
          ShopMart
          <a className="navbar-brand" href="#"></a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link text-light active"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                  Shop
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                  Feature
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                  Faq
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                  Testimonial
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                  Contact Us
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link text-light dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Mukul
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Profile
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Admin Dashboard
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Whislist
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Cart
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Checkout
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Cart
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Orders
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Logout
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-light" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="5"
            aria-label="Slide 6"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="6"
            aria-label="Slide 7"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="7"
            aria-label="Slide 8"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="8"
            aria-label="Slide 9"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="9"
            aria-label="Slide 10"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="/images/A1.jpg"
              height={600}
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="/images/A2.jpg"
              height={600}
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="/images/A3.jpg"
              height={600}
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="/images/A4.jpg"
              height={600}
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="/images/A5.jpg"
              height={600}
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="/images/A6.jpg"
              height={600}
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="/images/A7.jpg"
              height={600}
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="/images/A8.jpg"
              height={600}
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="/images/A9.jpg"
              height={600}
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="/images/A10.jpg"
              height={600}
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="container-fluid">
        <h5 className="bg-secondary text-center text-light p-2">
          Latest Products
        </h5>
      </div>

      <div>
        {data.map((item) => {
          return (
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
              <div>
                <div className="card">
                  <img src="..." className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card’s content.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
