import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
  faArrowUp, faArrowLeft, faArrowRight, faFilePdf,
  faEnvelope, faEnvelopeSquare, faCode, faBookOpen,
  faSun, faMoon, faLink, faSliders, faCircleCheck,
  faXmark, faLocationDot, faPaperPlane, faHouse
} from '@fortawesome/free-solid-svg-icons'

import {
  faGithub, faGithubSquare, faLinkedin,
  faFacebookSquare, faInstagram
} from '@fortawesome/free-brands-svg-icons'

library.add(faArrowUp, faArrowLeft, faArrowRight, faFilePdf,
            faEnvelope, faEnvelopeSquare, faCode, faBookOpen,
            faSun, faMoon, faLink, faSliders, faCircleCheck,
            faXmark, faLocationDot, faPaperPlane, faHouse,
            faGithub, faGithubSquare, faLinkedin,
            faFacebookSquare, faInstagram)

export { FontAwesomeIcon }
