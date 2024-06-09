var simplemaps_countrymap_mapdata={
  main_settings: {
   //General settings
    width: "700", //'700' or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#000000",
    
    //State defaults
    state_description: "State description",
    state_color: "#ffffff",
    state_hover_color: "#a1c488",
    state_url: "",
    border_size: 1.5,
    all_states_inactive: "no",
    all_states_zoomable: "yes",
    
    //Location defaults
    location_description: "Location description",
    location_url: "",
    location_color: "#ff0067",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_size: 25,
    location_type: "square",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
    //Label defaults
    label_color: "#ffffff",
    label_hover_color: "#ffffff",
    label_size: 16,
    label_font: "Arial",
    label_display: "auto",
    label_scale: "yes",
    hide_labels: "no",
    hide_eastern_labels: "no",
   
    //Zoom settings
    zoom: "yes",
    manual_zoom: "yes",
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
    popup_nocss: "no",
    
    //Advanced settings
    div: "map",
    auto_load: "yes",
    url_new_tab: "no",
    images_directory: "default",
    fade_time: 0.1,
    link_text: "View Website",
    popups: "detect",
    state_image_url: "",
    state_image_position: "",
    location_image_url: ""
  },
  state_specific: {
    KR11: {
      name: "서울"
    },
    KR26: {
      name: "부산",
      description: "부산 국제 영화제"
    },
    KR27: {
      name: "대구"
    },
    KR28: {
      name: "인천"
    },
    KR29: {
      name: "광주"
    },
    KR30: {
      name: "대전"
    },
    KR31: {
      name: "울산"
    },
    KR41: {
      name: "경기도"
    },
    KR42: {
      name: "강원도"
    },
    KR43: {
      name: "충청북도"
    },
    KR44: {
      name: "충청남도"
    },
    KR45: {
      name: "전라북도",
      description: "전주국제영화제"
    },
    KR46: {
      name: "전라남도"
    },
    KR47: {
      name: "경상북도"
    },
    KR48: {
      name: "경상남도"
    },
    KR49: {
      name: "제주도"
    },
    KR50: {
      name: "세종"
    }
  },
  locations: {
    "0": {
      lat: "35.1798",
      lng: "129.075",
      name: "부산국제영화제",
      description: "<img src=\"/images/poster_BIFF.jpg\" style=\"width: 50%;\">"
    },
    "1": {
      lat: "35.80918889",
      lng: "127.1219194",
      name: "전주국제영화제",
      description: "<img src=\"/images/poster_JIFF.jpg\" style=\"width: 50%;\">"
    }
  },
  labels: {
    KR11: {
      name: "Seoul",
      parent_id: "KR11"
    },
    KR26: {
      name: "Busan",
      parent_id: "KR26"
    },
    KR27: {
      name: "Daegu",
      parent_id: "KR27"
    },
    KR28: {
      name: "Incheon",
      parent_id: "KR28"
    },
    KR29: {
      name: "Gwangju",
      parent_id: "KR29"
    },
    KR30: {
      name: "Daejeon",
      parent_id: "KR30"
    },
    KR31: {
      name: "Ulsan",
      parent_id: "KR31"
    },
    KR41: {
      name: "Gyeonggi",
      parent_id: "KR41"
    },
    KR42: {
      name: "Gangwon",
      parent_id: "KR42"
    },
    KR43: {
      name: "North Chungcheong",
      parent_id: "KR43"
    },
    KR44: {
      name: "South Chungcheong",
      parent_id: "KR44"
    },
    KR45: {
      name: "North Jeolla",
      parent_id: "KR45"
    },
    KR46: {
      name: "South Jeolla",
      parent_id: "KR46"
    },
    KR47: {
      name: "North Gyeongsang",
      parent_id: "KR47"
    },
    KR48: {
      name: "South Gyeongsang",
      parent_id: "KR48"
    },
    KR49: {
      name: "Jeju",
      parent_id: "KR49"
    },
    KR50: {
      name: "Sejong",
      parent_id: "KR50"
    }
  },
  legend: {
    entries: []
  },
  regions: {}
};