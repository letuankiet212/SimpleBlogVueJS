import request from '@/helpers/Request';

export function APIGetBlogs(domain, params) {
  return request({
    url: domain + 'blogs',
    method: 'get',
    params: params
  });
}
