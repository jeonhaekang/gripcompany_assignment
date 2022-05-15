<div align="center">

## 📚 gripcompany기업과제 제출 레포지토리
🔗 : http://gripcompany-assignment.s3-website.ap-northeast-2.amazonaws.com/

api를 활용한 영화 검색 및 간단한 북마크 기능 구현

<br/>

> ## 🗂 폴더구조

<br/>

<details>
    <summary>펼치기</summary>
<div align="left">
📦src<br/>
 ┣ 📂assets<br/>
 ┃ ┣ 📂Image<br/>
 ┃ ┗ 📂svg<br/>
 ┣ 📂axios<br/>
 ┃ ┣ 📜axios.ts<br/>
 ┃ ┗ 📜movieApi.ts<br/>
 ┣ 📂components<br/>
 ┃ ┣ 📂Card<br/>
 ┃ ┃ ┣ 📜Card.module.scss<br/>
 ┃ ┃ ┗ 📜index.tsx<br/>
 ┃ ┣ 📂InfinitiScroll<br/>
 ┃ ┃ ┣ 📜InfinityScroll.module.scss<br/>
 ┃ ┃ ┗ 📜index.tsx<br/>
 ┃ ┣ 📂InitalMessage<br/>
 ┃ ┃ ┣ 📜InitalMessage.module.scss<br/>
 ┃ ┃ ┗ 📜index.tsx<br/>
 ┃ ┣ 📂Modal<br/>
 ┃ ┃ ┣ 📜Alert.tsx<br/>
 ┃ ┃ ┣ 📜Confirm.tsx<br/>
 ┃ ┃ ┣ 📜Modal.module.scss<br/>
 ┃ ┃ ┗ 📜index.tsx<br/>
 ┃ ┗ 📂Search<br/>
 ┃ ┃ ┣ 📜Search.module.scss<br/>
 ┃ ┃ ┗ 📜index.tsx<br/>
 ┣ 📂routes<br/>
 ┃ ┣ 📂Bookmark<br/>
 ┃ ┃ ┣ 📜Bookmark.module.scss<br/>
 ┃ ┃ ┗ 📜index.tsx<br/>
 ┃ ┣ 📂Main<br/>
 ┃ ┃ ┣ 📜Main.module.scss<br/>
 ┃ ┃ ┗ 📜index.tsx<br/>
 ┃ ┣ 📂_shared<br/>
 ┃ ┃ ┗ 📂GNB<br/>
 ┃ ┃ ┃ ┣ 📜GNB.module.scss<br/>
 ┃ ┃ ┃ ┗ 📜index.tsx<br/>
 ┃ ┣ 📜Routes.module.scss<br/>
 ┃ ┗ 📜index.tsx<br/>
 ┣ 📂state<br/>
 ┃ ┣ 📜modal.ts<br/>
 ┃ ┗ 📜movie.ts<br/>
 ┣ 📂styles<br/>
 ┃ ┣ 📂base<br/>
 ┃ ┃ ┣ 📜_fonts.scss<br/>
 ┃ ┃ ┣ 📜_more.scss<br/>
 ┃ ┃ ┗ 📜_reset.scss<br/>
 ┃ ┣ 📂constants<br/>
 ┃ ┃ ┣ 📜_colors.scss<br/>
 ┃ ┃ ┣ 📜_levels.scss<br/>
 ┃ ┃ ┗ 📜_sizes.scss<br/>
 ┃ ┣ 📂mixins<br/>
 ┃ ┃ ┣ 📜_animation.scss<br/>
 ┃ ┃ ┣ 📜_flexbox.scss<br/>
 ┃ ┃ ┣ 📜_position.scss<br/>
 ┃ ┃ ┣ 📜_responsive.scss<br/>
 ┃ ┃ ┗ 📜_visual.scss<br/>
 ┃ ┗ 📜index.scss<br/>
 ┣ 📂types<br/>
 ┃ ┣ 📜Modal.d.ts<br/>
 ┃ ┗ 📜Movie.d.ts<br/>
 ┣ 📂utils<br/>
 ┃ ┗ 📜localStorage.ts<br/>
 ┗ 📜index.tsx<br/>
 </div>
 </details>

<br/>

> ## 🛠 스택

<br/>

<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/>
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white"/>
<img src="https://img.shields.io/badge/Recoil-75AADB?style=flat-square&logo=Rstudio&logoColor=white"/>
<img src="https://img.shields.io/badge/CSS Modules-000000?style=flat-square&logo=CSS Modules&logoColor=white"/>
<img src="https://img.shields.io/badge/ESLint-4B32C3?style=flat-square&logo=ESLint&logoColor=white"/>
<img src="https://img.shields.io/badge/stylelint-263238?style=flat-square&logo=stylelint&logoColor=white"/>

<br/>

> ## 🏞 페이지 GIF

<br/>

|검색, 무한스크롤|북마크 추가, 삭제|
|:---:|:---:|
|<img src="https://user-images.githubusercontent.com/73621658/168454674-2d435311-8b94-4dc3-b1cf-dbdd30c064ec.gif" />|<img src="https://user-images.githubusercontent.com/73621658/168454677-a8621f5f-7e32-47cd-b813-82a16611e4bc.gif"/>|

 </div>