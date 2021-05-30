import React from "react";
import {withRouter} from "react-router";

function ArticleDetail(props) {
    return (
        <div className="row w_main_row">
            <div className="col-lg-9 col-md-9 w_main_left">
                <div className="panel panel-default  mb-20">
                    <div className="panel-body pt-10 pb-10">
                        <h2 className="c_titile">我的个人博客之——阿里云空间选择</h2>
                        <p className="box_c"><span className="d_time">发布时间：2017-02-05</span><span>编辑：<a
                            href="mailto:wfyv@qq.com">wilco</a></span><span>阅读（88646）</span></p>
                        <ul className="infos">
                            <p>之前服务器放在电信机房，
                                联通用户访问速度很不稳定，经常出现访问速度慢的问题，换到阿里云解决了之前的问题。很多人都问我的博客选得什么空间，一年的费用得多少钱，今天我列个表出来，供大家参考。</p>
                            <p>&nbsp;<img src="temp/at1.png" alt="个人博客阿里云空间选择" width="700" height="886"/></p>
                            <p>对于访问量不大，小型网站带宽可以选择1M的，每个月<span className="cny"
                                                              style="margin: 0px 1px; padding: 0px; border: 0px; font-family: Arial; line-height: 20px; font-size: 20px; vertical-align: baseline; color: rgb(255, 102, 0); white-space: nowrap;">¥</span><span
                                className="money"
                                style="margin: 0px; padding: 0px; border: 0px; font-family: 微软雅黑, 'Microsoft Yahei', 'Hiragino Sans GB', tahoma, arial, 宋体; line-height: 20px; font-size: 20px; vertical-align: baseline; color: rgb(255, 102, 0); white-space: nowrap;">56.80</span>一年也就568块钱，每天投入也就不到2块钱。
                            </p>
                            <p><img src="temp/at2.png" alt="个人博客阿里云空间选择"/></p>
                            <p><strong>1、为什么选Linux？</strong></p>
                            <p>程序用PHP，速度快，配置低（windows必选1G的内存Linux选512MB能同样达到要求）。Linux的系统安全性非常高。Linux服务器的维护与扩展到性价比和性能都高于Windows。</p>
                            <p>1) 最流行的服务器端操作系统，强大的安全性和稳定性</p>
                            <p>2) 免费且开源，轻松建立和编译源代码</p>
                            <p>3) 通过SSH方式远程访问您的云服务器</p>
                            <p>4) 一般用于高性能web等服务器应用，支持常见的PHP/Python等编程语言，支持MySQL等数据库（需自行安装)</p>
                            <p><strong>2、操作系统为什么选CentOS 安全加固版（推荐）？</strong></p>
                            <p>在原
                                CentOS镜像的基础上，系统进一步安全加固，安装了阿里云独有的入侵防御系统，系统中会出现aegis进程，该系统增加了实时后门，Webshell检测，更加智能的暴力破解防御和多种入侵行为监控，让服务器更加安全可靠。</p>
                            <p><a href="http://www.aliyun.com/product/ecs" target="_blank"><strong><span
                                style="color: rgb(0, 0, 255);">前往阿里云官网购买&gt;&gt;</span></strong></a></p>
                            <p>&nbsp;</p><p align="center" className="pageLink"></p>

                        </ul>

                        <div className="keybq">
                            <p><span>关键字</span>：<a className="label label-default">个人博客</a><a
                                className="label label-default">阿里云</a><a className="label label-default">空间</a></p>
                        </div>


                        <div className="nextinfo">
                            <p className="last">上一篇：<a href="#">免费收录网站搜索引擎登录口大全</a></p>
                            <p className="next">下一篇：<a href="#">javascript显示年月日时间代码</a></p>
                        </div>

                    </div>
                </div>

                <div className="panel panel-default  mb-20">
                    <div className="tab-category">
                        <a href=""><strong>评论区</strong></a>
                    </div>
                    <div className="panel-body">
                        <div className="panel-body" style="margin: 0 3%;">
                            <div className="mb-20">
                                <ul className="commentList">
                                    <li className="item cl"><a href="#"><i className="avatar size-L radius"><img alt=""
                                                                                                                 src="http://qzapp.qlogo.cn/qzapp/101388738/1CF8425D24660DB8C3EBB76C03D95F35/100"/></i></a>
                                        <div className="comment-main">
                                            <header className="comment-header">
                                                <div className="comment-meta"><a className="comment-author"
                                                                                 href="#">老王</a>
                                                    <time title="2014年8月31日 下午3:20" dateTime="2014-08-31T03:54:20"
                                                          className="f-r">2014-8-31 15:20
                                                    </time>
                                                </div>
                                            </header>
                                            <div className="comment-body">
                                                <p> 是的</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="item cl"><a href="#"><i className="avatar size-L radius"><img alt=""
                                                                                                                 src="http://qzapp.qlogo.cn/qzapp/101388738/696C8A17B3383B88804BA92ECBAA5D81/100"/></i></a>
                                        <div className="comment-main">
                                            <header className="comment-header">
                                                <div className="comment-meta"><a className="comment-author"
                                                                                 href="#">老王</a>
                                                    <time title="2014年8月31日 下午3:20" dateTime="2014-08-31T03:54:20"
                                                          className="f-r">2014-8-31 15:20
                                                    </time>
                                                </div>
                                            </header>
                                            <div className="comment-body">
                                                <p> +1</p>
                                            </div>
                                        </div>
                                    </li>

                                </ul>

                            </div>
                            <div className="line"></div>
                            {/*用于评论*/}
                            <div className="mt-20" id="ct">
                                <div id="err" className="Huialert Huialert-danger hidden radius">成功状态提示</div>
                                <textarea id="textarea1" name="comment" style="height:200px;"
                                          placeholder="看完不留一发？"> </textarea>
                                <div className="text-r mt-10">
                                    <button onClick="getPlainTxt()" className="btn btn-primary radius"> 发表评论</button>
                                </div>
                            </div>
                            {/*用于回复*/}
                            <div className="comment hidden mt-20">
                                <div id="err2" className="Huialert Huialert-danger hidden radius">成功状态提示</div>
                                <textarea className="textarea" style="height:100px;"> </textarea>
                                <button onClick="hf(this);" type="button" className="btn btn-primary radius mt-10">回复
                                </button>
                                <a className="cancelReply f-r mt-10">取消回复</a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-3">
                {/*热门推荐*/}
                <div className="bg-fff box-shadow radius mb-20">
                    <div className="tab-category">
                        <a href=""><strong>热门推荐</strong></a>
                    </div>
                    <div className="tab-category-item">
                        <ul className="index_recd">
                            <li>
                                <a href="#">阻止a标签href默认跳转事件</a>
                                <p className="hits"><i className="Hui-iconfont" title="点击量">&#xe622;</i> 276 </p>
                            </li>
                            <li>
                                <a href="#">PHP面试题汇总</a>
                                <p className="hits"><i className="Hui-iconfont" title="点击量">&#xe622;</i> 276 </p>
                            </li>
                            <li>
                                <a href="#">阻止a标签href默认跳转事件</a>
                                <p className="hits"><i className="Hui-iconfont" title="点击量">&#xe622;</i> 276 </p>
                            </li>
                            <li>
                                <a href="#">阻止a标签href默认跳转事件</a>
                                <p className="hits"><i className="Hui-iconfont" title="点击量">&#xe622;</i> 276 </p>
                            </li>
                            <li>
                                <a href="#">PHP面试题汇总</a>
                                <p className="hits"><i className="Hui-iconfont" title="点击量">&#xe622;</i> 276 </p>
                            </li>
                        </ul>
                    </div>
                </div>

                {/*图片*/}
                <div className="bg-fff box-shadow radius mb-20">
                    <div className="tab-category">
                        <a href=""><strong>扫我关注</strong></a>
                    </div>
                    <div className="tab-category-item">
                        <img data-original="temp/gg.jpg" className="img-responsive lazyload" alt="响应式图片"/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default withRouter(ArticleDetail)