<template>
	<view>
		<view v-show="selected==true">
			<view style="width: 98%;margin-left: 1%;margin-top: 5%;background-color: f5f5f5;">
				<view @click="doctorSelectShow = true">
					<text style="font-size: large;font-weight: bold;margin-left: 5%;">{{org}}({{dept}})</text>
				</view>
				<view style="margin-top: 5%;">
					<view v-for="item in detialDoctorList" :key="item.doctor_id" style="margin-top: 2%;" @click="selectDoctor2(item)">
						<view>
							<view class="doctorInfo">
							<u-avatar :src="item.avatar_url" size="160" style="position: relative;left: 20rpx;top: 20rpx;"></u-avatar>
							<text style="position: relative;font-weight: 500;font-size: large;top: -90rpx;left: 20rpx;">{{item.doctor_name}}</text>
							<text style="position: relative;font-size: small;border: 3rpx solid #F0AD4E;top: -93rpx;left: 40rpx;color: #F0AD4E;border-radius: 20rpx;"> {{item.level_name}}</text>
							<text style="position: relative;font-size: medium;">{{item.dept_name}}</text>
						</view>
						</view>
						
					</view>
				</view>
			</view>
		</view>
		<view v-show="selected==false">
			<u-cell-item icon="map" title="科室选择" @click="doctorSelectShow = true"></u-cell-item>
			<view style="width: 98%;margin-left: 1%;margin-top: 5%;background-color: f5f5f5;">
				<view style="margin-top: 5%;">
					<view v-for="item in doctorList" :key="item.value" style="margin-top: 2%;">
						<view>
							<view v-for="item2 in item.doctor" :key="item2.doctor_id" @click="selectDoctor(item,item2)">
								<view class="doctorInfo">
									<u-avatar :src="item2.avatar_url" size="160" style="position: relative;left: 20rpx;top: 20rpx;"></u-avatar>
									<text style="position: relative;font-weight: 500;font-size: large;top: -90rpx;left: 20rpx;">{{item2.doctor_name}}</text>
									<text style="position: relative;font-size: small;border: 3rpx solid #F0AD4E;top: -93rpx;left: 40rpx;color: #F0AD4E;border-radius: 20rpx;"> {{item2.level_name}}</text>
									<view></view>
									<text style="position: relative;font-size: medium;left: 180rpx;top: -50rpx;color: #b9b9b9;">{{item.dept_name}}</text>
								</view>
							</view>
							
						</view>
						
					</view>
				</view>
			</view>		
		</view>
		<u-select v-model="doctorSelectShow" mode="mutil-column-auto" :list="hospitalList" @confirm="confirm"></u-select>
	</view>
</template>

<script>
	import store from "../../static/store/UserIndex.js"
	export default {
		onLoad() {
			let list = store.state.doctorList
			let cnt = 1;
			for(let i = 0;i < list.length;i++){
				let temp = {
					value: cnt,
					label: list[i].org_name,
					children:[]
				}
				cnt++;
				for(let j = 0;j < list[i].dept.length;j++){
					let childrenTemp = {
						value: cnt,
						label: list[i].dept[j].dept_name,
						doctor: list[i].dept[j].doctor
					}
					let doctortemp = {}
					doctortemp.value = cnt
					doctortemp.doctor = list[i].dept[j].doctor
					doctortemp.org_name = list[i].org_name
					doctortemp.dept_name = list[i].dept[j].dept_name
					this.doctorList.push(doctortemp)
					cnt++;
					temp.children.push(childrenTemp)
				}
				this.hospitalList.push(temp)
			}
		},
		data() {
			return {
				doctorSelectShow:false,
				hospitalList:[],
				doctorList:[],
				detialDoctorList:[],
				selected:false,
				org:'',
				dept:'',
			}
		},
		methods: {
			confirm(e){
				console.log(e)
				let temp = []
				let key = []
				e.map((val, index) => {
					temp.push(val.label)
					key.push(val.value)
				})
				this.org=temp[0]
				this.dept = temp[1]
				for(let i = 0; i < this.doctorList.length;i++){
					if(key[1]==this.doctorList[i].value){
						this.detialDoctorList = this.doctorList[i].doctor
						break
					}
				}
				this.selected = true
			},
			selectDoctor(item1,item2){
				uni.navigateTo({
					url:'../UserIndex/UserIndex?doctor_avatar='+item2.avatar_url+'&doctor_level='+item2.level_name+'&doctor_name='+item2.doctor_name+'&org_name='+item1.org_name+'&dept_name='+item1.dept_name+'&doctor_id='+item2.doctor_id+'&selectKey=1'
				})
			},
			selectDoctor2(item1){
				uni.navigateTo({
					url:'../UserIndex/UserIndex?doctor_avatar='+item1.avatar_url+'&doctor_level='+item1.level_name+'&doctor_name='+item1.doctor_name+'&org_name='+this.org+'&dept_name='+this.dept+'&doctor_id='+item1.doctor_id+'&selectKey=1'
				})
			},
		}
	}
</script>

<style>
.doctorInfo{
	background-color: #FFFFFF;
	height: 200rpx;
	width: 98%;
	border-radius: 10rpx;
	margin-left: 1%;
}
</style>
