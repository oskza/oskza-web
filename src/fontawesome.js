import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
  faArrowUp, faArrowLeft, faEnvelopeSquare,
  faSun, faMoon, faCircleCheck, faLink
} from '@fortawesome/free-solid-svg-icons'

import {
  faGithub, faGithubSquare, faLinkedin
} from '@fortawesome/free-brands-svg-icons'

library.add(faArrowUp, faArrowLeft, faEnvelopeSquare,
            faSun, faMoon, faCircleCheck, faLink,
            faGithub, faGithubSquare, faLinkedin)

export { FontAwesomeIcon }
