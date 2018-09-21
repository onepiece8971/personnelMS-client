import fetch, {url} from './base';

const getUser = async () => {
  try {
    let response = await fetch(url + 'index');
    const json = await response.json();
     console.log(json);
    return json
  } catch(e) {
    console.log("Oops, error", e);
  }
};

export {getUser}