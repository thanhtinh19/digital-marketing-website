import "../Style/Footer/Footer.scss"
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer() {
    return (
        <div className="footer" id="footer">
            <img src="../../img/image/logo.png" />
            <div className="footer-content">
                <div className="content-icon">
                    FindBestSEO has ranked PageTraffic among the top 10 SEO companies for 2020.
                    <div className="icon">
                        <FacebookIcon />
                        <LinkedInIcon/>
                        <TwitterIcon/>
                        <YouTubeIcon/>
                    </div>
                </div>
                <div className="company">
                    <h3>COMPANY</h3>
                    <p>About</p>
                    <p>Services</p>
                    <p>Press</p>
                    <p>Resources</p>
                    <p>Blog</p>
                </div>
                <div className="news">
                    <h3>Latest news</h3>
                    <div className="items">
                        <div className="new-item">
                            <img src="../../img/image/imgFooter1.png" />
                            <div className="new-item-content">
                                <h4>Per Click Management</h4>
                                <p>PageTraffic is a premier Search Engine Marketing ( SEM).</p>
                                <li>15 April 2021</li>
                            </div>
                        </div>
                        <div className="new-item">
                            <img src="../../img/image/imgFooter2.png" />
                            <div className="new-item-content">
                                <h4>Per Click Management</h4>
                                <p>PageTraffic is a premier Search Engine Marketing ( SEM).</p>
                                <li>15 April 2021</li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="signature">
                <p>© 2021 DeMO Insurance Inc. Patent Pending. All Rights Reserved.</p>
                <p><span>Privacy </span>| Terms of Service</p>
            </div>
        </div>
    );
}

export default Footer;