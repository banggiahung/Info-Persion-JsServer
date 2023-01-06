<template>
    <div class="mt-3 container">
        <div class="row">
            <div class="col">
                <p class="h3 text-success fw-bold">Contacts Manager
                    <router-link to="/contacts/add" class="btn btn-success btn-sm"><i
                            class="fa-brands fa-square-font-awesome-stroke m-lg-1"></i> Add more
                        member</router-link>
                </p>
                <form action="#">
                    <div class="row mt-3">
                        <div class="col-md-6">
                            <div class="row">
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="search name">
                                </div>
                                <div class="col">
                                    <input type="submit" class="btn  btn-outline-dark">
                                </div>
                            </div>
                        </div>

                    </div>

                </form>
            </div>
        </div>
    </div>
    <!-- error data -->
    <div v-if="!loading && errorMess">
        <div class="container mt-3">
            <div class="row">
                <div class="col">
                    <p class="h3 text-danger fw-bold">{{ errorMess }}</p>
                </div>
            </div>
        </div>
    </div>
    <div class="container mt-5" v-if="contacts.length > 0">
        <div class="row">
            <div class="col-md-6" v-for="contact of contacts" :key="contact">
                <div class="card my-2 list-group-item-success shadow-lg">
                    <div class="card-body">
                        <div class="row align-items-center">
                            <div class="col-sm-4">
                                <img :src="contact.photo" alt="" class="contact-img">
                            </div>
                            <div class="col-sm-7">
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
                                </ul>
                            </div>
                            <div class="col-sm-1 d-flex align-items-center flex-column">
                                <router-link :to="`/contacts/view/${contact.id}`" class="btn btn-warning my-1">
                                    <i class="fa fa-eye"></i>
                                </router-link>
                                <router-link :to="`/contacts/edit/${contact.id}`" class="btn btn-primary my-1">
                                    <i class="fa fa-pen"></i>
                                </router-link>
                                <button class="btn btn-danger my-1" @click="clickDelContact(contact.id)">
                                    <i class="fa fa-trash"></i>
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ContactsSv } from '@/services/ContactsSv';
export default {
    name: 'ContactsManager',
    data() {
        return {
            loading: false,
            contacts: [],
            errorMess: null
        }
    },
    created: async function () {
        try {
            this.loading = true;
            let res = await ContactsSv.getAllInfo();
            this.contacts = res.data;
            this.loading = false;

        } catch (error) {
            this.errorMess = error;
            this.loading = false;
        }
    },
    methods: {
        // async getAllContactData() {
        //     return await ContactsSv.getAllInfo()
        // }
        async clickDelContact(contactId) {
            try {
                this.loading = true;
                let res = await ContactsSv.deleteInfoId(contactId);
                if (res) {
                    let res = await ContactsSv.getAllInfo(); // reset data
                    this.contacts = res.data;
                    this.loading = false;
                }
                alert("Xóa thành công");
            }
            catch (error) {
                this.errorMess = error;
                this.loading = false;

            }
        }
    },


}
</script>

<style>

</style>