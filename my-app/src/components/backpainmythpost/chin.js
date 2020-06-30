import React from 'react'
import './index.css'

export default function Chin() {
    return (
        <div className="center textalign">
            <h1>誤解 of back pain</h1>

            <div className="section">

            <div className="Myth">點解我哋想講呢個話題?</div>
            <div className="image"><img className="postpic"src={process.env.PUBLIC_URL + '/assets/images/intro.png'} /></div>
            <div className="explanantion">有背痛絕對唔係一件好玩嘅事,可能你平時已經好忙,平時冇時間亦都冇精力去做研究關於自己嘅背痛,
            可能你有對關於背痛嘅問題但係你唔知去邊度問,或者你自己對背痛已經有一定程度嘅理解,但係你唔肯定佢哋其實係咪正確 <br></br>無論你係屬於邊一類人
            呢篇文章嘅目的係希望糾正你對背痛嘅誤解 希望你睇完之後對背痛有一個樂觀同埋正面嘅態度 冇咁驚背痛 
</div>



</div>
            <div className="section">

                <div className="Myth">誤解1 :死啦我有背痛呀 係咪好大件事㗎</div>
                <div className="image"><img className="postpic"src={process.env.PUBLIC_URL + '/assets/images/backpain.png'} /></div>
                <div className="explanantion">我哋明你個背痛可能會覺得好擔心
                                            了解多啲呢個背痛會令到你更加安心 ,
                                             首先我哋要明白㗎係背痛嘅成日好多隻 , 
                                             但係主要嚟講我哋都會分成三類別 <br></br> 第一個類別我哋會叫做有特定成因嘅背痛成因包括癌症,發炎,骨折等等<br></br> 第二個類別係係牽涉到神經系統.一個類別嘅背痛通常都會牽涉到有腳痛 <br></br> 第三個類別嘅係我哋最常見嘅類別 , 亦都係我哋呢段片所講嘅背痛 , 呢隻叫做不特定背痛 , 係我哋最常見嘅背痛(95%) , 換句話說真係唯一百個人入面呢有95個都係因為不特定背痛嘅自由只有五個係因為嚴重事故或者係神經系統㗎 , 希望呢個數據會令到你對背痛有個更加全面嘅理解
                                             
                </div>



            </div>
            <div className="section">

<div className="Myth">誤解2 :係咪越老越容易有背痛㗎 , </div>
<div className="image"><img className="postpic"src={process.env.PUBLIC_URL + '/assets/images/time.png'} /></div>
<div className="explanantion">好多人都會覺得年紀越大,咁身體功能就下降,啲病痛就會跟住嚟 , 但係其實呢如果你乜都唔睇淨係年齡呢,
                            其實佢並唔係一個個好強嘅成因 , 相反更重要嘅係你嘅飲食啦你,作息時間, 主觀嘅壓力等等嘅 ,值得一提係
                            適當嘅治療對唔同嘅年齡層係一樣有效嘅 , 我哋想帶出嘅訊息係 單單年紀大並唔會令到你更加容易腰背痛
</div>



</div>
            
        </div>
    )
}
