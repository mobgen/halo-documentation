const React = require('react');

class Index extends React.Component {
  render() {
    return (
        <div>
          <script src="/js/jquery.min.js"/>
          <script src="/js/jquery.easing.1.3.js"/>
          <script src="/js/bootstrap.min.js"/>
          <script src="/js/jquery.waypoints.min.js"/>
          <script src="/js/jquery.magnific-popup.min.js"/>
          <script src="/js/jquery.countTo.js"/>
          <script src="/js/main.js"/>
          <div id="fh5co-page">
            <div id="fh5co-wrap">
              <header id="fh5co-hero" data-section="home" role="banner"
                      style={{background: 'url(/img/landing/home.jpg) top left', backgroundSize: 'cover'}}>
                <div class="fh5co-overlay"/>
                <div class="fh5co-intro">
                  <div class="container">
                    <div class="row">

                      <div class="col-md-6 fh5co-text">
                        <div class="intro-text">
                          <span class="h2 to-animate intro-animate-1">HALO</span>
                          <span class="logo-circle"></span>
                          <span class="h4">by MOBGEN | Accenture Interactive</span></div>
                        <p class="to-animate intro-animate-2">Inspired by years of mobile development experience,
                          understanding client necessities and continuous market research MOBGEN created HALO, a
                          software
                          as a service that provides you a flexible backend with no development.</p>
                        <p class="to-animate intro-animate-3"><a href="#contact" data-nav-section="contact-us"
                                                                 class="btn btn-primary btn-md">Contact Us!</a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </header>

              <div id="fh5co-main">
                <div id="fh5co-features-2" data-section="what-is-halo">
                  <div class="fh5co-features-2-content">
                    <div class="container">
                      <div class="row">
                        <div class="col-md-8 col-md-offset-2 fh5co-section-heading text-center">
                          <h2 class="fh5co-lead to-animate lab">What is Halo?</h2>
                          <p class="fh5co-sub to-animate">Control everything, from everywhere in every market your
                            company
                            works for. With HALO you are ready for the global market but providing a tailored app
                            experience.</p>
                        </div>
                        <div class="col-md-4 fh5co-text-wrap">
                          <div class="row text-center">
                            <div
                                class="col-md-12 col-sm-6 col-xs-6 col-xxs-12 fh5co-text animate-object features-2-animate-3">
                              <span class="fh5co-icon"><i class="fa fa-rocket"/></span>
                              <h4 class="fh5co-uppercase-sm">Scalable</h4>
                              <p>Set yourself up for growth with localised and global content</p>
                            </div>
                            <div
                                class="col-md-12 col-sm-6 col-xs-6 col-xxs-12 fh5co-text animate-object features-2-animate-4">
                              <span class="fh5co-icon"><i class="fa fa-mobile"/></span>
                              <h4 class="fh5co-uppercase-sm">Adaptable</h4>
                              <p>Use any of the available functionalities or integrate with your requirements onto the
                                platform</p>
                            </div>

                          </div>
                        </div>
                        <div class="col-md-4 col-md-push-4 fh5co-text-wrap">
                          <div class="row text-center">
                            <div
                                class="col-md-12 col-sm-6 col-xs-6 col-xxs-12 fh5co-text animate-object features-2-animate-5">
                              <span class="fh5co-icon"><i class="fa fa-users"/></span>
                              <h4 class="fh5co-uppercase-sm">Tailored</h4>
                              <p>Enable tailored market experiences with multi language content and per market
                                configuration and segmentation capabilities</p>
                            </div>
                            <div
                                class="col-md-12 col-sm-6 col-xs-6 col-xxs-12 fh5co-text animate-object features-2-animate-6">
                              <span class="fh5co-icon"><i class="fa fa-anchor"/></span>
                              <h4 class="fh5co-uppercase-sm">CMS Management</h4>
                              <p>Manage all you CMS features from one place</p>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-4 col-md-pull-4 fh5co-image animate-object features-2-animate-2">
                          <p class="text-center" style={{position: "relative"}}>
                            <img src="/img/landing/iphone_wrapper.png" class="" alt="iPhone frame"
                                 id="wines-app-frame"/>
                            <video id="wines-app" loop autoplay="">
                              <source src="./videos/enso.mp4"/>
                            </video>
                          </p>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>

                <div id="fh5co-products" data-section="what-do-we-offer">

                  <div class="container">
                    <div class="row">
                      <div class="col-md-8 col-md-offset-2 fh5co-section-heading text-center">
                        <h2 class="fh5co-lead animate-single product-animate-1 lab">What do we offer?</h2>
                        <p class="fh5co-sub animate-single product-animate-2">One platform to manage your content and
                          simultaneously reach all your mobile customers. Offer them a personalized experience with just
                          a
                          couple of clicks on our easy-to-use CMS.</p>
                      </div>

                      <div class="col-md-3 col-sm-6 col-xs-6 col-xxs-12">
                        <a href="videos/push-notifications.mp4" class="fh5co-figure to-animate popup-youtube">
                          <figure>
                            <img src="/img/landing/push-notifications.png" alt="HALO push notifications screenshot"
                                 class="img-responsive"/>
                          </figure>
                          <h3 class="fh5co-figure-lead">Push notifications</h3>
                          <p class="fh5co-figure-text">Send rich and highly segmented notifications to your customers to
                            increase the value of your service</p>
                        </a>
                      </div>
                      <div class="col-md-3 col-sm-6 col-xs-6 col-xxs-12">
                        <a href="videos/media-upload.mp4" class="fh5co-figure to-animate popup-youtube">
                          <figure>
                            <img src="/img/landing/media-upload.png" alt="HALO media upload screenshot"
                                 class="img-responsive"/>
                          </figure>
                          <h3 class="fh5co-figure-lead">Media upload</h3>
                          <p class="fh5co-figure-text">Upload your files and use us to host your stream video,
                            /img/landing and audio content towards the application</p>
                        </a>
                      </div>
                      <div class="clearfix visible-sm-block"/>
                      <div class="col-md-3 col-sm-6 col-xs-6 col-xxs-12">
                        <a href="videos/segmentation.mp4" class="fh5co-figure to-animate popup-youtube">
                          <figure>
                            <img src="/img/landing/segmentation.png" alt="HALO segmentation screenshot"
                                 class="img-responsive"/>
                          </figure>
                          <h3 class="fh5co-figure-lead">Segmentation</h3>
                          <p class="fh5co-figure-text">Send tailored information only to whom is interested in it</p>
                        </a>
                      </div>
                      <div class="col-md-3 col-sm-6 col-xs-6 col-xxs-12">
                        <a href="videos/cms.mp4" class="fh5co-figure to-animate popup-youtube">
                          <figure>
                            <img src="/img/landing/cms-mgmt.png" alt="HALO CMS management screenshot"
                                 class="img-responsive"/>
                          </figure>
                          <h3 class="fh5co-figure-lead">CMS Management</h3>
                          <p class="fh5co-figure-text">Add your structures and instances with the content for your
                            service</p>
                        </a>
                      </div>

                      <div class="clearfix visible-sm-block"/>
                    </div>
                  </div>
                </div>

                <div id="fh5co-counter" class="fh5co-bg-section"
                     style={{backgroundImage: 'url(/img/landing/bg_1.jpg)', backgroundAttachment: 'fixed'}}>
                  <div class="fh5co-overlay"/>
                  <div class="container">
                    <div class="row">
                      <div class="col-md-12">
                        <div class="fh5co-hero-wrap">
                          <div class="fh5co-hero-intro text-center to-animate counter-animate">
                            <div class="col-md-3 text-center">
                              <span class="counter-plus">+</span><span class="fh5co-counter js-counter" data-from="0"
                                                                       data-to="160" data-speed="2000"
                                                                       data-refresh-interval="50"/><span
                                class="counter-k">k</span>
                              <span class="fh5co-counter-label">Content items</span>
                            </div>
                            <div class="col-md-3 text-center">
                              <span class="counter-plus">+</span><span class="fh5co-counter js-counter" data-from="0"
                                                                       data-to="100" data-speed="1500"
                                                                       data-refresh-interval="50"/><span
                                class="counter-k">k</span>
                              <span class="fh5co-counter-label">Notifications sent last year</span>
                            </div>
                            <div class="col-md-3 text-center">
                              <span class="counter-plus">+</span><span class="fh5co-counter js-counter" data-from="0"
                                                                       data-to="600" data-speed="2500"
                                                                       data-refresh-interval="50"/><span
                                class="counter-k">k</span>
                              <span class="fh5co-counter-label">Devices</span>
                            </div>

                            <div class="col-md-3 text-center">
                              <span class="counter-plus">+</span><span class="fh5co-counter js-counter" data-from="0"
                                                                       data-to="40" data-speed="1000"
                                                                       data-refresh-interval="50"/><span
                                class="counter-k">k</span>
                              <span class="fh5co-counter-label">Media uploaded</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


                <div id="fh5co-features" data-section="our-platform">
                  <div class="container">
                    <div class="row">
                      <div class="col-md-8 col-md-offset-2 fh5co-section-heading text-center">
                        <h2 class="fh5co-lead to-animate lab">Our platform</h2>
                        <p class="fh5co-sub to-animate">Our effective platform makes the app development process much
                          faster, more efficient and reduces the time-to-market of an application considerably. In
                          addition, we provide open source SDKs for Android and iOS platforms, which can easily be
                          integrated into any app. The SDKs solve most of the common problems experienced during this
                          process and eliminate time-consuming tasks related to app development.</p>
                      </div>
                      <div class="col-md-3 col-sm-6 col-xs-6 col-xxs-12">
                        <a href="https://web-halo.mobgen.com/api/docs/" class="fh5co-feature to-animate">
                          <span class="fh5co-feature-icon"><i class="fa fa-file-o"/></span>
                          <h3 class="fh5co-feature-lead">API Documentation</h3>
                          <p class="fh5co-feature-text">To integrate all your applications and new developments with
                            HALO</p>
                        </a>
                      </div>
                      <div class="clearfix visible-sm-block"/>
                      <div class="col-md-3 col-sm-6 col-xs-6 col-xxs-12">
                        <a href="/docs/android/android_home"
                           class="fh5co-feature to-animate">
                          <span class="fh5co-feature-icon"><i class="fa fa-android"/></span>
                          <h3 class="fh5co-feature-lead">Android</h3>
                          <p class="fh5co-feature-text">Simple SDK to help Android developers to connect with our
                            platform</p>
                        </a>
                      </div>

                      <div class="col-md-3 col-sm-6 col-xs-6 col-xxs-12">
                        <a href="/docs/ios/ios_home"
                           class="fh5co-feature to-animate">
                          <span class="fh5co-feature-icon"><i class="fa fa-apple"/></span>
                          <h3 class="fh5co-feature-lead">iOS</h3>
                          <p class="fh5co-feature-text">Integrated SDK to improve development of IOS mobile apps</p>
                        </a>
                      </div>

                      <div className="col-md-3 col-sm-6 col-xs-6 col-xxs-12">
                        <a href="/docs/javascript/javascript_home"
                           className="fh5co-feature to-animate">
                          <span className="fh5co-feature-icon"><i className="fa fa-jsfiddle"/></span>
                          <h3 className="fh5co-feature-lead">Javascript</h3>
                          <p className="fh5co-feature-text">Integrated SDK to improve development of Javascript apps</p>
                        </a>
                      </div>

                      <div className="col-md-12 col-sm-12 col-xs-12 col-xxs-12">
                        <a href="https://web-halo.mobgen.com/cms/" className="fh5co-feature to-animate">
                          <span className="fh5co-feature-icon"><i className="fa fa-cubes"/></span>
                          <h3 className="fh5co-feature-lead">CMS</h3>
                          <p className="fh5co-feature-text">Our easy to use CMS platform to manage all your apps
                            content</p>
                        </a>
                      </div>

                      <div class="clearfix visible-sm-block"/>

                      <div class="fh5co-spacer fh5co-spacer-sm"/>

                    </div>
                  </div>
                </div>


                <div data-section="halo-nutshell" class="fh5co-bg-section cta" id="fh5co-cta"
                     style={{backgroundImage: 'url(/img/landing/halo-nutshell.jpg)', backgroundAttachment: 'fixed'}}>
                  <div class="fh5co-overlay"></div>
                  <div class="container">
                    <div class="row">
                      <div class="col-md-12">
                        <div class="fh5co-hero-wrap">
                          <div class="fh5co-hero-intro text-center">
                            <div class="row">
                              <div class="col-md-12 fh5co-section-heading text-center">
                                <h2 class="fh5co-lead to-animate lab">HALO in a nutshell</h2>
                                <p class="fh5co-sub">
                                  <div id="halo-container-video">
                                    <iframe id="halo-nutshell-video" src="" frameborder="0"
                                            allow="autoplay; encrypted-media" allowfullscreen/>
                                    <a id="halo-nutshell-frame" target="_blank"
                                       href="https://www.youtube.com/watch?v=2iRK7GGIXUY"><img
                                        src="/img/landing/halo-video-frame.png"/></a>
                                  </div>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


                <div id="fh5co-features-3" data-section="who-we-work-with">
                  <div class="container">
                    <div class="row">
                      <div class="col-md-8 col-md-offset-2 fh5co-section-heading text-center">
                        <h2 class="fh5co-lead animate-single features3-animate-1 lab">Who we work with</h2>
                      </div>

                      <div class="clearfix visible-sm-block"></div>

                      <div class="col-md-6 col-sm-6 text-center fh5co-text-wrap">
                        <div class="fh5co-text to-animate">
                          <a href="https://smartify.org/">
                            <span class="logo-collaborator"><img src="/img/landing/collaborators/smartify.png"/></span>
                          </a>
                        </div>
                      </div>
                      <div class="col-md-6 col-sm-6 text-center fh5co-text-wrap">
                        <div class="fh5co-text to-animate">
                          <a href="http://enso.mobgen.com/">
                          <span class="logo-collaborator"><img
                              src="/img/landing/collaborators/enso-logo-pos@3x.png"/></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


                <div class="fh5co-bg-section cta" id="fh5co-cta"
                     style={{backgroundImage: 'url(/img/landing/amsterdam.jpg)', backgroundAttachment: 'fixed'}}
                     data-section="contact-us">
                  <div class="fh5co-overlay"></div>
                  <div class="container">
                    <div class="row">
                      <div class="col-md-12">
                        <div class="fh5co-hero-wrap">
                          <div class="fh5co-hero-intro text-center">
                            <div class="row">
                              <div class="col-md-8 col-md-offset-2 fh5co-section-heading text-center">
                                <h2 class="fh5co-lead to-animate lab">Contact us!</h2>
                                <p class="fh5co-sub to-animate">Interested? Please contact us for more information,
                                  inquiries, demo options, ...</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div id="fh5co-subscribe">
                  <div className="container animate-box fadeInUp animated" id={"contact"}>
                    <form action="https://formspree.io/halo.mg@accenture.com" method="post">
                      <div className="row">
                        <div className="col-md-5 col-sm-4">
                          <div className="form-group">
                            <input type="text" className="form-control" placeholder="Name" name="first-name"/>
                          </div>
                        </div>

                        <div className="col-md-5 col-sm-4">
                          <div className="form-group">
                            <input type="email" className="form-control" placeholder="Email" name="email"/>
                          </div>
                        </div>

                      </div>

                      <div className="row second-line">
                        <div className="col-md-10 col-sm-8">
                          <div className="form-group">
                          <textarea type="text" className="form-control" placeholder="Text here..." name="text"
                                    style={{resize: 'none'}}></textarea>
                          </div>
                        </div>

                        <div className="col-md-2 col-sm-2">
                          <div className="form-group">
                            <input type="submit" className="btn btn-primary" value="Send"/>
                          </div>
                        </div>

                      </div>
                    </form>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
    );
  }
}

module.exports = Index;
