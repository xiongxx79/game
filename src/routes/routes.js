import startPage from "../pages/startAndEnd/startPage.vue"
import startPageDu from "../pages/startAndEnd/startPageDu.vue"
import startMap from "../pages/startAndEnd/startMap.vue"

import levelOneS1 from "../pages/levelOne/levelOneS1.vue"
import levelOneS2 from "../pages/levelOne/levelOneS2.vue"
import levelOneS3 from "../pages/levelOne/levelOneS3.vue"
import levelOneS4 from "../pages/levelOne/levelOneS4.vue"
import levelOneS5 from "../pages/levelOne/levelOneS5.vue"
import levelOneS6 from "../pages/levelOne/levelOneS6.vue"
import levelOneS7 from "../pages/levelOne/levelOneS7.vue"

import levelTwoS1 from "../pages/levelTwo/levelTwoS1.vue"
import levelTwoS2 from "../pages/levelTwo/levelTwoS2.vue"
import levelTwoS3 from "../pages/levelTwo/levelTwoS3.vue"
import levelTwoS4 from "../pages/levelTwo/levelTwoS4.vue"
import levelTwoS5 from "../pages/levelTwo/levelTwoS5.vue"
import levelTwoS6 from "../pages/levelTwo/levelTwoS6.vue"
import levelTwoS7 from "../pages/levelTwo/levelTwoS7.vue"

import levelThreeS1 from "../pages/levelThree/levelThreeS1.vue"
import levelThreeS2 from "../pages/levelThree/levelThreeS2.vue"
import levelThreeS3 from "../pages/levelThree/levelThreeS3.vue"
import levelThreeS4 from "../pages/levelThree/levelThreeS4.vue"
import levelThreeS5 from "../pages/levelThree/levelThreeS5.vue"
import levelThreeS6 from "../pages/levelThree/levelThreeS6.vue"
import levelThreeS7 from "../pages/levelThree/levelThreeS7.vue"
import levelThreeS8 from "../pages/levelThree/levelThreeS8.vue"

import phoneStore from "../pages/startAndEnd/phoneStore.vue"

export default [
    {
        path:'',
        component: startPage
    },
    {
        path:'/start',
        component: startPageDu
    },
    {
        path:'/map',
        component: startMap
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
        path: '/levelone/s5',
        component: levelOneS5
    },
    {
        path: '/levelone/s6',
        component: levelOneS6
    },
    {
        path: '/levelone/s7',
        component: levelOneS7
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
        path: '/leveltwo/s4',
        component: levelTwoS4
    },
    {
        path: '/leveltwo/s5',
        component: levelTwoS5
    },
    {
        path: '/leveltwo/s6',
        component: levelTwoS6
    },
    {
        path: '/leveltwo/s7',
        component: levelTwoS7
    },
    {
        path: '/levelthree/s1',
        component: levelThreeS1
    },
    {
        path: '/levelthree/s2',
        component: levelThreeS2
    },
    {
        path: '/levelthree/s3',
        component: levelThreeS3
    },
    {
        path: '/levelthree/s4',
        component: levelThreeS4
    },
    {
        path: '/levelthree/s5',
        component: levelThreeS5
    },
    {
        path: '/levelthree/s6',
        component: levelThreeS6
    },
    {
        path: '/levelthree/s7',
        component: levelThreeS7
    },
    {
        path: '/levelthree/s8',
        component: levelThreeS8
    },
    {
        path: '/phoneStore',
        component: phoneStore
    }
]
