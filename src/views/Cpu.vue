<template>
  <div class="container">
    <h1>Каталог процессоров</h1>
    <div class="form-group">
      <label for>Название</label>
      <input type="text" class="form-control" v-model="name" placeholder="Название" />
      <label for>Артикуль</label>
      <input type="text" class="form-control" v-model="articule" placeholder="Артикуль" />
      <label for>Телефон</label>
      <input type="text" class="form-control" v-model="phone" placeholder="Телефон" />
      <button v-if="isEdit" class="btn btn-primary mt-2" @click="onSaveEdit(id)">Сохранить</button>
      <button v-if="isEdit" class="btn btn-primary mt-2 ml-2" @click="EditModOff">Отмена</button>
      <button v-else class="btn btn-primary mt-2 soxr" @click="onSave">Сохранить</button>
      <hr />
    </div>
    <div class="row mt-2" v-for="(note, index) in notes" :key="note.id">
      <div class="col">{{note.name}}</div>
      <div class="col">{{note.articule}}</div>
      <div class="col">{{note.phone}}</div>

      <div class="col">
        <button class="btn btn-danger" @click="onDelete(note.id)">Удалить</button>
      </div>
      <div class="col">
        <button class="btn btn-primary" @click="EditModOn(index)">Редактировать</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-family: "Tangerine", serif;
}
.container {
  margin-top: 15px;
}

label {
  margin-top: 10px;
}

label:first-child {
  margin-top: 0px;
}
</style>

<script>
export default {
  name: "App",
  data: function() {
    return {
      notes: [],
      name: "",
      articule: "",
      phone: "",
      id: 0,
      errMsg: "",
      isEdit: false
    };
  },
  components: {},
  methods: {
    async updateData() {
      try {
        let res = await this.$http.get("http://localhost:3000/notes");
        this.notes = await res.json();
        this.errMsg = "";
      } catch (e) {
        console.error(e);
      }
    },
    async onSave() {
      let note = {
        name: this.name,
        articule: this.articule,
        phone: this.phone
      };
      let checkPhone = this.notes.filter(i => i.phone == note.phone);
      if (checkPhone != false) {
        this.errMsg = "Такой номер уже существует";
        return;
      }
      try {
        await this.$http.post("http://localhost:3000/notes", note);
        this.updateData();
      } catch (e) {
        console.error(e);
      }
    },
    async onDelete(id) {
      try {
        await this.$http.delete("http://localhost:3000/notes/" + id);
        this.updateData();
      } catch (e) {
        console.log(e);
      }
    },
    EditModOn(index) {
      this.name = this.notes[index].name;
      this.articule = this.notes[index].articule;
      this.phone = this.notes[index].phone;
      this.id = this.notes[index].id;
      this.isEdit = true;
    },
    EditModOff() {
      this.name = "";
      this.articule = "";
      this.phone = "";
      this.id = 0;
      this.isEdit = false;
    },
    async onSaveEdit(id) {
      let note = {
        name: this.name,
        articule: this.articule,
        phone: this.phone,
        id: this.id
      };
      let checkPhone = this.notes.filter(i => i.phone == note.phone);
      if (checkPhone != false) {
        this.errMsg = "Такой номер уже существует";
        return;
      }
      try {
        await this.$http.put("http://localhost:3000/notes/" + id, note);
        this.updateData();
      } catch (e) {
        console.log(e);
      }
    }
  },
  created() {
    this.updateData();
  }
};
</script>
