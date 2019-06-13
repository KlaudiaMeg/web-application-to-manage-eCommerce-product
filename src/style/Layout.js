import styled from 'styled-components';

 export const Layout = styled.div`
    font-family: "Tahoma", sans-serif;
	background: #4d4f4b;
	color: #fff;
	height: 100vh;
	overflow: hidden;
 `;

 export const Header = styled.header`
	display: grid;
	justify-content: center;
	align-items: center;
 `;
	export const WelcomeTitle = styled.h1`
	text-align: center;
	margin: 5px;
	color: #fff;
	font-family: "Tahoma", sans-serif;
	font-size: 3rem;
`
export const Label = styled.h2`
	text-align: center;
	color: #efc032;
	font-family: "Tahoma", sans-serif;
	font-size: 1.5rem;
	margin: 0;
`

export const Input = styled.input`
	border: 3px solid #4CAf50;
	width: 550px;
	height: 50px;
	box-sizing: border-box;
	margin: 4px 2px;
  	cursor: pointer;
	
`

export const Product = styled.div`
	display: inline-block;
	width: 33.3%;
	box-sizing: border-box;
	text-align: center;
`;

export const Title = styled.h1`
	font-family: "Tahoma", sans-serif;
	color: #fff;
	text-align: center;
	font-size: 1.5rem;
`;

export const Image = styled.img`
	width:80%;
	box-shadow: 0 10px 15px 0 #000;
`;

export const ButtonAdd = styled.button`
	background-color: #4CAf50;
	border: 2px solid #fff;
	border-radius: 3px;
	color: #fff;
	margin: 10px;
	padding: 10px 15px;
	text-align: center;
	text-decoration: none;
	font-size: 18px;
`;

export const ButtonViewMore = styled.button`
	background-color: #efc032;
	border: 2px solid #fff;
	border-radius: 3px;
	color: #fff;
	margin: 10px;
	padding: 10px 15px;
	text-align: center;
	text-decoration: none;
	font-size: 18px;
`;

export const PaginationDisplay = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 50px;
`;





