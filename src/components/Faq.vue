<template>
    <div class="faq-container">
      <h2 class="faq-title">Frequently Asked Questions</h2>
      <div v-for="(faq, index) in faqs" :key="index" class="faq-item">
        <button @click="toggleFaq(index)" class="faq-question">
          {{ faq.question }}
          <span v-if="faq.isOpen">▲</span>
          <span v-else>▼</span>
        </button>
        <div v-if="faq.isOpen" class="faq-answer">
          {{ faq.answer }}
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        faqs: [
          {
            question: "What is the process to apply for a university or college in Malaysia?",
            answer: "You can apply online through the institution's website or through a centralized application system, depending on the institution.",
            isOpen: false,
          },
          {
            question: "Are credit transfers from another institution accepted in Malaysia?",
            answer: "Credit transfers may be possible, subject to the receiving institution's policies and the compatibility of the courses.",
            isOpen: false,
          },
          {
            question: "Can international students apply to Malaysian institutions?",
            answer: "Yes, Malaysian institutions welcome applications from international students. Specific requirements may apply.",
            isOpen: false,
          },
          {
            question: "Is it possible to defer my admission after being accepted?",
            answer: "Deferring admission is generally possible but depends on the policies of the individual institution.",
            isOpen: false,
          },
          {
            question: "How do I apply for a student visa to study in Malaysia?",
            answer: "To apply for a student visa, you'll need to provide proof of admission to a Malaysian institution, along with other required documentation.",
            isOpen: false,
          },
          {
            question: "How should I choose the best university or college in Malaysia?",
            answer: "Consider factors such as program offerings, reputation, campus facilities, and student support services when choosing a university or college.",
            isOpen: false,
          },
          {
            question: "How can I prepare for my studies in Malaysia as an international student?",
            answer: "Research the culture, climate, and living conditions in Malaysia, and ensure you have all necessary documentation and accommodations arranged.",
            isOpen: false,
          },
        ],
      };
    },
    methods: {
      toggleFaq(index) {
        this.faqs[index].isOpen = !this.faqs[index].isOpen;
      },
    },
  };
  </script>
  
  <style scoped>
  .faq-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .faq-title {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 20px;
  }
  
  .faq-item {
    margin-bottom: 10px;
  }
  
  .faq-question {
    width: 100%;
    text-align: left;
    font-size: 1.2rem;
    background-color: #f5f5f5;
    border: none;
    padding: 10px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .faq-answer {
    padding: 10px;
    background-color: #e7f1ff;
  }
  </style>
  