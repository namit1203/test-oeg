<template>
    <div>
        <header>
            <nav>
                <NuxtLink to="/tournament">Nuxt Gerland</NuxtLink>
                <ul>
                    <li><NuxtLink to="/">Home</NuxtLink></li>
                    <li><NuxtLink to="/managements">Tour Managements</NuxtLink></li>
                    <li><NuxtLink to="/tournament">Tour</NuxtLink></li>
                </ul>   
            </nav>
        </header>

        <!--output the content -->
        
    <div>
        <slot />
    </div>

    <!-- <footer>
        <ul>
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/about">About</NuxtLink></li>
            <li><NuxtLink to="/tours">Tour</NuxtLink></li>
        </ul>   
    </footer> -->
</div>
    </template>
<style>
.router-link-exact-active{
    color:aquamarine 
}

</style>
