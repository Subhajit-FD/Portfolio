import React, { useState } from 'react'
import "./qualification.css"

const Qualification = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    };
  return (
    <section className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personel journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={toggleState === 1  ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                onClick={() => toggleTab(1)}
                >
                    <i className="uil uil-graduation-cap qualification__icon"></i>Education
                </div>

                <div className={toggleState === 2  ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                onClick={() => toggleTab(2)}
                >
                    <i className="uil uil-briefcase-alt qualification__icon"></i>Experience
                </div>
            </div>

            <div className="qualification__sections">
                <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">MCA</h3>
                            <span className="qualification__subtitle">Brainware University</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>2022 - 2024
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>


                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>


                        <div>
                            <h3 className="qualification__title">BCA</h3>
                            <span className="qualification__subtitle">Brainware University</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>2019 - 2022
                            </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Higher Secondary Examination</h3>
                            <span className="qualification__subtitle">A.N.P.School</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>2018 - 2019
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>


                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>


                        <div>
                            <h3 className="qualification__title">Secondary School Examination</h3>
                            <span className="qualification__subtitle">D.A.V Public School </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>2016 - 2017
                            </div>
                        </div>
                    </div>
                </div>

                {/*_______ Experience________ */}

                <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Self Projects</h3>
                            <span className="qualification__subtitle">Brainware University</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>2021 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>


                    {/* <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>


                        <div>
                            <h3 className="qualification__title">Ux Designer</h3>
                            <span className="qualification__subtitle">Brainware University</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>2020 - 2021
                            </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Web Designer</h3>
                            <span className="qualification__subtitle">Brainware University</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>2018 - 2020
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div> */}


                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification
