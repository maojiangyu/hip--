<template>
	<view>
		<view style="text-align: center;margin-top: 20rpx;">
			<text style="font-weight: 500;font-size: xx-large;">{{org_name}}</text>
			<view></view>
			<text style="font-weight: 500;font-size: x-large;">处方笺</text>
		</view>
		<view style="margin-top: 8%;margin-left: 2%;">
			<text>姓名  {{person.person_name}}</text>
			<text style="margin-left: 50rpx;">性别  {{person.person_sex}}</text>
			<text style="margin-left: 50rpx;">年龄  {{person.person_age}}</text>
			<text style="margin-left: 20rpx;">出生日期  {{person.person_birth_date}}</text>
		</view>
		<view style="margin-top: 3%;margin-left: 2%;">
			<text>身份证号  {{person.person_card_id}}</text>
			<text style="margin-left: 55rpx;">手机号  {{person.person_phone}}</text>
		</view>
		<u-gap height="10" bg-color="#e4e4e4" margin-top="80" margin-bottom="10" style="width: 98%; margin-left: 1%;"></u-gap>
		<view style="margin-left: 2%">
			<text style="color: #333333;font-size: x-large;font-weight: 500;">Rp</text>
		</view>
		<view style="margin-top: 5%;"></view>
		<view v-for="item in medicineList" :key="item.prescription_drug_id" style="margin-left: 1%;">
			<text style="font-size: medium;font-weight: 500;margin-left: 20rpx;">{{item.drug.drug_name}}</text>
			<text style="position: absolute;right: 0;">{{item.quantity}} {{item.drug.pack_unit}}</text>
			<view style="margin-top: 1%;"></view>
			<text style="margin-left: 20rpx;color: #666666;">用法：{{item.frequency_name}}</text>
			<text style="margin-left: 20rpx;color: #666666;">{{item.usage_name}}</text>
			<view style="margin-top: 1%;"></view>
			<text style="margin-left: 20rpx;color: #666666;">医嘱：{{item.remark}}</text>
			<view style="margin-top: 4%;"></view>
			<view>
				<text style="color: #666666;font-size: medium;margin-left: 70%;">药费:</text>
				<text style="color: #F29100;">    ￥{{item.drug.price*item.quantity}}</text>
				<view></view>
			</view>
			
		</view>
		<view style="margin-top: 5%;">
			<text style="margin-left: 30rpx;font-size: medium;">处方医师: {{doctor_name}}</text>
		</view>
		<view style="text-align: center;margin-top: 2%;">
			<text style="color: #cccccc;">*药师温馨提示：谨遵医嘱服药！处方当日有效！</text>
		</view>
	</view>
</template>

<script>
	export default {
		onLoad: function (option) { 
			this.consult_id = option.consult_id
			this.doctor_id = option.doctor_id
			console.log(this.consult_id)
			console.log(this.doctor_id)
			 
			uni.request({
				url:'http://192.168.43.181:8443/api/SearchOnePreInfo',
				data:{
					consult_id:this.consult_id,
					doctor_id:this.doctor_id,
				},
				 method:'POST',
				 success:(res)=>{
					  this.consult_id = res.data.consult_id
					  this.doctor_id = res.data.doctor_id
					  this.doctor_name = res.data.doctor_name
					  this.org_name = res.data.org_name
					  this.person = res.data.person
					  this.medicineList = res.data.medicineList
					  console.log(res.data)
				}
			 })
		},
		data() {
			return {
				consult_id: '',
				doctor_id: '',
				doctor_name: '',
				org_name:'',
				person: {
					person_name: '',
					person_card_id: '',
					person_sex: '',
					person_birth_date: '',
					person_age: 0,
					person_phone: ''
				},
				medicineList:[
					
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
