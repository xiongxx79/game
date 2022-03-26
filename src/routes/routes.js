import startPage from "../pages/startAndEnd/startPage.vue"

import levelOneS1 from "../pages/levelOne/levelOneS1.vue"
import levelOneS2 from "../pages/levelOne/levelOneS2.vue"
import levelOneS3 from "../pages/levelOne/levelOneS3.vue"
import levelOneS4 from "../pages/levelOne/levelOneS4.vue"
import levelOneS6 from "../pages/levelOne/levelOneS6.vue"

import levelTwoS1 from "../pages/levelTwo/levelTwoS1.vue"
import levelTwoS2 from "../pages/levelTwo/levelTwoS2.vue"
import levelTwoS3 from "../pages/levelTwo/levelTwoS3.vue"

import levelThreeS1 from "../pages/levelThree/levelThreeS1.vue"

import phoneStore from "../pages/startAndEnd/phoneStore.vue"

export default [
    {
        path:'',
        component: startPage
    },
    {
        path: '/levelone/s1',
        component: levelOneS1
    },
    {
        path: '/levelone/s2',
        component: levelOneS2
    },
    {
        path: '/levelone/s3',
        component: levelOneS3
    },
    {
        path: '/levelone/s4',
        component: levelOneS4
    },
    {
        path: '/levelone/s6',
        component: levelOneS6
    },

    {
        path: '/leveltwo/s1',
        component: levelTwoS1
    },
    {
        path: '/leveltwo/s2',
        component: levelTwoS2
    },
    {
        path: '/leveltwo/s3',
        component: levelTwoS3
    },
    {
        path: '/levelthree/s1',
        component: levelThreeS1
    },
    {
        path: '/phoneStore',
        component: phoneStore
    }
]
