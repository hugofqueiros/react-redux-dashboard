import React, {PropTypes} from 'react';

const CardGithub = (props) => {
    const link = props.html_url.replace(/.*?:\/\//g, '');

    return (
        <section className="Card-body Card-github">
            <a href={props.html_url} target="_blank">
                <i className="fa fa-github fa-5x"></i>
                <p><i className="fa fa-link fa-border"></i>{link}</p>
            </a>
            <div className="Card-github-info">
                <p><i className="fa fa-users fa-border"></i><strong>{props.followers}</strong> Followers</p>
                <p><i className="fa fa-blind fa-border"></i><strong>{props.following}</strong> Following</p>
                <p><i className="fa fa-git fa-border"></i><strong>{props.public_repos}</strong> Repos</p>
                <p><i className="fa fa-file fa-border"></i><strong>{props.public_gists}</strong> Gists</p>
            </div>
        </section>
    )
};

export default CardGithub;
