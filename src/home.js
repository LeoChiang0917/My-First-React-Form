import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Edit from './page/Home/component/edit';
import Item from './page/Home/component/item';
import List from './page/Home/component/list';

export default function Home() {
const [data, setData] = useState([1,2,3])
return(
<div>
<Edit add={setData}/>
<List listData={data}/>
</div>
);
}
