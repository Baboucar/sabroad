<template>
  <div>
    <Nav />
    <section class="policy-hero">
      <div class="policy-hero__inner">
        <p class="eyebrow">LEGAL</p>
        <h1 class="policy-hero__title">Privacy Policy</h1>
        <p class="policy-hero__meta">Last updated: March 2025</p>
      </div>
    </section>

    <section class="policy-body">
      <div class="policy-body__inner">

        <div class="policy-section">
          <h2>1. Introduction</h2>
          <p>Beyond Dimension Education Consultancy ("we", "our", or "us") is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.</p>
        </div>

        <div class="policy-section">
          <h2>2. Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul>
            <li><strong>Personal Identification Information:</strong> Name, email address, phone number, nationality, date of birth, and passport details provided during application.</li>
            <li><strong>Academic Information:</strong> Educational background, transcripts, and qualifications submitted as part of your application.</li>
            <li><strong>Usage Data:</strong> Information about how you interact with our website, including IP address, browser type, pages visited, and time spent.</li>
            <li><strong>Communication Data:</strong> Records of correspondence when you contact us via email, WhatsApp, or our contact form.</li>
          </ul>
        </div>

        <div class="policy-section">
          <h2>3. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Process and manage your university application</li>
            <li>Communicate with you regarding your application status</li>
            <li>Assist with visa applications and immigration procedures</li>
            <li>Provide arrival and accommodation support services</li>
            <li>Send you relevant updates, newsletters, and promotional materials (with your consent)</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations</li>
          </ul>
        </div>

        <div class="policy-section">
          <h2>4. Sharing Your Information</h2>
          <p>We do not sell or rent your personal information to third parties. We may share your information with:</p>
          <ul>
            <li><strong>Partner Universities:</strong> To process your application and enrolment.</li>
            <li><strong>Malaysian Immigration Authorities:</strong> As required for student visa processing.</li>
            <li><strong>Service Providers:</strong> Trusted third parties who assist us in operating our website and delivering our services, subject to confidentiality agreements.</li>
            <li><strong>Legal Authorities:</strong> When required by law or to protect our legal rights.</li>
          </ul>
        </div>

        <div class="policy-section">
          <h2>5. Data Security</h2>
          <p>We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>
        </div>

        <div class="policy-section">
          <h2>6. Data Retention</h2>
          <p>We retain your personal information for as long as necessary to fulfil the purposes outlined in this policy, or as required by law. Application data is typically retained for a period of 5 years following the completion of our services.</p>
        </div>

        <div class="policy-section">
          <h2>7. Your Rights</h2>
          <p>Depending on your jurisdiction, you may have the right to:</p>
          <ul>
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your personal data</li>
            <li>Withdraw consent for marketing communications at any time</li>
            <li>Lodge a complaint with a relevant data protection authority</li>
          </ul>
          <p>To exercise any of these rights, please contact us at <a href="mailto:info@beyonddimension.com">info@beyonddimension.com</a>.</p>
        </div>

        <div class="policy-section">
          <h2>8. Cookies</h2>
          <p>Our website may use cookies to enhance your browsing experience. You can control cookie settings through your browser preferences. Disabling cookies may affect the functionality of certain parts of our website.</p>
        </div>

        <div class="policy-section">
          <h2>9. Third-Party Links</h2>
          <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices of those sites and encourage you to review their privacy policies.</p>
        </div>

        <div class="policy-section">
          <h2>10. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on this page with an updated date. Your continued use of our services after changes constitutes acceptance of the updated policy.</p>
        </div>

        <div class="policy-section">
          <h2>11. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us:</p>
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
