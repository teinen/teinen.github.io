<template>
<div class="container">
  <div class="row sec-contents-skill">
    <div
      v-for="content in contents"
      :key="content.id"
      class="three columns"
    >
      <p class="title wow animated bounceIn" data-wow-duration="1s">
        {{ content.title }}
      </p>
      <div class="wow animated bounceInUp" data-wow-duration="1.2s">
        <span
          v-for="skill in content.skills"
          :key="skill.id"
          class="devicons"
          :class="'devicons-' + skill.name"
        ></span>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      contents: [
        {
          id: 1,
          title: 'Front-end',
          skills :[
            { id: 1, name: 'html5' },
            { id: 2, name: 'css3' },
            { id: 3, name: 'sass' },
            { id: 4, name: 'javascript' },
            { id: 5, name: 'react' },
          ]
        },
        {
          id: 2,
          title: 'Back-end',
          skills :[
            { id: 1, name: 'java' },
            { id: 2, name: 'ruby' },
            { id: 3, name: 'python' },
            { id: 4, name: 'swift' },
            { id: 5, name: 'ruby_on_rails' },
            { id: 6, name: 'mysql' },
            { id: 7, name: 'postgresql' },
          ]
        },
        {
          id: 3,
          title: 'Platform',
          skills :[
            { id: 1, name: 'aws' },
            { id: 2, name: 'docker' },
            { id: 3, name: 'linux' },
            { id: 4, name: 'atlassian' },
          ]
        },
        {
          id: 4,
          title: 'Dev tool',
          skills :[
            { id: 1, name: 'git' },
            { id: 2, name: 'jira' },
            { id: 3, name: 'eclipse' },
            { id: 4, name: 'visualstudio' },
            { id: 5, name: 'photoshop' },
            { id: 6, name: 'illustrator' },
          ]
        },
      ]
    }
  }
}
</script>
