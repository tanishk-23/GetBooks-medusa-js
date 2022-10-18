import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.css'
export default function Home() {
  return (
    <div>
    {/* <!-- banner section --> */}
    <section id={styles.banner}>
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <p className={styles.promo_title}>BEST PLACE TO RENT BOOKS </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam vel quia, natus perspiciatis nam distinctio. Sed facilis odit amet nisi.</p>
          <button className={styles.RentNow}>RENT NOW</button>
          </div>
          <div className="col-md-6"><img src="assets/images/bannerIMG/newImg.png" className={`${styles.img_book} img-fluid`}/></div>
        </div>
      </div>
      <img src="assets/images/wave1.png" className={styles.wave-1}/>
  </section>
  {/* <!-- just added section --> */}
  <section>
    <div className="container text-center">
      <h1 className={styles.title}>Just Added</h1>
      <hr className={styles.line}/>
      <div className="row my-3 mx-5">
        <div className="col-md-2 mx-3 my-2">
          <div className="card" style={{width: 10 +"rem"}}>
            <img src="assets/images/bannerIMG/newStack.png" className="card-img-top" alt="..."/>
            <div className="card-body">
              <p className="card-text">Some quick example text to  </p>
            </div>
          </div>
        </div>
        <div className="col-md-2 mx-3 my-2">
          <div className="card" style={{width: 10 +"rem"}}>
            <img src="assets/images/bannerIMG/newStack.png" className="card-img-top" alt="..."/>
            <div className="card-body">
              <p className="card-text">Some quick example text to build </p>
            </div>
          </div>
        </div>
        <div className="col-md-2 mx-3 my-2">
          <div className="card" style={{width: 10 +"rem"}}>
            <img src="assets/images/bannerIMG/newStack.png" className="card-img-top img-fluid" alt="..."/>
            <div className="card-body">
              <p className="card-text">Some quick example text to build </p>
            </div>
          </div>
        </div>
        <div className="col-md-2 mx-3 my-2">
          <div className="card" style={{width: 10 +"rem"}}>
            <img src="assets/images/bannerIMG/newStack.png" className="card-img-top img-fluid" alt="..."/>
            <div className="card-body">
              <p className="card-text">Some quick example text to build </p>
            </div>
          </div>
        </div>
        <div className="col-md-2 mx-3 my-2">
          <div className="card" style={{width: 10 +"rem"}}>
            <img src="assets/images/bannerIMG/newStack.png" className="card-img-top img-fluid" alt="..."/>
            <div className="card-body">
              <p className="card-text">Some quick example text to build </p>
            </div>
          </div>
        </div>
      </div>
      <hr className={styles.line}/>
    </div>
  </section>
  {/* <!-- bestsellers section--> */}
  <section className={styles.bestsellers}>
    <div className="container text-center">
      <h1 className={styles.title}>Best Sellers</h1>
      <hr className="line"/>
      <div className="row my-3 mx-5">
        <div className="col-md-2 mx-3 my-2">
          <div className="card" style={{width: 10 +"rem"}}>
            <img src="assets/images/bannerIMG/newStack.png" className="card-img-top" alt="..."/>
            <div className="card-body">
              <p className="card-text">Some quick example text to  </p>
            </div>
          </div>
        </div>
        <div className="col-md-2 mx-3 my-2">
          <div className="card" style={{width: 10 +"rem"}}>
            <img src="assets/images/bannerIMG/newStack.png" className="card-img-top" alt="..."/>
            <div className="card-body">
              <p className="card-text">Some quick example text to build </p>
            </div>
          </div>
        </div>
        <div className="col-md-2 mx-3 my-2">
          <div className="card" style={{width: 10 +"rem"}}>
            <img src="assets/images/bannerIMG/newStack.png" className="card-img-top img-fluid" alt="..."/>
            <div className="card-body">
              <p className="card-text">Some quick example text to build </p>
            </div>
          </div>
        </div>
        <div className="col-md-2 mx-3 my-2">
          <div className="card" style={{width: 10 +"rem"}}>
            <img src="assets/images/bannerIMG/newStack.png" className="card-img-top img-fluid" alt="..."/>
            <div className="card-body">
              <p className="card-text">Some quick example text to build </p>
            </div>
          </div>
        </div>
        <div className="col-md-2 mx-3 my-2">
          <div className="card" style={{width: 10 +"rem"}}>
            <img src="assets/images/bannerIMG/newStack.png" className="card-img-top img-fluid" alt="..."/>
            <div className="card-body">
              <p className="card-text">Some quick example text to build </p>
            </div>
          </div>
        </div>
      </div>
      <hr className={styles.line}/>
    </div>
  </section>
  {/* <!-- about us --> */}
  <section id={styles.aboutus}>
    <div className="container ">
      <h1 className={`${styles.title} text-center`}>About Us</h1>
      <div className="row">
        <div className="col-md-6">
          <p className={styles.aboutus_title}>Why choose us</p>
            <ul className="list">
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
            </ul>
        </div>
        <div className="col-md-6"><img src="assets/images/network.png" className="img-fluid"/></div>
      </div>
    </div>
  </section>
  {/* <!-- footer section --> */}
  <section id={styles.contact}>
    <img src="assets/images/wave2.png" className={styles.wave-2}/>
    <div className="container">
      <div className="row">
        <div className="col-md-4 footer-box">
          <h1>BookStore</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vel tempore iure non, mollitia sunt soluta placeat pariatur? Architecto, harum!</p>
        </div>
        <div className="col-md-4 my-4 mx-5">
          <p><b>CONTACT US</b></p>
          <p><i className="fas fa-map-marker"></i>IT Park,Bhopal</p>
          <p><i className="fas fa-phone-alt"></i>0755-662630</p>
          <p><i className="fas fa-envelope"></i>Bookstore@gmail.com</p>
        </div>
      </div>
    </div>
  </section>
  <script src="https://kit.fontawesome.com/e6843aaddf.js" crossorigin="anonymous"></script>
    {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script> */}
    </div>
  )
}
