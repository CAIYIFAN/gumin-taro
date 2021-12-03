import React, { useState } from 'react';

const top = [{
  id:'1',
  pic:'http://img.gumingnc.com/newton/20210719061456CST25351626689696069.jpg'
},{
  id:'2',
  pic:'http://img.gumingnc.com/newton/20210610100235CST14641623290555407.png'
},{
  id:'3',
  pic:'https://img.gumingnc.com/newton/20210718033112CST76271626593472081.png'
}]

function Shop() {
  const [data, setData] = useState({
    top:top,
    orderIndex: [],
    orders: [],
    shopname:'',
    distance:'',
    left_bar:[{
      id:'1',
      title:'当季新品',
      pic:'https://img.gumingnc.com/newton/20210414063740CST15781618396660776.png'
    },{
      id:'1',
       title:'人气推荐',
      pic:'https://img.gumingnc.com/newton/20210226051714CST35081614331034237.png'
    },{
      id:'2',
       title:'限定果茶',
      pic:'https://img.gumingnc.com/newton/20210429114425CST36841619667865295.png'
    },{
      id:'3',
       title:'果茶系列',
      pic:'https://img.gumingnc.com/newton/20210224044544CST59421614156344325.png '
    },{
      id:'4',
       title:'冷萃咖啡',
      pic:'https://img.gumingnc.com/newton/20210429052436CST40751619688276339.png'
    },{
      id:'5',
       title:'芝士茗茶',
      pic:'https://img.gumingnc.com/newton/20210429114434CST12671619667874729.png'
    },{
      id:'6',
       title:'轻乳茶',
      pic:'https://img.gumingnc.com/newton/20210429114449CST75211619667889377.png'
    },{
      id:'7',
       title:'奶茶家族',
      pic:'https://img.gumingnc.com/newton/20210224044552CST34231614156352959.png'
    },{
      id:'8',
       title:'料多多',
      pic:'https://img.gumingnc.com/newton/20210224044533CST88901614156333131.png'
    },{
      id:'9',
       title:'加料区',
      pic:'https://img.gumingnc.com/newton/20210308055016CST37291615197016545.png'
    },{
      id:'10',
       title:'用餐提醒',
      pic:'https://img.gumingnc.com/newton/20210224044458CST49841614156298710.png'
    },
    
    ],
    dataList: [],
    idx: 0,
    scrollTop: 0,
    toView:'position0',
    isCar:false , 
    totalPrice: 0,
    orderNumber: 0
  })

  
  return (
    <div>
      Jump
    </div>
  );
}

export default Shop;
