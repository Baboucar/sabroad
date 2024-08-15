<template>
    <Nav />
    <section class="slide">
        <div class="desc">
            <h2 class="desc_header">
                Study in <span class="sp">malaysia</span> for <br> brighter future
            </h2>


            <div>
                <router-link to="/about" class="btn explore"> Explore More</router-link>
                <router-link to="/contact" class="btn contact"> Contact Now</router-link>
            </div>
        </div>
        <img class="background" src="/images/background.png" alt="background">
    </section>
    <section  class="about">
        <img class="desc_img" src="/images/background.jpg" alt="">
        <p class="about_desc">
            Since 2020, we have helped countless individuals explore new destinations, experience diverse cultures, and
            discover more about the world and themselves. Beyond Dimension Study Abroad collaborates with the world's
            leading colleges and universities to create programs that enhance and enrich classroom lessons. Our
            culturally immersive, international educational experiences bring learning to life, ensuring that students
            gain profound insights and lasting memories from their time abroad.
        </p>

    </section>
    <section class="Who">
        <h2 class="who_title">What we do </h2>

        <div class="two_cards">
            <div>
                <p class="card_desc">With years of experience in the education industry, we have developed strong
                    relationships with top universities and colleges in Malaysia, and are well-equipped to guide
                    students through the process of choosing the right program and institution for their needs to study
                    in Malaysia.

             
                        we empower students to achieve their academic goals through exceptional support for studying abroad in Malaysia. Our dedicated team is here to guide you every step of the way.
                    </p>

            </div>
            <img class="desc_img" src="/images/platform.jpeg" alt="">
        </div>
        <!-- <div class="container">
            <div class="card" v-for="(item, index) in items" :key="index">
                <div class="number" :id="'number' + index">{{ displayNumber(index) }}</div>
                <div class="description">{{ item.description }}</div>
            </div>
        </div> -->
    </section>
    <section class="wrapper">
        <h2 class="center__text">Choose a Course to Get <span class="sp">Started</span></h2>

        <div class="container">
            <div class="card">
                <img src="/images/business.jpeg" alt="Business">
                <div class="content">
                    <h3>Business</h3>
                    <div class="high-demand">High demand</div>
                    <div class="rating">★★★★★</div>
                    <ul>
                        <li>Entrepreneurship</li>
                        <li>Management</li>
                        <li>International Business</li>
                        <li>Marketing</li>
                        <li>Accounting</li>
                    </ul>
                    <router-link to="/programs">View All</router-link>

                </div>
            </div>
            <div class="card">
                <img src="/images/business.jpeg" alt="Business">
                <div class="content">
                    <h3>Information Technology</h3>
                    <div class="high-demand">High demand</div>
                    <div class="rating">★★★★★</div>
                    <ul>
                        <li>Computer Forensics</li>
                        <li>Information Science</li>
                        <li>Software Engineering</li>
                        <li>Computer System Security</li>
                        <li>Internet of Things</li>
                    </ul>
                    <router-link to="/programs">View All</router-link>

                </div>
            </div>
            <div class="card">
                <img src="/images/business.jpeg" alt="Business">
                <div class="content">
                    <h3>Engineering</h3>
                    <div class="high-demand">High demand</div>
                    <div class="rating">★★★★★</div>
                    <ul>
                        <li>Civil Engineering</li>
                        <li>Mechanical Engineering</li>
                        <li>Petroleum Engineering</li>
                        <li>Automation and Robotics</li>
                        <li>Machine Manufacturing</li>
                    </ul>
                    <router-link to="/programs">View All</router-link>

                </div>
            </div>

            <div class="card">
                <img src="/images/business.jpeg" alt="Business">
                <div class="content">
                    <h3>Medicine</h3>
                    <div class="high-demand">High demand</div>
                    <div class="rating">★★★★★</div>
                    <ul>
                        <li>Nursing Science</li>
                        <li> Public Health</li>
                        <li> Psychology</li>
                        <li> Dentistry</li>
                        <li>Midwifery</li>
                    </ul>
                    <router-link to="/programs">View All</router-link>

                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="testimonials-container">
            <h2 class="title">What Our Students Say</h2>
            <p class="subtitle">Discover the transformative experiences of our students who studied in Malaysia. Join them in their journey!</p>
            <div class="testimonials-grid">
              <div v-for="(testimonial, index) in testimonials" :key="index" class="testimonial-card">
                <div class="rating">
                  <span v-for="n in 5" :key="n" class="star">&#9733;</span>
                </div>
                <p class="testimonial-text">{{ testimonial.text }}</p>
                <div class="author-info">
                  <img :src="testimonial.image" alt="Author's photo" class="author-photo" />
                  <div>
                    <p class="author-name">{{ testimonial.name }}</p>
                    <p class="author-title">{{ testimonial.title }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </section>
    <section>
        <h2 class="center__text">Our Partners</h2>
        <Vue3Marquee>
            <img class="marq_img"
                v-for="img in imgArray"
                :key="img"
                :src="img"
            />
        </Vue3Marquee>
    </section>
    <section class="video">
        <Youtube videoId="xLvz62_kEPs" />

    </section>
    <Whatsapp phoneNumber="+60172117150" />

    <Footer />

</template>

<script>
import { defineComponent } from 'vue'

import { Vue3Marquee } from 'vue3-marquee'
import Nav from './Nav.vue';
import Footer from './Footer.vue';
import Whatsapp from './Whatsapp.vue';
import Youtube from './Youtube.vue'

export default defineComponent({
    name: 'Basic',
    components: {
  
       
      
        Nav,
        Footer,
        Whatsapp,
        Vue3Marquee,
        Youtube
    },

    setup() {
      
      
        // Sample images array
        const imgArray = [
    'images/apu.jpeg',
    'images/maha.png',
    'images/city.png',
    'images/kl.png',
    'images/cyber.png',
    'images/zak.png',
    'images/geo.png',
    'images/segi.png',
    'images/mo.png',
    'images/taylor.png',
    'images/south.png',
    'images/putra.png'
    
];
 const testimonials = [
        {
          text: "Studying in Malaysia was a life-changing experience! The cultural diversity and academic excellence exceeded my expectations.",
          name: "Emily Johnson",
          title: "Marketing Intern",
          image: "testimonial-avatar-3.jpg"
        },
        {
          text: "The support from SB was incredible. I felt guided every step of the way, making my transition smooth and enjoyable.",
          name: "Michael Tan",
          title: "Engineering Student",
          image: "testimonial-avatar-3.jpg"
        },
        {
          text: "I made lifelong friends and gained invaluable knowledge. Malaysia is a beautiful place to study!",
          name: "Aisha Rahman",
          title: "Business Graduate",
          image: "testimonial-avatar-3.jpg"
        },
        // Add more testimonials as needed
      ]


      
        
        return { imgArray, testimonials };

        
    }
})

</script>

<style lang="scss" scoped>

.testimonials-container {
    text-align: center;
    padding: 2rem;
    background-color: #000; /* Background color similar to the screenshot */
    color: #fff; /* Text color similar to the screenshot */
  }
  
  .title {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }
  
  .subtitle {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
  
  .testimonials-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
  }
  
  .testimonial-card {
    background-color: #333;
    padding: 1.5rem;
    border-radius: 8px;
  }
  
  .rating {
    color: gold;
    margin-bottom: 1rem;
  }
  
  .testimonial-text {
    margin-bottom: 1rem;
  }
  
  .author-info {
    display: flex;
    align-items: center;
  }
  
  .author-photo {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 1rem;
  }
  
  .author-name {
    font-weight: bold;
  }
  
  .author-title {
    font-size: 0.9rem;
    color: #aaa;
  }
.btn {
    text-decoration: none;
    border-radius: 5px;
    transition: all .5s ease;
    padding: .6rem;
    color: #FFFFFF;
    margin-left: .5rem;
    display: inline-block;
    margin-top: .5rem;

}
img{
    max-width: 100%;
    height: auto;
}
.wrapper{
    width: 95%;
    margin: 0 auto;
}
.background {
    margin-top: 1rem;
  
    
}
.desc_img{
    display: block;
    width: 90%;
    margin: 0 auto;
}
.explore {
    background:#017BFE;
}

.explore:hover {
    background: #4493FF;
}
.marq_img{
    width: 8rem;
    padding-left: 1rem;
  }

.contact {
    color: #000000;
    background: #edebeb;
}

.contact:hover {
    background: #666;
    color: #FFFFFF;
}


.card_desc, .about_desc{
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, .1), 0 8px 10px -6px rgba(0, 0, 0, .1);
    padding: 1rem;
}
.about_desc,
.desc {
    line-height: 2;
    padding: 1rem;
}

.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 20px;
}

.card {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin: 20px;
    overflow: hidden;
    width: 300px;
    transition: transform 0.2s;
}

.card:hover {
    transform: scale(1.05);
}

.card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.card .content {
    padding: 20px;
}

.card .content h3 {
    margin: 0 0 10px;
    font-size: 1rem;
}

.card .content p {
    margin: 0 0 10px;
    color: #666;
}

.who_title {
    text-align: center;
    padding: 1rem;

}

.card .content .high-demand {
    background-color: #017BFE;
    color: #FFFFFF;
    padding: 5px 10px;
    border-radius: 5px;
    display: inline-block;
}

.card .content .rating {
    margin: 10px 0;
    color: gold;
    font-size: 1.2em;
}

.card .content ul {
    list-style: none;
    padding: 0;
}

.card .content ul li {
    margin: 5px 0;
}

.card .content a {
    text-decoration: none;
    color: #017BFE;
    font-weight: bold;
}


img {
    max-width: 100%;
    height: auto;
}

.about_desc {
    line-height: 1.5;
}

.video {
    display: block;
    width: 97%;
    margin: 1rem auto;
}
.center__text {
    text-align: center;
margin-bottom: 1rem;
}


@media (max-width: 600px) {
    .footer {
        text-align: center;
    }

    .footer .left,
    .footer .right {
        align-items: center;
    }
}

@media(min-width: 64rem) {
    .slide {
        display: grid;
        grid-template-columns: 2fr 1fr;
        margin-top: 3rem;


    }
    .desc{
        margin-left: 4rem;
    }

    .about_desc,
    .desc {
        line-height: 2;

    }


    .desc_header {
        font-size: 3.5rem;
    }

    .sp {
        color: #017BFE;
        border-bottom: .2rem solid;
    }

    .about {
        padding-top: 2rem;
        display: grid;
        grid-template-columns: 2fr 2fr;
        width: 70%;
        gap: 5rem;
        margin: 2rem auto;

    }

    .two_cards {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 5rem;
        width: 70%;
        margin: 2rem auto;
    }

    .who_title {

        font-size: 1.5rem;
        color: #017BFE;
        ;
        width: 11%;
        margin: 0 auto;
        border-bottom: .2rem solid;



    }

    

    .background {
        height: 400px;
      
    }

    .contact {
        margin-left: 1rem;
    }

    .marq_img{
        
        padding-left: 4rem;
        padding-bottom: 1rem;
      }
}
</style>