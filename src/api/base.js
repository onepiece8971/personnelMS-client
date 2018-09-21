const url = 'http://server.com:3002/api/';
// const url = 'http://192.168.31.191:8080/';

const newFetch = function(url, options) {
  options = options || {timeout: null};
  if (!options.timeout) {
    options.timeout = 5000;
  }
  return Promise.race([
    fetch(url, options),
    new Promise(function(resolve, reject) {
      setTimeout(() => reject(new Error('request timeout')), options.timeout)
    })
  ])
};

export {url}
export default newFetch