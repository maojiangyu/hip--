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
			uni.request({
				url:'http://192.168.43.181:8443/api/listDrug',
				method:'GET',
				success: (res) => {
					let temp = {}
					let drugList = []
					for(let i = 0;i < res.data.length;i++){
						temp = {}
						temp = res.data[i]
						temp.show = false
						drugList.push(temp)
					}
					store.state.medicineInfoList = drugList
					console.log(store.state.medicineInfoList)
				}
			})
			uni.request({
				url:'http://192.168.43.181:8443/api/listDoctor',
				method:'GET',
				success: (res) => {
					console.log(res)
					let doctorList = [];
					let orgTemp = {
						org_id : null,
						org_name: '',
						dept: []
					}
					let deptTemp  ={
						dept_id: null,
						dept_name: '',
						doctor: []
					}
					let doctorTemp = {
						
					}
					let j = 0;
					let k = 0;
					let index = 0;
					let index2 = 0
					for(let i = 0;i < res.data.length;i++){
						index = 0;
						index2 = 0;
						
						if(doctorList.length==0){
							orgTemp = {
								org_id: res.data[i].org_id,
								org_name: res.data[i].org_name,
								dept: []
							}
							deptTemp  ={
								dept_id: res.data[i].dept_id,
								dept_name: res.data[i].dept_name,
								doctor: []
							}
							doctorTemp = {
								doctor_id: res.data[i].doctor_id,
								doctor_name: res.data[i].doctor_name,
								avatar_url: res.data[i].doctor_avatar,
								level_name: res.data[i].doctor_level
							}
							deptTemp.doctor.push(doctorTemp)
							orgTemp.dept.push(deptTemp)
							doctorList.push(orgTemp)
						}else{
							for(j = 0;j<doctorList.length;j++){
							if(doctorList[j].org_id==res.data[i].org_id){
								for(k = 0;k<doctorList[j].dept.length;k++){ 
									if(doctorList[j].dept[k].dept_id==res.data[i].dept_id){
										doctorTemp = {
											doctor_id: res.data[i].doctor_id,
											doctor_name: res.data[i].doctor_name,
											avatar_url: res.data[i].doctor_avatar,
											level_name: res.data[i].doctor_level
										}
										doctorList[j].dept[k].doctor.push(doctorTemp)
										index = 1;
										index2 = 1;
										break
									}
								}
								if(index==0){
									deptTemp  ={
										dept_id: res.data[i].dept_id,
										dept_name: res.data[i].dept_name,
										doctor: []
									}
									doctorTemp = {
										doctor_id: res.data[i].doctor_id,
										doctor_name: res.data[i].doctor_name,
										avatar_url: res.data[i].doctor_avatar,
										level_name: res.data[i].doctor_level
									}
									deptTemp.doctor.push(doctorTemp)
									doctorList[j].dept.push(deptTemp)
									index2 = 1;
									break
								}
							}
						}
						if(index2 == 0){
							orgTemp = {
								org_id: res.data[i].org_id,
								org_name: res.data[i].org_name,
								dept: []
							}
							deptTemp  ={
								dept_id: res.data[i].dept_id,
								dept_name: res.data[i].dept_name,
								doctor: []
							}
							doctorTemp = {
								doctor_id: res.data[i].doctor_id,
								doctor_name: res.data[i].doctor_name,
								avatar_url: res.data[i].doctor_avatar,
								level_name: res.data[i].doctor_level
							}
							deptTemp.doctor.push(doctorTemp)
							orgTemp.dept.push(deptTemp)
							doctorList.push(orgTemp)
						}
						}
						
					}
					store.state.doctorList = doctorList
					console.log(store.state.doctorList)
				}
			})
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
						        let appid = "wx2d6f34fa4034778d"  //需替换
						        let secret = "4fefc57c42a25878476cccd7426dde5b"  //需替换
						        let url = 'https://api.weixin.qq.com/sns/jscode2session?appid=' + appid + '&secret=' + secret +
						            '&js_code=' +
						            this.Code + '&grant_type=authorization_code';
						        uni.request({
						            url: url, // 请求路径
						            success: res => {
						                // console.log('openid session_key:', res.data);
						                this.openid = res.data.openid
						                this.session_key = res.data.session_key
										store.state.user_id = this.openid
						                //获取用户信息
						                uni.getUserInfo({
						                    provider: 'weixin',
						                    success: res => {
						                        
						                        //解密encryptedData，可获取用户openId
						                        let pc = new WXBizDataCrypt(appid, this.session_key);
						                        let data = pc.decryptData(res.encryptedData, res.iv);
						                      
												this.openid = data.openId;
												store.state.open_id = this.openid
												uni.request({
													url:'http://192.168.43.181:8443/api/loginUser',
													data:{
														open_id:this.openid,
														user_avatar:this.avatarUrl
													},
													method:'POST',
													header:{
														'custom-header':'user'
													},
													success:(res)=>{
														
														uni.navigateTo({
														    url: '../UserIndex/UserIndex'
														});
													}
												})
											
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
						
						
				    }
				});
			                
			                
			    },
		}
	}
</script>

<style>

</style>
