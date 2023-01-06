<template>

    <div class="container mt-3">
        <div class="row">
            <div class="col">
                <p class="h3 text-success fw-bold">Edit Contacts</p>
            </div>
        </div>
    </div>
    <div class="container mt-3">
        <div class="row">
            <div class="col-md-4">
                <form action="#" @submit.prevent="submitUp()">
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
                        <select v-model="contact.Id" class="form-control" v-if="groups.length > 0">
                            <option value="">Select Group</option>
                            <option :value="group.Id" v-for="group of groups" :key="group">{{ group.name }}</option>

                        </select>
                    </div>
                    <div class="mb-2">
                        <input type="submit" class="btn btn-success" value="Update">
                        <router-link to="/" class="m-lg-3 btn btn-success"> <i class="fa fa-circle-arrow-left"></i> Back
                            Home</router-link>
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
import { ContactsSv } from '@/services/ContactsSv'
export default {
    name: 'EditContacts',
    data() {
        return {
            contactsId: this.$route.params.contactsId,
            loading: false,
            contact: {
                name: '',
                email: '',
                mobile: '',
                photo: '',
                groupId: ''
            },
            errorMess: null,
            groups: [],

        }
    },
    created: async function () {
        try {
            this.loading = true;
            let res = await ContactsSv.getInfoId(this.contactsId);
            let groupRes = await ContactsSv.getAllGroup();
            this.contact = res.data;
            this.groups = groupRes.data;
            this.loading = false;


        } catch (error) {
            this.errorMess = error;
            this.loading = false;

        }
    },
    methods: {
        async submitUp() {
            try {
                let res = await ContactsSv.createContactsId(this.contact, this.contactsId);
                if (res) {
                    alert("Update thành công");
                    return this.$router.push('/');
                }
                else {
                    return this.$router.push(`/contacts/edit/${this.contactsId}`);
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