import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
  faEnvelope, faEnvelopeSquare, faPaperPlane,
  faFilePdf, faBookOpen, faLink, faCircleCheck,
  faXmark, faSliders, faTrashCan, faCode,
  faLocationDot, faSun, faMoon
} from '@fortawesome/free-solid-svg-icons'

import {
  faGithub, faGithubSquare,
  faLinkedin, faSquareLinkedin,
  faFacebookSquare, faInstagram
} from '@fortawesome/free-brands-svg-icons'

library.add(faEnvelope, faEnvelopeSquare, faPaperPlane,
            faFilePdf, faBookOpen, faLink, faCircleCheck,
            faXmark, faSliders, faTrashCan, faCode,
            faLocationDot, faSun, faMoon,
            faGithub, faGithubSquare,
            faLinkedin, faSquareLinkedin,
            faFacebookSquare, faInstagram)

export { FontAwesomeIcon }
