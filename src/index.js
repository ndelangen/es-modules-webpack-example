/* IMPORTING DEPENDENCIES */
/* at the top of the file */

/* import the default */
import a from './modules/lib-a';

/* import everything */
import * as b from './modules/lib-b';

/* import a specific name */
import { foo as c_foo } from './modules/lib-c';

/* import the file */
import './modules/empty';

import log from './modules/log';

/* EXPORTING DEPENDENCIES */
/* at the bottom of the file */

log('import a from "./modules/lib-a";', a);
log('import * as b from "./modules/lib-b";', b);
log('import { foo } from "./modules/lib-c";', foo);
