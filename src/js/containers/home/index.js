import React from 'react';
import Card from '../card';


import './Home.scss';

// class Home extends React.Component {
//     render() {
//         return (
//             <div className="Home">
//                 <Card/>
//             </div>
//         );
//     }
// }

const Home = (props) => {
    return (
        <div className="container">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    );
};

export default Home;
