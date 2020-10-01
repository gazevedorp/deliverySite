import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 10px;
  padding-bottom: 150px;

  @media( max-width: 600px ){
  justify-content: space-between;
  }
`;

export const Div = styled.div`


@media( max-width: 600px ){
    
  }
`;

export const Img = styled.img`
    width: 100%;

@media( max-width: 600px ){

  }
`;

export const ButtonCat = styled.button`
margin: 10px;
min-width: 140px;
height: 35px;
border-radius: 10px;
border: 0px;
background-color: #d1d1d1;


:focus {
  outline: none;
}
@media( max-width: 600px ){
  height: 35px;
  width: 105px;
  font-size: 14px;
  font-weight: bold;
  }
`

export const ButtonBar = styled.button`
border-radius: 3px;
border: 0px;
background-color: white;
color: black;
padding: 6px;
margin-bottom: 10px;

@media (max-width: 600px){
  font-size: 14px;
}

`

export const ButtonProd = styled.button`
border-radius: 8px;
border: 0px;
background-color: white;
color: black;
padding: 20px;
margin: 10px;
width: 150px;
max-width: 150px;
height: 150px;
max-height: 150px;

@media (max-width: 600px){
  font-size: 14px;
  width: 100px;
  max-width: 100px;
  height: 100px;
  max-height: 100px;
}

@media (max-width: 350px){
  font-size: 10px;
  width: 80px;
  max-width: 80px;
  height: 80px;
  max-height: 80px;
}

`

export const DivHor = styled.div`
display: flex;
overflow-x: auto;

`

export const DivButton = styled.div`
min-width: 150px;
`
export const DivBar = styled.div`
display: grid;
grid-template-columns: 10% 80% 10%;
background-color: #800000;
align-content: center;
padding-top: 20px;
position: fixed;
bottom: 0;
width: 100%;

@media( max-width: 600px ){
padding-top: 20px;
grid-template-columns: 30% 40% 30%;
  }
`

export const DivAlpha = styled.div`
`

export const DivLoginAlpha = styled.div`
padding: 20px;
display: flex;
width: 100%;
justify-content: center;
text-align: center;
 input{
   width: 80%;
   margin: 10px;
 }
 button{
   width: 80%;
   margin: 10px;
 }
 img{
   width: 80%;
 }
`

export const DivLoginBeta = styled.div`
width: 500px;
background-color: white;
padding: 20px;
border-radius: 10px;
padding-bottom: 50px;
`


