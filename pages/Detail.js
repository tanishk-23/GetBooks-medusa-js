import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import styles from '../styles/detail.module.css'
function Detail() {
  return (
    <div>
        <section>
        <div class={`${styles.container} my-5 mx-5 py-3 px-5 d-flex`}>
            <div class="row" style={{height: "fit-content"}}>
                <div class="col-2 pt-2">
                    <img src="assets/images/bannerIMG/newStack.png" class={styles.product_img}/>
                </div>
                <div class="col-5 px-5" style={{height: "fit-content"}}>
                    <h2>Product Name</h2>
                    <p><b>by:</b> author's name</p>
                    <p><b>publisher:</b> flamingo</p>
                    <p><b> pages:</b> 304</p>
                    <p><b>price:</b>25Rs/day</p>
                    <div class={`${styles.buttons} d-flex`}>
                      <button class={`${styles.btn_rent} me-3`}>Rent Now</button>
                      <button class={styles.btn_wishlist}>Add to Wishlist</button>
                    </div>
                    </div>
              
                      <div class={`col-4 ${styles.Sbooks} text-center`}>
                        <h3>Similar books</h3>
                        <div class={styles.Sbox}>
                        <div class="card" style={{width: 8+"rem", height: 10+"rem"}}>
                          <img src="assets/images/bannerIMG/newStack.png" class="card-img-top" style={{height:100+"px", width: 120+"px"}}/>
                          <div class="card-body pt-0">
                            <p class="card-text">Some quick example</p>
                          </div>
                        </div>
                        <div class="card mt-3" style={{width: 8+"rem", height: 10+"rem"}}>
                          <img src="assets/images/bannerIMG/newStack.png" class= "card-img-top" style={{height:100+"px", width: 120+"px"}}/>
                          <div class="card-body pt-0">
                            <p class="card-text ">Some quick example</p>
                          </div>
                        </div>
                        <div class="card mt-3" style={{width: 8+"rem", height: 10+"rem"}}>
                          <img src="assets/images/bannerIMG/newStack.png" class="card-img-top" style={{height:100+"px", width: 120+"px"}}/>
                          <div class="card-body pt-0">
                            <p class="card-text">Some quick example</p>
                          </div>
                        </div>
                      </div>
                      </div>
              
           
                <div class="row" >
                  <div class="col-8">
                    {/* <!-- <hr> --> */}
                    <h4 class="mb-3">Description</h4>
                    <div class={styles.description}>
                    <div class="row">
                        <div class="col">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam illum obcaecati debitis corrupti quasi repudiandae fugit id praesentium velit exercitationem. Velit repudiandae porro dolorem explicabo eveniet nihil numquam, maiores repellat? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae minima culpa eos, accusantium ea nisi rerum officiis placeat distinctio aliquid quod fugit iste architecto illum nam. Id dicta perferendis consequuntur.
                        </div>
                    </div>
                  </div>
                </div>
                </div>
            </div>
        </div>

    </section>
    
      {/* <!-- just added section --> */}
  <section class={styles.just_added}>
    <div class="container">
      <h3 class="title">Just Added</h3>
      <hr class={styles.line}/>
      <div class="row my-3 mx-5">
        <div class="col-md-2 mx-3 my-2" >
          <div class="card mt-3" style={{width: 8+"rem", height: 10+"rem"}}>
            <img src="assets/images/bannerIMG/newStack.png" class="card-img-top" style={{height:100+"px", width: 120+"px"}}/>
            <div class="card-body pt-0">
              <p class="card-text">Some quick example</p>
            </div>
          </div>
        </div>
        <div class="col-md-2 mx-3 my-2">
        <div class="card mt-3" style={{width: 8+"rem", height: 10+"rem"}}>
          <img src="assets/images/bannerIMG/newStack.png" class="card-img-top" style={{height:100+"px", width: 120+"px"}}/>
          <div class="card-body pt-0">
            <p class="card-text">Some quick example</p>
          </div>
        </div>
        </div>
        <div class="col-md-2 mx-3 my-2">
          <div class="card mt-3" style={{width: 8+"rem", height: 10+"rem"}}>
            <img src="assets/images/bannerIMG/newStack.png" class="card-img-top" style={{height:100+"px", width: 120+"px"}}/>
            <div class="card-body pt-0">
              <p class="card-text">Some quick example</p>
            </div>
          </div>
        </div>
      
        <div class="col-md-2 mx-3 my-2">
          <div class="card mt-3" style={{width: 8+"rem", height: 10+"rem"}}>
            <img src="assets/images/bannerIMG/newStack.png" class="card-img-top" style={{height:100+"px", width: 120+"px"}}/>
            <div class="card-body pt-0">
              <p class="card-text">Some quick example</p>
            </div>
          </div>
        </div>
        <div class="col-md-2 mx-3 my-2">
          <div class="card mt-3" style={{width: 8+"rem", height: 10+"rem"}}>
            <img src="assets/images/bannerIMG/newStack.png" class="card-img-top" style={{height:100+"px", width: 120+"px"}}/>
            <div class="card-body pt-0">
              <p class="card-text">Some quick example</p>
            </div>
          </div>
        </div>
        </div>
      <hr class={styles.line}/>
    </div>
  </section>
    <section class={styles.wave}>
        <div>
            <img src="assets/images/wave2.png" class={styles.wave_2}/>
        </div>
    </section>
    </div>
  )
}

export default Detail