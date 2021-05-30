import React from "react";
import {withRouter} from "react-router";

import "src/pages/about/about.scss"

function About(props) {
    return (
        <div className="container-fluid">
            <div className="about">
                <h2>Just about me</h2>
                <ul>
                    <p>一枚正在努力进步的javaWeb程序员。专长领域为Web开发、服务器端开发，目前正在向全栈工程师进发。。。</p>
                </ul>
                <h2>About my blog</h2>
                <ul>
                    <p>域 名：wfyvv.com 注册于2017年02月02日</p>
                    <p>服务器：腾讯云服务器 ，于2017年02月23日完成备案</p>
                    <p>备案号：皖ICP备17002922号</p>
                    <p>本站定位为IT技术博客站，博客内容主要涉及编程语言、前端开发、服务端开发及一些热门技术等方面，同时分享实用的开发资料。</p>
                </ul>
                <h2>Contact me</h2>
                <ul>
                    <p><i className="Hui-iconfont">&#xe67b;</i>qq : *********暂不公开 : (</p>
                    <p><i className="Hui-iconfont">&#xe6d1;</i>git：https://git.oschina.net/wilco</p>
                    <p><i className="Hui-iconfont">&#xe63b;</i>email : wfyv@qq.com</p>
                </ul>
            </div>
        </div>
    )
}

export default withRouter(About)