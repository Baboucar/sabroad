<template>
  <section class="faq">
    <div class="faq__inner">
      <div class="faq__header">
        <p class="faq__eyebrow"><span class="faq__eyebrow-dot"></span>GOT QUESTIONS?</p>
        <h2 class="faq__title">Frequently Asked <em class="faq__italic">Questions</em></h2>
        <p class="faq__sub">Everything you need to know about studying in Malaysia with Beyond Dimension.</p>
      </div>

      <div class="faq__list">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="faq__item"
          :class="{ 'faq__item--open': faq.isOpen }"
          @click="toggleFaq(index)"
        >
          <div class="faq__question">
            <span class="faq__q-num">{{ String(index + 1).padStart(2, '0') }}</span>
            <span class="faq__q-text">{{ faq.question }}</span>
            <span class="faq__icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </span>
          </div>
          <div class="faq__answer" :style="faq.isOpen ? 'max-height: 300px; opacity: 1;' : 'max-height: 0; opacity: 0;'">
            <p>{{ faq.answer }}</p>
          </div>
        </div>
      </div>

      <div class="faq__cta">
        <p>Still have questions?</p>
        <router-link to="/contact" class="faq__cta-btn">Talk to an Advisor →</router-link>
      </div>
    </div>
  </section>
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
* { box-sizing: border-box; }

.faq {
  background: #f9fafb;
  padding: 6rem 1.5rem;
}

.faq__inner {
  max-width: 820px;
  margin: 0 auto;
}

/* Header */
.faq__header {
  text-align: center;
  margin-bottom: 3.5rem;
}

.faq__eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  color: #1d4ed8;
  text-transform: uppercase;
  margin-bottom: 1rem;
  background: rgba(29, 78, 216, 0.08);
  padding: 0.35rem 0.85rem;
  border-radius: 999px;
  border: 1px solid rgba(29, 78, 216, 0.2);
}

.faq__eyebrow-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #1d4ed8;
  flex-shrink: 0;
}

.faq__title {
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 800;
  color: #111827;
  line-height: 1.15;
  margin: 0 0 1rem;
}

.faq__italic {
  font-style: italic;
  background: linear-gradient(135deg, #1d4ed8, #6366f1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.faq__sub {
  font-size: 1rem;
  color: #6b7280;
  line-height: 1.7;
  max-width: 520px;
  margin: 0 auto;
}

/* List */
.faq__list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 3rem;
}

.faq__item {
  background: #fff;
  border-radius: 16px;
  border: 1.5px solid #e5e7eb;
  overflow: hidden;
  cursor: pointer;
  transition: border-color 0.25s, box-shadow 0.25s;
}

.faq__item:hover {
  border-color: #bfdbfe;
  box-shadow: 0 4px 20px rgba(29, 78, 216, 0.08);
}

.faq__item--open {
  border-color: #1d4ed8;
  box-shadow: 0 4px 24px rgba(29, 78, 216, 0.12);
}

.faq__question {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem 1.5rem;
  user-select: none;
}

.faq__q-num {
  font-size: 0.72rem;
  font-weight: 700;
  color: #1d4ed8;
  background: rgba(29, 78, 216, 0.08);
  border-radius: 6px;
  padding: 0.2rem 0.45rem;
  flex-shrink: 0;
  letter-spacing: 0.04em;
}

.faq__item--open .faq__q-num {
  background: #1d4ed8;
  color: #fff;
}

.faq__q-text {
  flex: 1;
  font-size: 0.97rem;
  font-weight: 600;
  color: #111827;
  line-height: 1.4;
}

.faq__icon {
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.25s, transform 0.3s;
}

.faq__icon svg {
  width: 16px;
  height: 16px;
  stroke: #6b7280;
  transition: stroke 0.25s, transform 0.3s;
}

.faq__item--open .faq__icon {
  background: #1d4ed8;
  transform: rotate(180deg);
}

.faq__item--open .faq__icon svg {
  stroke: #fff;
}

.faq__answer {
  overflow: hidden;
  transition: max-height 0.35s ease, opacity 0.3s ease;
}

.faq__answer p {
  padding: 0 1.5rem 1.5rem 3.75rem;
  font-size: 0.93rem;
  color: #6b7280;
  line-height: 1.75;
  margin: 0;
}

/* CTA */
.faq__cta {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
  flex-wrap: wrap;
  background: #fff;
  border: 1.5px solid #e5e7eb;
  border-radius: 16px;
  padding: 1.5rem 2rem;
}

.faq__cta p {
  font-size: 0.97rem;
  color: #374151;
  font-weight: 500;
  margin: 0;
}

.faq__cta-btn {
  text-decoration: none;
  background: linear-gradient(135deg, #1d4ed8, #4f46e5);
  color: #fff;
  padding: 0.65rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.25s;
  box-shadow: 0 4px 14px rgba(29, 78, 216, 0.3);
}

.faq__cta-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(29, 78, 216, 0.4);
}

@media (max-width: 600px) {
  .faq__question {
    padding: 1rem 1.25rem;
    gap: 0.75rem;
  }

  .faq__answer p {
    padding: 0 1.25rem 1.25rem 1.25rem;
  }
}
</style>
