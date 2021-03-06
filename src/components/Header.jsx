import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default () => {
  const data = useStaticQuery(
    graphql`
      {
        strapiWelcomePage {
          Slideshow {
            url
          }
        }
      }
    `
  )

  return (
    <div
      id="top"
      className="header"
      style={{
        backgroundImage: `url(http://localhost:1337${data.strapiWelcomePage.Slideshow[0].url})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div class="col-md-6 col-md-offset-3" className="vert-text">
        <img
          class="col-md-6 col-md-offset-3"
          className="img-rounded"
          alt="Company Logo"
          src="/img/logo.png"
        />
        <h2>
          <em />
        </h2>
        <ul className="justify-content-center">
          <li>
            <a
              className="link_btn1"
              href="https://www.facebook.com/Kovasznai-Photo-269795847306504/"
            >
              {" "}
              <i className="fab fa-facebook-f " />
            </a>
          </li>
          <li>
            <a
              className="link_btn2"
              href="https://www.linkedin.com/in/bal%C3%A1zs-kov%C3%A1sznai-13652b192/"
            >
              {" "}
              <i className="fab fa-linkedin " />
            </a>
          </li>
          <li>
            <a
              className="link_btn3"
              href="https://www.instagram.com/balazskovasznai/"
            >
              <i className="fab fa-instagram " />
            </a>
          </li>
          <li>
            <a className="link_btn4" href="https://500px.com/balazskovasznai">
              <i className="fab fa-500px " />
            </a>
          </li>
          <li>
            <a className="link_btn5" href="mailto:kovasznaibalazs@gmail.com">
              <i className="far fa-envelope " />
            </a>
          </li>
        </ul>
        <br />
      </div>
    </div>
  )
}
