<!-- src/components/CourseDetail.vue -->
<template>
    <Nav/>
    <div class="course-detail">
      <h1>{{ courseName }}</h1>
      <p>This is the detailed description of the {{ courseName }} course.</p>
      <router-link to="/">Back to courses</router-link>
    </div>
  </template>
  
  <script>
  import Nav from './Nav.vue';
  export default {
    components:{
        Nav
    },
    data() {
      return {
        courseName: this.$route.params.name
      }
    }
  }
  </script>
  
  <style scoped>
  .course-detail {
    padding: 20px;
    text-align: center;
  }
  </style>
  