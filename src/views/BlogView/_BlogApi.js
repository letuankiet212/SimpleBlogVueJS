import request from '@/helpers/Request';

export function APIGetBlogs(domain) {
  return request({
    url: domain + 'blogs',
    method: 'get'
  });
}
