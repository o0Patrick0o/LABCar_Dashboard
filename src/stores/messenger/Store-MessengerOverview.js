import { defineStore } from "pinia";


export const useMessageStore = defineStore('messageStore',{
    state: () => ({
        activechats: [
            {
                id: 0,
                interlocutor: 'John Doe',
                interlocutorid: 234
            },
            {
                id: 1,
                interlocutor: 'Joe Deebs',
                interlocutorid: 235
            },
            {
                id: 2,
                interlocutor: 'Jason Bourne',
                interlocutorid: 236
            },
            {
                id: 3,
                interlocutor: 'Ernst August Dölle',
                interlocutorid: 237
            },
            {
                id: 4,
                interlocutor: 'Lord Emsworths',
                interlocutorid: 238
            }
        ],

        contacts: [
            {
                id: 234,
                name: 'John Doe',
                status: 'Wir sollten anfangen zu leben, bevor wir dafür zu alt werden',
                lastactivity: '12:34',
            },
            {
                id: 235,
                name: 'Joe Deebs',
                status: 'Lerne aus der Vergangenheit, aber mach sie nicht zu deinem Leben',
                lastactivity: '14:57',
            },
            {
                id: 236,
                name: 'Jason Bourne',
                status: 'Der Schwache kann nicht verzeihen. Verzeihen ist eine Eigenschaft des Starken',
                lastactivity: '15:43',
            },
            {
                id: 237,
                name: 'Ernst August Dölle',
                status: 'Fremde Fehler beurteilen wir, wie Staatsanwälte, die eigenen, wie Verteidiger',
                lastactivity: '11:23',
            },
            {
                id: 238,
                name: 'Lord Emsworths',
                status: 'Wenn du Pech hast, merkst du es sofort, wenn du Glück hast sehr selten',
                lastactivity: '10:40',
            },
            {
                id: 239,
                name: 'Laozi',
                status: 'Wahre Worte sind nicht immer schön. Schöne Worte sind nicht immer wahr.',
                lastactivity: '09:23',
            },
            {
                id: 240,
                name: 'Paracelsus',
                status: 'Allein die Dosis macht das Gift.',
                lastactivity: '08:45',
            },
            {
                id: 241,
                name: 'Isaac Newton',
                status: 'Was wir wissen, ist ein Tropfen, was wir nicht wissen, ein Ozean.',
                lastactivity: '16:54',
            },
            {
                id: 242,
                name: 'Marcus Aurelius',
                status: 'Unser Leben ist das, wozu unser Denken es macht.',
                lastactivity: '20:00',
            },
            {
                id: 243,
                name: 'Hannah Arendt',
                status: 'Vergebung ist der Schlüssel zum Handeln und zur Freiheit.',
                lastactivity: '00:00',
            },
        ]
    }),


    getters: {
        
        getActiveChats: (state) => {
            return state.activechats;
        },
        
        getContact: (state) => {
            return (id) => state.contacts.find((t) => t.id === id);
        },
        
    },

    actions: {
        
        
    },
});
