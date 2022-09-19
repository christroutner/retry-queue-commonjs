/*
  An npm JavaScript library for front end web apps. Implements a minimal
  Bitcoin Cash wallet.
*/

/* eslint-disable no-async-promise-executor */

const RetryQueue = require('./lib/retry-queue.js')

// export default RetryQueue
module.exports = RetryQueue
