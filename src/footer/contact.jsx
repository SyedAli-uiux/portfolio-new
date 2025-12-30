
function Contact(){
  
    return(
        <>
        <section id="contact" class="my-5 py-5 bg-text" data-text="05">
            <div class="container">
              <div class="row justify-content-center mb-5">
                <div class="col-lg-6" data-aos="fade-up">
                  <span class="text-muted text-uppercase">Personal Info</span>
                  <h2 class="display-1 txt-fx slide-up">Contact Me</h2>
                  <p>Get in touch for UI/UX, graphic design, and creative project inquiries.</p>
                </div>
              </div>
              <div class="row d-flex g-5">
                <div class="col-lg-7" data-aos="fade-up">
                  <h3>Frequently Asked Questions</h3>
                  <div class="accordion" id="accordionExample2">
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse"
                          data-bs-target="#accordion-collapse1" aria-expanded="true"
                          aria-controls="accordion-collapse1">
                          What experience do you have in my industry?
                        </button>
                      </h2>
                      <div id="accordion-collapse1" class="accordion-collapse collapse show"
                        aria-labelledby="headingOne" data-bs-parent="#accordionExample2">
                        <div class="accordion-body">
                         I have strong hands-on experience in <b>UI/UX design, graphic design</b>, <b>illustration</b>,and <b>motion graphics</b>—working on real client projects, <b>branding</b>, <b>logos</b>,<b>web designs</b>, and <b>mobile app interfaces</b>.
                         I’m continuously improving, exploring new tools, and creating designs that are modern, user-friendly, and visually impactful..
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                          data-bs-target="#accordion-collapse2" aria-expanded="false"
                          aria-controls="accordion-collapse2">
                          How many clients do you typically work with at once?
                        </button>
                      </h2>
                      <div id="accordion-collapse2" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample2">
                        <div class="accordion-body">
                          I usually work with a small number of clients at a time so I can focus fully on quality and creativity.
                          This allows me to deliver detailed, polished work—whether it’s UI/UX, graphic design, or branding—while maintaining clear communication and fast turnaround.
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                          data-bs-target="#accordion-collapse3" aria-expanded="false"
                          aria-controls="accordion-collapse3">
                         What are the tools you have handled?
                        </button>
                      </h2>
                      <div id="accordion-collapse3" class="accordion-collapse collapse" aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample2">
                        <div class="accordion-body">
                          I have hands-on experience with a wide range of design and development tools, including <b>Adobe Photoshop</b>,<b>Illustrator</b> ,<b>After Effects</b> , and <b>Figma for UI/UX design</b>.
                           I also work with <b>HTML</b>,<b>CSS</b>,<b>JavaScript</b>,<b>React</b>, and <b>Git/GitHub</b> for web development. In addition, I have knowledge of <b>Java</b>, <b>SQL</b>, and <b>JDBC </b>for backend and database operations. These tools help me create visually appealing, responsive, and user-friendly digital experiences.
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </div>

                <div class="col-lg-5">
                  <div class="right-content" data-aos="fade-up">

                    <div class="element-header align-right">
                      <h3>Feel free to send me a message or any word of appreciation.</h3>
                    </div>

                    <div class="contact-form py-4">
                      <form id="form" class="form-group">
                        <div class="pb-2"><input type="text" name="name" placeholder="Your Full Name"
                            class="form-control"/>
                        </div>
                        <div class="pb-2"><input type="text" name="address" placeholder="Your Email Address"
                            class="form-control"/></div>
                        <div class="pb-2"><textarea placeholder="Your Message" rows="6" class="form-control"></textarea>
                        </div>
                        <button type="submit" name="submit" class="btn btn-dark w-100 btn-rounded">Submit</button>
                      </form>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>
        </>
    )
}
export default Contact;