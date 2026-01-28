<template>
  <div>
    <WorkPills />
    <FamilyWorkColumn />
  </div>
</template>

<script>
  import WorkPills from "@/components/photography/WorkPills";
  import FamilyWorkColumn from "@/components/photography/FamilyWorkColumn";

  export default {
    layout: "mainlayout",
    name: "WorkCatalog",
    components: {
      WorkPills,
      FamilyWorkColumn,
    },
  };
</script>
