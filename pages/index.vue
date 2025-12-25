<style>
  @import url("/assets/css/style.css");
</style>

<script setup>
  import { get_cources } from '~/utils/cources';
  const cources = get_cources();
</script>

<script>
  function testing (strA, strB) {
    // сравнение побуквенное
    let count = 0
    for (let i = 0; i < strA.length; i ++) {
      for (let j = 0; j < strB.length; j++) {
        if (strA[i] === strB[j]) {
          count ++
        }
      }
    }
    console.log('statka',count)
    return count
  }
  export default {
    data() {
		  return {
        // Фильтры по стоимости
			  _only_free: false,
        _only_buy: false,
        _all: true,
        
        // значение поискового запроса
        searchValue: '',

        cources: get_cources(),

        // после поиска по слову
        returned_list: [],

        /* не развёрнутые фильтры */
        unexpanded_list_of_filters: [
          { id: 1, data: 'ДПИ и ремесла'},
          { id: 2, data: 'Техническое конструирование'},
          { id: 3, data: 'Словесность'},
          { id: 4, data: 'Иностранные языки'},
          { id: 5, data: 'Развитие интеллекта'},
          { id: 6, data: 'Информационные технологии'},
          { id: 7, data: 'История и Традиции'},
          { id: 8, data: 'Педагогика'},
          { id: 9, data: 'Музыка и звук'},
          { id: 10, data: 'Пение'},
          { id: 11, data: 'Хореография(танцы)'},
          { id: 12, data: 'Зрелищные искусства'},
          { id: 13, data: 'Мода и стиль'},
          { id: 14, data: 'Познавательные развлечения'},
          { id: 15, data: 'Туризм'},
          { id: 16, data: 'Естественные науки'},
          { id: 17, data: 'Люди и животные'},
          { id: 18, data: 'Эстетические виды спорта'},
          { id: 19, data: 'Технические виды спорта'},
          { id: 20, data: 'Командно-игровой спорт'},
          { id: 21, data: 'Индивидуально игровой спорт'},
          { id: 22, data: 'Водные виды спорта'},
          { id: 23, data: 'Лёгкая атлетика и гимнастика'},
          { id: 24, data: 'Физкультура'}
        ]
		  }
	  },
    methods: {
      set_only_free() {
        this._only_free = true;
        this._only_buy = false;
        this._all = false;
      },
      set_only_buy() {
        this._only_free = false;
        this._only_buy = true;
        this._all = false;
      },
      set_all()
      {
        this._only_free = false;
        this._only_buy = false;
        this._all = true;
      },

      inputSearch (event)
      {
        this.searchValue = event.target.value
      }
	  },
    computed: {
      // Вычисляемое свойство для фильтрации
      filteredItems() {
        if (this.searchValue === '' || this.searchValue === ' ') {
          this.returned_list.length = 0
          return this.cources // если поисковый запрос пустой, возвращаем все элементы
        }
        else {
          for (let i = 0; i < this.cources.length; i++) {
            /*
            if (this.cources[i].first_name === this.searchValue) {
              this.returned_list.push(this.cources[i])
            }*/
            if (testing(this.searchValue,this.cources[i].first_name) > 3) {
              this.returned_list.push(this.cources[i])
            }
          }
          return this.returned_list
        }
      },
    }
  }
</script>

<template>
  <div class="big_div">
    <!-- Заголовок страницы -->
    <header>
      <div style="display: flex;" class="head_text_div">
        <img src="/public/images/header_image_1.svg">
        <span style="text-decoration-line: none;" class="head_text">KidsConnect</span>
      </div>
    </header>
    
    <!-- Основная часть страницы-->
    <div class="base">
      <!--nav-->
      <div class="div_navigation">
        <div>
          <input 
            class="input-container" 
            type="text" 
            placeholder="Поиск"
            
            v-on:input="inputSearch"
          >
          
          <div class="segmented-control">
            <button class="segment active" data-filter="all" v-on:click="set_all">Все</button>
            <button class="segment" data-filter="paid" v-on:click="set_only_buy">Платные</button>
            <button class="segment" data-filter="free" v-on:click="set_only_free">Бесплатные</button>
          </div>
        </div>

        <button class="on_map_button">
          На карте
          <img src="/public/images/navigation/on_map_1.svg" alt="На карте">
        </button>
      </div>

      <!--main part-->
      <div class="main_container">
        <main>
          <div class="filter_1_on_main">Силовой спорт</div>
         
          <ul class="cells_ul">
            <li class="cells_li" v-for="course_i in filteredItems" :key="course_i.id">

              <!-- delitel -->
              <div class="filter_1_on_main" v-if="course_i.id === 4 || course_i.id === 6 || course_i.id === 8">Единоборства</div>

              <!-- only free -->
              <span v-if="_only_free === true">
                <span v-if="course_i.price === 'Бесплатно'">
                  <CourseCard :cource="course_i"/>
                </span>
              </span>

              <!-- only bue -->
              <span v-if="_only_buy === true">
                <span v-if="course_i.price !== 'Бесплатно'">
                  <CourseCard :cource="course_i"/>
                </span>
              </span>

              <!-- all -->
              <span v-if="_all === true">
                <CourseCard :cource="course_i"/>
              </span>

            </li>
          </ul>
        </main>

        <!-- Боковая панель -->
        <aside>
          <!-- заголовок -->
          <div class="aside_header_123123">
            Фильтры
          </div>

          <!-- Основной блок -->
          <div class="main_aside_block">
            
            <!-- Возраст -->
            <div class="param_age">Возраст</div>
            
            <!-- Любой -->
            <div style="padding: 0px 10px 10px 10px; border-radius: 5px; border-bottom: 1px solid #70232F;">
              <div class="param_Lyuboy">
                <span>Любой</span>

                <img src="/public/images/filtres/arrow_down.svg" alt="arrow down">
              </div>
            </div>

            <!-- Пол -->
            <div style="margin-top: 15px;">
              <div class="param_pol_head_text">Пол</div>
              <div>
                <!-- МУЖ -->
                <span>
                  <input class="param_pol_checkBox" type="checkbox">
                  <span class="param_pol_text">Мужской</span>
                </span>
                <!-- ЖЕН -->
                <span style="margin-left: 20px;">
                  <input class="param_pol_checkBox" type="checkbox">
                  <span class="param_pol_text">Женский</span>
                </span>
              </div>
            </div>

            <!-- Каталог -->
            <div style="margin-top: 15px;" class="param_pol_head_text">
              Каталог
            </div>

            <!-- Силовой спорт -->
            <div class="param_uneversalBOX">
              <div>
                <span>Силовой спорт</span>
                <span style="margin-left: 10px;">3</span>
              </div>

              <img src="/public/images/filtres/arrow_up.svg" alt="arrow up">
            </div>

            <ul class="param_ul">
              <li style="margin-bottom: 5px;">
                <span>Тяжелая атлетика</span>
                <span style="margin-left: 10px;">3</span>
              </li>
              <li>
                <span>Пауэрлифтинг</span>
                <span style="margin-left: 10px;">1</span>
              </li>
            </ul>

            <!-- Единоборства -->
            <div class="param_uneversalBOX">
              <div>
                <span>Единоборства</span>
                <span style="margin-left: 10px;">2</span>
              </div>

              <img src="/public/images/filtres/arrow_up.svg" alt="arrow up">
            </div>

            <ul class="param_ul">
              <li style="margin-bottom: 5px;">
                <span>Вольная борьба</span>
                <span style="margin-left: 10px;">1</span>
              </li>
              <li>
                <span>Дзюдо</span>
                <span style="margin-left: 10px;">1</span>
              </li>
            </ul>

            <!-- ДПИ и ремесла -->
            <ul style="list-style-type: none; padding: 0px;">
              <li v-for="item in unexpanded_list_of_filters" :key="item.id">
                <div class="param_uneversalBOX">
                  <div>{{ item.data }}</div>

                  <img src="/public/images/filtres/arrow_down.svg" alt="arrow up">
                </div>
              </li>
            </ul>

            

          </div>
        </aside>
      </div>

    </div>

  </div>
</template>
