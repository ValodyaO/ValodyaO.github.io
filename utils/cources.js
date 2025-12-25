const smena_1 = '09:00 - 10:30'
const smena_2 = '12:00 - 13:30'
const smena_3 = '18:00 - 19:30'

const ico_none = 'none'
const ico_light_athlet = 'light_atlet'

const cources = ref([
    { 
        // Лёгкая атлетика
        id: 0, 
        hide_tag: 'Silovoy sport',
        first_name: 'Лёгкая атлетика',
        last_name: '(в Юбилейном мкр.)',
        tag: '#Лёгкая атлетика',
        ages: '10-18 лет',
        city: 'г. Иркутск, Юбилейный мкр., стр. 49/1',
        place: 'ФОК “Юбилейный”',
        times: [
            { id: 1, data: '08:00 - 10:00' },
            { id: 2, data: '18:00 - 19:30' }
        ],
        first_learn: false,
        price: 'Бесплатно',
        // dinamic page
        icon: ico_light_athlet,
        teacher: 'Петрова Елена Александровна',
        count_practicant: 15,
        max_practicant: 20,
        duration: '12 месяцев',
        descr: 'Легкая атлетика - олимпийский вид спорта, объединяющий беговые виды, спортивную ходьбу , технические виды (прыжки и метания), многоборья, пробеги (бег по шоссе), кроссы (бег по пересеченной местности).',
        descr_programm: 'light_atlet'
    },
    { 
        // заполнены другие данные
        id: 1, 
        hide_tag: 'Silovoy sport',
        first_name: 'Тяжелая атлетика',
        last_name: '(на ул. Боткина)',
        tag: '#Тяжелая атлетика',
        ages: '10-18 лет',
        city: 'г. Иркутск, Юбилейный мкр., стр. 49/1',
        place: 'ФОК “Юбилейный”',
        times: [
            { id: 1, data: smena_1 },
            { id: 2, data: smena_2 }
        ],
        first_learn: true,
        price: '500 руб',
        // dinamic page
        icon: ico_none,
        teacher: 'Петров Александр Сергеевич',
        count_practicant: 10,
        max_practicant: 20,
        duration: '6 месяцев',
        descr: 'Тяжелая атлетика',
        descr_programm: 'hevy_atlet'
    },
    {
        id: 2, 
        hide_tag: 'Silovoy sport',
        first_name: 'Тяжелая атлетика',
        last_name: '(на ул. Норильской)',
        tag: '#Тяжелая атлетика',
        ages: '10-18 лет',
        city: 'г. Иркутск, Юбилейный мкр., стр. 49/1',
        place: 'ФОК “Юбилейный”',
        times: [
            { id: 1, data: smena_1 },
            { id: 2, data: smena_2 },
            { id: 3, data: smena_3 }
        ],
        first_learn: true,
        price: '3200 руб. 8 занятий',
        // dinamic page
        icon: ico_none,
        teacher: '',
        count_practicant: '',
        max_practicant: '',
        duration: '',
        descr: '',
        descr_programm: ''
    },
    {
        id: 3, 
        hide_tag: 'Silovoy sport',
        first_name: 'Пауэрлифтинг',
        last_name: '',
        tag: '#Пауэрлифтинг',
        ages: '10-18 лет',
        city: 'г. Иркутск, Юбилейный мкр., стр. 49/1',
        place: 'ФОК “Юбилейный”',
        times: [
            { id: 1, data: smena_1 },
            { id: 2, data: smena_2 },
            { id: 3, data: smena_3 }
        ],
        first_learn: false,
        price: 'Бесплатно',
        // dinamic page
        icon: ico_none,
        teacher: '',
        count_practicant: '',
        max_practicant: '',
        duration: '',
        descr: '',
        descr_programm: ''
    },
    {
        id: 4, 
        hide_tag: 'Edinoborstvo',
        first_name: 'Дзюдо',
        last_name: '',
        tag: '#Дзюдо',
        ages: '6-18 лет',
        city: 'г Иркутск, ул Трудовая, д 115А',
        place: 'СК "Вымпел"',
        times: [
            { id: 1, data: smena_1 },
            { id: 2, data: smena_2 },
            { id: 3, data: smena_3 }
        ],
        first_learn: false,
        price: 'Бесплатно',
        // dinamic page
        icon: ico_none,
        teacher: '',
        count_practicant: '',
        max_practicant: '',
        duration: '',
        descr: '',
        descr_programm: ''
    },
    {
        id: 5, 
        hide_tag: 'Edinoborstvo',
        first_name: 'Вольная борьба',
        last_name: '(на ул. Норильская)',
        tag: '#Дзюдо',
        ages: '6-18 лет',
        city: 'г Иркутск, ул Трудовая, д 115А',
        place: 'СК "Вымпел"',
        times: [
            { id: 1, data: smena_1 },
            { id: 2, data: smena_2 },
            { id: 3, data: smena_3 }
        ],
        first_learn: true,
        price: '3200 руб. месяц',
        // dinamic page
        icon: ico_none,
        teacher: '',
        count_practicant: '',
        max_practicant: '',
        duration: '',
        descr: '',
        descr_programm: ''
    },
    {
        id: 6, 
        hide_tag: 'Edinoborstvo',
        first_name: 'Дзюдо',
        last_name: '',
        tag: '#Дзюдо',
        ages: '6-18 лет',
        city: 'г Иркутск, ул Трудовая, д 115А',
        place: 'СК "Вымпел"',
        times: [
            { id: 1, data: smena_1 },
            { id: 2, data: smena_2 },
            { id: 3, data: smena_3 }
        ],
        first_learn: false,
        price: 'Бесплатно',
        // dinamic page
        icon: ico_none,
        teacher: '',
        count_practicant: '',
        max_practicant: '',
        duration: '',
        descr: '',
        descr_programm: ''
    },
    {
        id: 7, 
        hide_tag: 'Edinoborstvo',
        first_name: 'Дзюдо',
        last_name: '',
        tag: '#Дзюдо',
        ages: '6-18 лет',
        city: 'г Иркутск, ул Трудовая, д 115А',
        place: 'СК "Вымпел"',
        times: [
            { id: 1, data: smena_1 },
            { id: 2, data: smena_2 },
            { id: 3, data: smena_3 }
        ],
        first_learn: false,
        price: '3200 руб. месяц',
        // dinamic page
        icon: ico_none,
        teacher: '',
        count_practicant: '',
        max_practicant: '',
        duration: '',
        descr: '',
        descr_programm: ''
    },
    {
        id: 8, 
        hide_tag: 'Edinoborstvo',
        first_name: 'Дзюдо',
        last_name: '',
        tag: '#Дзюдо',
        ages: '6-18 лет',
        city: 'г Иркутск, ул Трудовая, д 115А',
        place: 'СК "Вымпел"',
        times: [
            { id: 1, data: smena_1 },
            { id: 2, data: smena_2 },
            { id: 3, data: smena_3 }
        ],
        first_learn: false,
        price: 'Бесплатно',
        // dinamic page
        icon: ico_none,
        teacher: '',
        count_practicant: '',
        max_practicant: '',
        duration: '',
        descr: '',
        descr_programm: ''
    },
    {
        id: 9, 
        hide_tag: 'Edinoborstvo',
        first_name: 'Вольная борьба',
        last_name: '(на ул. Норильская)',
        tag: '#Дзюдо',
        ages: '6-18 лет',
        city: 'г Иркутск, ул Трудовая, д 115А',
        place: 'СК "Вымпел"',
        times: [
            { id: 1, data: smena_1 },
            { id: 2, data: smena_2 },
            { id: 3, data: smena_3 }
        ],
        first_learn: true,
        price: '3200 руб. месяц',
        // dinamic page
        icon: ico_none,
        teacher: '',
        count_practicant: '',
        max_practicant: '',
        duration: '',
        descr: '',
        descr_programm: ''
    }
    
])

export const get_cources = () => {
    return cources;
}