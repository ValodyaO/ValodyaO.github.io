<style>
  @import url("/assets/css/dinaminPage.css");
</style>

<script setup>
    const { id } = useRoute().params

    import { get_cources } from '~/utils/cources'
    const cources = get_cources()
</script>

<template>
    <!-- BIG DIV-->
    <div class="big_div">
        <!-- Header -->
        <header>
            <img src="/public/images/header_image_2.svg" alt="header image">
            <p class="header_text">KidsConnect</p>
        </header>

        <!--Main block-->
        <div class="main_block">
            
            <!-- Кнопки навигации -->
            <nav style="margin-bottom: 20px;">
                <!-- Back button -->
                <NuxtLink style="text-decoration: none;" to="/">
                    <button  class="button_back">
                        <img src="/public/images/filtres/arrow_left.svg" alt="back button">
                        <span class="button_font">Назад</span>
                    </button>
                </NuxtLink>
                
                <!-- On map -->
                <div class="button_on_map">
                    <div class="button_font">На карте</div>
                    <img style="margin-left: 10px;" src="/public/images/navigation/on_map_1.svg" alt="back button">
                </div>
            </nav>

            <!-- Заголовок тела -->
            <div>
                <!-- title text -->
                <div class="title_font">
                    {{ cources[id].first_name }} {{ cources[id].last_name }}
                </div>

                <!-- title card -->
                <div class="title_card">
                    <!-- Immage -->
                    <div>
                        <img v-if="cources[id].icon === 'none'" src="/public/images/cell/preview_1.svg" alt="preview">
                        <img v-if="cources[id].icon === 'light_atlet'" src="/public/images/cell/light_atlet.png" alt="preview">
                    </div>

                    <!-- info -->
                    <div style="margin-left: 35px; width: 100%;">
                        <!-- верхняя часть -->
                        <div class="centrovka">
                            <span class="title_nabor_otcrit">Набор открыт</span>
                            <span class="title_cost">{{ cources[id].price }}</span>
                        </div>

                        <!-- информация по середине -->
                        <div class="title_info">
                            <!-- age -->
                            <div class="title_info_box"> 
                                <img src="/public/images/cell/mini_icons/age_icon.svg" alt="age">
                                <span style="margin-left: 10px;">{{ cources[id].ages }}</span>
                            </div>
                            <!-- city -->
                            <div class="title_info_box"> 
                                <img src="/public/images/cell/mini_icons/sity_icon.svg" alt="city">
                                <span style="margin-left: 10px;">{{ cources[id].city }}</span>
                            </div>
                            <!-- place -->
                            <div class="title_info_box"> 
                                <img src="/public/images/cell/mini_icons/place_icon.svg" alt="place">
                                <span style="margin-left: 10px;">{{ cources[id].place }}</span>
                            </div>
                        </div>

                        <!-- кнопка "Записаться" -->
                        <div style="margin-top: 51px; background-color: aqua;">
                            <span style="float: right;" class="tutle_zapisatsya_but">
                                Записаться
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- группы -->
            <div style="margin-top: 20px;" class="title_card">
                <div style="display: flex;">
                    
                    <!-- группы -->
                    <div style="width: 392px;">
                        <div class="group_theme_text">ГРУППЫ</div>
                        <div class="group_etapi_podgotovki">Этап начальной подготовки</div>

                        <!-- учитель -->
                        <div class="group_info_box"> 
                            <img src="/public/images/cell/mini_icons/incon_teacher.svg" alt="teacher">
                            <span style="margin-left: 10px;">{{ cources[id].teacher }}</span>
                        </div>

                        <!-- количество участников -->
                        <div class="group_info_box"> 
                            <img src="/public/images/cell/mini_icons/icon_practicants_count.svg" alt="practicants count">
                            <span style="margin-left: 10px;">{{ cources[id].count_practicant }} из {{ cources[id].max_practicant }}</span>
                        </div>

                        <!-- продолжительность обучения -->
                        <div class="group_info_box"> 
                            <img src="/public/images/cell/mini_icons/icon_duration.svg" alt="duration">
                            <span style="margin-left: 10px;">{{ cources[id].duration }} </span>
                        </div>
                    </div>

                    <!-- расписание занятий -->
                    <div>
                        <div class="group_theme_text">РАСПИСАНИЕ ЗАНЯТИЙ</div>
                        
                        <div class="group_info_box">
                            <img src="/public/images/cell/mini_icons/time_icon.svg" alt="times">
                            <span style="margin-left: 10px;"> Пн, Вт, Чт, Сб </span>
                        </div>

                        <!-- time -->
                        <div class="mini_container_li_TIME">
                            <img src="/public/images/cell/mini_icons/time_icon.svg" alt="time">

                            <span style="margin-left: 10px;" class="group_info_box"> Пн, Вт, Чт, Сб </span>

                            <ul class="ul">
                                <li class="li" v-for="item in cources[id].times" :key="item.div">
                                    <span class="times">
                                        {{ item.data }}
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Описание -->
            <div style="margin-top: 20px;" class="title_card">
                <div >
                    <div class="group_theme_text">ОПИСАНИЕ</div>

                    <p class="descr_p">{{ cources[id].descr }}</p>
                </div>
            </div>

            <!-- Содержание программы -->
            <div style="margin-top: 20px;" class="title_card">
                <div style="width: 100%;">
                    <!-- Оглавление -->
                    <div class="centrovka">
                        <span class="group_theme_text">СОДЕРЖАНИЕ ПРОГРАММЫ</span>
                        <img src="/public/images/filtres/arrow_up.svg" alt="arrow up">
                    </div>

                    <!-- Базовый уровень -->
                    <div>
                        <!-- head -->
                        <div class="centrovka">
                            <span class="sodprog_text_h2">Базовый уровень</span>
                            <img src="/public/images/filtres/arrow_up.svg" alt="arrow up">
                        </div>

                        <!-- базовый уровень -->
                        <div 
                            v-if="cources[id].descr_programm === 'light_atlet'" 
                            style="margin-top: 10px;
                            margin-left: 10px;
                            ">
                            
                            <p class="sodprog_main_text">Базовый уровень сложности первый-второй год обучения, 252 часа.</p>
                            <ul class="sodprog_ul">
                                <li class="sodprog_main_text">Обязательные предметы области (количество часов – 15);</li>
                                <li class="sodprog_main_text">Вариативные предметные области (количество часов −10);</li>
                                <li class="sodprog_main_text">Теория (количество часов −5);</li>
                                <li class="sodprog_main_text">Практика (количество часов − 216);</li>
                                <li class="sodprog_main_text">Самостоятельная работа (количество часов −2);</li>
                                <li class="sodprog_main_text">Аттестация (количество часов − 4).</li>
                            </ul>
                            <p class="sodprog_main_text">Базовый уровень сложности третий-четвертый год обучения, 416 часов.</p>
                            <p class="sodprog_main_text">Обязательные предметы области (количество часов − 25);</p>
                            <ul class="sodprog_ul">
                                <li class="sodprog_main_text">Вариативные предметные области (количество часов − 15);</li>
                                <li class="sodprog_main_text">Теория (количество часов − 7);</li>
                                <li class="sodprog_main_text">Практика (количество часов − 361);</li>
                                <li class="sodprog_main_text">Самостоятельная работа (количество часов − 4);</li>
                                <li class="sodprog_main_text">Аттестация (количество часов − 4).</li>
                            </ul>
                            <p class="sodprog_main_text">Базовый уровень сложности пятый-шестой год обучения, 420 часов.</p>
                            <ul class="sodprog_ul">
                                <li class="sodprog_main_text">Обязательные предметы области (количество часов − 27);</li>
                                <li class="sodprog_main_text">Вариативные предметные области (количество часов − 15);</li>
                                <li class="sodprog_main_text">Теория (количество часов − 8);</li>
                                <li class="sodprog_main_text">Практика (количество часов − 360);</li>
                                <li class="sodprog_main_text">Самостоятельная работа (количество часов − 6);</li>
                                <li class="sodprog_main_text">Аттестация (количество часов − 4).</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Углублённый уровень -->
                    <div style="margin-top: 10px;">
                        <!-- head -->
                        <div class="centrovka">
                            <span class="sodprog_text_h2">Углубленный уровень</span>
                            <img src="/public/images/filtres/arrow_down.svg" alt="arrow up">
                        </div>

                        <!-- базовый уровень -->
                        <div 
                            v-if="cources[id].descr_programm === 'light_atlet'" 
                            style="margin-top: 10px;
                            margin-left: 10px;
                            ">
                            
                            <p class="sodprog_main_text">Углубленный уровень сложности первый-второй год обучения, 504.</p>
                            <ul class="sodprog_ul">
                                <li class="sodprog_main_text">Обязательные предметы области (количество часов − 30);</li>
                                <li class="sodprog_main_text">Вариативные предметные области (количество часов − 20);</li>
                                <li class="sodprog_main_text">Теория (количество часов − 9);</li>
                                <li class="sodprog_main_text">Практика (количество часов − 433);</li>
                                <li class="sodprog_main_text">Самостоятельная работа (количество часов − 8);</li>
                                <li class="sodprog_main_text">Аттестация (количество часов − 4).</li>
                            </ul>

                            <p class="sodprog_main_text">Углубленный уровень сложности третий-четвертый год обучения, 588 часов.</p>
                            <ul class="sodprog_ul">
                                <li class="sodprog_main_text">Обязательные предметы области (количество часов − 35);</li>
                                <li class="sodprog_main_text">Вариативные предметные области (количество часов − 23);</li>
                                <li class="sodprog_main_text">Теория (количество часов − 10);</li>
                                <li class="sodprog_main_text">Практика (количество часов − 506);</li>
                                <li class="sodprog_main_text">Самостоятельная работа (количество часов − 10);</li>
                                <li class="sodprog_main_text">Аттестация (количество часов − 4).</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
