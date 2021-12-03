import React from 'react';
import Resume from '../resume/Resume';
import '../customcss/Custom.css';
import Navigation from '../navigation/Navigation';
import Banner from '../banner/Banner';
import Projects from '../projects/Projects';
import Skills from '../skills/Skills';
import EducationLine from '../education/EducationLine';

export default function Home() {
    return (
        <div className="myhome" container grid style={{
            gap: "5rem", backgroundColor: '#000428',
            backgroundImage: 'linear-gradient(to right, #000428, #004e92)'
        }} >
            <h3><Navigation></Navigation></h3>
            <Banner></Banner> <br /><br /><br />
            <Resume></Resume><br />
            <Skills></Skills><br /><br /><br /><br /> <br /><br />
            <Projects></Projects><br /> <br /><br />
            <EducationLine /><br /> <br /><br />
        </div>
    )
}
