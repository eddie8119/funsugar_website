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
    name: "WorkCatalog",
    components: {
      WorkPills,
      FamilyWorkColumn,
    },
    layout: "mainlayout",
  };
</script>
