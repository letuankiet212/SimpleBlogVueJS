import request from './../helpers/Request';

export function API_DEMO() {
  return request({
    url: 'http://localhost:5001/api/list-todo',
    method: 'get'
  });
}

export function APIGetInfo(domain) {
  return request({
    url: domain + 'blogs',
    method: 'get'
  });
}
