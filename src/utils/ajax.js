import '@babel/polyfill';

export async function fetchCall(api) {
  let url = 'http://localhost:3000';
  url += api;
  let resultObj = {
    status: '',
    response: null,
    error: null,
  };

  const promise = await fetch(url)
  .then((res) => {
    resultObj.status = res.status;
    return res.json();
  })
  .then((response) => {
    resultObj.response = response;
  },
  (error) => {
    resultObj.error = error;
  });
  return resultObj;
}