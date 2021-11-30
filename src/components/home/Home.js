import React from 'react';
import Resume from '../resume/Resume';
import '../customcss/Custom.css';
import Navigation from '../navigation/Navigation';

export default function Home() {
    return (
        <div className="myhome" container grid style={{
            gap: "5rem", height: '100vh', backgroundColor: '#000428',
            backgroundImage: 'linear-gradient(to right, #000428, #004e92)'
        }} >
            <h1><Navigation></Navigation></h1>
            <h3>home page</h3>
            <Resume></Resume>
        </div>
    )
}
