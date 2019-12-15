import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {Icon,Avatar,Form,Input,Button,Select} from 'antd';
import './index.css'
import axios from 'axios';

class Login extends Component {
    constructor(arg) {
        super(arg)
        this.state = ({
            profile:{}
        })
    }
    // 关闭登录界面
    handleColse = () => {
        let colse = this.refs.colse
        colse.style.display = 'none';
    }
    // 关闭注册界面
    handleResColse = () => {
        let res = this.refs.res
        res.style.display = 'none';
    }
    // 手机登录
    handlePhone = () => {
        let colse = this.refs.colse
        colse.style.display = 'block';
    }
    // 手机注册
    handleRes = () => {
        let res = this.refs.res
        res.style.display = 'block';
        let colse = this.refs.colse
        colse.style.display = 'none';
    }
    // 返回登录
    handleBack = () => {
        let res = this.refs.res
        res.style.display = 'none';
        let colse = this.refs.colse
        colse.style.display = 'block';
    }
    // 登录提交表单
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                let phone = values.phone
                let password = values.password
                // console.log(phone, password)
                axios.get(`http://guohaucong.top:8800/login/cellphone?phone=${phone}&password=${password}`)
                    .then(res => {
                    // console.log(res.data)
                        console.log(res.data.profile)
                        if (res.data.code === 200) {
                            let colse = this.refs.colse
                            colse.style.display = 'none';
                            let login = this.refs.login
                            login.style.display = 'none';
                            let userLogin = this.refs.userLogin
                            userLogin.style.display = 'block';
                            let profile = res.data.profile
                            this.setState({
                                profile
                            })
                    }
                })
                .catch(e => {
                    // console.log(e)
                })
                        
                
            }
        });
    };
    // 注册提交表单
    handleResSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log(values.phone) 
                // let phone = values.phone
                // let password = values.password
                // axios.post(`http://guohaucong.top:8800/cellphone/existence/check?phone=${phone}`)
                //     .then(res => {
                //         if (res.data.code === 200) {
                //             axios.post(`http://guohaucong.top:8800/login/cellphone?phone=${phone}&password=${password}`)
                //                 .then(res => {
                //                     console.log(res)
                //                 })
                //                 .catch(e => {
                //                     console.log(e)
                //                 })
                //         }

                //     })
                //     .catch(e => {
                //         console.log(e)
                //     })

            }
        });
    };
    handleLogout = () => {
        axios.post('http://guohaucong.top:8800/logout')
        .then(res => {
            if (res.data.code === 200) {
                let login = this.refs.login
                login.style.display = 'block';
                let userLogin = this.refs.userLogin
                userLogin.style.display = 'none';
            }
        }).catch(e => {
            console.log(e)
        })
    }
    render() {
        const profile = this.state.profile
        // 表单
        const { getFieldDecorator } = this.props.form;
        const { Option } = Select;
        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '86',
        })(
            <Select style={{ width: 70 }}>
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>,
        );
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };
        return (
            <div className={'login_box'}>
                <div className={'login'} ref={'login'} style={{ display: 'block' }}>
                    <div  className={'title'} onClick={this.handlePhone}>
                            登录<Icon type="caret-down" />
                    </div>
                    <div className={'navShow LoginNav'}>
                        <ul className={'list_item'}>
                            <li className={'item'}>
                                <a onClick={this.handlePhone}><Icon type="mobile" />&nbsp;&nbsp;手机登录</a>
                            </li>
                            <li className={'item'}>
                                <a href='/'><Icon type="wechat" />&nbsp;&nbsp;微信登录</a>
                            </li>
                            <li className={'item'}>
                                <a href='/'><Icon type="qq" />&nbsp;&nbsp;QQ登录</a>
                            </li>
                            
                        </ul>
                    </div>
                    
                </div>
                <div className={'userLogin'} ref='userLogin' style={{display:'none'}}>
                    <div className={'login'}>
                        <a href='/home' className="ant-dropdown-link" >
                            <Avatar
                                src={profile.avatarUrl}/>
                            <Icon type="caret-down" style={{ color:'#6A6A6A'}}/>
                        </a>
                    </div>
                    <div className={'navShow userLoginShow'}>
                        <ul className={'list_item'}>
                            <li className={'item'}>
                                <a ><Icon type="user" /> 我的主页</a>
                            </li>
                            <li className={'item'}>
                                <a ><Icon type="mail" /> 我的消息</a>
                            </li>
                            <li className={'item'}>
                                <a><Icon type="star" /> 我的等级</a>
                            </li>
                            <li className={'item'}>
                                <a><Icon type="sketch" /> VIP会员</a>
                            </li>
                            <li className={'item'}>
                                <a><Icon type="setting" /> 个人设置</a>
                            </li>
                            <li className={'item'}>
                                <a><Icon type="idcard" /> 认证</a>
                            </li>
                            <li className={'item'}>
                                <a onClick={this.handleLogout}><Icon type="poweroff" /> 退出</a>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* 登录 */}
                <div className={'Login_interface'} ref='colse' style={{ display: 'none' }}>
                    <div className={'interface_title'}>
                        <span>手机号登录</span>    
                        <Icon onClick={this.handleColse} className={'interface_close'} type="close" />
                    </div>
                    <div className={'interface_input'}>
                        <div className={'input_box'}>
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Item>
                                    {getFieldDecorator('phone', {
                                        rules: [{ required: true, message: '请输入您的手机号码!' }],
                                    })(<Input addonBefore={prefixSelector} style={{ width: '100%' }} />)}
                                </Form.Item>
                                <Form.Item hasFeedback>
                                    {getFieldDecorator('password', {
                                        rules: [
                                            {
                                                required: true,
                                                message: '请输入你的密码!',
                                            },
                                            {
                                                validator: this.validateToNextPassword,
                                            },
                                        ],
                                    })(<Input.Password />)}
                                </Form.Item>
                                <Form.Item {...tailFormItemLayout}>
                                    <Button type="primary" htmlType="submit">
                                        登录
                                    </Button>
                                </Form.Item>
                            </Form>
                            
                        </div>
                        <div className={'interface_foot'}>
                            <span>{'<' + '其他登录方式'}</span>
                            <span onClick={this.handleRes}>没有帐号？免费注册  ></span>
                        </div>
                    </div>
                </div>
                {/* 注册 */}
                <div className={'Login_interface'} ref='res' style={{ display: 'none' }}>
                    <div className={'interface_title'}>
                        <span>手机号注册</span>
                        <Icon onClick={this.handleResColse} className={'interface_close'} type="close" />
                    </div>
                    <div className={'interface_input'}>
                        <div className={'input_box'}>
                            <Form onSubmit={this.handleResSubmit}>
                                <Form.Item>
                                    {getFieldDecorator('phone', {
                                        rules: [{ required: true, message: '请输入您的手机号码!' }],
                                    })(<Input addonBefore={prefixSelector} style={{ width: '100%' }} />)}
                                </Form.Item>
                                <Form.Item hasFeedback>
                                    {getFieldDecorator('password', {
                                        rules: [
                                            {
                                                required: true,
                                                message: '请输入你的密码!',
                                            },
                                            {
                                                validator: this.validateToNextPassword,
                                            },
                                        ],
                                    })(<Input.Password />)}
                                </Form.Item>
                                <Form.Item {...tailFormItemLayout}>
                                    <Button type="primary" htmlType="submit">
                                        注册
                                    </Button>
                                </Form.Item>
                            </Form>

                        </div>
                        <div className={'interface_foot'}>
                            <span onClick={this.handleBack}>{'<' + '返回登录'}</span>
                        </div>
                    </div>
                </div>
            </div>
            

        );
    }
}

export default Form.create({ name: 'login' })(Login);