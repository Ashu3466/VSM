

export const Home = () => {
    return (
        <>
        
        <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>our website best company inclued</p>
              <h1>Welcome to Our VMS System</h1>
              <p>
                Are you ready to take your business to the next level with
                cutting-edge IT solutions? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Quia architecto, voluptates facere similique expedita inventore recusandae error minus dignissimos a.
              </p>
              <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn">connect now</button>
                </a>
                <a href="/services">
                  <button className="btn secondary-btn">learn more</button>
                </a>
              </div>
            </div>

            {/* hero images  */}
            <div className="hero-image">
              <img
                src="/images/register.jpg"
                alt="coding together"
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>

      {/* second section */}

        <section className="section-analytics">
            <div className="container grid grid-four-cols">
                <div className="div1">
                    <h2>50+</h2>
                    <p>Registered companies</p>
                </div>

                <div className="div1">
                    <h2>10,000+</h2>
                    <p>Happy clients</p>
                </div>

                <div className="div1">
                    <h2>500+</h2>
                    <p>Well knwon devlopers</p>
                </div>

                <div className="div1">
                    <h2>50+</h2>
                    <p>Services</p>
                </div>
            </div>
        </section>


        {/* Third section */}

        <section className="section-hero">
        <div className="container grid grid-two-cols">
          {/* hero images  */}
          <div className="hero-image">
            <img
              src="/images/register.jpg"
              alt="coding together"
              width="400"
              height="500"
            />
          </div>

          <div className="hero-content">
            <p>We are here to help you</p>
            <h1>Get Started Today</h1>
            <p>
              Ready to take the first step towards a more efficient and secure
              IT infrastructure? Contact us today for a free consultation and
              let's discuss how Thapa Technical can help your business thrive in
              the digital age.
            </p>
            <div className="btn btn-group">
              <a href="/contact">
                <button className="btn">connect now</button>
              </a>
              <a href="/services">
                <button className="btn secondary-btn">learn more</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    


        </>
    )
}