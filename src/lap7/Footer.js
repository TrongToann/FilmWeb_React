import { faFacebook, faInstagram, faTwitch  , faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Footer() {
    return (
        <div className="grid_full">
            <div class="footer">
            <button class="footer_button">Sign in for more access</button>
            <div class="footer_icon">
                <span><FontAwesomeIcon icon={faFacebook} className="fa-square-facebook" /></span>
                <span><FontAwesomeIcon icon={faInstagram}/></span>
                <span> <FontAwesomeIcon icon={faTwitch}/></span>
                <span><FontAwesomeIcon icon={faTwitter} /></span>
                <span> <FontAwesomeIcon icon={faYoutube}/></span>
               
            </div>
            <ul class="title_footer">
                <li class="title_footer1">Get the App</li>
                <li class="title_footer1">Help</li>
                <li class="title_footer1">Site Index</li>
                <li class="title_footer1">App Pro</li>
                <li class="title_footer1">Box Office</li>
                <li class="title_footer1">Developers</li>
            </ul>
            <ul class="title_footer">
                <li class="title_footer1">Press Room</li>
                <li class="title_footer1">Advertising</li>
                <li class="title_footer1">Jobs</li>
                <li class="title_footer1">Conditions of Use</li>
                <li class="title_footer1">Privacy Policy</li>
                <li class="title_footer1">Interest-Based Ads</li>
            </ul>
            <span class="footer-end">@29/9/2022 NTT</span>
        </div>
        </div>
    )
}
export default Footer ; 