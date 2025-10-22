import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
  faArrowUp, faArrowLeft, faArrowRight, faFilePdf,
  faEnvelope, faEnvelopeSquare, faCode, faBookOpen,
  faSun, faMoon, faLink, faSliders, faCircleCheck,
  faXmark, faLocationDot, faPaperPlane
} from '@fortawesome/free-solid-svg-icons'

import { faGithub, faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'

library.add(faArrowUp, faArrowLeft, faArrowRight, faFilePdf,
            faEnvelope, faEnvelopeSquare, faCode, faBookOpen,
            faSun, faMoon, faLink, faSliders, faCircleCheck,
            faXmark, faLocationDot, faPaperPlane,
            faGithub, faGithubSquare, faLinkedin)

export { FontAwesomeIcon }
