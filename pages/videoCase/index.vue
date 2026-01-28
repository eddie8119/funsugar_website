<template>
  <div>
    <WorkPills />
    <VideoWorkColumn />
  </div>
</template>

<script>
  import WorkPills from "@/components/photography/WorkPills";
  import VideoWorkColumn from "@/components/photography/VideoWorkColumn";

  export default {
    layout: "mainlayout",
    name: "WorkCatalog",
    components: {
      WorkPills,
      VideoWorkColumn,
    },
  };
</script>
