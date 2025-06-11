<template>
  <div class="max-w-4xl mx-auto py-8 px-2 sm:px-0">
    <div class="relative">
      <!-- Vertical line -->
      <div class="absolute left-4 sm:left-4 top-0 bottom-0 w-0.5 bg-gray-700"></div>
      <div
        v-for="(exp, idx) in experiences"
        :key="idx"
        class="relative flex items-start mb-10"
      >
        <!-- Timeline dot -->
        <div class="w-8 flex flex-col items-center flex-shrink-0">
            <!-- border-black  -->
          <div class="h-4 w-4 rounded-full bg-indigo-500 border-4 border-indigo-500 z-10 mt-1"></div>
        </div>
        <!-- Card Content (left-aligned, responsive) -->
        <div class="ml-2 flex-1">
          <div class="bg-white/5 shadow rounded-lg px-4 py-3 sm:px-5 sm:py-4 mb-2">
            <h3 class="text-indigo-500 font-bold text-base sm:text-lg mb-1 dark:text-indigo-50 text-left">{{ exp.title }}</h3>
            <div class="flex">
                <div class="bg-gray-800 inline-block px-2 py-1 rounded  text-white text-xs sm:text-sm font-bold mb-1 text-left">
                {{ exp.duration }}
                </div>
            </div>
            <div class="italic text-gray-800 text-xs sm:text-sm mb-2 text-left">{{ exp.location }}</div>
            <ul class="list-disc text-left dark:text-white pl-5 text-xs sm:text-sm text-gray-800 mb-1">
              <li v-for="(desc, i) in exp.description" :key="i">
                <h6 class="text-md">{{ desc }}</h6>
              </li>
            </ul>
            <div class="mt-4 text-sm text-left text-indigo-800 dark:text-indigo-200"> {{ exp.skills }} </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExperienceTimeline",
  data() {
    return {
      experiences: [
        {
          title: "FRONTEND DEVELOPER - JUKE Solution",
          duration: "May 2024 - May 2025",
          location: "Jakarta, Indonesia",
          description: [
            "Developed new features for applications using React Native to meet client requirements and enhance user experience",
            "Troubleshot and fixed bugs, ensuring smooth and error-free application performance",
            "Collaborated with cross-functional teams in Agile environments to deliver projects on time and with high quality",
            "Worked closely with clients to understand their requests and provide tailored solutions.",
            "Tested and optimized features to maintain application performance and reliability"
          ],
          skills: "Javascript, React.js, React Native, Redux"
        },
        {
          title: "WEB DEVELOPER - Sarirasa Group",
          duration: "Nov 2022 - May 2024",
          location: "Jakarta, Indonesia",
          description: [
            "Developed web apps using Vue.js (front-end) and Express.js (back-end) for seamless user experiences",
            "Integrated RESTful APIs for efficient front-end and back-end communication",
            "Fixed bugs and improved system stability through effective troubleshooting",
            "Identified and resolved bugs to improve application performance and reliability",
            "Enhanced expertise by staying updated on web development trends"
          ],
          skills: "Javascript, Vue.js, Vuex, Express.js, SQL, Bootstrap, etc."
        },
        {
          title: "FRONTEND WEB DEVELOPER - ATT Group",
          duration: "Oct 2021 - Nov 2022",
          location: "Jakarta, Indonesia",
          description: [
            "Built responsive web apps with Nuxt.js, ensuring high performance",
            "Designed reusable components for consistent and efficient development",
            "Integrated RESTful APIs for seamless front-end and back-end communication",
            "Identified and resolved bugs to improve application performance and reliability"
          ],
          skills: "Javascript, Nuxt.js, Vue.js, Vuex, Bootstrap, etc"
        }
      ]
    };
  }
};
</script>