// console.log('This is log');
// console.info('This is info');
// console.warn('This is warning');
// console.error('This is error');
// console.error(new Error('Something went wrong'));

const logger = require('./logger');

logger.info('text info', { meta: 1 });
logger.warn('text warn');
logger.error('text error');
logger.error(new Error('something went wrong'));