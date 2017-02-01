import React, {PropTypes} from 'react';

const CardMedium = (props) => {
    console.log('props', props);

    const link = props.feed.link.replace(/.*?:\/\//g, '').split('?')[0];

    let stories = props.items.map((item, index) => {

        return (
            <li key={index}>
                <a href={item.link} target="_blank">{item.title}</a>
            </li>
        )
    });

    return (
        <section className="Card-body Card-medium">
            <div className="Card-medium-left">
                <a href={props.feed.link} target="_blank">
                    <i className="fa fa-medium fa-5x"></i>
                    <p><i className="fa fa-link fa-border"></i>{link}</p>
                </a>
            </div>
            <div className="Card-medium-stories">
                <p><i className="fa fa-book fa-border"></i><strong>{props.items.length}</strong><u>Stories:</u></p>
                <ul>
                    {stories}
                </ul>
            </div>
        </section>
    )
};

export default CardMedium;
