<template>
  <div>
    <WorkPills />
    <WorkColumn />
  </div>
</template>

<script>
  import WorkPills from "@/components/photography/WorkPills";
  import WorkColumn from "@/components/photography/WorkColumn";

  export default {
    layout: "mainlayout",
    name: "WorkCatalog",
    components: {
      WorkPills,
      WorkColumn,
    },
  };
</script>
