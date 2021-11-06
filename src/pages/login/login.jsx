import React, { Component } from 'react'
import './login.less'
import logo from './imgs/lol.png'
import {
    Form,
    Icon,
    Input,
    Button,
} from 'antd';

const Item = Form.Item;//不能写在import之前 
// 登陆的路由组件
class Login extends Component {
    //具有数据收集 校验 提交功能 
    handleSubmit = (event) => {
        //阻止事件的默认行为 
        event.preventDefault()
        //对所有表单进行验证 校验结果的回调函数 
        this.props.form.validateFields((err, values) => {
            //校验成功  自动获得表单的值
            if (!err) {
                console.log('提交登录的ajax请求', values)
            }else{
                console.log('失败')
            }
        });
        /* 
         手动的去获取表单的值
        const form = this.props.form;
        //得到表单输入之后的键值对
        const vaules = form.getFieldsValue()
        console.log('handlesubmit', vaules) */
    }
    // 对密码进行自定义验证 
    /*用户名/密码的的合法性要求 1). 必须输入 2). 必须大于 4 位 3). 必须小于 12 位 4). 必须是英文、数组或下划线组成 */
    validatePwd = (rule, value, callback) => {
        if (!value) {
            callback('密码必须输入')
        } else if (value.length < 4) {
            callback('密码长度不能小于4位')
        } else if (value.length > 12) {
            callback('密码的长度不能大于12')
        } else if (!/^[a-zA-Z0-9_]+$/.test(value)) {
            callback('密码必须是英文、数字或下划线组成')
        } else {
            callback()//验证通过
        }
        // callback();//验证通过
        // callback('////')//验证失败 提示指定的文本
    }

    render() {
        //得到具体的form对象
        const form = this.props.form
        const { getFieldDecorator } = form;
        return (
            <div className="login">
                <header className="login-header">
                    <img src={logo} alt="logo" />
                    <h1><span>17NIY</span>的游戏生涯</h1>
                </header>
                <section className='login-content'>
                    <h2> 荣耀王者登陆</h2>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Item>
                            {
                                /*用户名/密码的的合法性要求 1). 必须输入 2). 必须大于等于 4 位 3). 必须小于等于 12 位 4). 必须是英文、数字或下划线组成 */
                            }
                            {getFieldDecorator('username', {
                                //声明式验证：直接使用别人定义好的验证规则进行验证
                                //配置对象 ：属性名是一个特定的名称
                                //whitespace	必选时，空格是否会被视为错误
                                rules: [
                                    { required: true, whitespace: true, message: 'Please input your username!' },
                                    { min: 4, message: '用户名至少4位' },
                                    { max: 12, message: '用户名最多12位' },
                                    {/*
                                        正则规则校验   
                                     */},
                                    { pattern: /^[a-zA-Z0-9_]+$/, message: '用户名必须是英文、数字或下划线组成' }
                                ],
                            })(
                                <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="Username"
                                />,
                            )}
                        </Item>
                        <Item>
                            {getFieldDecorator('password', {
                                rules: [
                                    {
                                        validator: this.validatePwd
                                    }
                                ],
                            })(
                                <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="Password"
                                />,
                            )}
                        </Item>
                        <Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登陆
                            </Button>
                        </Item>
                    </Form>
                </section>
            </div>
        )
    }
}
// 高阶函数 create()  
/* 包装From组件(login) 父组件传递一个属性form 

*/
const warpLogin = Form.create()(Login)
export default warpLogin;