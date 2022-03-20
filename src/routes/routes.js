import startPage from "../pages/start/startPage.vue"
import levelOneS1 from "../pages/levelOne/levelOneS1.vue"
import levelOneS2 from "../pages/levelOne/levelOneS2.vue"
import levelOneS3 from "../pages/levelOne/levelOneS3.vue"
import levelTwoS1 from "../pages/levelTwo/levelTwoS1.vue"
import levelTwoS2 from "../pages/levelTwo/levelTwoS2.vue"
import levelTwoS3 from "../pages/levelTwo/levelTwoS3.vue"
import levelThreeS1 from "../pages/levelThree/levelThreeS1.vue"

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
    }
]
