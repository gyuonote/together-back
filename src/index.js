// 이 파일에서만 no-global-assign ESlint 옵션을 비활성화합니다.
/* eslint-disable no-global-assign */

require = require('esm')(module /*, options*/);
export default require('./main.js');
