import wooahan_1 from "../../assets/pjt/wooahan/1.png";
import wooahan_2 from "../../assets/pjt/wooahan/2.png";
import wooahan_3 from "../../assets/pjt/wooahan/3.png";
import wooahan_4 from "../../assets/pjt/wooahan/4.png";
import wooahan_5 from "../../assets/pjt/wooahan/5.png";
import wooahan_6 from "../../assets/pjt/wooahan/6.png";
import wooahan_7 from "../../assets/pjt/wooahan/7.png";

import pickpack_1 from "../../assets/pjt/pickpack/1.png";
import pickpack_2 from "../../assets/pjt/pickpack/2.png";
import pickpack_3 from "../../assets/pjt/pickpack/3.png";
import pickpack_4 from "../../assets/pjt/pickpack/4.png";
import pickpack_5 from "../../assets/pjt/pickpack/5.png";
import pickpack_6 from "../../assets/pjt/pickpack/6.png";
import pickpack_7 from "../../assets/pjt/pickpack/7.png";
import pickpack_8 from "../../assets/pjt/pickpack/8.png";
import pickpack_9 from "../../assets/pjt/pickpack/9.png";
import pickpack_10 from "../../assets/pjt/pickpack/10.png";
import pickpack_11 from "../../assets/pjt/pickpack/11.png";

export const wooahan = {
  title: "우아한(우리 아이 한글 교육)",
  duration: "2023.04 ~ 2023.05 (6인 프로젝트)",
  images: [
    wooahan_1,
    wooahan_2,
    wooahan_3,
    wooahan_4,
    wooahan_5,
    wooahan_6,
    wooahan_7,
  ],
  desc: (
    <>
      <b>한글을 배우고 있는 어린이를 대상으로 하는 한글 교육 게임 앱</b>
      입니다. 해당 프로젝트는 삼성 청년 SW 아카데미 자율 프로젝트로 진행한
      프로젝트이며, 아동의 한글 학습에 신체적 활동을 더해 흥미를 갖게 하려는
      취지로 만들었습니다.
    </>
  ),
  takeAway: (
    <>
      WebView를 통해 리액트로 만든 웹을 연결하여 <b>하이브리드 앱</b>을 만들어
      볼 수 있었고, 게임 로직을 구현하며, 렌더링 과정에 대해 많이 생각해 볼 수
      있었습니다. Three.js와 Kotlin, Blender 등 새로운 기술을 많이 익힐 수
      있었으며, 앱을 <b>실제 스토어 출시</b>까지 하여 많은 의미를 얻게 해준
      프로젝트입니다.
      <br />
      <br />
      앱의 타깃층이 어린이인 만큼 UI & UX에 대해 많이 고민할 수 있었고, 그에
      맞는 여러 애니메이션을 구현하며 디자인 측면에서도 성장할 수 있었습니다.
      <br />
      <br />
      진행하며 어려웠던 점은 Android WebView의 경우 구글 소셜 로그인을 허용하지
      않았던 점이었습니다. 여러 시도를 하며 커스텀 탭을 통해 구글 소셜 로그인을
      구현하였고, 그 과정을 통해 문제 해결 능력을 기를 수 있던 기회가 된
      프로젝트였습니다.
    </>
  ),
  link: "https://github.com/rhkd0363/wooahan#readme",
  mainFunc: (
    <>
      GAME - 가속도 센서를 통한 동작 인식(뛰어쓰기), 중력 센서를 통한 동작
      인식(그림찾기), TTS(전체 게임), 배경음, 효과음
      <p />
      ETC - 무한 캐러셀(메인), 소셜 로그인(구글, 카카오), 보상(단어카드)
    </>
  ),
  position: "Front-End",
  stacks: <>React, Redux-Toolkit, TailwindCSS, ThreeJS, Kotlin, Blender</>,
};

export const pickpacker = {
  title: "Pick & Packer",
  duration: "2023.02 ~ 2023.04 (6인 프로젝트)",
  images: [
    pickpack_1,
    pickpack_2,
    pickpack_3,
    pickpack_4,
    pickpack_5,
    pickpack_6,
    pickpack_7,
    pickpack_8,
    pickpack_9,
    pickpack_10,
    pickpack_11,
  ],
  desc: (
    <>
      <b>빅데이터를 활용한 항공권 가격 비교 & 여행 물품 거래 웹 사이트</b>
      입니다. 해당 프로젝트는 삼성 청년 SW 아카데미 특화 프로젝트이며, 시대
      상황에 맞는 서비스를 주제로 코로나19 완화에 따라 여행 수요가 증가하는 것을
      파악하고 기획하게 되었습니다.
    </>
  ),
  takeAway: (
    <>
      항공권 가격 비교 서비스의 지도 기능을 위해 React-Leaflet 라이브러리를
      사용하였고, 지도 상에 대륙, 국가 별 구분을 위해 GeoJSON을 사용하였습니다.
      그리고 지도 관련 여러 기능을 위한 로직을 개발하며, 한층 더 성장할 수
      있었습니다.
      <br />
      <br />
      이번 프로젝트를 통해 처음으로 채팅 기능을 구현하였습니다. 여행 물품 거래
      서비스의 채팅 기능을 개발하였고, sockJS와 stompJS를 사용하였습니다. 채팅
      기능을 개발하며 소켓 통신에 대해 더 공부할 수 있는 경험이었습니다.
      <br />
      <br />
      프로젝트 기간 중 취업으로 프론트 팀원이 중도 퇴소하여 홀로 프론트를
      담당했습니다. 기획한 대로 개발 일정을 맞추기 위해 노력하였고, 고군분투하여
      일정에 맞게 개발을 마칠 수 있었습니다. 비록 힘들었지만, 지도, 채팅, FCM 등
      많은 기능을 개발하는 경험을 할 수 있었고, 노력하면 할 수 있다는 자신감을
      준 프로젝트였습니다.
    </>
  ),
  link: "https://github.com/rhkd0363/PickPack#readme",
  mainFunc: (
    <>
      PICK - 대륙ㆍ국가ㆍ공항별 항공권 조회, 지도 선택, 여행지 선택, 항공권
      상세, 가격 비교, 가격 추이 그래프, 찜 및 알림 기능
      <p />
      PACK - 카테고리(거래,대여), 게시글 조회/등록/수정/삭제, 채팅 기능, 찜 및
      알림 기능
      <p />
      ETC - 로그인, 회원가입
    </>
  ),
  position: "Front-End",
  stacks: (
    <>
      React, Redux-Toolkit, Styled-Components, React-Leaflet, Chart.js, SockJS,
      StompJS, Firebase
    </>
  ),
};

export const live = {
  title: "LIVE",
  duration: "2023.01 ~ 2023.02 (6인 프로젝트)",
  images: [
    pickpack_1,
    pickpack_2,
    pickpack_3,
    pickpack_4,
    pickpack_5,
    pickpack_6,
    pickpack_7,
    pickpack_8,
    pickpack_9,
    pickpack_10,
    pickpack_11,
  ],
  desc: (
    <>
      <b>빅데이터를 활용한 항공권 가격 비교 & 여행 물품 거래 웹 사이트</b>
      입니다. 해당 프로젝트는 삼성 청년 SW 아카데미 특화 프로젝트이며, 시대
      상황에 맞는 서비스를 주제로 코로나19 완화에 따라 여행 수요가 증가하는 것을
      파악하고 기획하게 되었습니다.
    </>
  ),
  takeAway: (
    <>
      매물 전체, 영상 다시보기, 리뷰, 항공권 가격 비교 서비스의 지도 기능을 위해
      React-Leaflet 라이브러리를 사용하였고, 지도 상에 대륙, 국가 별 구분을 위해
      GeoJSON을 사용하였습니다. 그리고 지도 관련 여러 기능을 위한 로직을
      개발하며, 한층 더 성장할 수 있었습니다.
      <br />
      <br />
      이번 프로젝트를 통해 처음으로 채팅 기능을 구현하였습니다. 여행 물품 거래
      서비스의 채팅 기능을 개발하였고, sockJS와 stompJS를 사용하였습니다. 채팅
      기능을 개발하며 소켓 통신에 대해 더 공부할 수 있는 경험이었습니다.
      <br />
      <br />
      프로젝트 기간중 취업으로 프론트 팀원이 중도퇴소하여 홀로 프론트를
      담당했습니다. 기획한 대로 개발 일정을 맞추기 위해 노력하였고, 고군분투하여
      일정에 맞게 개발을 마칠 수 있었습니다. 비록 힘들었지만, 지도, 채팅, FCM 등
      많은 기능을 개발하는 경험을 할 수 있었고, 노력하면 할 수 있다는 자신감을
      준 프로젝트였습니다.
    </>
  ),
  link: "https://github.com/Grab-JAVA-The-Best/LIVE#readme",
  mainFunc: (
    <>
      PICK - 대륙ㆍ국가ㆍ공항별 항공권 조회, 지도 선택, 여행지 선택, 항공권
      상세, 가격 비교, 가격 추이 그래프, 찜 및 알림 기능
      <p />
      PACK - 카테고리(거래,대여), 게시글 조회/등록/수정/삭제, 채팅 기능, 찜 및
      알림 기능
      <p />
      ETC - 로그인, 회원가입
    </>
  ),
  position: "Front-End",
  stacks: <>React, Redux-Toolkit, Sass, Eslint, kurento-utils</>,
};

export const ssafit = {
  title: "SSAFIT",
  duration: "2022.11 (2인 프로젝트)",
  images: [
    pickpack_1,
    pickpack_2,
    pickpack_3,
    pickpack_4,
    pickpack_5,
    pickpack_6,
    pickpack_7,
    pickpack_8,
    pickpack_9,
    pickpack_10,
    pickpack_11,
  ],
  desc: (
    <>
      <b>빅데이터를 활용한 항공권 가격 비교 & 여행 물품 거래 웹 사이트</b>
      입니다. 해당 프로젝트는 삼성 청년 SW 아카데미 특화 프로젝트이며, 시대
      상황에 맞는 서비스를 주제로 코로나19 완화에 따라 여행 수요가 증가하는 것을
      파악하고 기획하게 되었습니다.
    </>
  ),
  takeAway: (
    <>
      전반적으로 다 했음 항공권 가격 비교 서비스의 지도 기능을 위해
      React-Leaflet 라이브러리를 사용하였고, 지도 상에 대륙, 국가 별 구분을 위해
      GeoJSON을 사용하였습니다. 그리고 지도 관련 여러 기능을 위한 로직을
      개발하며, 한층 더 성장할 수 있었습니다.
      <br />
      <br />
      이번 프로젝트를 통해 처음으로 채팅 기능을 구현하였습니다. 여행 물품 거래
      서비스의 채팅 기능을 개발하였고, sockJS와 stompJS를 사용하였습니다. 채팅
      기능을 개발하며 소켓 통신에 대해 더 공부할 수 있는 경험이었습니다.
      <br />
      <br />
      프로젝트 기간중 취업으로 프론트 팀원이 중도퇴소하여 홀로 프론트를
      담당했습니다. 기획한 대로 개발 일정을 맞추기 위해 노력하였고, 고군분투하여
      일정에 맞게 개발을 마칠 수 있었습니다. 비록 힘들었지만, 지도, 채팅, FCM 등
      많은 기능을 개발하는 경험을 할 수 있었고, 노력하면 할 수 있다는 자신감을
      준 프로젝트였습니다.
    </>
  ),
  link: "https://github.com/Grab-JAVA-The-Best/LIVE#readme",
  mainFunc: (
    <>
      PICK - 대륙ㆍ국가ㆍ공항별 항공권 조회, 지도 선택, 여행지 선택, 항공권
      상세, 가격 비교, 가격 추이 그래프, 찜 및 알림 기능
      <p />
      PACK - 카테고리(거래,대여), 게시글 조회/등록/수정/삭제, 채팅 기능, 찜 및
      알림 기능
      <p />
      ETC - 로그인, 회원가입
    </>
  ),
  position: "Full-Stack",
  stacks: <>React, Redux-Toolkit, Sass, Eslint, kurento-utils</>,
};
