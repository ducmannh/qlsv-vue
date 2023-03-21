<template>
  <div class="div">
    <label
      for="search"
      class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >Search</label
    >
    <div class="relative">
      <div
        class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
      >
        <svg
          aria-hidden="true"
          class="w-5 h-5 text-gray-500 dark:text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </div>
      <input
        type="search"
        id="search"
        class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search"
        required
        v-model="search"
      />
      <button
        @click="searchStudents()"
        type="button"
        class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Search
      </button>
    </div>
  </div>
  <div class="div1">
    <button
      @click="sortAscending()"
      class="bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 border-b-4 border-yellow-700 hover:border-yellow-500 rounded mr-6"
    >
      Sắp xếp tăng dần
    </button>
    <button
      @click="sortDescending()"
      class="bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 border-b-4 border-yellow-700 hover:border-yellow-500 rounded"
    >
      Sắp xếp giảm dần
    </button>
  </div>

  <div class="div2">
    <StudentList
      ref="childSearch"
      @editStudent="editStudent()"
    />
  </div>
</template>

<script>
import StudentList from "./StudentList.vue";
export default {
  name: "ManageStudent",
  components: {
    StudentList,
  },
  data() {
    return {
      search: "",
    };
  },
  methods: {
    sortAscending() {
      this.$refs.childSearch.sortAscendingInTable();
    },
    sortDescending() {
      this.$refs.childSearch.sortDescendingInTable();
    },
    searchStudents() {
      this.$refs.childSearch.searchStudent(this.search);
      this.search = "";
    },
    editStudent() {
      console.log("aaa");
    },
  },
};
</script>

<style scoped>
.div {
  width: 1400px;
  margin: 0 auto;
  margin-top: 10px;
}
.div1 {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
.div2 {
  margin-top: 20px;
}
</style>
