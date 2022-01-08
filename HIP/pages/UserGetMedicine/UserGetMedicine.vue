<template>
	<view style="background-color: #F4F4F5">
		<view v-for="item in list" :key="item.consult_id">
			<view style="background-color: #FFFFFF;width: 98%;margin-left: 1%;height: 60rpx;margin-top: 1%;">
				<text style="margin-top: 1%;margin-left: 2%;">问诊时间 ： {{item.create_time}}</text>
				<text v-if="item.consult_status===0" style="position: relative;color: #F29100;left: 220rpx;font-weight: bold;top: 7rpx;">未完成</text>
				<text v-if="item.consult_status===1" style="position: relative;color: #F29100;left: 220rpx;font-weight: bold;top: 7rpx;">已完成</text>
			</view>
			<view class="userInfo" style="margin-top: 1%;">
				<u-avatar :src="item.doctor.doctor_avatar" size="150" style="position: relative;left: 20rpx;top: 20rpx;"></u-avatar>
				<text style="position: relative;left: 50rpx;font-weight: bold;font-size: larger;top: -80rpx;">{{item.doctor.doctor_name}}</text>
				<text style="position: relative;left: 100rpx;font-size: medium;top: -85rpx;">{{item.doctor.org_name}}</text>
				<view style="position: relative;top: -70rpx;left: 200rpx;">
					<text style="font-size: small;">就诊人</text>
				    <text style="font-size: small;">{{item.person_name}}</text>
				</view>
				<view style="position: relative;top: -50rpx;left: 200rpx;">
					<text style="font-size: small;">病情</text>
					<text style="font-size: small;">{{item.question}}</text>
				</view>
				</view>
				<view v-if="item.consult_status==1">
				<u-cell-group style="width: 98%;left: 1%;position: relative;">
					<u-cell-item icon="order" title="复诊配药" :arrow="false" style="color: #b9b9b9;">
						<u-button slot="right-icon" size="mini" style="color: #18B566;" @click="seeMedicine(item)">查看处方</u-button>
					</u-cell-item>
				</u-cell-group>
			</view>
			<view v-else>
				<u-cell-group style="width: 98%;left: 1%;position: relative;">
					<u-cell-item icon="order" title="复诊配药" :arrow="false" style="color: #b9b9b9;">
						
					</u-cell-item>
				</u-cell-group>
			</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	import store from "../../static/store/UserIndex.js"
	export default {
		onLoad() {
			uni.request({
				url:'http://192.168.43.181:8443/api/SearchList',
				method:'POST',
				data:{
					user_id:store.state.user_id,
				},
				success: (res) => {
					this.list = res.data
					console.log(this.list)
				}
			})
		},
		data() {
			return {
				list:[
					
				]
			}
		},
		methods: {
			seeMedicine(item){
				uni.navigateTo({
					url:'../SeeMedicine/SeeMedicine?consult_id='+item.consult_id+'&doctor_id='+item.doctor.doctor_id+'&person_id='+item.person_id
				})
			}
		}
	}
</script>

<style>
.userInfo{
	background-color: #ffffff;
	height: 200rpx;
	width: 98%;
	border-radius: 10rpx;
	margin-left: 1%;
}
</style>
