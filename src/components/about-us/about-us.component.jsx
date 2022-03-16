import React, { useState } from 'react';

import './about-us.style.css';

const AboutUs = () => {

    const initTabs = [
        {
            name: "mission",
            title: "Misija",
            text: "Jūsų sugedę prietaisai - mūsų rūpesčiai.",
            status: "active"
        },
        {
            name: "vision",
            title: "Vizija",
            text: "Mūsų darbu patenkintas klientas.",
            status: ""
        },
        {
            name: "value",
            title: "Vertybės",
            text: "Tik kokybiškas darbas.",
            status: ""
        }
    ];
    const [tabs, setTabs] = useState(initTabs);
    const [sectionText, setSectionText] = useState(tabs[0].text);

    const toggleSection = (e, idx) => {
        let newArr = [...tabs];
        newArr = newArr.map(tab => tab.status === "active" ? { ...tab, status: "" } : tab);
        newArr[idx].status = "active";
        setSectionText(tabs[idx].text);
        setTabs(newArr);
    };

    return (
        <div className="apie-mus">
            <div className="map">
                <iframe title="map" width="500" height="450" frameborder="0" style={{ "border": "0" }}
                    src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJd9liEiAq4UYRud_hv0kOAgg&key=AIzaSyAFtZ3CD89Npx2ZZgRuzjVsRMQRUdoaCNU" allowfullscreen></iframe>
            </div>
            <div className="content">
                <span>Apie mus</span>
                <h3>Trumpas aprašymas</h3>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>

                {
                    tabs.map((tab, idx) => (
                        <input className={`${tab.status}`} key={idx} type="button" name={tab.name} value={tab.title} onClick={e => (toggleSection(e, idx))} />
                    ))
                }

                <div className="tab-content">{sectionText}</div>
            </div>
        </div>

    );
};

export default AboutUs;