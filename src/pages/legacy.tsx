import type { NextPage } from "next";
import Head from "next/head";
import { legacyRoot } from "./_document";

const Legacy: NextPage = () => {
  return (
    <>
      <Head>
        <title>Gianluca Carucci - Software Engineer</title>
      </Head>

      <div id="html5Loader"></div>

      <div id="wrapper" className="hidden">
        <div id="overlay" className="fixed overlay">
          <div className="scroller scroller-black"></div>
          <div className="progressbar"></div>
          <a
            href="http://it.linkedin.com/in/rucka"
            target="_blank"
            rel="noreferrer"
          >
            <div className="linkedin"></div>
          </a>
          <a href="http://reboot.carucci.org" target="_blank" rel="noreferrer">
            <div className="blogger"></div>
          </a>
        </div>
        <nav id="bar" className="ontop">
          <div className="logo-bar-white"></div>
          <a
            href="http:/reboot.carucci.org"
            className="social"
            target="_blank"
            rel="noreferrer"
          >
            <div className="social-white blogger-icon"></div>
          </a>
          <a
            href="http://it.linkedin.com/in/rucka"
            className="social"
            target="_blank"
            rel="noreferrer"
          >
            <div className="social-white linkedin-icon"></div>
          </a>
          <ul>
            <li>
              <a href="#" data-ref="overlay">
                home
              </a>
            </li>
            <li>
              <a href="#" data-ref="scene1">
                about me
              </a>
            </li>
            <li>
              <a href="#" data-ref="scene2">
                life
              </a>
            </li>
            <li>
              <a href="#" data-ref="scene3">
                work
              </a>
            </li>
            <li>
              <a href="#" data-ref="contact">
                contact
              </a>
            </li>
          </ul>
        </nav>
        <div id="intro" className="fixed onlevel1">
          <div className="quote">
            <blockquote>
              Any fool can make things bigger, more complex, and more violent.
              It takes a touch of genius-and a lot of courage-to move in the
              opposite direction.
              <cite>Albert Einstein</cite>
            </blockquote>
          </div>
          <div className="scroller scroller-white"></div>
          <div className="progressbar"></div>
        </div>
        <section id="scene1" className="scene onlevel2">
          <div id="summary">
            <h2>let me introduce myself</h2>
            <div className="textblock">
              <p>
                My name is Gianluca Carucci, I am seasoned IT professionist with
                a degree in Computer Science and over 10 years experience in a
                wide variety of high availability and large scale systems.
                <br />
                As appreciative of Agile methodologies I&apos;m particularly
                focused on Scrum and Extreme Programming practices to
                continuously increase customers&apos; return of investment.
                <br />
                Experience working closely to UX teams has taught me how
                starting from user experience design is the key to success for a
                software product.
                <br />
                Last but not least I have been a water polo player since 1986.
              </p>
            </div>
          </div>
          <div id="heros">
            <h2>top 5 heroes inspire me</h2>
            <ul>
              <li>
                <div className="circular-image">
                  <img src={`${legacyRoot}images/heros/senna.jpg`} alt="" />
                </div>
                <span>Ayrton Senna</span>
              </li>
              <li>
                <div className="circular-image">
                  <img src={`${legacyRoot}images/heros/beck.jpg`} alt="" />
                </div>
                <span>Kent Beck</span>
              </li>
              <li>
                <div className="circular-image">
                  <img src={`${legacyRoot}images/heros/deandre.jpg`} alt="" />
                </div>
                <span>Fabrizio De Andre</span>
              </li>
              <li>
                <div className="circular-image">
                  <img src={`${legacyRoot}images/heros/campagna.jpg`} alt="" />
                </div>
                <span>Alessandro Campagna</span>
              </li>
              <li>
                <div className="circular-image">
                  <img src={`${legacyRoot}images/heros/norman.jpg`} alt="" />
                </div>
                <span>Donald A. Norman</span>
              </li>
            </ul>
          </div>
        </section>
        <section id="scene2" className="scene onlevel2">
          <h2>not only coding</h2>
          <section id="hobbies">
            <section className="hobby food">
              <div className="bkg"></div>
              <hgroup>
                <h3>food and cooking</h3>
              </hgroup>
            </section>
            <section className="hobby juve">
              <div className="bkg"></div>
              <hgroup>
                <h3>juventus</h3>
              </hgroup>
            </section>
            <section className="hobby daughter">
              <div className="bkg"></div>
              <hgroup>
                <h3>my daughter</h3>
              </hgroup>
            </section>

            <section className="hobby waterpolo">
              <div className="bkg"></div>
              <hgroup>
                <h3>waterpolo</h3>
              </hgroup>
            </section>
            <section className="hobby interior-design">
              <div className="bkg"></div>
              <hgroup>
                <h3>interior design</h3>
              </hgroup>
            </section>
          </section>
        </section>
        <section id="scene3" className="scene onlevel2">
          <h2>down to business</h2>
          <div id="business">
            <div className="pills" id="firstcloud"></div>
            <div className="skills">
              <div className="skill-item">
                <input
                  data-fgcolor="#66CC66"
                  data-readonly="true"
                  type="text"
                  data-width="120"
                  data-height="120"
                  className="skill"
                  data-rel="95"
                  value="0"
                />
                <span className="skill-text">architecture</span>
              </div>
              <div className="skill-item">
                <input
                  data-fgcolor="#222222"
                  data-readonly="true"
                  type="text"
                  data-width="120"
                  data-height="120"
                  className="skill"
                  data-rel="80"
                  value="0"
                />
                <span className="skill-text">html5/css</span>
              </div>
              <div className="skill-item">
                <input
                  data-fgcolor="#66CC66"
                  data-readonly="true"
                  type="text"
                  data-width="120"
                  data-height="120"
                  className="skill"
                  data-rel="90"
                  value="0"
                />
                <span className="skill-text">.net</span>
              </div>
              <div className="skill-item">
                <input
                  data-fgcolor="#222222"
                  data-readonly="true"
                  type="text"
                  data-width="120"
                  data-height="120"
                  className="skill"
                  data-rel="80"
                  value="0"
                />
                <span className="skill-text">functional programming</span>
              </div>
              <div className="skill-item">
                <input
                  data-fgcolor="#66CC66"
                  data-readonly="true"
                  type="text"
                  data-width="120"
                  data-height="120"
                  className="skill"
                  data-rel="80"
                  value="0"
                />
                <span className="skill-text">big data</span>
              </div>
              <div className="skill-item">
                <input
                  data-fgcolor="#222222"
                  data-readonly="true"
                  type="text"
                  data-width="120"
                  data-height="120"
                  className="skill"
                  data-rel="90"
                  value="0"
                />
                <span className="skill-text">agile&ALM</span>
              </div>
            </div>
            <div className="pills" id="secondcloud"></div>
          </div>
        </section>
        <div id="contact" className="fixed onlevel0">
          <div className="content">
            <h1>keep in touch</h1>
            <ul className="info ae-animation-hatch">
              <li></li>
              <li>
                <a href="mailto:contact.gianluca@carucci.org">
                  <div className="social-white mail-icon"></div>
                  <p>contact.gianluca@carucci.org</p>
                </a>
              </li>
              <li></li>
            </ul>
            <div className="clearfix"></div>
            <ul className="social-links">
              <li>
                <a
                  href="http://facebook.com/rucka.it"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="social-white facebook-square-icon"></div>
                </a>
              </li>
              <li>
                <a
                  href="http://twitter.com/rucka"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="social-white twitter-icon"></div>
                </a>
              </li>
              <li>
                <a
                  href="http://it.linkedin.com/in/rucka"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="social-white linkedin-icon"></div>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/rucka"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="social-white github-icon"></div>
                </a>
              </li>
              <li>
                <a
                  href="http://reboot.carucci.org"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="social-white blogger-icon"></div>
                </a>
              </li>
            </ul>
          </div>
          <div id="copyright">
            <p>
              Except where otherwise noted, content on this site is licensed
              under
              <a
                href="http://creativecommons.org/licenses/by/3.0/"
                target="_blank"
                rel="noreferrer"
              >
                Creative Commons Attribution 3.0 License
              </a>
            </p>
            <p>
              All photos are under copyright of
              <a
                href="http://photo.carucci.org"
                target="_blank"
                rel="noreferrer"
              >
                � Francesco Emanuele Carucci Photography
              </a>
            </p>
          </div>
        </div>
      </div>

      <script
        async
        src={`${legacyRoot}vendor/html5.min.js`}
        type="text/javascript"
      ></script>
      <script
        async
        src={`${legacyRoot}vendor/jquery.min.js`}
        type="text/javascript"
      ></script>

      <script
        async
        src={`${legacyRoot}vendor/jquery.html5loader/animations/jquery.html5Loader.line.min.js`}
        type="text/javascript"
      ></script>
      <script
        async
        src={`${legacyRoot}vendor/jquery.html5loader/jquery.html5Loader.min.js`}
        type="text/javascript"
      ></script>
      <script
        async
        src={`${legacyRoot}scripts/loader.min.js`}
        type="text/javascript"
      ></script>

      <script
        async
        src={`${legacyRoot}vendor/underscore.min.js`}
        type="text/javascript"
      ></script>
      <script
        async
        src={`${legacyRoot}vendor/jquery.awesomeCloud.min.js`}
        type="text/javascript"
      ></script>
      <script
        async
        src={`${legacyRoot}vendor/jquery.knob.min.js`}
        type="text/javascript"
      ></script>
      <script
        async
        src={`${legacyRoot}vendor/jquery.scrollTo.min.js`}
        type="text/javascript"
      ></script>
      <script
        async
        src={`${legacyRoot}vendor/waypoints.min.js`}
        type="text/javascript"
      ></script>
      <script
        async
        src={`${legacyRoot}scripts/default.min.js`}
        type="text/javascript"
      ></script>
      <script
        async
        src={`${legacyRoot}scripts/ga.min.js`}
        type="text/javascript"
      ></script>
    </>
  );
};

export default Legacy;
