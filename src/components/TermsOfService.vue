<template>
  <div>
    <Nav />
    <section class="policy-hero">
      <div class="policy-hero__inner">
        <p class="eyebrow">LEGAL</p>
        <h1 class="policy-hero__title">Terms of Service</h1>
        <p class="policy-hero__meta">Last updated: March 2025</p>
      </div>
    </section>

    <section class="policy-body">
      <div class="policy-body__inner">

        <div class="policy-section">
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing or using the services provided by Beyond Dimension Education Consultancy ("Beyond Dimension", "we", "our", or "us"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
        </div>

        <div class="policy-section">
          <h2>2. Our Services</h2>
          <p>Beyond Dimension provides education consultancy services including but not limited to:</p>
          <ul>
            <li>University application assistance and guidance</li>
            <li>Student visa application support</li>
            <li>Pre-departure and arrival orientation</li>
            <li>Accommodation assistance</li>
            <li>Academic and career counselling</li>
          </ul>
          <p>We act as an intermediary between students and partner universities in Malaysia. We do not guarantee admission to any specific institution.</p>
        </div>

        <div class="policy-section">
          <h2>3. Eligibility</h2>
          <p>Our services are available to individuals who are at least 16 years of age. If you are under 18, you must have parental or guardian consent to use our services. By using our services, you represent that you meet these eligibility requirements.</p>
        </div>

        <div class="policy-section">
          <h2>4. Client Responsibilities</h2>
          <p>As a client of Beyond Dimension, you agree to:</p>
          <ul>
            <li>Provide accurate, complete, and truthful information in all applications and documents</li>
            <li>Notify us promptly of any changes to your personal information or circumstances</li>
            <li>Meet all deadlines communicated by our consultants</li>
            <li>Pay all agreed fees in a timely manner</li>
            <li>Comply with the laws and regulations of Malaysia and your home country</li>
            <li>Treat our staff with respect and professionalism</li>
          </ul>
        </div>

        <div class="policy-section">
          <h2>5. Fees and Payments</h2>
          <p>Service fees will be communicated to you prior to engagement. All fees are non-refundable unless otherwise stated in a separate written agreement. University tuition fees and other third-party costs are separate from our consultancy fees and are subject to the respective institution's policies.</p>
        </div>

        <div class="policy-section">
          <h2>6. Refund Policy</h2>
          <p>Consultancy service fees are generally non-refundable once services have commenced. Refunds may be considered in exceptional circumstances at our sole discretion. Any refund requests must be submitted in writing within 14 days of the triggering event. University tuition refunds are governed by the respective university's refund policy.</p>
        </div>

        <div class="policy-section">
          <h2>7. Limitation of Liability</h2>
          <p>Beyond Dimension shall not be liable for:</p>
          <ul>
            <li>Rejection of university applications by partner or non-partner institutions</li>
            <li>Visa refusals by Malaysian immigration authorities</li>
            <li>Delays caused by third parties, government agencies, or force majeure events</li>
            <li>Any indirect, incidental, or consequential damages arising from the use of our services</li>
          </ul>
          <p>Our total liability to you shall not exceed the total fees paid to us for the specific service giving rise to the claim.</p>
        </div>

        <div class="policy-section">
          <h2>8. Accuracy of Information</h2>
          <p>We strive to provide accurate and up-to-date information about universities, programs, and visa requirements. However, this information is subject to change without notice. We recommend verifying all critical information directly with the relevant institution or authority.</p>
        </div>

        <div class="policy-section">
          <h2>9. Intellectual Property</h2>
          <p>All content on our website, including text, graphics, logos, and images, is the property of Beyond Dimension or its content suppliers and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.</p>
        </div>

        <div class="policy-section">
          <h2>10. Privacy</h2>
          <p>Your use of our services is also governed by our <router-link to="/privacy-policy">Privacy Policy</router-link>, which is incorporated into these Terms of Service by reference.</p>
        </div>

        <div class="policy-section">
          <h2>11. Termination</h2>
          <p>We reserve the right to suspend or terminate our services to any client who violates these Terms of Service, provides false information, or engages in conduct that is harmful to Beyond Dimension, its staff, or partner institutions.</p>
        </div>

        <div class="policy-section">
          <h2>12. Governing Law</h2>
          <p>These Terms of Service shall be governed by and construed in accordance with the laws of Malaysia. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of Malaysia.</p>
        </div>

        <div class="policy-section">
          <h2>13. Changes to Terms</h2>
          <p>We reserve the right to modify these Terms of Service at any time. Changes will be effective upon posting to our website. Your continued use of our services after any changes constitutes your acceptance of the new terms.</p>
        </div>

        <div class="policy-section">
          <h2>14. Contact Us</h2>
          <p>If you have any questions about these Terms of Service, please contact us:</p>
          <ul>
            <li><strong>Email:</strong> <a href="mailto:info@beyonddimension.com">info@beyonddimension.com</a></li>
            <li><strong>WhatsApp:</strong> +60 17-211 7150</li>
            <li><strong>Address:</strong> Kuala Lumpur, Malaysia</li>
          </ul>
        </div>

      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Nav from './Nav.vue';
import Footer from './Footer.vue';
export default {
  components: { Nav, Footer }
}
</script>

<style scoped>
.policy-hero {
  background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%);
  padding: 8rem 1.5rem 4rem;
  text-align: center;
}
.policy-hero__inner {
  max-width: 700px;
  margin: 0 auto;
}
.eyebrow {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  color: #93c5fd;
  text-transform: uppercase;
  margin-bottom: 1rem;
  display: block;
}
.policy-hero__title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 0.75rem;
  letter-spacing: -0.02em;
}
.policy-hero__meta {
  font-size: 0.9rem;
  color: rgba(255,255,255,0.55);
}

.policy-body {
  background: #f9fafb;
  padding: 4rem 1.5rem 6rem;
}
.policy-body__inner {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}
.policy-section h2 {
  font-size: 1.2rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.75rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #e5e7eb;
}
.policy-section p {
  font-size: 0.95rem;
  color: #4b5563;
  line-height: 1.8;
  margin-bottom: 0.75rem;
}
.policy-section ul {
  padding-left: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.policy-section li {
  font-size: 0.95rem;
  color: #4b5563;
  line-height: 1.7;
}
.policy-section a {
  color: #1d4ed8;
  text-decoration: none;
}
.policy-section a:hover {
  text-decoration: underline;
}
</style>
