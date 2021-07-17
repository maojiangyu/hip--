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
				<text style="position: relative;font-size: small;top: -30rpx;left: -175rpx;">就诊人</text>
				<text style="position: relative;font-size: small;top: -30rpx;left: -140rpx;">{{item.person.person_name}}</text>
				<text style="position: relative;font-size: small;top: 20rpx;left: -332rpx;">病情</text>
				<text style="position: relative;font-size: small;top: 20rpx;left: -275rpx;">{{item.question}}</text>
			</view>
			<view v-if="item.consult_status===1">
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
</template>

<script>
	export default {
		onLoad() {
			/**
			 * 获取记录列表
			 * uni.request({
				 * url:'',
				 * data:{
					 * user_id:''
				 }
				 * method:'GET',
				 * success:(res)=>{
					 * 
				 }
			 })*/
		},
		data() {
			return {
				list:[
					{
						consult_id: '1',
						doctor_id: '1',
						doctor: {
							doctor_avatar: 'https://thirdwx.qlogo.cn/mmopen/vi_32/fvM2V9lKibssFhUpV5K7Yb6Fd7EaxO9zujhXH5Z2x5ibb9CtmwpMt4UENyJ6rLRYgKVAibtPIIqjIMk2QgSoh4apw/132',
							doctor_level: '主治医师',
							doctor_name: '111',
							org_name:'在线云医院'
						},
						person_id: '1',
						person: {
							person_name: 'maofu'
						},
						consult_status: 0,
						create_time: '2021-7-13 13:36',
						question: '1111',
						diagnosis:'暂无'
					},
					{
						consult_id: '2',
						doctor_id: '2',
						doctor: {
							doctor_avatar: 'https://thirdwx.qlogo.cn/mmopen/vi_32/fvM2V9lKibssFhUpV5K7Yb6Fd7EaxO9zujhXH5Z2x5ibb9CtmwpMt4UENyJ6rLRYgKVAibtPIIqjIMk2QgSoh4apw/132',
							doctor_level: '主治医师',
							doctor_name: '111',
							org_name:'在线云医院'
						},
						person_id: '1',
						person: {
							person_name: 'maofu'
						},
						consult_status: 1,
						create_time: '2021-7-12 13:36',
						question: '3432424342',
						diagnosis:'好好喝水'
					},
					{
						consult_id: '3',
						doctor_id: '1',
						doctor: {
							doctor_avatar: 'https://thirdwx.qlogo.cn/mmopen/vi_32/fvM2V9lKibssFhUpV5K7Yb6Fd7EaxO9zujhXH5Z2x5ibb9CtmwpMt4UENyJ6rLRYgKVAibtPIIqjIMk2QgSoh4apw/132',
							doctor_level: '主治医师',
							doctor_name: '111',
							org_name:'在线云医院'
						},
						person_id: '1',
						person: {
							person_name: 'maofu'
						},
						consult_status: 0,
						create_time: '2021-7-13 17:36',
						question: '423432432',
						diagnosis:'暂无'
					},
				]
			}
		},
		methods: {
			seeMedicine(item){
				uni.navigateTo({
					url:'../SeeMedicine/SeeMedicine?consult_id='+item.consult_id+'&doctor_id='+item.doctor_id+'&person_id='+item.person_id
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
