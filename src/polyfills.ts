
// Note: IE11 quick / bad solution but works
import 'core-js';

// Note: IE11 - For using Fetch API
import 'whatwg-fetch';

// Note: IE11 - Could be activated if using angular animated and 
// import 'classlist.js';
// import 'web-animations-js';


import 'zone.js/dist/zone';

// Note: IE11 - Could be activated
//if (document['documentMode'] || /Edge/.test(navigator.userAgent)) {
//    (window as any).__Zone_enable_cross_context_check = true;
//}


// Note: Maybe could be removed
if (process.env.ENV === 'production') {
    // Production
} else {
    // Development and test
    Error['stackTraceLimit'] = Infinity;
    require('zone.js/dist/long-stack-trace-zone');
} 