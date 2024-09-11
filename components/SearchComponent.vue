<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
  />

  <div>
    <!-- Search Input -->
    <input
      v-model="searchQuery"
      type="text"
      placeholder="กรอกข้อมูลเพื่อค้นหา ECU"
      @input="performSearch"
      style="margin-bottom: 1em; padding: 1em"
    />

    <!-- Search Results -->
    <div v-if="paginatedResults.length > 0">
      <ul>
        <li v-for="item in paginatedResults" :key="item.i">
          <p style="font-size: 1.4em">{{ item.p }}</p>
          <p class="ecu-info">
            ECM ID: {{ item.i }} , Start Offset: {{ item.s }} ,
            Checksum Offset: {{ item.c }}
          </p>
        </li>
      </ul>

      <!-- Pagination Controls -->
      <div class="pagination-controls">
        <button @click="prevPage" :disabled="currentPage === 1">
          <i class="fa-custom fa-solid fa-arrow-left"></i>
        </button>
        <span>หน้าที่ {{ currentPage }} / {{ totalPages }}</span>
        <button @click="nextPage" :disabled="currentPage === totalPages">
          <i class="fa-custom fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>

    <div v-else>
      <p>ไม่พบข้อมูล</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import data from "./ecus.json";

const searchQuery = ref("");
const filteredResults = ref(data);
const currentPage = ref(1);
const itemsPerPage = 5;

const performSearch = () => {
  const query = searchQuery.value.toLowerCase().replaceAll(" ", "");

  if (query) {
    filteredResults.value = data.filter(
      (item) =>
        item.i.toLowerCase().includes(query) ||
        item.p.toLowerCase().includes(query)
    );
  } else {
    filteredResults.value = data; // Show all items if no query
  }

  currentPage.value = 1;
};

const totalPages = computed(() => {
  return Math.ceil(filteredResults.value.length / itemsPerPage);
});

const paginatedResults = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return filteredResults.value.slice(start, end);
});

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value -= 1;
  }
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value += 1;
  }
};
</script>

<style scoped>
input {
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1em;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  padding-left: 16px;
  padding-right: 16px;
  margin-bottom: 2em;
  background-image: linear-gradient(120deg, #2a7cdacb 15%, #2a7cda00);
  border: 1px solid #246cbe;
  border-radius: 4px;
}

.ecu-info {
  border: 1px solid #246cbe;
  border-radius: 4px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.384);
}

button {
  margin: 0 0.5em;
  padding: 0.5em 1em;
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.pagination-controls {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3em;
}

.fa-custom {
  font-size: 1.5em;
}
</style>
