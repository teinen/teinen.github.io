<template>
<div class="container">
  <div class="sec-contents-bio">
    <table class="u-full-width">
      <thead>
        <tr><th>Education</th><th></th></tr>
      </thead>
      <tbody>
        <tr v-for="education in educations" :key="education.id">
          <td>{{ education.term }}</td>
          <td>
            <span class="wow animated bounceInRight" data-wow-duration="1s">
              {{ education.title }}
            </span>
          </td>
        </tr>
      </tbody>
      <thead>
        <tr><th>Work</th><th></th></tr>
      </thead>
      <tbody>
        <tr v-for="work in works" :key="work.id">
          <td>{{ work.term }}</td>
          <td>
            <span class="wow animated bounceInRight" data-wow-duration="1s">
              {{ work.title }}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      educations: [
        { id: 1, term: '2012.03', title: '福島県立 福島高等学校 卒業' },
        { id: 2, term: '2012.04', title: '東北大学 教育学部 教育科学科 入学' },
        { id: 3, term: '2016.03', title: '東北大学 教育学部 教育科学科 卒業' },
      ],
      works: [
        { id: 1, term: '2016.08', title: '不動産向け BtoBシステム開発' },
        { id: 2, term: '2017.10', title: '社内向け 人材管理システム開発' },
        { id: 3, term: '2018.04', title: '社内向け 開発ツール導入' },
      ]
    }
  }
}
</script>
