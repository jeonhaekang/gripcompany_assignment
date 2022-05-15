

# 📚 gripcompany기업과제 제출 레포지토리
🔗 : http://gripcompany-assignment.s3-website.ap-northeast-2.amazonaws.com/

api를 활용한 영화 검색 및 간단한 북마크 기능 구현

<br/>

# 🗂 폴더구조

<br/>

<details>
    <summary>펼치기</summary>
<div align="left">
📦src<br/>
 ┣ 📂assets<br/>
 ┃ ┣ 📂Image<br/>
 ┃ ┗ 📂svg<br/>
 ┣ 📂axios<br/>
 ┣ 📂components<br/>
 ┃ ┣ 📂Card<br/>
 ┃ ┣ 📂InfinitiScroll<br/>
 ┃ ┣ 📂InitalMessage<br/>
 ┃ ┣ 📂Modal<br/>
 ┃ ┗ 📂Search<br/>
 ┣ 📂routes<br/>
 ┃ ┣ 📂Bookmark<br/>
 ┃ ┣ 📂Main<br/>
 ┃ ┣ 📂_shared<br/>
 ┃ ┃ ┗ 📂GNB<br/>
 ┣ 📂state<br/>
 ┣ 📂styles<br/>
 ┃ ┣ 📂base<br/>
 ┃ ┣ 📂constants<br/>
 ┃ ┣ 📂mixins<br/>
 ┣ 📂types<br/>
 ┣ 📂utils<br/>
 ┗ 📜index.tsx<br/>
 </div>
 </details>

<br/>

# 🛠 스택

<br/>

<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/>
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white"/>
<img src="https://img.shields.io/badge/Recoil-75AADB?style=flat-square&logo=Rstudio&logoColor=white"/>
<img src="https://img.shields.io/badge/CSS Modules-000000?style=flat-square&logo=CSS Modules&logoColor=white"/>
<img src="https://img.shields.io/badge/ESLint-4B32C3?style=flat-square&logo=ESLint&logoColor=white"/>
<img src="https://img.shields.io/badge/stylelint-263238?style=flat-square&logo=stylelint&logoColor=white"/>

<br/>

# 🏞 페이지 GIF

<br/>

<div align="center">

|검색, 무한스크롤|북마크 추가, 삭제|
|:---:|:---:|
|<img src="https://user-images.githubusercontent.com/73621658/168454674-2d435311-8b94-4dc3-b1cf-dbdd30c064ec.gif" />|<img src="https://user-images.githubusercontent.com/73621658/168454677-a8621f5f-7e32-47cd-b813-82a16611e4bc.gif"/>|

</div>

1. 메인페이지
* 영화검색 기능, 10개씩 영화 목록 로딩
* IntersectionObserver를 활용한 무한스크롤 구현
* 카드 클릭시 모달을 통한 북마크 기능

2. 북마크 페이지
* 로컬 스토리지를 활용한 북마크 페이지
* 북마크한 영화 목록 표시, 카드 클릭시 북마크 해제 기능
