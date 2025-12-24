import banner from "../assets/images/banner-image.png";
function Header(){
    return(
        <>
        <section id="home" class="py-5 bg-text" data-text="01">
            <div class="row">
              <div class="col-lg-6">
                <div class="banner-image text-center" data-aos="fade-right">
                  {/* <img src="../assets/images/banner-image.png" alt="banner" class="img-fluid"/> */}
                  <img src={banner} alt="banner" class="img-fluid"/>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="banner-content my-1 pt-1 my-lg-5 pt-lg-5" data-aos="fade-in">
                  <span class="text-muted text-uppercase">Designer / Developer</span>
                  <h1 class="banner-title display-xl lh-1 txt-fx slide-up " style={{ letterSpacing: "0em" }} >Syed Ali</h1>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-lg-3">
                {/* <div class="icon-box" data-aos="fade-up">
                  <span>01</span>
                  <h3 class="sub-heading">UI/UX Design</h3>
                  <p>Designing intuitive and user-friendly interfaces through wireframing, prototyping, and usability principles.</p>
                </div> */}

                <div class="icon-box" data-aos="fade-up" data-aos-delay="200">
                  <span>03</span>
                  <h3 class="sub-heading">Graphic Design/motion Graphic</h3>
                  <p>Creating professional graphics and lightweight motion elements for websites and apps.
                    <br />
                    Focused on clean composition, color balance, and smooth animated micro-interactions.</p>
                </div>
              </div>
              <div class="col-lg-3">
                <div class="icon-box" data-aos="fade-up" data-aos-delay="100">
                  <span>02</span>
                  <h3 class="sub-heading">Illustration/Logo Design</h3>
                  <p>Skilled in developing unique logos and vector illustrations with strong visual identity.</p>
                </div>
              </div>
              <div class="col-lg-3">
                {/* <div class="icon-box" data-aos="fade-up" data-aos-delay="200">
                  <span>03</span>
                  <h3 class="sub-heading">Graphic Design/motion Graphic</h3>
                  <p>Creating professional graphics and lightweight motion elements for websites and apps.
                    <br />
                    Focused on clean composition, color balance, and smooth animated micro-interactions.</p>
                </div> */}

                <div class="icon-box" data-aos="fade-up">
                  <span>01</span>
                  <h3 class="sub-heading">UI/UX Design</h3>
                  <p>Designing intuitive and user-friendly interfaces through wireframing, prototyping, and usability principles.</p>
                </div>
              </div>
              <div class="col-lg-3">
                <a href="#portfolio" class="btn btn-dark text-uppercase py-4 px-5" data-aos="fade-up" data-aos-delay="300">View All Work</a>
              </div>
              
              <div class="col-lg-3 mt-4">
                <a href="https://drive.google.com/file/d/1Bm3uV3VV4dNArRBev73x-l5XOaWB_773/view?usp=drivesdk" class="btn btn-dark text-uppercase py-4 px-5" data-aos="fade-up" data-aos-delay="300">View Resume</a>
              </div>
            </div>
          </section>
        </>
    )
}
export default Header