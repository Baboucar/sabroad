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
    <section class="about">
        <img src="/images/background.jpg" alt="">
        <p class="about_desc">
            Since 2020, we have helped countless individuals explore new destinations, experience diverse cultures, and discover more about the world and themselves. Beyond Dimension Study Abroad collaborates with the world's leading colleges and universities to create programs that enhance and enrich classroom lessons. Our culturally immersive, international educational experiences bring learning to life, ensuring that students gain profound insights and lasting memories from their time abroad.
        </p>

    </section>
    <section class="Who">
     
        <div class="two_cards">
            <div>
                <h2 class="who_title">What we do </h2>
                <p class="desc">With years of experience in the education industry, we have developed strong relationships with top universities and colleges in Malaysia, and are well-equipped to guide students through the process of choosing the right program and institution for their needs to study in Malaysia.</p>

            </div>
            <img src="/public/images/platform.jpeg" alt="">
        </div>
        <div class="container">
            <div class="card" v-for="(item, index) in items" :key="index">
              <div class="number" :id="'number' + index">{{ displayNumber(index) }}</div>
              <div class="description">{{ item.description }}</div>
            </div>
          </div>
    </section>
    <section>
        <h2 class="center__text">Choose a Course to Get <span class="sp">Started</span></h2>

        <div class="container">
            <div class="card">
                <img src="/public/images/business.jpeg" alt="Business">
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
                    <a href="#">View All</a>
                </div>
            </div>
            <div class="card">
                <img src="/public/images/business.jpeg" alt="Business">
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
                    <a href="#">View All</a>
                </div>
            </div>
            <div class="card">
                <img src="/public/images/business.jpeg" alt="Business">
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
                    <a href="#">View All</a>
                </div>
            </div>
        </div>
    </section>
   <Footer/>

</template>

<script>
import Nav from './Nav.vue';
import Footer from './Footer.vue';
export default {
    components: {
        Nav,
        Footer
    }
    
}
</script>

<style lang="scss" scoped>

.btn {
    text-decoration: none;
    border-radius: 50px;
    transition: all .5s ease;
    padding: .5rem;
    color: #FFFFFF;
    margin-left: .5rem;
    display: inline-block;
    margin-top: .5rem;

}

.background{
    margin-top: 1rem;
}
.explore {
    background: #015cb5;
}

.contact {
    color: #000000;
    background: #edebeb;
}
.about_desc, .desc{
    line-height: 2;
    margin-top: 6rem;
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
    font-size: 1.5em;
}
.card .content p {
    margin: 0 0 10px;
    color: #666;
}
.card .content .high-demand {
    background-color:  #015cb5;
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
    color: #007BFF;
    font-weight: bold;
}


img {
    max-width: 100%;
    height: auto;
}
.about_desc{
   line-height: 1.5;
}

@media (max-width: 600px) {
    .footer {
        text-align: center;
    }
    .footer .left, .footer .right {
        align-items: center;
    }
}
@media(min-width: 64rem) {
    .slide {
        display: grid;
        grid-template-columns: 2fr 1fr;
        margin-top: 3rem;


    }

    .desc {
        margin-top: 5rem;
        margin-left: 3rem;
    }

    .desc_header {
        font-size: 3.5rem;
    }

    .sp {
        color: #015cb5;
        border-bottom: .2rem solid;
    }
   .about{
    padding-top: 2rem;
    display: grid;
    grid-template-columns: 2fr 2fr;
    width: 70%;
    gap: 5rem;
    margin: 2rem auto;

   }
   .two_cards{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
    width: 80%;
    margin: 0 auto;
   }
   
   .who_title{
    padding-left: 2rem;
   }
   .center__text{
    text-align: center;
   }

   .background{
    height: 400px;
   }
}
</style>