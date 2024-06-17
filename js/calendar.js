document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        initialDate: '2024-06-20',
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth'
        },
        events: [
            {
                title: '부산국제영화제',
                start: '2023-10-04',
                end: '2023-10-13',
                url: 'https://www.biff.kr/kor/'
            },
            {
                title: '전주국제영화제',
                start: '2024-05-01',
                end: '2024-05-10',
                url: 'https://jeonjufest.kr/'
            },
            {
                title: '부천국제판타스틱영화제',
                start: '2024-07-04',
                end: '2024-07-12',
                url: 'https://www.bifan.kr/bifan/01_bifan.asp'
            },
            {
                title: '서울독립영화제',
                start: '2024-11-28',
                end: '2024-12-06',
                url: 'https://siff.kr/'
            }
        ]
    });

    calendar.render();
});