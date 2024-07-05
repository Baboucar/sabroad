<template>
    <Nav />
    <section class="slide">
        <div class="desc">
            <p class="first_para">Study in Malaysia Mission</p>
            <h2 class="desc_header">
                Study in <span class="sp">malaysia</span> for <br> brighter future
            </h2>


            <div>
                <router-link to="" class="btn explore"> Explore More</router-link>
                <router-link to="" class="btn contact"> Contact Now</router-link>
            </div>
        </div>
        <img src="/images/background.png" alt="">
    </section>
    <section class="about">
        <img src="/images/homepage_intro.png" alt="">
        <p class="about_desc">
            Since 2012, EF Education First has helped millions of people see new places, experience new cultures, and
            learn new things about the world and themselves. To create programs that continue to elevate and enrich the
            lessons taught in a classroom, EF Study Abroad partners with the world's top colleges and universities to
            facilitate culturally immersive, international educational experiences that bring learning to life.
        </p>

    </section>
    <section class="Who">
        <h2 class="who_title">What we do </h2>
        <div class="two_cards">
            <p class="desc">With years of experience in the education industry, we have developed strong relationships with top universities and colleges in Malaysia, and are well-equipped to guide students through the process of choosing the right program and institution for their needs to study in Malaysia.</p>
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
    <div class="footer">
        <div class="left">
            <a href="mailto:info@mysite.com">info@mysite.com</a>
            <a href="tel:123-456-7890">123-456-7890</a>
            <div class="icons">
                <a href="#"><i class="fab fa-linkedin-in"></i></a>
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
            </div>
        </div>
        <div class="right">
            <p>500 Terry Francine Street</p>
            <p>San Francisco, CA 94158</p>
        </div>
        <div class="copyright">
            &copy;2035 by Jeremy Avens.
        </div>
    </div>

</template>

<script>
import Nav from './Nav.vue';
export default {
    components: {
        Nav
    }
    
}
</script>

<style lang="scss" scoped>
.btn {
    text-decoration: none;
    border-radius: 50px;
    transition: all .5s ease;
    padding: 1rem;
    color: #FFFFFF;
    margin-left: .5rem;
    display: inline-block;
    margin-top: .5rem;

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
.slide {}

img {
    max-width: 100%;
    height: auto;
}
.about_desc{
   line-height: 1.5;
}
.footer {
    background-color: #015cb5;
    color: #fff;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    height: 250px;
}
.footer .left, .footer .right {
    display: flex;
    flex-direction: column;
}
.footer .left a, .footer .right a {
    color: #fff;
    text-decoration: none;
    margin: 5px 0;
}
.footer .left a:hover, .footer .right a:hover {
    text-decoration: underline;
}
.footer .icons a {
    margin: 0 5px;
}
.footer .icons a i {
    font-size: 1.5em;
}
.footer .copyright {
    text-align: center;
    width: 100%;
    margin-top: 20px;
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

    img {
        height: 400px;
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
    width: 80%;
    gap: 2rem;
    margin: 0 auto;

   }
   .two_cards{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
   }
   .who_title{
    padding-left: 2rem;
   }
   .center__text{
    text-align: center;
   }
}
</style>