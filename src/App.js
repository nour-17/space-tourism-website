import React from 'react';

const App = () => {
    return (
        <div className='App'>
            <div className="container">
                <h1 className="uppercase">Design system</h1>

                <section id="colors" style={{ margin: "4rem 0" }}>
                    <h2 className="uppercase numbered-title"><span>01</span> colors</h2>
                    <div className="flex">
                        <div style={{ flexGrow: "1" }}>
                            <div className="bg-dark-blue text-light ff-regular fs-4" style={{ padding: "3rem 1rem 1rem", border: "1px solid white" }}>#0B0D17</div>
                            <p><span className="text-accent">RGB</span> 11, 13, 23</p>
                            <p><span className="text-accent">HSL</span> 230°, 35%, 7%</p>
                        </div>
                        <div style={{ flexGrow: "1" }}>
                            <div className="bg-light-blue text-dark ff-regular fs-4" style={{ padding: "3rem 1rem 1rem", border: "1px solid white" }}>#D0D6F9</div>
                            <p><span className="text-accent">RGB</span> 208, 214, 249</p>
                            <p><span className="text-accent">HSL</span> 231°, 77%, 90%</p>
                        </div>
                        <div style={{ flexGrow: "1" }}>
                            <div className="bg-light text-dark ff-regular fs-4" style={{ padding: "3rem 1rem 1rem", border: "1px solid white" }}>#FFFFFF</div>
                            <p><span className="text-accent">RGB</span> 255, 255, 255</p>
                            <p><span className="text-accent">HSL</span> 0°, 0%, 100%</p>
                        </div>
                    </div>
                </section>

                <section id="typography" style={{ margin: "4rem 0" }}>
                    <h2 className="numbered-title uppercase"><span>02 </span>Typography</h2>
                    <div class="flex">
                        <div style={{ flexBasis: "100%" }}>
                            <div>
                                <p>Heading 1 - Bellefair Regular - 150px</p>
                                <p className='fs-8 uppercase fw-regular ff-secondary'>Earth</p>
                            </div>
                            <div>
                                <p>Heading 2 - Bellefair Regular - 100px</p>
                                <p className='fs-7 uppercase fw-regular ff-secondary' >Venus</p>
                            </div>
                            <div>
                                <p>Heading 3 - Bellefair Regular - 56px</p>
                                <p className='fs-6 uppercase fw-regular ff-secondary'>Jupiter & Saturn</p>
                            </div>
                            <div>
                                <p>Heading 4 - Bellefair Regular - 32px</p>
                                <p className='fs-5 uppercase fw-regular ff-secondary'>Uranus, Neptune, & Pluto</p>
                            </div>
                            <div>
                                <p>Heading 5 - Barlow Condensed Regular - 28px - 4.75 Character Space</p>
                                <p className='fs-4 uppercase fw-regular ff-main' style={{ letterSpacing: "4.75px" }}>So, you want to travel to space</p>
                            </div>

                        </div>

                        <div style={{ flexBasis: "100%" }}>
                            <div>
                                <p>Subheading 1 - Bellefair Regular - 28px</p>
                                <p>384,400 km</p>
                            </div>
                            <div>
                                <p>Subheading 2 - Barlow Condensed Regular - 14px - 2.35 Character Space</p>
                                <p>Avg. Distance</p>
                            </div>
                            <div>
                                <p>Nav Text - Barlow Condensed Regular - 16px - 2.7 Character Space</p>
                                <p>Europa</p>
                            </div>
                            <div>
                                <p>Body Text</p>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec
                                    urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet
                                    viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse
                                    potenti.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque
                                    aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula
                                    sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis.
                                    Ut justo. Suspendisse potenti.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
                                    hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="interactive-elements">
                    <h2 class="numbered-title uppercase"><span>03</span> Interactive elements</h2>

                    <div></div>

                    <div class="flex">
                        <div>
                            <a href='#' className='main-btn uppercase fs-5 fw-regular text-dark bg-white ff-secondary'>explore</a>
                        </div>

                        <div>
                        </div>
                    </div>

                </section>

            </div >
        </div >
    )
}
export default App