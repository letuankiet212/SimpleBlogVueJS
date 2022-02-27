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

export function APIDelBlog(domain, id) {
  return request({
    url: domain + 'blogs/' + id,
    method: 'delete'
  });
}

export function APIEditBlog(domain, id, dataObj) {
  return request({
    url: domain + 'blogs/' + id,
    method: 'put',
    data: dataObj
  });
}
