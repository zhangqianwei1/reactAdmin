# 高阶函数 
1.接受函数类型的参数 
2.返回值是函数  

常见  定时器  Promise(()=>)   then(value=>{})   数组相关的遍历方法 
返回值是函数   bind() 
From.create()()/  getFiledDecorator()() 
//经过 getFieldDecorator 包装的控件，表单控件会自动添加 value（或 valuePropName 指定的其他属性） onChange（或 trigger 指定的其他属性），数据同步将被 Form 接管

# 和高阶组件 
本质就是一个函数   
接受一个组件（被包装的组件）  返回一个新的组件（包装组件）
包装组件会向被包装的组件传入特定属性
作用：扩展组件的功能  
