<template>
    <a
      :href="`https://wa.me/${phoneNumber}`"
      target="_blank"
      class="whatsapp-button"
    >
      <img src="/whatsapp.gif" alt="WhatsApp" />
    </a>
  </template>
  
  <script>
  export default {
    name: "WhatsAppButton",
    props: {
      phoneNumber: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .whatsapp-button {
    position: fixed;
    bottom: 20px;
    right: 20px;
  
    border-radius: 50%;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    z-index: 1000;
  }
  
  .whatsapp-button img {
    width: 35px;
    height: 35px;
  }
  
  @media (max-width: 768px) {
    .whatsapp-button {
      width: 50px;
      height: 50px;
    }
  
    .whatsapp-button img {
      width: 30px;
      height: 30px;
    }
  }
  </style>
  