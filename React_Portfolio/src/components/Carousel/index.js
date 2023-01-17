import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import  Pro from '../../assets/projects/amazon.png';
import  Jb from '../../assets/projects/apple.jpg';
import  Bj from '../../assets/projects/vii.jpg';
import  Kp from '../../assets/projects/keep.png'



<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
  integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
  crossorigin="anonymous"
/>


function Car() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src={Pro}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 style={{color:"black"}}><b>Amazon Clone</b></h3>
          <p style={{color:"black"}}>Made with React and Firebase.
          <Button variant="dark"href="https://clone-26fa8.web.app/;">Link</Button> 
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src= {Jb}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 style={{color:"orange"}}><b>Apple Email</b></h3>
          <p style={{color:"orange"}}> Made with HTML and CSS 
          <Button variant="dark" href="https://jmd2020.github.io/Joseph-Debblay-II/html_emails_apple/apple.html">Link</Button> </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Bj}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 style={{color:"orange"}}><b>Steam Email</b></h3>
          <p style={{color:"orange"}}>
            Made with HTML and CSS
            <Button variant="dark" href="https://jmd2020.github.io/Joseph-Debblay-II/html_emails_steam/steam.html">Link</Button> 
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Kp}
          alt="Fourth slide"
        />

        <Carousel.Caption>
          <h3 style={{color:"black"}}><b>Keeper App</b></h3>
          <p style={{color:"black"}}>
            Made with HTML and CSS
            <Button variant="dark" href="https://keeper-app-cbd30.web.app/">Link</Button> 
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Car;


