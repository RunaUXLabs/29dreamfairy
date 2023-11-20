<template>
  <div class="result">
    <div class="inner">
      <div class="result-wrap">
        <span>나의 요정은...</span>
        <div class="result-content">
          <figure class="result-img">
            <img :src="`/src/assets/img/result/${defineMBTI}.png`" alt>
          </figure>
          <div class="result-txt">
            <div class="title">
              <p>{{ subTitle }}</p>
              <h2>{{ name }}</h2>
            </div>
            <ul class="personal">
              <li v-for="(desc, index) in descs" :key="index">{{ desc }}</li>
            </ul>
          </div>
        </div>

        <div class="match">
          <h3>나와 찰떡궁합인 요정은...</h3>
          <div class="match-content">
            <figure class="match-img">
              <img :src="`/src/assets/img/result/${matchImg}.png`" alt>
            </figure>
            <div class="match-txt">
              <em>{{ matchName }}</em>
            </div>
          </div>
        </div>
      </div>
      <div class="button-wrap">
        <router-link to="/29dreamfairy/mbti" id="reset" class="button reverse">테스트 다시하기</router-link>
        <button type="button" id="share" class="button" @click="kakaoLink">테스트 공유하기</button>
      </div>
    </div>
  </div>
</template>

<script setup>
// mbti결과지
import resultMbti from '@/mbti-result';
// pinia
import { useAnswerStore } from "@/store/app";
import { storeToRefs } from "pinia";

// Composition API형식
const answerList = useAnswerStore();
const { EI, NS, FT, PJ } = storeToRefs(answerList);
let arrEI = EI["_rawValue"];
let arrNS = NS["_rawValue"];
let arrFT = FT["_rawValue"];
let arrPJ = PJ["_rawValue"];
if (arrEI.filter(element => 'a' === element).length >= 2) { arrEI.value = `e`; } else { arrEI.value = `i`; }
if (arrNS.filter(element => 'a' === element).length >= 2) { arrNS.value = `n`; } else { arrNS.value = `s`; }
if (arrFT.filter(element => 'a' === element).length >= 2) { arrFT.value = `f`; } else { arrFT.value = `t`; }
if (arrPJ.filter(element => 'a' === element).length >= 2) { arrPJ.value = `p`; } else { arrPJ.value = `j`; }

let defineMBTI = `${arrEI.value}${arrNS.value}${arrFT.value}${arrPJ.value}`;

// 결과타이틀 및 설명문;
let subTitle = resultMbti[`${defineMBTI}`]["subTitle"];

let name = resultMbti[`${defineMBTI}`]["name"];
let descs = resultMbti[`${defineMBTI}`]["desc"];

// 매치
let matchImg = resultMbti[`${defineMBTI}`]["match"];
let matchName = resultMbti[`${defineMBTI}`]["matchName"]

</script>
<script>
export default {
  methods: {
    kakaoLink() {
      window.Kakao.Share.sendCustom({
        templateId: 100903,
        // 카카오톡이 설치 되지 않았을때 마켓으로 이동
        installTalk: true
      });
    },
  },
};
</script>