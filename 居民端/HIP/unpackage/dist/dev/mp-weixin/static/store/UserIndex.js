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
			{
				drug_id: 1,
				drug_name: '肠炎宁片',
				pinyin_code: 'cynp',
				price: 30.00,
				show: false
			},
			{
				drug_id: 2,
				drug_name: '连花清瘟胶囊',
				pinyin_code: 'lhqwjn',
				price: 29.10,
				show: false
			},
			{
				drug_id: 3,
				drug_name: '小柴胡颗粒',
				pinyin_code: 'xchkl',
				price: 18.20,
				show: false
			},
			{
				drug_id: 4,
				drug_name: '布洛芬缓释胶囊',
				pinyin_code: 'blfysjn',
				price: 14.20,
				show: false
			},
			{
				drug_id: 5,
				drug_name: '清凉油(白色)',
				pinyin_code: 'qly',
				price: 23.00,
				show: false
			},
			{
				drug_id: 6,
				drug_name: '曲安奈德益康唑乳膏',
				pinyin_code: 'qatdykzlg',
				price: 21.00,
				show: false
			},
			{
				drug_id: 7,
				drug_name: '卡托普利片',
				pinyin_code: 'ktplp',
				price: 22.00,
				show: false
			},
			{
				drug_id: 8,
				drug_name: '磷酸西格列汀片',
				pinyin_code: 'lsxgltp',
				price: 115.00,
				show: false
			},
			
		],
		doctorList:[
			{
				org_id: '1',
				org_name: '复诊云诊室',
				dept: [
					{
						dept_id: '1',
						dept_name: '呼吸内科',
						doctor: [
							{
								doctor_id: '1',
								doctor_name: '111',
								avatar_url: 'https://thirdwx.qlogo.cn/mmopen/vi_32/fvM2V9lKibssFhUpV5K7Yb6Fd7EaxO9zujhXH5Z2x5ibb9CtmwpMt4UENyJ6rLRYgKVAibtPIIqjIMk2QgSoh4apw/132',
								level_name: '主治医师'
							},
							{
								doctor_id: '2',
								doctor_name: 'zs',
								avatar_url: 'https://thirdwx.qlogo.cn/mmopen/vi_32/fvM2V9lKibssFhUpV5K7Yb6Fd7EaxO9zujhXH5Z2x5ibb9CtmwpMt4UENyJ6rLRYgKVAibtPIIqjIMk2QgSoh4apw/132',
								level_name: '主治医师'
							},
							{
								doctor_id: '3',
								doctor_name: '艹老师',
								avatar_url: 'https://thirdwx.qlogo.cn/mmopen/vi_32/fvM2V9lKibssFhUpV5K7Yb6Fd7EaxO9zujhXH5Z2x5ibb9CtmwpMt4UENyJ6rLRYgKVAibtPIIqjIMk2QgSoh4apw/132',
								level_name: '医师'
							},
						]
					},
					{
						dept_id: '2',
						dept_name: '外科',
						doctor: [
							{
								doctor_id: '4',
								doctor_name: '朱老师',
								avatar_url: 'https://thirdwx.qlogo.cn/mmopen/vi_32/fvM2V9lKibssFhUpV5K7Yb6Fd7EaxO9zujhXH5Z2x5ibb9CtmwpMt4UENyJ6rLRYgKVAibtPIIqjIMk2QgSoh4apw/132',
								level_name: '副主任医师'
							},
							{
								doctor_id: '5',
								doctor_name: 'zs',
								avatar_url: 'https://thirdwx.qlogo.cn/mmopen/vi_32/fvM2V9lKibssFhUpV5K7Yb6Fd7EaxO9zujhXH5Z2x5ibb9CtmwpMt4UENyJ6rLRYgKVAibtPIIqjIMk2QgSoh4apw/132',
								level_name: '医师'
							},
							{
								doctor_id: '6',
								doctor_name: '艹老师',
								avatar_url: 'https://thirdwx.qlogo.cn/mmopen/vi_32/fvM2V9lKibssFhUpV5K7Yb6Fd7EaxO9zujhXH5Z2x5ibb9CtmwpMt4UENyJ6rLRYgKVAibtPIIqjIMk2QgSoh4apw/132',
								level_name: '医师'
							},
						]
					}
				]
			},
			{
				org_id: '2',
				org_name: '某杭医院',
				dept: [
					{
						dept_id: '1',
						dept_name: '呼吸内科',
						doctor: [
							{
								doctor_id: '7',
								doctor_name: '111',
								avatar_url: 'https://thirdwx.qlogo.cn/mmopen/vi_32/fvM2V9lKibssFhUpV5K7Yb6Fd7EaxO9zujhXH5Z2x5ibb9CtmwpMt4UENyJ6rLRYgKVAibtPIIqjIMk2QgSoh4apw/132',
								level_name: '主治医师'
							},
							{
								doctor_id: '8',
								doctor_name: 'zs',
								avatar_url: 'https://thirdwx.qlogo.cn/mmopen/vi_32/fvM2V9lKibssFhUpV5K7Yb6Fd7EaxO9zujhXH5Z2x5ibb9CtmwpMt4UENyJ6rLRYgKVAibtPIIqjIMk2QgSoh4apw/132',
								level_name: '主治医师'
							},
							{
								doctor_id: '9',
								doctor_name: '艹老师',
								avatar_url: 'https://thirdwx.qlogo.cn/mmopen/vi_32/fvM2V9lKibssFhUpV5K7Yb6Fd7EaxO9zujhXH5Z2x5ibb9CtmwpMt4UENyJ6rLRYgKVAibtPIIqjIMk2QgSoh4apw/132',
								level_name: '医师'
							},
						]
					},
					{
						dept_id: '2',
						dept_name: '外科',
						doctor: [
							{
								doctor_id: '10',
								doctor_name: '朱老师',
								avatar_url: 'https://thirdwx.qlogo.cn/mmopen/vi_32/fvM2V9lKibssFhUpV5K7Yb6Fd7EaxO9zujhXH5Z2x5ibb9CtmwpMt4UENyJ6rLRYgKVAibtPIIqjIMk2QgSoh4apw/132',
								level_name: '副主任医师'
							},
							{
								doctor_id: '11',
								doctor_name: 'zs',
								avatar_url: 'https://thirdwx.qlogo.cn/mmopen/vi_32/fvM2V9lKibssFhUpV5K7Yb6Fd7EaxO9zujhXH5Z2x5ibb9CtmwpMt4UENyJ6rLRYgKVAibtPIIqjIMk2QgSoh4apw/132',
								level_name: '医师'
							},
							{
								doctor_id: '12',
								doctor_name: '艹老师',
								avatar_url: 'https://thirdwx.qlogo.cn/mmopen/vi_32/fvM2V9lKibssFhUpV5K7Yb6Fd7EaxO9zujhXH5Z2x5ibb9CtmwpMt4UENyJ6rLRYgKVAibtPIIqjIMk2QgSoh4apw/132',
								level_name: '医师'
							},
						]
					},
					{
						dept_id: '3',
						dept_name: '神经内科',
						doctor: [
							{
								doctor_id: '13',
								doctor_name: '朱老师',
								avatar_url: 'https://thirdwx.qlogo.cn/mmopen/vi_32/fvM2V9lKibssFhUpV5K7Yb6Fd7EaxO9zujhXH5Z2x5ibb9CtmwpMt4UENyJ6rLRYgKVAibtPIIqjIMk2QgSoh4apw/132',
								level_name: '副主任医师'
							},
							{
								doctor_id: '14',
								doctor_name: 'zs',
								avatar_url: 'https://thirdwx.qlogo.cn/mmopen/vi_32/fvM2V9lKibssFhUpV5K7Yb6Fd7EaxO9zujhXH5Z2x5ibb9CtmwpMt4UENyJ6rLRYgKVAibtPIIqjIMk2QgSoh4apw/132',
								level_name: '医师'
							},
							{
								doctor_id: '15',
								doctor_name: '艹老师',
								avatar_url: 'https://thirdwx.qlogo.cn/mmopen/vi_32/fvM2V9lKibssFhUpV5K7Yb6Fd7EaxO9zujhXH5Z2x5ibb9CtmwpMt4UENyJ6rLRYgKVAibtPIIqjIMk2QgSoh4apw/132',
								level_name: '医师'
							},
						]
					}
				]
			},
		]
    }
})
export default store