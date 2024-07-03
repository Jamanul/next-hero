import Link from 'next/link';
import React from 'react';

const AboutPage = () => {
    return (
        <div>
           
            <Link href={'/about/history'}>history</Link>
            <Link href={'/about/mission'}>Mission</Link>
        </div>
    );
};

export default AboutPage;