<template>

    <div class="container mt-3">
        <div class="row">
            <div class="col">
                <p class="h3 text-success fw-bold"> Add Member </p>
            </div>
        </div>
    </div>
    <div class="container mt-3">
        <div class="row">
            <div class="col-md-4">
                <form @submit.prevent="submitAdd()" action="#">
                    <div class="mb-2">
                        <input required v-model="contact.name" type="text" class="form-control" placeholder="Name">
                    </div>
                    <div class="mb-2">
                        <input required v-model="contact.photo" type="text" class="form-control" placeholder="PhotoURL">
                    </div>
                    <div class="mb-2">
                        <input required v-model="contact.email" type="email" class="form-control" placeholder="Email">
                    </div>
                    <div class="mb-2">
                        <input required v-model="contact.mobile" type="text" class="form-control" placeholder="Mobile">
                    </div>
                    <div class="mb-2">
                        <select v-model="contact.groupId" class="form-control" v-if="groups.length > 0">
                            <option value="">Select Group</option>
                            <option :value="group.id" v-for="group of groups" :key="group.id">{{ group.name }}</option>
                        </select>
                    </div>
                    <div class="mb-2">
                        <input type="submit" class="btn btn-success" value="Add">
                    </div>
                </form>
            </div>
            <div class="col-md-4">
                <img :src="contact.photo" alt="" style="width: 150px; border-radius: 50%;">
            </div>
        </div>
    </div>
</template>

<script>
import { ContactsSv } from '@/services/ContactsSv';
export default {
    name: 'AddContacts',
    data() {
        return {
            contact: {
                name: '',
                email: '',
                mobile: '',
                photo: '',
                groupId: ''
            },
            groups: []
        }
    },
    created: async function () {
        try {
            let res = await ContactsSv.getAllGroup();
            this.groups = res.data;
        } catch (error) {
            console.log(error);

        }
    },
    methods: {
        async submitAdd() {
            try {
                let res = await ContactsSv.createInfoId(this.contact);
                if (res) {
                    alert("thêm thành công");
                    return this.$router.push('/');
                }
                else {
                    return this.$router.push('/contacts/add')
                }
            } catch (error) {
                console.log(error)
            }
        }
    }

}
</script>

<style>

</style>