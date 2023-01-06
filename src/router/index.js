import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactsManager from '@/views/ContactsManager';
import AddContacts from '@/views/AddContacts';
import EditContacts from '@/views/EditContacts';
import ViewContacts from '@/views/ViewContacts';

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/contacts',
    component: HomeView
  },
  {
    path: '/contacts',
    name: 'ContactsManager',
    component: ContactsManager
  },
  {
    path: '/contacts/add',
    name: 'AddContacts',
    component: AddContacts
  },
  {
    path: '/contacts/edit/:contactsId',
    name: 'EditContacts',
    component: EditContacts,
  },
  {
    path: '/contacts/view/:contactsId',
    name: 'ViewContacts',
    props: true,
    component: ViewContacts
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
