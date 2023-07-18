import Item from "./item";

export default function List({listData}){
  
return(
<div>
{
listData.map((item)=> {
const { note, email}= item
return <Item note={note} emil={email}/>
})  
}
</div>    
); 
}