<script setup lang="ts">
const ProjectDiv:FC<{project : IArchive}> = ({project}) => {
    // const controls = useAnimation()
    // const [ref, inView] = useInView({
    //     threshold:0.3
    // })
    const container = {
        hidden: { opacity:0, x:-50},
        show: {
          opacity:1,
          x : 0,
          transition: {
            duration: .7,
            staggerChildren: 0.3,
            delayChildren: 0.2
          }
        }
      };
    //   const items = {
    //     hidden: {opacity:0, x: 50 },
    //     show: {opacity:1, x: 0, transition: {duration:.5}}
    //   };

    // useEffect(() => {
    //     if(inView) {
    //         controls.start('show')
    //     }
    // }, [controls, inView])
</script>

<template>
  <LazyMotion features="{loadFeatures}">
    <m.section
      className="{styles.archive}"
      animate="show"
      initial="hidden"
      variants="{container}"
    >
      <div>
        <span>{project.category}</span>
        {project.livelink ?
        <h3>
          <Link href="{`${project?.livelink?.href}`}" target="blank">
            {project.name}
          </Link>
        </h3>
        :
        <h3>
          <Link href="{`${project?.gitlink?.href}`}" target="blank">
            {project.name}
          </Link>
        </h3>
        }
        <p>{project.details}</p>
        <div className="{styles.icon}">
          {project?.gitlink?.href &&
          <Link href="{`${project?.gitlink?.href}`}" target="blank">
            <Image
              src="/images/github.svg"
              alt="github"
              width="{20}"
              height="{20}"
            />
          </Link>
          } {project?.livelink?.href &&
          <Link href="{`${project?.livelink?.href}`}" target="blank">
            <Image
              src="/images/share.svg"
              alt="github"
              layout="fill"
              className="{styles.share}"
            />
          </Link>
          }
        </div>
      </div>
    </m.section>
  </LazyMotion>
</template>
