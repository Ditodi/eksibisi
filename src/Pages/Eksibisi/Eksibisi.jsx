import React from "react";
import { Layout } from "../Layout/Layout";
import "./Eksibisi.scss";
import CardColumns from 'react-bootstrap/CardColumns';
import 'bootstrap/dist/css/bootstrap.min.css';
import {EksibisiABC} from "./EksibisiTest";
import { data } from "./data.js";
import Button from 'react-bootstrap/Button';


export const Eksibisi = () => {
	let data0 = data[0];
	let data1 = data[1];
	let data2 = data[2];
	let data3 = data[3];
	let data4 = data[4];
	let data5 = data[5];
	let data6 = data[6];
	let data7 = data[7];
	let data8 = data[8];
	let data9 = data[9];
	let data10 = data[10];
	let data11 = data[11];
	let data12 = data[12];
	let data13 = data[13];
	let data14 = data[14];
	let data15 = data[15];

	
  	return (
		<Layout>
		 	<div className='mainCompetition-container'>
		 		<h1>Showcase Karya</h1>
		 		<h2>⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀</h2>
				<CardColumns>
					<EksibisiABC data={data0}/>
					<EksibisiABC data={data1}/>
					<EksibisiABC data={data2}/>
				</CardColumns>
				<CardColumns>
					<EksibisiABC data={data3}/>
					<EksibisiABC data={data4}/>
					<EksibisiABC data={data5}/>
				</CardColumns>
				<CardColumns>
					<EksibisiABC data={data6}/>
					<EksibisiABC data={data7}/>
					<EksibisiABC data={data8}/>
				</CardColumns>
				<CardColumns>
					<EksibisiABC data={data9}/>
					<EksibisiABC data={data10}/>
					<EksibisiABC data={data11}/>
				</CardColumns>
				<CardColumns>
					<EksibisiABC data={data12}/>
					<EksibisiABC data={data13}/>
					<EksibisiABC data={data14}/>
				</CardColumns>
				<CardColumns>
					<EksibisiABC data={data15}/>
				</CardColumns>
				<button href = "youtube.com" className = "vote"> Vote</button>
		 	</div>
		</Layout>
	);
};
