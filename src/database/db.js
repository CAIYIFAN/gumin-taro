const data = [
  {
  id:'1',
  longitude:'115.832777',
  latitude:'28.724024',
  shopname:'南昌东华理工店',
  address:'江西省南昌市青山湖区区蛟桥镇南昌经开区范家村A区',
  time:'10:00-22:00',
  distance:'316m'
},
{
  id:'2',
  longitude:'115.76385',
  latitude:'28.620321',
  shopname:'南昌交大理工学院',
  address:'江西省南昌市青山湖区区华东交通大学（理工学院）仿古街4号',
  time:'10:00-20:30',
},
{
  id:'3',
  longitude:'115.840322',
  latitude:'28.739428',
  shopname:'紫荆路步行街店',
  address:'江西省南昌市青山湖区紫荆路步行街1号凉亭',
  time:'11:00-22:30',
},
{
  id:'4',
  longitude:'115.810581',
  latitude:'28.729028',
  shopname:'南昌师范学院店',
  address:'江西省南昌市青山湖区区经开技术开发区瑞香路889号南昌师范学院',
  time:'10:30-22:00',
},
{
  id:'5',
  longitude:'115.830109',
  latitude:'28.690184',
  shopname:'新建文化大道店',
  address:'江西省南昌市青山湖区区蛟桥镇南昌经开区范家村A区',
  time:'10:00-22:00',
},
{
  id:'6',
  longitude:'115.823207',
  latitude:'28.734118',
  shopname:'南昌财大麦庐园店',
  address:'江西省南昌市青山湖区玉屏西大道江西财经大学麦庐园校区商业街',
  time:'11:00-22:00',
},
{
  id:'7',
  longitude:'116.184013',
  latitude:'28.229173',
  shopname:'南昌经开乐盈店',
  address:'江西省南昌市青山湖区区蛟桥镇乐盈广场',
  time:'10:00-22:00',
}]
const dataList =[
   {
    title:'当季新品',
    products:[
      {
        title:'生椰拿铁冰激淋',
        tag:'新品',
        desc:'珍珠、冰激淋、生椰乳、咖啡液、牛奶生...',
        price:'16',
        pic:'https://img.gumingnc.com/newton/20210719053749CST84721626687469148.png?x-oss-process=image/resize,w_204,m_lfit '
      },
      {
        title:'龙井奶芙',
        tag:'新品',
        desc:'龙井、鲜奶乳、奶芙顶、坚果碎色清味...',
        price:'16',
        pic:'https://img.gumingnc.com/newton/20210719041227CST36011626682347798.png?x-oss-process=image/resize,w_204,m_lfit'
      },
      {
        title:'泡鲁达',
        tag:'新品',
        desc:'西米、多肉、红宝石、椰香白糯米、桂花...',
        price:'17',
        pic:'https://img.gumingnc.com/newton/20210609082139CST16401623241299533.png?x-oss-process=image/resize,w_204,m_lfit'
      },
      {
        title:'芝士多肉桃桃',
        tag:'新品',
        desc:'水蜜桃、多肉、奶盖、松语乌龙 不止1整...',
        price:'19',
        pic:'https://img.gumingnc.com/newton/20210526102241CST2291622038961738.png?x-oss-process=image/resize,w_204,m_lfit'
      },
      {
        title:'爆有料水果桶*橙子',
        tag:'新品',
        desc:'[1000cc,超大桶] 橙片、西瓜、芒果...',
        price:'21',
        pic:'https://img.gumingnc.com/newton/20210705075452CST29321625486092334.png?x-oss-process=image/resize,w_204,m_lfit '
      }
  
    ]
   },
  {
    title:'人气推荐',
    products:[
      {
        title:'桂花乌龙奶芙',
        tag:'新品',
        desc:'桂花乌龙、牛乳、奶芙、无花果干 新茶...',
        price:'15',
        pic:'https://img.gumingnc.com/newton/20210722043105CST69611626942665649.png?x-oss-process=image/resize,w_204,m_lfit'
      },
      {
        title:'超A芝士葡萄',
        tag:'升级',
        desc:'古茗爆款升级上新！当季云南夏黑，...',
        price:'19',
        pic:'https://img.gumingnc.com/newton/20210526035918CST52411622015958363.png?x-oss-process=image/resize,w_204,m_lfit'
      },
      {
        title:'杨枝甘露椰奶',
        tag:'仅做冰饮',
        desc:'芒果、西柚粒、西米、多肉、椰奶...',
        price:'17',
        pic:'https://img.gumingnc.com/newton/20210526102428CST42841622039068249.png?x-oss-process=image/resize,w_204,m_lfit'
      },
     
      {
        title:'布雷脆脆奶芙',
        tag:'含茶',
        desc:'布蕾、奶油顶、坚果碎、珍珠、奶茶 人气...',
        price:'16',
        pic:'https://img.gumingnc.com/newton/20210526035840CST91151622015920942.png?x-oss-process=image/resize,w_204,m_lfit'
      }
      
  
    ]
  },
  {
    title:'限定果茶',
    products:[
      {
        title:'牛油果甘露',
        tag:'含茶',
        desc:'牛油果、西米、芒果丁、多肉、椰奶、茉...',
        price:'18',
        pic:'https://img.gumingnc.com/newton/20210526040550CST23171622016350234.png?x-oss-process=image/resize,w_204,m_lfit '
      },
      {
        title:'爆有料水果桶*橙子',
        tag:'新品',
        desc:'[1000cc,超大桶] 橙片、西瓜、芒果...',
        price:'21',
        pic:'https://img.gumingnc.com/newton/20210705075452CST29321625486092334.png?x-oss-process=image/resize,w_204,m_lfit '
      },
      {
        title:'龙眼桂花琉璃冻',
        tag:'升级',
        desc:'金标龙眼 桂花冻、桂花乌龙、NFC龙...',
        price:'19',
        pic:'https://img.gumingnc.com/newton/20210720050111CST30661626771671450.png?x-oss-process=image/resize,w_204,m_lfit '
      },
      {
        title:'芝士多肉桃桃',
        tag:'新品',
        desc:'水蜜桃、多肉、奶盖、松语乌龙、不止整...',
        price:'16',
        pic:'https://img.gumingnc.com/newton/20210526102241CST2291622038961738.png?x-oss-process=image/resize,w_204,m_lfit'
      },
      {
        title:'满杯鲜柚',
        tag:'新品',
        desc:'进口红西柚新鲜切片，添加珍稀白西...',
        price:'15',
        pic:'https://img.gumingnc.com/newton/20210526040444CST69971622016284938.png?x-oss-process=image/resize,w_204,m_lfit'
      },
      {
        title:'牛油果糯糯',
        tag:'新品',
        desc:'墨西哥进口牛油果，搭配软香怡口白...',
        price:'18',
        pic:'https://img.gumingnc.com/newton/20210526041021CST931622016621135.png?x-oss-process=image/resize,w_204,m_lfit  '
      },
      {
        title:'超A葡萄啵啵冻',
        tag:'升级',
        desc:'古茗爆款升级上新！当季云南夏黑，...',
        price:'19',
        pic:'https://img.gumingnc.com/newton/20210526035902CST76841622015942504.png?x-oss-process=image/resize,w_204,m_lfit'
      },
      {
        title:'超A芝士葡萄',
        tag:'升级',
        desc:'古茗爆款升级上新！当季云南夏黑，...',
        price:'19',
        pic:'https://img.gumingnc.com/newton/20210526035918CST52411622015958363.png?x-oss-process=image/resize,w_204,m_lfit'
      },
      {
        title:'满杯橙海粒.冰',
        tag:'含茶',
        desc:'橙片、橙粒、黄柠片、茉莉花茶超多...',
        price:'15',
        pic:'https://img.gumingnc.com/newton/20210526102531CST95161622039131664.png?x-oss-process=image/resize,w_204,m_lfit'
      },
      
  
    ]
  },
  {
    title:'果茶系列',
    products:[
      {
        title:'茉香小黄柠',
        tag:'新品',
        desc:'新鲜黄柠檬、茉莉花茶一整颗柠檬现...',
        price:'12',
        pic:'https://img.gumingnc.com/newton/20210709050445CST26151625821485357.png?x-oss-process=image/resize,w_204,m_lfit '
      },
      {
        title:'芒芒糯糯',
        tag:'含茶',
        desc:'芒果、糯米、椰奶、茉莉花茶、椰香白糯...',
        price:'17',
        pic:'https://img.gumingnc.com/newton/20210526040507CST34691622016307958.png?x-oss-process=image/resize,w_204,m_lfit '
      },
      {
        title:'百香双重奏',
        tag:'仅作冰饮',
        desc:'茉莉花茶、百香果、青橘、椰果、珍...',
        price:'11',
        pic:'https://img.gumingnc.com/newton/20210526035219CST61821622015539268.png?x-oss-process=image/resize,w_204,m_lfit '
      },
      {
        title:'杨枝甘露轻盈版',
        tag:'仅作冰饮',
        desc:'芒果粒、西柚粒、西米、多肉、椰奶...',
        price:'18',
        pic:'https://img.gumingnc.com/newton/20210526054602CST9371622022362743.png?x-oss-process=image/resize,w_204,m_lfit'
      },
      {
        title:'杨枝甘露椰奶',
        tag:'仅做冰饮',
        desc:'芒果、西柚粒、西米、多肉、椰奶...',
        price:'17',
        pic:'https://img.gumingnc.com/newton/20210526102428CST42841622039068249.png?x-oss-process=image/resize,w_204,m_lfit'
      }
  
    ]
  },
  {
    title:'冷萃咖啡',
    products:[
      
      {
        title:'冰咖牛油果',
        tag:'含咖啡',
        desc:'牛油果、牛奶、咖啡、巴旦木 咖啡融入...',
        price:'19',
        pic:'https://img.gumingnc.com/newton/20210526035429CST53951622015669224.png?x-oss-process=image/resize,w_204,m_lfit'
      },
      {
        title:'冰咖乌龙奶',
        tag:'含茶',
        desc:'咖啡、桂花乌龙、奶油顶、坚果碎 冰咖...',
        price:'17',
        pic:'https://img.gumingnc.com/newton/20210604063011CST26771622802611885.png?x-oss-process=image/resize,w_204,m_lfit'
      },
      {
        title:'生椰拿铁冰激凌',
        tag:'新品',
        desc:'珍珠、冰激凌、生椰乳、咖啡液、牛奶生...',
        price:'16',
        pic:'https://img.gumingnc.com/newton/20210719053634CST58221626687394553.png?x-oss-process=image/resize,w_204,m_lfit  '
      },
      {
        title:'冰咖小黄柠',
        tag:'含咖啡',
        desc:'咖啡、小黄柠 花果香咖啡、搭配1整颗...',
        price:'13',
        pic:'https://img.gumingnc.com/newton/20210526054340CST38131622022220783.png?x-oss-process=image/resize,w_204,m_lfit'
      },
  
    ]
  },
  {
    title:'芝士茗茶',
    products:[
      {
        title:'松语乌龙',
        tag:'新品',
        desc:'松语乌龙纯茶 新茶上市，松语乌龙纯...',
        price:'8',
        pic:'https://img.gumingnc.com/newton/20210526054504CST15651622022304764.png?x-oss-process=image/resize,w_204,m_lfit'
      },
      {
        title:'芝士松语乌龙',
        tag:'含茶',
        desc:'松语乌龙、奶盖 新茶上市，松语乌龙...',
        price:'12',
        pic:'https://img.gumingnc.com/newton/20210620055052CST45291624182652569.png?x-oss-process=image/resize,w_204,m_lfit'
      },
      
      {
        title:'曲香茉莉',
        tag:'新品',
        desc:'茉莉纯茶。酿制而成的茉莉花茶，保...',
        price:'8',
        pic:'https://img.gumingnc.com/newton/20210526054300CST84251622022180295.png?x-oss-process=image/resize,w_204,m_lfit '
      },
      {
        title:'芝士茉莉',
        tag:'仅作冰饮',
        desc:'茉莉花茶、奶盖 入口鲜爽 回味满口...',
        price:'12',
        pic:'https://img.gumingnc.com/newton/20210620055115CST91911624182675314.png?x-oss-process=image/resize,w_204,m_lfit'
      },
    ]
  
  },
  {
    title:'轻乳茶',
    products:[
      {
        title:'龙井奶芙',
        tag:'新品',
        desc:'龙井、鲜牛乳、奶芙顶、坚果碎色清味...',
        price:'16',
        pic:'https://img.gumingnc.com/newton/20210719041227CST36011626682347798.png?x-oss-process=image/resize,w_204,m_lfit'
      },
      {
        title:'茉莉奶芙',
        tag:'新品',
        desc:'茉莉花茶、牛乳、奶芙、无花果干 清乳...',
        price:'15',
        pic:'https://img.gumingnc.com/newton/20210720045837CST2191626771517499.png?x-oss-process=image/resize,w_204,m_lfit'
      },
      {
        title:'松语乌龙奶芙',
        tag:'新品',
        desc:'松语乌龙、鲜牛乳、奶油顶、坚果碎 新...',
        price:'15',
        pic:'https://img.gumingnc.com/newton/20210605103544CST48081622860544825.png?x-oss-process=image/resize,w_204,m_lfit'
      },
      {
        title:'桂花乌龙奶芙',
        tag:'含茶',
        desc:'松语乌龙、牛乳、奶芙、无花果干 新茶...',
        price:'15',
        pic:'https://img.gumingnc.com/newton/20210720045837CST2191626771517499.png?x-oss-process=image/resize,w_204,m_lfit'
      }
  
    ]
  },
  {
    title:'奶茶家族',
    products:[
      {
        title:'布蕾奶茶冰激淋',
        tag:'新品',
        desc:'布蕾、珍珠、冰激凌、奶茶经典布蕾奶...',
        price:'13',
        pic:'https://img.gumingnc.com/newton/20210719053634CST58221626687394553.png?x-oss-process=image/resize,w_204,m_lfit  '
      },{
        title:'米麻薯布蕾奶茶',
        tag:'新品',
        desc:'米麻薯、布蕾、古茗奶茶 全新加料米麻...',
        price:'12',
        pic:'https://img.gumingnc.com/newton/20210625062322CST88861624616602251.png?x-oss-process=image/resize,w_204,m_lfit'
      },{
        title:'米麻薯乌龙奶',
        tag:'新品',
        desc:'米麻薯、红宝石、牛乳、松语乌龙 入口...',
        price:'13',
        pic:'https://img.gumingnc.com/newton/20210625062156CST98051624616516026.png?x-oss-process=image/resize,w_204,m_lfit'
      },
      {
        title:'古茗奶茶',
        tag:'含茶',
        desc:' 经典纯奶茶 免费珍珠或椰奶...',
        price:'9',
        pic:'https://img.gumingnc.com/newton/20210526040038CST7061622016038030.png?x-oss-process=image/resize,w_204,m_lfit'
      },
      {
        title:'大叔奶茶',
        tag:'含茶',
        desc:'古茗奶茶、台湾风味黑糖、红豆、布...',
        price:'11',
        pic:'https://img.gumingnc.com/newton/20210620055138CST53681624182698512.png?x-oss-process=image/resize,w_204,m_lfit '
      },
      {
        title:'布雷脆脆奶芙',
        tag:'含茶',
        desc:'布蕾、奶油顶、坚果碎、珍珠、奶茶 人气...',
        price:'16',
        pic:'https://img.gumingnc.com/newton/20210526035840CST91151622015920942.png?x-oss-process=image/resize,w_204,m_lfit'
      },
  
    ]
  },
  {
    title:'料多多',
    products:[
      {
        title:'椰乳大满贯',
        tag:'新品',
        desc:'芒果、生椰乳、红宝石、西米、糯米 芒果...',
        price:'15',
        pic:'https://img.gumingnc.com/newton/20210609082314CST55991623241394688.png?x-oss-process=image/resize,w_204,m_lfit'
      },
      {
        title:'泡鲁达',
        tag:'新品',
        desc:'西米、多肉、红宝石、椰香白糯米、桂花...',
        price:'17',
        pic:'https://img.gumingnc.com/newton/20210719053707CST86841626687427353.png?x-oss-process=image/resize,w_204,m_lfit '
      },
      {
        title:'布丁西米露',
        tag:'含乳制品',
        desc:'布丁、西米、奶露 香甜Q弹 口口爽滑...',
        price:'9',
        pic:'https://img.gumingnc.com/newton/20210604063035CST59541622802635482.png?x-oss-process=image/resize,w_204,m_lfit'
      },
      {
        title:'泡鲁达冰淇淋',
        tag:'新品',
        desc:'西米、红宝石、桂花冻、面包干、烤椰片...',
        price:'18',
        pic:'https://img.gumingnc.com/newton/20210719053707CST86841626687427353.png?x-oss-process=image/resize,w_204,m_lfit'
      }
  
    ]
  },
  {
    title:'加料区',
    products:[
      {
        title:'布丁',
        tag:'',
        desc:'全程手工制作的鸡蛋味布丁全程手工...',
        price:'1.5',
        pic:'https://img.gumingnc.com/newton/20210611022007CST41031623392407215.png?x-oss-process=image/resize,w_204,m_lfit'
      },
      {
        title:'西米',
        tag:'',
        desc:'小小体积，入口滑溜，适合添加在奶...',
        price:'1.5',
        pic:'https://img.gumingnc.com/newton/20210611021919CST12511623392359284.png?x-oss-process=image/resize,w_204,m_lfit '
      },
      {
        title:'西柚粒',
        tag:'',
        desc:'南非西柚鲜果粒，自带甘苦味...',
        price:'3.5',
        pic:'https://img.gumingnc.com/newton/20210611022139CST62121623392499141.png?x-oss-process=image/resize,w_204,m_lfit'
      },
      {
        title:'蜜豆',
        tag:'',
        desc:'优选中国东北红豆，有些许甜度，适...',
        price:'1.5',
        pic:'https://img.gumingnc.com/newton/20210611022026CST53071623392426805.png?x-oss-process=image/resize,w_204,m_lfit'
      },{
        title:'珍珠',
        tag:'',
        desc:'软糯弹牙的琥珀珍珠，适合添加至奶...',
        price:'1.5',
        pic:'https://img.gumingnc.com/newton/20210611022049CST96581623392449303.png?x-oss-process=image/resize,w_204,m_lfit '
      },{
        title:'椰果',
        tag:'',
        desc:'口感爽脆，冰饮好伴侣，适合添加至...',
        price:'1.5',
        pic:'https://img.gumingnc.com/newton/20210611021937CST5441623392377802.png?x-oss-process=image/resize,w_204,m_lfit'
      },{
        title:'奶盖',
        tag:'',
        desc:'咸甜味芝士奶盖，和冰饮更加搭配...',
        price:'5.5',
        pic:'https://img.gumingnc.com/newton/20210611022154CST3471623392514596.png?x-oss-process=image/resize,w_204,m_lfit'
      },{
        title:'多肉',
        tag:'',
        desc:'低卡魔芋制成，Q弹啵啵脆爽，无法...',
        price:'2.5',
        pic:'https://img.gumingnc.com/newton/20210611022106CST37251623392466436.png?x-oss-process=image/resize,w_204,m_lfit'
      }
  
    ]
  },
  {
    title:'用餐提醒',
    products:[
      {
        title:'沙冰类饮品说明',
        tag:'',
        desc:'夏热炎炎，饮品沙冰易化，建议拿到...',
        price:'999',
        pic:'https://img.gumingnc.com/newton/20210619043811CST4611624091891668.png?x-oss-process=image/resize,w_204,m_lfit '
      },
      {
        title:'纸吸管更换说明',
        tag:'',
        desc:'纸吸管自带气味属正常无害，插吸管...',
        price:'999',
        pic:'https://img.gumingnc.com/newton/20210226112029CST96141614309629795.png?x-oss-process=image/resize,w_204,m_lfit'
      },
      {
        title:'购买须知',
        tag:'',
        desc:'1.请在1小时内饮用，含奶盖...',
        price:'999',
        pic:'https://img.gumingnc.com/newton/20210226112049CST461614309649529.png?x-oss-process=image/resize,w_204,m_lfit'
      },
      {
        title:'糖分解读',
        tag:'',
        desc:'十分甜=多糖；七分甜=正常糖；五分...',
        price:'999',
        pic:'https://img.gumingnc.com/newton/20210226112110CST80331614309670759.png?x-oss-process=image/resize,w_204,m_lfit'
      },{
        title:'少冰少量',
        tag:'',
        desc:'若您温度规格选择去冰/少冰，为保...',
        price:'999',
        pic:'https://img.gumingnc.com/newton/20210226112123CST58491614309683184.png?x-oss-process=image/resize,w_204,m_lfit'
      }
  
    ]
  }
  ]
const left_bar=[
  {
    id:'1',
    title:'当季新品',
    pic:'https://img.gumingnc.com/newton/20210414063740CST15781618396660776.png'
  },
  {
    id:'1',
     title:'人气推荐',
    pic:'https://img.gumingnc.com/newton/20210226051714CST35081614331034237.png'
  },
  {
    id:'2',
     title:'限定果茶',
    pic:'https://img.gumingnc.com/newton/20210429114425CST36841619667865295.png'
  },
  {
    id:'3',
     title:'果茶系列',
    pic:'https://img.gumingnc.com/newton/20210224044544CST59421614156344325.png '
  },
  {
    id:'4',
     title:'冷萃咖啡',
    pic:'https://img.gumingnc.com/newton/20210429052436CST40751619688276339.png'
  },
  {
    id:'5',
     title:'芝士茗茶',
    pic:'https://img.gumingnc.com/newton/20210429114434CST12671619667874729.png'
  },
  {
    id:'6',
     title:'轻乳茶',
    pic:'https://img.gumingnc.com/newton/20210429114449CST75211619667889377.png'
  },
  {
    id:'7',
     title:'奶茶家族',
    pic:'https://img.gumingnc.com/newton/20210224044552CST34231614156352959.png'
  },
  {
    id:'8',
     title:'料多多',
    pic:'https://img.gumingnc.com/newton/20210224044533CST88901614156333131.png'
  },
  {
    id:'9',
     title:'加料区',
    pic:'https://img.gumingnc.com/newton/20210308055016CST37291615197016545.png'
  },
  {
    id:'10',
     title:'用餐提醒',
    pic:'https://img.gumingnc.com/newton/20210224044458CST49841614156298710.png'
  },
  
  ]