var classNamesDict = {
    "1": "Saber",
    "2": "Archer",
    "3": "Lancer",
    "4": "Rider",
    "5": "Caster",
    "6": "Assassin",
    "7": "Berserker",
    "8": "Shielder",
    "9": "Ruler",
    "10": "Alterego",
    "11": "Avenger",
    "23": "MoonCancer"
};

var attrDict = {
    //"0" : "?",
    "1": "人",
    "2": "天",
    "3": "地",
    "4": "星",
    "5": "兽",
};

var individualityDict = {
    "2000": "神性",
    "2001": "人型",
    "2002": "龙",
    "2004": "罗马",
    "2005": "猛兽",
    "2007": "阿尔托莉雅脸",
    "2008": "被「天地乖离开辟之星」克制",
    "2009": "骑乘",
    "2010": "亚瑟",
    "2011": "被「人类神话·雷电降临」克制",
    "2012": "爱人",
    "2018": "死灵与恶魔",
    "2019": "魔性",
    "2037": "被「神秘杀手」克制",
    "2113": "王",
    "2114": "希腊神话系男性",
};

var policyDict = {
    //"0" : "",
    "1": "中立",
    "2": "混沌",
    "3": "秩序",
    //"4" : "?",
    //"5" : "?",
    "6": "中立",
};

var genderTypeDict = {
    //"0" : "",
    "1": "男",
    "2": "女",
    "3": "无",
};

var personalityDict = {
    //"0" : "",
    "1": "善",
    "2": "恶",
    //"3" : "?",
    "4": "狂",
    "5": "中庸",
    //"6" : "?",
    "7": "新娘",
    "8": "夏",
};

var cardColorsDict = {
    "1": "Arts",
    "2": "Buster",
    "3": "Quick"
};

var servantNamesDict = {
    "600710": "亨利·杰基尔&海德(变身后)",
    "800100": "玛修·基列莱特",
    "100100": "阿尔托莉雅·潘德拉贡",
    "100200": "阿尔托莉雅·潘德拉贡(Alter)",
    "100300": "阿尔托莉雅·潘德拉贡(Lily)",
    "100500": "尼禄·克劳狄乌斯",
    "100800": "齐格飞",
    "101300": "盖乌斯·尤利乌斯·凯撒",
    "101800": "阿蒂拉",
    "102200": "吉尔·德·雷",
    "102600": "骑士迪昂",
    "200100": "卫宫",
    "200200": "吉尔伽美什",
    "200300": "罗宾汉",
    "200500": "阿塔兰忒",
    "201200": "尤瑞艾莉",
    "201300": "阿拉什",
    "300100": "库·丘林",
    "300500": "伊丽莎白·巴托里",
    "300600": "武藏坊弁庆",
    "300700": "库·丘林(Prototype)",
    "300900": "列奥尼达一世",
    "301000": "罗穆路斯",
    "400100": "美杜莎",
    "400600": "乔尔乔斯",
    "400800": "爱德华·蒂奇",
    "401100": "布狄卡",
    "401400": "牛若丸",
    "401500": "亚历山大",
    "401700": "玛丽·安托瓦内特",
    "401900": "玛尔达",
    "500100": "美狄亚",
    "500200": "吉尔·德·雷",
    "500500": "汉斯·克里斯蒂安·安徒生",
    "500700": "威廉·莎士比亚",
    "501400": "梅菲斯托费勒斯",
    "501500": "沃尔夫冈·阿马德乌斯·莫扎特",
    "501900": "诸葛孔明(埃尔梅罗二世)",
    "502100": "库·丘林",
    "600100": "佐佐木小次郎",
    "600200": "咒腕哈桑",
    "601000": "斯忒诺",
    "601100": "荆轲",
    "601200": "夏尔·亨利·桑松",
    "601300": "剧院魅影",
    "601400": "玛塔·哈丽",
    "601700": "卡米拉",
    "700100": "赫拉克勒斯",
    "700200": "兰斯洛特",
    "700300": "吕布奉先",
    "700500": "斯巴达克斯",
    "700600": "坂田金时",
    "700700": "弗拉德三世",
    "700900": "阿斯忒里俄斯",
    "701000": "卡利古拉",
    "701100": "大流士三世",
    "701300": "清姬",
    "701500": "血斧埃里克",
    "701600": "玉藻猫",
    "900100": "贞德",
    "200900": "俄里翁",
    "502600": "伊丽莎白·巴托里(万圣节)",
    "500300": "玉藻前",
    "200600": "大卫",
    "301600": "赫克托耳",
    "400300": "弗朗西斯·德雷克",
    "400900": "安妮·伯妮&玛莉·瑞德",
    "501700": "美狄亚(Lily)",
    "102700": "冲田总司",
    "202400": "织田信长",
    "301300": "斯卡哈",
    "300200": "迪尔姆德·奥迪纳",
    "101400": "弗格斯·马克·罗伊",
    "402200": "阿尔托莉雅·潘德拉贡(圣诞 Alter)",
    "500400": "童谣",
    "600500": "开膛手杰克",
    "100900": "莫德雷德",
    "201100": "尼古拉·特斯拉",
    "301900": "阿尔托莉雅·潘德拉贡(Alter)",
    "501000": "冯·霍恩海姆·帕拉塞尔苏斯",
    "501100": "查尔斯·巴贝奇",
    "600700": "亨利·杰基尔&海德",
    "700400": "弗兰肯斯坦",
    "201500": "阿周那",
    "300400": "迦尔纳",
    "601800": "谜之女主角X",
    "301100": "芬恩·麦克库尔",
    "301200": "布伦希尔德",
    "700800": "贝奥武夫",
    "100600": "尼禄·克劳狄乌斯(新娘)",
    "102800": "两仪式",
    "602300": "两仪式",
    "900200": "天草四郎",
    "400400": "阿斯托尔福",
    "201800": "幼吉尔",
    "1100200": "岩窟王",
    "701400": "南丁格尔",
    "702000": "库·丘林(Alter)",
    "401300": "女王梅芙",
    "502300": "海伦娜·布拉瓦茨基",
    "101900": "罗摩",
    "301700": "李书文",
    "502500": "托马斯·爱迪生",
    "501600": "杰罗尼莫",
    "201000": "比利小子",
    "1100300": "贞德(Alter)",
    "1100100": "安哥拉曼纽",
    "400200": "伊斯坎达尔",
    "601500": "卫宫(Assassin)",
    "600300": "百貌哈桑",
    "502000": "爱丽丝菲尔(天之衣)",
    "602100": "酒吞童子",
    "502200": "玄奘三藏",
    "702300": "源赖光",
    "402300": "坂田金时",
    "702200": "茨木童子",
    "601900": "风魔小太郎",
    "401200": "奥斯曼狄斯",
    "302000": "阿尔托莉雅·潘德拉贡",
    "501200": "尼托克丽丝",
    "102000": "兰斯洛特",
    "200800": "特里斯坦",
    "100700": "高文",
    "600900": "静谧哈桑",
    "201400": "表藤太",
    "101200": "贝德维尔",
    "500900": "莱昂纳多·达·芬奇",
    "302400": "玉藻前",
    "202600": "阿尔托莉雅·潘德拉贡",
    "502700": "玛丽·安托瓦内特",
    "202500": "安妮·伯妮&玛莉·瑞德",
    "402400": "莫德雷德",
    "602400": "斯卡哈",
    "302500": "清姬",
    "900400": "玛尔达",
    "502800": "伊莉雅丝菲尔·冯·爱因兹贝伦",
    "202700": "克洛伊·冯·爱因兹贝伦",
    //----------
    "101000": "伊丽莎白·巴陶里(勇者)",
    "600800": "克利奥帕特拉",
    "300300": "弗拉德三世(Extra)",
    "302600": "贞德·Alter·Santa·Lily",
    "202000": "伊修塔尔",
    "300800": "恩奇都",
    "401800": "魁札尔·科亚特尔",
    "501800": "吉尔伽美什(Caster)",
    "302700": "美杜莎(Lancer)",
    "1100400": "戈尔贡",
    "302800": "豹人",
    "500800": "梅林",
    "101700": "宫本武藏",
    "602500": "“山之翁”",
    "702400": "谜之女主角X(Alter)",
    "202300": "詹姆斯·莫里亚蒂",
    "201600": "卫宫(Alter)",
    "1100500": "海森·罗伯",
    "602600": "燕青",
    "102900": "亚瑟·潘德拉贡(Prototype)",
    "702500": "土方岁三",
    "702600": "茶茶",
    "1000200": "梅尔特莉莉丝(溶解莉莉丝)",
    "1000100": "帕森莉普(热情迷唇)",
    "103000": "铃鹿御前",
    "2300100": "BB",
    "1000300": "杀生院祈荒",
    "503000": "山鲁佐德",
    "602700": "武则天",
    "702700": "彭忒西勒亚",
    "402500": "克里斯托弗·哥伦布",
    "900500": "夏洛克·福尔摩斯",
    "702800": "保罗·班扬",
    "503200": "尼禄·克劳狄乌斯",
    "103100": "弗兰肯斯坦",
    "602800": "尼托克丽丝",
    "702900": "织田信长",
    "402700": "阿尔托莉雅·潘德拉贡(Alter)",
    "202800": "海伦娜·布拉瓦茨基",
    "302900": "源赖光",
    "402600": "伊修塔尔",
    "303000": "帕尔瓦蒂",
    "202100": "巴御前",
    "602900": "望月千代女",
    "301400": "宝蔵院胤舜",
    "103200": "柳生但马守宗矩",
    "603000": "加藤段蔵",
    "603100": "刑部姬",
    "1000400": "机械伊丽酱",
    "1000500": "机械伊丽酱Ⅱ号机",
};

var servantnickNamesDict = {
    "600710": "化身博士",
    "800100": "学妹 盾娘",
    "100100": "呆毛 蓝呆 吾王 军刀 棉被 saber 骑士王 月下美人",
    "100200": "黑呆 黑无毛",
    "100300": "lily 莉莉",
    "100500": "红saber 罗马之花",
    "100800": "对不起先生",
    "101300": "红saber 胖尼禄 罗马之花",
    "101800": "大王 彩笔 b提拉",
    "102200": "剑元帅",
    "102600": "伪娘",
    "200100": "红a 红茶 emiya 士郎 土狼",
    "200200": "金闪闪 金皮卡 路灯王",
    "200300": "绿茶",
    "200500": "猫茶 塔喵",
    "201200": "二姐",
    "201300": "大英雄 自爆弓",
    "300100": "汪酱 大狗 幸运e",
    "300500": "龙娘 爱抖露,",
    "300600": "和尚 武僧",
    "300700": "旧狗 小狗",
    "300900": "斯巴达 炎头",
    "301000": "罗马 神祖 Y",
    "400100": "R姐",
    "400600": "圣乔治 jojo 乔乔 乔老师 你也是龙",
    "400800": "黑胡子 死宅",
    "401100": "布妈",
    "401400": "牛肉丸",
    "401500": "幼帝",
    "401700": "蛋糕 皇后",
    "401900": "铁拳圣女 马大",
    "500100": "C妈",
    "500200": "C元帅 蓝胡子",
    "500500": "安日天",
    "500700": "莎翁",
    "501400": "恶魔",
    "501500": "妖精假面",
    "501900": "村夫 王妃 诸葛亮 为所欲为",
    "502100": "C狗",
    "600100": "屠龙勇士 看门大爷 门卫",
    "600200": "忠义无双 麒麟臂",
    "601000": "大姐",
    "601100": "荆轲",
    "601200": "桑松",
    "601300": "歌剧魅影",
    "601400": "舞娘",
    "601700": "大龙娘",
    "700100": "B叔 海叔 海格力斯",
    "700200": "长江骑士",
    "700300": "高达",
    "700500": "抖m 微笑boy 爱酱",
    "700600": "狗蛋",
    "700700": "大公 穿刺公 刺绣公",
    "700900": "小牛 牛头人 米诺陶诺斯",
    "701000": "鬼舅",
    "701100": "酋长 黑无毛 大流士三岁",
    "701300": "清姬",
    "701500": "成龙",
    "701600": "b玉 b喵 喵玉",
    "900100": "村姑 贞日天",
    "200900": "月神 奶茶",
    "502600": "c龙娘",
    "500300": "小玉 c狐",
    "200600": "制杖弓兵",
    "301600": "大叔 友尽的证明 赫叔",
    "400300": "BBA 船长",
    "400900": "双子",
    "501700": "C子",
    "102700": "樱saber okita",
    "202400": "第六天萌王 nobu",
    "301300": "师匠 BBA",
    "300200": "刷子",
    "101400": "小刚",
    "402200": "r无毛 raber",
    "500400": "童谣",
    "600500": "女儿",
    "100900": "小莫 莫崽 熊孩子",
    "201100": "祖师爷 杨永信 特总",
    "301900": "黑枪呆 乳上 南半球",
    "501000": "豆爸",
    "501100": "机器人 蒸汽王",
    "600700": "化身博士",
    "700400": "肯娘",
    "201500": "阿囧那 娜娜子 周黑鸭",
    "300400": "小太阳 小汤圆 小馄饨",
    "601800": "X毛",
    "301100": "水枪 主任",
    "301200": "布姐",
    "700800": "狼叔 贝爷",
    "100600": "花嫁 嫁王",
    "102800": "215 剑式",
    "602300": "214 杀式",
    "900200": "言峰士郎",
    "400400": "阿福",
    "201800": "幼闪",
    "1100200": "爱德蒙·唐泰斯 伯爵 狛爵",
    "701400": "护士长",
    "702000": "黑狗",
    "401300": "碧池",
    "502300": "外星萝莉",
    "101900": "罗摩",
    "301700": "李大师",
    "502500": "爱迪狮 狮子狗",
    "501600": "萨满",
    "201000": "比利小子",
    "1100300": "黑贞",
    "1100100": "小安",
    "400200": "大帝",
    "601500": "切嗣papa",
    "600300": "体操团",
    "502000": "太太 爱莉",
    "602100": "酒吞童子",
    "502200": "师傅 jk高僧 妖僧",
    "702300": "奶光",
    "402300": "r金时 r狗蛋",
    "702200": "脚神",
    "601900": "风魔小太郎",
    "401200": "拉二 火腿王 王中王",
    "302000": "白枪呆 乳下 北半球",
    "501200": "尼托克丽丝",
    "102000": "剑兰 长江 岳父",
    "200800": "小崔 崔悲伤 崔斯坦",
    "100700": "太阳骑士 讨债骑士",
    "600900": "静谧哈桑",
    "201400": "送水工",
    "101200": "小贝 贝狄威尔",
    "500900": "达芬奇 大碧池",
    "302400": "l狐 水狐狸",
    "202600": "弓呆",
    "502700": "水母 蛋糕 皇后",
    "202500": "弓双子",
    "402400": "r小莫",
    "602400": "BBA 杀师匠",
    "302500": "l清姬",
    "900400": "铁拳圣女",
    "502800": "小学生",
    "202700": "色情小学生 小黑",
    "101000": "剑龙娘",
    "600800": "超高校的艳后",
    "300300": "穿刺公 刺绣公 l大公",
    "302600": "童贞 幼贞 黑贞lily",
    "202000": "伊斯塔凛",
    "300800": "小恩",
    "401800": "羽蛇神 大姐姐",
    "501800": "C闪 吉尔焦裕禄 过劳死 贤王",
    "302700": "美杜莎lily",
    "1100400": "魔神r姐",
    "302800": "老虎 大河",
    "500800": "魔法梅莉",
    "101700": "宫本武藏",
    "602500": "王哈桑",
    "702400": "bx毛",
    "202300": "教授",
    "201600": "黑a 黎明的神腕 大流士lily,",
    "1100500": "狼王 无头",
    "602600": "浪子燕青",
    "102900": "旧剑",
    "702500": "鬼之副长",
    "702600": "茶茶",
    "1000200": "梅尔特莉莉丝(溶解莉莉丝)",
    "1000100": "lip",
    "103000": "jk狐",
    "2300100": "BB",
    "1000300": "魔性菩萨",
    "503000": "1001 一千零一夜",
    "602700": "武则天",
    "702700": "亚马逊女王",
    "402500": "哥伦布",
    "900500": "夏洛克·福尔摩斯",
    "702800": "保罗·班扬",
    "503200": "c尼禄",
    "103100": "肯娘",
    "602800": "尼托",
    "702900": "nobu",
    "402700": "水无毛 水有毛",
    "202800": "海伦娜",
    "302900": "枪奶光",
    "402600": "伊斯塔凛",
    "303000": "雪山樱",
    "202100": "巴御前",
    "602900": "望月千代女",
    "301400": "宝蔵院胤舜",
    "103200": "柳生但馬守宗矩",
    "603000": "加藤段蔵",
    "603100": "宅女 眼镜娘",
    "1000400": "机械龙娘I号机 龙姐",
    "1000500": "机械龙娘II号机 龙妹",
};

var noblePhantasmsDict = {
    "仮想宝具 疑似展開／人理の礎": "假想宝具 拟似展开/人理之础",
    "いまは遙か理想の城": "已然遥远的理想之城",
    "約束された勝利の剣": "誓约胜利之剑",
    "勝利すべき黄金の剣": "必胜黄金之剑",
    "童女謳う華の帝政": "童女讴歌的荣华帝政",
    "幻想大剣・天魔失墜": "幻想大剑·天魔失坠",
    "黄の死": "黄之死",
    "軍神の剣": "军神之剑",
    "神聖たる旗に集いて吼えよ": "集结于圣旗之下怒吼吧",
    "百合の花咲く豪華絢爛": "百合花开豪华绚烂",
    "無限の剣製": "无限剑制",
    "天地乖離す開闢の星": "天地乖离开辟之星",
    "祈りの弓": "祈祷之弓",
    "訴状の矢文": "诉状箭书",
    "女神の視線": "女神的视线",
    "流星一条": "流星一条",
    "刺し穿つ死棘の槍": "穿刺死棘之枪",
    "鮮血魔嬢": "鲜血魔女",
    "五百羅漢補陀落渡海": "五百罗汉补陀落渡海",
    "穿ちの朱槍": "贯穿之朱枪",
    "炎門の守護者": "炎门守护者",
    "すべては我が槍に通ずる": "吾枪通达万物",
    "騎英の手綱": "骑英之缰绳",
    "力屠る祝福の剣": "刚力屠戮祝福之剑",
    "アン女王の復讐": "安妮女王之复仇",
    "約束されざる守護の車輪": "无以誓约守护之车轮",
    "壇ノ浦・八艘跳": "坛之浦·八艘跳",
    "始まりの蹂躙制覇": "初始的蹂躏制霸",
    "百合の王冠に栄光あれ": "愿百合王冠荣光永在",
    "愛知らぬ哀しき竜よ": "不识爱的悲哀之龙啊",
    "破戒すべき全ての符": "万符必应破戒",
    "螺湮城教本": "螺湮城教本",
    "貴方のための物語": "为你撰写的故事",
    "開演の刻は来たれり、此処に万雷の喝采を": "开演之刻已至，此处应有雷鸣般的喝彩",
    "微睡む爆弾": "浅眠炸弹",
    "死神のための葬送曲": "献给死神的安魂曲",
    "石兵八陣": "石兵八阵",
    "灼き尽くす炎の檻": "灼烧殆尽的炎笼",
    "燕返し": "燕返",
    "妄想心音": "妄想心音",
    "女神の微笑": "女神的微笑",
    "不還匕首": "不归匕首",
    "死は明日への希望なり": "死亡将为明日的希望",
    "地獄にこそ響け我が愛の唄": "吾之情歌只在地狱回响",
    "陽の眼を持つ女": "拥有阳眼之女",
    "幻想の鉄処女": "幻想铁处女",
    "射殺す百頭": "射杀百头",
    "騎士は徒手にて死せず": "骑士不徒手而亡",
    "軍神五兵": "军神五兵",
    "疵獣の咆吼": "伤兽的咆吼",
    "黄金衝撃": "黄金冲击",
    "血塗れ王鬼": "血染的王鬼",
    "万古不易の迷宮": "万古不变的迷宫",
    "我が心を喰らえ、月の光": "吞噬吾心吧，月光",
    "不死の一万騎兵": "不死的万名骑兵",
    "転身火生三昧": "转身火生三昧",
    "血塗れの戴冠式": "血染的加冕仪式",
    "燦々日光午睡宮酒池肉林": "璀璨日光午睡宫酒池肉林",
    "我が神はここにありて": "吾主在此",
    "月女神の愛矢恋矢": "月女神的爱箭恋矢",
    "鮮血特上魔嬢": "鲜血极致魔女",
    "水天日光天照八野鎮石": "水天日光天照八野镇石",
    "五つの石": "五块石头",
    "不毀の極槍": "不毁的极枪",
    "黄金鹿と嵐の夜": "黄金鹿与暴风夜",
    "比翼にして連理": "比翼连理",
    "修補すべき全ての疵": "万疵必行修补",
    "無明三段突き": "无明三段突",
    "三千世界": "三千世界",
    "貫き穿つ死翔の槍": "贯穿死翔之枪",
    "破魔の紅薔薇、必滅の黄薔薇": "破魔的红蔷薇、必灭的黄蔷薇",
    "虹霓剣": "虹霓剑",
    "誰かの為の物語": "献给某人的故事",
    "解体聖母": "解体圣母",
    "我が麗しき父への叛逆": "对吾华丽父王的叛逆",
    "人類神話・雷電降臨": "人类神话·雷电降临",
    "最果てにて輝ける槍": "闪耀于终焉之枪",
    "元素使いの魔剣": "元素使的魔剑",
    "絢爛なりし灰燼世界": "绚烂的灰烬世界",
    "密やかなる罪の遊戯": "隐秘的罪之游戏",
    "磔刑の雷樹": "磔刑之雷树",
    "破壊神の手翳": "破坏神之手影",
    "日輪よ、死に随え": "日轮啊，顺从死亡",
    "無銘勝利剣": "无铭胜利剑",
    "無敗の紫靫草": "无败紫靫草",
    "死がふたりを分断つまで": "直至死亡拆散两人",
    "源流闘争": "源流斗争",
    "星馳せる終幕の薔薇": "星辰驰骋的终幕蔷薇",
    "無垢識・空の境界": "无垢识·空之境界",
    "唯識・直死の魔眼": "唯识·直死之魔眼",
    "双腕・零次集束": "双腕·零次集束",
    "この世ならざる幻馬": "非世间所存之幻马",
    "王の財宝": "王之财宝",
    "虎よ、煌々と燃え盛れ": "虎啊，煌煌燎燃",
    "我はすべて毒あるもの、害あるものを絶つ": "我将根绝一切毒物，一切害物",
    "噛み砕く死牙の獣": "死牙之兽的噬碎",
    "愛しき私の鉄戦車": "我心爱的钢铁战车",
    "金星神・火炎天主": "金星神·火炎天主",
    "羅刹を穿つ不滅": "穿透罗刹之不灭",
    "神槍无二打": "神枪无二打",
    "Ｗ・Ｆ・Ｄ": "W·F·D",
    "大地を創りし者": "大地之创造者",
    "壊音の霹靂": "坏音霹雳",
    "吼え立てよ、我が憤怒": "咆哮吧，吾之愤怒",
    "偽り写し記す万象": "万象之伪誊抄",
    "王の軍勢": "王之军势",
    "時のある間に薔薇を摘め": "花开堪折直须折",
    "妄想幻像": "妄想幻象",
    "白き聖杯よ、謳え": "白之圣杯啊，咏唱吧",
    "千紫万紅・神便鬼毒": "千紫万红·神便鬼毒",
    "五行山・釈迦如来掌": "五行山·释迦如来掌",
    "牛王招雷・天網恢々": "牛王招雷·天网恢恢",
    "夜狼死九・黄金疾走": "夜狼死九·黄金疾走",
    "羅生門大怨起": "罗生门大怨起",
    "不滅の混沌旅団": "不灭的混沌旅团",
    "光輝の大複合神殿": "光辉之大复合神殿",
    "冥鏡宝典": "冥镜宝典",
    "縛鎖全断・過重湖光": "缚锁全断·过重湖光",
    "痛哭の幻奏": "痛哭幻奏",
    "転輪する勝利の剣": "轮转胜利之剑",
    "妄想毒身": "妄想毒身",
    "八幡祈願・大妖射貫": "八幡祈愿·大妖射贯",
    "剣を摂れ、銀色の腕": "紧握其剑，银之臂",
    "万能の人": "万能之人",
    "常夏日光・日除傘寵愛一神": "常夏日光·遮阳伞宠爱一神",
    "陽光煌めく勝利の剣": "阳光璀璨胜利之剑",
    "愛すべき輝きは永遠に": "吾爱辉煌永恒常驻",
    "逆巻く波濤を制する王様気分！": "掌控翻涌波涛王者心境！",
    "蹴り穿つ死翔の槍": "蹴穿死翔之枪",
    "道成寺鐘百八式火竜薙": "道成寺钟百八式火龙薙",
    "荒れ狂う哀しき竜よ": "狂暴的悲哀之龙啊",
    "多元重奏飽和砲撃": "多元重奏饱和炮击",
    "鶴翼三連": "鹤翼三连",
    //--------
    "鮮血竜巻魔嬢": "鮮血龙卷魔娘",
    "暁の時を終える蛇よ、此処に": "终结黎明之蛇啊，降临此处",
    "串刺城塞": "穿刺城塞",
    "優雅に歌え、かの聖誕を": "优雅的讴歌吧，为这圣诞！",
    "山脈震撼す明星の薪": "震撼山脉明星之薪",
    "人よ、神を繋ぎとめよう": "人子啊，紧系神明吧",
    "炎、神をも灼き尽くせ": "炎蛇，连神一同烧灼殆尽",
    "王の号砲": "王之号炮",
    "女神の抱擁": "女神的拥抱",
    "強制封印・万魔神殿": "强制封印·万魔神殿",
    "逃れ得ぬ死の鉤爪": "无法逃脱死之钩爪",
    "永久に閉ざされた理想郷": "已被永久闭关的理想乡",
    "六道五輪・倶利伽羅天象": "六道五轮·俱利伽罗天象",
    "死告天使": "死告天使",
    "黒竜双剋勝利剣": "黑龙双克胜利剑",
    "終局的犯罪": "终局的犯罪",
    "遥かなる者への斬罪": "无远弗届的斩罪",
    "十面埋伏・無影の如く": "十面埋伏·形如无影",
    "不滅の誠": "不灭之诚",
    "絢爛魔界日輪城": "绚烂魔界日轮城",
    "弁財天五弦琵琶": "辩才天五弦琵琶",
    "死が二人を別離つとも": "直至死亡将两人别离",
    "天鬼雨": "天鬼雨",
    "Ｃ.Ｃ.Ｃ.": "C.C.C.",
    "快楽天・胎蔵曼荼羅": "快乐天·胎藏曼荼罗",
    "千夜一夜物語": "一千零一夜",
    "告密羅織経": "告密罗织经",
    "我が瞋恚にて果てよ英雄": "英雄，在我的愤恨中终结吧",
    "新天地探索航": "新天地探索航",
    "初歩的なことだ、友よ": "这是基本的推测，我的朋友",
    "驚くべき偉業": "惊人的伟业",
    "誉れ歌う黄金劇場": "歌颂的黄金剧场",
    "串刺の雷刃": "串刺的雷刃",
    "穢れを漱げ、青く美しきナイル": "荡涤污秽、美丽的蓝色尼罗河",
    "第六天魔王波旬～夏盛～": "第六天魔王波旬~夏盛~",
    "不撓燃えたつ勝利の剣": "不屈燃烧胜利之剑",
    "金星神・白銀円環": "金星神·白银圆环",
    "釈提桓因・金剛杵": "释提桓因·金刚杵",
    "神峰天廻る明星の虹": "神峰天回明星之虹",
    "恋見てせざるは愛無きなり": "见恋不为，无爱也",
    "真言・聖観世音菩薩": "真言·圣观世音菩萨",
    "口寄せ・伊吹大明神縁起": "通灵·伊吹大明神缘起",
    "朧裏月十一式": "胧里月十一式",
    "剣術無双・剣禅一如": "剑术无双·剑禅如一",
    "絡繰幻法・呑牛": "络缲幻法·吞牛",
    "白鷺城の百鬼八天堂様": "白鹭城的百鬼八天堂大人",
    "鋼鉄天空魔嬢": "钢铁天空魔娘",
};

var skillsDict = {
    "今は脆き雪花の壁": "现为脆弱的雪花之壁",
    "誉れ堅き雪花の壁": "荣光坚毅的雪花之壁",
    "時に煙る白亜の壁": "时为朦胧的白垩之壁",
    "奮い断つ決意の盾": "决意奋起之盾",
    "カリスマ": "领袖气质",
    "直感": "直觉",
    "魔力放出": "魔力放出",
    "花の旅路": "花之旅途",
    "頭痛持ち": "头痛宿疾",
    "皇帝特権": "皇帝特权",
    "三度、落陽を迎えても": "纵使三度迎来落日",
    "黄金律": "黄金律",
    "仕切り直し": "重整旗鼓",
    "竜殺し": "屠龙",
    "軍略": "军略",
    "扇動": "煽动",
    "天性の肉体": "天性的肉体",
    "星の紋章": "星之纹章",
    "プレラーティの激励": "普雷拉蒂的激励",
    "心眼（真）": "心眼(真)",
    "自己暗示": "自我暗示",
    "麗しの風貌": "秀丽风情",
    "鷹の瞳": "鹰之瞳",
    //
    "魔術": "魔术",
    "投影魔術": "投影魔术",
    "コレクター": "收藏家",
    "バビロンの蔵": "巴比伦的宝藏",
    //
    "破壊工作": "破坏工作",
    "皐月の王": "五月之王",
    "アルカディア越え": "越过阿卡迪亚",
    "追い込みの美学": "逐追的美学",
    "カリュドーン狩り": "卡吕冬狩猎",
    "吸血": "吸血",
    "魅惑の美声": "魅惑的美声",
    "女神のきまぐれ": "女神的反复无常",
    "頑健": "健硕",
    "千里眼": "千里眼",
    "弓矢作成": "箭矢制作",
    "戦闘続行": "战斗续行",
    "矢避けの加護": "避矢之加护",
    "嗜虐のカリスマ": "嗜虐的领导力",
    //
    "拷問技術": "拷问技术",
    "怨霊調伏": "怨灵调伏",
    "仁王立ち": "仁王立姿",
    "白紙の勧進帳": "白纸的劝进帐",
    "ルーン魔術": "卢恩魔术",
    "獣殺し": "弑兽",
    "殿の矜持": "殿军的矜持",
    "戦士の雄叫び": "战士的雄叫",
    "七つの丘": "七丘",
    "魔眼": "魔眼",
    "怪力": "怪力",
    "鮮血神殿": "鲜血神殿",
    "守護騎士": "守护骑士",
    "殉教者の魂": "殉教者之魂",
    "嵐の航海者": "暴风雨的航海家",
    "海賊の誉れ": "海盗的尊严",
    "紳士的な愛": "绅士的爱",
    "女神への誓い": "向女神起誓",
    "アンドラスタの加護": "安德拉斯特的加护",
    "天狗の兵法": "天狗的兵法",
    "燕の早業": "燕之迅捷",
    "紅顔の美少年": "红颜美少年",
    "覇王の兆し": "霸王的征兆",
    "麗しの姫君": "秀丽贵夫人",
    "神の恩寵": "神之恩宠",
    "信仰の加護": "信仰的加护",
    "奇蹟": "奇迹",
    "聖女の誓い": "圣女之誓",
    "高速神言": "高速神言",
    "金羊の皮": "金羊毛",
    "キルケーの教え": "喀耳刻的教诲",
    "精神汚染": "精神污染",
    "芸術審美": "艺术审美",
    "深淵の邪視": "深渊的邪视",
    //
    "人間観察": "人类观察",
    "高速詠唱": "高速咏唱",
    "無辜の怪物": "无辜的怪物",
    "エンチャント": "魔力附加",
    "自己保存": "自我保存",
    "国王一座": "国王剧团",
    "呪術": "咒术",
    "道化の大笑": "小丑的大笑",
    "音楽神の加護（偽）": "音乐之神的护佑(伪)",
    "小さな夜の曲": "小夜曲",
    "鑑識眼": "鉴识眼",
    "軍師の忠言": "军师的忠言",
    "軍師の指揮": "军师的指挥",
    "原初のルーン": "原初之卢恩",
    "心眼（偽）": "心眼(伪)",
    "透化": "透化",
    "宗和の心得": "宗和的心得",
    "投擲（短刀）": "投掷(短刀)",
    "自己改造": "自我改造",
    "風除けの加護": "避风的加护",
    "抑制": "抑制",
    "プランニング": "计划",
    "傍若無人": "旁若无人",
    "処刑人": "刽子手",
    "医術": "医术",
    "人体研究": "人体研究",
    "諜報": "谍报",
    "フェロモン": "费洛蒙",
    "ダブルクロス": "背叛者",
    "鮮血の湯浴み": "鲜血浴",
    "勇猛": "勇猛",
    "無窮の武練": "无穷的武练",
    "精霊の加護": "精灵的加护",
    "魔力逆流": "魔力逆流",
    "反骨の相": "反骨之相",
    "乱世の梟雄": "乱世枭雄",
    "被虐の誉れ": "受虐的荣誉",
    "不屈の意志": "不屈的意志",
    "剣の凱旋": "剑之凯旋",
    "動物会話": "动物会话",
    "鮮血の伝承": "鲜血的传承",
    //
    "天性の魔": "天性之魔",
    "深淵のラブリュス": "深渊双刃斧",
    "加虐体質": "嗜虐体质",
    "在りし日の栄光": "曾经的荣光",
    "変化": "变化",
    "ストーキング": "跟踪",
    "焔色の接吻": "焰色接吻",
    "支援呪術": "支援咒术",
    "血啜の獣斧": "嗜血兽斧",
    "啓示": "启示",
    "真名看破": "真名识破",
    "神明裁決": "神明裁决",
    "女神の寵愛": "女神的宠爱",
    "移り気への楔": "移情别恋之楔",
    "魔力放出（かぼちゃ）": "魔力放出(南瓜)",
    "出演続行": "演出续行",
    "狐の嫁入り": "狐之婚嫁",
    "神の加護": "神的护佑",
    "治癒の竪琴": "治愈的竖琴",
    "友誼の証明": "友谊的证明",
    "星の開拓者": "星之开拓者",
    "航海": "航海",
    "射撃": "射击",
    "コンビネーション": "配合",
    "耐毒": "耐毒",
    "うたかたの恋": "泡影之恋",
    "縮地": "缩地",
    "病弱": "病弱",
    "戦略": "战略",
    "天下布武": "天下布武",
    "魔王": "魔王",
    "魔境の智慧": "魔境的智慧",
    "神殺し": "弑神",
    "愛の黒子": "爱之黑痣",
    "騎士の武略": "骑士的武略",
    "聖者の贈り物": "圣者的礼物",
    "一方その頃": "与此同时",
    "霧夜の殺人": "雾夜的凶杀",
    "情報抹消": "情报抹消",
    "外科手術": "外科手术",
    "不貞隠しの兜": "隐藏不贞的头盔",
    "ガルバニズム": "流电学",
    "天賦の叡智": "天赋的睿智",
    "最果ての加護": "止境的加护",
    "エレメンタル": "元素精灵",
    "賢者の石": "贤者之石",
    "一意専心": "专心一意",
    "機関の鎧": "机械铠甲",
    "オーバーロード": "过载",
    "恐慌の声": "恐慌之声",
    "虚ろなる生者の嘆き": "虚无生者的叹息",
    "千里眼(射手)": "千里眼(射手)",
    //
    "授かりの英雄": "天授的英雄",
    "魔力放出（炎）": "魔力放出(炎)",
    "貧者の見識": "贫者的见识",
    "無冠の武芸": "无冠的武艺",
    "支援砲撃": "支援炮击",
    "セイバーの星": "Saber之星",
    //
    "銀河流星剣": "银河流星剑",
    "千里眼(麗)": "千里眼(丽)",
    //
    "女難の美": "祸水红颜",
    "英雄の介添": "英雄的陪侍",
    "ベルセルク": "狂战士",
    "天に星を": "予天以星",
    "地に花を": "予地以花",
    "人に愛を": "予人以爱",
    "直死の魔眼": "直死之魔眼",
    "雲耀": "云耀",
    "陰陽魚": "阴阳鱼",
    "洗礼詠唱": "洗礼咏唱",
    "神明裁決(偽）": "神明裁决(伪)",
    "触れれば転倒！": "一碰就倒！",
    "理性蒸発": "理性蒸发",
    "鋼鉄の決意": "钢铁的决意",
    "窮地の智慧": "困境的智慧",
    "鋼の看護": "钢之看护",
    "人体理解": "人体理解",
    "天使の叫び": "天使的吼叫",
    "精霊の狂騒": "精灵的狂躁",
    "黄金律（体）": "黄金律(体)",
    "女王の躾": "女王的调教",
    "魔力同調": "魔力同调",
    "マハトマ": "伟大之魂",
    "未知への探求": "探求未知",
    "武の祝福": "武之祝福",
    "離別の呪い": "离别的诅咒",
    "中国武術（六合大槍）": "中国武术(六合大枪)",
    "圏境": "圈境",
    "絶招": "绝招",
    "大量生産": "大量生产",
    "概念改良": "概念改良",
    "血塗れの悪魔": "血染的恶魔",
    "シャーマニズム": "萨满教",
    "守護の獣": "守护兽",
    "クイックドロウ": "快速拔枪",
    "竜の魔女": "龙之魔女",
    "うたかたの夢": "泡影之梦",
    "右歯噛咬": "右齿啮咬",
    "左歯噛咬": "左齿啮咬",
    "死滅願望": "死灭愿望",
    "雷の征服者": "雷之征服者",
    "聖杯の寵愛": "圣杯的宠爱",
    "スケープゴート": "替罪羊",
    "蔵知の司書": "藏知之司书",
    "専科百般": "精通百科",
    "戦闘撤退": "战斗撤退",
    "献身の覚悟": "献身的觉悟",
    "自然の嬰児": "自然的婴儿",
    "魔術医療": "魔术医疗",
    "果実の酒気": "果实的酒气",
    "鬼種の魔": "鬼种之魔",
    "高速読経": "高速诵经",
    "妖惹の紅顔": "诱妖红颜",
    "三蔵の教え": "三藏的教诲",
    "魔力放出（雷）": "魔力放出(雷)",
    "神秘殺し": "神秘杀手",
    "千里疾走": "千里疾走",
    "忍術": "忍术",
    "風声鶴唳": "风声鹤唳",
    "太陽神の加護": "太阳神的加护",
    "エジプト魔術": "埃及魔术",
    "天空神の寵愛": "天空神的宠爱",
    "湖の騎士": "湖上骑士",
    "騎士は徒手にて死せず": "骑士不徒手而亡",
    "祝福されぬ生誕": "不被祝福的诞生",
    "騎士王への諫言": "致骑士王的谏言",
    "聖者の数字": "圣者的数字",
    "ベルシラックの帯": "柏希雷克腰带",
    "変化（潜入特化）": "变化(潜入特化)",
    "毒の刃":"毒之刃",
    "静寂の舞踏": "静寂舞步",
    "龍神の加護": "龙神的加护",
    "無尽俵": "无尽米袋",
    "沈着冷静": "沉着冷静",
    "守護の誓約": "守护的誓约",
    "ビーチフラワー": "沙滩之花",
    "真夏の呪術": "盛夏咒术",
    "女神変生": "女神变生",
    "サマー・スプラッシュ！": "夏日水花飞溅！",
    "海の家の加護": "海之家的佑护",
    "向日葵のきらめき": "向日葵的光辉",
    "麗しの姫君（海）": "秀丽贵夫人(海)",
    "トレジャーハント（海）": "财宝搜寻(海)",
    "セルリアンライド": "蔚蓝骑乘",
    "ロデオフリップ": "Rodeo Flip",
    "終わらぬ夏": "永不结束的夏日",
    "ビーチクライシス": "沙滩危机",
    "原初のルーン（海）": "原初的卢恩(海)",
    "真夏のあやまち": "盛夏的错误",
    "情熱の炎夏": "热情的炎夏",
    "水浴転身": "水浴转身",
    "恋の追跡者": "恋之追踪者",
    "水辺の聖女": "水边圣女",
    "天性の肉体（海）": "天性的肉体(海)",
    "ヤコブの手足": "雅各布的追随者",
    "愉快型魔術礼装": "愉快型魔术礼装",
    "あやしい薬": "可疑的药",
    "キス魔": "吻魔",
    //---------------
    "勇者大原則": "勇者大原则",
    "魔力放出（勇気）": "魔力放出(勇气)",
    "真紅の勇者伝説": "绯红的勇者传说",
    "黄金律（富＆体）": "黄金律(富＆体)",
    "女神の加護": "女神的加护",
    "自己変革": "自我变革",
    "美の顕現": "美的显现",
    "輝ける大王冠": "光辉大王冠",
    "魔力放出（宝石）": "魔力放出(宝石)",
    "変容": "变容",
    "気配感知": "气息感知",
    "完全なる形": "完全的形态",
    "善神の智慧": "善神的智慧",
    "自由なる闘争": "自由的斗争",
    "王の帰還": "王的回归",
    "魔杖の支配者": "魔杖的支配者",
    "彼方への想い": "彼方的追想",
    "変転の魔": "变转之魔",
    "ジャガー・パンチ": "美洲豹·拳",
    "ジャガー・キック": "美洲豹·踢",
    "ジャガー・アイ": "美洲豹·眼",
    "夢幻のカリスマ": "梦幻的领导力",
    "幻術": "幻术",
    "英雄作成": "英雄作成",
    "第五勢": "第五势",
    "天眼": "天眼",
    "無空": "无空",
    "晩鐘": "晚钟",
    "∞黒餡子": "∞黑豆沙",
    "刹那無影剣": "刹那无影剑",
    "王の見えざる手": "不可见的王之手",
    "魔弾の射手": "魔弹射手",
    "蜘蛛糸の果て": "蜘蛛丝的终点",
    "邪智のカリスマ": "邪智的领导力",
    "防弾加工": "防弹加工",
    "嗤う鉄心": "嗤笑的铁心",
    "堕天の魔": "堕天之魔",
    "死を纏う者": "身缠死亡之人",
    "中国拳法": "中国拳法",
    "天巧星": "天巧星",
    "巨獣狩り": "巨兽狩猎",
    "戦場の鬼": "战场之鬼",
    "局中法度": "局中法度",
    "黄金律(凶)": "黄金律(凶)",
    "無辜の怪物(焔)": "无辜的怪物(焰)",
    "日輪の寵姫": "日轮的宠姬",
    "クライム・バレエ": "Crime Ballet",
    "メルトウイルス": "Melt Virus",
    "ブレスト・バレー": "Breast Valley",
    "被虐体質": "被虐体质",
    "トラッシュ＆クラッシュ": "Trash & Crash",
    "神通力": "神通力",
    "才知の祝福": "才智的祝福",
    "十の王冠": "十之王冠",
    "黄金の杯": "黄金之杯",
    "千里眼（獣）": "千里眼(兽)",
    "五停心観": "五停心观",
    "語り手": "旁白者",
    "生存の閨": "生存之闺",
    "対英雄": "对英雄",
    "女帝のカリスマ": "女帝的领导力",
    "黄金律（美）": "黄金率(美)",
    "軍神咆哮": "军神咆哮",
    "コンキスタドール": "征服者",
    "天賦の見識": "天赋的见识",
    "仮説推論": "假说推论",
    "バリツ": "巴顿术",
    "愉快な仲間たち": "愉快的伙伴们",
    "豆スープの湖": "豆汤之湖",
    "ポップコーンの吹雪": "爆米花吹雪",
    "暴走特権": "暴走特权",
    "七つの冠": "七之王冠",
    "死なずのマグス": "不死的马格斯",
    "サマー・ガルバニズム": "夏日电流",
    "虚ろなる酷暑への嘆き": "空虚酷暑的叹息",
    "ほどほどロード": "适当负荷",
    "白き御衣": "白色御衣",
    "ビーチパニック": "沙滩慌乱",
    "熱砂の王道": "热砂的王道",
    "うつけ殺法": "傻瓜杀法",
    "敦盛ビート": "敦盛节拍",
    "渚の第六天魔王": "沙滩的第六天魔王",
    "サマー・スイーパー！": "夏日清扫机！",
    "コーチング": "指导",
    "リローデッド": "重新装弹",
    "サマー・バケーション！": "夏日假期！",
    "ニャーフ！": "ＮＹＡＲＦ！",
    "大佐の夏休み": "大佐的暑假",
    "影の風紀委員長": "影之风纪委员长",
    "錬鉄手車": "炼铁独轮",
    "サマー・カタストロフ": "炎夏灾难！",
    "輝ける水の衣": "光辉水之衣",
    "アクセルターン": "加速回合",
    "サマー・ブレイカー！": "夏日破坏者！",
    "イマジナリ・アラウンド": "虚数环",
    "カーマの灰": "迦摩之灰",
    "女神の恩恵": "女神的恩惠",
    "乱戦の心得": "乱战的心得",
    "血脈励起": "血脉励起",
    "呪術(巫)": "咒术(巫)",
    "おろちの呪": "大蛇诅咒",
    "甲賀流": "甲贺流",
    "武の求道": "武之求道",
    "先の先": "先之先",
    "新陰流": "新阴流",
    "水月": "水月",
    "無刀取り": "无刀取",
    "人造四肢（絡繰）": "人造四肢(络缲)",
    "絡繰幻法": "络缲幻法",
    "千代紙操法": "千代纸操法",
    "城化物": "城化物",
    "無辜の怪獣": "无辜的怪兽",
    "オーバーロード改": "过载·改",
    "ファイナルエリチャン": "最终的伊丽酱",
};

var passiveSkillsDict = {
    "対魔力": "对魔力",
    "騎乗": "骑乘",
    "神性": "神性",
    "狂化": "狂化",
    "単独行動": "单独行动",
    "女神の神核": "女神的神核",
    "陣地作成": "阵地建造",
    "道具作成": "道具作成",
    "気配遮断": "气息遮断",
    "道具作成(偽)": "道具作成（伪)",
    "コスモリアクター": "宇宙反应器",
    "単独顕現": "单独显现",
    "根源接続": "根源接续",
    "復讐者": "复仇者",
    "忘却補正": "忘却补正",
    "自己回復(魔力)": "自我回复（魔力)",
    "サーフィン": "冲浪",
    "無限の魔力供給": "无限的魔力供給",
    //---------
    "ダブルクラス": "双重职阶",
    "混血": "混血",
    "境界にて": "已臻境界",
    "オルトリアクター": "自动反应堆",
    "無頼漢": "无赖汉",
    //"ハイ・サーヴァント":"???",
    "獣の権能": "兽之权能",
    "ロゴスイーター": "理性吞噬者",
    "ネガ・セイヴァー": "反·救世主",
    "道具作成(奇)": "道具作成(奇)",
    "気配遮断(陰)": "气息遮断（阴）",
};

var itemsDict = {
    "6001": "剑之辉石",
    "6002": "弓之辉石",
    "6003": "枪之辉石",
    "6004": "骑之辉石",
    "6005": "术之辉石",
    "6006": "杀之辉石",
    "6007": "狂之辉石",
    "6101": "剑之魔石",
    "6102": "弓之魔石",
    "6103": "枪之魔石",
    "6104": "骑之魔石",
    "6105": "术之魔石",
    "6106": "杀之魔石",
    "6107": "狂之魔石",
    "6201": "剑之秘石",
    "6202": "弓之秘石",
    "6203": "枪之秘石",
    "6204": "骑之秘石",
    "6205": "术之秘石",
    "6206": "杀之秘石",
    "6207": "狂之秘石",
    "6501": "凤凰羽毛",
    "6502": "世界树之种",
    "6503": "英雄之证",
    "6505": "虚影之尘",
    "6506": "龙之逆鳞",
    "6507": "混沌之爪",
    "6508": "鬼魂提灯",
    "6509": "蛇之宝玉",
    "6510": "无间齿轮",
    "6511": "禁断书页",
    "6512": "龙之牙",
    "6513": "陨蹄铁",
    "6514": "人工生命体幼体",
    "6515": "八连双晶",
    "6516": "凶骨",
    "6517": "蛮神心脏",
    "6518": "精灵根",
    "6519": "战马的幼角",
    "6520": "血之泪石",
    "6521": "黑兽脂",
    "6522": "愚者之锁",
    "6523": "封魔之灯",
    "6524": "大骑士勋章",
    "6525": "智慧之圣甲虫像",
    "6526": "追忆的贝壳",
    //------------no
    "6527": "万死的毒针",
    "6528": "原初的产毛",
    "6529": "诅咒胆石",
    "6530": "魔术髓液",
    "6531": "奇奇神酒",
    "6532": "枯淡勾玉",
    //------------end
    "6999": "传承结晶",
    "7001": "剑阶银棋",
    "7002": "弓阶银棋",
    "7003": "枪阶银棋",
    "7004": "骑阶银棋",
    "7005": "术阶银棋",
    "7006": "杀阶银棋",
    "7007": "狂阶银棋",
    "7101": "剑阶金像",
    "7102": "弓阶金像",
    "7103": "枪阶金像",
    "7104": "骑阶金像",
    "7105": "术阶金像",
    "7106": "杀阶金像",
    "7107": "狂阶金像",
    "94004509": "黄金熊印打火机",
    "94005606": "铃鸣之枝",
    "94006404": "心形手链",
    //------------no
    "94000505": "棒棒糖",
    "94000905": "黄金骷髅",
    "94001205": "炸鸡桶",
    "94002005": "业物之刃",
    "94003112": "水晶球",
    "94007704": "龙之宝玉",
    "94009006": "吉尔玩偶",
    "94011306": "兰奢待",
    "94011911": "思念的蝴蝶结",
    "94015007": "黄金芦苇",
    "94017504": "B方块",
    //------------end
};
var noblePhantasmsWhiteList = [700599, 700299];
var passiveSkillsWhiteList = [296150, 348550, 940055, 940056];
