<script setup lang="ts">import '../assets/css/Home.css'
</script>

<template>
        <header className={styles.mobile_header} >
          <h1> <Link href="/"> TonyTruong</Link> </h1> 

        </header>
        <header className={styles.desktop_header} >
          <h1> <Link href="/"> TonyTruong.</Link></h1>

          <ul>
            <li className={[styles.link, styles.link_anim].join(" ")}>  <Link href='/#about'> About</Link> </li>
            <li className={[styles.link, styles.link_anim].join(" ")}> <Link href="/#projects" > Projects</Link></li>
 
            <li>
              <button className={[styles.button, styles.button__mimas].join(' ')}>
                <Link  target="blank" href="https://drive.google.com/file/d/1SspjX3pFynhnzA1uL6TS9pNRYAyIwdCu/view?usp=sharing" passHref>
                    <span>Resume</span>
                </Link>
              </button>
		        </li>
          </ul>
        </header>
      </>

</template>