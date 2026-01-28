<template>
  <div>
    <WorkPills />
    <FamilyWorkColumn />
  </div>
</template>

<script>
  import WorkPills from "@/components/workDisplay/WorkPills";
  import FamilyWorkColumn from "@/components/workDisplay/FamilyWorkColumn";

  export default {
    layout: "mainlayout",
    name: "WorkCatalog",
    components: {
      WorkPills,
      FamilyWorkColumn,
    },
  };
</script>
