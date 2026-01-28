<template>
  <div>
    <WorkPills />
    <WorkColumn />
  </div>
</template>

<script>
  import WorkPills from "@/components/workDisplay/WorkPills";
  import WorkColumn from "@/components/workDisplay/WorkColumn";

  export default {
    layout: "mainlayout",
    name: "WorkCatalog",
    components: {
      WorkPills,
      WorkColumn,
    },
  };
</script>
