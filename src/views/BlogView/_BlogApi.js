import request from '@/helpers/Request';

export function APIGetBlogs(domain, params) {
  return request({
    mode: 'no-cors',
    url: domain + 'blogs',
    method: 'get',
    params: params
  });
}

export function APIGetBlog(domain, params) {
  return request({
    url: domain + 'blogs/' + params,
    method: 'get'
  });
}

export function APICreateBlog(domain, params) {
  return request({
    url: domain + 'blogs',
    method: 'post',
    data: params
  });
}
