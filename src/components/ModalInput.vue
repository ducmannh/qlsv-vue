<template>
  <div class="div1 mt-3">
    <button
      @click="addStudent()"
      :disabled="addButtonDisabled"
      :class="{ disabled: addButtonDisabled }"
      class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 mr-6 rounded transition duration-150 ease-in-out"
    >
      Thêm Mới
    </button>
    <button
      @click="updateStudent()"
      :disabled="updateButtonDisabled"
      :class="{ disabled: updateButtonDisabled }"
      class="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded mr-6"
    >
      Cập Nhật
    </button>
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

  <div class="div2 mt-4">
    <div class="mr-10">
      <div class="mb-6">
        <label
          for="default-input"
          class="block text-sm font-medium text-gray-900 dark:text-black"
          >Mã Sinh Viên</label
        >
        <input
          type="number"
          id="default-input"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          v-model="studentID"
          :disabled="isDisabled"
          :class="{ disabled: isDisabled }"
        />
      </div>
      <div class="mb-6">
        <label
          for="default-input"
          class="block text-sm font-medium text-gray-900 dark:text-black"
          >Họ và Tên</label
        >
        <input
          type="text"
          id="default-input"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          v-model="studentName"
        />
      </div>
      <div class="mb-6">
        <label
          for="default-input"
          class="block text-sm font-medium text-gray-900 dark:text-black"
          >Ngày Sinh</label
        >
        <input
          type="date"
          id="default-input"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          v-model="studentDate"
        />
      </div>
    </div>

    <div>
      <label
        for="countries"
        class="block text-sm font-medium text-gray-900 dark:text-black"
        >Giới Tính</label
      >
      <select
        id="countries"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-6"
        v-model="studentGender"
      >
        <option selected></option>
        <option value="Nam">Nam</option>
        <option value="Nữ">Nữ</option>
      </select>

      <label
        for="countries"
        class="block text-sm font-medium text-gray-900 dark:text-black"
        >Khoa</label
      >
      <select
        id="countries"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-6"
        v-model="studentFaculty"
      >
        <option selected></option>
        <option value="Vật Lý">Vật Lý</option>
        <option value="Toán Tin">Toán Tin</option>
        <option value="Kế Toán">Kế Toán</option>
        <option value="Công nghệ thông tin">Công nghệ thông tin</option>
      </select>

      <div class="mb-6">
        <label
          for="default-input"
          class="block text-sm font-medium text-gray-900 dark:text-black"
          >Số Điện Thoại</label
        >
        <input
          type="number"
          id="default-input"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          v-model="studentPhone"
        />
      </div>
    </div>
  </div>

  <StudentList @editStudent="editStudentInTable" ref="child" />
</template>

<script>
import StudentList from "./StudentList.vue";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
export default {
  name: "ModalInput",
  components: {
    StudentList,
  },
  data() {
    return {
      studentID: "",
      studentName: "",
      studentGender: "",
      studentDate: "",
      studentFaculty: "",
      studentPhone: "",
      isDisabled: false,
      updateButtonDisabled: true,
      addButtonDisabled: false,
    };
  },
  methods: {
    sortAscending() {
      this.$refs.child.sortAscendingInTable();
    },
    sortDescending() {
      this.$refs.child.sortDescendingInTable();
    },
    addStudent() {
      if (
        this.studentID &&
        this.studentName &&
        this.studentDate &&
        this.studentGender &&
        this.studentFaculty &&
        this.studentPhone
      ) {
        const existID = this.$refs.child.students.find(
          (student) => student.id === this.studentID
        );
        if (existID) {
          toast.error("Mã sinh viên đã tồn tại", {
            autoClose: 2000,
          });
        } else {
          const newStudent = {
            id: this.studentID,
            name: this.studentName,
            date: this.studentDate,
            gender: this.studentGender,
            faculty: this.studentFaculty,
            phone: this.studentPhone,
          };
          setTimeout(() => {
            this.$refs.child.addStudentInTable(newStudent);
            this.studentID = "";
            this.studentName = "";
            this.studentDate = "";
            this.studentGender = "";
            this.studentFaculty = "";
            this.studentPhone = "";
          }, 2000);
          toast.success("Thêm thành công", {
            autoClose: 2000,
          });
        }
      } else {
        toast.error("Vui lòng nhập đủ thông tin", {
          autoClose: 3000,
        });
      }
    },
    editStudentInTable(student) {
      this.studentID = student.id;
      this.studentName = student.name;
      this.studentDate = student.date;
      this.studentGender = student.gender;
      this.studentFaculty = student.faculty;
      this.studentPhone = student.phone;
      this.isDisabled = true;
      this.updateButtonDisabled = false;
      this.addButtonDisabled = true;
    },
    updateStudent() {
      const updateNewStudent = {
        id: this.studentID,
        name: this.studentName,
        date: this.studentDate,
        gender: this.studentGender,
        faculty: this.studentFaculty,
        phone: this.studentPhone,
      };
      setTimeout(() => {
        this.$refs.child.updateStudentInTable(updateNewStudent);
        this.studentID = "";
        this.studentName = "";
        this.studentDate = "";
        this.studentGender = "";
        this.studentFaculty = "";
        this.studentPhone = "";
      }, 2000);

      this.isDisabled = false;
      this.addButtonDisabled = false;
      this.updateButtonDisabled = true;
      toast.success("Cập nhật thành công", {
        autoClose: 2000,
      });
    },
  },
};
</script>

<style scoped>
.div1 {
  display: flex;
  justify-content: center;
}
.div2 {
  display: flex;
  justify-content: center;
}
.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
