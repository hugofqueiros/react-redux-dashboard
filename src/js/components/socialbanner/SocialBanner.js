import React from 'react';

import './SocialBanner.scss';
import '../../../img/Manhattan.jpg';
import '../../../img/spinner.gif';

class SocialBanner extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoadingImg: true
        };

        this.image = new Image();
    }

    componentDidMount() {
        this.image.src = 'Manhattan.jpg';
        this.image.onload = this.handleImgLoaded.bind(this);
        this.image.onError = this.hangleImageError.bind(this);
    }

    handleImgLoaded() {
        this.setState({
                isLoadingImg: false
            }
        )
    }

    hangleImageError(e) {
        console.error('Loading image error', e);
        this.setState({
                isLoadingImg: true
            }
        )
    }

    render() {
        const style = {
            //backgroundImage: "url('img/Manhattan.JPG')",
        };
        // const imgStyle = {
        //     //content: "url('img/Manhattan.JPG')"
        // };

        const mailto = 'mailto: ' + this.props.email;
        const website = this.props.blog.replace(/.*?:\/\//g, ''); //.slice(0, -1);
        const websiteUrl = 'https://' + website;

        const createMarkup = () => {
            return {__html: this.image.outerHTML}
        };

        const renderImage = () => {
            if(this.state.isLoadingImg) {
                return (
                <div className="SocialBanner-img-container preloader">
                    <img
                        src={'spinner.gif'}
                    />
                </div>

                )
            } else {
                return (
                    <div className="SocialBanner-img-container" dangerouslySetInnerHTML={createMarkup()} />
                )
            }
        };

        const renderImage2 = () => {
            return (
                <div className="SocialBanner-img-container preloader">
                    <img
                        src={this.state.src}
                        onLoad={onload}
                    />
                </div>

            )
        };

        console.log('IMAGE: ', renderImage2());

        return (
            <div className="SocialBanner col-xs-12" style={style}>
                <div className="SocialBanner-info">
                    <h1>Hugo Queirós</h1>
                    <h3>Front-end web developer / IT Engineer/ Robotics Engineer</h3>
                    <hr className="divider"></hr>
                    <span>{this.props.location}</span>
                    <span>{this.props.company}</span>
                    <a href={mailto}>{this.props.email}</a>
                    <hr className="divider"></hr>
                    <h3>
                        Website:&nbsp;
                        <a href={websiteUrl} target="_blank">{website}</a>
                    </h3>
                </div>
                {renderImage()}
            </div>
        )
    }
}

{/*<img*/}
    {/*src={this.state.src}*/}
    {/*onLoad={onload}*/}
{/*/>*/}

SocialBanner.propTypes = {

};

SocialBanner.defaultProps = {

};

export default SocialBanner;
