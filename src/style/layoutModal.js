import styled from 'styled-components';

 export const Overview = styled.div`
 
   width: 100%;
   height: 100%;
   background-color: rgba (0, 0, 0, 0.7);
	position: absolute;
	top: 0;
   display: flex;
   justify-content: center;
   align-items: center;
      
 `;

export const PopUp = styled.div`
   padding: 16px 16px 0 10px;
   margin-bottom: 10px;
   width: 750px;
   height: 470px;
   background-color: #f2f7f5;
   box-shadow: 0 10px 15px 0 #000;
   border: none;
   border-radius: 10px;
`;

export const TitleModal = styled.header`
   text-align: center;
	color: #56726a;
	font-family: "Tahoma", sans-serif;
	font-size: 1.5rem;
`;

export const TitleModalBrand =styled.h3`
   text-align: center;
	color: #839e96;
	font-family: "Tahoma", sans-serif;
	font-size: 1rem;
`;

export const ButtonClose = styled.button`
	color:#fff ;
	font-size: 16px;
	margin: 10px;
	text-align: center;
	background-color: #e52012;
   float: right;
   right: 5px;
   top: 5px;
`;

export const ImageModal = styled.img`
	width:50%;
   margin: 16px;
   border: 2px solid #707774;
   border-radius: 10px;
	float: left;
   left: 0;
`;

export const Description = styled.p`
   font-size: 11px; 
   text-align: left;
`;

export const ButtonTabModal = styled.button`
	background-color: #4CAf50;
	border: 2px solid #fff;
	border-radius: 3px;
	color: #fff;
	margin: 10px;
	padding: 10px 15px;
	text-align: center;
	text-decoration: none;
	font-size: 18px;
   float: left;
   left: 5px;
   bottom: 5px;
`;
 