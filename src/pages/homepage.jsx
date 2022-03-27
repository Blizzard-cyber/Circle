import React, { useState } from 'react';
import { Avatar, Space, Tabs, List, Image, Tag, Input, NoticeBar, Badge, Calendar, Modal, Button, SearchBar, ImageViewer } from 'antd-mobile';


import { FloatingBubble, Toast } from 'antd-mobile';
import {
	MessageOutline,
	HeartOutline,
	LikeOutline,
	ArrowsAltOutline
} from 'antd-mobile-icons';
import "./homepage.css";
import { MessageFill } from 'antd-mobile-icons';
import dayjs from 'dayjs'


let picture1 = [
	"https://imglf3.lf127.net/img/18324f9ab332a327/SUNmNDluWHpiTWFmV1NrRlI0MGlEMVI4ZFE4ais3WTdHZ0pwdWZHWk9scz0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg",
	"https://imglf5.lf127.net/img/0c7fc7abf6115ba3/SUNmNDluWHpiTWFmV1NrRlI0MGlEenJyUFNqVm5IMlZzLzlLSUFZR0lPND0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg",
	"https://imglf3.lf127.net/img/23f508a2e7979606/SUNmNDluWHpiTWFmV1NrRlI0MGlENUlyVE1TVHBockF0Y0o0Z1Zuc2t2Zz0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg",
	"https://imglf3.lf127.net/img/db07fe7fc22aeb7d/SUNmNDluWHpiTWFmV1NrRlI0MGlEL3ZKTW1OdUpRanNjVDNWSmJuOEtWaz0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg",
	"https://imglf3.lf127.net/img/c33e30277c6a9cd9/SUNmNDluWHpiTWFmV1NrRlI0MGlEOStXVEFPY05RbHB2SWpmYVpSV3RNRT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg",
]

let picture2 = [
	"https://imglf5.lf127.net/img/f24f16f37f2229a5/R1N5eGo1T1I2NDNZcjhGV1ZLRkc3SDFxVjErWkN1clI.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg",
	"https://imglf6.lf127.net/img/674188be1187286f/R1N5eGo1T1I2NDNZcjhGV1ZLRkc3RzM4TFRaeVVBV2c0Qk04OUxtNVBZRT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg",
	"https://imglf3.lf127.net/img/a5e6e4c044478a4f/R1N5eGo1T1I2NDNZcjhGV1ZLRkc3QWcxT2VPaCtnT3IwbVlGOFZtOWlGQT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg",
]
function Homepage() {
	const onClick = () => {
		Toast.show('目前没有新的私信呢，稍后试试吧！')
	};
	const today = dayjs();

	const [visible, setVisible] = useState(false)
	return (
		<Tabs>
			<Tabs.Tab title='推荐' key='follow'>
				<div className='search'>
					<SearchBar placeholder='请输入内容' showCancelButton />
				</div>
				<div className="friends">
					<Space block>
						<Badge content='5' style={{ '--right': '5px', '--top': '5px' }}>
							<Avatar src="https://i.picsum.photos/id/1010/200/200.jpg?hmac=030jCT8DyI2wW-CYue7-l9xlHBAGpacaSJ6tYnnka3I" />
						</Badge>
						<Badge content='11' style={{ '--right': '5px', '--top': '5px' }}>
							<Avatar src="https://i.picsum.photos/id/217/200/300.jpg?hmac=3GPQ-pPnL4D8miCKA0qNqIg4zr5Ponvl9OVH83CeGuc" />
						</Badge>
						<Badge content='20' style={{ '--right': '5px', '--top': '5px' }}>
							<Avatar src="https://i.picsum.photos/id/662/200/200.jpg?hmac=LdYzwSk5Qj10-4AVlHBneunSCcoSnwW8D2qHz-GD2U8" />
						</Badge>
						<Badge content='99+' style={{ '--right': '5px', '--top': '5px' }}>
							<Avatar src="https://i.picsum.photos/id/508/200/200.jpg?hmac=K4JUehX1v2yEPLUOyJDAmRhZu8PgMu4vv6ypO-CA5nw " />
						</Badge>

						<Badge content='99+' style={{ '--right': '5px', '--top': '5px' }}>
							<Avatar src="https://i.picsum.photos/id/680/200/300.jpg?hmac=OUdNxaSLxw8SgCxALPFPfZAurK6KVGLpU3hzbCrumJc" />
						</Badge>
						<Avatar src="https://i.picsum.photos/id/255/200/200.jpg?hmac=IYQV36UT5-F1dbK_CQXF7PDfLfwcnwKijqeBCo3yMlc" />
					</Space>
				</div>
				<List>
					<List.Item
						prefix={<Avatar src="https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9" />}
						description='打包一份春天送给你'
					>
						Novalee Spicer
					</List.Item>
				</List>
				<div className='photo-list'>

					<Space wrap>
						<Image src="https://imglf3.lf127.net/img/18324f9ab332a327/SUNmNDluWHpiTWFmV1NrRlI0MGlEMVI4ZFE4ais3WTdHZ0pwdWZHWk9scz0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg" width={100} height={100} fit='fill' />
						<Image src="https://imglf5.lf127.net/img/0c7fc7abf6115ba3/SUNmNDluWHpiTWFmV1NrRlI0MGlEenJyUFNqVm5IMlZzLzlLSUFZR0lPND0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg" width={100} height={100} fit='fill' />
						<Image src="https://imglf3.lf127.net/img/23f508a2e7979606/SUNmNDluWHpiTWFmV1NrRlI0MGlENUlyVE1TVHBockF0Y0o0Z1Zuc2t2Zz0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg" width={100} height={100} fit='fill' />
						<Image src="https://imglf3.lf127.net/img/db07fe7fc22aeb7d/SUNmNDluWHpiTWFmV1NrRlI0MGlEL3ZKTW1OdUpRanNjVDNWSmJuOEtWaz0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg" width={100} height={100} fit='fill' />
						<Image src="https://imglf3.lf127.net/img/c33e30277c6a9cd9/SUNmNDluWHpiTWFmV1NrRlI0MGlEOStXVEFPY05RbHB2SWpmYVpSV3RNRT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg" width={100} height={100} fit='fill' />

					</Space>
				</div>
				<div className='tags-list'>
					<Space>
						<Tag color='default'>#摄影</Tag>
						<Tag color='primary'>#旅行</Tag>
						<Tag color='success'>#春意醉人</Tag>
						<Tag color='warning'>#风光</Tag>
						<Tag color='danger'>#色彩</Tag>
					</Space>
				</div>

				<Space wrap align='center'>

					<Button
						block
						onClick={() =>
							Modal.alert({
								content: '留言成功！',
								onConfirm: () => {
									console.log('Confirmed')
								},
							})
						}
					>
						<MessageOutline fontSize={24} />
					</Button>

					<Button
						block
						onClick={() =>
							Modal.alert({
								content: '收藏成功！',
								onConfirm: () => {
									console.log('Confirmed')
								},
							})
						}
					>
						<HeartOutline fontSize={24} />
					</Button>

					<Button
						block
						onClick={() =>
							Modal.alert({
								content: '点赞成功！',
								onConfirm: () => {
									console.log('Confirmed')
								},
							})
						}
					>
						<LikeOutline fontSize={24} />
					</Button>

					<Button
						block
						onClick={() => {
							setVisible(true)
						}}
					>
						<ArrowsAltOutline fontSize={24} />
					</Button>
					<ImageViewer.Multi
						images={picture1}
						visible={visible}
						onClose={() => {
							setVisible(false)
						}}
					/>

				</Space>

				<div className='clear'>
					<Input placeholder='说点什么吧...' clearable />
				</div>


				<List>
					<List.Item
						prefix={<Avatar src="https://avaimg.lf127.net/img/70b748c230160f21/bWtZVExPRGhXTklFRmg4LzIyd05EdU9hMzI1ZS84L0lUN1NzcytFZ1FkRT0.jpg" />}
						description='被遗落的春天'
					>
						Git.
					</List.Item>
				</List>
				<div className='photo-list'>
					<Space wrap>
						<Image src="https://imglf5.lf127.net/img/f24f16f37f2229a5/R1N5eGo1T1I2NDNZcjhGV1ZLRkc3SDFxVjErWkN1clI.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg" width={100} height={100} fit='fill' />
						<Image src="https://imglf6.lf127.net/img/674188be1187286f/R1N5eGo1T1I2NDNZcjhGV1ZLRkc3RzM4TFRaeVVBV2c0Qk04OUxtNVBZRT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg" width={100} height={100} fit='fill' />
						<Image src="https://imglf3.lf127.net/img/a5e6e4c044478a4f/R1N5eGo1T1I2NDNZcjhGV1ZLRkc3QWcxT2VPaCtnT3IwbVlGOFZtOWlGQT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg" width={100} height={100} fit='fill' />

					</Space>
				</div>
				<div className='tags-list'>
					<Space>
						<Tag color='default'>#摄影</Tag>
						<Tag color='primary'>#旅行</Tag>
						<Tag color='success'>#春意醉人</Tag>
						<Tag color='warning'>#风光</Tag>
						<Tag color='danger'>#色彩</Tag>
					</Space>
				</div>

				<Space wrap align='center'>
					<Button
						block
						onClick={() =>
							Modal.alert({
								content: '留言成功！',
								onConfirm: () => {
									console.log('Confirmed')
								},
							})
						}
					>
						<MessageOutline fontSize={24} />
					</Button>

					<Button
						block
						onClick={() =>
							Modal.alert({
								content: '收藏成功！',
								onConfirm: () => {
									console.log('Confirmed')
								},
							})
						}
					>
						<HeartOutline fontSize={24} />
					</Button>

					<Button
						block
						onClick={() =>
							Modal.alert({
								content: '点赞成功！',
								onConfirm: () => {
									console.log('Confirmed')
								},
							})
						}
					>
						<LikeOutline fontSize={24} />
					</Button>

					<Button
						block
						onClick={() => {
							setVisible(true)
						}}
					>
						<ArrowsAltOutline fontSize={24} />
					</Button>
					<ImageViewer.Multi
						images={picture2}
						visible={visible}
						onClose={() => {
							setVisible(false)
						}}
					/>

				</Space>
				<div className='comments' padding='0' border='none'>
					<NoticeBar content={"Hym:被疫情耽误的这两年，旅行变少了，翻看以往的照片，不曾感叹祖国山河地大物博，江山如画般的美景，每个景观都不尽相同。愿祈福疫情早日散去，再一一领略 ！"} color='alert' />
				</div>
				<div className='clear'>
					<Input placeholder='说点什么吧...' clearable />
				</div>
				<div
					style={{
						textAlign: 'center',
						padding: '50vh 32px 0',
					}}
				>
					<FloatingBubble
						style={{
							'--initial-position-bottom': '24px',
							'--initial-position-right': '24px',
							'--edge-distance': '24px',
						}}
						onClick={onClick}
					>
						<MessageFill fontSize={32} />
					</FloatingBubble>
				</div>
			</Tabs.Tab>

			<Tabs.Tab title='日历' key='cal'>

				<div title='给日期添加一些标记'>
					<Calendar
						renderLabel={date => {
							if (dayjs(date).isSame(today, 'day')) return '今天'
							if (date.getDay() === 0 || date.getDay() === 6) {
								return '周末'
							}
						}}
					/>
				</div>
			</Tabs.Tab>
		</Tabs >
	);
}

export default Homepage;