<template>
	<view style="text-align: center;margin-top: 200rpx;">
		<u-image width="100%" height="300rpx" :src="src"></u-image>
		<button type="primary" @click="login" style="width: 80%;margin-top: 5%;">登录</button>
		
	</view>
</template>

<script>
	import store from "../../static/store/UserIndex.js"
	import WXBizDataCrypt from "../../WXBizDataCrypt.js";
	export default {
		onLoad()
		{
			/**
			 * 获取药品列表
			 * uni.request({
				 * url:'',
				 * method:'GET',
				 * success:(res)=>{
					 * 
				 }
			 })*/
		},
		data() {
			return {
				Code: '',
				openid: '',
				session_key: '',
				avatarUrl: '',
				userName: '',
				src2: 'https://github.com/maojiangyu/img/blob/main/%E5%8C%BB%E9%99%A2.png?raw=true',
				src:'https://iconfont.alicdn.com/t/7dc11ab6-0509-43bf-a0ab-62056a85bfde.png'
			}
		},
		methods: {
			login() {
				uni.getUserProfile({
				    desc:'Wexin',     // 这个参数是必须的
				    success:res=>{
						
						this.avatarUrl = res.userInfo.avatarUrl;
						this.userName = res.userInfo.nickName;
						store.state.avatarUrl = this.avatarUrl;
						store.state.UserName = this.userName;
						//登录
						uni.login({
						    provider: 'weixin',
						    success: res => {
						        // console.log('登录成功：', res);
						        //获取临时登录凭证code
						        this.Code = res.code;
						        //获取openid，session_key
						        let appid = "***********"  //开发者appid
						        let secret = "**********"  //需替换
						        let url = 'https://api.weixin.qq.com/sns/jscode2session?appid=' + appid + '&secret=' + secret +
						            '&js_code=' +
						            this.Code + '&grant_type=authorization_code';
						        uni.request({
						            url: url, // 请求路径
						            success: res => {
						                // console.log('openid session_key:', res.data);
						                this.openid = res.data.openid
						                this.session_key = res.data.session_key
									
						                //获取用户信息
						                uni.getUserInfo({
						                    provider: 'weixin',
						                    success: res => {
						                        
						                        //解密encryptedData，可获取用户openId
						                        let pc = new WXBizDataCrypt(appid, this.session_key);
						                        let data = pc.decryptData(res.encryptedData, res.iv);
						                      
												this.openid = data.openId;
												store.state.open_id = this.openid
						                    },
						                    fail: err => {
						                        console.log('获取用户信息错误：', err)
						                    }
						                })
									
						            },
						            fail: err => {
						                console.log('请求失败：',err)
						            }
						        });
						    },
						    fail: err => {
						        console.log('登录失败：', err)
						    }
						})
						uni.navigateTo({
						    url: '../UserIndex/UserIndex'
						});
				    }
				});
			                
			                
			    },
		}
	}
</script>

<style>

</style>
