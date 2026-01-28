<template>
  <div>
    <WorkPills />
    <VideoWorkColumn />
  </div>
</template>

<script>
  import WorkPills from "@/components/workDisplay/WorkPills";
  import VideoWorkColumn from "@/components/workDisplay/VideoWorkColumn";

  export default {
    layout: "mainlayout",
    name: "WorkCatalog",
    components: {
      WorkPills,
      VideoWorkColumn,
    },
  };
</script>
