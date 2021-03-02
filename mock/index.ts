const Mock = require('mockjs')
import mocks from './mocks'

for (let i of mocks) {
    Mock.mock(i.url, i.type, i.response)
}

export default Mock

