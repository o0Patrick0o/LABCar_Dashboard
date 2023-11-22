
import { defineStore } from "pinia";


export const useMessengerStore = defineStore('messengerStore',{
    state: () => ({
      storage: JSON.parse(localStorage.getItem("chat") || "{}"),
      loading: false,
      recentEmoji: [],
      emojiSkinTone: "neutral",

      activeSidebarComponent: "messages",
      delayLoading: true,
      activeConversationId: 6,
      conversationOpen: '',
      callMinimized: false,
      openVoiceCall: false,

      activeconversation: [],

      defaultSettings: [
        {
          lastSeen: false,
          readReceipt: false,
          joiningGroups: false,
          privateMessages: false,
          darkMode: false,
          borderedTheme: false,
          allowNotifications: false,
          keepNotifications: false,
        },
      ],

      user: {
        id: 1,
        firstName: "Dawn",
        lastSeen: new Date(),
        lastName: "Sabrina",
        email: "sabrina@gmail.com",
        avatar:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        token: "fakeToken",
        contacts: [
          {
            id: 2,
            email: "user@gmail.com",
            firstName: "Ahmed",
            lastName: "Ali",
            lastSeen: new Date(),
            avatar:
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
          },
          {
            id: 3,
            email: "user@gmail.com",
            firstName: "Allen",
            lastName: "Carr",
            lastSeen: new Date(),
            avatar:
              "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
          },
          {
            id: 4,
            email: "user@gmail.com",
            firstName: "Dawn",
            lastName: "Sabrina",
            lastSeen: new Date(),
            avatar:
              "https://images.unsplash.com/photo-1657214059233-5626b35eb349?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80",
          },
          {
            id: 5,
            email: "user@gmail.com",
            firstName: "Dylan",
            lastName: "Billy",
            lastSeen: new Date(),
            avatar:
              "https://images.unsplash.com/photo-1522556189639-b150ed9c4330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
          },
          {
            id: 6,
            email: "user@gmail.com",
            firstName: "Elijah",
            lastName: "Sabrina",
            lastSeen: new Date(),
            avatar:
              "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
          },
          {
            id: 7,
            email: "user@gmail.com",
            firstName: "Emma",
            lastName: "Layla",
            lastSeen: new Date(),
            avatar:
              "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
          },
          {
            id: 8,
            email: "user@gmail.com",
            firstName: "Evelyn",
            lastName: "Billy",
            lastSeen: new Date(),
            avatar:
              "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          },
          {
            id: 9,
            email: "user@gmail.com",
            firstName: "Feng",
            lastName: "Zhuo",
            lastSeen: new Date(),
            avatar:
              "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
          },
          {
            id: 10,
            email: "user@gmail.com",
            firstName: "Fung",
            lastName: "Sheng",
            lastSeen: new Date(),
            avatar:
              "https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?cs=srgb&dl=pexels-charles-1851164.jpg&fm=jpg",
          },
        ],
      },

      conversations: [
        {
          id: 1,
          type: "couple",
          unread: 2,
          draftMessage: "",
          contacts: [
            {
              id: 6,
              email: "user@gmail.com",
              firstName: "Elijah",
              lastName: "Sabrina",
              lastSeen: new Date(),
              avatar:
                "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            },
            {
              id: 1,
              firstName: "Dawn",
              lastName: "Sabrina",
              lastSeen: new Date(),
              email: "sabrina@gmail.com",
              avatar:
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            },
          ],
          messages: [
            {
              id: 1,
              content: "Lorem ipsum dolor sit amet.",
              date: "3:00 pm",
              state: "read",
              sender: {
                id: 6,
                email: "user@gmail.com",
                firstName: "Elijah",
                lastName: "Sabrina",
                lastSeen: new Date(),
                avatar:
                  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
              },
            },
            {
              id: 2,
              content: "Lorem ipsum dolor sit amet.",
              date: "4:00 pm",
              state: "sent",
              sender: {
                id: 1,
                firstName: "Dawn",
                lastName: "Sabrina",
                lastSeen: new Date(),
                email: "sabrina@gmail.com",
                avatar:
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
              },
              replyTo: 1,
            },
            {
              id: 3,
              content: "Lorem ipsum dolor sit amet.",
              date: "3:00 pm",
              state: "read",
              sender: {
                id: 6,
                email: "user@gmail.com",
                firstName: "Elijah",
                lastName: "Sabrina",
                lastSeen: new Date(),
                avatar:
                  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
              },
              replyTo: 2,
            },
            {
              id: 4,
              content: "Check this out https://github.com/",
              date: "4:00 pm",
              state: "read",
              sender: {
                id: 6,
                email: "user@gmail.com",
                firstName: "Elijah",
                lastName: "Sabrina",
                lastSeen: new Date(),
                avatar:
                  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
              },
              previewData: {
                link: "https://github.com/",
                title: "Github",
                image:
                  "https://github.blog/wp-content/uploads/2021/01/102393310-07478b80-3f8d-11eb-84eb-392d555ebd29.png?fit=1200%2C630",
                description:
                  "GitHub is where over 83 million developers shape the future of software, together. Contribute to the open source community",
                domain: "github.com",
              },
            },
            {
              id: 5,
              content: "Lorem ipsum dolor sit amet.",
              date: "5:00 pm",
              state: "delivered",
              sender: {
                id: 1,
                firstName: "Dawn",
                lastName: "Sabrina",
                lastSeen: new Date(),
                email: "sabrina@gmail.com",
                avatar:
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
              },
              attachments: [
                {
                  id: 3,
                  type: "image",
                  name: "mountain.jpg",
                  size: "20 MB",
                  url: "https://images.unsplash.com/photo-1664091729644-07a158d7c4ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
                },
                {
                  id: 2,
                  type: "image",
                  name: "pumkins.jpg",
                  size: "20 MB",
                  url: "https://images.unsplash.com/photo-1664031315855-955dbca83172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                },
                {
                  id: 1,
                  type: "image",
                  name: "forest.jpg",
                  size: "20 MB",
                  url: "https://images.unsplash.com/photo-1664021975758-78d83898225d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
                },
              ],
              replyTo: 4,
            },
            {
              id: 6,
              date: "5:30 pm",
              state: "read",
              attachments: [
                {
                  id: 4,
                  type: "file",
                  name: "lecture-10.pdf",
                  size: "54.5 MB",
                  url: "https://losalamos.unm.edu/forms/study-methods.pdf",
                },
              ],
              sender: {
                id: 6,
                email: "user@gmail.com",
                firstName: "Elijah",
                lastName: "Sabrina",
                lastSeen: new Date(),
                avatar:
                  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
              },
            },
            {
              id: 7,
              date: "6:00 pm",
              state: "read",
              attachments: [
                {
                  id: 5,
                  type: "video",
                  name: "fun-video.mp4",
                  size: "11.4 MB",
                  url: "https://www.w3schools.com/html/mov_bbb.mp4",
                  thumbnail:
                    "https://images.unsplash.com/photo-1559705421-4ae9bf6fabb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                },
                {
                  id: 12,
                  type: "video",
                  name: "awesome-video.mp4",
                  size: "11.4 MB",
                  url: "https://assets.mixkit.co/videos/preview/mixkit-small-flowering-plants-in-a-nursery-43709-large.mp4",
                  thumbnail:
                    "https://images.unsplash.com/photo-1496715976403-7e36dc43f17b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                },
              ],
              sender: {
                id: 6,
                email: "user@gmail.com",
                firstName: "Elijah",
                lastName: "Sabrina",
                lastSeen: new Date(),
                avatar:
                  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
              },
            },
            {
              id: 8,
              type: "recording",
              state: "waiting",
              content: {
                id: 1,
                size: "10 MB",
                src: "https://assets.mixkit.co/music/preview/mixkit-tech-house-vibes-130.mp3",
                duration: "23s",
              },
              date: "6:20 pm",
              sender: {
                id: 1,
                firstName: "Dawn",
                lastName: "Sabrina",
                lastSeen: new Date(),
                email: "sabrina@gmail.com",
                avatar:
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
              },
            },
          ],
        },
      
        {
          id: 2,
          type: "couple",
          draftMessage: "",
          contacts: [
            {
              id: 5,
              email: "user@gmail.com",
              firstName: "Dylan",
              lastName: "Billy",
              lastSeen: new Date(),
              avatar:
                "https://images.unsplash.com/photo-1522556189639-b150ed9c4330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            },
            {
              id: 1,
              firstName: "Dawn",
              lastName: "Sabrina",
              lastSeen: new Date(),
              email: "sabrina@gmail.com",
              avatar:
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            },
          ],
          messages: [
            {
              id: 1,
              content: "Can you send me a link",
              date: "8:15 am",
              state: "read",
              sender: {
                id: 1,
                firstName: "Dawn",
                lastName: "Sabrina",
                lastSeen: new Date(),
                email: "sabrina@gmail.com",
                avatar:
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
              },
            },
            {
              id: 2,
              content: "So i found this great video online",
              date: "1:00 pm",
              state: "read",
              sender: {
                id: 5,
                email: "user@gmail.com",
                firstName: "Dylan",
                lastName: "Billy",
                lastSeen: new Date(),
                avatar:
                  "https://images.unsplash.com/photo-1522556189639-b150ed9c4330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
              },
            },
            {
              id: 3,
              content: "It’s about stopping drugs",
              date: "1:05 pm",
              state: "read",
              sender: {
                id: 5,
                email: "user@gmail.com",
                firstName: "Dylan",
                lastName: "Billy",
                lastSeen: new Date(),
                avatar:
                  "https://images.unsplash.com/photo-1522556189639-b150ed9c4330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
              },
            },
            {
              id: 4,
              content: "Can you send me a link",
              date: "1:15 pm",
              state: "read",
              sender: {
                id: 1,
                firstName: "Dawn",
                lastName: "Sabrina",
                lastSeen: new Date(),
                email: "sabrina@gmail.com",
                avatar:
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
              },
            },
            {
              id: 6,
              content: "Hey there, check this out",
              date: "1:30 pm",
              state: "read",
              attachments: [
                {
                  id: 14,
                  type: "image",
                  name: "forest.jpg",
                  size: "20 MB",
                  url: "https://images.unsplash.com/photo-1664021975758-78d83898225d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
                },
                {
                  id: 13,
                  type: "video",
                  name: "fun-video.mp4",
                  size: "11.4 MB",
                  url: "https://www.w3schools.com/html/mov_bbb.mp4",
                  thumbnail:
                    "https://images.unsplash.com/photo-1559705421-4ae9bf6fabb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                },
                {
                  id: 15,
                  type: "image",
                  name: "forest.jpg",
                  size: "20 MB",
                  url: "https://images.unsplash.com/photo-1664021975758-78d83898225d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
                },
              ],
              sender: {
                id: 5,
                email: "user@gmail.com",
                firstName: "Dylan",
                lastName: "Billy",
                lastSeen: new Date(),
                avatar:
                  "https://images.unsplash.com/photo-1522556189639-b150ed9c4330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
              },
            },
            {
              id: 7,
              content: "Wow, really cool",
              date: "1:30 pm",
              state: "read",
              sender: {
                id: 1,
                firstName: "Dawn",
                lastName: "Sabrina",
                lastSeen: new Date(),
                email: "sabrina@gmail.com",
                avatar:
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
              },
            },
            {
              id: 8,
              content: "You're welcome",
              date: "1:30 pm",
              state: "read",
              sender: {
                id: 5,
                email: "user@gmail.com",
                firstName: "Dylan",
                lastName: "Billy",
                lastSeen: new Date(),
                avatar:
                  "https://images.unsplash.com/photo-1522556189639-b150ed9c4330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
              },
            },
          ],
        },
      
        {
          id: 6,
          type: "group",
          name: "Design Team",
          avatar:
            "https://images.unsplash.com/photo-1573867639040-6dd25fa5f597?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
          admins: [1],
          draftMessage: "",
          contacts: [
            {
              id: 1,
              firstName: "Dawn",
              lastName: "Sabrina",
              lastSeen: new Date(),
              email: "sabrina@gmail.com",
              avatar:
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            },
            {
              id: 2,
              email: "user@gmail.com",
              firstName: "Ahmed",
              lastName: "Ali",
              lastSeen: new Date(),
              avatar:
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            },
            {
              id: 3,
              email: "user@gmail.com",
              firstName: "Allen",
              lastName: "Carr",
              lastSeen: new Date(),
              avatar:
                "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            },
          ],
          messages: [
            {
              id: 1,
              content: "Hey there",
              date: "1:00 pm",
              state: "read",
              sender: {
                id: 1,
                firstName: "Dawn",
                lastName: "Sabrina",
                lastSeen: new Date(),
                email: "sabrina@gmail.com",
                avatar:
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
              },
            },
            {
              id: 2,
              content: "I got a new dog",
              date: "2:00 pm",
              state: "read",
              sender: {
                id: 2,
                email: "user@gmail.com",
                firstName: "Ahmed",
                lastName: "Ali",
                lastSeen: new Date(),
                avatar:
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
              },
            },
            {
              id: 3,
              content: "Oh, ok good to know.",
              date: "5:00 pm",
              state: "read",
              sender: {
                id: 1,
                firstName: "Dawn",
                lastName: "Sabrina",
                lastSeen: new Date(),
                email: "sabrina@gmail.com",
                avatar:
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
              },
            },
            {
              id: 4,
              content: "It was great catching up with you the other day",
              date: "3:00 pm",
              state: "read",
              sender: {
                id: 3,
                email: "user@gmail.com",
                firstName: "Allen",
                lastName: "Carr",
                lastSeen: new Date(),
                avatar:
                  "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
              },
            },
            {
              id: 5,
              content: "Thank you very much.",
              date: "3:00 pm",
              state: "read",
              sender: {
                id: 1,
                firstName: "Dawn",
                lastName: "Sabrina",
                lastSeen: new Date(),
                email: "sabrina@gmail.com",
                avatar:
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
              },
            },
            {
              id: 6,
              content: "Lets meet agian next week.",
              date: "5:00 pm",
              state: "read",
              sender: {
                id: 1,
                firstName: "Dawn",
                lastName: "Sabrina",
                lastSeen: new Date(),
                email: "sabrina@gmail.com",
                avatar:
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
              },
            },
            {
              id: 7,
              content: "Ok next week then.",
              date: "5:00 pm",
              state: "read",
              sender: {
                id: 2,
                email: "user@gmail.com",
                firstName: "Ahmed",
                lastName: "Ali",
                lastSeen: new Date(),
                avatar:
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
              },
            },
          ],
        },
      
        {
          id: 7,
          type: "broadcast",
          name: "Breaking News",
          avatar:
            "https://images.unsplash.com/photo-1572949645841-094f3a9c4c94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
          admins: [1],
          draftMessage: "",
      
          contacts: [
            {
              id: 1,
              firstName: "Dawn",
              lastName: "Sabrina",
              lastSeen: new Date(),
              email: "sabrina@gmail.com",
              avatar:
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            },
            {
              id: 2,
              email: "user@gmail.com",
              firstName: "Ahmed",
              lastName: "Ali",
              lastSeen: new Date(),
              avatar:
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            },
            {
              id: 3,
              email: "user@gmail.com",
              firstName: "Allen",
              lastName: "Carr",
              lastSeen: new Date(),
              avatar:
                "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            },
          ],
          messages: [
            {
              id: 1,
              content:
                "A truck collision turns a Florida highway into a silver sea of beer cans",
              date: "1:00 pm",
              state: "read",
              sender: {
                id: 1,
                firstName: "Dawn",
                lastName: "Sabrina",
                lastSeen: new Date(),
                email: "sabrina@gmail.com",
                avatar:
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
              },
            },
            {
              id: 2,
              content:
                "Apple Watch Ultra and next-generation AirPods Pro available in stores Friday",
              date: "5:00 pm",
              state: "read",
              sender: {
                id: 1,
                firstName: "Dawn",
                lastName: "Sabrina",
                lastSeen: new Date(),
                email: "sabrina@gmail.com",
                avatar:
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
              },
            },
          ],
        },
      ],

      archive: [
        {
          id: 3,
          type: "couple",
          draftMessage: "",
          contacts: [
            {
              id: 4,
              email: "user@gmail.com",
              firstName: "Dawn",
              lastName: "Sabrina",
              lastSeen: new Date(),
              avatar: "https://images.unsplash.com/photo-1657214059233-5626b35eb349?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80",
            },
            {
              id: 1,
              firstName: "Dawn",
              lastName: "Sabrina",
              lastSeen: new Date(),
              email: "sabrina@gmail.com",
              avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            },
          ],
          messages: [
            {
              id: 1,
              content: "Oh, ok good to know.",
              date: "4:00 pm",
              state: "read",
              sender: {
                id: 1,
                firstName: "Dawn",
                lastName: "Sabrina",
                lastSeen: new Date(),
                email: "sabrina@gmail.com",
                avatar:
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
              },
            },
          ],
        },
      
        {
          id: 4,
          type: "couple",
          draftMessage: "",
          contacts: [
            {
              id: 3,
              email: "user@gmail.com",
              firstName: "Allen",
              lastName: "Carr",
              lastSeen: new Date(),
              avatar:
                "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            },
            {
              id: 1,
              firstName: "Dawn",
              lastName: "Sabrina",
              lastSeen: new Date(),
              email: "sabrina@gmail.com",
              avatar:
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            },
          ],
          messages: [
            {
              id: 1,
              content: "Oh, ok good to know.",
              date: "4:00 pm",
              state: "read",
              sender: {
                id: 1,
                firstName: "Dawn",
                lastName: "Sabrina",
                lastSeen: new Date(),
                email: "sabrina@gmail.com",
                avatar:
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
              },
            },
          ],
        },
      ],
      
      notifications: [
        {
          flag: "security",
          title: "Recent Login",
          message: "there was a recent login to you account from this device",
        },
        {
          flag: "added-to-group",
          title: "New Group",
          message: "Your friend added you to a new group",
        },
        {
          flag: "account-update",
          title: "Password Reset",
          message: "Your password has been restored successfully",
        },
        {
          flag: "security",
          title: "Recent Login",
          message: "there was a recent login to you account from this device",
        },
        {
          flag: "added-to-group",
          title: "New Group",
          message: "Your friend added you to a new group",
        },
      ],
      
      calls: [
        {
          id: 1,
          type: "voice",
          status: "missed",
          direction: "incoming",
          date: "Dec 12, 2020",
          length: "01:12",
          members: [
            {
              id: 1,
              firstName: "Dawn",
              lastName: "Sabrina",
              lastSeen: new Date(),
              email: "sabrina@gmail.com",
              avatar:
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            },
            {
              id: 2,
              email: "user@gmail.com",
              firstName: "Ahmed",
              lastName: "Ali",
              lastSeen: new Date(),
              avatar:
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            },
          ],
          adminIds: [1],
        },
      
        {
          id: 2,
          type: "voice",
          status: "received",
          direction: "incoming",
          date: "Dec 12, 2020",
          length: "01:12",
          members: [
            {
              id: 1,
              firstName: "Dawn",
              lastName: "Sabrina",
              lastSeen: new Date(),
              email: "sabrina@gmail.com",
              avatar:
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            },
            {
              id: 2,
              email: "user@gmail.com",
              firstName: "Ahmed",
              lastName: "Ali",
              lastSeen: new Date(),
              avatar:
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            },
            {
              id: 3,
              email: "user@gmail.com",
              firstName: "Allen",
              lastName: "Carr",
              lastSeen: new Date(),
              avatar:
                "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            },
            {
              id: 9,
              email: "user@gmail.com",
              firstName: "Feng",
              lastName: "Zhuo",
              lastSeen: new Date(),
              avatar:
                "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            },
          ],
          adminIds: [2],
        },
      
        {
          id: 3,
          type: "voice",
          status: "sent",
          direction: "outgoing",
          date: "Dec 12, 2020",
          length: "01:12",
          members: [
            {
              id: 1,
              firstName: "Dawn",
              lastName: "Sabrina",
              lastSeen: new Date(),
              email: "sabrina@gmail.com",
              avatar:
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            },
            {
              id: 5,
              email: "user@gmail.com",
              firstName: "Dylan",
              lastName: "Billy",
              lastSeen: new Date(),
              avatar:
                "https://images.unsplash.com/photo-1522556189639-b150ed9c4330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            },
          ],
          adminIds: [1],
        },
      
        {
          id: 4,
          type: "voice",
          status: "missed",
          direction: "incoming",
          date: "Dec 12, 2020",
          length: "01:12",
          members: [
            {
              id: 1,
              firstName: "Dawn",
              lastName: "Sabrina",
              lastSeen: new Date(),
              email: "sabrina@gmail.com",
              avatar:
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            },
            {
              id: 3,
              email: "user@gmail.com",
              firstName: "Allen",
              lastName: "Carr",
              lastSeen: new Date(),
              avatar:
                "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            },
          ],
          adminIds: [1],
        },
      
        {
          id: 5,
          type: "voice",
          status: "sent",
          direction: "outgoing",
          date: "Dec 12, 2020",
          length: "01:12",
          members: [
            {
              id: 1,
              firstName: "Dawn",
              lastName: "Sabrina",
              lastSeen: new Date(),
              email: "sabrina@gmail.com",
              avatar:
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            },
            {
              id: 8,
              email: "user@gmail.com",
              firstName: "Evelyn",
              lastName: "Billy",
              lastSeen: new Date(),
              avatar:
                "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            },
            {
              id: 10,
              email: "user@gmail.com",
              firstName: "Fung",
              lastName: "Sheng",
              lastSeen: new Date(),
              avatar:
                "https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?cs=srgb&dl=pexels-charles-1851164.jpg&fm=jpg",
            },
          ],
          adminIds: [1],
        },
      ],
      
      activeCall: {
        id: 6,
        type: "voice",
        status: "dialing",
        direction: "outgoing",
        date: "Dec 12, 2020",
        length: "01:12",
        members: [
          {
            id: 1,
            firstName: "Dawn",
            lastName: "Sabrina",
            lastSeen: new Date(),
            email: "sabrina@gmail.com",
            avatar:
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
          },
          {
            id: 8,
            email: "user@gmail.com",
            firstName: "Evelyn",
            lastName: "Billy",
            lastSeen: new Date(),
            avatar:
              "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          },
        ],
        adminIds: [1],
      },

      attachments: [
        {
          id: 6,
          type: "image",
          name: "forest.jpg",
          size: "21 MB",
          url: "https://images.unsplash.com/photo-1664021975758-78d83898225d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        },
        {
          id: 7,
          type: "image",
          name: "pumkins.jpg",
          size: "22 MB",
          url: "https://images.unsplash.com/photo-1664031315855-955dbca83172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        },
        {
          id: 8,
          type: "image",
          name: "mountain.jpg",
          size: "23 MB",
          url: "https://images.unsplash.com/photo-1664091729644-07a158d7c4ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        },
        {
          id: 9,
          type: "file",
          name: "lecture-10.pdf",
          size: "52.4 MB",
          url: "https://images.unsplash.com/photo-1664091729644-07a158d7c4ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        },
        {
          id: 10,
          type: "video",
          name: "fun-video.mp4",
          size: "11.4 MB",
          url: "https://images.unsplash.com/photo-1559705421-4ae9bf6fabb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        },
      ],
      
    }),


    getters: {
        
        getData: (state) => {
          var data = { user: state.user, conversations: state.conversations, notifications: state.notifications, archivedConversations: state.archive,}
          return data;
        },

        getActiveConversationId: (state) => {
          return state.activeConversationId;
        },

        getLoading: (state) => {
          return state.loading;
        },
        
        updateAccount: () => {
          var detail = "Your account has been updated successfully"
          return detail;
        },

        getSettings: (state) => {
          return state.defaultSettings;
        },

        getActiveSidebarComponent: (state) => {
          return state.activeSidebarComponent;
        },

        getUser: (state) => {
          return state.user;
        },

        getEmojiSkinTone: (state) => {
          return state.emojiSkinTone
        },

        getArchive: (state) => {
          return state.archive;
        },

        getConversations: (state) => {
          return state.conversations
        },

        getCalls: (state) => {
          return state.calls;
        },

        getActiveCall: (state) => {
          return state.activeCall
        },

        getAttachments: (state) => {
          return state.attachments;
        },

        getConversationOpen: (state) => {
          return state.conversationOpen;
        },

        getCallMinimized: (state) => {
          return state.callMinimized;
        },

        getOpenVoiceCall: (state) => {
          return state.openVoiceCall;
        },

        getActiveConversation: (state) => {
          return state.activeconversation;
        },
 
    },

    actions: {
      
      contactGroups() {
        if (this.user) {
         let sortedContacts = [this.user.contacts];
   
         sortedContacts.sort();
   
         let groups = [];
         let currentLetter = "";
         let groupNames = [];
   
         // create an array of letter for every different sort level.
         for (let contact of sortedContacts) {
           // if the first letter is different create a new group.
           if (contact.firstName[0].toUpperCase() !== currentLetter) {
             currentLetter = contact.firstName[0].toUpperCase();
             groupNames.push(currentLetter);
           }
         }
   
         // create an array that groups contact names based on the first letter;
         for (let groupName of groupNames) {
           let group = { letter: groupName, contacts: [] };
           for (let contact of sortedContacts) {
             if (contact.firstName[0].toUpperCase() === groupName) {
               group.contacts.push(contact);
             }
           }
           groups.push(group);
         }
   
         return groups;
       }
      },

      setLoading(load) {
        this.loading = load;
      },

      setActiveSidebarComponent(value) {
        this.activeSidebarComponent = value;
      },

      setDarkMode() {
        this.defaultSettings.darkMode = !this.defaultSettings.darkMode
      },

      setEmojiSkinTone(value) {
        this.emojiSkinTone = value;
      },

      setConversationOpen(value) {
        this.conversationOpen = value
      },

      setActiveConversationId(value) {
        this.activeConversationId = value
      },

      setConversationsUnread(index, value) {
        this.conversations[index].unread = value
      },

      setActiveCallStatus(value) {
        this.activeCall.status = value;
      },

      setActiveCall(value) {
        this.activeCall =  value;
      },

      setCallMinimized(value) {
        this.callMinimized = value;
      },

      setOpenVoiceCall(value) {
        this.openVoiceCall = value;
      },

      setActiveConversation(value) {
        this.activeconversation = value;
      },


      getFullName(contact) {
        return contact.firstName + " " + contact.lastName;
      },

      getOddContact(conversation) {
        let oddContact;

        for (let contact in this.conversations.contacts) {
          if (this.user && contact.id !== this.user.id) {
            oddContact = contact;
          }
        }

        return oddContact;
      },

      getAvatar(conversation) {
        if (["group", "broadcast"].includes(conversation.type)) {
          return conversation?.avatar;
        } else {
          let oddContact = this.getOddContact(conversation);
          return oddContact?.avatar;
        }
      },


      getName(conversation) {
        if (["group", "broadcast"].includes(conversation.type)) {
          return conversation?.name;
        } else {
          let oddContact = this.getOddContact(conversation);
          if (oddContact) {
            return this.getFullName(oddContact);
          }
        }
      },


      shorten(message, maxLength = 23) {
        let text;

        if (typeof message === "string") {
          text = message;
        } else {
          text = message.content;
        }

        if (text && typeof text === "string") {
          let trimmedString = text;
          if (text.length > maxLength) {
            trimmedString = trimmedString.slice(0, maxLength);
            trimmedString += "...";
          }
          return trimmedString;
        }

        return "";
      },

      hasAttachments(message) {
        let attachments = message.attachments;
        return attachments && attachments.length > 0;
      },


      getConversationIndex(conversationId) {
        let conversationIndex;

        this.conversations.forEach((conversation, index) => {
          if (conversation.id === conversationId) {
            conversationIndex = index;
          }
        });

        return conversationIndex;
      },


      getOtherMembers(call) {
        let members = [];

        if (call) {
          for (let member of call.members) {
            if (this.user && member.id !== this.user.id) {
              members.push(member);
            }
          }
        }

        return members;
      },


      getCallName( call,  full, maxLength = 20 ) {
        let members = this.getOtherMembers(call);
        let callName = "";

        for (let member of members) {
          callName += this.getFullName(member);

          if (members.length > 1) {
            callName += ", ";
          }
        }

        if (full) {
          return callName;
        } else {
          return this.shorten(callName, maxLength);
        }
      },

      getMessageById(conversation, messageId) {
        if (messageId) {
          return conversation.messages.find((message) => message.id === messageId);
        }
      },

      unicodeToEmoji(unicode) {
        return unicode.split("-").map((hex) => parseInt(hex, 16)).map((hex) => String.fromCodePoint(hex)).join("");
      },

    },
});

