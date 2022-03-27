import './circle.css'
import React, { useState, useEffect } from 'react';
import cData from '../data/circleData';

function Circle(){
	return (
		<div className='page'>
			{
				cData.map((item,index)=>{
					return <div className="circle">
					<img className="circle_avator" src={item.avator} alt="avator"/>
					<p className="circle_avator_name">{item.name}</p>
					<div className='circle_content'>
						<div className='circle_blog'>
							<h1>{item.title}</h1><br/>
							<p>{item.description}</p>
						</div>
						<div className='circle_btns'>
							<button>转发</button>
							<button>点赞</button>
							<button>收藏</button>
						</div>
					</div>
				</div>
				})
			}	
		</div>	

	);
}

export default Circle;