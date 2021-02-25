import Mock from '../utils/mock';

//注册

//登录
Mock.mock('/test', 'get', () => {
  return {
    resCode: 200,
    data: {success:1},
    message: 'test请求成功'
  };
});
