<template>
	<view>
		<u-form :model="form" style="margin-left: 2%;width: 96%;">
			<u-form-item label="姓名" style="color: #b9b9b9;" label-width="140"><u-input v-model="form.person_name"  /></u-form-item>
			<u-form-item label="身份证号" label-width="140" style="color: #b9b9b9;"><u-input v-model="form.person_card_id" :password-icon="passwordIcon" type="password"/></u-form-item>
			<u-form-item label="性别" style="color: #b9b9b9;" label-width="140"><u-input v-model="form.person_sex" type="select" @click="show1 = true"/></u-form-item>
			<u-form-item label="出生日期" style="color: #b9b9b9;" label-width="140"><u-input v-model="form.person_birth_date" @click="show2 = true" type="select"/></u-form-item>
			<u-form-item label="年龄" style="color: #b9b9b9;" label-width="140"><u-input v-model="form.person_age"/></u-form-item>
			<u-form-item label="手机号" style="color: #b9b9b9;" label-width="140"><u-input v-model="form.person_phone"/></u-form-item>
		</u-form>
		<u-toast ref="uToast" />
		<button style="width: 60%;margin-top: 20%;background-color: #ade29e;color: #ffffff;" @click="checkInfo">保存</button>
		<u-action-sheet :list="actionSheetList" v-model="show1" @click="actionSheetCallback"></u-action-sheet>
		<u-calendar v-model="show2" :mode="mode" @change="change"></u-calendar>
	</view>
	
</template>

<script>
	import store from "../../static/store/UserIndex.js"
	export default {
		onLoad() {
			this.form = store.state.person
		},
		data() {
			return {	
				form: 
				{
					person_name: '',
					person_card_id: '',
					person_sex: '',
					person_age: null,
					person_birth_date: '',
					person_phone: ''
				},
				show1: false,
				show2: false,
				mode: 'date',
				passwordIcon: true,
				actionSheetList: 
				[
					{
						text: '男'
					},
					{
						text: '女'
					},
					
				],
			}
		},
		methods: {
			actionSheetCallback(index) {
				this.form.person_sex = this.actionSheetList[index].text;
			},
			change(e) {
				console.log(e);
				this.form.person_birth_date = e.result
			},
			checkInfo(){
				if(this.form.person_name==''){
					this.$refs.uToast.show({
						title: '请填写病人姓名',
						type: 'error',
					})
				}else if(this.form.person_card_id==''){
					this.$refs.uToast.show({
						title: '请填写病人身份证号',
						type: 'error',
					})
				}else if(this.form.person_sex==''){
					this.$refs.uToast.show({
						title: '请选择性别',
						type: 'error',
					})
				}
				else if(this.form.person_birth_date=='')
					this.$refs.uToast.show({
						title: '请填写出生日期',
						type: 'error',
					})
				else if(this.form.person_phone==''){
					this.$refs.uToast.show({
						title: '请填写联系电话',
						type: 'error',
					})
				}
				if(this.form.person_name!=''||this.form.person_card_id!=''||this.form.person_sex!=''||this.form.person_birth_date!=''||this.form.person_phone!='')
				this.EditUserInfo();
			},
			EditUserInfo(){
				store.state.person = this.form
				let pages = getCurrentPages(); //获取所有页面栈实例列表
				let nowPage = pages[pages.length - 1]; //当前页页面实例
				let prevPage = pages[pages.length - 2]; //上一页页面实例
				prevPage.$vm.form = this.form; //修改上一页data里面的tagIndex 参数值
				uni.navigateBack({
					delta: 1
				})
			}
		}
	}
</script>

<style>

</style>
