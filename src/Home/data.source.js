import React from 'react';
const bg1 = require('../static/images/bg5.png')
const bg2 = require('../static/images/bg6.png')
const bg3 = require('../static/images/bg7.png')
const icon1 = require('../static/images/icon1.png')
const icon2 = require('../static/images/icon2.png')
const icon3 = require('../static/images/icon3.png')
const xuanchuangMp4 = require('../static/vedio/xuanchuang.mp4')
const homeJpg = require('../static/images/home.jpg')
const wxImg = require('../static/images/wx.png')
const gongzhonghao = require('../static/images/gzh.jpg')


export const Nav30DataSource = {
  wrapper: { className: 'header3 home-page-wrapper' },
  page: { className: 'home-page' },
  logo: {
    className: 'header3-logo lg3fyjsznzs-editor_css',
    children:
      'https://uni-1253355096.cos.ap-guangzhou.myqcloud.com/img/20230405172310.png',
  },
  Menu: {
    className: 'header3-menu',
    children: [
      {
        name: 'item0',
        className: 'header3-item',
        children: {
          href: '#',
          children: [
            {
              children: (
                <span>
                  <p>首页</p>
                </span>
              ),
              name: 'text',
              className: 'lg3g3ufy0x8-editor_css',
            },
          ],
        },
        subItem: null,
      },
      {
        name: 'item1',
        className: 'header3-item',
        children: {
          href: 'https://docs.cloudeon.top',
          children: [
            {
              children: (
                <span>
                  <p>文档</p>
                </span>
              ),
              name: 'text',
              className: 'lg3g41tyxz-editor_css',
            },
          ],
        },
        subItem: null,
      },
      {
        name: 'item2',
        className: 'header3-item',
        children: {
          href: 'https://github.com/dromara/CloudEon',
          children: [
            {
              children: (
                <span>
                  <p>GitHub</p>
                </span>
              ),
              name: 'text',
              className: 'lg3g4ehb97a-editor_css',
            },
          ],
        },
        subItem: null,
      },
      {
        name: 'item3',
        className: 'header3-item',
        children: {
          href: 'https://gitee.com/dromara/CloudEon',
          children: [
            {
              children: (
                <span>
                  <p>Gitee</p>
                </span>
              ),
              name: 'text',
              className: 'lg3g4pleb57-editor_css',
            },
          ],
        },
        subItem: null,
      },
      {
        name: 'item~lg2gpc3ujxm',
        className: 'header3-item lg3hmzx7sdd-editor_css',
        children: {
          href: 'https://docs.cloudeon.top/en/latest/%E7%A4%BE%E5%8C%BA%E8%B4%A1%E7%8C%AE/contribute/',
          children: [
            {
              children: (
                <span>
                  <p>社区</p>
                </span>
              ),
              name: 'text',
              className: 'lg3g6oi3e3u-editor_css',
            },
          ],
        },
        subItem: null,
      },
    ],
    subItem: {},
  },
  mobileMenu: { className: 'header3-mobile-menu' },
};
export const Banner50DataSource = {
  wrapper: { className: 'home-page-wrapper banner5 lg2ero1vdv-editor_css' },
  page: { className: 'home-page banner5-page' },
  childWrapper: {
    className: 'banner5-title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <p>CloudEon</p>
          </span>
        ),
        className: 'banner5-title lg3fubqb6a-editor_css',
      },
      {
        name: 'explain',
        className: 'banner5-explain',
        children: (
          <span>
            <span>
              <p>简化kubernetes上大数据集群的运维管理</p>
            </span>
          </span>
        ),
      },
      {
        name: 'content',
        className: 'banner5-content',
        children: (
          <span>
            <span>
              <span>
                <p>
                  一款基于kubernetes的开源大数据平台，旨在为用户提供一种简单、高效、可扩展的大数据解决方案。
                </p>
              </span>
            </span>
          </span>
        ),
      },
      {
        name: 'button',
        className: 'banner5-button-wrapper',
        children: {
          href: 'https://docs.cloudeon.top/en/latest/quickstart/',
          target: '_brank',
          className: 'banner5-button lg3fx8yhnx-editor_css',
          type: 'primary',
          children: '开始使用',
        },
      },
    ],
  },
  image: {
    className: 'banner5-image lg2er5kwbep-editor_css',
    children:
      'https://uni-1253355096.cos.ap-guangzhou.myqcloud.com/img/20230405180245.png',
  },
};
export const Content40DataSource = {
  wrapper: { className: 'home-page-wrapper content4-wrapper' },
  page: { className: 'home-page content4' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <span>
              <span>
                <span>
                  <p>支持多种大数据服务的容器化部署和管理</p>
                </span>
              </span>
            </span>
          </span>
        ),
        className: 'title-h1',
      },
      {
        name: 'content',
        className: 'title-content content4-title-content',
        children: (
          <span>
            <span>
              <span>
                <p>满足不同规模和业务需求下的大数据处理和分析需求</p>
              </span>
            </span>
          </span>
        ),
      },
    ],
  },
  video: {
    className: 'content4-video',
    children: {
      video: xuanchuangMp4,//'https://os.alipayobjects.com/rmsportal/EejaUGsyExkXyXr.mp4',
      image: homeJpg,//'https://zos.alipayobjects.com/rmsportal/HZgzhugQZkqUwBVeNyfz.jpg',
    },
  },
};
export const Feature30DataSource = {
  wrapper: {
    className: 'home-page-wrapper content3-wrapper lg3gdlbhgh9-editor_css',
  },
  page: { className: 'home-page content3' },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <p>CloudEon提供专业的服务</p>
          </span>
        ),
        className: 'title-h1',
      },
      {
        name: 'content',
        className: 'title-content',
        children: (
          <span>
            <p>完全基于kubernetes的资源调度和管理能力</p>
          </span>
        ),
      },
    ],
  },
  block: {
    className: 'content3-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children: icon1,
              //'https://zos.alipayobjects.com/rmsportal/ScHBSdwpTkAHZkJ.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <span>
                <p>快速搭建大数据集群</p>
              </span>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <span>
                <p>
                  通过CloudEon，用户可以在kubernetes上快速搭建部署hadoop集群、doris集群等大数据集群，省去了手动安装和配置的繁琐过程
                </p>
              </span>
            ),
          },
        },
      },
      {
        name: 'block1',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children: icon2,
              //'https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <span>
                <span>
                  <span>
                    <p>容器化运行大数据服务</p>
                  </span>
                </span>
              </span>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <span>
                <p>
                  CloudEon中所有大数据服务都以容器方式运行，使得这些服务的部署和管理更加灵活和便捷，同时也能更好地利用kubernetes的资源调度和管理能力
                </p>
              </span>
            ),
          },
        },
      },
      {
        name: 'block2',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children: icon3,
             //  'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <span>
                <p>支持监控告警</p>
              </span>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <span>
                <p>
                  CloudEon提供了监控告警等功能，帮助用户实时监控集群运行状态，及时发现和解决问题
                </p>
              </span>
            ),
          },
        },
      },
    ],
  },
};
export const Feature10DataSource = {
  wrapper: { className: 'home-page-wrapper content1-wrapper' },
  OverPack: { className: 'home-page content1', playScale: 0.3 },
  imgWrapper: { className: 'content1-img', md: 10, xs: 24 },
  img: {
    children: bg1,
  },
  textWrapper: { className: 'content1-text', md: 14, xs: 24 },
  title: {
    className: 'content1-title',
    children: (
      <span>
        <p>自动化运维</p>
      </span>
    ),
  },
  content: {
    className: 'content1-content',
    children: (
      <span>
        <span>
          <p>
            CloudEon通过自动化运维，能够降低集群管理的难度和人力成本，同时也能提高集群的可用性和稳定性。
          </p>
        </span>
      </span>
    ),
  },
};
export const Feature20DataSource = {
  wrapper: { className: 'home-page-wrapper content2-wrapper' },
  OverPack: { className: 'home-page content2', playScale: 0.3 },
  imgWrapper: { className: 'content2-img', md: 10, xs: 24 },
  img: {
    children: bg2,//'https://zos.alipayobjects.com/rmsportal/tvQTfCupGUFKSfQ.png',
  },
  textWrapper: { className: 'content2-text', md: 14, xs: 24 },
  title: {
    className: 'content2-title',
    children: (
      <span>
        <p>可视化管理界面</p>
      </span>
    ),
  },
  content: {
    className: 'content2-content',
    children: (
      <span>
        <p>
          CloudEon提供了可视化的管理界面，使得用户能够更加直观地管理和监控大数据集群。
        </p>
      </span>
    ),
  },
};
export const Feature11DataSource = {
  wrapper: { className: 'home-page-wrapper content1-wrapper' },
  OverPack: { className: 'home-page content1', playScale: 0.3 },
  imgWrapper: { className: 'content1-img', md: 10, xs: 24 },
  img: {
    children: bg3,//'https://zos.alipayobjects.com/rmsportal/nLzbeGQLPyBJoli.png',
  },
  textWrapper: { className: 'content1-text', md: 14, xs: 24 },
  title: {
    className: 'content1-title',
    children: (
      <span>
        <p>灵活的扩展性</p>
      </span>
    ),
  },
  content: {
    className: 'content1-content',
    children: (
      <span>
        <p>
          提供了插件机制，让用户可以自定义拓展和安装更多的大数据服务。这个插件机制是基于开放API和标准化接口实现的，可以支持用户快速开发和集成新的服务。
        </p>
      </span>
    ),
  },
};

export const Teams10DataSource = {
  wrapper: { className: 'home-page-wrapper teams1-wrapper' },
  page: { className: 'home-page teams1' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <p>社区交流</p>
          </span>
        ),
      },
    ],
  },
  block: {
    className: 'block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 12,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: 'image',
              className: 'teams1-image',
              children: <img src={gongzhonghao} alt="CloudEon开源"></img>,//'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*--rVR4hclJYAAAAAAAAAAABjARQnAQ',
            },
            {
              name: 'title',
              className: 'teams1-title',
              children: (
                <span>
                  <span>
                    <p>微信公众号</p>
                  </span>
                </span>
              ),
            },
            {
              name: 'content',
              className: 'teams1-job',
              children: (
                <span>
                  <span>
                    <p>及时关注CloudEon最新动态</p>
                  </span>
                </span>
              ),
            },
            {
              name: 'content1',
              className: 'teams1-content',
              children: (
                <span>
                  <p>
                    <br />
                  </p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 12,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: 'image',
              className: 'teams1-image',
              children: <img src={wxImg} alt="wx"></img> ,//,//'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*njqxS5Ky7CQAAAAAAAAAAABjARQnAQ',
            },
            {
              name: 'title',
              className: 'teams1-title',
              children: (
                <span>
                  <span>
                    <span>
                      <p>CloudEon社区群</p>
                    </span>
                  </span>
                </span>
              ),
            },
            {
              name: 'content',
              className: 'teams1-job',
              children: (
                <span>
                  <span>
                    <span>
                      <span>
                        <span>
                          {/* <p>加好友请备注CloudEon，方便拉进群</p> */}
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              ),
            },
            {
              name: 'content1',
              className: 'teams1-content',
              children: (
                <span>
                  <p>
                    <br />
                  </p>
                </span>
              ),
            },
          ],
        },
      },
    ],
  },
};

export const Footer10DataSource = {
  wrapper: { className: 'home-page-wrapper footer1-wrapper' },
  OverPack: { className: 'footer1', playScale: 0.2 },
  block: {
    className: 'home-page',
    gutter: 0,
    children: [
      {
        name: 'block0',
        xs: 24,
        md: 6,
        className: 'block',
        title: {
          className: 'logo',
          children:
            'https://uni-1253355096.cos.ap-guangzhou.myqcloud.com/img/20230405172310.png',
        },
        childWrapper: {
          className: 'slogan',
          children: [
            {
              name: 'content0',
              children: '',
            },
          ],
        },
      },
      {
        name: 'block1',
        xs: 24,
        md: 6,
        className: 'block',
        title: { children: '产品' },
        childWrapper: {
          children: [
            { 
              name: 'link0', 
              href: '#', 
              target: '_brank',
              children: '产品更新记录' 
            },
            {
              name: 'link1',
              href: 'https://docs.cloudeon.top/en/latest/instal/',
              target: '_brank',
              children: (
                <span>
                  <span>
                    <p>安装部署</p>
                  </span>
                </span>
              ),
            },
            { 
              name: 'link2', 
              href: 'https://docs.cloudeon.top/en/latest/quickstart/', 
              target: '_brank',
              children: '快速入门' 
            },
          ],
        },
      },
      {
        name: 'block2',
        xs: 24,
        md: 6,
        className: 'block',
        title: {
          children: (
            <span>
              <span>
                <p>关于</p>
              </span>
            </span>
          ),
        },
        childWrapper: {
          children: [
            { href: 'https://docs.cloudeon.top/en/latest/FAQ/', name: 'link0', children: 'FAQ' },
            {
              href: 'https://docs.cloudeon.top/en/latest/%E7%A4%BE%E5%8C%BA%E8%B4%A1%E7%8C%AE/develop/',
              name: 'link1',
              target: '_brank',
              children: (
                <span>
                  <span>
                    <p>开发指南</p>
                  </span>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block3',
        xs: 24,
        md: 6,
        className: 'block',
        title: {
          children: (
            <span>
              <span>
                <p>交流</p>
              </span>
            </span>
          ),
        },
        childWrapper: {
          children: [
            {
              href: 'https://github.com/dromara/CloudEon/issues',
              name: 'link0',
              target: '_brank',
              children: (
                <span>
                  <p>github issues</p>
                </span>
              ),
            },
            {
              href: '#',
              name: 'link1',
              target: '_brank',
              children: (
                <span>
                  <p>公众号：CloudEon开源</p>
                </span>
              ),
            },
          ],
        },
      },
    ],
  },
  copyrightWrapper: { className: 'copyright-wrapper' },
  copyrightPage: { className: 'home-page' },
  copyright: {
    className: 'copyright',
    children: (
      <span>
        <p>
          <span>©2023 by CloudEon All Rights Reserved</span>
        </p>
      </span>
    ),
  },
};
