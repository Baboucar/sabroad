<template>
    <div class="youtube-embed">
      <iframe
        :src="iframeSrc"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </template>
  
  <script>
  export default {
    name: 'YouTubeEmbed',
    props: {
      videoId: {
        type: String,
        required: true
      }
    },
    computed: {
      iframeSrc() {
        return `https://www.youtube.com/embed/${this.videoId}`;
      }
    }
  };
  </script>
  
  <style scoped>
  .youtube-embed iframe {
    width: 100%;
    height: 100%;
    
  }

  @media(min-width: 64rem){
    .youtube-embed{
        height: 600px;
    }
  }
  </style>
  