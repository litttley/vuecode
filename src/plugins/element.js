import Vue from 'vue'
/*import { Button } from 'element-ui'
import { Form,FormItem}   from 'element-ui'
import { Input}   from 'element-ui'
//导入弹出框提示组件
import {Message} from 'element-ui'*/

import {Button,Form,FormItem,Input,Message} from  'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
//全局挂载
Vue.prototype.$message=Message
