<template>
  <div>
    <CommonBodyTitleA />
    <!------------ここをmoleculeにした方がいいのかな、---------->
    <div class="flex justify-between">
      <AboutProfileM direction="L" type="profile"/>
      <AboutSubTitlesM num=0 />
      <AboutProfileM direction="R" type="profile"/>
    </div>
    <!-- ----------------------------------------------------->
    <div class="flex justify-between">
      <AboutProfileM direction="L" type="skills"/>
      <AboutSubTitlesM num=1 />
      <AboutProfileM direction="R" type="skills"/>
    </div>
  </div>
</template>