import './me.css';
import { List, Button } from 'antd-mobile'
import {
	UnorderedListOutline,
	PayCircleOutline,
	SetOutline,
	AppOutline,
	BillOutline
} from 'antd-mobile-icons';
function Me(){
	return (
		<div className="me">
			<div className="info">
				<div className="setting">设置</div>
				<img className="avatar" src="https://himg.bdimg.com/sys/portrait/item/public.1.3f39e33b.gXDLisX6lK7D7okc0x_eKw.jpg" alt=""/>
				<div className="name">
					<span>陈晓</span>
				</div>
			</div>
			<List>
				<List.Item prefix={<UnorderedListOutline color="#ff2b80" fontSize={18} />} onClick={() => {}}>
					账单
				</List.Item>
				<List.Item prefix={<AppOutline color="#ff2b80" fontSize={22} />} onClick={() => {}}>
					车辆信息
				</List.Item>
				<List.Item prefix={<BillOutline color="#ff2b80" fontSize={20} />} onClick={() => {}}>
					银行卡
				</List.Item>
				<List.Item prefix={<PayCircleOutline  color="#ff2b80" fontSize={20} />} onClick={() => {}}>
					总资产
				</List.Item>
				<List.Item prefix={<SetOutline color="#ff2b80" fontSize={22} />} onClick={() => {}}>
					设置
				</List.Item>
			</List>
			<div className="logout">
				<Button color='primary' fill='outline'>
					退出登录
				</Button>
			</div>
		</div>
	);
}

export default Me;
