<template>
   <header>
         <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span class="sr-only"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <div class="navbar-brand"><router-link to="/">자바 프로젝트</router-link></div>
            </div>
            <!--//navbar-header-->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                    <li class="active"><router-link to="/">박준혁<span class="sr-only"></span></router-link></li>
                    <li><router-link to="/Instruct">포트폴리오</router-link></li>
                    <li class="dropdown">
                    <router-link to="/Lecture">    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">스펙소개<span class="caret"></span></a></router-link>
                        <ul class="dropdown-menu">
                            <li><a href="lecture.html?lectureName=C">C언어</a></li>
                            <li><a href="lecture.html?lectureName=Java">Java</a></li>
                            <li><a href="lecture.html?lectureName=Android">안드로이드</a></li>
                        </ul>
                    </li>
                </ul>
                <form action="" class="navbar-form navbar-left">
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="내용을 입력하세요.">
                    </div>
                    <button type="submit" class="btn btn-default">검색</button>
                </form>
                <ul class="nav navbar-nav navbar-right" >
                  
                            <li><router-link to="/Login">로그인</router-link></li>
                            <li><router-link to="/Legister">회원가입</router-link></li>
                     
                </ul>
            </div>
            <!-- // 헤더=네비게이션 바 -->

        </div>
    </nav>
   </header>
</template>

<script>
export default {
    
}
</script>

<style>
/* 전체 영역을 통틀어서 스타일 정의*/
@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&display=swap');

* {font-family: 'Nanum Gothic', sans-serif;}

a { color: #000000; text-decoration: none;}
a:hover { color: #bbbbbb; text-decoration: none; cursor:pointer;}

/* 네비게이션 영역 */
.navbar-default { /*배경 색상*/
    background-color: #000;
    border-color: #000;
}

.navbar-default .navbar-brand { /*네비게이션 제목 글씨색*/
    color: #fff;
}

navbar-default .navbar-brand:hover,
navbar-default .navbar-brand:focus { /*마우스 오버시*/
    background-color: transparent;
    color: #bbbbbb;
}

.navbar-default .navbar-nav > .active > a,
.navbar-default .navbar-nav > .active > a:hover,
.navbar-default .navbar-nav > .active > a:focus { /*현재 선택된 네비게이션 색상 이벤트*/
    color: #fff;
    background-color: #000;
}

.navbar-default .navbar-nav > li > a { /*네비게이션 기본색상*/
    color: #fff;
}

.navbar-default .navbar-nav > li > a:hover,
.navbar-default .navbar-nav > li > a:focus { /*네비게이션의 글자에 마우스를 올렸을 때*/
    color: #bbbbbb;
}

.navbar-default .navbar-nav > .open > a,
.navbar-default .navbar-nav > .open > a:hover,
.navbar-default .navbar-nav > .open > a:focus { /*드롭다운 열렸을때 마우스 색상 이벤트*/
    color: #000;
    background-color: #fff;
    text-decoration: none;
}

@media (max-width: 767px) { /*해상도 767이하에서 드랍다운 아이템에 마우스 올릴 때*/
    .navbar-default .navbar-nav .open .dropdown-menu > li > a {
        color: #fff;
    }
    .navbar-default .navbar-nav .open .dropdown-menu > li > a:hover,
    .navbar-default .navbar-nav .open .dropdown-menu > li > a:focus {
        color: #bbb;
    }
  
}



     .jumbotron {
                       background-size: cover;
            text-shadow: black 0.2em 0.2em 0.2em;
            color: white;
        }
</style>