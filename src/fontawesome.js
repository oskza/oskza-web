import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
  faArrowUp, faArrowLeft, faArrowRight,
  faEnvelope, faEnvelopeSquare, faCircleCheck,
  faSun, faMoon, faLink, faFilePdf, faSliders, faXmark,

} from '@fortawesome/free-solid-svg-icons'

import { faGithub, faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'

library.add(faArrowUp, faArrowLeft, faArrowRight,
            faEnvelope, faEnvelopeSquare, faCircleCheck,
            faSun, faMoon, faLink, faFilePdf, faSliders, faXmark,
            faGithub, faGithubSquare, faLinkedin)

export { FontAwesomeIcon }
