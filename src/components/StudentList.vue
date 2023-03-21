<template>
  <div class="div">
    <table class="border-collapse" v-if="showTable">
      <thead>
        <tr>
          <th>
            <button
              @click="deleteSelectedStudents()"
              v-if="hasSelectedStudents"
              class="button"
            >
              Xóa tất cả
            </button>
          </th>
          <th>Mã Sinh Viên</th>
          <th>Họ và Tên</th>
          <th>Ngày Sinh</th>
          <th>Giới Tính</th>
          <th>Khoa</th>
          <th>Số Điện Thoại</th>
          <th>Sửa</th>
          <th>Xóa</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(student, index) in students" :key="index">
          <td>
            <input
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              type="checkbox"
              @change="toggleSelected(student)"
              :checked="
                selectStudents.findIndex(
                  (select) => select.id === student.id
                ) !== -1
              "
            />
          </td>
          <td>{{ student.id }}</td>
          <td>{{ student.name }}</td>
          <td>{{ student.date }}</td>
          <td>{{ student.gender }}</td>
          <td>{{ student.faculty }}</td>
          <td>{{ student.phone }}</td>
          <td>
            <!-- <router-link to="/student"> -->
              <button
                class="bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 border-b-4 border-orange-700 hover:border-orange-500 rounded"
                @click="editStudent(student)"
              >
                Sửa
              </button>
            <!-- </router-link> -->
          </td>
          <td>
            <button
              @click="deleteStudent(index)"
              class="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded"
            >
              Xóa
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "StudentList",
  data() {
    return {
      showTable: false,
      students: [],
      selectStudents: [],
      origin: [],
    };
  },
  computed: {
    hasSelectedStudents() {
      return this.selectStudents.length > 0;
    },
  },
  created() {
    const table = localStorage.getItem("students");
    if (table) {
      this.students = JSON.parse(localStorage.getItem("students"));
      this.showTable = true;
    }
  },
  methods: {
    sortAscendingInTable() {
      this.students.sort((a, b) => a.id - b.id);
      localStorage.setItem("students", JSON.stringify(this.students));
    },
    sortDescendingInTable() {
      this.students.sort((a, b) => b.id - a.id);
      localStorage.setItem("students", JSON.stringify(this.students));
    },
    addStudentInTable(student) {
      this.showTable = true;
      this.students.push(student);
      localStorage.setItem("students", JSON.stringify(this.students));
    },
    searchStudent(search) {
      if (search) {
        this.students = this.students.filter((student) =>
          student.name.toLowerCase().includes(search.toLowerCase())
        );
      } else {
        return this.students = JSON.parse(localStorage.getItem("students"))
      }
    },
    editStudent(student) {
      this.$emit("editStudent", student);
    },
    updateStudentInTable(updateNewStudent) {
      const index = this.students.findIndex(
        (student) => student.id === updateNewStudent.id
      );
      this.students.splice(index, 1, updateNewStudent);
      localStorage.setItem("students", JSON.stringify(this.students));
    },
    deleteStudent(index) {
      this.students.splice(index, 1);
      localStorage.setItem("students", JSON.stringify(this.students));
    },
    toggleSelected(student) {
      if (this.selectStudents.includes(student)) {
        this.selectStudents = this.selectStudents.filter((s) => s !== student);
      } else {
        this.selectStudents.push(student);
      }
    },
    deleteSelectedStudents() {
      this.students = this.students.filter(
        (student) => !this.selectStudents.includes(student)
      );
      this.selectStudents = [];
      localStorage.setItem("students", JSON.stringify(this.students));
    },
  },
};
</script>

<style scoped>
.div {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
}
td,
th {
  padding: 8px;
  border: 2px solid rgb(53, 52, 52);
  text-align: center;
  width: 150px;
}
button {
  width: 90px;
}
.button {
  background-color: rgb(28, 28, 75);
  color: white;
  border-radius: 5px;
}
</style>
