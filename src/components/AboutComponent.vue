<script setup lang="ts">
import "../assets/css/Home.css";
</script>
<template>
  <section id="about" className="{styles.about}">
    <h1><span>01.</span> <span> My Arsenal</span></h1>

    {/*
    <p>
      I enjoy building client-side apps and websites,also currently exploring
      some light backend to maybe transition to full mernstack. I also build
      apps that leverage on the blockchain and web3 technologies with Solidity,
      Ipfs, ethers js and co.
    </p>
    */}

    <div className="{styles.technologies}">
      <div>
        {/* eslint-disable-next-line react/no-unescaped-entities*/}
        <h3>Core Technologies</h3>
        <ul>
          <li>Html & CSS</li>
          <li>Javascript (ES6+)</li>
          <li>ReactJS</li>
          <li>Solidity</li>
          <li>Typescript</li>
          <li>Next JS</li>
        </ul>
      </div>

      <div>
        <h3>Familiar With</h3>
        <ul>
          <li>Node JS</li>
          <li>Express</li>
          <li>Mongodb</li>
          <li>Unit Testing Solidity dapps</li>
        </ul>
      </div>
    </div>
  </section>
</template>
