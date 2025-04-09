<script setup lang="ts">import '../assets/css/Home.css'
</script>

<template>
        <header className="mobile_header" >
          <h1> <a href="/"> TonyTruong</a> </h1> 

        </header>
        <header className="desktop_header" >
          <h1> <a href="/"> TonyTruong.</a></h1>

          <ul>
            <li className="link link_anim">  <a href='/#about'> About</a> </li>
            <li className="link link_anim"> <a href="/#projects" > Projects</a></li>
 
            <li>
              <button className="button button__mimas">
                <a  target="blank" href="https://drive.google.com/file/d/1SspjX3pFynhnzA1uL6TS9pNRYAyIwdCu/view?usp=sharing" passHref>
                    <span>Resume</span>
                </a>
              </button>
		        </li>
          </ul>
        </header>
      </>

</template>