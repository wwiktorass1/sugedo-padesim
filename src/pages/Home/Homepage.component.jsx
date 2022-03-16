import React from 'react';

import './Homepage.style.css';

import NewsCarousel from '../../components/news-carousel/news-carousel.component';
import Services from '../../components/services/services.component';
import AboutUs from '../../components/about-us/about-us.component';
import ContactForm from '../../components/contact-form/contact-form.component';

const HomePage = () => (
    <div>
        <main>
            <section>
                <NewsCarousel />
            </section>
            <section id="services">
                <Services />
            </section>
            <section id="about">
                <AboutUs />
            </section>
            <section id="contacts" className="no-gap">
                <div className="counter"></div>
                <div className="ftco-counter"></div>
                <ContactForm />
            </section>
        </main>
    </div>
)

export default HomePage;