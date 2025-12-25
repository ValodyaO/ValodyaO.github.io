<script setup>
    const { cource } = defineProps(['cource'])
</script>

<template>
    <div class="cell">
        <div class="sub_cell">
            <!-- Immage -->
            <div style="padding: 14.23px;">
                <img v-if="cource.icon === 'none'" src="/public/images/cell/preview_1.svg" alt="preview">
                <img v-if="cource.icon === 'light_atlet'" src="/public/images/cell/light_atlet.png" alt="preview">
            </div>

            <!-- Data -->
            <div style="margin-left: 10px; width: 100%;">
                <!-- header -->
                <div class="cell_head">
                    <span style="font-family: 'Montserrat'; font-weight: 600; font-size: 16px;">
                        {{ cource.first_name }} <br/>
                        {{ cource.last_name }}
                    </span>
                    
                    <span>
                        <span v-if="cource.first_learn === true" class="first_learn">
                            Первое бесплатно
                        </span>
                        <span class="cost">
                            {{ cource.price }}
                        </span>
                    </span>
                </div>
                <!-- body -->
                <div class="cell_body">
                    <div style="margin-right: 10px;">
                        <!-- tag -->
                        <div style="font-family: 'Montserrat'; font-weight: 400; font-size: 14px; color: #D86B79;">
                            {{ cource.tag }}
                        </div>
                        <!-- age -->
                        <div class="mini_container_li">
                            <img src="/public/images/cell/mini_icons/age_icon.svg" alt="age">
                            <span style="margin-left: 10px;"> {{ cource.ages }} </span>
                        </div>
                        <!-- city -->
                        <div class="mini_container_li">
                            <img src="/public/images/cell/mini_icons/sity_icon.svg" alt="sity">
                            <span style="margin-left: 10px;"> {{ cource.city }} </span>
                        </div>
                        <!-- place -->
                        <div class="mini_container_li">
                            <img src="/public/images/cell/mini_icons/place_icon.svg" alt="place">
                            <span style="margin-left: 10px;"> {{ cource.place }} </span>
                        </div>
                        <!-- time -->
                        <div class="mini_container_li_TIME">
                            <img src="/public/images/cell/mini_icons/time_icon.svg" alt="time">

                            <span style="margin-left: 10px;">Пн, СР, Пт</span>

                            <ul class="ul">
                                <li class="li" v-for="item in cource.times" :key="item.div">
                                    <span class="times">
                                        {{ item.data }}
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <!-- Button Details -->
                    <div style="display: flex; flex-direction: column; justify-content: flex-end;">
                        <NuxtLink :to="`/CourseCard/course-${cource.id}`">
                            <button class="details_button">
                                <span class="details_button_ref">Подробнее</span>
                            </button>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.cell {
    border-radius: 5px;
    border-top: 3px solid #70232F; /* Толщина 3px, сплошная, цвет #70232F */
    background-color: #FFFFFF;

    padding: 20px;
    margin-bottom: 20px;
    margin-right: 20px;
}
.sub_cell {
    display: flex; 
    justify-content: space-between; 
    width: 100%;
}

/* ======== CELL HEADER ======== */
/* здесь заголовок */
.cell_head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}
.first_learn {
    padding: 5px 15px 5px 15px;

    border-radius: 5px;
    border: 1px solid #D86B79;

    font-family: 'Montserrat';
    font-weight: 600;
    font-size: 12px;
}
.cost {
    padding: 5px 15px 5px 15px;
    margin-left: 20px;

    border-radius: 5px;
    border: 1px solid #D86B79;
    background-color: #D86B79;
    color: white;

    font-family: 'Montserrat';
    font-weight: 500;
    font-size: 12px;
}

/* ======== CELL BODY ======== */
/* Здесь будет информация */
.cell_body {
    margin-top: 10px;

    display: flex; 
    justify-content: space-between;
    width: 100%;
}

/* СПИСОК */
.mini_container_li {
    margin-top: 10px;

    font-family: 'Montserrat';
    font-weight: 400;
    font-size: 16px;

    display: flex;
    align-items: center;
}
.mini_container_li_TIME {
    margin-top: 10px;

    font-family: 'Montserrat';
    font-weight: 500;
    font-size: 16px;

    display: flex;
    align-items: center;
}
.ul{
    list-style: none; 
    padding: 0; 
    margin: 0;
}
.li {
    display: inline-block; 
    margin-left: 10px;
}
.times {
    margin-left: 10px;

    border-radius: 5px;
    padding: 4px 20px 4px 20px;

    background-color: #F7DAAB;

    font-family: 'Montserrat';
    font-weight: 400;
    font-size: 14px;

    display: flex;
}

/* КНОПКА ПОДРОБНО */
.details_button {
    cursor: pointer;

    border: none;
    border-radius: 5px;

    padding: 10px 20px 10px 20px;
    background-color: #70232F;
    transition: background-color 0.3s ease; /* Плавный переход цвета фона за 0.3 секунды */
    /*border: #70232F;*/
}
.details_button:hover {
    background-color: #D86B79; /* Новый цвет при наведении */
}

.details_button_ref {
    font-family: 'Montserrat';
    font-weight: 500;
    font-size: 14px;
    /*text-decoration: none;*/

    color: #FFFFFF;
}

</style>