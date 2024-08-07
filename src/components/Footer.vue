<template>
    <section class="footer">
        <div class="left">
            <a class="a" href="mailto:info@mysite.com">contact@beyonddimension.net </a>
            <a class="a" href="tel:22242030329">22242030329</a>
            <a class="a" href="tel:+2205417372">+2205417372</a>

            <div class="icons">
                <a href="#"><i class="fab fa-linkedin-in"></i></a>
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
            </div>
        </div>
        <div class="right">
            <p>300w Tevragh Zenia, Nouakchott,</p>
            <p> Mauritania</p>
        </div>
        <div class="copyright">
            &copy;2024 by Beyond Dimensions Study Abroad group.
        </div>
    </section>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.footer {
    background-color: #015cb5;
    color: #fff;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    height: 300px;
}
.footer .left, .footer .right {
    display: flex;
    flex-direction: column;
}
.footer .left a, .footer .right a {
    color: #fff;
    text-decoration: none;
   
}
.a{
    margin-top: .5rem;
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
   
}
</style>