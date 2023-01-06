<template>
    <div class="container mt-3">
        <div class="row">
            <div class="col">
                <p class="h3 text-success fw-bold">View Contacts</p>
            </div>
        </div>
    </div>
    <div class="container mt-3" v-if="!loading && isDone()">
        <div class="row">
            <div class="col-md-3">
                <img :src="contact.photo" alt="" style="width: 150px; border-radius: 50%;">
            </div>
            <div class="col-md-4">
                <ul class="list-group">
                    <li class="list-group-item">
                        Name: <span class="fw-bold">{{ contact.name }}</span>
                    </li>
                    <li class="list-group-item">
                        Email: <span class="fw-bold">{{ contact.email }}</span>
                    </li>
                    <li class="list-group-item">
                        Mobie: <span class="fw-bold">{{ contact.mobile }}</span>
                    </li>
                    <li class="list-group-item">
                        Group: <span class="fw-bold">{{ group.name }}</span>
                    </li>
                </ul>
            </div>

        </div>
        <div class="row mt-4">
            <div class="col-md-4">
                <router-link to="/" class="btn btn-success"> <i class="fa fa-circle-arrow-left"></i> Back
                    Home</router-link>
            </div>
        </div>
    </div>


</template>

<script>
import { ContactsSv } from '@/services/ContactsSv'

export default {
    name: 'ViewContacts',
    data() {
        return {
            contactsId: this.$route.params.contactsId,
            loading: false,
            contact: {},
            errorMess: null,
            group: {}
        }

    },
    created: async function () {
        try {
            this.loading = true;
            let res = await ContactsSv.getInfoId(this.contactsId);
            let groupRes = await ContactsSv.getGroup(res.data);
            this.contact = res.data;
            this.group = groupRes.data;
            this.loading = false;

        } catch (error) {
            this.errorMess = error;
            this.loading = false;

        }
    },
    methods: {
        isDone() {
            return Object.keys(this.contact).length > 0 && Object.keys(this.group).length > 0
        }
    },



}
</script>

<style>

</style>