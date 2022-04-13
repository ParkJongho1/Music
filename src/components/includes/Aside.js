import React from "react";
import {Link} from "react-router-dom";
import menu01 from "../../assets/img/menu01.png";
import menu02 from "../../assets/img/menu02.png";
import menu03 from "../../assets/img/menu03.png";
import menu04 from "../../assets/img/menu04.png";
import menu05 from "../../assets/img/menu05.png";
import menu06 from "../../assets/img/menu06.png";



function Contents(){
    return(
        <div className="aside_wrap">
            <div className="logo">
                <b><Link to="/">Music Awards</Link></b>
            </div>
            <div className="user">
                <p>ㅇ</p>
                <p>최고의 별자리</p>
            </div>
            <div className="menu">
                <ul>
                    <li>
                        <img src={menu01} alt="menu01" />
                        <Link to="#">오늘의 노래</Link>
                    </li>
                    <li>
                        <img src={menu02} alt="menu01" />
                        <Link to="#">추천노래</Link>
                    </li>
                    <li>
                        <img src={menu03} alt="menu01" />
                        <Link to="#">인기 차트</Link>
                    </li>
                    <li>
                        <img src={menu04} alt="menu01" />
                        <Link to="#">추천 앨범</Link>
                    </li>
                    <li>
                        <img src={menu05} alt="menu01" />
                        <Link to="#">TOP 100</Link>
                    </li>
                    <li>
                        <img src={menu06} alt="menu01" />
                        <Link to="#">나의 음악</Link>
                    </li>
                </ul>
            </div>
            <div className="playlist">
                <ul>
                    <li><Link to="#">플레이 리스트1</Link></li>
                    <li><Link to="#">플레이 리스트2</Link></li>
                    <li><Link to="#">플레이 리스트3</Link></li>
                </ul>
            </div>
            <div className="desc">
                <ul>
                    <li>서비스 소개</li>
                    <li>사용 방법</li>
                    <li>저작권 안내</li>
                </ul>
            </div>
        </div>
    )
}

export default Contents;