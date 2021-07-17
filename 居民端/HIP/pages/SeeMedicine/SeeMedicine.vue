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
			<text style="position: fixed;right: 20rpx;">{{item.quantity}} {{item.drug.pack_unit}}</text>
			<view style="margin-top: 1%;"></view>
			<text style="margin-left: 20rpx;color: #666666;">用法：{{item.frequency_name}}</text>
			<text style="margin-left: 20rpx;color: #666666;">{{item.usage_name}}</text>
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
			this.person_id = option.person_id
			/**
			 * 获取处方列表
			 * uni.request({
				 * url:'',
				 * data:{
					 * consult_id:'',
					 * doctor_id:'',
					 * person_id:''
				 }
				 * method:'GET',
				 * success:(res)=>{
					 * 
				 }
			 })*/
		},
		data() {
			return {
				consult_id: '1',
				doctor_id: '1',
				doctor_name: '111',
				person_id: '1',
				org_name:'在线云诊所',
				person: {
					person_id: '1',
					person_name: 'maofu',
					person_card_id: '3310812000********',
					person_sex: '男',
					person_birth_date: '2000-8-21',
					person_age: 21,
					person_phone: '189685xxxxx'
				},
				medicineList:[
					{
						prescription_drug_id: '1',
						frequency_name: '一天三次',
						usage_name: '口服',
						take_days: 4,
						quantity: 1.00,
						total_price: 12.20,
						remark: '111',
						drug: {
							drug_id: 1,
							drug_name: '肠炎宁片',
							trade_name: '[康恩贝]肠炎宁片',
							pinyin_code: 'cynp',
							specification: '0.42g*48片',
							pack_unit: '盒',
							price: 30.00,
							dose: 0.42,
							dose_unit: 'g',
						}
					},
					{
						prescription_drug_id: '2',
						frequency_name: '一天两次',
						usage_name: '注射',
						take_days: 4,
						quantity: 1.00,
						total_price: 12.20,
						remark: '4324243',
						drug: {
							drug_id: 2,
							drug_name: '连花清瘟胶囊',
							trade_name: '[以岭]连花清瘟胶囊',
							pinyin_code: 'lhqwjn',
							specification: '0.35g*36粒',
							pack_unit: '盒',
							price: 29.10,
							dose: 0.35,
							dose_unit: 'g',
						}
					}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
