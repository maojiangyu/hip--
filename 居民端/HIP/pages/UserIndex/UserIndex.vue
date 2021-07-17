<template>
	<view>
		<view>
			<view v-show="current===0" style="background-color: #F4F4F5;height: 1700rpx;">
				<view class="doctorInfo" v-show="getSelect==1">
					<u-avatar :src="doctor.doctor_avatar" size="160" style="position: absolute;left: 40rpx;top: 20rpx;"></u-avatar>
					<text style="position: relative;left: 220rpx;font-weight: bold;font-size: large;top: 40rpx;">{{doctor.doctor_name}}</text>
					<text style="position: relative;left: 240rpx;font-size: small;top: 40rpx;border: 3rpx solid #F0AD4E;color: #F0AD4E;border-radius: 20rpx;"> {{doctor.doctor_level}}</text>
					<view></view>
					<text style="position: relative;left: 220rpx;font-size: medium;top: 70rpx;">{{doctor.dept_name}}</text>
					<view style="width: 250rpx;position: absolute;right: 0;top: 50rpx;">
						<u-cell-item value="更换医生" style="border: none;height: 200rpx;border-radius: 10rpx;" @click="gotoDoctorList" :border-bottom="false"></u-cell-item>
					</view>
				</view>
				<view v-show="getSelect===0" class="doctorInfo2">
					<u-cell-item value="清选择医生" :border-bottom="false" @click="gotoDoctorList()"></u-cell-item>
				</view>
				<view style="margin-top: 2%;margin-left: 1%;width: 98%;background-color: #FFFFFF;">
					<u-form :model="askForm">
						<u-form-item label="问诊人" label-width="160rpx" style="margin-left: 1%;"><u-input v-model="form.person_name" input-align="right" :disabled="true" @click="gotoEditUI" placeholder="请确认病人信息"/></u-form-item>
						<u-form-item label="确诊诊断" label-width="160rpx" style="margin-left: 1%;"><u-input v-model="askForm.disease_name" input-align="right" placeholder="请输入疾病类型"/></u-form-item>
						<u-form-item label="所需药品" label-width="160rpx" style="margin-left: 1%;"><u-input input-align="right" placeholder="添加药品" :disabled="true" @click="medicineShow = true"/></u-form-item>
						<view style="display: flex;flex-wrap: wrap;">
							<view v-for="item in medicineList" :key="item.drug_id">
								<u-tag :text="item.drug_name" type="success" closeable @close="medicineTagClick(item)" :show="item.show"/>
							</view>
						</view>
						<view style="margin-top: 2%;width: 98%;margin-left: 1%;">
							<text>病情描述</text>
							<u-form-item><u-input v-model="askForm.question" input-align="left" :height="height"/></u-form-item>
						</view>
						<view style="margin-top: 2%;width: 98%;margin-left: 1%;">
							<text>病情照片</text>
							<view>
								<view>
									<u-upload ref="uUpload" :action="action" :auto-upload="false" ></u-upload>
								</view>
							</view>
							<view style="width: 96%;margin-left: 2%;margin-top: 1%;">
								<text style="margin: 30rpx;"></text>
								<text style="color: #b9b9b9;">请上传病情照片、化验单、检查资料、报告单、药品处方单，若为皮肤问题，建议对准患处拍照。照片仅自己和医生可见。</text>
							</view>
						</view>
					</u-form>
				</view>
				<view style="margin-top: 10%;">
					<button style="width: 80%;background-color: #4be658;color: #FFFFFF;" @click="sendMessage">提交</button>
				</view>
				<view>
					<u-popup v-model="medicineShow" mode="bottom" height="1000rpx" >
						<view style="margin-top: 4%;">
							<view v-for="item in MSList" :key="item.key">
								<view v-if="item.show">
									<view style="margin-top: 1%;background-color: #d4d4d4;height: 40rpx;width: 98%;margin-left: 1%;border-radius: 20rpx;">
										<text style="margin-left: 20rpx;">{{item.key}}</text>
									</view>
									<view style="margin-top: 4%;"></view>
									<view style="margin-left: 2%;width: 96%;">
										<u-checkbox-group @change="checkboxGroupChange" :wrap="true" size="48">
										<u-checkbox 
											@change="checkboxChange(item2)" 
											v-model="item2.show" 
											v-for="(item2, index) in item.data" :key="index" 
											:name="item2.drug_name"
											style="margin-top: 2%;"
										>{{item2.drug_name}}</u-checkbox>
										
										</u-checkbox-group>
									</view>
									
								</view>
								
							</view>
							
						</view>
					</u-popup>
				</view>
			</view>
			<view v-show="current===1" style="background-color: #F4F4F5;height: 1200rpx;">
				<view class="userInfo">
					<u-avatar :src="src" size="160" style="position: absolute;left: 20rpx;top: 20rpx;"></u-avatar>
					<text style="position: absolute;left: 200rpx;font-weight: bold;font-size: large;top: 80rpx;">{{userName}}</text>
				</view>
				<view style="width: 98%;margin-left: 1%;margin-top: 1%;">
					<u-cell-group>
						<u-cell-item icon="list" title="配药记录" @click="gotoGM"></u-cell-item>
					</u-cell-group>
				</view>
				
				<view style="margin-top: 3%;height: 100rpx;background-color: #FFFFFF;width: 98%;margin-left: 1%;border-radius: 10rpx;text-align: center;">
					<text style="font-size: large;font-weight: bold;line-height: 100rpx;">退出</text>
				</view>
			</view>
		</view>
		<u-tabbar v-model="current" :list="list" ></u-tabbar>
	</view>
</template>

<script>
	import store from "../../static/store/UserIndex.js"
	export default {
		onLoad(option) {
			for(let i = 0;i < this.medicineList.length;i++){
				if(this.medicineList[i].pinyin_code.substr(0,1)=='a'){
					this.MSList[0].data.push(this.medicineList[i])
					this.MSList[0].show = true
				}else if(this.medicineList[i].pinyin_code.substr(0,1)=='b'){
					this.MSList[1].data.push(this.medicineList[i])
					this.MSList[1].show = true
				}else if(this.medicineList[i].pinyin_code.substr(0,1)=='c'){
					this.MSList[2].data.push(this.medicineList[i])
					this.MSList[2].show = true
				}else if(this.medicineList[i].pinyin_code.substr(0,1)=='d'){
					this.MSList[3].data.push(this.medicineList[i])
					this.MSList[3].show = true
				}else if(this.medicineList[i].pinyin_code.substr(0,1)=='e'){
					this.MSList[4].data.push(this.medicineList[i])
					this.MSList[4].show = true
				}else if(this.medicineList[i].pinyin_code.substr(0,1)=='f'){
					this.MSList[5].data.push(this.medicineList[i])
					this.MSList[5].show = true
				}else if(this.medicineList[i].pinyin_code.substr(0,1)=='g'){
					this.MSList[6].data.push(this.medicineList[i])
					this.MSList[6].show = true
				}else if(this.medicineList[i].pinyin_code.substr(0,1)=='h'){
					this.MSList[7].data.push(this.medicineList[i])
					this.MSList[7].show = true
				}else if(this.medicineList[i].pinyin_code.substr(0,1)=='i'){
					this.MSList[8].data.push(this.medicineList[i])
					this.MSList[8].show = true
				}else if(this.medicineList[i].pinyin_code.substr(0,1)=='j'){
					this.MSList[9].data.push(this.medicineList[i])
					this.MSList[9].show = true
				}else if(this.medicineList[i].pinyin_code.substr(0,1)=='k'){
					this.MSList[10].data.push(this.medicineList[i])
					this.MSList[10].show = true
				}else if(this.medicineList[i].pinyin_code.substr(0,1)=='l'){
					this.MSList[11].data.push(this.medicineList[i])
					this.MSList[11].show = true
				}else if(this.medicineList[i].pinyin_code.substr(0,1)=='m'){
					this.MSList[12].data.push(this.medicineList[i])
					this.MSList[12].show = true
				}else if(this.medicineList[i].pinyin_code.substr(0,1)=='n'){
					this.MSList[13].data.push(this.medicineList[i])
					this.MSList[13].show = true
				}else if(this.medicineList[i].pinyin_code.substr(0,1)=='o'){
					this.MSList[14].data.push(this.medicineList[i])
					this.MSList[14].show = true
				}else if(this.medicineList[i].pinyin_code.substr(0,1)=='p'){
					this.MSList[15].data.push(this.medicineList[i])
					this.MSList[15].show = true
				}else if(this.medicineList[i].pinyin_code.substr(0,1)=='q'){
					this.MSList[16].data.push(this.medicineList[i])
					this.MSList[16].show = true
				}else if(this.medicineList[i].pinyin_code.substr(0,1)=='r'){
					this.MSList[17].data.push(this.medicineList[i])
					this.MSList[17].show = true
				}else if(this.medicineList[i].pinyin_code.substr(0,1)=='s'){
					this.MSList[18].data.push(this.medicineList[i])
					this.MSList[18].show = true
				}else if(this.medicineList[i].pinyin_code.substr(0,1)=='t'){
					this.MSList[19].data.push(this.medicineList[i])
					this.MSList[19].show = true
				}else if(this.medicineList[i].pinyin_code.substr(0,1)=='u'){
					this.MSList[20].data.push(this.medicineList[i])
					this.MSList[20].show = true
				}else if(this.medicineList[i].pinyin_code.substr(0,1)=='v'){
					this.MSList[21].data.push(this.medicineList[i])
					this.MSList[21].show = true
				}else if(this.medicineList[i].pinyin_code.substr(0,1)=='w'){
					this.MSList[22].data.push(this.medicineList[i])
					this.MSList[22].show = true
				}else if(this.medicineList[i].pinyin_code.substr(0,1)=='x'){
					this.MSList[23].data.push(this.medicineList[i])
					this.MSList[23].show = true
				}else if(this.medicineList[i].pinyin_code.substr(0,1)=='y'){
					this.MSList[24].data.push(this.medicineList[i])
					this.MSList[24].show = true
				}else if(this.medicineList[i].pinyin_code.substr(0,1)=='z'){
					this.MSList[25].data.push(this.medicineList[i])
					this.MSList[25].show = true
				}
			}
			this.doctor.doctor_avatar = option.doctor_avatar
			this.doctor.doctor_level = option.doctor_level
			this.doctor.doctor_name = option.doctor_name
			this.doctor.org_name = option.org_name
			this.doctor.dept_name = option.dept_name
			this.doctor.doctor_id = option.doctor_id
			this.getSelect = option.selectKey
			
			/**
			 * 获取医生列表
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
				list: [
					{
						iconPath: "grid",
						selectedIconPath: "grid-fill",
						text: '首页',
						isDot: false,
						customIcon: false,
					},
					{
						iconPath: "account",
						selectedIconPath: "account-fill",
						text: '个人中心',
						isDot: false,
						customIcon: false,
					},									
					],
					current: 0,
					src: store.state.avatarUrl,
					doctor: {
						doctor_id:'',
						doctor_avatar: 'https://thirdwx.qlogo.cn/mmopen/vi_32/fvM2V9lKibssFhUpV5K7Yb6Fd7EaxO9zujhXH5Z2x5ibb9CtmwpMt4UENyJ6rLRYgKVAibtPIIqjIMk2QgSoh4apw/132',
						doctor_level: '主治医师',
						doctor_name: '111',
						org_name: '在线云医院',
						dept_name: '呼吸内科',
					},
					userName: store.state.UserName,
					askForm: {
						disease_name: '',
						question: '',
						photo_ids: ''
					},
					medicineShow:false,
					keyword:'',
					medicineList:store.state.medicineInfoList,
					height: 200,
					getSelect: 0,
					MSList:[
						{
							key: 'A',
							data: [],
							show: false
						},
						{
							key: 'B',
							data: [],
							show: false
						},
						{
							key: 'C',
							data: [],
							show: false
						},
						{
							key: 'D',
							data: [],
							show: false
						},
						{
							key: 'E',
							data: [],
							show: false
						},
						{
							key: 'F',
							data: [],
							show: false
						},
						{
							key: 'G',
							data: [],
							show: false
						},
						{
							key: 'H',
							data: [],
							show: false
						},
						{
							key: 'I',
							data: [],
							show: false
						},
						{
							key: 'J',
							data: [],
							show: false
						},
						{
							key: 'K',
							data: [],
							show: false
						},
						{
							key: 'L',
							data: [],
							show: false
						},
						{
							key: 'M',
							data: [],
							show: false
						},
						{
							key: 'N',
							data: [],
							show: false
						},
						{
							key: 'O',
							data: [],
							show: false
						},
						{
							key: 'P',
							data: [],
							show: false
						},
						{
							key: 'Q',
							data: [],
							show: false
						},
						{
							key: 'R',
							data: [],
							show: false
						},
						{
							key: 'S',
							data: [],
							show: false
						},
						{
							key: 'T',
							data: [],
							show: false
						},
						{
							key: 'U',
							data: [],
							show: false
						},
						{
							key: 'V',
							data: [],
							show: false
						},
						{
							key: 'W',
							data: [],
							show: false
						},
						{
							key: 'X',
							data: [],
							show: false
						},
						{
							key: 'Y',
							data: [],
							show: false
						},
						{
							key: 'Z',
							data: [],
							show: false
						},
						
					],
					form:
					{
						person_name: '',
						person_card_id: '',
						person_sex: '',
						person_age: null,
						person_birth_date: '',
						person_phone: ''
					},
					action: 'http://www.example.com/upload',
					filesArr: []
			}
		},
		methods: {
			gotoGM(){
				uni.navigateTo({
					url:'../UserGetMedicine/UserGetMedicine'
				})
			},
			gotoEditUI(){
				uni.navigateTo({
					url:'../editUserInfo/editUserInfo'
				})
			},
			searchMedicine(){
				console.log(this.keyword)
			},
			medicineTagClick(index){
				for(let i = 0;i < this.medicineList.length;i++){
					if(index.drug_id==this.medicineList[i].drug_id){
						this.medicineList[i].show = false
						break;
					}
				}
			},
			// 选中某个复选框时，由checkbox时触发
			checkboxChange(item) {
				//console.log(e);
				this.medicineList[item.drug_id-1].show = item.show
			},
			// 选中任一checkbox时，由checkbox-group触发
			checkboxGroupChange(e) {
				// console.log(e);
			},
			gotoDoctorList(){
				uni.navigateTo({
					url:'../doctorList/doctorList'
				})
			},
			sendMessage(){
				console.log(this.form)
				
			},
			submit() {
				let files = [];
				// 通过filter，筛选出上传进度为100的文件(因为某些上传失败的文件，进度值不为100，这个是可选的操作)
				files = this.$refs.uUpload.lists.filter(val => {
					return val.progress == 100;
				})
				// 如果您不需要进行太多的处理，直接如下即可
				// files = this.$refs.uUpload.lists;
				console.log(files)
			}
		}
	}
</script>

<style scoped>
.userInfo{
	background-color: #a7e1a9;
	height: 200rpx;
	width: 98%;
	border-radius: 10rpx;
	margin-left: 1%;
}
.doctorInfo{
	background-color: #FFFFFF;
	height: 200rpx;
	width: 98%;
	border-radius: 10rpx;
	margin-left: 1%;
}
.doctorInfo2{
	background-color: #FFFFFF;
	height: 100rpx;
	width: 98%;
	border-radius: 10rpx;
	margin-left: 1%;
}
</style>
