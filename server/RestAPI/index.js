import { defineStore } from 'pinia';

export const useTeamStore = defineStore({
  id: 'team',
  state: () => ({
    teams: [],
  }),
  actions: {
    async createTeam(teamData) {
      try {
        const response = await fetch('http://localhost:3000/Team', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(teamData),
        });

        if (response.ok) {
          // Handle success
          const newTeam = await response.json();
          this.teams.push(newTeam); // Add the new team to the store
        } else {
          // Handle error
          console.error('Error creating team');
        }
      } catch (error) {
        // Handle network error or other errors
        console.error('Error:', error);
      }
    },
  },
});
export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
      users: [1,2,3,4],

    }),
    actions: {
      async fetchUsers() {
        try {
          const response = await fetch('http://localhost:3000/users');
            
          if (response.ok) {
            const users = await response.json();
            this.users = users; //save user into state
            console.log(users)
          } else {
            console.error('Error fetching users:', response.status);
          }
        } catch (error) {
          console.error('Error:', error);
        }
      },
    },
  });