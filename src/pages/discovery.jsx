import { Avatar, Space, Tabs, List, Image, Tag, Input, NoticeBar, Badge, Calendar, Modal, Button, SearchBar, ImageViewer } from 'antd-mobile';
import {
	MessageOutline,
	HeartOutline,
	LikeOutline,
	ArrowsAltOutline
} from 'antd-mobile-icons';
import { MessageFill } from 'antd-mobile-icons';
import './discovery.css'
import circle_p from '../img/discovery/1.jpg';
import discovery_p from '../img/discovery/2.jpg';
import home_p from '../img/discovery/3.jpg';
import issue_p from '../img/discovery/4.png';
import me_p from '../img/discovery/5.jpg';

const imgs = [circle_p, discovery_p, home_p, issue_p, me_p, circle_p, discovery_p, home_p, issue_p, me_p, circle_p, discovery_p, home_p, issue_p, me_p]

function Discovery() {
	return (
		<div className="discovery">
			{
				imgs.map((val, index) => {
					return (
						<div className="cards" key={index}>
							<img className='img' src={val} alt="" />
							<div className="footer">
								<Button
									block
									onClick={() =>
										Modal.alert({
											content: '收藏成功',
											onConfirm: () => {
												console.log('Confirmed')
											},
										})
									}
								>
									<HeartOutline fontSize={16} />
								</Button>
							</div>
						</div>
					)
				})
			}
		</div>
	);
}

export default Discovery;