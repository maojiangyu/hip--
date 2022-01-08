import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);//vue的插件机制

//Vuex.Store 构造器选项
const store = new Vuex.Store({
    state:{//存放状态
		user_id:'',
        UserName:'',
        avatarUrl:'',
		open_id:'',
		patientName:'',
		person: {
			person_name: '',
			person_card_id: '',
			person_sex: '',
			person_birth_date: '',
			person_age: null,
			person_phone: ''
		},
		medicineInfoList: [
			
			
		],
		doctorList:[
			
		]
    }
})
export default store