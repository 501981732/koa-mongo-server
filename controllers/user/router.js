import userController from './controller.js'


export const baseUrl = userController.baseUrl

export default [
    {
        method: 'GET',
        route: '/userlist',
        handlers: [
            userController.userList
        ]
    },
]