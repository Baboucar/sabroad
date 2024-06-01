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

.slide {}

img {
    max-width: 100%;
    height: auto;
}
.about_desc{
   line-height: 1.5;
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
}
</style>