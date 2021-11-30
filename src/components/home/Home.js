import React from 'react';
import Resume from '../resume/Resume';
import '../customcss/Custom.css';
import Navigation from '../navigation/Navigation';
import Banner from '../banner/Banner';
import Projects from '../projects/Projects';
import Skills from '../skills/Skills';

export default function Home() {
    return (
        <div className="myhome" container grid style={{
            gap: "5rem", height: '100vh', backgroundColor: '#000428',
            backgroundImage: 'linear-gradient(to right, #000428, #004e92)'
        }} >
            <h3><Navigation></Navigation></h3>
            <Banner></Banner>
            <Resume></Resume>
            <Skills></Skills>
            <Projects></Projects>
            <h3>home page</h3>

        </div>
    )
}
