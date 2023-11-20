<template>
  <div class="question">
    <div class="inner">
      <swiper v-bind="swiperOptions" :modules="modules" class="qSwiper">
        <swiper-slide v-for="(ask, index) in this.questionDB" :key="index">
          <figure>
            <img :src="ask.img" alt />
          </figure>
          <h4>{{ ask.question }}</h4>
          <div class="button-wrap">
            <button class="qButton" @click="addAnswer('a')">{{ ask.a }}</button>
            <button class="qButton" @click="addAnswer('b')">{{ ask.b }}</button>
          </div>
        </swiper-slide>
        <swiper-slide class="last">
          <figure>
            <img src="/src/assets/img/resultimg.png" alt />
          </figure>
          <button class="resultButton" @click="defineAnswer(answer)">나의 요정 만나기</button>
        </swiper-slide>
        <div class="swiper-button-prev"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
// Import Swiper Vue.js components, required modules
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css/bundle';
// mbti질문지
import questionMbti from '@/mbti-question';
// pinia
import { useAnswerStore } from "@/store/app";
import { storeToRefs } from "pinia";

// Options API형식
export default {
  data: () => ({
    questionDB: questionMbti.questionMbti,
    swiperOptions: {
      resistance: false,
      allowTouchMove: false,
      simulateTouch: false,
      pagination: {
        type: 'progressbar',
        draggable: false,
        clickable: false
      },
      navigation: {
        prevEl: ".qSwiper .swiper-button-prev",
        nextEl: ".qSwiper .qButton",
      },
    },
  }),
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    // 스토어는 무조건 setup()에서 use...Store()가 호출될 때까지 스토어가 생성되지 않음
    const answerList = useAnswerStore();
    // storeToRefs(), 반응형을 유지하면서 스토어에서 속성을 추출
    const { answer, EI, NS, FT, PJ } = storeToRefs(answerList);
    return {
      modules: [Pagination, Navigation],
      answer, EI, NS, FT, PJ
    };
  },
  methods: {
    addAnswer(select) {
      this.answer.push(select);
      console.log(this.answer);
    },
    defineAnswer(answer) {
      this.EI.push(answer[0], answer[3], answer[9]);
      this.NS.push(answer[5], answer[7], answer[8]);
      this.FT.push(answer[2], answer[10], answer[11]);
      this.PJ.push(answer[1], answer[4], answer[6]);
      this.$router.push('/29dreamfairy/result');
    }
  }
};
</script>
<!-- 원쌤의 Vue.js 퀵스타트 -->