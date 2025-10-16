import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
  faArrowUp, faArrowLeft, faEnvelopeSquare,
  faSun, faMoon
} from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'

library.add(faArrowUp, faArrowLeft, faEnvelopeSquare,
            faSun, faMoon, faGithubSquare, faLinkedin)

export { FontAwesomeIcon }
