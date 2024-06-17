var simplemaps_countrymap_mapdata = {
  main_settings: {
    // 기본 세팅
    width: "800", //'800' or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#000000",

    // State defaults
    state_description: "",
    state_color: "#ffffff",
    state_hover_color: "#a1c488",
    state_url: "",
    border_size: 1.5,
    all_states_inactive: "no",
    all_states_zoomable: "yes",

    // Location defaults
    location_description: "Location description",
    location_url: "",
    location_color: "#ff0067",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_size: 50,
    location_type: "marker",
    location_image_source: "frog.png",
    location_border_color: "#ff0067",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",

    // Label defaults
    label_color: "#a1c488",
    label_hover_color: "#a1c488",
    label_size: 16,
    label_font: "Arial",
    label_display: "all",
    label_scale: "yes",
    hide_labels: "yes", // Labels 미사용 설정
    hide_eastern_labels: "no",

    // Zoom settings
    zoom: "yes",
    manual_zoom: "no", // 수동 Zoom 방지 : 해당 지역 클릭 시에만 zoom 가능
    back_image: "no",
    initial_back: "no",
    initial_zoom: "-1",
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,

    //Popup settings
    popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "yes",

    //Advanced settings
    div: "map",
    auto_load: "yes",
    url_new_tab: "no",
    images_directory: "default",
    fade_time: 0.1,
    link_text: "View Website",
    popups: "on_click",
    state_image_url: "",
    state_image_position: "",
    location_image_url: "",
    popup_centered: "auto"
  },
  // State Specific
  state_specific: {
    KR11: {
      name: `<h4 class="black-han-sans-regular" style="text-align:center; padding-top:10px">서울</h4>`
    },
    KR26: {
      name: `<h4 class="black-han-sans-regular" style="text-align:center; padding-top:10px">부산</h4>`,
      description: `<div class="gowun-dodum-regular">📽️ 부산국제영화제</div>`
    },
    KR27: {
      name: `<h4 class="black-han-sans-regular" style="text-align:center; padding-top:10px">대구</h4>`
    },
    KR28: {
      name: `<h4 class="black-han-sans-regular" style="text-align:center; padding-top:10px">인천</h4>`
    },
    KR29: {
      name: `<h4 class="black-han-sans-regular" style="text-align:center; padding-top:10px">광주</h4>`
    },
    KR30: {
      name: `<h4 class="black-han-sans-regular" style="text-align:center; padding-top:10px">대전</h4>`
    },
    KR31: {
      name: `<h4 class="black-han-sans-regular" style="text-align:center; padding-top:10px">울산</h4>`
    },
    KR41: {
      name: `<h4 class="black-han-sans-regular" style="text-align:center; padding-top:10px">경기도</h4>`,
      description: `<div class="gowun-dodum-regular">📽️ 부천국제판타스틱영화제</div>`
    },
    KR42: {
      name: `<h4 class="black-han-sans-regular" style="text-align:center; padding-top:10px">강원도</h4>`
    },
    KR43: {
      name: `<h4 class="black-han-sans-regular" style="text-align:center; padding-top:10px">충청북도</h4>`
    },
    KR44: {
      name: `<h4 class="black-han-sans-regular" style="text-align:center; padding-top:10px">충청남도</h4>`
    },
    KR45: {
      name: `<h4 class="black-han-sans-regular" style="text-align:center; padding-top:10px">전라북도</h4>`,
      description: `<div class="gowun-dodum-regular">📽️ 전주국제영화제</div>`
    },
    KR46: {
      name: `<h4 class="black-han-sans-regular" style="text-align:center; padding-top:10px">전라남도</h4>`
    },
    KR47: {
      name: `<h4 class="black-han-sans-regular" style="text-align:center; padding-top:10px">경상북도</h4>`
    },
    KR48: {
      name: `<h4 class="black-han-sans-regular" style="text-align:center; padding-top:10px">경상남도</h4>`
    },
    KR49: {
      name: `<h4 class="black-han-sans-regular" style="text-align:center; padding-top:10px">제주도</h4>`
    },
    KR50: {
      name: `<h4 class="black-han-sans-regular" style="text-align:center; padding-top:10px">세종</h4>`
    }
  },
  // locations : 해당 지역의 특정 위치 (ex: 전북의 '전주', 경남의 '부산')
  locations: {
    // 부산 : 부산국제영화제
    "0": {
      lat: "35.1798",
      lng: "129.075",
      name: `<h4 class="black-han-sans-regular tt_name_sm">부산국제영화제</h4>`,
      description:
        `<div class="tt_custom_sm">
      <img src="/images/poster_BIFF.jpg" style="width: 40%;">
      </div>
      <div class="tt_sm gowun-dodum-regular">부산국제영화제는 1996년 9월 13일 제1회를 시작한, 대한민국 최대의 비경쟁 영화제입니다.
      <br>대한민국을 넘어 아시아 전체를 대표하는 영화제로 자리 잡았으며, 부산광역시 해운대구 우동 센텀시티 일원에서 매년 10월 초에 개최되어 10일간 진행합니다. 
      <br>초청영화들은 장르에 구애되지 않고 다양하게 선정한다는 것이 부산국제영화제가 내세우는 상징성입니다. 
      즉 할리우드 제작 영화에서부터 칸·베를린·선댄스영화제 수상작, 애니메이션 외에도. 독립영화, 예술영화, 단편영화 등의 영화들도 초청의 대상입니다. 
      <br>이제는 70~80여개국에서 300여 편이 초청되고 6개로 시작한 상영관은 현재 최대 37개관까지 늘어났으며, 2011년 개관한 부산국제영화제 전용관 ‘영화의전당’은 부산의 랜드마크로 자리잡았습니다.
      </div>
      <div class="tt_mobile_sm">
      <button class="btn_simplemaps gowun-dodum-regular">
      <a href="https://www.biff.kr/kor/" target="_blank" style="text-decoration: none; color: #FFFFFF;">영화제 홈페이지로 이동</a>
      </button>`
    },
    // 전주 : 전주국제영화제
    "1": {
      lat: "35.80918889",
      lng: "127.1219194",
      name: `<h4 class="black-han-sans-regular tt_name_sm">전주국제영화제</h4>`,
      description:
        `<div class="tt_custom_sm">
      <img src="/images/poster_JIFF.jpg" style="width: 40%;">
      </div>
      <div class="tt_sm gowun-dodum-regular">
      2000년, 부분 경쟁을 도입한 비경쟁 영화제로 출범한 전주국제영화제는 국제영화제의 지형에서 독특한 위치를 점해 왔습니다. 
      <br>전주의 모토는 동시대 영화 예술의 대안적 흐름과 독립•실험영화의 최전선에 놓인 작품들을 소개하는 것입니다. 미래 영화의 주역이 될 수 있는 재능의 발굴, 창의적인 실험과 독립정신을 지지하며, 전 세계 영화작가들이 만나고 연대하는 기회를 제공합니다.
      <br>장편 제작•투자 프로그램인 전주시네마프로젝트(JCP)는 투자•제작•배급 등 영화산업 제반 영역을 아우르는 전주의 독자적 브랜드로 입지를 굳히고 있습니다. 
      <br>이 밖에도 국내 우수 극영화 및 다큐멘터리 기획 개발을 지원하는 전주프로젝트마켓, 독립영화 콘텐츠 유통을 위한 판권배급사업, 전주디지털독립영화관의 운영은 페스티벌을 넘어 상시적이고 새로운 부가가치를 창출하는 전주만의 비전입니다.
      </div>
      <div class="tt_mobile_sm">
      <button class="btn_simplemaps gowun-dodum-regular">
      <a href="https://jeonjufest.kr/" target="_blank" style="text-decoration: none; color: #FFFFFF;">영화제 홈페이지로 이동</a>
      </button>
      </div>`
    },
    // 부천 : 부천국제판타스틱영화제
    "2": {
      lat: "37.5034138",
      lng: "126.7660309",
      name: `<h4 class="black-han-sans-regular tt_name_sm">부천국제판타스틱영화제</h4>`,
      description:
        `<div class="tt_custom_sm">
      <img src="/images/poster_BIFAN.png" style="width: 40%;">
      </div>
      <div class="tt_sm gowun-dodum-regular">
      BIFAN은 아시아 최대·최고의 장르영화제입니다. 시체스·토론토·사우스바이사우스웨스트·과달라하라(멕시코)·카이로·마카오 등과 함께 칸국제영화제 필름마켓(Marché du Film)이 주관하는 ‘판타스틱 7’ 프로그램의 일원이기도 합니다. 
      <br>또한 현재 부산국제영화제, 전주국제영화제와 함께 '대한민국의 3대 영화제' 중 하나로 일컬어지고 있습니다.
      <br>BIFAN은 유네스코 문학 창의도시 부천을 상징하는 영화 축제로, 영화와 만화, 애니메이션 등을 아우르는 영상문화의 메카이자 유네스코 문학 창의도시 부천을 상징하는 영화 축제입니다. 
      <br>국내외 영화 마니아들의 뜨거운 지지를 받으며 새로운 감성과 에너지로 무장한 가장 역동적인 영화제로 자리하고 있습니다.
      <br>BIFAN은 호러·스릴러·SF 등 세계 각지에서 모인 판타스틱 장르뿐만 아니라 코미디·로맨스·액션 영화 등을 소개하며 관객에게 다양한 영화를 감상할 수 있는 기회를 제공하는 데 역점을 두고 있습니다. 
      <br>부분 경쟁을 도입한 비경쟁 국제영화제로, 경쟁 부문인 장르 영화의 새로운 경향과 흐름을 짚어내는 ‘부천초이스’, 한국 장르 영화의 새로운 기운과 가능성을 만날 수 있는 ‘코리안 판타스틱’을 비롯해 BIFAN 마니아들이 가장 선호하는 ‘월드판타스틱-레드’와 ‘월드판타스틱-블루’, BIFAN의 시그니처 섹션인 ‘금지구역’ 등과 다양한 특별전 및 기획전을 갖고 있습니다. 
      <br>장르 영화 백서 시리즈 <호러영화> <SF영화> 등도 발간했습니다.
     </div>
     <div class="tt_mobile_sm">
     <button class="btn_simplemaps gowun-dodum-regular">
     <a href="https://www.bifan.kr/bifan/01_bifan.asp" target="_blank" style="text-decoration: none; color: #FFFFFF;">영화제 홈페이지로 이동</a>
     </button>`
    },
    // 서울 : 서울독립영화제
    "3": {
      lat: "37.527504867037",
      lng: "127.01790346016",
      name: `<h4 class="black-han-sans-regular tt_name_sm">서울독립영화제</h4>`,
      description:
        `<div class="tt_custom_sm">
      <img src="/images/poster_SIFF.jpg" style="width: 40%;">
      </div>
      <div class="tt_sm gowun-dodum-regular">
      한국영화의 가능성을 넓혀 가는 독립영화를 지원하고 현주소를 조망하는 장으로서 서울독립영화제는 ‘한국영화의 새로운 도전’을 메인슬로건으로 선정했습니다. 
      <br>1999년 영화진흥위원회와 (사)한국독립영화협회가 영화제의 변화 의지를 담은 초기 슬로건으로서 그 목표는 지금도 유효합니다. 독립영화는 영화 운동의 도도한 물결을 넘고 다양한 실천과 미학적 실험을 거쳐 영화의 미래를 확장하고 있습니다. 
      <br>서울독립영화제와 함께 한국영화의 새로운 도전은 오늘도 계속됩니다.
      <br>서울독립영화제는 한 해 동안 만들어진 다양한 독립영화들을 아우르고 재조명하는 국내 경쟁 독립영화제입니다. 극, 실험, 다큐멘터리, 애니메이션 등 다양한 독립영화를 주제, 형식, 장르에 구분 없이 공모하여 시상합니다. 새로운 독립영화를 발굴할 뿐 아니라 별도의 초청 섹션을 통해 독립영화의 다양한 경향을 소개하며 한 해의 독립영화를 결산하고자 하는 목료를 가지고 있습니다.
      <br>동시대 독립영화인들이 한자리에서 모임으로써 독립영화의 시대정신과 비전을 찾고자 합니다. 감독, 배우, 스태프 등 다양한 영역에서 활동하는 영화인과 독립영화를 사랑하는 관객들의 참여를 이끌어 내고 있습니다.
     </div>
     <div class="tt_mobile_sm">
     <button class="btn_simplemaps gowun-dodum-regular">
     <a href="https://siff.kr/" target="_blank" style="text-decoration: none; color: #FFFFFF;">영화제 홈페이지로 이동</a>
     </button>`
    }
  },
  // Labels : 지역명 라벨
  labels: {
    KR11: {
      name: "서울",
      parent_id: "KR11"
    },
    KR26: {
      name: "부산",
      parent_id: "KR26"
    },
    KR27: {
      name: "대구",
      parent_id: "KR27"
    },
    KR28: {
      name: "인천",
      parent_id: "KR28"
    },
    KR29: {
      name: "광주",
      parent_id: "KR29"
    },
    KR30: {
      name: "대전",
      parent_id: "KR30"
    },
    KR31: {
      name: "울산",
      parent_id: "KR31"
    },
    KR41: {
      name: "경기도",
      parent_id: "KR41"
    },
    KR42: {
      name: "강원도",
      parent_id: "KR42"
    },
    KR43: {
      name: "충청북도",
      parent_id: "KR43"
    },
    KR44: {
      name: "충청남도",
      parent_id: "KR44"
    },
    KR45: {
      name: "전라북도",
      parent_id: "KR45"
    },
    KR46: {
      name: "전라남도",
      parent_id: "KR46"
    },
    KR47: {
      name: "경상북도",
      parent_id: "KR47"
    },
    KR48: {
      name: "경상남도",
      parent_id: "KR48"
    },
    KR49: {
      name: "제주도",
      parent_id: "KR49"
    },
    KR50: {
      name: "세종",
      parent_id: "KR50"
    }
  },
  legend: {
    entries: []
  },
  regions: {}
};